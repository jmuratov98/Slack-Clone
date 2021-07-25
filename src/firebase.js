import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDzuJVknQU49BhdFrOl4Lcrr9cBAR-Cr-Q",
    authDomain: "slack-clone-abec5.firebaseapp.com",
    projectId: "slack-clone-abec5",
    storageBucket: "slack-clone-abec5.appspot.com",
    messagingSenderId: "433216431037",
    appId: "1:433216431037:web:7852f84e541b80659568d4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth, db, provider
}