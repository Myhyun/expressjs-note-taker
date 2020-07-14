const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route that will send users to the notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../notes.html"));
});

//API ROUTES

app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    res.json(obj);
  });
});

app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    obj.push(req.body);

    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(obj), (err) => {
      if (err) throw err;
      console.log('Data written to file');
      res.json(obj);
    });
  });
});

app.delete("/ap/notes:id", (req, res) => {
  res.send("Delete request for ID = " + req.params.id);
});

// Basic route that sends users to the home page
app.get("*", function (req, res) {
  res.json(path.join(__dirname, "../../index.html"));
});