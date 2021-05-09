const mongoose = require("mongoose");
const { dbHost, dbName, dbUser, dbPass } = require("../app/config");
//connection to mongo docker
// const { dbHost, dbPort, dbName } = require("../app/config");
// mongoose.connect(
//   `mongodb://${dbHost}:${dbPort}/${dbName}?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
// );
//connection mongo atlas
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
const db = mongoose.connection;
module.exports = db;
