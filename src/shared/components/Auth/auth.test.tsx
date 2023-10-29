import { fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Auth } from '.'

const mockedHandleSubmit = jest.fn((e) => e.preventDefault())

function memoryRouter(handleSubmit: (e: React.FormEvent) => Promise<void>) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <Auth
            inputs={[]}
            redirect={{ text: 'Navigate', to: '/page2' }}
            title="Auth"
            error={null}
            isPending={false}
            handleClose={jest.fn()}
            handleSubmit={handleSubmit}
          />
        )
      },
      {
        path: '/page2',
        element: <></>
      }
    ],
    {
      initialEntries: ['/']
    }
  )
  render(<RouterProvider router={router} />)
  return router
}

describe('<Auth />', () => {
  it('should submit the form', () => {
    memoryRouter(mockedHandleSubmit)
    fireEvent.click(screen.getByRole('button', { name: /Auth/i }))
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })

  it('should navigate to page 2', () => {
    const router = memoryRouter(mockedHandleSubmit)
    fireEvent.click(screen.getByRole('link', { name: /Navigate/i }))
    expect(router.state.location.pathname).toBe('/page2')
  })
})
