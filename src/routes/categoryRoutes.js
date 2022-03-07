const express = require('express');
const router = express.Router();
const categoryController = require('../controller/Category');
const authController = require('../controller/Auth');

router.use(authController.Protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(categoryController.createCategory);
router.route('/getAllcategory').get(categoryController.getAllCategory);

module.exports = router;