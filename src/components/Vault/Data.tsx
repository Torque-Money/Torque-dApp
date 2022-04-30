import { Group } from "@mantine/core";

import { useVaultData } from "../../hooks";
import VaultData from "./VaultData";

export default function Data({ vault, account }: { vault: string; account: string }) {
    const { apy, balance, fee, tvl } = useVaultData(vault, account);

    return (
        <Group position="apart">
            <VaultData label="APY:" value={apy} />
            <VaultData label="Balance:" value={balance} />
            <VaultData label="TVL:" value={tvl} />
            <VaultData label="Fee:" value={fee} />
        </Group>
    );
}