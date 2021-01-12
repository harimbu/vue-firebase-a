import Vue from 'vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firebase-database'

const firebaseConfig = {
  apiKey: 'AIzaSyA6qP_P6XSkIdaphPuahNtr_0UNbjg2JwA',
  authDomain: 'vfb-site.firebaseapp.com',
  projectId: 'vfb-site',
  storageBucket: 'vfb-site.appspot.com',
  messagingSenderId: '415757310858',
  appId: '1:415757310858:web:aabf6fb4732d690c004673'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
