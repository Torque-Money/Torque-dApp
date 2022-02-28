/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LPoolDepositInterface extends utils.Interface {
  contractName: "LPoolDeposit";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "LPFromPT(address)": FunctionFragment;
    "POOL_ADMIN()": FunctionFragment;
    "PTFromLP(address)": FunctionFragment;
    "addLPToken(address[],address[])": FunctionFragment;
    "addTaxAccount(address)": FunctionFragment;
    "converter()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initializeLPoolCore(address,address)": FunctionFragment;
    "initializeLPoolTax(uint256,uint256)": FunctionFragment;
    "interestRate(address)": FunctionFragment;
    "isApprovedLP(address)": FunctionFragment;
    "isApprovedPT(address)": FunctionFragment;
    "isLP(address)": FunctionFragment;
    "isPT(address)": FunctionFragment;
    "liquidity(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "removeTaxAccount(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setApproved(address[],bool[])": FunctionFragment;
    "setConverter(address)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setTaxPercentage(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "taxPercentage()": FunctionFragment;
    "unpause()": FunctionFragment;
    "utilized(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LPFromPT", values: [string]): string;
  encodeFunctionData(
    functionFragment: "POOL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PTFromLP", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addLPToken",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addTaxAccount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "converter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeLPoolCore",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeLPoolTax",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "interestRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedLP",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedPT",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isLP", values: [string]): string;
  encodeFunctionData(functionFragment: "isPT", values: [string]): string;
  encodeFunctionData(functionFragment: "liquidity", values: [string]): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTaxAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApproved",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setConverter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTaxPercentage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taxPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "utilized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "LPFromPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "POOL_ADMIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PTFromLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addLPToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTaxAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "converter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeLPoolCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeLPoolTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedLP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedPT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTaxAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "utilized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,address,uint256,address,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  {
    account: string;
    token: string;
    amount: BigNumber;
    convertedToken: string;
    convertedAmount: BigNumber;
  }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  { account: string; token: string; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface LPoolDeposit extends BaseContract {
  contractName: "LPoolDeposit";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LPoolDepositInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<[string]>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<[string]>;

    addLPToken(
      token_: string[],
      lpToken_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    converter(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initializeLPoolCore(
      converter_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeLPoolTax(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    interestRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isLP(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isPT(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    utilized(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  LPFromPT(token_: string, overrides?: CallOverrides): Promise<string>;

  POOL_ADMIN(overrides?: CallOverrides): Promise<string>;

  PTFromLP(token_: string, overrides?: CallOverrides): Promise<string>;

  addLPToken(
    token_: string[],
    lpToken_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTaxAccount(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  converter(overrides?: CallOverrides): Promise<string>;

  deposit(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initializeLPoolCore(
    converter_: string,
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeLPoolTax(
    taxPercentNumerator_: BigNumberish,
    taxPercentDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  interestRate(
    token_: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  isApprovedLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isApprovedPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

  liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  removeTaxAccount(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApproved(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConverter(
    converter_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxPercentage(
    taxPercentNumerator_: BigNumberish,
    taxPercentDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    token_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<string>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<string>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<string>;

    addLPToken(
      token_: string[],
      lpToken_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addTaxAccount(account_: string, overrides?: CallOverrides): Promise<void>;

    converter(overrides?: CallOverrides): Promise<string>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initializeLPoolCore(
      converter_: string,
      oracle_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeLPoolTax(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    interestRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isLP(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isPT(token_: string, overrides?: CallOverrides): Promise<boolean>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    removeTaxAccount(
      account_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setConverter(converter_: string, overrides?: CallOverrides): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    taxPercentage(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    unpause(overrides?: CallOverrides): Promise<void>;

    utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,address,uint256,address,uint256)"(
      account?: string | null,
      token?: null,
      amount?: null,
      convertedToken?: null,
      convertedAmount?: null
    ): DepositEventFilter;
    Deposit(
      account?: string | null,
      token?: null,
      amount?: null,
      convertedToken?: null,
      convertedAmount?: null
    ): DepositEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,address,uint256)"(
      account?: string | null,
      token?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      account?: string | null,
      token?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    LPFromPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    PTFromLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    addLPToken(
      token_: string[],
      lpToken_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    converter(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeLPoolCore(
      converter_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeLPoolTax(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    interestRate(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isLP(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isPT(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    utilized(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LPFromPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PTFromLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addLPToken(
      token_: string[],
      lpToken_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    converter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeLPoolCore(
      converter_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeLPoolTax(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    interestRate(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLP(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPT(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidity(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeTaxAccount(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApproved(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConverter(
      converter_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxPercentage(
      taxPercentNumerator_: BigNumberish,
      taxPercentDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    utilized(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      token_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
