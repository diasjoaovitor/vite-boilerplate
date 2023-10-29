import { logout } from '@/shared/firebase'

export function useLogout() {
  const handleLogout = async () => {
    await logout()
  }

  return { handleLogout }
}
