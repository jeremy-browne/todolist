const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let today = new Date();
    let currentDay = today.getDay();
    var day = daysOfTheWeek[currentDay];


    res.render("list", {kindOfDay: day});
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});