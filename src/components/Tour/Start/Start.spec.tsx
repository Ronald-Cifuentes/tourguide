import { cleanup, render } from '@testing-library/react'
import Start from './Start'

describe('<Start />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<Start />)
  })
})
