import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Image from './components/image';
import {Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import Button from './components/button';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path = "/" element = {<Image/>}/>
        <Route path = "/Example" element = {<Button/>}/>
      </Routes>
      
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
