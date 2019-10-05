const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./config/routes');
const app = express();
const cors = require('cors');
const port = 4000;
const config = require('./config/environment');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    require('./db');
});

module.exports = app;