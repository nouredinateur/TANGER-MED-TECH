const mongoose = require("mongoose")

const portSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  yards:{
    type: Number,
    required: [true, "Please fill description"]
  },
})

const Port = mongoose.model("port", portSchema)
module.exports = Port