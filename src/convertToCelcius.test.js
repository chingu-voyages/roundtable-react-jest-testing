import { convertToCelcius, convertToFahrenheit } from './util/temperatureConversions.js'

test('fahrenheit to celcius conversion works properly', () => {
  expect(convertToCelcius(32)).toBe(0)
})

test('celcius to fahrenheit conversion', () => {
  expect(convertToFahrenheit(0)).toBe(32)
})