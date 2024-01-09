import React from "react";

export default function WeatherDetails(props) {
    const {humidity, wind_speed, feels_like} = props.details;
    return (
        <div className="details">
            <div className="col">
                <img src="../images/humidity.png" alt="" />
                <div>
                    <p className="humidity">{humidity ? humidity + "%" : "%"}</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="col">
                <img src="../images/wind.png" alt="" />
                <div>
                    <p className="wind">{wind_speed ? Math.floor(wind_speed) + " mph" : "mph"}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
            <div className="col">
                <img src="../images/feels_like.png" alt="" />
                <div>
                    <p className="feels_like">{feels_like ? Math.floor(feels_like) + "°F" : "°F"}</p>
                    <p>Feels Like</p>
                </div>
            </div>
        </div>
    )
}