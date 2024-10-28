const { Router } = require('express');
const CategoryService = require('../services/category.service');

const router = Router();
const categoryService = new CategoryService();

router.get('/', (req, res) => {
  res.send('Categories');
});

module.exports = router;
