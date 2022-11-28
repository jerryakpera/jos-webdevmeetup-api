const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { firebaseConfig } = require('../config');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
