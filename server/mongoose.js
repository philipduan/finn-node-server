const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectDB = () =>
  mongoose.connect("mongodb://mongo:27017/users", {
    useNewUrlParser: true,
  });

module.exports = connectDB;
