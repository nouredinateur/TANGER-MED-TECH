const Category = require("../model/Category")
const base = require("./Base")

exports.createCategory = base.createOne(Category);
exports.getAllCategory = base.getAll(Category);