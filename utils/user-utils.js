const { db } = require('./firebase.js');
const { doc, getDoc, updateDoc } = require('firebase/firestore');

module.exports.getUser = async (email) => {
  try {
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
};

module.exports.updateUser = async (email, update) => {
  try {
    const userRef = doc(db, 'users', email);

    await updateDoc(userRef, update);
  } catch (err) {
    throw err;
  }
};
