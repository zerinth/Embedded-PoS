var mongoose = require("mongoose");

var PlaceSchema = new mongoose.Schema({
    place: String,
    nearbyplaces: [
        String
    ]
})

module.exports = mongoose.model('Place', PlaceSchema);