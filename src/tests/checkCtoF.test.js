import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('Test the conversion of Celcius to Fahrenheit', async () => {
  render(<App />)

  // Set the test data
  const celciusInput = screen.getByPlaceholderText('Celcius temp.')
  const fahrenheitInput = screen.getByPlaceholderText('Fahrenheit temp.')
  const convertButton = screen.getByRole('button', {name: /Convert/i})
  celciusInput.value = 0
  fahrenheitInput.value = ''

  await userEvent.click(convertButton)

  // Verify the conversion
  expect(celciusInput).toHaveValue(0)
  expect(fahrenheitInput).toHaveValue(32)
})


