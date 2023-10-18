import { render } from '@testing-library/react'
import { ThemeProvider } from '.'
import { dark } from '@/shared/themes'

describe('<ThemeProvider />', () => {
  it('should render default theme', () => {
    const { container } = render(<ThemeProvider>content</ThemeProvider>)
    expect(container.parentElement).toHaveStyle(
      `background-color: ${dark.palette.background.default}`
    )
  })
})
