const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile(__dirname + "/" + "weather.json", "utf8", (err, data) => {
        res.end(data);
    });
});

app.listen(3000, "localhost", () => {
    console.log(`app listening at http://localhost:3000`);
});