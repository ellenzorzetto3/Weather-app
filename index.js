function updateWeather(response) {
  let time = new Date(response.data.time);

  let degree = document.querySelector("#degrees");
  degree.innerHTML = `${Math.round(response.data.temperature.current)}ºC`;

  let cityPlace = document.querySelector("#city1");
  cityPlace.innerHTML = response.data.city;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${Math.round(response.data.temperature.humidity)}%`;

  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed)} km`;

  let hourDay = document.querySelector("#hourDay");
  hourDay.innerHTML = formatDate(time);

  let emoji = document.querySelector("#emoji");
  let emojiElement = `<img
                src="${response.data.condition.icon_url}"
                class="emoji"
              />`;
  emoji.innerHTML = emojiElement;
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

console.log(apiUrl);
