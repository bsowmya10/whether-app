const apiKey = "716f4ca71b52685bf7688dd2859b8131"; // Replace with your OpenWeatherMap API Key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        result.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>🌥️ Condition: ${data.weather[0].description}</p>
        `;
      } else {
        result.innerHTML = "City not found.";
      }
    })
    .catch(() => {
      result.innerHTML = "Error fetching data.";
    });
}
