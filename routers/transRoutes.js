const express = require("express");
const transController = require("../controllers/transController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);
router.use(authorization);

router.get("/", transController.viewTransactions);

module.exports = router;
