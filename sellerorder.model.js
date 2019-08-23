var mongoose = require("mongoose");

var SellerOrderSchema = new mongoose.Schema({
    name: String,
    price: Number,
    picture: String,
    quantity: Number,
    discount: Number,
    clientemail: String,
    clientphone: String,
    selleremail: String,
    sellerphone: String
  });

module.exports = mongoose.model('SellerOrder', SellerOrderSchema);