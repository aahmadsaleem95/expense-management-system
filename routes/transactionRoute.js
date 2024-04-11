const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
// add Transaction POST method
router.post("/add-transaction", addTransaction);

// edit Transaction POST method
router.post("/edit-transaction", editTransaction);
// delete Transaction POST method
router.delete("/delete-transaction", deleteTransaction);

// get all Transactions GET method
router.post("/get-transaction", getAllTransaction);

module.exports = router;
