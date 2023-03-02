import { WagmiConfig, createClient, configureChains } from "wagmi";
import { hardhat, localhost } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, provider } = configureChains(
  [hardhat, localhost],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new MetaMaskConnector({
      chains,
      shimChainChangedDisconnect: false,
    }),
  ],
});

export const WagmiProvider = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
