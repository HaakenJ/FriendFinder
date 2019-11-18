const express = require("express");
const friends = require("../data/friends");
const app = express();
const router = express.Router();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// Receive user data and find their match.
router.post("/api/users", (req, res) => {
    const newUser = req.body;

    // friends.push(newUser);

    res.json(findClosestMatch(friends, newUser));
})

// Return a list of the friends to a user.
router.get("/api/users", (req, res) => {
    return res.json(friends);
});


module.exports = router;

function findClosestMatch(friendList, user) {
    let totalScore = 0,
        closestMatch,
        highScore = 0,
        diff = 0;

    friendList.forEach(friend => {
        totalScore = 0;
        if (friend.gender === user.preference || user.preference === "N") {
            for (let i = 0; i < friend.scores.length; i++) {
                diff = friend.scores[i] - user.scores[i];
                totalScore += Math.abs(diff);
            }
            if (highScore === 0 && closestMatch === undefined) {
                highScore = totalScore;
                closestMatch = friend;
                
            } else if (totalScore < highScore) {
                highScore = totalScore;
                closestMatch = friend;
            }
        }
    })
    return closestMatch;
}


