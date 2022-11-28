const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let date = today.toLocaleDateString("en-AU", options);
    res.render("list", {
        date: date,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    items.push(req.body.newItem)
    console.log(req.body.newItem);
    res.redirect("/");
})

app.listen(port, () => {
    console.log("Server started on port " + port);
});