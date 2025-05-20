const express = require("express");
const logger = require("./middleware/middleware.logger");
require("dotenv").config();
const corsOption = require("./middleware/middleware.cors");
const connect = require("./config/db");
const todoroutes = require("./routes/todo.routes.js");
const path = require("path");
const helmet = require("helmet");
const app = express();
const Port = process.env.Port;

// middleware
app.use(logger);
app.use(corsOption);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

connect();
// api..
app.get("/health", (req, res) => {
  res.end("Server Health is good");
});
app.use("/todo", todoroutes);
app.use(express.static(path.join(__dirname, "public")));

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
