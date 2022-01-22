/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Converter, ConverterInterface } from "../Converter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract UniswapV2Router02",
        name: "router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn_",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut_",
        type: "address",
      },
    ],
    name: "maxAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut_",
        type: "uint256",
      },
    ],
    name: "minAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract UniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract UniswapV2Router02",
        name: "router_",
        type: "address",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn_",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut_",
        type: "address",
      },
    ],
    name: "swapMaxOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610e67380380610e6783398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b610d7b806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c0d786551161005b578063c0d78655146100f5578063d6e3777714610108578063f2fde38b1461011b578063f887ea401461012e57600080fd5b806305c0d09a1461008d578063715018a6146100b35780638da5cb5b146100bd578063959de0bc146100e2575b600080fd5b6100a061009b366004610a11565b610141565b6040519081526020015b60405180910390f35b6100bb6102ae565b005b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100aa565b6100a06100f0366004610a11565b6102ed565b6100bb610103366004610a53565b6103ca565b6100a0610116366004610a70565b610416565b6100bb610129366004610a53565b61052d565b6001546100ca906001600160a01b031681565b60408051600280825260608201835260009283929190602083019080368337019050509050848160008151811061017a5761017a610ac7565b60200260200101906001600160a01b031690816001600160a01b03168152505082816001815181106101ae576101ae610ac7565b6001600160a01b0392831660209182029290920101526101d29086163330876105c8565b6001546101ec906001600160a01b03878116911686610639565b6001546000906001600160a01b03166338ed17398683853361020f426001610add565b6040518663ffffffff1660e01b815260040161022f959493929190610b47565b600060405180830381600087803b15801561024957600080fd5b505af115801561025d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102859190810190610b83565b60018151811061029757610297610ac7565b6020026020010151905080925050505b9392505050565b6000546001600160a01b031633146102e15760405162461bcd60e51b81526004016102d890610c41565b60405180910390fd5b6102eb6000610762565b565b60408051600280825260608201835260009283929190602083019080368337019050509050848160008151811061032657610326610ac7565b60200260200101906001600160a01b031690816001600160a01b031681525050828160018151811061035a5761035a610ac7565b6001600160a01b03928316602091820292909201015260015460405163d06ca61f60e01b8152600092919091169063d06ca61f9061039e9088908690600401610c76565b60006040518083038186803b1580156103b657600080fd5b505afa15801561025d573d6000803e3d6000fd5b6000546001600160a01b031633146103f45760405162461bcd60e51b81526004016102d890610c41565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60408051600280825260608201835260009283929190602083019080368337019050509050848160008151811061044f5761044f610ac7565b60200260200101906001600160a01b031690816001600160a01b031681525050838160018151811061048357610483610ac7565b6001600160a01b0392831660209182029290920101526001546040516307c0329d60e21b81526000929190911690631f00ca74906104c79087908690600401610c76565b60006040518083038186803b1580156104df57600080fd5b505afa1580156104f3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261051b9190810190610b83565b60008151811061029757610297610ac7565b6000546001600160a01b031633146105575760405162461bcd60e51b81526004016102d890610c41565b6001600160a01b0381166105bc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102d8565b6105c581610762565b50565b6040516001600160a01b03808516602483015283166044820152606481018290526106339085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526107b2565b50505050565b8015806106c25750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561068857600080fd5b505afa15801561069c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c09190610c8f565b155b61072d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016102d8565b6040516001600160a01b03831660248201526044810182905261075d90849063095ea7b360e01b906064016105fc565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610807826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108849092919063ffffffff16565b80519091501561075d57808060200190518101906108259190610ca8565b61075d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102d8565b6060610893848460008561089b565b949350505050565b6060824710156108fc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102d8565b843b61094a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102d8565b600080866001600160a01b031685876040516109669190610cf6565b60006040518083038185875af1925050503d80600081146109a3576040519150601f19603f3d011682016040523d82523d6000602084013e6109a8565b606091505b50915091506109b88282866109c3565b979650505050505050565b606083156109d25750816102a7565b8251156109e25782518084602001fd5b8160405162461bcd60e51b81526004016102d89190610d12565b6001600160a01b03811681146105c557600080fd5b600080600060608486031215610a2657600080fd5b8335610a31816109fc565b9250602084013591506040840135610a48816109fc565b809150509250925092565b600060208284031215610a6557600080fd5b81356102a7816109fc565b600080600060608486031215610a8557600080fd5b8335610a90816109fc565b92506020840135610aa0816109fc565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008219821115610afe57634e487b7160e01b600052601160045260246000fd5b500190565b600081518084526020808501945080840160005b83811015610b3c5781516001600160a01b031687529582019590820190600101610b17565b509495945050505050565b85815284602082015260a060408201526000610b6660a0830186610b03565b6001600160a01b0394909416606083015250608001529392505050565b60006020808385031215610b9657600080fd5b825167ffffffffffffffff80821115610bae57600080fd5b818501915085601f830112610bc257600080fd5b815181811115610bd457610bd4610ab1565b8060051b604051601f19603f83011681018181108582111715610bf957610bf9610ab1565b604052918252848201925083810185019188831115610c1757600080fd5b938501935b82851015610c3557845184529385019392850192610c1c565b98975050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8281526040602082015260006108936040830184610b03565b600060208284031215610ca157600080fd5b5051919050565b600060208284031215610cba57600080fd5b815180151581146102a757600080fd5b60005b83811015610ce5578181015183820152602001610ccd565b838111156106335750506000910152565b60008251610d08818460208701610cca565b9190910192915050565b6020815260008251806020840152610d31816040850160208701610cca565b601f01601f1916919091016040019291505056fea2646970667358221220ef6ae993721af001a0e6efe20fea7e3538304ed22491d48d9b3a3e126c17c48464736f6c63430008090033";

type ConverterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConverterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Converter__factory extends ContractFactory {
  constructor(...args: ConverterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Converter";
  }

  deploy(
    router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Converter> {
    return super.deploy(router_, overrides || {}) as Promise<Converter>;
  }
  getDeployTransaction(
    router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(router_, overrides || {});
  }
  attach(address: string): Converter {
    return super.attach(address) as Converter;
  }
  connect(signer: Signer): Converter__factory {
    return super.connect(signer) as Converter__factory;
  }
  static readonly contractName: "Converter";
  public readonly contractName: "Converter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConverterInterface {
    return new utils.Interface(_abi) as ConverterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Converter {
    return new Contract(address, _abi, signerOrProvider) as Converter;
  }
}
