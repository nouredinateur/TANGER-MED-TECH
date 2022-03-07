const express = require('express');
const router = express.Router();

const shipController = require('../controller/Ship');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(shipController.createShip);
router.route('/getAllship').get(shipController.getAllShip);

module.exports = router;