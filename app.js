require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const router = require("./routers");
const dailyReminder = require("./cron/dailyReminder");

// ExTrac App
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

dailyReminder();

app.listen(PORT, () => {
  console.log(`App working on port ${PORT}`);
});
