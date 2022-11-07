import React from "react"
import MCQButton from './MCQButton.js'
import './MultipleChoicePage.css'

import {answers, places} from './constants.js'
import {Link, useNavigate} from 'react-router-dom';



function MultipleChoicePage() {

    // const answers = ["The Azores, Portugal", "Mount Kilimanjaro, Tanzania", "Wulingyuan Scenic Area, China", "Arashiyama Bamboo Grove, Japan", "Na Pali Coast, Hawaii", "Reynisfjara, Iceland",
    // "Capri, Italy", "Cappadocia, Turkey", "Machu Picchu, Peru", "Sequoia National Park, California"]
    // const places = ["https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAW30NDygefENpTRAMJsuqOglLM5RWuxobzyf1uNME_GVn0gVJBj3XMqV4vkoyY2RKzEbRaYSVHNdho9j1h06PlTwO0UHUxCN3uic2VkqQkKWmg8SgrZ0s2H7918Q-dAKQ_Tj7XC6hurWr6dBwH6OjF94rh0OcEVOPgOz_uvwEiA0E5uUR4k4&4u16383&5m1&2e1&callback=none&client=google-maps-pro&token=87291",
    // "https://www.worldatlas.com/r/w1200/upload/a8/08/dd/wulingyuan-china.jpg", "https://files.adventure-life.com/14/80/52/kenya-zebras_serengeti/1300x820.webp", "https://www.hawaii.com/wp-content/uploads/2022/03/GettyImages-659415860.jpg", "https://cdn.nordicvisitor.com/images/1/iceland/summer/reynisfjara_black_sand_beach.jpg", 
    // "https://cdn.theculturetrip.com/wp-content/uploads/2020/08/martyna-bober-yd1_tupnls4-unsplash-e1599752816305.jpg", "https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Cappadocia-Turkey.jpg", "https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_2157963225.jpg", "https://www.peru.travel/Contenido/Atractivo/Imagen/en/172/1.1/Principal/machu-picchu.jpg",
    // "https://www.nps.gov/common/uploads/grid_builder/seki/crop16_9/C442580A-1DD8-B71B-0B091B76C3EC7F81.jpg?width=950&quality=90&mode=crop"]

    let x = Math.floor((Math.random() * 10) + 1) - 1;
    let picture = places[x];

    let correctAnswer = answers[x];

    let option1 = answers[Math.floor((Math.random() * 10) + 1) - 1];
    let option2 = answers[Math.floor((Math.random() * 10) + 1) - 1];
    let option3 = answers[Math.floor((Math.random() * 10) + 1) - 1];

    const navigate = useNavigate();

    const toComponentB=()=>{
        console.log(answers)
        navigate('/InfoPage',{state:{picture: picture, correctAnswer: correctAnswer}});
  }

    return (

        <div className="multipleChoicePage">
            <h4 className="title">WHERE IS THIS PLACE?</h4>
            <div className="choice">

                <div className="imageHolder"><img className="imageHolder1" src={picture}></img></div>
                
                <div className="options">

                    <button onClick={()=>{toComponentB()}} className="mqButton">{option1}</button>

                    <button onClick={()=>{toComponentB()}} className="mqButton">{correctAnswer}</button>

                    <button onClick={()=>{toComponentB()}} className="mqButton">{option2}</button>

                    <button onClick={()=>{toComponentB()}} className="mqButton">{option3}</button>
                    
                </div>
            </div>
        </div>
    )
}

export default MultipleChoicePage