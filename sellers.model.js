var mongoose = require("mongoose");

var SellersSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    image: String,
    place: { type: String}
  });

module.exports = mongoose.model('SellerAll', SellersSchema);