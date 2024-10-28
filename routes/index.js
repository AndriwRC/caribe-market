const { Router } = require('express');

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.get('/', (req, res) => {
    res.send('Welcome to Caribe Market api version: 1');
  });
}

module.exports = routerApi;
