// Home page: listen for auth and for artworks (Firestore)
import { auth, onAuthStateChanged, listenArtworks, signOutUser } from './firebase-init.js';

const welcomeMsg = document.getElementById('welcomeMsg');
const signedInArea = document.getElementById('welcomeSignedIn');
const userEmailEl = document.getElementById('userEmail');
const signOutBtn = document.getElementById('signOutBtn');
const artsList = document.getElementById('artsList');

_onAuthStateChanged();

function _onAuthStateChanged() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      welcomeMsg.style.display = 'none';
      signedInArea.style.display = '';
      userEmailEl.textContent = user.email;
    } else {
      welcomeMsg.style.display = '';
      signedInArea.style.display = 'none';
    }
  });
}

signOutBtn?.addEventListener('click', async () => {
  await signOutUser();
});

// Firestore live listener for artworks
let unsubscribeArts = null;
if (artsList) {
  unsubscribeArts = listenArtworks((items) => {
    artsList.innerHTML = '';
    items.forEach(art => {
      const li = document.createElement('li');
      li.className = 'card';
      li.innerHTML = `<strong>${escapeHtml(art.title)}</strong><p>${escapeHtml(art.description || '')}</p>`;
      if (art.imageUrl) {
        const img = document.createElement('img');
        img.src = art.imageUrl;
        img.style.maxWidth = '100%';
        img.style.borderRadius = '8px';
        li.appendChild(img);
      }
      artsList.appendChild(li);
    });
  });
}

function escapeHtml(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }