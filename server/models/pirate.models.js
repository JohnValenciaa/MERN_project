const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Pirate Name must be at least 3 characters long"]
    },
    img_url: {
        type: String,
        required: [true, "URL is required"],
        minlength: [1, "URL must be longer than 1 letter"]
    },
    treasure_count: {
        type: Number,
        min: [1, "Gotta have some kind of treasure.."],
        max: [10, "We can't carry that much treasure on this ship!!"]
    },
    phrase: {
        type: String,
        required: [true, "Phrase is required"],
        minlength: [2, "What Kinda Phrase is That??"]
    },
    position: {
        type: String,
        required: [true, "Select a position to be a pirate!"]
    },
    injuries: {
        type: Boolean,
        required: [true, "Everyone's got Injury!"]
    },
    injuries_two: {
        type: Boolean,
        required: [true, "Everyone's got Injury!"]
    },
    injuries_three: {
        type: Boolean,
        required: [true, "Everyone's got Injury!"]
    },
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
