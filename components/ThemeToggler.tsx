import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import tw, { styled } from 'twin.macro'

import { useTheme } from '../state/theme'

const Button = styled.button([
  tw`flex items-center justify-center w-10 h-10 p-0 border border-solid rounded-full dark:border-gray-800`,
  tw`focus:outline-none`,
])

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      {theme == 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
