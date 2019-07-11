var mysql = require("mysql");

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "weather_app"
    });

    this.connection.connect(err => {
      if (err) {
        throw err;
      } else {
        console.log("MySQL Connected");
      }
    });
  }

  query(sql, ...args) {
    const params = args.length === 2 ? args[0] : [];
    const callback = args.length === 2 ? args[1] : args[0];
    this.connection.query(sql, params, (err, result) => {
      callback(err, result);
    });
  }
}

module.exports = new Database();
