/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay_",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors_",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "taxPercentageNumerator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxPercentageDenominator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxCooldown_",
        type: "uint256",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
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
    name: "EXECUTOR_ROLE",
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
    name: "PROPOSER_ROLE",
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
    name: "TIMELOCK_ADMIN_ROLE",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "claimTax",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTax",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
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
    name: "setTaxAccount",
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
    name: "taxAccount",
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
        name: "token_",
        type: "address",
      },
    ],
    name: "taxClaimAvailable",
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
    name: "taxCooldown",
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
    name: "taxPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
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
  "0x60a06040523480156200001157600080fd5b50604051620025d9380380620025d98339810160408190526200003491620003e6565b8282828888886200005560008051602062002579833981519152806200020b565b6200007f60008051602062002599833981519152600080516020620025798339815191526200020b565b620000a9600080516020620025b9833981519152600080516020620025798339815191526200020b565b620000c4600080516020620025798339815191523362000256565b620000df600080516020620025798339815191523062000256565b60005b82518110156200013c57620001296000805160206200259983398151915284838151811062000115576200011562000476565b60200260200101516200025660201b60201c565b62000134816200048c565b9050620000e2565b5060005b8151811015620001865762000173600080516020620025b983398151915283838151811062000115576200011562000476565b6200017e816200048c565b905062000140565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150620001d29150503390565b600380546001600160a01b0319166001600160a01b039290921691909117905560049290925560055560805250620004b6945050505050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000262828262000266565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000262576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002c23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200033457600080fd5b919050565b600082601f8301126200034b57600080fd5b815160206001600160401b03808311156200036a576200036a62000306565b8260051b604051601f19603f8301168101818110848211171562000392576200039262000306565b604052938452858101830193838101925087851115620003b157600080fd5b83870191505b84821015620003db57620003cb826200031c565b83529183019190830190620003b7565b979650505050505050565b60008060008060008060c087890312156200040057600080fd5b865160208801519096506001600160401b03808211156200042057600080fd5b6200042e8a838b0162000339565b965060408901519150808211156200044557600080fd5b506200045489828a0162000339565b945050606087015192506080870151915060a087015190509295509295509295565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620004af57634e487b7160e01b600052601160045260246000fd5b5060010190565b6080516120a0620004d96000396000818161058a0152610ba901526120a06000f3fe6080604052600436106101dc5760003560e01c80638065657f11610102578063b1c5f42711610095578063d45c443511610064578063d45c4435146105cc578063d547741f146105f9578063e38335e514610619578063f27a0c921461062c57600080fd5b8063b1c5f42714610538578063c4d252f514610558578063c9d15a0214610578578063d0385b5e146105ac57600080fd5b80639c2394f8116100d15780639c2394f8146104b9578063a217fddf146104d9578063aa0b28ff146104ee578063ae7b6d161461050e57600080fd5b80638065657f146104375780638f2a0bb0146104575780638f61f4f51461047757806391d148541461049957600080fd5b80632ab0f5291161017a578063584b153e11610149578063584b153e146103a95780636184c164146103c957806364d623531461040157806372ed01ec1461042157600080fd5b80632ab0f529146103185780632f2ff15d1461034957806331d507501461036957806336568abe1461038957600080fd5b80630d3cf6fc116101b65780630d3cf6fc14610281578063134008d3146102b557806313bc9f20146102c8578063248a9ca3146102e857600080fd5b806301d5062a146101e857806301ffc9a71461020a57806307bd02651461023f57600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b5061020861020336600461183c565b610641565b005b34801561021657600080fd5b5061022a6102253660046118b1565b6106c5565b60405190151581526020015b60405180910390f35b34801561024b57600080fd5b506102737fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610236565b34801561028d57600080fd5b506102737f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6102086102c33660046118db565b6106fc565b3480156102d457600080fd5b5061022a6102e3366004611947565b610774565b3480156102f457600080fd5b50610273610303366004611947565b60009081526020819052604090206001015490565b34801561032457600080fd5b5061022a610333366004611947565b6000908152600160208190526040909120541490565b34801561035557600080fd5b50610208610364366004611960565b61079a565b34801561037557600080fd5b5061022a610384366004611947565b6107c5565b34801561039557600080fd5b506102086103a4366004611960565b6107de565b3480156103b557600080fd5b5061022a6103c4366004611947565b610861565b3480156103d557600080fd5b506003546103e9906001600160a01b031681565b6040516001600160a01b039091168152602001610236565b34801561040d57600080fd5b5061020861041c366004611947565b610877565b34801561042d57600080fd5b5061027360065481565b34801561044357600080fd5b506102736104523660046118db565b61091b565b34801561046357600080fd5b506102086104723660046119d1565b61095a565b34801561048357600080fd5b5061027360008051602061204b83398151915281565b3480156104a557600080fd5b5061022a6104b4366004611960565b610a9b565b3480156104c557600080fd5b506102736104d4366004611a83565b610ac4565b3480156104e557600080fd5b50610273600081565b3480156104fa57600080fd5b50610273610509366004611a83565b610b6a565b34801561051a57600080fd5b50610523610c5c565b60408051928352602083019190915201610236565b34801561054457600080fd5b50610273610553366004611a9e565b610c89565b34801561056457600080fd5b50610208610573366004611947565b610cce565b34801561058457600080fd5b506102737f000000000000000000000000000000000000000000000000000000000000000081565b3480156105b857600080fd5b506102086105c7366004611a83565b610d92565b3480156105d857600080fd5b506102736105e7366004611947565b60009081526001602052604090205490565b34801561060557600080fd5b50610208610614366004611960565b610de7565b610208610627366004611a9e565b610e0d565b34801561063857600080fd5b50600254610273565b60008051602061204b83398151915261065a8133610f42565b600061066a89898989898961091b565b90506106768184610fa6565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106b296959493929190611b70565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b14806106f657506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610728816000610a9b565b610736576107368133610f42565b600061074688888888888861091b565b90506107528185611095565b6107618160008a8a8a8a611131565b61076a81611245565b5050505050505050565b6000818152600160205260408120546001811180156107935750428111155b9392505050565b6000828152602081905260409020600101546107b68133610f42565b6107c0838361127e565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146108535760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61085d8282611302565b5050565b60008181526001602081905260408220546107d7565b3330146108da5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b606482015260840161084a565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161093896959493929190611b70565b6040516020818303038152906040528051906020012090509695505050505050565b60008051602061204b8339815191526109738133610f42565b8887146109925760405162461bcd60e51b815260040161084a90611bad565b8885146109b15760405162461bcd60e51b815260040161084a90611bad565b60006109c38b8b8b8b8b8b8b8b610c89565b90506109cf8184610fa6565b60005b8a811015610a8d5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a0f57610a0f611bf0565b9050602002016020810190610a249190611a83565b8d8d86818110610a3657610a36611bf0565b905060200201358c8c87818110610a4f57610a4f611bf0565b9050602002810190610a619190611c06565b8c8b604051610a7596959493929190611b70565b60405180910390a3610a8681611c63565b90506109d2565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6040516370a0823160e01b815230600482015260009081906001600160a01b038416906370a082319060240160206040518083038186803b158015610b0857600080fd5b505afa158015610b1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b409190611c7e565b600554600454919250600091610b629190610b5c908590611367565b90611373565b949350505050565b6003546000906001600160a01b0316336001600160a01b031614610ba05760405162461bcd60e51b815260040161084a90611c97565b600654610bcd907f000000000000000000000000000000000000000000000000000000000000000061137f565b421015610c285760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b5461783a20546f6f206561726c7920746f20636c61696d206044820152620e8c2f60eb1b606482015260840161084a565b6000610c3383610ac4565b600354909150610c50906001600160a01b0385811691168361138b565b4260065590505b919050565b60408051808201909152600454815260055460208201526000908190610c81906113dd565b915091509091565b60008888888888888888604051602001610caa989796959493929190611d77565b60405160208183030381529060405280519060200120905098975050505050505050565b60008051602061204b833981519152610ce78133610f42565b610cf082610861565b610d565760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b606482015260840161084a565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b6003546001600160a01b0316336001600160a01b031614610dc55760405162461bcd60e51b815260040161084a90611c97565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600082815260208190526040902060010154610e038133610f42565b6107c08383611302565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610e39816000610a9b565b610e4757610e478133610f42565b878614610e665760405162461bcd60e51b815260040161084a90611bad565b878414610e855760405162461bcd60e51b815260040161084a90611bad565b6000610e978a8a8a8a8a8a8a8a610c89565b9050610ea38185611095565b60005b89811015610f2c57610f1c82828d8d85818110610ec557610ec5611bf0565b9050602002016020810190610eda9190611a83565b8c8c86818110610eec57610eec611bf0565b905060200201358b8b87818110610f0557610f05611bf0565b9050602002810190610f179190611c06565b611131565b610f2581611c63565b9050610ea6565b50610f3681611245565b50505050505050505050565b610f4c8282610a9b565b61085d57610f64816001600160a01b03166014611463565b610f6f836020611463565b604051602001610f80929190611e52565b60408051601f198184030181529082905262461bcd60e51b825261084a91600401611ec7565b610faf826107c5565b156110145760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b606482015260840161084a565b6002548110156110755760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b606482015260840161084a565b61107f8142611efa565b6000928352600160205260409092209190915550565b61109e82610774565b6110ba5760405162461bcd60e51b815260040161084a90611f12565b8015806110d65750600081815260016020819052604090912054145b61085d5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b606482015260840161084a565b6000846001600160a01b031684848460405161114e929190611f5c565b60006040518083038185875af1925050503d806000811461118b576040519150601f19603f3d011682016040523d82523d6000602084013e611190565b606091505b50509050806111fd5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b606482015260840161084a565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58878787876040516112349493929190611f6c565b60405180910390a350505050505050565b61124e81610774565b61126a5760405162461bcd60e51b815260040161084a90611f12565b600090815260016020819052604090912055565b6112888282610a9b565b61085d576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556112be3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61130c8282610a9b565b1561085d576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006107938284611f9e565b60006107938284611fbd565b60006107938284611efa565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526107c09084906115ff565b600080828060200151600014156114535760405162461bcd60e51b815260206004820152603460248201527f4672616374696f6e4d6174683a2044656e6f6d696e61746f72206f662066726160448201527306374696f6e2063616e6e6f7420657175616c20360641b606482015260840161084a565b5050815160209092015191929050565b60606000611472836002611f9e565b61147d906002611efa565b67ffffffffffffffff81111561149557611495611fdf565b6040519080825280601f01601f1916602001820160405280156114bf576020820181803683370190505b509050600360fc1b816000815181106114da576114da611bf0565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061150957611509611bf0565b60200101906001600160f81b031916908160001a905350600061152d846002611f9e565b611538906001611efa565b90505b60018111156115b0576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061156c5761156c611bf0565b1a60f81b82828151811061158257611582611bf0565b60200101906001600160f81b031916908160001a90535060049490941c936115a981611ff5565b905061153b565b5083156107935760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161084a565b6000611654826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116d19092919063ffffffff16565b8051909150156107c05780806020019051810190611672919061200c565b6107c05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161084a565b6060610b62848460008585843b61172a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161084a565b600080866001600160a01b03168587604051611746919061202e565b60006040518083038185875af1925050503d8060008114611783576040519150601f19603f3d011682016040523d82523d6000602084013e611788565b606091505b50915091506117988282866117a3565b979650505050505050565b606083156117b2575081610793565b8251156117c25782518084602001fd5b8160405162461bcd60e51b815260040161084a9190611ec7565b80356001600160a01b0381168114610c5757600080fd5b60008083601f84011261180557600080fd5b50813567ffffffffffffffff81111561181d57600080fd5b60208301915083602082850101111561183557600080fd5b9250929050565b600080600080600080600060c0888a03121561185757600080fd5b611860886117dc565b965060208801359550604088013567ffffffffffffffff81111561188357600080fd5b61188f8a828b016117f3565b989b979a50986060810135976080820135975060a09091013595509350505050565b6000602082840312156118c357600080fd5b81356001600160e01b03198116811461079357600080fd5b60008060008060008060a087890312156118f457600080fd5b6118fd876117dc565b955060208701359450604087013567ffffffffffffffff81111561192057600080fd5b61192c89828a016117f3565b979a9699509760608101359660809091013595509350505050565b60006020828403121561195957600080fd5b5035919050565b6000806040838503121561197357600080fd5b82359150611983602084016117dc565b90509250929050565b60008083601f84011261199e57600080fd5b50813567ffffffffffffffff8111156119b657600080fd5b6020830191508360208260051b850101111561183557600080fd5b600080600080600080600080600060c08a8c0312156119ef57600080fd5b893567ffffffffffffffff80821115611a0757600080fd5b611a138d838e0161198c565b909b50995060208c0135915080821115611a2c57600080fd5b611a388d838e0161198c565b909950975060408c0135915080821115611a5157600080fd5b50611a5e8c828d0161198c565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b600060208284031215611a9557600080fd5b610793826117dc565b60008060008060008060008060a0898b031215611aba57600080fd5b883567ffffffffffffffff80821115611ad257600080fd5b611ade8c838d0161198c565b909a50985060208b0135915080821115611af757600080fd5b611b038c838d0161198c565b909850965060408b0135915080821115611b1c57600080fd5b50611b298b828c0161198c565b999c989b509699959896976060870135966080013595509350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a060408201526000611b9860a083018688611b47565b60608301949094525060800152949350505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611c1d57600080fd5b83018035915067ffffffffffffffff821115611c3857600080fd5b60200191503681900382131561183557600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611c7757611c77611c4d565b5060010190565b600060208284031215611c9057600080fd5b5051919050565b6020808252602f908201527f54696d656c6f636b5461783a204f6e6c792074686520746178206163636f756e60408201526e74206d61792063616c6c207468697360881b606082015260800190565b81835260006020808501808196508560051b810191508460005b87811015611d6a5782840389528135601e19883603018112611d2157600080fd5b8701803567ffffffffffffffff811115611d3a57600080fd5b803603891315611d4957600080fd5b611d568682898501611b47565b9a87019a9550505090840190600101611d00565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611db8576001600160a01b03611da3846117dc565b16825260209283019290910190600101611d8a565b5083810360208501528881526001600160fb1b03891115611dd857600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611e0981888a611ce6565b6060850196909652505050608001529695505050505050565b60005b83811015611e3d578181015183820152602001611e25565b83811115611e4c576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611e8a816017850160208801611e22565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611ebb816028840160208801611e22565b01602801949350505050565b6020815260008251806020840152611ee6816040850160208701611e22565b601f01601f19169190910160400192915050565b60008219821115611f0d57611f0d611c4d565b500190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b60018060a01b0385168152836020820152606060408201526000611f94606083018486611b47565b9695505050505050565b6000816000190483118215151615611fb857611fb8611c4d565b500290565b600082611fda57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b60008161200457612004611c4d565b506000190190565b60006020828403121561201e57600080fd5b8151801515811461079357600080fd5b60008251612040818460208701611e22565b919091019291505056feb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1a2646970667358221220a8ece6f68ad9254a974961529fe49f05c75443911211449d324d436cca8e214b64736f6c634300080900335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Timelock";
  }

  deploy(
    minDelay_: BigNumberish,
    proposers_: string[],
    executors_: string[],
    taxPercentageNumerator_: BigNumberish,
    taxPercentageDenominator_: BigNumberish,
    taxCooldown_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(
      minDelay_,
      proposers_,
      executors_,
      taxPercentageNumerator_,
      taxPercentageDenominator_,
      taxCooldown_,
      overrides || {}
    ) as Promise<Timelock>;
  }
  getDeployTransaction(
    minDelay_: BigNumberish,
    proposers_: string[],
    executors_: string[],
    taxPercentageNumerator_: BigNumberish,
    taxPercentageDenominator_: BigNumberish,
    taxCooldown_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay_,
      proposers_,
      executors_,
      taxPercentageNumerator_,
      taxPercentageDenominator_,
      taxCooldown_,
      overrides || {}
    );
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly contractName: "Timelock";
  public readonly contractName: "Timelock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
