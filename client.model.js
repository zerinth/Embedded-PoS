var mongoose = require("mongoose");

var ClientSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    image: String,
    imageid: String,
    place: { type: String},
    roles: [{ type: 'String' }],
    isVerified: { type: Boolean, default: false },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    products: [{
      name: String,
      description: String,
      price: String,
      picture: String,
      pictureId: String,
      quantity: Number,
      sellerplace: String,
      sellername: String,
      sellermail: String,
      sellerphone: String,
      sellerimage: String,
      discount: Number
    }]
  });

module.exports = mongoose.model('Client', ClientSchema);