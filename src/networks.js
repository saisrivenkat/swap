
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
    chainId: `0x${Number(10).toString(16)}`,// A 0x-prefixed hexadecimal string
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
    chainid: `0x${Number(200).toString(16)}`,
    chainName: 'Arbitrum on xDai',
    nativeCurrency: {
      name: "xDAI",
      symbol: "xDAI",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://arbitrum.xdaichain.com/"],
    blockExplorerUrls: ["https://blockscout.com/xdai/arbitrum"]
  },
  fantom: {
    chainid: `0x${Number(250).toString(16)}`,
    chainName: 'Fantom Opera',
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://rpc.ftm.tools"],
    blockExplorerUrls: ["https://ftmscan.com"]
  },
  avax: {
    chainid: `0x${Number(43114).toString(16)}`,
    chainName: 'Avalanche Mainnet',
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://snowtrace.io/"]
  },
  xDai: {
    chainid: `0x${Number(100).toString(16)}`,
    chainName: 'Gnosis Chain (formerly xDai)',
    nativeCurrency: {
      name: "xDAI",
      symbol: "xDAI",// 2-6 characters long
      decimals: 18
    },
    rpcUrls: [
      "https://rpc.xdaichain.com",
      "https://xdai.poanetwork.dev",
      "wss://rpc.xdaichain.com/wss",
      "wss://xdai.poanetwork.dev/wss",
      "http://xdai.poanetwork.dev",
      "https://dai.poa.network",
      "ws://xdai.poanetwork.dev:8546"
    ],
    blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"]
  }
}