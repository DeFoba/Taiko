import { getAccount } from '@wagmi/core';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';

import { http } from '@wagmi/core';

import { PUBLIC_WALLETCONNECT_PROJECT_ID } from '$env/static/public';
import { mainnet } from 'viem/chains';
import { defineChain } from 'viem';

const projectId = PUBLIC_WALLETCONNECT_PROJECT_ID;

const taikoHekla = defineChain({
  // Should be in viem package 2.9.18
  id: 167009,
  name: 'Taiko Hekla (Alpha-7 Testnet)',
  network: 'tko-hekla',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.hekla.taiko.xyz'],
    },
    public: {
      http: ['https://rpc.hekla.taiko.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'taikoscan',
      url: 'https://hekla.taikoscan.network',
    },
  },
  testnet: true,
});

// export const chains = [mainnet] as const;
const chains = [mainnet] as const;
const metadata = {
  name: 'Taiko Trailblazer',
  description: 'Taiko Trailblazer',
  url: 'https://airdrop.taiko.xyz',
  icons: ['https://avatars.githubusercontent.com/u/99078433'],
};

const transport = http('http://127.0.0.1:8545', {
  retryCount: 1,
  retryDelay: 59_000,
  timeout: 60_000,
});

const recommendedWallets = ['38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662'];

// export const wagmiConfig = defaultWagmiConfig({ projectId, chains, metadata, transports: { [hardhat.id]: transport } });
export const wagmiConfig = defaultWagmiConfig({ projectId, chains, metadata });

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  allWallets: 'SHOW',
  featuredWalletIds: recommendedWallets,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Clash Grotesk',
    '--w3m-color-mix-strength': 10,
    '--w3m-accent': '#E81899',
    '--w3m-color-mix': '#FFFFFF',
  },
  chainImages: {
    167009: '/chains/taiko.svg',
  },
});

export function getCurrentAddressOrNull(): `0x${string}` | undefined {
  const { address } = getAccount(wagmiConfig);
  return address;
}

export function handleConnectWallet() {
  // Do not open if connection is active
  web3Modal.open({ view: 'Connect' });
}

export function handleDisconnectWallet() {
  // Do not open if connection is active
  web3Modal.open({ view: 'Account' });
}
