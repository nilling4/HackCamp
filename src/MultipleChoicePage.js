import React from "react"
import MCQButton from './MCQButton.js'
import './MultipleChoicePage.css'

function MultipleChoicePage() {

    return (
        <div className="multipleChoicePage">
            <h4 className="title">WHERE IS THIS PLACE?</h4>
            {/* THIS IS WHERE THE API GOES TO FETCH THE MAP/IMAGE */}
            <div className="choice">
                <img className="imageHolder" src="https://149346090.v2.pressablecdn.com/wp-content/uploads/2021/04/Screen-Shot-5-768x432.png"></img>
                <div className="options">
                    <MCQButton text="Turkey"/>
                    <MCQButton text="Spain"/>
                    <MCQButton text="Greece"/>
                    <MCQButton text="Italy"/>
                </div>
            </div>
            
        </div>
    )
}

export default MultipleChoicePage