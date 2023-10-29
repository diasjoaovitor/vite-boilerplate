import { Backdrop, CircularProgress } from '@mui/material'

export function Loader({ open }: { open: boolean }) {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={open}
    >
      <CircularProgress />
    </Backdrop>
  )
}
