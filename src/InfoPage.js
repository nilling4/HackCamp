import React from "react"
import './InfoPage.css'

function InfoPage(props) {

    return (
        <div className="infoPage">
            <div className="countryContainer">
                <h4 className="title">WELCOME TO {props.countryName}</h4>
                <div className="infoWithImages">
                    <div className="imageSlider">
                        <img className="infoImage" src="https://www.planetware.com/photos-large/ENG/england-stonehenge.jpg"></img>
                        <img className="infoImage" src="https://i.insider.com/5d3878bb36e03c348c7cfcd6?width=1000&format=jpeg&auto=webp"></img>
                        <img className="infoImage" src="https://www.savoredjourneys.com/wp-content/uploads/2017/04/india-places-to-visit.jpg"></img>
                        <img className="infoImage" src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/Toronto.jpg"></img>
                    </div>
                    <div className="infoPanel">
                        <li>This</li>
                        <li>is</li>
                        <li>just</li>
                        <li>temporary</li>
                    </div>
                </div>
            </div>
            <div className="askPanel">
                <h2>Are you interested in exploring more about this place?</h2>
                {/* <div class="yesOrNoButtonContainer">
                    <button onClick={handleYes}>Yes</button>
                    <button onClick={handleNo}>No</button>
                </div> */}
            </div>
        </div>
    )
}

export default InfoPage