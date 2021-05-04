var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  productHelper.getAllProducts().then((Products)=>{
   
    res.render('admin/view-products', {Products, admin: true })
  })
  
});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.Images);
  productHelper.addProduct(req.body, (id) => {
    let image = req.files.Images
    image.mv('./public/products-images/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render("admin/add-product")
      } else {
        console.log(err);

      }
    })

  })
})


module.exports = router;
