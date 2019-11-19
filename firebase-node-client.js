const firebase = require("firebase");
firebase.initializeApp({
    "appName": "FriendFinder",
    "serviceAccount": "./service-account.json",
    authDomain: "friendfinder-b413b.firebaseapp.com",
    databaseURL: "https://friendfinder-b413b.firebaseio.com",
    storageBucket: "friendfinder-b413b.appspot.com"
});
const database = firebase.app().database();

function getFriends() {
    const friendsRef = database.ref("friends/");
    friendsRef.once("value")
        .then(snap => {
            console.log(snap.val())
            return snap.val();
        })
}