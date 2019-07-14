var mysql = require("mysql");

const key = require("../config/key");

const db_config = {
  host: key.HOST,
  user: key.USER,
  password: key.PASSWORD,
  database: key.DATABASE
};

class Database {
  constructor() {
    this.handleDisconnect();
  }

  handleDisconnect() {
    var self = this;
    this.connection = mysql.createConnection(db_config);

    this.connection.connect(function(err) {
      if (err) {
        console.log("error when connecting to db:", err);
        setTimeout(self.handleDisconnect, 2000);
      }
    });

    this.connection.on("error", function(err) {
      console.log("db error", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        self.handleDisconnect();
      } else {
        throw err;
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
