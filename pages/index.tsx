import { Button } from '@geist-ui/react'
import Moon from '@geist-ui/react-icons/moon'
import Sun from '@geist-ui/react-icons/sun'
import { useAtom } from 'jotai'
import { NextPage } from 'next'

import { themeAtom } from '../state/atoms'

const IndexPage: NextPage = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <Button
        icon={theme == 'light' ? <Moon /> : <Sun />}
        type="secondary"
        size="small"
        auto
        ghost
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      />
    </main>
  )
}

export default IndexPage
