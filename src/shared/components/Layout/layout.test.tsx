import { render, screen } from '@testing-library/react'
import { Layout } from '.'

describe('<Layout />', () => {
  it('should render the heading and main', () => {
    render(
      <Layout title="Layout">
        content
      </Layout>
    )
    expect(screen.getByRole('heading', { name: /Layout/i })).toBeInTheDocument()
    expect(screen.getByRole('main').textContent).toBe('content')
  })
})
