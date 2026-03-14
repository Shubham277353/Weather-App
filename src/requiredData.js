/* 
things to get : 
    1. conditions
    2. humidity
    3. temp
    4. description
    5. feelslike
    6. windspeed
    7. datetime
*/
let daysData;
const newDaysArray = [];

export function fetchedData(data) {
  daysData = data;
  neededData();
}

 function neededData() {
  for (let i = 0; i <= 3; i++) {
    if (!daysData[i]) continue;

    const day = {
      datetime: daysData[i].datetime,
      temp: daysData[i].temp,
      rainPercentage: daysData[i].preciprob,
      humidity: daysData[i].humidity,
      description: daysData[i].description,
    };
    newDaysArray.push(day);
  }
  console.log(newDaysArray);
}


export function getArray(){
  return newDaysArray ;
}
