import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB5w3pYLUg4ZMTEkL4eRfwA0-ui7ol18EU",
  authDomain: "runflicks.firebaseapp.com",
  databaseURL: "https://runflicks.firebaseio.com",
  storageBucket: ""
};

firebase.initializeApp(config);

export default firebase;