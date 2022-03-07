const express = require('express');
const router = express.Router();
const authController = require('../controller/Auth');
const userController = require('../controller/User');


router.route('/createUser').post(userController.createUser);
router.post('/login', authController.login);
router.post('/signup', authController.signup);

// Protect all routes after this middleware
router.use(authController.Protect)

router.use(authController.restrictTo('superAdmin'));
router
    .route('/getAllUsers')
    .get(userController.allUsers);
router
    .route('/:id')
    .get(userController.findUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router