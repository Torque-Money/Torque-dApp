import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

import { injected, walletConnect, walletLink } from "../../../../connectors";
import { SupportedChainId } from "../../../../utils/ChainData";

export function useMetamask() {
    const { activate } = useWeb3React();

    const LOCAL_NAME = "METAMASK_CONNECTED";

    async function connect() {
        await activate(injected, undefined, true);
        localStorage.setItem(LOCAL_NAME, JSON.stringify(true));
    }

    useEffect(() => {
        const storage = localStorage.getItem(LOCAL_NAME);
        if (storage != null && JSON.parse(storage)) connect();
    }, []);

    return connect;
}

export function useWalletConnect(chainId: SupportedChainId) {
    const { activate } = useWeb3React();

    const LOCAL_NAME = "WALLETCONNECT_CONNECTED";

    async function connect() {
        await activate(walletConnect(chainId), undefined, true);
        localStorage.setItem(LOCAL_NAME, JSON.stringify(true));
    }

    useEffect(() => {
        const storage = localStorage.getItem(LOCAL_NAME);
        if (storage != null && JSON.parse(storage)) connect();
    }, []);

    return connect;
}

export function useWalletLink(chainId: SupportedChainId) {
    const { activate } = useWeb3React();

    const LOCAL_NAME = "WALLETLINK_CONNECTED";

    async function connect() {
        await activate(walletLink(chainId), undefined, true);
        localStorage.setItem(LOCAL_NAME, JSON.stringify(true));
    }

    useEffect(() => {
        const storage = localStorage.getItem(LOCAL_NAME);
        if (storage != null && JSON.parse(storage)) connect();
    }, []);

    return connect;
}
