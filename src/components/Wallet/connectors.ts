import {InjectedConnector} from "@web3-react/injected-connector";

export const supportedChainIds = [4, 250, 31337];

export const injected = new InjectedConnector({
    supportedChainIds,
});
