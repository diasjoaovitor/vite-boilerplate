import { PropsWithChildren, createContext, useContext } from 'react'
import {
  Theme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline
} from '@mui/material'
import { useTheme } from './useTheme'

type TThemeContext = {
  theme: Theme
  toggleTheme(): void
}

const ThemeContext = createContext({} as TThemeContext)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const provider = useTheme()
  return (
    <ThemeContext.Provider value={provider}>
      <MUIThemeProvider theme={provider.theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
