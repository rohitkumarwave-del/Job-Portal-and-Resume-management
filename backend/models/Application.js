const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  name:String,
  email:String,
  job:String
});

module.exports = mongoose.model("Application", ApplicationSchema);