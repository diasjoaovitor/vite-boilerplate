export function getErrorMessage(error: string) {
  switch (error) {
    case 'auth/invalid-login-credentials':
      return 'Email ou senha inválidos!'
    case 'auth/email-already-in-use':
      return 'Esse usuário já existe!'
    case 'auth/invalid-email':
      return 'Email inválido!'
    default:
      return 'Algo deu errado! Verifique sua conexão com a internet ou atualize a página!'
  }
}
