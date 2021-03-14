import { GeistUIThemes, Themes } from '@geist-ui/react'

import type { Theme } from '../types'

const themes: { [K in Theme]: GeistUIThemes } = {
  day: Themes.createFromLight({
    type: 'day',
    font: {
      sans: '"Prodigy Sans", sans-serif',
      mono: '"Source Code Pro", monospace',
    },
  } as Partial<GeistUIThemes>),
  night: Themes.createFromDark({
    type: 'night',
    font: {
      sans: '"Prodigy Sans", sans-serif',
      mono: '"Source Code Pro", monospace',
    },
  } as Partial<GeistUIThemes>),
}

export default themes
