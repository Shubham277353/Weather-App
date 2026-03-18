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
  rain: rain,
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy: cloudy,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  snow: snow,
  fog: fog,
  wind: wind,
  hail: hail,
  "showers-day": showersDay,
  "showers-night": showersNight,
  thunder: thunder,
  "thunder-rain": thunderRain,
};

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
    date.classList.add("date");

    const imageDataContainer = document.createElement("div");
    imageDataContainer.classList.add("image-data-container");

    const image = document.createElement("img");
    const iconName = day.icon;
    image.src = iconMap[iconName];
    image.alt = "weather condition image";
    image.id = "weather-image";

    const dataContainer = document.createElement("data-container");
    dataContainer.classList.add("data-container");

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature : ${day.temp}`;
    temperature.classList.add("temp");
    
    const humidity = document.createElement("p");
    humidity.textContent = `Humidity : ${day.humidity}`;
    humidity.classList.add("info");
    
    const rainPercentage = document.createElement("p");
    rainPercentage.textContent = `Rain : ${day.rainPercentage}%`;
    rainPercentage.classList.add("info");
    
    const conditions = document.createElement("p");
    conditions.textContent = `${day.description}`;
    conditions.classList.add("description");

    dataContainer.append(temperature, humidity, rainPercentage);
    imageDataContainer.append(image, dataContainer);
    cardDiv.append(date, imageDataContainer, conditions);
    cardContainer.append(cardDiv);
    container.append(h1, cardContainer);
  });
}
