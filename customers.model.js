var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    image: String,
    place: { type: String}
  });

module.exports = mongoose.model('Customer', CustomerSchema);