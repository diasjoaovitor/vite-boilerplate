import {
  AppBar as MUIAppBar,
  Typography,
  Toolbar,
  IconButton,
  CSSObject,
  Divider
} from '@mui/material'
import { Menu, MenuOpen } from '@mui/icons-material'
import { ViteIcon } from '@/shared/icons'
import { Nav } from '..'
import { useAppBar } from './useAppBar'
import * as S from './style'

type Props = {
  title: string
  md: boolean
}

export function AppBar({ title, md }: Props) {
  const { isOpened, handleOpen } = useAppBar(md)
  const MenuIcon = !isOpened ? Menu : MenuOpen
  return (
    <>
      {isOpened && !md && (
        <>
          <Toolbar />
          <Divider />
        </>
      )}
      <MUIAppBar
        sx={
          !isOpened ? S.Wrapper : ({ ...S.Wrapper, ...S.Opened } as CSSObject)
        }
      >
        <Toolbar>
          {!md ? (
            <IconButton size="large" edge="start" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <ViteIcon />
          )}
          <Typography ml={2} component={!md ? 'h1' : 'div'} variant="h6">
            {!md ? title : 'Vite Boilerplate'}
          </Typography>
        </Toolbar>
        <Divider />
        {isOpened && <Nav />}
      </MUIAppBar>
    </>
  )
}
