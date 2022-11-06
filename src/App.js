import logo from './logo.svg';
import './App.css';
import FlightInfo from "./FlightInfo.js"
import "./FlightInfo.css"
import React, { useState } from "react"

function App() {
  const [flights, setFlights] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-Access-Token': 'bf2247f10f81ddb7135992e2bc77a70e',
      'X-RapidAPI-Key': '5e901ebf68msh246b07db6a4063cp1e4ff4jsn1b22c15626ca',
      'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
    }
  };

  const url = "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=YVR&page=1&currency=CAD&destination=-"

  function getFlight() {
    fetch(url, options)
    .then((response) => response.json())
    .then(json => {
      const keys = Object.keys(json.data)
      const n = 5
      
      const res = []
      for (let i = 0; i < n; i++) {
        const key = keys[i]
        const flight = json.data[key][Object.keys(json.data[key])[0]]
        res.push(flight)
      }
      setFlights(res)
    })
  }

  return (
    <div className="container">
      <button onClick={getFlight}>GetFlight</button>
      {flights.map(flight => <FlightInfo {...flight} />)}
    </div>
  );
}

export default App;