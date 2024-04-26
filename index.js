hour = new Date();
let hours = hour.getHours();
let minutes = hour.getMinutes();

let hour1 = document.querySelector("#hour");
if (minutes < 10) {
  hour1.innerHTML = `${hours}:0${minutes}`;
} else {
  hour1.innerHTML = `${hours}:${minutes}`;
}

let apiKey = "b2a5adcct04b33178913oc335f405433";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


