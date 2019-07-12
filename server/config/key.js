const key = {
  // mysql://bd450626d2f93b:8130b435@us-cdbr-iron-east-02.cleardb.net/heroku_968d3a9af07b45b?reconnect=true
  API_KEY:
    process.env.NODE_ENV === "production"
      ? process.env.API_KEY
      : "a66e1d90373c664934876d892789c39e",
  HOST: process.env.NODE_ENV === "production" ? process.env.HOST : "localhost",
  USER: process.env.NODE_ENV === "production" ? process.env.USER : "root",
  PASSWORD:
    process.env.NODE_ENV === "production" ? process.env.PASSWORD : "123456",
  DATABASE:
    process.env.NODE_ENV === "production" ? process.env.DATABASE : "weather_app"
};

module.exports = key;
