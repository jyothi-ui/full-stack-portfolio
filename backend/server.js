const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("HOME WORKING");
});

app.get("/projects", (req, res) => {
    res.send("JYOTHI TEST 123");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});