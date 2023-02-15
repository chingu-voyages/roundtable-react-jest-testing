import React, { useState } from "react";
import './App.css'

function App() {
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

  const convertToCelcius = () => {
    return (fahrenheitTemp - 32) * (5/9)
  }

  const convertToFahrenheit = () => {
    return ((celciusTemp * (9/5)) + 32)
  }

  const convertTemperature = () => {
    if (celciusTemp !== '') {
      setFahrenheitTemp(convertToFahrenheit())
      return
    }

    if (fahrenheitTemp !== '') {
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
