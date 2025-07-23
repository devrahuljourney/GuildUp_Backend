const express = require("express");
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage });
const { emailSchedular } = require("../controller/emailScheduler");
const router = express.Router();
router.post("/email-scheduler", upload.array("attachments"), emailSchedular)
module.exports = router