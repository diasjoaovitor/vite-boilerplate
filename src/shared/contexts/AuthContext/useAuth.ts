import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { authConfig } from '@/shared/firebase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    authConfig.onAuthStateChanged((user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [])

  return { user, isLoading }
}
