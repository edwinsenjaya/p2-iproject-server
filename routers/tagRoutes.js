const express = require("express");
const tagController = require("../controllers/tagController");
const router = express.Router();
const authentication = require("../middlewares/authentication");

router.use(authentication);

router.get("/", tagController.viewTags);

router.post("/:id", tagController.addTag);

module.exports = router;
