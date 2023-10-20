import { Box } from '@mui/material'
import { Layout } from '@/shared/components'
import * as S from './style'

export function Page2() {
  return (
    <Box sx={S.Wrapper}>
      <Layout title="Página 2">Conteúdo da página 2</Layout>
    </Box>
  )
}
