import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response){
        setWeatherData({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            date: "Thursday 4:00 PM",
            wind: response.data.wind.speed,
            city: response.data.name,
            precipitation: 0,
            humidity: response.data.main.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",

        });
        
        setReady(true);
    }

    if (ready){
        return(
            <div className="Weather">
                <form>
                <div className="row">
                    <div className="col-9">
                    <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                    />
                    </div>
                    <div className="col-3">
                    <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                    />
                    </div>
                    </div>
                </form>
                
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img 
                            src={weatherData.iconUrl}
                            alt={weatherData.description}
                            className="float-left"
                            />
                            {/* <div className="float-left"> */}
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            {/* </div> */}
                        </div>
                    </div>
        
                    <div className="col-6">
                    <ul>
                        {/* <li>Precipitation: {weatherData.precipitation}%</li> */}
                        <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
        
                    </div>
        
                </div>
            </div>
            );
        
    } else{
        const apiKey = "0196dac33373aaa2798921754f07b116";
        let city = "Dhahran";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);

        return "Loading...";

        }


    }
