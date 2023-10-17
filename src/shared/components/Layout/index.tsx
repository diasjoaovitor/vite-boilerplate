import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import * as S from './style'

type Props = {
  title: string
  children: ReactNode
}

export function Layout({ title, children }: Props) {
  return (
    <Box sx={S.Wrapper}>
      <Typography component="h1">{title}</Typography>
      <main role="main">{children}</main>
    </Box>
  )
}
