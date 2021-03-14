import '../styles/tailwind.css'

import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

import SEO from '../lib/seo.config'
import themes from '../lib/themes'
import { useStore } from '../state/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <GeistApp>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </GeistApp>
)

const GeistApp: React.FC = ({ children }) => {
  const theme = useStore((state) => state.theme)

  return (
    <GeistProvider themes={Object.values(themes)} themeType={theme}>
      <CssBaseline />
      {children}
    </GeistProvider>
  )
}

export default App
