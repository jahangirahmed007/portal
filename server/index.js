const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const path = require("path");
//
//
app.use(express.static(path.resolve(__dirname, "../build")));
app.listen(PORT, () => {
  console.log("server is running");
});
