const express = require("express");
const transController = require("../controllers/transController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);

router.get("/", transController.viewTransactions);

router.post("/", transController.addTransaction);

router.put("/:id", authorization, transController.editTransaction);

router.delete("/:id", authorization, transController.deleteTransaction);

router.patch("/currency/:id", authorization, transController.convertCurrency);

module.exports = router;
