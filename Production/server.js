const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
console.log("CorePlan is running => localhost:5000");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000);
