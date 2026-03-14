import { getArray } from "./requiredData";

const container = document.getElementById("cards-container");

const dataArray = getArray();

export default function displayData() {
  dataArray.forEach((day) => {
    const cardDiv = document.createElement("div");
    const date = document.createElement("p");
    date.textContent = `${day.datetime}`;

    const temperature = document.createElement("p");
    temp.textContent = `Temperature : ${day.temp}`;

    const humidity = document.createElement("p");
    temp.textContent = `Humidity : ${day.humidity}`;

    const rainPercentage = document.createElement("p");
    temp.textContent = `Temperature : ${day.rainPercentage}`;

    const conditions = document.createElement("p");
    temp.textContent = `${day.conditions}`;

    cardDiv.append(
      date,
      temperature,
      humidity,
      rainPercentage,
      conditions,
    );
    container.append(cardDiv);
  });
}
