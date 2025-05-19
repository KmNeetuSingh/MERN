const express = require("express");
const logger = require("./middleware/middleware.logger");
require("dotenv").config();
const app = express();
const Port = process.env.Port;
app.use(logger);
const connect = require("./config/db");
connect();

app.get("/health", (req, res) => {
  res.end("Server Health is good");
});
app.post("/to", (req, res) => {
  console.log("as");
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
