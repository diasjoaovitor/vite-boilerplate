import { render, screen } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading and main', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /página inicial/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('main').firstChild!.textContent).toBe(
      'Conteúdo da página inicial'
    )
  })
})
