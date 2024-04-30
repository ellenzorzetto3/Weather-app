function updateWeather(response) {
  let time = new Date(response.data.time);
  let degree = document.querySelector("#degrees");
  let cityPlace = document.querySelector("#city1");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windSpeed");
  let hourDay = document.querySelector("#hourDay");

  degree.innerHTML = `${Math.round(response.data.temperature.current)}ºC`;
  cityPlace.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${Math.round(response.data.temperature.humidity)}%`;
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed)} km`;
  hourDay.innerHTML = formatDate(time);
}

function formatDate(hourDay) {
  let hours = hourDay.getHours();
  let minutes = hourDay.getMinutes();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekDays[hourDay.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

 
  return `${day}, ${hours}:${minutes}`;
}
function tempSearch(city) {
  let apiKey = "o3bfb209f55e8951210f40e6476fat3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");

  tempSearch(cityInput.value);
}
let searchForm = document.querySelector("#cityForm");
searchForm.addEventListener("submit", searchInput);

tempSearch("Brasília");
