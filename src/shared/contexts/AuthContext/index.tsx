import { createContext, PropsWithChildren, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { User } from 'firebase/auth'
import { Loader } from '@/shared/components'
import { useAuth } from './useAuth'

type TAuthContext = {
  user: User | null
}

const AuthContext = createContext({} as TAuthContext)

export const useAuthContext = () => useContext(AuthContext)

export function PrivateRoute() {
  const { user } = useAuthContext()
  return user ? <Outlet /> : <Navigate to="/entrar" />
}

export function AuthProvider({ children }: PropsWithChildren) {
  const { user, isLoading } = useAuth()
  return !isLoading ? (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  ) : (
    <Loader open={isLoading} />
  )
}
