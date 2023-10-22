import { CSSObject, SxProps, Theme } from '@mui/material'
import * as GS from '@/shared/styles'

export const Wrapper: SxProps<Theme> = {
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  p: 2,
  ...GS.FlexColumn,
  a: {
    color: 'primary.main'
  }
}

export const Form: SxProps<Theme> = {
  p: 2,
  my: 2,
  h1: {
    mb: 2,
    ...(GS.Title as CSSObject)
  },
  '& .MuiInputBase-root': {
    marginBottom: 1
  }
}
