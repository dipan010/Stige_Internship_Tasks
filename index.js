const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile(__dirname + "/" + "weather.json", "utf8", (err, data) => {
        res.end(data);
    });
});
app.listen(process.env.PORT, "0.0.0.0", function(err) {
    console.log("Started listening on %s", app.url);
});