var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Seller' },
    name: String,
    description: String,
    price: String,
    picture: String,
    quantity: Number,
    sellerplace: String,
    sellername: String,
    sellermail: String,
    sellerphone: String,
    sellerimage: String,
    viewcount: Number,
    checkoutcount: Number,
    boughtcount: Number,
    discount: Number,
    rating: Number
  });

module.exports = mongoose.model('Product', ProductSchema);