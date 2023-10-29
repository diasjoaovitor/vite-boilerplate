import { render } from '@testing-library/react'
import { Loader } from '.'

describe('<Loader />', () => {
  it('should render the loading spinner', () => {
    const { container } = render(<Loader open={true} />)
    expect(container.querySelector('.MuiBackdrop-root')).not.toHaveStyle(
      'visibility: hidden'
    )
  })

  it('should not render the loading spinner', () => {
    const { container } = render(<Loader open={false} />)
    expect(container.querySelector('.MuiBackdrop-root')).toHaveStyle(
      'visibility: hidden'
    )
  })
})
