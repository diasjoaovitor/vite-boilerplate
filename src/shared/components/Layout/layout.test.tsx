import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@/shared/contexts'
import { Layout } from '.'

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn()
}))

const mockedUseMediaQuery = useMediaQuery as jest.Mock

function Page() {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <ThemeProvider>
            <Layout title="Página Inicial">conteúdo da página inicial</Layout>
          </ThemeProvider>
        )
      }
    ],
    {
      initialEntries: ['/']
    }
  )
  return <RouterProvider router={router} />
}

describe('<Layout />', () => {
  it('should render the closed nav on mobile and the page title inside the header', () => {
    mockedUseMediaQuery.mockReturnValue(false)
    render(<Page />)
    const menuIcon = screen.getByTestId('MenuIcon')
    const title = menuIcon.parentElement!
      .nextElementSibling as HTMLHeadingElement
    expect(menuIcon).toBeInTheDocument()
    expect(title.textContent).toBe('Página Inicial')
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should render the nav open on the desktop and the page title should not be inside the header', () => {
    mockedUseMediaQuery.mockReturnValue(true)
    render(<Page />)
    const viteIcon = screen.getByTestId('ViteIcon')
    const title = viteIcon.nextElementSibling as HTMLDivElement
    expect(viteIcon).toBeInTheDocument()
    expect(title.textContent).toBe('Vite Boilerplate')
    expect(screen.queryByRole('navigation')).toBeInTheDocument()
  })
})
