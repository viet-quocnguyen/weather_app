var mysql = require("mysql");

const key = require("../config/key");

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: key.HOST,
      user: key.USER,
      password: key.PASSWORD,
      database: key.DATABASE
    });

    this.connection.connect(err => {
      if (err) {
        console.log(err);
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
