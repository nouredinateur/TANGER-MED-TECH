const User = require('../model/User');
const Base = require('./Base')

module.exports = {
    createUser : Base.createOne(User),
    deleteUser : Base.deleteOne(User),
    updateUser : Base.updateOne(User),
    findUser : Base.findOne(User),
    allUsers : Base.getAll(User),
}