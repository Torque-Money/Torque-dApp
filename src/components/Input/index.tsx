import { Button, Group, NumberInput, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { approve, isApproved, Token } from "../../utils";

export default function VaultInputSingle({
    token,
    account,
    vault,
    library,
    onChange,
    onApprove,
}: {
    token: Token;
    account: string;
    vault: string;
    library: any;
    onChange?: (data: string) => void;
    onApprove?: () => void;
}) {
    const [amount, setAmount] = useState<string>("");
    const [approved, setApproved] = useState<boolean>(true);

    useEffect(() => {
        if (onChange) onChange(amount);
    }, [amount]);

    useEffect(() => {
        if (onApprove) onApprove();
    }, [approved]);

    useEffect(() => {
        (async () => setApproved(await isApproved(token.address, account, vault, library.getSigner())))();
    }, []);

    return (
        <Group direction="column" grow mt="sm">
            <NumberInput
                variant="default"
                mt="lg"
                label={
                    <Text weight={700}>
                        {" "}
                        {token.name} ({token.ticker})
                    </Text>
                }
                placeholder="0.0"
                size="md"
                hideControls
                value={isNaN(parseFloat(amount)) ? undefined : parseFloat(amount)}
                onChange={(num) => setAmount(num ? num.toString() : "")}
            />
            {!approved && (
                <Button
                    onClick={async () => {
                        await approve(token.address, account as string, vault, library.getSigner());
                        setApproved(true);
                    }}
                    size="md"
                    color="indigo"
                >
                    Approve
                </Button>
            )}
        </Group>
    );
}