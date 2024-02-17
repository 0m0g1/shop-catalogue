const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = {name: "Davis", hi: "hello"};
    res.render("index", {data});
})

app.listen(8080, ()=> {
    console.log(`App is running on port http://localhost:8080`)
})