import { fireEvent, render, screen } from '@testing-library/react'
import { Alert } from '.'

const mockedHandleClose = jest.fn()

describe('<Alert />', () => {
  it('should render the alert message and call handleClose when close button is clicked', () => {
    render(
      <Alert
        severity="error"
        title="This is an error message"
        handleClose={mockedHandleClose}
      />
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('CloseIcon'))
    expect(mockedHandleClose).toHaveBeenCalled()
  })

  it('should not render the alert message', () => {
    render(<Alert severity="error" title="" handleClose={mockedHandleClose} />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
