const mongoose = require('mongoose');
var flowerSchema = mongoose.Schema({
        flowerName: {type: String, minlength:2},
        flowerScientificName : {type: String, minlength:2},
        flowerColor : {type: String, minlength:3},
        flowerInMedicine: String
    }
);
Flower = mongoose.model('Flower',flowerSchema);
module.exports = Flower;

