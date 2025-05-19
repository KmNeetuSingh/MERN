const fs = require('fs');

const logger = (req, res, next) => {
  let logData = `Url : ${req.url} | method : ${req.method} | Date : ${new Date().toLocaleString()}\n`;
  fs.appendFileSync("./logs.txt", logData);
  next();
};

module.exports = logger;
