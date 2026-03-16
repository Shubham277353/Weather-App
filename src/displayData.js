const container = document.getElementById("cards-container");

export default function displayData(dataArray) {
  container.innerHTML = "";
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
    container.append(cardDiv);
  });
}
