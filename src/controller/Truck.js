const Truck = require("../model/Truck")
const base = require("./Base")

module.exports = {
    createTruck : base.createOne(Truck),
    getAllTruck : base.getAll(Truck)
}