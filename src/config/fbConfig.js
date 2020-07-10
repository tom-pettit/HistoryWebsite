import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDMYWKPmPBffFKlxpYWM0-aeTvcTdNB85Y",
    authDomain: "brumafriendhistory-5be82.firebaseapp.com",
    databaseURL: "https://brumafriendhistory-5be82.firebaseio.com",
    projectId: "brumafriendhistory-5be82",
    storageBucket: "brumafriendhistory-5be82.appspot.com",
    messagingSenderId: "263335229728",
    appId: "1:263335229728:web:d0e8bb4e017472e8fabf45",
    measurementId: "G-JX9PXDM6KW"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
