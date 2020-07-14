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
    res.json(path.join(__dirname, "../../index.html"));
});

//Route that will send users to the notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

//API ROUTES






