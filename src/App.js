import React, { useState } from "react"
import './App.css'
import { convertToCelcius, convertToFahrenheit } from "./util/temperatureConversions"
import { isNumeric } from "./util/helpers"

function App() {
  const [errorMessage, setErrorMessage] = React.useState()
  const [celciusTemp, setCelciusTemp] = useState("")
  const [fahrenheitTemp, setFahrenheitTemp] = useState("")

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
      if (!isNumeric(fahrenheitTemp)) {
        setErrorMessage('Fahrenheit temperature isn\'t numeric')
        return
      }
      setCelciusTemp(convertToCelcius(fahrenheitTemp))
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
