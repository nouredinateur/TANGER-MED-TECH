const Container = require("../model/Container")
const base = require("./Base")

exports.createContainer = base.createOne(Container);
exports.getAllContainer = base.getAll(Container);