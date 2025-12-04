// Arts page: post artworks to Firestore and listen for updates
import { auth, onAuthStateChanged, addArtwork, listenArtworks } from './firebase-init.js';

const postForm = document.getElementById('postArtForm');
const artworksList = document.getElementById('artworksList');
const postStatus = document.getElementById('postArtStatus');

let currentUser = null;
onAuthStateChanged(auth, (u) => currentUser = u);

postForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUser) {
    postStatus.textContent = 'Sign in to post artworks';
    return;
  }
  const title = document.getElementById('artTitle').value.trim();
  const description = document.getElementById('artDesc').value.trim();
  const imageUrl = document.getElementById('artImageUrl').value.trim();

  try {
    await addArtwork({ title, description, imageUrl, user: currentUser });
    postStatus.textContent = 'Artwork posted';
    postForm.reset();
  } catch (err) {
    postStatus.textContent = 'Post failed: ' + (err.message || err);
  }
});

listenArtworks((items) => {
  artworksList.innerHTML = '';
  items.forEach(art => {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `<strong>${escapeHtml(art.title)}</strong><p>${escapeHtml(art.description || '')}</p>`;
    if (art.imageUrl) li.innerHTML += `<img src="${escapeHtml(art.imageUrl)}" style="max-width:100%;border-radius:8px;margin-top:8px">`;
    artworksList.appendChild(li);
  });
});

function escapeHtml(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }