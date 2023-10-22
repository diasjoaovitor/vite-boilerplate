import { useNavigate } from 'react-router-dom'

export function useAuthFormSubmit() {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/')
  }

  return { handleSubmit }
}
