const mongoose = require("mongoose")

const truckSchema = new mongoose.Schema({
  matricule:{
    type: String,
    required: [true, "Please fill matricule "]
  },
  status:{ 
    type: String,
    required: [true, "Please fill status "], 
    enum: ["Intern","Extern"]
  },
})

const Truck = mongoose.model("truck", truckSchema)
module.exports = Truck