import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { AuthProvider, PrivateRoute } from '.'
import { useAuth } from './useAuth'

jest.mock('./useAuth.ts')

const mockedUseAuth = useAuth as jest.Mock<{
  isLoading: boolean
  user: null | string
}>

function memoryRouter() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <AuthProvider>
            <PrivateRoute />
          </AuthProvider>
        )
      },
      { path: '/entrar', element: <AuthProvider /> }
    ],
    {
      initialEntries: ['/']
    }
  )
  render(<RouterProvider router={router} />)
  return router
}

describe('<ThemeProvider />', () => {
  it('should redirect to authentication page', () => {
    mockedUseAuth.mockImplementation(() => ({
      isLoading: false,
      user: null
    }))
    const router = memoryRouter()
    expect(router.state.location.pathname).toBe('/entrar')
  })

  it('should access private route', () => {
    mockedUseAuth.mockImplementation(() => ({
      isLoading: false,
      user: 'user'
    }))
    const router = memoryRouter()
    expect(router.state.location.pathname).toBe('/')
  })
})
