import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('Test the conversion of Celcius to Fahrenheit', async () => {
  render(<App />)

  // Set the test data
  let celciusInput = screen.getByPlaceholderText('Celcius temp.')
  let fahrenheitInput = screen.getByPlaceholderText('Fahrenheit temp.')
  const convertButton = screen.getByRole('button', {name: /Convert/i})
  await userEvent.type(celciusInput, '0')

  // Initiate the conversion
  await userEvent.click(convertButton)

  // Verify the conversion is correct
  expect(celciusInput).toHaveValue(`0`)
  expect(fahrenheitInput).toHaveValue(`32`)
  console.log(`Celcius to Fahrenheit conversion test passed. \
Celcius: ${ celciusInput.value }, \
Fahrenheit: ${ fahrenheitInput.value }`) 
})


