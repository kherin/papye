const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpeg");
  },
});

const upload = multer({ storage });

// controller
const RecognizeController = require("../controllers/recognize.controller");

// Services
const RecognizeService = require("../services/recognize.service");

router.post(
  "/upload",
  upload.single("form"),
  RecognizeController.UPLOAD,
  RecognizeService.READ
);
module.exports = router;
