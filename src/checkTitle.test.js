import { render, screen } from '@testing-library/react'
import App from './App'

test('fahrenheit to celcius conversion works properly', () => {
  render(<App />)
  const titleElement = screen.getByText(/Temperature Converter/i)
  expect(titleElement).toBeInTheDocument()
})