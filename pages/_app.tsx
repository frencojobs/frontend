import '../styles/tailwind.css'

import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { Provider as JotaiRoot } from 'jotai'
import { useAtom } from 'jotai'
import { AppProps } from 'next/app'

import { themeAtom } from '../state/atoms'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <JotaiRoot>
    <GeistApp>
      <Component {...pageProps} />
    </GeistApp>
  </JotaiRoot>
)

const GeistApp: React.FC = ({ children }) => {
  const [theme] = useAtom(themeAtom)

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}

export default App
