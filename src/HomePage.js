import React from "react"
import './HomePage.css'
import MultipleChoicePage from "./MultipleChoicePage"
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
function HomePage() {

    return (
        <div className="homePage">
            <img className="homePageBG"/>
            <h4 className="title reveal">AROUND THE WORLD</h4>
            <button className="beginButton"><a href="MultipleChoicePage.js">BEGIN</a></button>
        </div>
    )
}

export default HomePage