import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [hello, setHello] = useState()

  function getPhoto() {
    fetch("https://google.com", {dfgdf})
    .then((response) => {
      console.log(response)
    })

  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
