/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IVaultInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approxAvailable(address)": FunctionFragment;
    "approxBalance(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "deposit(uint256[])": FunctionFragment;
    "estimateDeposit(uint256[])": FunctionFragment;
    "estimateRedeem(uint256)": FunctionFragment;
    "getStrategy()": FunctionFragment;
    "isSupportedToken(address)": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "setStrategy(address)": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenCount()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "approve"
      | "approxAvailable"
      | "approxBalance"
      | "balanceOf"
      | "deposit"
      | "estimateDeposit"
      | "estimateRedeem"
      | "getStrategy"
      | "isSupportedToken"
      | "redeem"
      | "setStrategy"
      | "tokenByIndex"
      | "tokenCount"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approxAvailable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approxBalance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateDeposit",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateRedeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setStrategy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approxAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approxBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Deposit(address,uint256[],uint256)": EventFragment;
    "Redeem(address,uint256,uint256[])": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface DepositEventObject {
  caller: string;
  amount: BigNumber[];
  shares: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, BigNumber[], BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface RedeemEventObject {
  caller: string;
  shares: BigNumber;
  amount: BigNumber[];
}
export type RedeemEvent = TypedEvent<
  [string, BigNumber, BigNumber[]],
  RedeemEventObject
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approxAvailable(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    approxBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    estimateDeposit(
      amount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    estimateRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amount: BigNumber[] }>;

    getStrategy(
      overrides?: CallOverrides
    ): Promise<[string] & { _strategy: string }>;

    isSupportedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { supportedToken: boolean }>;

    redeem(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { token: string }>;

    tokenCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approxAvailable(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  approxBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  estimateDeposit(
    amount: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  estimateRedeem(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getStrategy(overrides?: CallOverrides): Promise<string>;

  isSupportedToken(token: string, overrides?: CallOverrides): Promise<boolean>;

  redeem(
    shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStrategy(
    strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approxAvailable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approxBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateDeposit(
      amount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getStrategy(overrides?: CallOverrides): Promise<string>;

    isSupportedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    redeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    setStrategy(strategy: string, overrides?: CallOverrides): Promise<void>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Deposit(address,uint256[],uint256)"(
      caller?: string | null,
      amount?: null,
      shares?: null
    ): DepositEventFilter;
    Deposit(
      caller?: string | null,
      amount?: null,
      shares?: null
    ): DepositEventFilter;

    "Redeem(address,uint256,uint256[])"(
      caller?: string | null,
      shares?: null,
      amount?: null
    ): RedeemEventFilter;
    Redeem(
      caller?: string | null,
      shares?: null,
      amount?: null
    ): RedeemEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approxAvailable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approxBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    estimateDeposit(
      amount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approxAvailable(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approxBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    estimateDeposit(
      amount: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSupportedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStrategy(
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
