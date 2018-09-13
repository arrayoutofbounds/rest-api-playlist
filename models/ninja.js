const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// schema allows us to structure the data in the object.
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    // add in geo location
    geometry: GeoSchema
});

// created model in the dataabse
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;