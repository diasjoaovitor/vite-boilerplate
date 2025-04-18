import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { MyComponent } from '.'

describe('<MyComponent />', () => {
  test('should render component', () => {
    render(<MyComponent />)
    expect(screen.getByText('MyComponent')).toBeInTheDocument()
  })
})
