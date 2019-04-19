import React, {Fragment} from "react";
import {tu} from "../../utils/i18n";
import {injectIntl} from "react-intl";
import { Table } from 'antd';
import { filter, map ,upperFirst} from 'lodash'
import {Client} from "../../services/api";
import {Link} from "react-router-dom";
import {ONE_TRX} from "../../constants";
import {TronLoader} from "../common/loaders";


class Committee extends React.Component {

    constructor() {
        super();
        this.state = {
            committee: [
                {
                    "icon": "",
                    "dec": "committee_dec_1",
                },
                {
                    "icon":"../../images/proposals/proposal_2.png",
                    "dec":"committee_dec_2",
                },
                {
                    "icon":"../../images/proposals/proposal_3.png",
                    "dec":"committee_dec_3",
                },
                {
                    "icon":"../../images/proposals/proposal_4.png",
                    "dec":"committee_dec_4",
                },
            ],
            dataSource:[]
        };
    }

    componentDidMount() {
        this.getChainparameters();
    }

    async getChainparameters() {
        let { tronParameters } = await Client.getChainparameters();
        let EnergyLimitNew   = {key: "getTotalEnergyLimitNew", value: 100000000000};
        tronParameters.splice(19, 0, EnergyLimitNew);
        tronParameters.map(item => {
            switch (item['key']){
                case "getMaintenanceTimeInterval":
                    item.name = 'propose_1';
                break;
                case "getAccountUpgradeCost":
                    item.name = 'propose_2';
                break;
                case "getCreateAccountFee":
                    item.name = 'propose_3';
                break;
                case "getTransactionFee":
                    item.name = 'propose_4';
                break;
                case "getAssetIssueFee":
                    item.name = 'propose_5';
                break;
                case "getWitnessPayPerBlock":
                    item.name = 'propose_6';
                break;
                case "getWitnessStandbyAllowance":
                    item.name = 'propose_7';
                break;
                case "getCreateNewAccountFeeInSystemContract":
                    item.name = 'propose_8';
                break;
                case "getCreateNewAccountBandwidthRate":
                    item.name = 'propose_9';
                break;
                case "getAllowCreationOfContracts":
                    item.name = 'propose_10';
                break;
                case "getRemoveThePowerOfTheGr":
                    item.name = 'propose_11';
                break;
                case "getEnergyFee":
                    item.name = 'propose_12';
                break;
                case "getExchangeCreateFee":
                    item.name = 'propose_13';
                break;
                case "getMaxCpuTimeOfOneTx":
                    item.name = 'propose_14';
                break;
                case "getAllowUpdateAccountName":
                    item.name = 'propose_15';
                break;
                case "getAllowSameTokenName":
                    item.name = 'propose_16';
                break;
                case "getAllowDelegateResource":
                    item.name = 'propose_17';
                break;
                case "getTotalEnergyLimit":
                    item.name = 'propose_18';
                break;
                case "getAllowTvmTransferTrc10":
                    item.name = 'propose_19';
                break;
                case "getTotalEnergyLimitNew":
                    item.name = 'propose_18_1';
                break;
                // case "getTotalEnergyCurrentLimit":
                //     item.name = 'propose_20';
                // break;
                case "getAllowMultiSign":
                    item.name = 'propose_21';
                break;
                case "getAllowAdaptiveEnergy":
                    item.name = 'propose_22';
                break;
                // case "getTotalEnergyTargetLimit":
                //     item.name = 'propose_23';
                // break;
                // case "getTotalEnergyAverageUsage":
                //     item.name = 'propose_24';
                // break;
                case "getUpdateAccountPermissionFee":
                    item.name = 'propose_25';
                break;
                case "getMultiSignFee":
                    item.name = 'propose_26';
                break;
            }
        });
        let tronParametersNew = [];
        tronParameters.map(item => {
            if(item.name){
                tronParametersNew.push(item)
            }
        })

        this.setState({
            dataSource: tronParametersNew
        })
    }

    getColumns() {
        let { intl } = this.props;
        let { dataSource } = this.state;

        const columns = [{
            title: upperFirst(intl.formatMessage({id: 'propose_number'})),
            key: 'index',
            width:'20%',
            render: (text, record, index) => {
                return  '#' + (index)
            }
        }, {
            title: upperFirst(intl.formatMessage({id: 'propose_parameters'})),
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => {
                return <span>
                     {text && intl.formatMessage({id: text})}
                </span>


            }
        },
        {
            title:upperFirst(intl.formatMessage({id: 'propose_current_value'})),
            dataIndex: 'value',
            key: 'value',
            render: (text, record, index) => {
                return  <div>
                    {
                        record.key == 'getMaintenanceTimeInterval' && <div><span>{text / (1000 * 60 * 60)}</span> &nbsp;<span>{
                            intl.formatMessage({id: "propose_hour"})
                        }</span></div>
                    }
                    {
                        record.key == 'getAccountUpgradeCost' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getCreateAccountFee' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getTransactionFee' && <div><span>{text}</span> &nbsp;<span>Sun/byte</span></div>
                    }
                    {
                        record.key == 'getAssetIssueFee' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getWitnessPayPerBlock' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getWitnessStandbyAllowance' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getCreateNewAccountFeeInSystemContract' && <div><span>{text / ONE_TRX}</span> &nbsp;<span>TRX</span></div>
                    }
                    {
                        record.key == 'getCreateNewAccountBandwidthRate' && <div><span>{text}</span> &nbsp;<span>bandwith/byte</span></div>
                    }
                    {
                        record.key == 'getAllowCreationOfContracts' && <div>
                            {
                                <span>{tu('propose_activate')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getRemoveThePowerOfTheGr' && <div>
                            {
                                <span>{tu('propose_finished')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getEnergyFee' && <div>
                            {
                                <span>{text / ONE_TRX} TRX</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getExchangeCreateFee' && <div>
                            {
                                <span>{text / ONE_TRX} TRX</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getMaxCpuTimeOfOneTx' && <div>
                            {
                                <span>{text} ms</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowUpdateAccountName' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowSameTokenName' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                    <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowDelegateResource' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                    <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }

                    {
                        record.key == 'getTotalEnergyLimit' && <div>
                            {
                                <span>{text}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowTvmTransferTrc10' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                    <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getTotalEnergyLimitNew' && <div>
                            {
                                <span>{text}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getTotalEnergyCurrentLimit' && <div>
                            {
                                <span>{text}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowMultiSign' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                    <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getAllowAdaptiveEnergy' && <div>
                            {
                                text? <span>{tu('propose_allowed')}</span>:
                                    <span>{tu('propose_not_allowed')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getTotalEnergyTargetLimit' && <div>
                                <span>{text}</span>/
                                <span>{tu('propose_minute')}</span>
                        </div>
                    }
                    {
                        record.key == 'getTotalEnergyAverageUsage' && <div>
                            {
                                text?<span><span>{text}</span>/<span>{tu('propose_minute')}</span></span>:
                                    <span>{tu('propose_unactivate')}</span>
                            }
                        </div>
                    }
                    {
                        record.key == 'getUpdateAccountPermissionFee' && <div>
                            <span>{text / ONE_TRX}</span> &nbsp;
                            <span>TRX</span></div>
                    }
                    {
                        record.key == 'getMultiSignFee' && <div>
                            <span>{text / ONE_TRX}</span> &nbsp;
                            <span>TRX</span></div>
                    }
                </div>

            }
        }];

        return (
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                bordered={false}
                rowKey={(record, index) => {
                    return index
                }}
            />
        )
    }



    render() {
        let { committee } = this.state;
        return (
            <main className="container header-overlap committee">
                <div className="row">
                    <div className="col-12 committee-title">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <img src={require("../../images/proposals/proposal_1.png")}  className="m-auto"/>
                            <p className="mt-4 p-2">{tu("committee_dec_1")}</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <img src={require("../../images/proposals/proposal_2.png")}  className="m-auto"/>
                            <p className="mt-4 p-2">{tu("committee_dec_2")}</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <img src={require("../../images/proposals/proposal_3.png")}  className="m-auto"/>
                            <p className="mt-4 p-2">{tu("committee_dec_3")}</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <img src={require("../../images/proposals/proposal_4.png")}  className="m-auto"/>
                            <p className="mt-4 p-2">{tu("committee_dec_4")}</p>
                        </div>
                    </div>
                    <div className="m-auto">
                        <Link to="/proposals">
                            <button className="btn btn-danger mt-4">
                                {tu("get_committee_proposal")}
                            </button>
                        </Link>
                    </div>
                </div>
                <hr style={{marginTop:40,marginBottom:40}}/>
                <div className="network-parameters pb-4">
                    <h4 className="pt-4">
                        <span className="text-uppercase">
                            <span>{tu('TRON_network_parameters')}</span>
                        </span> &nbsp;&nbsp;
                    </h4>
                    <div className="mt-4">
                        {this.getColumns()}
                    </div>
                </div>
            </main>
        );
    }
}


export default injectIntl(Committee);
