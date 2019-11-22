// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
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
    const userName = name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s+/g, "").toLowerCase();
    console.log(userName);
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
