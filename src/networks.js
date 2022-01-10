
export const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,// A 0x-prefixed hexadecimal string
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  optimism: {
    chainId: `oxa`,// A 0x-prefixed hexadecimal string
    chainName: 'Optimistic Ethereum"',
    nativeCurrency: {
      name: "Ether",
      symbol: "OETH",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://mainnet.optimism.io/"],
    blockExplorerUrls: ["https://optimistic.etherscan.io"]
  },
  arbitrium: {
    chainid: '0xA4B1',
    chainName: 'Arbitrum on xDai',
    nativeCurrency: {
      name: "xDAI",
      symbol: "xDAI",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://arbitrum.xdaichain.com/"],
    blockExplorerUrls: ["https://blockscout.com/xdai/arbitrum"]
  }
}