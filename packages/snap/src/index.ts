import { OnTransactionHandler } from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';
import { checkResult } from './check-allowlist';

function stringToBool(str: string): boolean {
  if (str[str.length - 1].includes('1')) return true;
  if (str[str.length - 1].includes('0')) return false;
  throw new Error('Invalid string representation of boolean');
}

async function checkValue(addressToVerify: string) {
  const result = await checkResult(addressToVerify);
  console.log('result: ', result);
  const boolResult = stringToBool(result);
  return boolResult;
}

// Handle outgoing transactions.
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  const boolResult = await checkValue(transaction.to as string);

  if (boolResult)
    return {
      content: panel([
        heading('Allowlist Tips'),
        text(
          `The "to" address (**${
            transaction.to as string
          }**) of this transaction is in the allowlist.`
          // `**${result}**`
        ),
      ]),
    };
  else
    return {
      content: panel([
        heading('Allowlist Tips'),
        text(
          `The "to" address (**${
            transaction.to as string
          }**) of this transaction is NOT in the allowlist.`
        ),
      ]),
    };
};
