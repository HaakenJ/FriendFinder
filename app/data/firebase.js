require("dotenv").config();
const apiKey = process.env.FIREBASE_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
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

function addUserToDB(user) {
    let newUser = database.ref(`friends/${name}`);
    newUser.set(user)
}