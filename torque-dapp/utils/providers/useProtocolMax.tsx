import {ethers} from "ethers";
import {createContext, useContext, useEffect, useState} from "react";

import {Approved} from "./useChainData";
import useContracts from "./useContracts";
import {SAFETY_THRESHOLD} from "./useProtocolData";

import {loadERC20} from "../ERC20Utils";
import {parseDecimals, ROUND_CONSTANT} from "../parseNumber";

interface ProtocolMaxData {
    availableToken: (token: Approved) => Promise<[ethers.BigNumber, number] | undefined>;
    availableLPToken: (token: Approved) => Promise<[ethers.BigNumber, number] | undefined>;

    availableCollateral: (token: Approved) => Promise<[ethers.BigNumber, number] | undefined>;
    availableLeverage: (token: Approved) => Promise<[ethers.BigNumber, number] | undefined>;

    availableNativeCoinAmount: () => Promise<[ethers.BigNumber, number] | undefined>;

    availableWrappedTokenAmount: () => Promise<[ethers.BigNumber, number] | undefined>;
}

const protocolMaxCtx = createContext<ProtocolMaxData | null>(undefined as any);

export default function useProtocolMax() {
    return useContext(protocolMaxCtx);
}

export function ProtocolMaxProvider({children}: {children: any}) {
    const contracts = useContracts();

    const [protocolMax, setProtocolMax] = useState<ProtocolMaxData | null>(null);

    async function availableToken(token: Approved) {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const tokenContract = loadERC20(token.address, contracts.signer);
            const rawBalance = await tokenContract.balanceOf(signerAddress);

            const parsed = parseDecimals(rawBalance, token.decimals).toNumber() / ROUND_CONSTANT;

            return [rawBalance, parsed] as any;
        }
    }

    async function availableLPToken(token: Approved) {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const LPTokenAddress = await contracts.lPool.LPFromPT(token.address);
            const LPToken = loadERC20(LPTokenAddress, contracts.signer);
            const rawBalance = await LPToken.balanceOf(signerAddress);

            const parsed = parseDecimals(rawBalance, token.decimals).toNumber() / ROUND_CONSTANT;

            return [rawBalance, parsed] as any;
        }
    }

    async function availableCollateral(token: Approved) {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const collateralAmount = await contracts.marginLong.collateral(token.address, signerAddress);

            const parsed = parseDecimals(collateralAmount, token.decimals).toNumber() / ROUND_CONSTANT;

            return [collateralAmount, parsed] as any;
        }
    }

    async function availableLeverage(token: Approved) {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            let [maxLeverageNumerator, maxLeverageDenominator] = await contracts.marginLong.maxLeverage();
            const maxLeverage = maxLeverageNumerator
                .mul(SAFETY_THRESHOLD[1])
                .div(ethers.BigNumber.from(SAFETY_THRESHOLD[1]).add(SAFETY_THRESHOLD[0]))
                .div(maxLeverageDenominator);

            const maxPriceToAmount = async (maxPrice: ethers.BigNumber) => {
                const amount = await contracts.oracle.amountMin(token.address, maxPrice);
                const totalLiquidity = await contracts.lPool.liquidity(token.address);

                let finalAmount;
                if (amount.gt(totalLiquidity)) finalAmount = totalLiquidity;
                else finalAmount = amount;

                const parsed = parseDecimals(finalAmount, token.decimals).toNumber() / ROUND_CONSTANT;

                return [finalAmount, parsed] as any;
            };

            const isBorrowing = await contracts.marginLong["isBorrowing(address)"](signerAddress);
            if (isBorrowing) {
                const borrowedPrice = await contracts.marginLong.collateralPrice(signerAddress);
                const [leverageNumerator, leverageDenominator] = await contracts.marginLong.currentLeverage(signerAddress);

                const maxPrice = borrowedPrice.mul(maxLeverage.mul(leverageDenominator).sub(leverageNumerator)).div(leverageNumerator);
                return await maxPriceToAmount(maxPrice);
            } else {
                const collateralPrice = await contracts.marginLong.collateralPrice(signerAddress);
                let minCollateralPrice = await contracts.marginLong.minCollateralPrice();
                minCollateralPrice = minCollateralPrice.mul(SAFETY_THRESHOLD[1]).div(ethers.BigNumber.from(SAFETY_THRESHOLD[1]).sub(SAFETY_THRESHOLD[0]));

                if (collateralPrice.gte(minCollateralPrice)) return await maxPriceToAmount(collateralPrice.mul(maxLeverage));
                else return [ethers.BigNumber.from(0), 0] as any;
            }
        }
    }

    async function availableNativeCoinAmount() {
        if (contracts) {
            const balance = await contracts.signer.getBalance();

            const parsed = parseDecimals(balance, contracts.config.nativeCoin.decimals).toNumber() / ROUND_CONSTANT;

            return [balance, parsed] as any;
        }
    }

    async function availableWrappedTokenAmount() {
        if (contracts) {
            const signerAddress = await contracts.signer.getAddress();

            const wrapped = loadERC20(contracts.config.wrappedCoin.address, contracts.signer);

            const available = await wrapped.balanceOf(signerAddress);

            const parsed = parseDecimals(available, contracts.config.wrappedCoin.decimals).toNumber() / ROUND_CONSTANT;

            return [available, parsed] as any;
        }
    }

    useEffect(() => {
        if (!contracts) {
        } else {
            setProtocolMax({
                availableToken,
                availableLPToken,
                availableCollateral,
                availableLeverage,
                availableNativeCoinAmount,
                availableWrappedTokenAmount,
            });
        }
    }, [contracts]);

    return <protocolMaxCtx.Provider value={protocolMax}>{children}</protocolMaxCtx.Provider>;
}