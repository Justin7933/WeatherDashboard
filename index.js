const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const api = new XMLHttpRequest();
  api.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  api.send();
  api.onload = () => {
    if (api.status === 404) {
      alert("Place not found");
    } else {
      const data = JSON.parse(api.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      description.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdate("Boston");
