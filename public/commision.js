// Commission page using Firestore
import { addCommission, listenCommissions } from './firebase-init.js';

const commForm = document.getElementById('commissionForm');
const commStatus = document.getElementById('commStatus');
const commList = document.getElementById('commList');

commForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('commName').value.trim();
  const email = document.getElementById('commEmail').value.trim();
  const details = document.getElementById('commDetails').value.trim();
  try {
    await addCommission({ name, email, details });
    commStatus.textContent = 'Commission request submitted';
    commForm.reset();
  } catch (err) {
    commStatus.textContent = 'Submit failed: ' + err.message;
  }
});

listenCommissions((items) => {
  commList.innerHTML = '';
  items.forEach(r => {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `<strong>${escapeHtml(r.name)}</strong><p>${escapeHtml(r.details)}</p>`;
    commList.appendChild(li);
  });
});

function escapeHtml(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }