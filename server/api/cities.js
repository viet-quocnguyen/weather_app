var express = require("express");
var Cities = require("../models/cities");

var router = express.Router();

router.get("/", (req, res) => {
  Cities.getAll((err, cities) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(cities);
    }
  });
});

router.post("/", (req, res) => {
  var city = req.body.city;
  Cities.insert(city, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(result);
    }
  });
});

module.exports = router;
