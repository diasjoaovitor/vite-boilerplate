import { TAuthInputProps } from '@/shared/components'
import { inputs as loginInputs } from '../Login/inputs'

export const inputs: TAuthInputProps[] = [
  ...loginInputs,
  {
    label: 'Repita sua senha',
    name: 'passwordConfirmation',
    type: 'password'
  }
]
