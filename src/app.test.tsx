import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render the heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /app/i })
    ).toBeInTheDocument()
  })
})
