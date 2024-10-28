const { Router } = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const storesRouter = require('./stores.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.get('/', (req, res) => {
    res.send('Welcome to Caribe Market api version: 1');
  });
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/stores', storesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
