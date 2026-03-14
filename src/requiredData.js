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

export default function requiredData(data) {
  const today = data.days[0];
  const day1 = data.days[1];
  const day2 = data.days[2];
  const day3 = data.days[3];

  // Today
  const Today = {
    condition: today.conditions,
    temp: today.temp,
    feelsLike: today.feelslike,
    windspeed: today.windspeed,
    humidity: today.humidity,
    description: today.description,
    datetime : today.datetime
  };
  const Day1 = {
    condition: day1.conditions,
    temp: day1.temp,
    feelsLike: day1.feelslike,
    windspeed: day1.windspeed,
    humidity: day1.humidity,
    description: day1.description,
    datetime : day1.datetime
  };
  const Day2 = {
    condition: day2.conditions,
    temp: day2.temp,
    feelsLike: day2.feelslike,
    windspeed: day2.windspeed,
    humidity: day2.humidity,
    description: day2.description,
    datetime : day2.datetime
  };
  const Day3 = {
    condition: day3.conditions,
    temp: day3.temp,
    feelsLike: day3.feelslike,
    windspeed: day3.windspeed,
    humidity: day3.humidity,
    description: day3.description,
    datetime : day3.datetime
  };
  
  console.log(Today);
  console.log(Day1);
  console.log(Day2);
  console.log(Day3);
  
}
