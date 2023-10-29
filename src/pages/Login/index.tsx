import { Auth } from '@/shared/components'
import { login } from '@/shared/firebase'
import { useAuth } from '@/shared/hooks'
import { inputs } from './inputs'

export function Login() {
  const props = useAuth(login)
  return (
    <Auth
      title="Entrar"
      inputs={inputs}
      redirect={{ to: '/registrar', text: 'Não tem uma conta? Cadastre-se!' }}
      {...props}
    />
  )
}
