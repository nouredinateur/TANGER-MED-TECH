const Ship = require("../model/Ship")
const base = require("../controller/Base")

exports.createShip = base.createOne(Ship);
exports.getAllShip = base.getAll(Ship);
