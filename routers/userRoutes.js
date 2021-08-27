const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authentication = require("../middlewares/authentication");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.use(authentication);

router.patch("/budget", userController.addBudget);

router.patch("/saving", userController.changeSaving);

module.exports = router;
