const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
// add Transaction POST method
router.post("/add-transaction", addTransaction);

// get all Transactions GET method
router.get("/get-transaction", getAllTransaction);

module.exports = router;
