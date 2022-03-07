const mongoose = require("mongoose")

const warehouseSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please add name"]
    }
})

const Warehouse = mongoose.model('warehouse', warehouseSchema);
module.exports = Warehouse;