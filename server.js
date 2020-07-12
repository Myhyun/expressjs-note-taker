const express = require("express");
const path = require("path");


const app = express();
var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Basic route that sends users to the home page
app.get("*", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});

//Route that will send users to the notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

//API ROUTES

$("#save-note").on("click", function (event) {
    event.preventDefault();
    var newNote = {
      title: $("#note-title").val(),
      text: $("#note-textarea").val()
    };
    $.post("/api/notes", newNote)
      .then(function (data) {
        console.log("notes.html", data);
        alert("Saved notes");
      });
});




