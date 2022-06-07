const express = require("express");
const router = express.Router();
const multer = require("multer");

// shared
const { FILE_TYPE } = require("../shared/enums");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}.${FILE_TYPE.PDF}`;
    cb(null, filename);
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
