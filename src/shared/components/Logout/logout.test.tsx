import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Logout } from '.'

function Page() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Logout />
      }
    ],
    {
      initialEntries: ['/']
    }
  )
  return <RouterProvider router={router} />
}

describe('<Logout />', () => {
  it('should render the button', () => {
    render(<Page />)
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument()
  })
})
