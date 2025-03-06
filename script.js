import { config } from './config.js';

const apiKey = config.weatherAPIkey;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBoxInput = document.querySelector('.search input');
const searchButtun = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `&#176;c`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    //for dynamically changig the weather icon
    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/sun.png"
    }
    else  if(data.weather[0].main == 'Clouds'){
         weatherIcon.src = "images/cloud.png"
    }
    else  if(data.weather[0].main == 'Rain'){
         weatherIcon.src = "images/rain.png"
    }
    else  if(data.weather[0].main == 'Drizzle'){
         weatherIcon.src = "images/drizzle.png"
    }
}

searchButtun.addEventListener('click', ()=>{
    checkWeather(searchBoxInput.value);
})

