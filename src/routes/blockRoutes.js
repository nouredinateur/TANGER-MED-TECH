const express = require('express');
const router = express.Router();
const blockController = require('../controller/Block');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(blockController.createBLock);
router.route('/getAllblocks').get(blockController.getAllBlocks);

module.exports = router