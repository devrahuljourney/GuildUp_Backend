const express = require("express");
const { emailSchedular } = require("../controller/emailScheduler");
const router = express.Router();
router.post("/email-schedular", emailSchedular)
module.exports = router