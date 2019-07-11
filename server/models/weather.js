const fetch = require("node-fetch");

const API_KEY = require("../config/key").API_KEY;

class Weather {
  static getWeatherByCity(city, callback) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => callback(data))
      .catch(err => callback(err));
  }
}

module.exports = Weather;
