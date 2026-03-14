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

export function getData(data) {
  daysData = data;
}

export function neededData() {
  for (let i = 0; i <= 3; i++) {
    if (!daysData[i]) continue;

    const day = {
      datetime: daysData[i].datetime,
      condition: daysData[i].conditions,
      temp: daysData[i].temp,
      feelsLike: daysData[i].feelslike,
      windspeed: daysData[i].windspeed,
      humidity: daysData[i].humidity,
      description: daysData[i].description,
    };
    newDaysArray.push(day);
    console.log(newDaysArray);
  }
}

export function getArray(){
  return newDaysArray ;
}
