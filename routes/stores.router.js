const { Router } = require('express');
const StoreService = require('../services/store.service');

const router = Router();
const storeService = new StoreService();

router.get('/', (req, res) => {
  res.send('Stores');
});

module.exports = router;
