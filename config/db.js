const mongoose = require("mongoose");

const live_uri =
  "mongodb+srv://sunnyele:IkpabiEle90510@cluster0.ol0kx.mongodb.net/book_Store_App?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async () => {
  try {
    await mongoose.connect(live_uri);
    console.log("connected successfully to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
