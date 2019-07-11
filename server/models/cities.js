const db = require("../database");

class Cities {
  static getAll(callback) {
    db.query("SELECT city_name FROM cities", (err, res) => {
      callback(err, res);
    });
  }

  static insert(city, callback) {
    db.query(
      "INSERT INTO cities (city_name) VALUES (?)",
      [city],
      (err, res) => {
        callback(err, res);
      }
    );
  }
}

module.exports = Cities;
