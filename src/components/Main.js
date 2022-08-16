import axios from "axios";
import React, { useRef, useState } from "react";
import $ from 'jquery';


function Main(){

    var [city, setCity]= useState('')
    var [weatherData, setData] = useState([])


    var [weatherDescription, setWeatherDescription] = useState([])

    var temp = {
        description: '',
        region: '',
        temperature: ''
    }
 
    var map;
    var myData = []

    const handleChange = (event) => {
        
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        
        getWeatherData()
        $("html, body").animate({ scrollTop: $("#scroll").height() }, 1000);
        event.preventDefault();
    }

 

    const getWeatherData = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=8fb3567e9720a15308b6d864efde7ef6&query=${city}`)
        .then(res=>{
            myData = res.data

            temp.description = myData["current"]["weather_descriptions"]
            temp.temperature = myData["current"]["temperature"]
            temp.region = myData["location"]["region"]

            setWeatherDescription(temp)
            
            

        })
    }
    

    



    return (
        <main>
        <div class="main-banner-container">
            <div class="index-info-container">
                <h1>WHAT'S MY WEATHER </h1>
                <p> An online website to view real-time weather in your city.
                </p>
                <div class="search-city-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text"  placeholder="Enter Your City"  value={city} onChange={handleChange}/>
                        <button type="submit">
                        <span class="material-symbols-outlined world-search">
                        travel_explore
                        </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <section>

            <div className="scroll" id="scroll">
            <h1>{weatherDescription["temperature"]} {weatherDescription["description"]} {weatherDescription["region"]} </h1>
            <div id="map"></div>
            </div>



        </section>
    </main>
    )
}

export default Main;