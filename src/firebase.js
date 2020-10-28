import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6j93uIZGQmzp8PGxEC824nk2y2itlYSs",
    authDomain: "emazon-clone.firebaseapp.com",
    databaseURL: "https://emazon-clone.firebaseio.com",
    projectId: "emazon-clone",
    storageBucket: "emazon-clone.appspot.com",
    messagingSenderId: "213269904823",
    appId: "1:213269904823:web:a85103d57be700e796fc32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };