const Yard = require('../model/Yard');
const base = require('../controller/Base');

exports.createYard = base.createOne(Yard);
exports.getAllYArds = base.getAll(Yard);