import './App.css';
import React, { useState } from "react"
import Image from './components/image';
import {Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import Button from './components/button';
import HomePage from './HomePage.js'
import MultipleChoicePage from './MultipleChoicePage';
import InfoPage from './InfoPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomePage/>}/> 
        
        <Route path = "/MultipleChoicePage" element = {<MultipleChoicePage/>}/>

        <Route path = "/InfoPage" element = {<InfoPage/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
 