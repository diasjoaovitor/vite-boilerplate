import { ReactNode } from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { AppBar } from '..'
import * as S from './style'

type Props = {
  title: string
  children: ReactNode
}

export function Layout({ title, children }: Props) {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box sx={S.Wrapper}>
      <AppBar {...{ title, md }} />
      <Box sx={S.Content}>
        {md && (
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
        )}
        <main>{children}</main>
      </Box>
    </Box>
  )
}
