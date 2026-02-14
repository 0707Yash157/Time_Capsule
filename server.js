const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    let data = {};

    if (fs.existsSync("capsule.json")) {
        let file = fs.readFileSync("capsule.json");
        data = JSON.parse(file);
    }

    res.render("index", { capsule: data });
});

// Save Capsule
app.post("/save", (req, res) => {
    const { message, unlockDate } = req.body;

    const capsule = {
        message,
        unlockDate
    };

    fs.writeFileSync("capsule.json", JSON.stringify(capsule));
    res.redirect("/");
});

// Open Capsule
app.post("/open", (req, res) => {
    let file = fs.readFileSync("capsule.json");
    let capsule = JSON.parse(file);

    const now = new Date();
    const unlock = new Date(capsule.unlockDate);

    if (now >= unlock) {
        res.send(`<h2>🔓 Your Message:</h2><p>${capsule.message}</p><a href="/">Back</a>`);
    } else {
        res.send(`<h2>⏳ Locked until:</h2><p>${unlock}</p><a href="/">Back</a>`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
