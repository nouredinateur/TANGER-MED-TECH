const mongoose = require("mongoose")

const shipSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  country:{
    type: String,
    required: [true, "Please fill nationality"]
  },
  arrivesAt: {
    type: Date,
    required: [true, "Please add the arrival date"]
  },
  leavesAt: {
      type: Date,
      required: [true, "Please add depart date"]
  }
})

const Ship = mongoose.model("ship", shipSchema)
module.exports = Ship