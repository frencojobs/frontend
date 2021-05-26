import { Switch } from '@headlessui/react'
import tw from 'twin.macro'

import { useTheme } from '../state/theme'

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch.Group as="div" tw="flex flex-row items-center">
      <Switch.Label tw="mr-5 text-lg">Toggle dark mode</Switch.Label>
      <Switch
        checked={false}
        onChange={toggleTheme}
        css={[
          tw`relative inline-flex items-center h-6 transition-colors rounded-full w-11`,
          tw`focus:(outline-none ring ring-emerald-300)`,
          theme == 'dark' ? tw`bg-emerald-500` : tw`bg-gray-200`,
        ]}>
        <span
          css={[
            tw`inline-block w-4 h-4 transition-transform transform bg-white rounded-full shadow focus:outline-none`,
            theme == 'dark' ? tw`translate-x-6` : tw`translate-x-1`,
          ]}
        />
      </Switch>
    </Switch.Group>
  )
}
