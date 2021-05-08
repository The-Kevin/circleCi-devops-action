const express = require("express");
const fs = require("fs");

const app = express();

app.set("views", "./views");
app.set("view engine", "ntl");

app.engine("ntl", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    var rendered = content.toString();
    return callback(null, rendered);
  });
});

app.get("/", (req, res) => {
  res.render("index", (err, html) => {
    if (err) return res.status(500).send("error application");
    return res.send(html);
  });
});

app.listen(4000, () => {
  console.log("running");
});
