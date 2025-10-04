const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to mca");
});

app.listen(3000, () => {
    console.log("server is running : 127.0.0.1:3000");
});