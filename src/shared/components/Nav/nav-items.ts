import { Home, Looks3, LooksTwo, SvgIconComponent } from '@mui/icons-material'

type NavItem = {
  label: string
  to: string
  icon: SvgIconComponent
}

export const navItems: NavItem[] = [
  {
    label: 'Página Inicial',
    to: '/',
    icon: Home
  },
  {
    label: 'Página 2',
    to: '/pagina2',
    icon: LooksTwo
  },
  {
    label: 'Página 3',
    to: '/pagina3',
    icon: Looks3
  }
]
