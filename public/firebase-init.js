// Initializes Firebase (Auth + Firestore) and exports small helper functions.
// Uses the modular Firebase v9+ SDK via the CDN ESM bundles.

import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

if (!firebaseConfig || !firebaseConfig.projectId) {
  console.error('firebase-config.js does not export a valid firebaseConfig object.');
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* -----------------------
   Auth helpers
   ----------------------- */
async function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

async function signOutUser() {
  return fbSignOut(auth);
}

/* -----------------------
   Firestore helpers (collections: arts, commissions, contacts)
   ----------------------- */

async function addArtwork({ title, description = '', imageUrl = '', user }) {
  const col = collection(db, 'arts');
  return addDoc(col, {
    title,
    description,
    imageUrl,
    userId: user?.uid || null,
    authorEmail: user?.email || null,
    createdAt: serverTimestamp()
  });
}

function listenArtworks(onChange) {
  const q = query(collection(db, 'arts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = [];
    snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
    onChange(items, snapshot);
  });
}

async function addCommission({ name, email, details }) {
  const col = collection(db, 'commissions');
  return addDoc(col, { name, email, details, createdAt: serverTimestamp() });
}

function listenCommissions(onChange) {
  const q = query(collection(db, 'commissions'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = [];
    snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
    onChange(items, snapshot);
  });
}

async function addContact({ name, email, message }) {
  const col = collection(db, 'contacts');
  return addDoc(col, { name, email, message, createdAt: serverTimestamp() });
}

function listenContacts(onChange) {
  const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = [];
    snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
    onChange(items, snapshot);
  });
}

/* -----------------------
   Exports
   ----------------------- */
export {
  app,
  auth,
  db,
  // auth functions
  signUp,
  signIn,
  signOutUser,
  onAuthStateChanged,
  // firestore helpers
  addArtwork,
  listenArtworks,
  addCommission,
  listenCommissions,
  addContact,
  listenContacts
};