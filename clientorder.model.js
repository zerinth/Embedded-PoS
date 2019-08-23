var mongoose = require("mongoose");

var ClientOrderSchema = new mongoose.Schema({
    name: String,
    productid: String,
    price: Number,
    picture: String,
    quantity: Number,
    discount: Number,
    clientemail: String,
    clientphone: String,
    selleremail: String,
    sellerphone: String
  });

module.exports = mongoose.model('ClientOrder', ClientOrderSchema);