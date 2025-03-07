exports.handler = async function (event) {
    const API_KEY = process.env.API_KEY;  // ✅ API Key will be injected by Netlify
    const city = event.queryStringParameters.city || "London";

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${API_KEY}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch weather data" })
        };
    }
};
