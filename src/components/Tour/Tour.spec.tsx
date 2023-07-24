import { cleanup, render, screen } from '@testing-library/react'
import { Tour } from './Tour'

describe('<Tour />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Tour />)

    const tour = screen.getByTestId('tour')

    expect(tour).toBeInTheDocument()
  })

  test('#2. show = true', () => {
    render(<Tour show={true} />)

    const tour = screen.getByTestId('tour')

    expect(tour).toBeInTheDocument()
  })
})
