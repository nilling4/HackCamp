import React from "react"
import './InfoPage.css'
import {Link} from "react-router-dom";
import MCQButton from './MCQButton.js'
import {useLocation} from 'react-router-dom';
import FlightInfo from "./FlightInfo.js"
import "./FlightInfo.css"
import Flight from "./Flight.js"
import "./Flight.css"

function InfoPage(props) {

    const location = useLocation();

    return (
        <div className="infoPage">                
            
            <h4 className="answer">This is {location.state.correctAnswer}! {props.countryName}</h4>
            
            <h4 className="title">Would you like to travel there? </h4>

            <Flight>Find a flight!</Flight>

            <Link className="btn" to="/">
                <button className="homeButton">Home</button>
            </Link>
            <div><img className="imageHolder" src={location.state.picture} ></img></div>
            
        </div>
    )
}

export default InfoPage