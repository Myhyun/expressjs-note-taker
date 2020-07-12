const express = require("express");
const path = require("path");
const { userInfo } = require("os");

const app = express();
var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
