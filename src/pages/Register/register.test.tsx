import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { register } from '@/shared/firebase'
import { Register } from '.'

jest.mock('../../shared/firebase')

const mockedRegister = register as jest.Mock

const client = new QueryClient()

function memoryRouter() {
  const router = createMemoryRouter(
    [
      {
        path: '/registrar',
        element: <Register />
      },
      {
        path: '/',
        element: <></>
      }
    ],
    {
      initialEntries: ['/registrar']
    }
  )
  render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
  return router
}

describe('<Register />', () => {
  it('should register correctly', async () => {
    mockedRegister.mockImplementation(() => Promise.resolve())
    const router = memoryRouter()
    fireEvent.submit(screen.getByRole('form'))
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/')
    })
  })

  it('should render error message when email already in use', async () => {
    mockedRegister.mockImplementation(() => {
      throw { code: 'auth/email-already-in-use' }
    })
    memoryRouter()
    fireEvent.submit(screen.getByRole('form'))
    await waitFor(() => {
      expect(screen.getByText('Esse usuário já existe!')).toBeInTheDocument()
    })
  })

  it('should render error message when invalid email', async () => {
    mockedRegister.mockImplementation(() => {
      throw { code: 'auth/invalid-email' }
    })
    memoryRouter()
    fireEvent.submit(screen.getByRole('form'))
    await waitFor(() => {
      expect(screen.getByText('Email inválido!')).toBeInTheDocument()
    })
  })

  it('should render error message when passwords is not equals', async () => {
    mockedRegister.mockReturnValue({})
    memoryRouter()
    await userEvent.type(screen.getByLabelText('Email *'), 'email@email.com')
    await userEvent.type(screen.getByLabelText('Senha *'), '123456')
    await userEvent.type(screen.getByLabelText('Repita sua senha *'), 'abcdefg')
    fireEvent.submit(screen.getByRole('form'))
    await waitFor(() => {
      expect(
        screen.getByText('As senhas digitadas não são iguais!')
      ).toBeInTheDocument()
    })
  })
})
