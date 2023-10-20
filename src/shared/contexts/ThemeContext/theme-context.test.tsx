import { render } from '@testing-library/react'
import { darkTheme } from '@/shared/themes'
import { ThemeProvider } from '.'

describe('<ThemeProvider />', () => {
  it('should render default theme', () => {
    const { container } = render(<ThemeProvider>content</ThemeProvider>)
    expect(container.parentElement).toHaveStyle(
      `background-color: ${darkTheme.palette.background.default}`
    )
  })
})
