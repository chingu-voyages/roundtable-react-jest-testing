import React, { useState } from "react";
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = React.useState()
  const [celciusTemp, setCelciusTemp] = useState("")
  const [fahrenheitTemp, setFahrenheitTemp] = useState("")

  // Copied from https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
  const isNumeric = (str) => {
    if (typeof str != "string") {
      return false // we only process strings!  
    }

    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  const updateCelciusTemp = (e) => {
    setFahrenheitTemp("")
    setCelciusTemp(e.target.value)
  } 

  const updateFahrenheitTemp = (e) => {
    setCelciusTemp("")
    setFahrenheitTemp(e.target.value)
  } 

  const resetTemperatures = () => {
    setCelciusTemp("")
    setFahrenheitTemp("")
  }

  const convertToCelcius = () => {
    return (fahrenheitTemp - 32) * (5/9)
  }

  const convertToFahrenheit = () => {
    return ((celciusTemp * (9/5)) + 32)
  }

  const convertTemperature = () => {
    setErrorMessage('')
    if (celciusTemp !== '') {
      if (!isNumeric(celciusTemp)) {
        setErrorMessage('Celcius temperature isn\'t numeric')
        return
      }
      setFahrenheitTemp(convertToFahrenheit())
      return
    }

    if (fahrenheitTemp !== '') {
      if (!isNumeric(celciusTemp)) {
        setErrorMessage('Fahrenheit temperature isn\'t numeric')
        return
      }
      setCelciusTemp(convertToCelcius())
      return
    }

    throw new Error('Invalid celcius and fahrenheit temperatures')
  }

  return (
    <section className="App-header">
      <h1>
        Temperature Converter
      </h1>
      
      <label htmlFor="celcius" className="temp-label">Enter Celcius:</label>
      <input type="text" name="fahrenheit" placeholder="Celcius temp."
        value={ celciusTemp }
        onChange={ (e) => updateCelciusTemp(e) }
      />
      
      <label htmlFor="fahrenheit" className="temp-label">Enter Fahrenheit:</label>
      <input type="text" name="fahrenheit" placeholder="Fahrenheit temp."
        value={ fahrenheitTemp }
        onChange={ (e) => updateFahrenheitTemp(e) }
      />
      
      <p className="error">{ errorMessage }</p>

      <span>
        <button type="button" className="btn"
          onClick={() => resetTemperatures() }>
          Reset
        </button>
        <button type="button" className=""
          onClick={() => convertTemperature() }>
          Convert
        </button>
      </span>

    </section>
  )
}

export default App
