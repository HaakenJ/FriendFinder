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

function addUserToDB(name, photo, gender, preference, scores) {
    const userName = name.replace(/\s+/g, "").toLowerCase();
    const newUser = database.ref(`friends/${userName}`);
    newUser.set({
        userName: userName,
        name: name,
        photo: photo,
        gender: gender,
        preference: preference,
        scores: scores
    })
}
