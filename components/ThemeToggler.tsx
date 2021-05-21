import { IoMoon, IoSunny } from 'react-icons/io5'

import { useTheme } from '../state/theme'

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 p-0 border border-solid rounded-full border-blueGray-200 focus:outline-none dark:border-gray-800">
      {theme == 'dark' ? <IoSunny /> : <IoMoon />}
    </button>
  )
}
