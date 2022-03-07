const mongoose = require('mongoose')

const dockerSchema =new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please provide the type"]
    }
})

const Docker = mongoose.model("docker", dockerSchema)
module.exports = Docker