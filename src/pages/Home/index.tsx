import { Box, Typography } from '@mui/material'
import { Layout } from '@/shared/components'
import * as S from './style'

export function Home() {
  return (
    <Box sx={S.Wrapper}>
      <Layout title="Página Inicial">
        <Typography>Conteúdo da página inicial</Typography>
        {new Array(20).fill(0).map((_, i) => (
          <Typography component="p" key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ea unde fugit inventore dolores ipsam ad consequuntur eum ratione
            reprehenderit facere laudantium, possimus dignissimos, ipsum autem
            ipsa. Laudantium, fugiat nesciunt.
          </Typography>
        ))}
      </Layout>
    </Box>
  )
}
