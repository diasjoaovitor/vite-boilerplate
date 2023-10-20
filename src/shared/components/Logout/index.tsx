import { Logout as LogoutIcon } from '@mui/icons-material'
import { ListItemButton } from '@mui/material'

export function Logout() {
  const handleClick = () => console.log('logout')
  return (
    <ListItemButton onClick={handleClick}>
      <LogoutIcon />
      Logout
    </ListItemButton>
  )
}
