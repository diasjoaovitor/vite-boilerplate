import { Logout as LogoutIcon } from '@mui/icons-material'
import { ListItemButton } from '@mui/material'
import { useLogout } from './useLogout'

export function Logout() {
  const { handleLogout } = useLogout()
  return (
    <ListItemButton onClick={handleLogout}>
      <LogoutIcon />
      Logout
    </ListItemButton>
  )
}
