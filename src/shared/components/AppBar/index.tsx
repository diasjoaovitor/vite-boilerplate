import {
  AppBar as MUIAppBar,
  Typography,
  Toolbar,
  IconButton,
  CSSObject,
  Divider
} from '@mui/material'
import { Menu, MenuOpen } from '@mui/icons-material'
import { Logo, Nav } from '..'
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
            <>
              <IconButton size="large" edge="start" onClick={handleOpen}>
                <MenuIcon />
              </IconButton>
              <Typography ml={2} component="h1" variant="h6">
                {title}
              </Typography>
            </>
          ) : (
            <Logo />
          )}
        </Toolbar>
        <Divider />
        {isOpened && <Nav />}
      </MUIAppBar>
    </>
  )
}
