const express = require('express');
const router = express.Router();
const containerController = require('../controller/Container');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(containerController.createContainer);
router.route('/getAllcontainer').get(containerController.getAllContainer);

module.exports = router;