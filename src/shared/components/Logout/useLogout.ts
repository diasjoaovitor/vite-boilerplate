import { useNavigate } from 'react-router-dom'

export function useLogout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/entrar')
  }

  return { handleLogout }
}
