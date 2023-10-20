import { fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { AppBar } from '.'

function Page({ md }: { md: boolean }) {
  const router = createMemoryRouter(
    [{ path: '/', element: <AppBar title="Página Inicial" md={md} /> }],
    {
      initialEntries: ['/']
    }
  )
  return <RouterProvider router={router} />
}

describe('<AppBar />', () => {
  it('should render the heading when nav is closed', () => {
    render(<Page md={false} />)
    expect(
      screen.getByRole('heading', { name: /página inicial/i })
    ).toBeInTheDocument()
  })

  it('should render the nav when click on menu button', () => {
    render(<Page md={false} />)
    const menu = screen.getByTestId('MenuIcon')
      .parentElement as HTMLButtonElement
    fireEvent.click(menu)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    const menuOpen = screen.getByTestId('MenuOpenIcon')
    fireEvent.click(menuOpen)
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
