const express = require("express");
const router = express.Router();
const AuthenticationController = require("../controllers/authentication.controller");

router.post("/", AuthenticationController.POST);
module.exports = router;
