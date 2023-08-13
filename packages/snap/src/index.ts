import { OnTransactionHandler } from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import { checkResult } from './check-allowlist';
import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/17cb760d66f944d383dd3e6d6129aa13');


function stringToBool(str: string): boolean {

  if (str[str.length - 1].includes("1")) return true;

  if (str[str.length - 1].includes("0")) return false;
  console.log(str);
  throw new Error("Invalid string representation of boolean");
}

async function checkValue(addressToVerify: string) {
  const result = await checkResult(addressToVerify);

  const boolResult = stringToBool(result);
  return boolResult
}

// Handle outgoing transactions.
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {



  // const encoded_data = web3.eth.abi.encodeParameters(['address'], [transaction.to]);
  // const result = await checkResult(encoded_data);
  const boolResult = await checkValue(transaction.to as string);

  if (boolResult) return {
    content: panel([
      heading('Transaction insights snap'),
      text(
        `The "to" address of this transaction is trustworthy.`,
        // `**${result}%**`
      ),
    ]),
  };
  else return {
    content: panel([
      heading('Transaction insights snap'),
      text(
        `The "to" address of this transaction is untrustworthy`,
      ),
    ]),
  };

};