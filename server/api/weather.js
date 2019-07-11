var express = require("express");
var Weather = require("../models/weather");

var router = express.Router();

router.get("/:city", (req, res) => {
  var city = req.params.city;
  Weather.getWeatherByCity(city, (err, data) => {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
});

module.exports = router;
