const express = require('express');

const app = express();

require('./app/database');

const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.listen(port);
