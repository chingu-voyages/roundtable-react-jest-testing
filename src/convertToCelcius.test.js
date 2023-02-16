import { convertToCelcius } from './util/convertToCelcius'

test('fahrenheit to celcius conversion works properly', () => {
  expect(convertToCelcius(32)).toBe(0)
})