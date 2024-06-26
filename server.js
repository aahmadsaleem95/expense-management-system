const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");
const connectDb = require("./config/connectDb");
//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
// user routes
app.use("/api/v1/users", require("./routes/userRoute"));
// transactions routes
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

app.use("/api", require("./routes/chatRoute"));

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
const PORT = 8080 || process.env.PORT;

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
