import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthError } from 'firebase/auth'
import { getErrorMessage } from '@/shared/errors'
import { getElementValues } from '@/shared/functions'

export function useAuth(
  auth: (email: string, password: string) => Promise<void>
) {
  const navigate = useNavigate()

  const [error, setError] = useState<string | null>(null)

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      auth(email, password),
    onSuccess: () => navigate('/'),
    onError: (error: AuthError) => setError(getErrorMessage(error.code))
  })

  const handleClose = () => setError(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [email, password, passwordConfirmation] = getElementValues(e, [
      'email',
      'password',
      'passwordConfirmation'
    ])
    if (passwordConfirmation && password !== passwordConfirmation) {
      setError('As senhas digitadas não são iguais!')
      return
    }
    mutate({ email, password })
  }

  return { isPending, error, handleClose, handleSubmit }
}
