import { CSSObject, SxProps, Theme } from '@mui/material'
import * as GS from '@/shared/styles'

export const Wrapper: SxProps<Theme> = {
  display: {
    md: 'flex'
  },
  height: '100vh'
}

export const Content: SxProps<Theme> = {
  p: 2,
  overflow: 'auto',
  h1: {
    mb: 3,
    ...(GS.Title as CSSObject)
  }
}
