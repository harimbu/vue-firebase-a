import Vue from 'vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firebase-database'
import config from '../../firebaseConfig'

const firebaseConfig = config

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
