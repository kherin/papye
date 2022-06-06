require("dotenv").config();
const express = require("express");

// routers
const AuthenticationRouter = require("./routers/authentication.router");
const RecognizeRouter = require("./routers/recognize.router");

// init
var app = express();

// middleware
app.use(express.json());

// routes
app.use("/auth", AuthenticationRouter);
app.use("/recognize", RecognizeRouter);

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + process.env.PORT);
});

module.exports = app;
