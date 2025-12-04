// Account page logic using the new SDK helpers (Firestore + Auth)
import { signUp, signIn, signOutUser, onAuthStateChanged } from './firebase-init.js';

const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');
const authStatus = document.getElementById('authStatus');
const signedInArea = document.getElementById('signedInArea');
const signedInEmail = document.getElementById('signedInEmail');

function showStatus(msg, isError = false) {
  authStatus.textContent = msg;
  authStatus.style.color = isError ? '#b00020' : '#036';
}

signupForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  try {
    await signUp(email, password);
    showStatus('Account created and signed in', false);
  } catch (err) {
    showStatus(err.message || 'Sign up error', true);
  }
});

signinForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signinEmail').value.trim();
  const password = document.getElementById('signinPassword').value.trim();
  try {
    await signIn(email, password);
    showStatus('Signed in', false);
  } catch (err) {
    showStatus(err.message || 'Sign-in error', true);
  }
});

document.getElementById('signOutButton')?.addEventListener('click', async () => {
  await signOutUser();
  showStatus('Signed out', false);
});

onAuthStateChanged((user) => {
  // note: onAuthStateChanged in firebase-init.js is re-exported from the SDK
  // but here we listen via the global SDK binding; to avoid confusion you can
  // also import getAuth & onAuthStateChanged directly.
  // For simplicity, call a small wrapper:
}, (err) => console.error(err));

// Proper onAuthStateChanged usage — import again from module to get the real function:
import { auth, onAuthStateChanged as _onAuthStateChanged } from './firebase-init.js';
_onAuthStateChanged(auth, (user) => {
  if (user) {
    signedInArea.style.display = '';
    document.getElementById('authForms').style.display = 'none';
    signedInEmail.textContent = user.email;
  } else {
    signedInArea.style.display = 'none';
    document.getElementById('authForms').style.display = '';
    signedInEmail.textContent = '';
  }
});