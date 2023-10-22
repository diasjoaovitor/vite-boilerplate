import { Auth } from '@/shared/components'
import { inputs } from './inputs'
import { useAuthFormSubmit } from '@/shared/hooks'

export function Login() {
  const { handleSubmit } = useAuthFormSubmit()
  return (
    <Auth
      title="Entrar"
      inputs={inputs}
      redirect={{ to: '/registrar', text: 'Não tem uma conta? Cadastra-se!' }}
      handleSubmit={handleSubmit}
    />
  )
}
