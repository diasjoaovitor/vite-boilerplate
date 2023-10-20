import { render, screen } from '@testing-library/react'
import { Logout } from '.'

describe('<Logout />', () => {
  it('should render the button', () => {
    render(<Logout />)
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument()
  })
})
