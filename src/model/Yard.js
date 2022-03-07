const mongoose = require('mongoose');

const yardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add yard name"]
    }
})

const Yard = mongoose.model('yard', yardSchema)
module.exports = Yard