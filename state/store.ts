import create from 'zustand'

type Store = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const useStore = create<Store>((set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((self) => {
      const theme = self.theme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme', JSON.stringify(theme))
      return { theme }
    })
  },
}))
