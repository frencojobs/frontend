import { Button, Tooltip } from '@geist-ui/react'
import Moon from '@geist-ui/react-icons/moon'
import Sun from '@geist-ui/react-icons/sun'
import { useAtom } from 'jotai'
import { NextPage } from 'next'

import { themeAtom } from '../state/atoms'

const IndexPage: NextPage = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <Tooltip text="Theme">
        <Button
          icon={theme == 'light' ? <Sun /> : <Moon />}
          type="secondary"
          size="large"
          auto
          ghost
          onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          className="p-0 border-2 rounded-full w-11 min"
        />
      </Tooltip>
    </main>
  )
}

export default IndexPage
