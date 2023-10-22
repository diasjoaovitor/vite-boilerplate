import { Auth } from '@/shared/components'
import { inputs } from './inputs'

export function Register() {
  const handleSubmit = async () => console.log('register')
  return (
    <Auth
      title="Registrar"
      inputs={inputs}
      redirect={{ to: '/entrar', text: 'Já tenho uma conta!' }}
      handleSubmit={handleSubmit}
    />
  )
}
