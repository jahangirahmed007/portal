const express = require("express");
// const mongoose = require('mongoose');\
const cors = require("cors");
const dotenv = require("dotenv");
const Middleware = require("./Mongoose/index");
dotenv.config();
const routes = require("./Routes/routes");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../build")));
const passport = require("passport");
require("./passport/JWT-Strategy")(passport);
Middleware();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use("/portal-fare", routes);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build", "index.html"));
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is running on port : " + PORT);
});