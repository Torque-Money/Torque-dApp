/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { WETH, WETHInterface } from "../WETH";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class WETH__factory {
  static readonly abi = _abi;
  static createInterface(): WETHInterface {
    return new utils.Interface(_abi) as WETHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH {
    return new Contract(address, _abi, signerOrProvider) as WETH;
  }
}