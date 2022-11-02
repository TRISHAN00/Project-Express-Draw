require("dotenv").config();
const express = require("express");
const myDb = require("../db/db");
const { notFoundHandler, errorHandler } = require("./error");
const middleware = require("./middleware");
const router = require("./routes");
const app = express();

const bulk = myDb.bulkCreate("Bulk 1", 10, 2);
console.log("Bulk: ", bulk);

myDb.create("User 1", 10);
myDb.create("User 2", 10);
myDb.create("User 3", 10);
myDb.create("User 4", 10);
myDb.create("User 5", 10);

const allTickets = myDb.allTickets();
console.log("All tickets: ", allTickets);

const winners = myDb.draw(3);
console.log("Winners", winners);

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
