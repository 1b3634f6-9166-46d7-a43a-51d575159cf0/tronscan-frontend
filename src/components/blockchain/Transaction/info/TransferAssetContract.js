/*
 * Auther:xueyuanying
 * Date:2019-12-25
 */
import React, { Fragment } from "react";
import { tu } from "../../../../utils/i18n";
import Field from "../../../tools/TransactionViewer/Field";
import { AddressLink } from "../../../common/Links";
import { TRXPrice } from "../../../common/Price";
import { ONE_TRX } from "../../../../constants";
import { NameWithId } from "../../../common/names";
import rebuildList from "../../../../utils/rebuildList";
import { TransationTitle } from "./common/Title";
import BandwidthUsage from "./common/BandwidthUsage";
import SignList from "./common/SignList";

class TransferAssetContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { contract } = this.props;
    let TokenIDList = [];
    let tokenIdData;
    TokenIDList.push(contract);
    if (TokenIDList) {
      tokenIdData = rebuildList(TokenIDList, "asset_name", "amount")[0];
    }
    let signList = contract.signature_addresses || [];

    return (
      <Fragment>
        <TransationTitle contractType={contract.contractType}></TransationTitle>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <Field label="from">
                <AddressLink address={contract["owner_address"]}>
                  {contract["owner_address"]}
                </AddressLink>
              </Field>
              <Field label="to">
                <AddressLink address={contract["to_address"]}>
                  {contract["to_address"]}
                </AddressLink>
              </Field>
              <Field label="amount">{tokenIdData.map_amount || 0}</Field>
              <Field label="trc20_token_id">
                {contract.map_token_id || "-"}
              </Field>
              <Field label="token">
                <NameWithId
                  value={contract}
                  type="abbr"
                  notamount
                  totoken
                  tokenid={false}
                />
              </Field>
              {JSON.stringify(contract.cost) != "{}" && (
                <Field label="consume_bandwidth">
                  <BandwidthUsage cost={contract.cost} />
                </Field>
              )}
              {signList && signList.length > 1 && (
                <Field label="signature_list">
                  <SignList signList={signList} />
                </Field>
              )}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default TransferAssetContract;
