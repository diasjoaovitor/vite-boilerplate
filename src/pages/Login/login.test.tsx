import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Login } from '.'

function Page() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Login />
      }
    ],
    {
      initialEntries: ['/']
    }
  )
  return <RouterProvider router={router} />
}

describe('<Login />', () => {
  it('should render the heading', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: /Entrar/i })).toBeInTheDocument()
  })
})
