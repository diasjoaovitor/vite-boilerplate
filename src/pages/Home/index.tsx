import { Box } from '@mui/material'
import { Layout } from '../../shared/components'
import * as S from './style'

export function Home() {
  return (
    <Box sx={S.Wrapper}>
      <Layout title="Home">
        home content
      </Layout>
    </Box>
  )
}
