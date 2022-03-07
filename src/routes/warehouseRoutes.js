const express = require('express');
const router = express.Router();
const wareHouseController = require('../controller/Warehouse')
const authController = require('../controller/Auth');
const { Router } = require('express');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(wareHouseController.createOne);
router.route('/getAllwarehouse').get(wareHouseController.getAll);

module.exports = router