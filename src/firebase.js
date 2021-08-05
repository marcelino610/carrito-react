import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDSSYGOcSTxCMwh4HhcwhKpddE8tBM4h0M",
    authDomain: "carrito-coder.firebaseapp.com",
    projectId: "carrito-coder",
    storageBucket: "carrito-coder.appspot.com",
    messagingSenderId: "750004634121",
    appId: "1:750004634121:web:3e7bf097cc89b5e4b6eed8"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirebase() {
      return app
  }

  export const database = firebase.firestore()