import { Auth } from '@/shared/components'
import { register } from '@/shared/firebase'
import { useAuth } from '@/shared/hooks'
import { inputs } from './inputs'

export function Register() {
  const props = useAuth(register)
  return (
    <Auth
      title="Registrar"
      inputs={inputs}
      redirect={{ to: '/entrar', text: 'Já tenho uma conta!' }}
      {...props}
    />
  )
}
