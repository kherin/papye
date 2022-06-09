require("dotenv").config();
const express = require("express");
const cors = require("cors");

// routers
const RecognizeRouter = require("./routers/recognize.router");

// init
var app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/recognize", RecognizeRouter);

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + process.env.PORT);
});

module.exports = app;
