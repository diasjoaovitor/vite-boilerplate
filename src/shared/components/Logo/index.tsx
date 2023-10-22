import { Box, Typography } from '@mui/material'
import { ViteIcon } from '@/shared/icons'
import * as GS from '@/shared/styles'

export function Logo() {
  return (
    <Box sx={GS.FlexRow}>
      <ViteIcon />
      <Typography ml={1} variant="h6">
        Vite Boilerplate
      </Typography>
    </Box>
  )
}
