import { IoMoon, IoSunny } from 'react-icons/io5'
import tw from 'twin.macro'

import { useTheme } from '../state/theme'
import { styled } from '../stitches.config'

const Button = styled(
  'button',
  tw`flex items-center justify-center w-10 h-10 p-0 border border-solid rounded-full focus:outline-none dark:border-gray-800`
)

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      {theme == 'dark' ? <IoSunny /> : <IoMoon />}
    </Button>
  )
}
