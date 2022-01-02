import { useEffect, useState } from "react";
import AssetPanel from "../../../assetPanel";
import { AssetData } from "../../home/row";
import config from "../../../../config/config.json";
import { ethers } from "ethers";
import parseNumber from "../../../../utils/parseNumber";
import useContracts from "../../../../utils/useContracts";
import useError from "../../../../utils/useError";
import { useWeb3React } from "@web3-react/core";
import parseTime from "../../../../utils/parseTime";
import Tooltip from "../../../tooltip";

interface Data {
    debt: string;
    interest: string;
    marginLevel: string;
    minMarginLevel: string;
    minBorrowPeriod: string;
    available: string;
    marginBalance: string;
}

function Borrow(props: { collateral: AssetData; setBorrowed: (asset: AssetData) => void }) {
    const { library } = useWeb3React();

    const [amount, setAmount] = useState<ethers.BigNumber>(ethers.BigNumber.from(0));
    const [asset, setAsset] = useState<AssetData>(config.approved[0]);

    const [contracts] = useContracts();

    const [, setError] = useError();

    const [data, setData] = useState<Data | null>(null);

    const [maxBorrow, setMaxBorrow] = useState<ethers.BigNumber | undefined>(undefined);

    useEffect(() => {
        props.setBorrowed(asset);
    }, [asset]);

    useEffect(() => {
        const margin = contracts?.margin;
        const oracle = contracts?.oracle;
        const periodId = contracts?.periodId;

        (async () => {
            const tempData: Data = {} as any;

            const oracleDecimals = await oracle?.getDecimals();

            const provider = new ethers.providers.Web3Provider(library.provider);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();

            tempData.debt = parseNumber(await margin?.debtOf(signerAddress, props.collateral.address, asset.address), asset.decimals);

            const totalBorrowed = await margin?.totalBorrowed(asset.address);
            if (totalBorrowed.gt(0)) {
                const decimals = await oracle?.getDecimals();
                const interestRate = await margin?.calculateInterestRate(asset.address);
                const dailyInterestRate = interestRate.mul(86400);

                tempData.interest = parseNumber(dailyInterestRate, decimals.div(100));
            } else tempData.interest = parseNumber("0", 0);

            tempData.marginLevel = parseNumber(await margin?.getMarginLevel(signerAddress, props.collateral.address, asset.address), oracleDecimals);
            tempData.minMarginLevel = parseNumber(await margin?.getMinMarginLevel(), oracleDecimals);

            const lastBorrowTime = await margin?.borrowTime(signerAddress, props.collateral.address, asset.address);
            const minBorrowLength = await margin?.getMinBorrowLength();
            tempData.minBorrowPeriod = parseTime(lastBorrowTime.add(minBorrowLength).toNumber() * 1000);

            const liquidityAvailable = await margin?.liquidityAvailable(asset.address);
            tempData.available = parseNumber(liquidityAvailable, asset.decimals);
            if (totalBorrowed.gt(0))
                tempData.marginBalance = parseNumber(
                    await margin?.balanceOf(signerAddress, props.collateral.address, asset.address, periodId),
                    props.collateral.decimals
                );
            else
                tempData.marginBalance = parseNumber(
                    await margin?.collateralOf(signerAddress, props.collateral.address, asset.address, periodId),
                    props.collateral.decimals
                );

            setData(tempData);
            setMaxBorrow(liquidityAvailable);
        })();
    }, [contracts, asset, props.collateral]);

    async function borrow() {
        // Require a specific amount before borrowing
        if (!amount.gt(0)) return;

        try {
            // Borrow assets against collateral
            const margin = contracts?.margin;

            // Borrow for the current period
            await margin?.borrow(props.collateral.address, asset.address, amount);
        } catch (e: any) {
            setError(e.data?.message || null);
        }
    }

    async function repay() {
        try {
            // Repay the borrowed assets
            const margin = contracts?.margin;
            const periodId = contracts?.periodId;

            const provider = new ethers.providers.Web3Provider(library.provider);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();

            // Repay the current period id
            await margin?.repay(signerAddress, props.collateral.address, asset.address, periodId);
        } catch (e: any) {
            setError(e.data?.message || null);
        }
    }

    return (
        <div className="flex flex-col justify-center items-stretch">
            <h2 className="text-white text-lg font-medium mx-5">Borrow</h2>
            <AssetPanel onChangeAsset={setAsset} onChangeAmount={setAmount} max={maxBorrow} />
            <div className="grid grid-cols-2 gap-6 mx-5 mb-4">
                <Tooltip tooltip="The amount borrowed">
                    Debt: {data?.debt} {asset.symbol}
                </Tooltip>
                <Tooltip tooltip="The daily interest rate">Interest rate: {data?.interest}%</Tooltip>
                <Tooltip tooltip="If this falls below the minimum level you will be liquidated">Margin level: {data?.marginLevel}</Tooltip>
                <Tooltip>Min margin level: {data?.minMarginLevel}</Tooltip>
                <Tooltip tooltip="The time remaining before you may repay">Min borrow period end: {data?.minBorrowPeriod}</Tooltip>
                <Tooltip>
                    Available: {data?.available} {asset.symbol}
                </Tooltip>
                <Tooltip>
                    Margin balance: {data?.marginBalance} {props.collateral.symbol}
                </Tooltip>
            </div>
            <button
                className={`${amount.gt(0) ? "bg-indigo-600 hover:bg-indigo-700" : "bg-zinc-500 cursor-default"} p-3 rounded-md text-white font-medium mb-3`}
                onClick={borrow}
            >
                Borrow {parseNumber(amount, asset.decimals)} {asset.symbol}
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-md text-white font-medium" onClick={repay}>
                Repay
            </button>
        </div>
    );
}

export default Borrow;