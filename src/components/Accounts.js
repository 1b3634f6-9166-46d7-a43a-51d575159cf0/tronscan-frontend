import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {loadAccounts} from "../actions/app";
import {tu} from "../utils/i18n";
import {FormattedNumber, injectIntl} from "react-intl";
import {filter, upperFirst} from "lodash";
import {AddressLink} from "./common/Links";
import {CIRCULATING_SUPPLY, ONE_TRX} from "../constants";
import {TRXPrice} from "./common/Price";
import SmartTable from "./common/SmartTable.js"
import {TronLoader} from "./common/loaders";
import {QuestionMark} from "./common/QuestionMark";
import xhr from "axios/index";
import {Client} from "../services/api";
import {Tooltip,Icon} from 'antd'


class Accounts extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      searchString: "",
      accounts: [],
      total: 0,
      exchangeFlag: [
        {name: 'binance', addressList: {
          Cold: ['TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9', 'TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb'],
          Hot: ['TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX']}
        }
      ]
    }
  }

  componentDidMount() {
    this.loadAccounts();
  }

  loadAccounts = async (page = 1, pageSize = 20) => {
    // const { exchangeFlag } = this.state

    this.setState({loading: true});

    let {accounts, total, rangeTotal,contractMap} = await Client.getAccounts({
      sort: '-balance',
      limit: pageSize,
      start: (page - 1) * pageSize
    })
    accounts.forEach(item=>{
      if(contractMap){
          contractMap[item.address]? (item.ownerIsContract = true) :  (item.ownerIsContract = false)
      }
    })
    this.setState({
      loading: false,
      accounts: accounts,
      total: total,
      rangeTotal:rangeTotal,
    });
  };

  componentDidUpdate() {
    //checkPageChanged(this, this.loadAccounts);
  }

  onChange = (page, pageSize) => {
    this.loadAccounts(page, pageSize);
  };
  onSearchFieldChangeHandler = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  filteredAccounts() {
    let {accounts} = this.props;
    let {searchString} = this.state;

    searchString = searchString.toUpperCase();

    if (searchString.length > 0) {
      accounts = filter(accounts, a => a.address.toUpperCase().indexOf(searchString) !== -1);
    }

    return accounts;
  }

  renderAccounts() {

    let {accounts} = this.state;

    if (accounts.length === 0) {
      return;
    }

    return (
        <Fragment>
          <div className="table-responsive">
            <table className="table table-striped m-0">
              <thead className="thead-dark">
              <tr>
                <th>{tu("address")}</th>
                <th className="d-md-table-cell">{tu("supply")}</th>
                <th className="d-md-table-cell">{tu("power")}</th>
                <th>{tu("balance")}</th>
              </tr>
              </thead>
              <tbody>
              {
                accounts.map((account, index) => (
                    <tr key={account.address}>
                      <th>
                        <AddressLink address={account.address}/>
                      </th>
                      <td className="d-md-table-cell text-nowrap">
                        <FormattedNumber
                            value={(((account.balance / ONE_TRX) / CIRCULATING_SUPPLY) * 100)}
                            minimumFractionDigits={8}
                            maximumFractionDigits={8}
                        /> %
                      </td>
                      <td className="text-nowrap d-md-table-cell">
                        <FormattedNumber value={account.power / ONE_TRX}/>
                      </td>
                      <td className="text-nowrap">
                        <TRXPrice amount={account.balance / ONE_TRX}/>
                      </td>
                    </tr>
                ))
              }
              </tbody>
            </table>
          </div>

        </Fragment>
    )
  }

  customizedColumn = () => {
    let {intl} = this.props;
    let column = [
      {
        title: upperFirst(intl.formatMessage({id: 'address'})),
        dataIndex: 'address',
        key: 'address',
        align: 'left',
        className: 'ant_table',
        width: '40%',
        render: (text, record, index) => {
          return <span className="d-flex">
          {/*  Distinguish between contract and ordinary address */}
          {record.ownerIsContract? (
            <span className="d-flex">
              <Tooltip
                placement="top"
                title={upperFirst(
                    intl.formatMessage({
                    id: "transfersDetailContractAddress"
                    })
                )}
                >
                <Icon
                    type="file-text"
                    style={{
                    verticalAlign: 0,
                    color: "#77838f",
                    lineHeight: 1.4
                    }}
                />
                </Tooltip>
                <AddressLink address={text} isContract={true}/>
            </span>
          ) :
            <AddressLink address={text}/>
          }
        </span>
          // return record.accountType == 2  contract old judge
        }
      },
      {
        title: 'Name Tag',
        dataIndex: 'addressTag',
        key: 'addressTag',
        align: 'left',
        render: (text, record, index) => {
            return <span style={{whiteSpace:'nowrap'}}> {record.addressTag?record.addressTag:''} </span>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'supply'})),
        dataIndex: 'balance',
        key: 'supply',
        align: 'left',
        className: 'ant_table',
        // width: '12%',
        render: (text, record, index) => {
          return <div><FormattedNumber
              value={(((parseInt(text) / ONE_TRX) / CIRCULATING_SUPPLY) * 100)}
              minimumFractionDigits={8}
              maximumFractionDigits={8}
          /> %</div>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'power'})),
        dataIndex: 'power',
        key: 'power',
        align: 'center',
        // width: '15%',
        render: (text, record, index) => {
          return <FormattedNumber value={parseInt(text) / ONE_TRX}/>
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'balance'})),
        dataIndex: 'balance',
        key: 'balance',
        align: 'right',
        className: 'ant_table',
        // width: '15%',
        render: (text, record, index) => {
          return <TRXPrice amount={parseInt(text) / ONE_TRX}/>
        }
      }
    ];
    return column;
  }

  render() {

    let {match, intl} = this.props;
    let {total, loading, rangeTotal = 0, accounts} = this.state;
    let column = this.customizedColumn();
    let tableInfo = intl.formatMessage({id: 'view_total'}) + ' ' + rangeTotal + ' ' + intl.formatMessage({id: 'account_unit'}) + '<br/>(' + intl.formatMessage({id: 'table_info_big'}) + ')';
    let tableInfoTip = intl.formatMessage({id: 'view_total'}) + ' ' + rangeTotal + ' ' + intl.formatMessage({id: 'table_info_account_tip2'});
      return (
        <main className="container header-overlap pb-3 token_black">
          <div className="row">
            <div className="col-md-12">
              <div className="card h-100 text-center widget-icon accout_unit">
                {/* <WidgetIcon className="fa fa-users text-secondary"/> */}
                <div className="card-body">
                  <h3 className="text-primary">
                    <FormattedNumber value={rangeTotal}/>
                  </h3>
                  {tu("total_accounts")}
                </div>
              </div>
            </div>

          </div>
          {loading && <div className="loading-style"><TronLoader/></div>}
          <div className="row mt-2">
            <div className="col-md-12 table_pos">
              {total ?<div className="table_pos_info d-none d-md-block" style={{left: 'auto'}}>
                      <div>{tu('view_total')} {rangeTotal} {tu('account_unit')} 
                        {/* <QuestionMark placement="top" info={tableInfoTip} ></QuestionMark> */}
                          <br/>
                          {rangeTotal>10000? <span>({tu('table_info_big1')}10000{tu('table_info_big2')})</span>:''}
                      </div>
              </div> : ''}
              <SmartTable bordered={true} loading={loading} column={column} data={accounts} total={total}
                          onPageChange={(page, pageSize) => {
                            this.loadAccounts(page, pageSize)
                          }}/>
            </div>
          </div>
        </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.app.accounts,
  };
}

const mapDispatchToProps = {
  loadAccounts,
};


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Accounts))
