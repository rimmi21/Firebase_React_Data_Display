import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCMR6CCqgDNO-k9UR6iZfSrnCWxexkMyGc",
  authDomain: "react-fire-4fbfd.firebaseapp.com",
  databaseURL: "https://react-fire-4fbfd.firebaseio.com",
  projectId: "react-fire-4fbfd",
  storageBucket: "react-fire-4fbfd.appspot.com",
  messagingSenderId: "514104245417",
  appId: "1:514104245417:web:fbc26b045cbe2698f7fdb8",
  measurementId: "G-QNXYSRW9Y5"
};
firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
