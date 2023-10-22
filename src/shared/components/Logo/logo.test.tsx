import { render, screen } from '@testing-library/react'
import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the app logo', () => {
    render(<Logo />)
    expect(screen.getByText('Vite Boilerplate')).toBeInTheDocument()
  })
})
