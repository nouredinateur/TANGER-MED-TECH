const Block = require('../model/Blocks');
const base = require('./Base');

exports.createBLock = base.createOne(Block);
exports.getAllBlocks = base.getAll(Block);