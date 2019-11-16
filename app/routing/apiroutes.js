const express = require("express");
const friends = require("../data/friends");
const app = express();
const router = express.Router();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

router.post("/api/users", (req, res) => {
    const newUser = req.body;

    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

    friends.push(newUser);

    res.json(newUser);
})

router.get("/api/users", (req, res) => {
    return res.json(friends);
});


module.exports = router;