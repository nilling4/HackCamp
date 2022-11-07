import React from "react"
import "./FlightInfo.css"

function FlightInfo(props) {
    return (
        <div className="flightinfo">
            <h4 className="price">{"Price: $" + props.price}</h4>
            <h4 className="airline">{"Airline: " + props.airline}</h4>
            <h4 className="flight_number">{"Flight Number: #" + props.flight_number}</h4>
            <h4 className="departure_at">{"Departure Time: " + props.departure_at}</h4>
        </div>
    )
}

export default FlightInfo