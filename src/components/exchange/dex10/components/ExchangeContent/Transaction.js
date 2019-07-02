import React, {Component} from "react";
import {Button, Form, Slider} from "antd";
import {withRouter} from "react-router";
import {Client} from "../../../../../services/api";
import SweetAlert from "react-bootstrap-sweetalert";
import {tu} from "../../../../../utils/i18n";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {ONE_TRX} from "../../../../../constants";
import {find} from "lodash";
import Lockr from "lockr";
import {byteArray2hexStr} from "@tronscan/client/src/utils/bytes"
import {stringToBytes} from "@tronscan/client/src/lib/code";
import NumericInput from "./NumericInput";
import {withTronWeb} from "../../../../../utils/tronWeb";
import {decode58Check} from "@tronscan/client/src/utils/crypto";
import {transactionResultManager} from "../../../../../utils/tron";

const FormItem = Form.Item;
const marks = {
  0: "",
  25: "",
  50: "",
  75: "",
  100: ""
};

function formatter(value) {
  return `${value}%`;
}

@withTronWeb
class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: null,
      firstBalance: {},
      secondBalance: {},
      trs_proportion: 0,
      timer: null,
      buy_amount: 0,
      sell_amount: 0
    };
  }


  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    const {
      selectStatus,
      currentWallet,
      exchangeData,
      activeLanguage
    } = this.props;
    if (
        prevProps.currentWallet != currentWallet ||
        prevProps.exchangeData != exchangeData ||
        prevProps.activeLanguage != activeLanguage
    ) {
      if (currentWallet != null) {
        this.getBalance()
        clearInterval(this.state.timer);
        const timer = setInterval(() => {
          this.getBalance()
        }, 10000);
        this.setState({timer})
      }
    }
    if (prevProps.exchangeData.exchange_id != exchangeData.exchange_id) {
      this.props.form.resetFields();
    }
  }

  componentWillUnmount() {
    const {timer} = this.state;
    timer && clearInterval(timer);
  }

  getBalance() {
    const {
      selectStatus,
      currentWallet,
      exchangeData,
      activeLanguage
    } = this.props;

    if (currentWallet != null) {
      const first = find(currentWallet.tokenBalances, function (o) {
        return exchangeData.first_token_id === o.map_token_name;
      }) || {balance: 0, name: exchangeData.first_token_id};
      const second = find(currentWallet.tokenBalances, function (o) {
        return exchangeData.second_token_id === o.map_token_name;
      }) || {balance: 0, name: exchangeData.second_token_id};
      this.setState({firstBalance: first, secondBalance: second});
    } else {
      this.setState({firstBalance: {}, secondBalance: {}});
    }
  }

  handleSubmitBuy = e => {
    let {account, currentWallet, exchangeData} = this.props;
    const {buy_amount} = this.state
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(
        ["first_quant_buy"],
        (err, values) => {
          values.second_quant_buy = buy_amount
          if (!err) {
            let token_id =
                exchangeData.second_token_id == "TRX"
                    ? "_"
                    : exchangeData.second_token_id;
            let quant =
                exchangeData.second_token_id == "TRX"
                    ? values.second_quant_buy * ONE_TRX
                    : values.second_quant_buy;
            let expected =
                exchangeData.first_token_id == "TRX"
                    ? 1 / ONE_TRX
                    : 1;

            this.exchangeTransaction(
                exchangeData.exchange_id,
                token_id,
                quant,
                expected,
                values
            );
          }
        }
    );
  };

  handleSubmitSell = e => {
    let {account, currentWallet, exchangeData} = this.props;
    const {sell_amount} = this.state
    e.preventDefault();
    this.props.form.validateFields(
        ["first_quant_sell"],
        (err, values) => {
          values.second_quant_buy = sell_amount
          if (!err) {
            let token_id =
                exchangeData.first_token_id == "TRX"
                    ? "_"
                    : exchangeData.map_token_id;
            let quant =
                exchangeData.first_token_id == "TRX"
                    ? parseFloat(values.first_quant_sell) * ONE_TRX
                    : parseFloat(values.first_quant_sell) * Math.pow(10, exchangeData.map_token_precision);
            let expected =
                exchangeData.second_token_id == "TRX"
                    ? 1
                    : 1;
            this.exchangeTransaction(
                exchangeData.exchange_id,
                token_id,
                quant,
                expected,
                values
            );
          }
        }
    );
  };

  exchangeTransaction = async (
      exchangeId,
      tokenId,
      quant,
      expected,
      values
  ) => {
    let {account, currentWallet, exchangeData, intl, walletType} = this.props;
    let res, transactionHash;

    if (Lockr.get("islogin") || this.props.walletType.type === "ACCOUNT_LEDGER" || this.props.walletType.type === "ACCOUNT_TRONLINK") {
      const tronWebLedger = this.props.tronWeb();
      const {tronWeb} = this.props.account;

      try {
        if (this.props.walletType.type === "ACCOUNT_LEDGER") {

          const unSignTransaction = await tronWebLedger.transactionBuilder.tradeExchangeTokens(exchangeId, tokenId, quant, expected, walletType.address);
          const {result} = await transactionResultManager(unSignTransaction, tronWebLedger);
          res = result;
        }
        if (this.props.walletType.type === "ACCOUNT_TRONLINK") {
          const unSignTransaction = await tronWeb.transactionBuilder.tradeExchangeTokens(exchangeId, tokenId, quant, expected, tronWeb.defaultAddress.hex);
          const signedTransaction = await tronWeb.trx.sign(unSignTransaction, tronWeb.defaultPrivateKey);
          const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
          transactionHash = signedTransaction.txID;
          res = result;
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      let {success, code, transaction, message} = await Client.transactionExchange(currentWallet.address, exchangeId, tokenId, quant, expected)(account.key);
      transactionHash = transaction.hash
      res = success
    }


    if (res) {
      this.props.form.resetFields();
      this.setState({
        modal: (
            <SweetAlert
                success
                title={tu("transaction_success")}
                onConfirm={this.hideModal}
            >
              {tu("transaction_success_message")}
            </SweetAlert>
        )
      });
      // await Client.exchange({
      //   creatorAddress: currentWallet.address,
      //   trx_hash: transactionHash,
      //   exchangeID: exchangeData.exchange_id,
      //   first_token_id: exchangeData.first_token_id,
      //   first_token_quant: values.first_quant_buy
      //     ? parseFloat(values.first_quant_buy)
      //     : parseFloat(values.first_quant_sell),
      //   second_token_id: exchangeData.second_token_id,
      //   second_token_quant: values.second_quant_buy
      //     ? parseFloat(values.second_quant_buy)
      //     : parseFloat(values.second_quant_sell),
      //   price: exchangeData.price
      // });
    } else {
      this.setState({
        modal: (
            <SweetAlert
                danger
                title={tu("transaction_error")}
                onConfirm={this.hideModal}
            >
              {tu("transaction_error_message")}
              <br/>
              <i className="fas fa-book-open"/>
              <a
                  href={
                    intl.locale == "zh"
                        ? "https://coin.top/production/js/20181130053419.pdf"
                        : "https://coin.top/production/js/20181130053308.pdf"
                  }
                  target="_blank"
                  style={{marginLeft: 5}}
              >
                {tu("How_to_trade_on_DEX")}
              </a>
            </SweetAlert>
        )
      });
    }
  };

  hideModal = () => {
    this.setState({modal: null});
  };
  handleSecondValueBuy = async value => {
    let {exchangeData} = this.props;
    // this.props.form.setFieldsValue({
    //   second_quant_buy:
    //     exchangeData.second_token_id == "TRX"
    //       ? parseFloat(value * 1.01 * exchangeData.price).toFixed(6)
    //       : value * exchangeData.price * 1.01
    // });
    this.setState({
      buy_amount: exchangeData.second_token_id == "TRX"
          ? parseFloat(value * 1.05 * exchangeData.price).toFixed(6)
          : value * 1.05 * exchangeData.price
    })
  };

  handleSecondValueSell = async value => {
    let {exchangeData} = this.props;
    // this.props.form.setFieldsValue({
    //   second_quant_sell:
    //     exchangeData.second_token_id == "TRX"
    //       ? parseFloat(value * 0.99 * exchangeData.price).toFixed(6)
    //       : value * exchangeData.price * 0.99
    // });
    // const {buyTokenQuant} = await Client20.getExchangeCalc({
    //   exchangeID: exchangeData.exchange_id,
    //   sell: value,
    //   sellID: exchangeData.first_token_id
    // })
    this.setState({
      sell_amount:
          exchangeData.second_token_id == "TRX"
              ? parseFloat(value * 0.95 * exchangeData.price).toFixed(6)
              : parseFloat(value * exchangeData.price * 0.95)
    });
  };

  slideChangebuy(value) {
    clearTimeout(this.time)
    this.time = setTimeout(() => {
      const {secondBalance, buy_amount} = this.state
      const {exchangeData} = this.props
      const buyMoney = ((parseInt(secondBalance.balance * value / 100)) / ONE_TRX);
      const buyTokenQuant = parseInt((buyMoney / exchangeData.price) * 0.95)
      // Client20.getExchangeCalc({
      //     exchangeID: exchangeData.exchange_id,
      //     sell: buyMoney,
      //     sellID: exchangeData.second_token_id
      // }).then(({buyTokenQuant}) => {
      //
      //
      // })
      this.props.form.setFieldsValue({
        first_quant_buy: buyTokenQuant,
        second_quant_sell: buyMoney
      })
      this.setState({buy_amount: buyMoney})
    }, 500)
  }

  slideChangesell = (value) => {
    clearTimeout(this.time)
    this.time = setTimeout(() => {
      const {firstBalance} = this.state
      const {exchangeData} = this.props
      const sellMoney = parseInt(firstBalance.balance * value / 100)
      // Client20.getExchangeCalc({
      //     exchangeID: exchangeData.exchange_id,
      //     sell: sellMoney,
      //     sellID: exchangeData.first_token_id
      // }).then(({buyTokenQuant}) => {
      //
      // })

      const buyTokenQuant = parseFloat(sellMoney * 0.95 * exchangeData.price).toFixed(6)
      this.props.form.setFieldsValue({
        second_quant_sell: buyTokenQuant,
        first_quant_sell: sellMoney
      })
      this.setState({sell_amount: buyTokenQuant})
    }, 500)
  }

  validateBuyBanlace = (rule, value, callback) => {
    const {intl, exchangeData} = this.props
    if (value * exchangeData.price > this.state.secondBalance.balance) {
      callback(intl.formatMessage({id: "trc20_balance_tip"}))
    } else {
      callback()
    }
  }

  validateSellBanlace = (rule, value, callback) => {
    const {intl} = this.props
    if (value > this.state.firstBalance.balance) {
      callback(intl.formatMessage({id: "trc20_balance_tip"}))
    } else {
      callback()
    }
  }


  render() {
    const {getFieldDecorator} = this.props.form;
    let {exchangeData, account, currentWallet, intl} = this.props;
    let {modal, firstBalance, secondBalance, buy_amount, sell_amount} = this.state;

    return (
        <div className="exchange__transaction d-flex">
          {modal}
          {/* 买入模块 */}
          <div className="exchange__transaction__item mr-2 p-3">
            <h5 className="mr-3">
              {exchangeData.exchange_name} ≈{" "}
              {exchangeData.price && (
                  <span>{Number(exchangeData.price).toFixed(6)}</span>
              )}
              {/* { (secondBalance&& secondBalance.name)&&<span className=" text-sm d-block">{tu("TxAvailable")} {secondBalance.balance+' '+secondBalance.name}</span>} */}
            </h5>
            <hr/>
            <Form layout="vertical" onSubmit={this.handleSubmitBuy}>
              <FormItem>
                <NumericInput
                    addonBefore={intl.formatMessage({
                      id: "trc20_price"
                    })}
                    addonAfter={exchangeData.second_token_id}
                    size="large"
                    type="text"
                    disabled
                    value={Number(exchangeData.price || 0).toFixed(6)}
                />
              </FormItem>
              <FormItem>
                {getFieldDecorator("first_quant_buy", {
                  rules: [
                    {
                      required: true,
                      message: intl.formatMessage({
                        id: "enter_the_trading_amount"
                      })
                    },
                    {validator: this.validateBuyBanlace}
                  ]
                })(
                    <NumericInput
                        addonBefore={intl.formatMessage({
                          id: "BUY"
                        })}
                        addonAfter={exchangeData.first_token_id}
                        placeholder={intl.formatMessage({
                          id: "enter_the_trading_amount"
                        })}
                        size="large"
                        type="text"
                        precision={exchangeData.map_token_precision}
                        onChange={this.handleSecondValueBuy}
                    />
                )}
              </FormItem>
              {/* <FormItem>
              {getFieldDecorator("second_quant_buy", {
                rules: [
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "enter_the_trading_amount"
                    })
                  }
                ]
              })(
                <NumericInput
                  addonBefore={intl.formatMessage({
                    id: "estimated_cost"
                  })}
                  addonAfter={exchangeData.second_token_id}
                  placeholder={intl.formatMessage({
                    id: "enter_the_trading_amount"
                  })}
                  size="large"
                  type="text"
                />
              )}
            </FormItem> */}
              <div className="mb-3">
                {<span
                    className=" text-sm d-block">{tu("TxAvailable")} {(secondBalance && secondBalance.name) ? secondBalance.map_amount + " " + secondBalance.map_token_name : 0}</span>}
              </div>
              <div className="mb-3">
                <Slider
                    marks={marks}
                    //   value={trs_proportion}
                    defaultValue={0}
                    tipFormatter={formatter}
                    disabled={!account.address}
                    onChange={(value) => this.slideChangebuy(value)}
                />
              </div>
              <div className="d-flex justify-content-between tran-amount mb-3">
                <p className="text">
                  {tu("estimated_cost")}：{buy_amount}
                </p>
                <b className="text-lg">{exchangeData.second_token_id}</b>
              </div>

              {/* <FormItem> */}
              <Button
                  type="primary"
                  className="success"
                  size="large"
                  htmlType="submit"
                  disabled={!account.address}
              >
                {tu("BUY")} {exchangeData.first_token_id}
              </Button>
              {/* </FormItem> */}
            </Form>
          </div>

          {/* 卖出模块 */}
          <div className="exchange__transaction__item  p-3">
            <h5 className="mr-3">
              {exchangeData.exchange_name} ≈{" "}
              {exchangeData.price && (
                  <span>{Number(exchangeData.price).toFixed(6)}</span>
              )}
              {/* {firstBalance && firstBalance.name && (
              <span className="text-sm d-block">
                {tu("TxAvailable")}{" "}
                {firstBalance.balance + " " + firstBalance.name}
              </span>
            )} */}
            </h5>
            <hr/>
            <Form layout="vertical" onSubmit={this.handleSubmitSell}>
              <FormItem>
                <NumericInput
                    addonBefore={intl.formatMessage({
                      id: "trc20_price"
                    })}
                    addonAfter={exchangeData.second_token_id}
                    size="large"
                    type="text"
                    disabled
                    value={Number(exchangeData.price || 0).toFixed(6)}
                />
              </FormItem>
              <FormItem>
                {getFieldDecorator("first_quant_sell", {
                  rules: [
                    {
                      required: true,
                      message: intl.formatMessage({
                        id: "enter_the_trading_amount"
                      })
                    },
                    {validator: this.validateSellBanlace}
                  ]
                })(
                    <NumericInput
                        addonBefore={intl.formatMessage({
                          id: "SELL"
                        })}
                        addonAfter={exchangeData.first_token_id}
                        placeholder={intl.formatMessage({
                          id: "enter_the_trading_amount"
                        })}
                        size="large"
                        type="text"
                        onChange={this.handleSecondValueSell}
                    />
                )}
              </FormItem>
              {/* <FormItem
              label={
                <span>
                  {tu("estimated_revenue")}
                  <span className="tx-question-mark">
                    <QuestionMark text="slightly_revenue" />
                  </span>
                </span>
              }
            > */}
              {/* <FormItem>
              {getFieldDecorator("second_quant_sell", {
                rules: [
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "enter_the_trading_amount"
                    })
                  }
                ]
              })(
                <NumericInput
                  addonBefore={intl.formatMessage({
                    id: "estimated_revenue"
                  })}
                  addonAfter={exchangeData.second_token_id}
                  placeholder={intl.formatMessage({
                    id: "enter_the_trading_amount"
                  })}
                  size="large"
                  type="text"
                />
              )}
            </FormItem> */}
              <div className="mb-3">
                {(
                    <span className="text-sm d-block">
                {tu("TxAvailable")}{" "}
                      {((firstBalance && firstBalance.map_amount) ? firstBalance.map_amount : 0) + " " + (exchangeData.map_token_name ? exchangeData.map_token_name : "")}
                </span>
                )}
              </div>
              <div className="mb-3">
                <Slider
                    marks={marks}
                    defaultValue={0}
                    tipFormatter={formatter}
                    disabled={!account.address}
                    onChange={this.slideChangesell}
                />
              </div>
              <div className="d-flex justify-content-between tran-amount mb-3">
                <p className="text">
                  {tu("estimated_revenue")}：{sell_amount}
                </p>
                <b className="text-lg">{exchangeData.second_token_id}</b>
              </div>
              {/* <FormItem> */}
              <Button
                  type="primary"
                  className="warning"
                  size="large"
                  htmlType="submit"
                  disabled={!account.address}
              >
                {tu("SELL")} {exchangeData.first_token_id}
              </Button>
              {/* </FormItem> */}
            </Form>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchangeData: state.exchange.data,
    selectStatus: state.exchange.status,
    account: state.app.account,
    walletType: state.app.wallet,
    currentWallet: state.wallet.current,
    activeLanguage: state.app.activeLanguage
  };
}

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(Form.create()(withRouter(Transaction))));
