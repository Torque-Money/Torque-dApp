import {useWeb3React} from "@web3-react/core";
import {ethers, Overrides} from "ethers";
import {createContext, useContext, useEffect, useState} from "react";

import {Approved} from "./useChainData";
import useContracts from "./useContracts";
import useError from "./useError";
import {useUpdateProtocolData} from "./useProtocolData";

import {isApprovedERC20, approveERC20} from "../ERC20Utils";

export type RequiresApproval = [(() => Promise<void>) | null, (() => Promise<void>) | null];

interface ProtocolMethods {
    wrap: (amount: ethers.BigNumber) => Promise<RequiresApproval>;
    unwrap: (amount: ethers.BigNumber) => Promise<RequiresApproval>;

    provideLiquidity: (token: Approved, amount: ethers.BigNumber) => Promise<RequiresApproval>;
    redeem: (token: Approved, amount: ethers.BigNumber) => Promise<RequiresApproval>;
    depositCollateral: (token: Approved, amount: ethers.BigNumber) => Promise<RequiresApproval>;
    withdrawCollateral: (token: Approved, amount: ethers.BigNumber) => Promise<RequiresApproval>;
    borrowLong: (token: Approved, amount: ethers.BigNumber) => Promise<RequiresApproval>;
    repayLong: (token: Approved) => Promise<RequiresApproval>;
    repayLongAll: () => Promise<RequiresApproval>;
}

const protocolMethodsCtx = createContext<ProtocolMethods | null>(undefined as any);

export default function useProtocolMethods() {
    return useContext(protocolMethodsCtx);
}

export const OVERRIDE: Overrides = {};

export function ProtocolMethodsProvider({children}: {children: any}) {
    const contracts = useContracts();

    const [protocolMethods, setProtocolMethods] = useState<ProtocolMethods | null>(null);
    const updateProtocolData = useUpdateProtocolData();

    const {library}: {library?: ethers.providers.JsonRpcProvider} = useWeb3React();

    const [, setError] = useError();

    async function handleError(fn: () => Promise<any>) {
        try {
            await fn();
        } catch (e: any) {
            setError(e.data?.message || e.message || null);
            window.scroll(0, 0);
        }
    }

    async function approve(token: string, contractAddress: string, amount: ethers.BigNumber) {
        if (library && !(await isApprovedERC20(token, amount, contractAddress, library.getSigner())))
            return async () => await handleError(async () => await approveERC20(token, amount, contractAddress, library.getSigner()));
        return null;
    }

    async function wrap(amount: ethers.BigNumber) {
        if (contracts) {
            const fn = async () => {
                await handleError(async () => await (await contracts.converter.swapMaxEthIn(contracts.config.wrappedCoin.address, {...OVERRIDE, value: amount})).wait());
                updateProtocolData();
            };
            return [fn, null] as any;
        }
        return [null, null] as any;
    }

    async function unwrap(amount: ethers.BigNumber) {
        if (contracts) {
            const approval = await approve(contracts.config.wrappedCoin.address, contracts.converter.address, amount);

            const fn = async () => {
                await handleError(async () => await (await contracts.converter.swapMaxEthOut(contracts.config.wrappedCoin.address, amount)).wait());
                updateProtocolData();
            };

            return [fn, approval] as any;
        }
        return [null, null] as any;
    }

    async function provideLiquidity(token: Approved, amount: ethers.BigNumber) {
        if (contracts) {
            const approval = await approve(token.address, contracts.lPool.address, amount);

            const fn = async () => {
                await handleError(async () => await (await contracts.lPool.addLiquidity(token.address, amount, OVERRIDE)).wait());
                updateProtocolData();
            };

            return [fn, approval];
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function redeem(token: Approved, amount: ethers.BigNumber) {
        if (contracts) {
            const redeemToken = await contracts.lPool.LPFromPT(token.address);
            const approval = await approve(redeemToken, contracts.lPool.address, amount);

            const fn = async () => {
                await handleError(async () => await (await contracts.lPool.removeLiquidity(redeemToken, amount, OVERRIDE)).wait());
                updateProtocolData();
            };

            return [fn, approval];
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function depositCollateral(token: Approved, amount: ethers.BigNumber) {
        if (contracts) {
            const approval = await approve(token.address, contracts.marginLong.address, amount);

            const fn = async () => {
                await handleError(async () => await (await contracts.marginLong.addCollateral(token.address, amount, OVERRIDE)).wait());
                updateProtocolData();
            };

            return [fn, approval] as any;
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function withdrawCollateral(token: Approved, amount: ethers.BigNumber) {
        if (contracts) {
            const approval = await approve(token.address, contracts.marginLong.address, amount);

            const fn = async () => {
                await handleError(async () => await (await contracts.marginLong.removeCollateral(token.address, amount, OVERRIDE)).wait());
                updateProtocolData();
            };

            return [fn, approval] as any;
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function borrowLong(token: Approved, amount: ethers.BigNumber) {
        if (contracts) {
            const fn = async () => {
                await handleError(async () => await (await contracts.marginLong.borrow(token.address, amount, OVERRIDE)).wait());
                updateProtocolData();
            };
            return [fn, null] as any;
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function repayLong(token: Approved) {
        if (contracts) {
            const fn = async () => {
                await handleError(async () => await (await contracts?.marginLong["repayAccount(address)"](token.address, OVERRIDE)).wait());
                updateProtocolData();
            };
            return [fn, null] as any;
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    async function repayLongAll() {
        if (contracts) {
            const fn = async () => {
                await handleError(async () => await (await contracts?.marginLong["repayAccount()"](OVERRIDE)).wait());
                updateProtocolData();
            };
            return [fn, null] as any;
        } else {
            setError("Your wallet is not connected. Please connect your wallet then try again.");
            return [null, null] as any;
        }
    }

    useEffect(() => {
        if (!contracts) setProtocolMethods(null);
        else {
            setProtocolMethods({
                wrap,
                unwrap,
                provideLiquidity,
                redeem,
                depositCollateral,
                withdrawCollateral,
                borrowLong,
                repayLong,
                repayLongAll,
            });
        }
    }, [contracts]);

    return <protocolMethodsCtx.Provider value={protocolMethods}>{children}</protocolMethodsCtx.Provider>;
}
