const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  console.log("MONGO+_URL: ", process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
