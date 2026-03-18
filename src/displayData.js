import { getAddress } from "./address";
import rain from "./icons/rain.svg";
import clearDay from "./icons/clear-day.svg";
import clearNight from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import partlyCloudyDay from "./icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./icons/partly-cloudy-night.svg";
import snow from "./icons/snow.svg";
import fog from "./icons/fog.svg";
import wind from "./icons/wind.svg";
import hail from "./icons/hail.svg";
import showersDay from "./icons/showers-day.svg";
import showersNight from "./icons/showers-night.svg";
import thunder from "./icons/thunder.svg";
import thunderRain from "./icons/thunder-rain.svg";

const iconMap = {
  rain : rain ,
  "clear-day" : clearDay,
  "clear-night" : clearNight,
  cloudy : cloudy,
  "partly-cloudy-day" : partlyCloudyDay,
  "partly-cloudy-night" : partlyCloudyNight,
  snow : snow,
  fog : fog,
  wind : wind,
  hail : hail,
  "showers-day" : showersDay,
  "showers-night" : showersNight,
  thunder : thunder,
  "thunder-rain" : thunderRain
}

const container = document.getElementById("cards-container");

export default function displayData(dataArray) {
  container.innerHTML = "";

  const location = getAddress();
  console.log(location);
  const h1 = document.createElement("h1");
  h1.textContent = `Forecast For: ${location}`;
  h1.id = "forecast-heading";
  
  const cardContainer = document.createElement("div");
  cardContainer.id = "container";
  
  container.append(h1, cardContainer);

  dataArray.forEach((day) => {

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");

    const date = document.createElement("p");
    date.textContent = `${day.datetime}`;

    const image = document.createElement("img");
    const iconName = day.icon;
    image.src = iconMap[iconName];
    image.alt = "weather condition image";

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature : ${day.temp}`;

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity : ${day.humidity}`;

    const rainPercentage = document.createElement("p");
    rainPercentage.textContent = `Rain : ${day.rainPercentage}`;

    const conditions = document.createElement("p");
    conditions.textContent = `${day.description}`;

    cardDiv.append(date, image, temperature, humidity, rainPercentage, conditions);
    cardContainer.append(cardDiv);
    container.append(h1, cardContainer);
  });
}
