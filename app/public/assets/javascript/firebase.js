// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: "friendfinder-b413b.firebaseapp.com",
    databaseURL: "https://friendfinder-b413b.firebaseio.com",
    projectId: "friendfinder-b413b",
    storageBucket: "friendfinder-b413b.appspot.com",
    messagingSenderId: "391826192972",
    appId: "1:391826192972:web:954189e65612f2ff5412e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function addUserToDB(name, photo, gender, scores) {
    const userName = name.replace(/\s+/g, "");
    const newUser = database.ref(`friends/${name}`);
    newUser.set({
        userName: userName.toLowerCase(),
        name: name,
        photo: photo,
        gender: gender,
        scores: scores
    })
}

function getFriends() {
    const friendsRef = database.ref("friends/");
    friendsRef.once("value").then(snap => {
        console.log(snap.val())
        return snap.val();
    })
}