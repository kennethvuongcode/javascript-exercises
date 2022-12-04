const convertToCelsius = function(degF) {
  

  let celcius = (degF - 32) * (5 / 9);
  
  if (celcius % 1 == 0)
    return celcius;
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(degC) {
  let fahrenheit = (degC * 9 / 5) + 32;

  if (fahrenheit % 1 == 0)
    return fahrenheit;

  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
