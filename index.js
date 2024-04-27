hour = new Date();
let hours = hour.getHours();
let minutes = hour.getMinutes();

let hour1 = document.querySelector("#hour");
if (minutes < 10) {
  hour1.innerHTML = `${hours}:0${minutes}`;
} else {
  hour1.innerHTML = `${hours}:${minutes}`;
}

function updateWeather(response) {
  let tempAnswer = Math.round(response.data.temperature.current);
  let degree = document.querySelector("#degrees");
  let cityPlace = document.querySelector("#city1");

  degree.innerHTML = `${tempAnswer}ºC`;
  cityPlace.innerHTML = response.data.city;
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
