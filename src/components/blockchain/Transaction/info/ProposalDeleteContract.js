import React, {Fragment, useState, useEffect} from "react";
import {tu} from "../../../../utils/i18n";
import { Icon, Tooltip } from "antd";
import { upperFirst } from "lodash";
import {AddressLink, ExternalLink, ContractLink, TokenTRC20Link} from "../../../common/Links";
import {TRXPrice} from "../../../common/Price";
import {ONE_TRX, CONTRACT_ADDRESS_USDT, CONTRACT_ADDRESS_WIN, CONTRACT_ADDRESS_GGC, TRADINGMAP, SUNWEBCONFIG, IS_SUNNET} from "../../../../constants";
import rebuildList from "../../../../utils/rebuildList";
import BandwidthUsage from './common/BandwidthUsage'
import SignList from "./common/SignList";
import {TransationTitle} from './common/Title'
import {injectIntl} from "react-intl";
import Field from "../../../tools/TransactionViewer/Field";

export default function ProposalDeleteContract({contract}){
  return(
    <Fragment>
      <TransationTitle contractType={contract.contractType}></TransationTitle>
      <div className="table-responsive">
      <table className="table">
          <tbody>
          <Field label="initiate_address"><AddressLink address={contract['owner_address']}/></Field>
          <Field label="proposal_ID">{contract.proposal_id}</Field>
          {
              contract['parameters'] && contract['parameters'].map((item)=>{
                return <tr>
                  <th>{tu('proposal_content')}</th>
                  <td>{tu(`propose_${item.key}`)}</td>
                </tr>
              })
          }
          {/* <Field label="vote_proposal">{contract.is_add_approval ? tu('vote_yes') : tu('vote_no')}</Field> */}
          {JSON.stringify(contract.cost) != "{}" && (
            <Field label="consume_bandwidth">
              <BandwidthUsage cost={contract.cost} />
            </Field>
          )}
          {contract.signature_addresses && contract.signature_addresses.length > 1 && (
            <Field label="signature_list" tip={true} text={tu('only_show_sinatures')}>
              <SignList signList={contract.signature_addresses} />
            </Field>
          )}
          </tbody>
      </table>
      </div>
    </Fragment>
  )
}
