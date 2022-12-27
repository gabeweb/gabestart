// Weather
// Weather icons by Icons8
// https://icons8.com/icon/set/weather/color-glass
App = {
  getWeatherIcon: function (iconCode) {
    var dayNight = iconCode.slice(2, 3);
    console.log(dayNight);
    var code = iconCode.slice(0, 2);
    if (dayNight == "d") {
      switch (code) {
        case "01":
          return "weather/icons/sunny.svg";
        case "02":
          return "weather/icons/partly_cloudy.svg";
        case "03":
          return "weather/icons/cloudy.svg";
        case "04":
          return "weather/icons/cloudy_s_sunny.svg";
        case "09":
          return "weather/icons/rain_s_cloudy.svg";
        case "10":
          return "weather/icons/rain.svg";
        case "11":
          return "weather/icons/thunderstorms.svg";
        case "13":
          return "weather/icons/snow.svg";
        case "50":
          return "weather/icons/mist.svg";
        default:
          return null;
      }
    } else {
      switch (code) {
        case "01":
          return "weather/icons/night.svg";
        case "02":
          return "weather/icons/night_partly_cloudy.svg";
        case "03":
          return "weather/icons/cloudy.svg";
        case "04":
          return "weather/icons/cloudy_night.svg";
        case "09":
          return "weather/icons/rain_night.svg";
        case "10":
          return "weather/icons/rain.svg";
        case "11":
          return "weather/icons/thunderstorms.svg";
        case "13":
          return "weather/icons/night_snow.svg";
        case "50":
          return "weather/icons/mist.svg";
        default:
          return null;
      }
    }
  },

  getWeather: function () {
    let xhr = new XMLHttpRequest();
    /* OPEN WEATHER MAP */
    xhr.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=Cabimas,Venezuela&appid=dba306998ebe631bfd796148d0ff7a9b&units=metric"
    );
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);
          var temp = json.main.feels_like.toFixed(0) + "&deg;C";
          var weatherDescription = json.weather[0].description;
          var weatherIcon = App.getWeatherIcon(json.weather[0].icon);
          if (weatherIcon) {
            document.getElementById("weather-container").title = weatherDescription;
            document.getElementById("weather").innerHTML = temp;
            document.getElementById("weather-icon").src = weatherIcon;
          } else {
            document.getElementById("weather").innerHTML =
              weatherDescription + temp;
          }
        } else {
          console.log("error msg: " + xhr.status);
        }
      }
    };

    /* Aus BOM */
    //xhr.open('GET', "https://api.weather.bom.gov.au/v1/locations/r3gx2f/observations");
    //xhr.onload = () => {
    //  if (xhr.readyState === 4) {
    //    if (xhr.status === 200) {
    //      let json = JSON.parse(xhr.responseText);
    //      //var temp = json.main.temp.toFixed(0) + "&deg;C";
    //    } else {
    //      console.log('error msg: ' + xhr.status);
    //    }
    //}
    xhr.send();
  },

  init: function () {
    /* Weather */
    App.getWeather();
  },
};

window.onload = App.init();
