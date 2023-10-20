import { SxProps, Theme } from '@mui/material'

export const Wrapper: SxProps<Theme> = {
  position: 'static',
  backgroundImage: 'none',
  boxShadow: 'none'
}

export const Opened: SxProps<Theme> = {
  height: '100vh',
  position: {
    md: 'static'
  },
  width: 260,
  left: 0,
  backgroundImage: 'background.paper'
}
