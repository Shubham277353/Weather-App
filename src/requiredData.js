import displayData from "./displayData";

let daysData;
const newDaysArray = [];

export function fetchedData(data) {
  daysData = data;
  neededData();
}

function addDays(day){
  if(!newDaysArray.length === 0) newDaysArray.length = 0 ;
  newDaysArray.push(day);
}

 function neededData() {
  for (let i = 0; i <= 2; i++) {
    if (!daysData[i]) continue;

    const day = {
      datetime: daysData[i].datetime,
      temp: daysData[i].temp,
      rainPercentage: daysData[i].precipprob,
      humidity: daysData[i].humidity,
      description: daysData[i].description,
    };
    addDays(day);
  }
  console.log(newDaysArray);
  displayData(newDaysArray);
}



