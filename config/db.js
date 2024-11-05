const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/test";

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected successfully to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
