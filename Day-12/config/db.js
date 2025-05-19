const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Db");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
