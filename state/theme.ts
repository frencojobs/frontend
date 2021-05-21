import create from 'zustand'

type ThemeStore = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const useTheme = create<ThemeStore>((set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((self) => {
      const theme = self.theme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme', JSON.stringify(theme))
      return { theme }
    })
  },
}))
