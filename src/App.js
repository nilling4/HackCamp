import './App.css';
import React, { useState } from "react"
import Image from './components/image';
import {Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import Button from './components/button';
import HomePage from './HomePage.js'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Image/>}/>
        <Route path = "/HomePage" element = {<HomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
 