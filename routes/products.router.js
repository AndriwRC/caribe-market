const { Router } = require('express');
const ProductService = require('../services/product.service');

const router = Router();
const productService = new ProductService();

router.get('/', (req, res) => {
  res.send('Products');
});

module.exports = router;
