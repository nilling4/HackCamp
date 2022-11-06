import React from "react"
import "./MCQButton.css"

function MCQButton(props) {
    return (
        <div className="mcqButton">
            <button onClick={handleCheckAnswer()}>{props.text}</button>
        </div>
    )
}

function handleCheckAnswer() {
    
}

export default MCQButton