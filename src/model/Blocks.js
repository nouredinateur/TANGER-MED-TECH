const mongoose = require('mongoose');

const blocksSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please provide the type"]
    }
})

const Block = mongoose.model("block", blocksSchema)
module.exports = Block