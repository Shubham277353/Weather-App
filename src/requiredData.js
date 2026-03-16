import displayData from "./displayData";

const newDaysArray = [];

export function fetchedData(data) {
  const processedData = data.days;
  neededData(processedData);
}

function addDays(day) {
  if (newDaysArray.length === 3) newDaysArray.length = 0;
  newDaysArray.push(day);
}

function neededData(daysData, address) {
  for (let i = 0; i <= 2; i++) {
    if (!daysData[i]) continue;

    const day = {
      datetime: daysData[i].datetime,
      temp: daysData[i].temp,
      rainPercentage: daysData[i].precipprob,
      humidity: daysData[i].humidity,
      description: daysData[i].description,
      icon: daysData[i].icon,
    };
    addDays(day);
  }
  console.log(newDaysArray);
  displayData(newDaysArray);
}
