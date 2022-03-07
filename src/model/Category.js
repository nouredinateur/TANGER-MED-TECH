const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, "Please fill name "]
  },
})

const Category = mongoose.model("category", categorySchema)
module.exports = Category