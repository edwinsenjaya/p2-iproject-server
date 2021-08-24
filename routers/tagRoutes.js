const express = require("express");
const tagController = require("../controllers/tagController");
const router = express.Router();

router.get("/", tagController.viewTags);

module.exports = router;
