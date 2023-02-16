const convertToCelcius = (fahrenheitTemp) => {
  return (fahrenheitTemp - 32) * (5/9)
}

const convertToFahrenheit = (celciusTemp) => {
  return ((celciusTemp * (9/5)) + 32)
}

export { convertToCelcius, convertToFahrenheit }