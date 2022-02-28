/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Resolver, ResolverInterface } from "../Resolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESOLVER_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkLiquidate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkReset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "converter",
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
    name: "depositReceiver",
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
    name: "ethAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "executeLiquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "executeReset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taskTreasury_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositReceiver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ethAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
      {
        internalType: "address",
        name: "converter_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taskTreasury_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositReceiver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ethAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
      {
        internalType: "address",
        name: "converter_",
        type: "address",
      },
    ],
    name: "initializeResolverCore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marginLong",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "converter_",
        type: "address",
      },
    ],
    name: "setConverter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositReceiver_",
        type: "address",
      },
    ],
    name: "setDepositReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethAddress_",
        type: "address",
      },
    ],
    name: "setEthAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marginLong_",
        type: "address",
      },
    ],
    name: "setMarginLong",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "taskTreasury_",
        type: "address",
      },
    ],
    name: "setTaskTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taskTreasury",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611dc6806100206000396000f3fe6080604052600436106101a05760003560e01c80638456cb59116100ec578063ae8cb7631161008a578063d547741f11610064578063d547741f146104a8578063e60a3213146104c8578063fc8c0851146104e8578063fd4604861461050857600080fd5b8063ae8cb76314610453578063b19337a414610468578063bd38837b1461048857600080fd5b806395b7b581116100c657806395b7b581146103de5780639b0da5d5146103fe578063a217fddf1461041e578063ab63fd0a1461043357600080fd5b80638456cb591461038957806386f041ba1461039e57806391d14854146103be57600080fd5b806336568abe116101595780635509708c116101335780635509708c1461030e57806358b272161461032e5780635c975abb146103515780637e0b09b11461036957600080fd5b806336568abe146102a15780633f4ba83a146102c157806341398b15146102d657600080fd5b806301ffc9a7146101ac5780631459457a146101e157806323fac15e14610203578063248a9ca3146102235780632b5d5e76146102615780632f2ff15d1461028157600080fd5b366101a757005b600080fd5b3480156101b857600080fd5b506101cc6101c7366004611801565b61051e565b60405190151581526020015b60405180910390f35b3480156101ed57600080fd5b506102016101fc366004611840565b610555565b005b34801561020f57600080fd5b5061020161021e3660046118b1565b6105e2565b34801561022f57600080fd5b5061025361023e3660046118ce565b60009081526065602052604090206001015490565b6040519081526020016101d8565b34801561026d57600080fd5b5061020161027c3660046118b1565b610612565b34801561028d57600080fd5b5061020161029c3660046118e7565b610642565b3480156102ad57600080fd5b506102016102bc3660046118e7565b61066d565b3480156102cd57600080fd5b506102016106eb565b3480156102e257600080fd5b5060cc546102f6906001600160a01b031681565b6040516001600160a01b0390911681526020016101d8565b34801561031a57600080fd5b506102016103293660046118b1565b610703565b34801561033a57600080fd5b506103436107c2565b6040516101d892919061196f565b34801561035d57600080fd5b5060975460ff166101cc565b34801561037557600080fd5b506102016103843660046118b1565b6109bf565b34801561039557600080fd5b50610201610a18565b3480156103aa57600080fd5b5060ce546102f6906001600160a01b031681565b3480156103ca57600080fd5b506101cc6103d93660046118e7565b610a2d565b3480156103ea57600080fd5b506102016103f93660046118b1565b610a58565b34801561040a57600080fd5b506102016104193660046118b1565b610a88565b34801561042a57600080fd5b50610253600081565b34801561043f57600080fd5b5061020161044e366004611840565b610ab8565b34801561045f57600080fd5b50610343610bd6565b34801561047457600080fd5b506102016104833660046118b1565b610d53565b34801561049457600080fd5b5060cd546102f6906001600160a01b031681565b3480156104b457600080fd5b506102016104c33660046118e7565b610d83565b3480156104d457600080fd5b5060ca546102f6906001600160a01b031681565b3480156104f457600080fd5b5060cb546102f6906001600160a01b031681565b34801561051457600080fd5b5061025360c95481565b60006001600160e01b03198216637965db0b60e01b148061054f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600054610100900460ff166105705760005460ff1615610574565b303b155b6105995760405162461bcd60e51b81526004016105909061198a565b60405180910390fd5b600054610100900460ff161580156105bb576000805461ffff19166101011790555b6105c88686868686610ab8565b80156105da576000805461ff00191690555b505050505050565b60c9546105ef8133610da9565b5060ca80546001600160a01b0319166001600160a01b0392909216919091179055565b60c95461061f8133610da9565b5060cb80546001600160a01b0319166001600160a01b0392909216919091179055565b60008281526065602052604090206001015461065e8133610da9565b6106688383610e0d565b505050565b6001600160a01b03811633146106dd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610590565b6106e78282610e93565b5050565b60c9546106f88133610da9565b610700610efa565b50565b60975460ff16156107265760405162461bcd60e51b8152600401610590906119d8565b60ce546040516365189a7b60e11b81526001600160a01b038381166004830152600092839291169063ca3134f6906024015b600060405180830381600087803b15801561077257600080fd5b505af1158015610786573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ae9190810190611ae1565b915091506107bc8282610f8d565b50505050565b60006060600060ce60009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b15801561081657600080fd5b505afa15801561082a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108529190810190611b9c565b905060005b81518110156109a35760ce5482516001600160a01b039091169063ffec70af9084908490811061088957610889611bd1565b60200260200101516040518263ffffffff1660e01b81526004016108bc91906001600160a01b0391909116815260200190565b60206040518083038186803b1580156108d457600080fd5b505afa1580156108e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090c9190611be7565b15610991576001637e0b09b160e01b83838151811061092d5761092d611bd1565b602002602001015160405160240161095491906001600160a01b0391909116815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152909590945092505050565b8061099b81611c1f565b915050610857565b5060006040518060200160405280600081525092509250509091565b60975460ff16156109e25760405162461bcd60e51b8152600401610590906119d8565b60ce54604051638ac5d4a360e01b81526001600160a01b0383811660048301526000928392911690638ac5d4a390602401610758565b60c954610a258133610da9565b61070061118b565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60c954610a658133610da9565b5060ce80546001600160a01b0319166001600160a01b0392909216919091179055565b60c954610a958133610da9565b5060cc80546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16610ad35760005460ff1615610ad7565b303b155b610af35760405162461bcd60e51b81526004016105909061198a565b600054610100900460ff16158015610b15576000805461ffff19166101011790555b610b1d6111e3565b610b2561120c565b7f9d46f6f7b06111361c42413e6f538c35d08a9eda25ff069b8d6fec4f22372bbd60c9819055610b55908061123b565b610b6760c954610b623390565b610e0d565b60ca80546001600160a01b03199081166001600160a01b038981169190911790925560cb8054821688841617905560cc8054821687841617905560ce8054821686841617905560cd805490911691841691909117905580156105da576000805461ff0019169055505050505050565b60006060600060ce60009054906101000a90046001600160a01b03166001600160a01b0316636847e50b6040518163ffffffff1660e01b815260040160006040518083038186803b158015610c2a57600080fd5b505afa158015610c3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c669190810190611b9c565b905060005b81518110156109a35760ce5482516001600160a01b0390911690632dbaacdc90849084908110610c9d57610c9d611bd1565b60200260200101516040518263ffffffff1660e01b8152600401610cd091906001600160a01b0391909116815260200190565b60206040518083038186803b158015610ce857600080fd5b505afa158015610cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d209190611be7565b15610d41576001635509708c60e01b83838151811061092d5761092d611bd1565b80610d4b81611c1f565b915050610c6b565b60c954610d608133610da9565b5060cd80546001600160a01b0319166001600160a01b0392909216919091179055565b600082815260656020526040902060010154610d9f8133610da9565b6106688383610e93565b610db38282610a2d565b6106e757610dcb816001600160a01b03166014611286565b610dd6836020611286565b604051602001610de7929190611c3a565b60408051601f198184030181529082905262461bcd60e51b825261059091600401611caf565b610e178282610a2d565b6106e75760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e4f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e9d8282610a2d565b156106e75760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60975460ff16610f435760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610590565b6097805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080805b845181101561110d576000848281518110610faf57610faf611bd1565b602002602001015111156110fb5760cd54845161101c916001600160a01b031690869084908110610fe257610fe2611bd1565b6020026020010151878481518110610ffc57610ffc611bd1565b60200260200101516001600160a01b03166114299092919063ffffffff16565b60cd5485516000916001600160a01b03169063c07c00f39088908590811061104657611046611bd1565b602002602001015187858151811061106057611060611bd1565b60200260200101516040518363ffffffff1660e01b81526004016110999291906001600160a01b03929092168252602082015260400190565b602060405180830381600087803b1580156110b357600080fd5b505af11580156110c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110eb9190611cc2565b90506110f7838261156f565b9250505b8061110581611c1f565b915050610f92565b5060ca5460cb5460cc5460405163c1461d5760e01b81526001600160a01b03928316600482015290821660248201526044810184905291169063c1461d579083906064016000604051808303818588803b15801561116a57600080fd5b505af115801561117e573d6000803e3d6000fd5b5093979650505050505050565b60975460ff16156111ae5760405162461bcd60e51b8152600401610590906119d8565b6097805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f703390565b600054610100900460ff1661120a5760405162461bcd60e51b815260040161059090611cdb565b565b600054610100900460ff166112335760405162461bcd60e51b815260040161059090611cdb565b61120a61157b565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60606000611295836002611d26565b6112a0906002611d45565b67ffffffffffffffff8111156112b8576112b8611a02565b6040519080825280601f01601f1916602001820160405280156112e2576020820181803683370190505b509050600360fc1b816000815181106112fd576112fd611bd1565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061132c5761132c611bd1565b60200101906001600160f81b031916908160001a9053506000611350846002611d26565b61135b906001611d45565b90505b60018111156113d3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061138f5761138f611bd1565b1a60f81b8282815181106113a5576113a5611bd1565b60200101906001600160f81b031916908160001a90535060049490941c936113cc81611d5d565b905061135e565b5083156114225760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610590565b9392505050565b8015806114b25750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561147857600080fd5b505afa15801561148c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b09190611cc2565b155b61151d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610590565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526106689084906115ae565b60006114228284611d45565b600054610100900460ff166115a25760405162461bcd60e51b815260040161059090611cdb565b6097805460ff19169055565b6000611603826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116809092919063ffffffff16565b80519091501561066857808060200190518101906116219190611be7565b6106685760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610590565b606061168f8484600085611697565b949350505050565b6060824710156116f85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610590565b6001600160a01b0385163b61174f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610590565b600080866001600160a01b0316858760405161176b9190611d74565b60006040518083038185875af1925050503d80600081146117a8576040519150601f19603f3d011682016040523d82523d6000602084013e6117ad565b606091505b50915091506117bd8282866117c8565b979650505050505050565b606083156117d7575081611422565b8251156117e75782518084602001fd5b8160405162461bcd60e51b81526004016105909190611caf565b60006020828403121561181357600080fd5b81356001600160e01b03198116811461142257600080fd5b6001600160a01b038116811461070057600080fd5b600080600080600060a0868803121561185857600080fd5b85356118638161182b565b945060208601356118738161182b565b935060408601356118838161182b565b925060608601356118938161182b565b915060808601356118a38161182b565b809150509295509295909350565b6000602082840312156118c357600080fd5b81356114228161182b565b6000602082840312156118e057600080fd5b5035919050565b600080604083850312156118fa57600080fd5b82359150602083013561190c8161182b565b809150509250929050565b60005b8381101561193257818101518382015260200161191a565b838111156107bc5750506000910152565b6000815180845261195b816020860160208601611917565b601f01601f19169290920160200192915050565b821515815260406020820152600061168f6040830184611943565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a4157611a41611a02565b604052919050565b600067ffffffffffffffff821115611a6357611a63611a02565b5060051b60200190565b600082601f830112611a7e57600080fd5b81516020611a93611a8e83611a49565b611a18565b82815260059290921b84018101918181019086841115611ab257600080fd5b8286015b84811015611ad6578051611ac98161182b565b8352918301918301611ab6565b509695505050505050565b60008060408385031215611af457600080fd5b825167ffffffffffffffff80821115611b0c57600080fd5b611b1886838701611a6d565b9350602091508185015181811115611b2f57600080fd5b85019050601f81018613611b4257600080fd5b8051611b50611a8e82611a49565b81815260059190911b82018301908381019088831115611b6f57600080fd5b928401925b82841015611b8d57835182529284019290840190611b74565b80955050505050509250929050565b600060208284031215611bae57600080fd5b815167ffffffffffffffff811115611bc557600080fd5b61168f84828501611a6d565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611bf957600080fd5b8151801515811461142257600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611c3357611c33611c09565b5060010190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611c72816017850160208801611917565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611ca3816028840160208801611917565b01602801949350505050565b6020815260006114226020830184611943565b600060208284031215611cd457600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611d4057611d40611c09565b500290565b60008219821115611d5857611d58611c09565b500190565b600081611d6c57611d6c611c09565b506000190190565b60008251611d86818460208701611917565b919091019291505056fea2646970667358221220939f005f8afed96fb3c9e6938083050c2d4c2e74ce45c1aa0fafaadb2f4acb5f64736f6c63430008090033";

type ResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Resolver__factory extends ContractFactory {
  constructor(...args: ResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Resolver";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Resolver> {
    return super.deploy(overrides || {}) as Promise<Resolver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Resolver {
    return super.attach(address) as Resolver;
  }
  connect(signer: Signer): Resolver__factory {
    return super.connect(signer) as Resolver__factory;
  }
  static readonly contractName: "Resolver";
  public readonly contractName: "Resolver";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResolverInterface {
    return new utils.Interface(_abi) as ResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Resolver {
    return new Contract(address, _abi, signerOrProvider) as Resolver;
  }
}
