require("dotenv").config();
const express = require("express");
const myDb = require("../db/db");
const { notFoundHandler, errorHandler } = require("./error");
const middleware = require("./middleware");
const router = require("./routes");
const app = express();

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
