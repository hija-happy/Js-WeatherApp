require("dotenv").config();  // Allows local .env support

exports.handler = async function (event) {
    const API_KEY = process.env.API_KEY; // Securely get API key
    const city = event.queryStringParameters.city || "London";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
