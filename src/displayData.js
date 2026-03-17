import { getAddress } from "./address";

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

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature : ${day.temp}`;

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity : ${day.humidity}`;

    const rainPercentage = document.createElement("p");
    rainPercentage.textContent = `Rain : ${day.rainPercentage}`;

    const conditions = document.createElement("p");
    conditions.textContent = `${day.description}`;

    cardDiv.append(date, temperature, humidity, rainPercentage, conditions);
    cardContainer.append(cardDiv);
    container.append(h1, cardContainer);
  });
}
