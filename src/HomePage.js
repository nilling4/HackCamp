import React from "react"
import './HomePage.css'
import MultipleChoicePage from "./MultipleChoicePage"
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import {Link} from "react-router-dom";


function HomePage() {

    return (
        <div className="homePage">
            <img className="homePageBG"/>
            <h4 className="title reveal">AROUND THE WORLD</h4>
            <h2>WHERE</h2>
            
            <Link className="btn" to="/MultipleChoicePage">
                <button className="beginButton">BEGIN</button>
            </Link>
        </div>
    )
}

export default HomePage