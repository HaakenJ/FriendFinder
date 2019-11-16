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



    friends.push(newUser);

    res.json(newUser);
})

router.get("/api/users", (req, res) => {
    return res.json(friends);
});


module.exports = router;

// get new user data
// loop through friends list
// for each friend, loop through the friend's scores
// for each number in scores, find the diff between newUser's score at that same index
// add the absolute value of the difference to total score
// if total score is greater than closestMatch's total score,
// store the totalScore in highestScore
// store the current friend in closestMatch
// At the end of the loop of friends, return the closest match friend

function findClosestMatch(friendList, user) {
    let totalScore = 0,
        closestMatch,
        highScore = 0,
        diff = 0;

    friendList.forEach(friend => {
        for (let i = 0; i < friend.scores.length; i++) {
            diff = friend.scores[i] - user.scores[i];
            totalScore += Math.abs(diff);
        }
        if (totalScore > highScore) {
            highScore = totalScore;
            closestMatch = friend;
        }
    })
    return closestMatch;
}