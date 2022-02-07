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
import type { OracleTest, OracleTestInterface } from "../OracleTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "thresholdNumerator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thresholdDenominator_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceDecimals_",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "amountMax",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "amountMin",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "decimals",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "isSupported",
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
    name: "priceDecimals",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "priceFeed",
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
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "priceMax",
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
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "priceMin",
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
    name: "renounceOwnership",
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
    name: "reservePriceFeed",
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
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "priceFeed_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "reservePriceFeed_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "correctDecimals_",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "supported_",
        type: "bool[]",
      },
    ],
    name: "setPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "threshold",
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
  "0x608060405234801561001057600080fd5b506040516112ee3803806112ee83398101604081905261002f91610099565b61003833610049565b6004929092556005556003556100c7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000606084860312156100ae57600080fd5b8351925060208401519150604084015190509250925092565b611218806100d66000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80636145f2031161009757806395f881c91161006657806395f881c914610247578063b1d5e1b91461025a578063d449a8321461026d578063f2fde38b1461028057600080fd5b80636145f203146101eb578063715018a6146101fe578063833b8282146102065780638da5cb5b1461023657600080fd5b806342cde4e8116100d357806342cde4e814610169578063468cde72146101865780634f129c5314610199578063561c2ed8146101d857600080fd5b8062e4768b146100f957806305300b281461010e5780631fd48b9a14610125575b600080fd5b61010c610107366004610c1d565b610293565b005b6003545b6040519081526020015b60405180910390f35b610151610133366004610c47565b6001600160a01b039081166000908152600160205260409020541690565b6040516001600160a01b03909116815260200161011c565b6101716102fb565b6040805192835260208301919091520161011c565b610112610194366004610c1d565b610328565b6101c86101a7366004610c47565b6001600160a01b031660009081526001602052604090206003015460ff1690565b604051901515815260200161011c565b6101126101e6366004610c1d565b610377565b61010c6101f9366004610e04565b6103ca565b61010c61052b565b610151610214366004610c47565b6001600160a01b03908116600090815260016020819052604090912001541690565b6000546001600160a01b0316610151565b610112610255366004610c1d565b610561565b610112610268366004610c1d565b61057c565b61011261027b366004610c47565b6105ad565b61010c61028e366004610c47565b6105cb565b816102b9816001600160a01b031660009081526001602052604090206003015460ff1690565b6102de5760405162461bcd60e51b81526004016102d590610ed6565b60405180910390fd5b506001600160a01b03909116600090815260026020526040902055565b6040805180820190915260045481526005546020820152600090819061032090610666565b915091509091565b60008061034384610338866105ad565b6101e690600a61101f565b905061036d81610367610355876105ad565b61036090600a61101f565b869061069f565b906106b2565b9150505b92915050565b604080518082019091526004548152600554602082015260009081906103a8906103a26001806106be565b90610746565b905061036d816020015161036783600001516103c488886107f4565b9061069f565b6000546001600160a01b031633146103f45760405162461bcd60e51b81526004016102d59061102b565b60005b85518110156105235760006001600088848151811061041857610418611060565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020905085828151811061045457610454611060565b602090810291909101015181546001600160a01b0319166001600160a01b03909116178155845185908390811061048d5761048d611060565b60200260200101518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508382815181106104cf576104cf611060565b602002602001015181600201819055508282815181106104f1576104f1611060565b6020908102919091010151600391909101805460ff19169115159190911790558061051b81611076565b9150506103f7565b505050505050565b6000546001600160a01b031633146105555760405162461bcd60e51b81526004016102d59061102b565b61055f6000610b0e565b565b60008061034384610571866105ad565b61026890600a61101f565b604080518082019091526004548152600554602082015260009081906103a8906105a76001806106be565b90610b5e565b6001600160a01b031660009081526001602052604090206002015490565b6000546001600160a01b031633146105f55760405162461bcd60e51b81526004016102d59061102b565b6001600160a01b03811661065a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102d5565b61066381610b0e565b50565b6000808280602001516000141561068f5760405162461bcd60e51b81526004016102d590611091565b5050815160209092015191929050565b60006106ab82846110e5565b9392505050565b60006106ab8284611104565b6040805180820190915260008082526020820152816107305760405162461bcd60e51b815260206004820152602860248201527f4672616374696f6e4d6174683a2044656e6f6d696e61746f722063616e6e6f7460448201526720657175616c206f60c01b60648201526084016102d5565b5060408051808201909152918252602082015290565b6040805180820190915260008082526020820152828060200151600014156107805760405162461bcd60e51b81526004016102d590611091565b828060200151600014156107a65760405162461bcd60e51b81526004016102d590611091565b602085015184516107d1916107bb919061069f565b602086015187516107cb9161069f565b90610be9565b8352602080850151908601516107e69161069f565b602084015250909392505050565b6001600160a01b038216600090815260016020526040812060030154839060ff166108315760405162461bcd60e51b81526004016102d590610ed6565b600061086d61083f866105ad565b61084a90600a61101f565b6001600160a01b038716600090815260026020526040902054610367908761069f565b9050801561087c579150610b07565b6001600160a01b0380861660009081526001602052604081205490911690506000816001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156108d657600080fd5b505afa1580156108ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090e9190611140565b5050509150506000826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561094f57600080fd5b505afa158015610963573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109879190611190565b60ff16905060008213610aa9576001600160a01b0380891660009081526001602081905260409091200154169250826001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156109ee57600080fd5b505afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190611140565b50506040805163313ce56760e01b815290519295506001600160a01b038716935063313ce5679260048083019350602092829003018186803b158015610a6b57600080fd5b505afa158015610a7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa39190611190565b60ff1690505b60008213610abe576000955050505050610b07565b610b00610aca896105ad565b610ad590600a61101f565b610367610ae384600a61101f565b6103678b6103c4600354600a610af9919061101f565b899061069f565b9550505050505b5092915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080518082019091526000808252602082015282806020015160001415610b985760405162461bcd60e51b81526004016102d590611091565b82806020015160001415610bbe5760405162461bcd60e51b81526004016102d590611091565b602085015184516107d191610bd3919061069f565b60208601518751610be39161069f565b90610bf5565b60006106ab82846111b3565b60006106ab82846111cb565b80356001600160a01b0381168114610c1857600080fd5b919050565b60008060408385031215610c3057600080fd5b610c3983610c01565b946020939093013593505050565b600060208284031215610c5957600080fd5b6106ab82610c01565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610ca157610ca1610c62565b604052919050565b600067ffffffffffffffff821115610cc357610cc3610c62565b5060051b60200190565b600082601f830112610cde57600080fd5b81356020610cf3610cee83610ca9565b610c78565b82815260059290921b84018101918181019086841115610d1257600080fd5b8286015b84811015610d3457610d2781610c01565b8352918301918301610d16565b509695505050505050565b600082601f830112610d5057600080fd5b81356020610d60610cee83610ca9565b82815260059290921b84018101918181019086841115610d7f57600080fd5b8286015b84811015610d345780358352918301918301610d83565b600082601f830112610dab57600080fd5b81356020610dbb610cee83610ca9565b82815260059290921b84018101918181019086841115610dda57600080fd5b8286015b84811015610d345780358015158114610df75760008081fd5b8352918301918301610dde565b600080600080600060a08688031215610e1c57600080fd5b853567ffffffffffffffff80821115610e3457600080fd5b610e4089838a01610ccd565b96506020880135915080821115610e5657600080fd5b610e6289838a01610ccd565b95506040880135915080821115610e7857600080fd5b610e8489838a01610ccd565b94506060880135915080821115610e9a57600080fd5b610ea689838a01610d3f565b93506080880135915080821115610ebc57600080fd5b50610ec988828901610d9a565b9150509295509295909350565b6020808252602f908201527f4f7261636c65546f6b656e733a204f6e6c7920737570706f7274656420746f6b60408201526e195b9cc81b585e481899481d5cd959608a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610f76578160001904821115610f5c57610f5c610f25565b80851615610f6957918102915b93841c9390800290610f40565b509250929050565b600082610f8d57506001610371565b81610f9a57506000610371565b8160018114610fb05760028114610fba57610fd6565b6001915050610371565b60ff841115610fcb57610fcb610f25565b50506001821b610371565b5060208310610133831016604e8410600b8410161715610ff9575081810a610371565b6110038383610f3b565b806000190482111561101757611017610f25565b029392505050565b60006106ab8383610f7e565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561108a5761108a610f25565b5060010190565b60208082526034908201527f4672616374696f6e4d6174683a2044656e6f6d696e61746f72206f662066726160408201527306374696f6e2063616e6e6f7420657175616c20360641b606082015260800190565b60008160001904831182151516156110ff576110ff610f25565b500290565b60008261112157634e487b7160e01b600052601260045260246000fd5b500490565b805169ffffffffffffffffffff81168114610c1857600080fd5b600080600080600060a0868803121561115857600080fd5b61116186611126565b945060208601519350604086015192506060860151915061118460808701611126565b90509295509295909350565b6000602082840312156111a257600080fd5b815160ff811681146106ab57600080fd5b600082198211156111c6576111c6610f25565b500190565b6000828210156111dd576111dd610f25565b50039056fea2646970667358221220064bc65c1a2b5b5077bca4c0a5a72926df4d32e2ed190ec162afc0709d83e7af64736f6c63430008090033";

type OracleTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleTest__factory extends ContractFactory {
  constructor(...args: OracleTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleTest";
  }

  deploy(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OracleTest> {
    return super.deploy(
      thresholdNumerator_,
      thresholdDenominator_,
      priceDecimals_,
      overrides || {}
    ) as Promise<OracleTest>;
  }
  getDeployTransaction(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      thresholdNumerator_,
      thresholdDenominator_,
      priceDecimals_,
      overrides || {}
    );
  }
  attach(address: string): OracleTest {
    return super.attach(address) as OracleTest;
  }
  connect(signer: Signer): OracleTest__factory {
    return super.connect(signer) as OracleTest__factory;
  }
  static readonly contractName: "OracleTest";
  public readonly contractName: "OracleTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleTestInterface {
    return new utils.Interface(_abi) as OracleTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleTest {
    return new Contract(address, _abi, signerOrProvider) as OracleTest;
  }
}