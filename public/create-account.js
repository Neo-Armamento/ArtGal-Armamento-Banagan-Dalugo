// Create-account page logic
// Expects firebase-init.js to exist at the site root and export: signUp, signIn, auth (or compatible functions).
// If you used the firebase-init.js I provided earlier, the exported names match.

import {
  signUp,      // function to create user: signUp(email, password)
  signIn,      // function to sign in: signIn(email, password)
  onAuthStateChanged,
  auth
} from './firebase-init.js';

const form = document.getElementById('createAccountForm');
const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const nameEl = document.getElementById('fullName');
const roleEl = document.getElementById('role');
const btn = document.getElementById('createBtn');
const statusEl = document.getElementById('status');

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#b00020' : '#066e3b';
}

/**
 * After successful sign-up/sign-in navigate to home.
 * We use window.location.origin + '/home.html' as the site home page.
 */
function goHome() {
  // If your home page is at '/', change to window.location.origin
  const homePath = '/home.html';
  window.location.href = window.location.origin + homePath;
}

// If user is already signed in, go straight to home
onAuthStateChanged(auth, (user) => {
  if (user) {
    setStatus('Already signed in — redirecting...', false);
    setTimeout(goHome, 600);
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  setStatus('');
  const email = (emailEl.value || '').trim();
  const password = (passEl.value || '').trim();
  const displayName = (nameEl.value || '').trim();
  const role = roleEl.value;

  if (!email || !password) {
    setStatus('Please enter email and password.', true);
    return;
  }
  if (password.length < 6) {
    setStatus('Password must be at least 6 characters.', true);
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Creating...';

  try {
    // Attempt to create account
    // Our firebase-init.signUp wrapper uses createUserWithEmailAndPassword.
    const result = await signUp(email, password);
    // On many Firebase projects createUserWithEmailAndPassword signs the user in automatically.
    // But if your project enforces email verification the session may not be created.
    // We attempt a sign-in fallback to ensure the user becomes authenticated.
    let user = result?.user ?? null;

    if (!user) {
      // Try signing in immediately
      try {
        const signin = await signIn(email, password);
        user = signin?.user ?? null;
      } catch (signinErr) {
        // ignore here and show a helpful message below
      }
    }

    if (user) {
      // Optionally you can store additional profile info in Firestore here (displayName, role).
      setStatus('Account created and signed in — redirecting...', false);
      // short delay so users see the message
      setTimeout(goHome, 700);
      return;
    }

    // If we reach here, account was created but no session exists (likely email confirmation required)
    setStatus('Account created. Please check your email to verify your account before signing in.', false);
  } catch (err) {
    // If signup failed because account already exists, attempt sign-in
    const message = err?.message || String(err);
    // Common case: email already in use
    if (/already/i.test(message) || /exists/i.test(message)) {
      try {
        const signin = await signIn(email, password);
        const user = signin?.user ?? null;
        if (user) {
          setStatus('Signed in — redirecting...', false);
          setTimeout(goHome, 600);
          return;
        }
      } catch (signinErr) {
        setStatus('Account exists. Sign-in failed: ' + (signinErr?.message || signinErr), true);
        btn.disabled = false;
        btn.textContent = 'Create account';
        return;
      }
    }

    setStatus(message, true);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Create account';
  }
});