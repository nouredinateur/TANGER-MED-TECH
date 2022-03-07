const express = require('express');
const router = express.Router();
const truckController = require('../controller/Truck');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(truckController.createTruck);
router.route('/getAlltruck').get(truckController.getAllTruck);

module.exports = router;