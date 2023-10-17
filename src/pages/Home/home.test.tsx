import { render, screen } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading and main', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('main').textContent).toBe('home content')
  })
})
