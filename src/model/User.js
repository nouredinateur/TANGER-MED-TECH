const mongoose = require('mongoose');
const userShema = mongoose.Schema({
  name: {
     type: String,
     require: true
   },
   email: {
      type: String,
      require: true
   },
   password: {
       type: String,
       require: true
   },
   nationality: {
       type: String,
       require: false
   },
   organisation:  {
     type: String,
     require: true
   },
   role: {
    type: String,
    enum: ["admin","fournisseur","prestataire", "drPort", "drQuais", "superAdmin", "containerOwner"],
    default: "admin"
  }
})

const User = mongoose.model("user", userShema);

module.exports = User;