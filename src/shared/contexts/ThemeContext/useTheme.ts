import { useCallback, useMemo, useState } from 'react'
import { darkTheme, lightTheme } from '@/shared/themes'

export function useTheme() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark')

  const theme = useMemo(() => {
    return themeName === 'dark' ? darkTheme : lightTheme
  }, [themeName])

  const toggleTheme = useCallback(() => {
    setThemeName((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
