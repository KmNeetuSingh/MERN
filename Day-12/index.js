const express = require("express");
const logger = require("./middleware/middleware.logger");
require("dotenv").config();
const corsOption = require("./middleware/middleware.cors")
const app = express();
const Port = process.env.Port;
// logger middleware
app.use(logger);
// cors midldeware
app.use(corsOption)
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
