export enum Network {
  POLYGON_AMOY = 'polygon-amoy',
  POLYGON = 'polygon',
  ETHEREUM_SEPOLIA = 'ethereum-sepolia',
  ETHEREUM = 'ethereum',
}

export const getAlchemyApiKey = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.ETHEREUM:
    return process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_API_KEY;
  case Network.ETHEREUM_SEPOLIA:
    return process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_API_KEY;
  default:
    throw new Error('Network not supported.')
  }
}

export const getNetworkUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON:
    return 'https://polygon-rpc.com/';
  case Network.POLYGON_AMOY:
    return 'https://rpc-amoy.polygon.technology/';
  case Network.ETHEREUM_SEPOLIA:
    return `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_API_KEY}`;
  case Network.ETHEREUM:
    return `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_API_KEY}`;
  default:
    throw new Error('Network not supported');
  }
};

export const getChainId = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON:
    return 137;
  case Network.POLYGON_AMOY:
    return 80002;
  case Network.ETHEREUM_SEPOLIA:
    return 11155111;
  case Network.ETHEREUM:
    return 1;
  }
};

export const getNetworkToken = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON_AMOY:
  case Network.POLYGON:
    return 'MATIC';
  case Network.ETHEREUM:
  case Network.ETHEREUM_SEPOLIA:
    return 'ETH';
  }
};

export const getFaucetUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON_AMOY:
    return 'https://faucet.polygon.technology/';
  case Network.ETHEREUM_SEPOLIA:
    return 'https://sepoliafaucet.com/';
  }
};

export const getNetworkName = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON:
    return 'Polygon (Mainnet)';
  case Network.POLYGON_AMOY:
    return 'Polygon (Amoy)';
  case Network.ETHEREUM_SEPOLIA:
    return 'Ethereum (Sepolia)';
  case Network.ETHEREUM:
    return 'Ethereum (Mainnet)';
  }
};

export const getBlockExplorer = (hash: string) => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
  case Network.POLYGON:
    return `https://polygonscan.com/tx/${hash}`;
  case Network.POLYGON_AMOY:
    return `https://www.oklink.com/amoy/tx/${hash}`;
  case Network.ETHEREUM:
    return `https://etherscan.io/tx/${hash}`;
  case Network.ETHEREUM_SEPOLIA:
    return `https://sepolia.etherscan.io/tx/${hash}`;
  }
}