import create from 'zustand'

import type { Theme } from '../types'

type Store = {
  theme: Theme
  toggleTheme: () => void
}

export const useStore = create<Store>((set) => ({
  theme: 'day',
  toggleTheme: () =>
    set((self) => ({ theme: self.theme === 'day' ? 'night' : 'day' })),
}))
