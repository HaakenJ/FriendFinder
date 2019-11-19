const express = require("express");
const app = express();
const router = express.Router();
const firebase = require("firebase");
firebase.initializeApp({
    "appName": "FriendFinder",
    "serviceAccount": "./service-account.json",
    authDomain: "friendfinder-b413b.firebaseapp.com",
    databaseURL: "https://friendfinder-b413b.firebaseio.com",
    storageBucket: "friendfinder-b413b.appspot.com"
});
const database = firebase.app().database();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Receive user data and find their match.
router.post("/api/users", (req, res) => {
    const newUser = req.body;

    const friendsRef = database.ref("friends/");
    friendsRef.once("value")
        .then(snap => {
            const friends = snap.val()

            res.json(findClosestMatch(friends, newUser));
        })
})

// Return a list of the friends to a user.
router.get("/api/users", (req, res) => {
    const friendsRef = database.ref("friends/");
    friendsRef.once("value")
        .then(snap => {
            res.json(snap.val());
        })
});


module.exports = router;

function findClosestMatch(friendObj, user) {
    let totalScore = 0,
        closestMatch,
        highScore = 0,
        diff = 0,
        friendList = Object.keys(friendObj);
    

    friendList.forEach(friend => {
        if (friendObj[friend].name === user.name) {
            continue;
        }
        totalScore = 0;
        if (friendObj[friend].gender === user.preference || user.preference === "N") {
            for (let i = 0; i < friendObj[friend].scores.length; i++) {
                diff = friendObj[friend].scores[i] - user.scores[i];
                totalScore += Math.abs(diff);
            }
            if (highScore === 0 && closestMatch === undefined) {
                highScore = totalScore;
                closestMatch = friendObj[friend];
                
            } else if (totalScore < highScore) {
                highScore = totalScore;
                closestMatch = friendObj[friend];
            }
        }
    })
    return closestMatch;
}


