const baseURL = window.location.hostname === "localhost" 
  ? "http://localhost:8888/.netlify/functions/weather"  // Local development
  : "/.netlify/functions/weather";  // Hosted on Netlify

async function checkWeather(city) {
    const response = await fetch(`${baseURL}?city=${city}`);
    const data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `&#176;c`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    //for dynamically changing the weather icon
    const weatherIcon = document.querySelector('.weather-icon');
    if(data.weather[0].main === 'Clear'){
        weatherIcon.src = "images/sun.png";
    }
    else if(data.weather[0].main === 'Clouds'){
         weatherIcon.src = "images/cloud.png";
    }
    else if(data.weather[0].main === 'Rain'){
         weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === 'Drizzle'){
         weatherIcon.src = "images/drizzle.png";
    }
}

document.querySelector('.search button').addEventListener('click', ()=>{
    checkWeather(document.querySelector('.search input').value);
});
