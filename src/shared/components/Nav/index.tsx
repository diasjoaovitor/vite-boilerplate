import { Link, useLocation } from 'react-router-dom'
import { Box, Divider, Link as MUILink, ListItemButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { Logout, ToggleTheme } from '..'
import { navItems } from './nav-items'
import * as S from './style'

export function Nav() {
  const { pathname } = useLocation()
  return (
    <Box sx={S.Wrapper} component="nav">
      <div>
        {navItems.map(({ label, to, icon: Icon }) => (
          <Link key={to} to={to}>
            <ListItemButton selected={to === pathname}>
              <Icon />
              {label}
            </ListItemButton>
          </Link>
        ))}
      </div>
      <div>
        <Divider />
        <ToggleTheme />
        <Divider />
        <Logout />
        <Divider />
        <MUILink href="https://github.com/diasjoaovitor" target="_blank">
          <ListItemButton>
            <GitHub />
            Criado por João Vitor
          </ListItemButton>
        </MUILink>
      </div>
    </Box>
  )
}
