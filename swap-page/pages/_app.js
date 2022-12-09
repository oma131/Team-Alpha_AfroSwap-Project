import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import merge from 'lodash.merge'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from '@rainbow-me/rainbowkit'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      priority: 1,
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'AfroSwap',
  chains,
})

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
})

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#B929D0',
    accentColorForeground: '#fff',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp