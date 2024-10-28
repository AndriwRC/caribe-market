const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { config } = require('./config');

const app = express();
const port = config.port;

app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/v1/`);
});
