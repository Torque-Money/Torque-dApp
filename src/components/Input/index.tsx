import { Button, Group, NumberInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useInput } from "../../hooks";

import { approve, getTokenAmount, isApproved, Token } from "../../utils";

export default function VaultInputSingle({
    token,
    account,
    vault,
    library,
    onChange,
    defaultValue,
}: {
    token: Token;
    account: string;
    vault: string;
    library: any;
    onChange?: (data: string) => void;
    defaultValue?: string;
}) {
    const { amount, setAmount, approved, setApproved, max, error } = useInput(token, account, vault, library, onChange, defaultValue);

    return (
        <NumberInput
            variant="default"
            placeholder="0.0"
            label={token.name}
            icon={token.icon(25)}
            size="md"
            error={error}
            hideControls
            value={isNaN(parseFloat(amount)) ? undefined : parseFloat(amount)}
            onChange={(num) => setAmount(num ? num.toString() : "")}
            rightSection={
                <Group position="apart">
                    {!approved && (
                        <Button
                            onClick={async () => {
                                await approve(token.address, account as string, vault, library.getSigner());
                                setApproved(true);
                            }}
                            size="xs"
                            color="indigo"
                            variant="subtle"
                        >
                            Approve
                        </Button>
                    )}
                    <Button size="xs" color="grape" variant="subtle" onClick={() => setAmount(max.toString())}>
                        Max
                    </Button>
                </Group>
            }
            rightSectionWidth={!approved ? 160 : 65}
        />
    );
}
