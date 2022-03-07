const express = require('express');
const router = express.Router();
const portController = require('../controller/Port');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(portController.createPort);
router.route('/getAllport').get(portController.getAllPort);

module.exports = router;