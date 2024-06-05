import React from "react";

export default function Weather(props) {
    const {temp, city, weatherImg} = props.data;
     
    const imagePath = weatherImg ? 
        `../images/${weatherImg.toLowerCase()}.png` : "../images/rain.png" ;
   
    return (
        <div className="weather">
            <img src={imagePath} className="weather-icon"/>
            <h1 className="temp">{Math.floor(temp) + "°F"}</h1>
            <h2 className="city">{city}</h2>
        </div>
    )
}