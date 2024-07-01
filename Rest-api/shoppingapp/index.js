//config dotenv library
require('dotenv').config();

//import util
const util = require('./util');

//import express http
const express = require('express');

//import middleware
const reqlogger = require('./middeware/reqlogger');

const app = express();
app.use(reqlogger);

// for API
app.use("/api", require('./controller/api'));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is starting at ${process.env.APP_PORT}`);
});
