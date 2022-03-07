const mongoose = require("mongoose")

const containerSchema = new mongoose.Schema({
  weight:{
    type: Number,
    required: [true, "Please fill weight "]
  },
  brand:{
    type: String,
    required: [true, "Please fill brand "]
  },
  position: {
    type: String,
    required: [true, "Please fill in the position"]
  }
})

const Container = mongoose.model("container", containerSchema)
module.exports = Container