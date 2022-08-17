import axios from "axios";
import React, { useState } from "react";
import $ from 'jquery';


function Main(){

    var [city, setCity]= useState('')
    var [weatherData, setData] = useState([])


    var [weatherDescription, setWeatherDescription] = useState([])

    var temp = {
        description: '',
        name: '',
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
         axios.get(`http://api.weatherstack.com/current?access_key=40f1940655420be7a5efdac148ef07e2&query=${city}`)
        .then(res=>{
            myData = res.data

            temp.description = myData["current"]["weather_descriptions"]
            temp.temperature = myData["current"]["temperature"]
            temp.region = myData["location"]["region"]
            temp.name = myData["location"]["name"]
            setWeatherDescription(temp)

            console.log(res.data)
            
            

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
            <h1> Region : {weatherDescription["region"]} </h1>
            <h1> City/Province: {weatherDescription["name"]} </h1>
            <h1> Temperature: {weatherDescription["temperature"]} </h1>
            <h1> Description: {weatherDescription["description"]} </h1>
            <div id="map"></div>
            </div>



        </section>
    </main>
    )
}

export default Main;