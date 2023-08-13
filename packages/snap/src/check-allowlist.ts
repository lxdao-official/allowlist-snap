import { OnTransactionHandler } from '@metamask/snaps-types';
import Web3 from 'web3';


// initiate an instance of Web3
const web3 = new Web3('https://linea-goerli.infura.io/v3/e0f8e927116448549412b47e1f12bfe9');
const smartContractAddress = '0x7b6D707583e25afF72DF7f13024F6E3D8C5216C9';

/**
 * Invoke allowlist verify RPC API in allowlist snap.
 *
 * @param addressToVerify - The "to" address of the transaction.
 * @returns The result of allowlist verify RPC API.
 */
export async function checkResult(addressToVerify?: string) {

  const functionSignature = "0x63a9c3d7";

  const encodedParams = web3.eth.abi.encodeParameters(['address'], [addressToVerify]);

  const encoded_data = functionSignature + encodedParams.slice(2);

  const url = 'https://linea-goerli.infura.io/v3/e0f8e927116448549412b47e1f12bfe9';

  const headers = {
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_call',
    params: [
      {
        // from: '0x17c57bD297175e5711Ee3Daf045252B588f3162F',
        to: smartContractAddress,
        gas: '0x10116',
        gasPrice: '0x9502F907',
        value: '',
        data: encoded_data,
      },
      'latest'
    ],
    id: 1
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
    body: body,
  };

  const response = await fetch(url, requestOptions);
  const responseData = await response.json();
  return responseData.result;
}