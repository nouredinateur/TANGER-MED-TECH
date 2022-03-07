const { Router } = require('express');
const express = require('express');
const router = express.Router();
const authController = require('../controller/Auth');
const yardController = require('../controller/Yard');


router.use(authController.Protect);
router.use(authController.restrictTo("admin"));
router.route('/').post(yardController.createYard);
router.route('/getAllYards').get(yardController.getAllYArds);

module.exports = router