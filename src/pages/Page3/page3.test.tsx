import { render, screen } from '@testing-library/react'
import { Page3 } from '.'

describe('<Page3 />', () => {
  it('should render the heading and main', () => {
    render(<Page3 />)
    expect(
      screen.getByRole('heading', { name: /página 3/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('main').firstChild!.textContent).toBe(
      'Conteúdo da página 3'
    )
  })
})
