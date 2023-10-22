import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Register } from '.'

function Page() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Register />
      }
    ],
    {
      initialEntries: ['/']
    }
  )
  return <RouterProvider router={router} />
}

describe('<Register />', () => {
  it('should render the heading', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { name: /Registrar/i })
    ).toBeInTheDocument()
  })
})
