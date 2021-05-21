import '../styles/tailwind.css'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import SEO from '../lib/seo.config'
import { useTheme } from '../state/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemedApp>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </ThemedApp>
)

const ThemedApp: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme === null) {
      const systemTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      if (systemTheme != theme) toggleTheme()
    } else {
      if (JSON.parse(savedTheme) != theme) toggleTheme()
    }
  }, [])

  return (
    <div className={theme}>
      <Head>
        <meta
          name="theme-color"
          content={theme === 'light' ? '#fff' : '#000'}
        />
      </Head>
      {children}
    </div>
  )
}

export default App
