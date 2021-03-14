import { Button } from '@geist-ui/react'
import { IoMoon, IoSunny } from 'react-icons/io5'

import { useStore } from '../state/store'

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useStore(({ theme, toggleTheme }) => ({
    theme,
    toggleTheme,
  }))

  return (
    <Button
      icon={theme == 'day' ? <IoSunny /> : <IoMoon />}
      type="secondary"
      size="large"
      auto
      ghost
      onClick={toggleTheme}
      className="p-0 rounded-full w-11"
    />
  )
}
