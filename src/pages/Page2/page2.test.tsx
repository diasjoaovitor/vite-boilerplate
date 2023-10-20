import { render, screen } from '@testing-library/react'
import { Page2 } from '.'

describe('<Page2 />', () => {
  it('should render the heading and main', () => {
    render(<Page2 />)
    expect(
      screen.getByRole('heading', { name: /página 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('main').firstChild!.textContent).toBe(
      'Conteúdo da página 2'
    )
  })
})
