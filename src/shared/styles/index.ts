import { SxProps, Theme } from '@mui/material'

export const Title: SxProps<Theme> = {
  '&::after': {
    content: '""',
    width: 60,
    height: 8,
    display: 'block',
    backgroundColor: '#42a5f5'
  }
}

export const FlexRow: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1
}

export const FlexColumn: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column'
}
