const base = require('./Base');
const Warehouse = require('../model/Warehouse');

exports.createOne = base.createOne(Warehouse);
exports.getAll = base.getAll(Warehouse);
