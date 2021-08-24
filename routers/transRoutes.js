const express = require("express");
const transController = require("../controllers/transController");
const router = express.Router();

router.get("/", transController.viewTransactions);

module.exports = router;
