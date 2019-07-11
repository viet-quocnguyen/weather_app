const path = require("path"); // working with file
const express = require("express");
const bodyParser = require("body-parser");

const database = require("./database");
const cities = require("./api/cities");
const weather = require("./api/weather");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/cities", cities);
app.use("/api/weather", weather);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
});

module.export = app;
