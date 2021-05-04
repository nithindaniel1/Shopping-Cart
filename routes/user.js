var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/* GET home page. */
router.get('/', function (req, res, next) {

  productHelper.getAllProducts().then((Products) => {
    console.log(Products);
    res.render('admin/view-products', {Products, admin: false })
  })
  // res.render('index', {Products, admin: false });
});

module.exports = router;
