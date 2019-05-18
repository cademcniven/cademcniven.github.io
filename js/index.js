const url = "https://api.weather.gov/gridpoints/MFR/138,63/forecast/hourly";

var arr;

//colors
var blue = "#65b2ff";
var yellow = "#ffe9aa";
var white = "#fbfcfc";

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(json){
    arr = json.properties.periods
  
  var table = document.getElementById("table1");
  var temps = [0, 32, 55, 75, 95]
  
  for (var iCol = 0; iCol < 7; iCol++) {
   for (var iRow = 0; iRow < 5; iRow++) {
      
      console.log(arr[iCol].temperature);
      console.log(temps[iRow]);
      
      //only display a square if the temperature
      //meets a certain threshhold based on the row
      if (arr[iCol].temperature >= temps[iRow]){
        //change colors based on weather
        if (arr[iCol].shortForecast.includes("Clear")){
          table.rows[iRow].cells[iCol].style.backgroundColor = yellow;
        }
        else if (arr[iCol].shortForecast.includes("Sunny")){
          table.rows[iRow].cells[iCol].style.backgroundColor = yellow;      
        }
        else if (arr[iCol].shortForecast.includes("Cloudy")){
          table.rows[iRow].cells[iCol].style.backgroundColor = "gray";      
        }
        else if (arr[iCol].shortForecast.includes("Rain")){
          table.rows[iRow].cells[iCol].style.backgroundColor = blue;      
        }
        else if (arr[iCol].shortForecast.includes("Snow")){
          table.rows[iRow].cells[iCol].style.backgroundColor = white;      
        }
      }
    }
  }  
  });