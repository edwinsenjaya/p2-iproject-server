const express = require("express");
const router = express.Router();

const errorHandler = require("../middlewares/errorHandler");
const userRoutes = require("./userRoutes");
const transactionRoute = require("./transRoutes");
const tagRoute = require("./tagRoutes");

router.use("/", userRoutes);

router.use("/transaction", transactionRoute);

router.use("/tag", tagRoute);

router.use(errorHandler);

module.exports = router;
