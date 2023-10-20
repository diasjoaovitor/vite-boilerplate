import { fireEvent, render, screen } from '@testing-library/react'
import { Nav } from '.'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

function memoryRouter() {
  const router = createMemoryRouter(
    [
      { path: '/', element: <Nav /> },
      { path: '/pagina2', element: <Nav /> },
      { path: '/pagina3', element: <Nav /> }
    ],
    {
      initialEntries: ['/']
    }
  )
  render(<RouterProvider router={router} />)
  return router
}

describe('<Nav />', () => {
  it('should navigate to another page', () => {
    const router = memoryRouter()
    const navItems = screen.getAllByRole('button')
    const [page1, page2, page3] = navItems
    fireEvent.click(page2)
    expect(router.state.location.pathname).toBe('/pagina2')
    fireEvent.click(page3)
    expect(router.state.location.pathname).toBe('/pagina3')
    fireEvent.click(page1)
    expect(router.state.location.pathname).toBe('/')
  })
})
