/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBWMyQGjFr9poi9OzH-uQ6bfjhLrF42kMQ",

  authDomain: "friendlychat-77bbe.firebaseapp.com",

  projectId: "friendlychat-77bbe",

  storageBucket: "friendlychat-77bbe.appspot.com",

  messagingSenderId: "544765956936",

  appId: "1:544765956936:web:7113fd86a64b5b1e89997d",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

