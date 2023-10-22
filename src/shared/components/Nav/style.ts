import { CSSObject, SxProps, Theme } from '@mui/material'
import * as GS from '@/shared/styles'

export const Wrapper: SxProps<Theme> = {
  flex: 1,
  py: 2,
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  '& .MuiListItemButton-root': {
    ...(GS.FlexRow as CSSObject)
  },
  '& > div:last-of-type': {
    hr: {
      my: 1
    }
  },
  justifyContent: 'space-between',
  ...GS.FlexColumn
}
