import { fireEvent, render } from '@testing-library/react'
import { darkTheme, lightTheme } from '@/shared/themes'
import { ThemeProvider } from '@/shared/contexts'
import { ToggleTheme } from '.'

describe('<ToggleTheme />', () => {
  it('should toggle theme between dark and light', () => {
    const { container } = render(
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    )
    fireEvent.click(container.firstChild as HTMLDivElement)
    expect(container.parentElement).toHaveStyle(
      `background-color: ${lightTheme.palette.background.default}`
    )
    fireEvent.click(container.firstChild as HTMLDivElement)
    expect(container.parentElement).toHaveStyle(
      `background-color: ${darkTheme.palette.background.default}`
    )
  })
})
