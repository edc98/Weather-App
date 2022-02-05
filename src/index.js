function findCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  console.log(`${newCity.value}`);
  let apiKey = "7e2d6c3d38a855b033f6e213b1c9eca4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let citySearch = document.querySelector("#search-engine");
citySearch.addEventListener("submit", findCity);

function displayWeather(response) {
  console.log(response);

  let temp = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temp}°C`;

  let wind = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `Wind: ${wind} km/hr`;

  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
}

function currentPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log(lat);
  console.log(long);

  let apiKey = "7e2d6c3d38a855b033f6e213b1c9eca4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let current = document.querySelector("#currentLocation");
current.addEventListener("submit", currentPosition);

navigator.geolocation.getCurrentPosition(currentPosition);

/*function convertC(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${"#temperature"}`;
}

let currentC = document.querySelector("#celcius");
currentC.addEventListener("click", convertC);

function convertF(event) {
  event.preventDefault();
  let cTemp = document.querySelector("#temp");
  let fahrenheit = Math.round(cTemp * (9 / 5) + 32);
  cTemp.innerHTML = `${fahrenheit}°`;
}

let currentFah = document.querySelector("#fahrenheit");
currentFah.addEventListener("click", convertF);*/

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

function localTime() {
  let currentTime = document.querySelector("#local-time");
  currentTime.innerHTML = `${hours}:${minutes}`;
}

function currentDay() {
  let currentDay = document.querySelector("#current-day");
  currentDay.innerHTML = `${day}`;
}

localTime();
currentDay();

function replaceTitle(event) {
  event.preventDefault();
  let title = document.querySelector("#location");
  let newTitle = document.querySelector("#city-input");
  if (newTitle) {
    title.innerHTML = `${newTitle.value}`;
  } else {
    title.innerHTML = `Current Location`;
  }
}

let form = document.querySelector("#search-engine");
form.addEventListener("submit", replaceTitle);
