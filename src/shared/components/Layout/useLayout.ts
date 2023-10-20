import { useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

export function useLayout() {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))

  const [isOpened, setIsOpened] = useState(md)

  useEffect(() => {
    setIsOpened(md)
  }, [md])

  const handleOpen = () => setIsOpened((IsOpened) => !IsOpened)

  return { isOpened, handleOpen }
}
