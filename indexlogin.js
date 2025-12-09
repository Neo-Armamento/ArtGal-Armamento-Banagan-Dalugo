(function () {
  const LS_SESSION_KEY = 'ag_sessionUser';
  const REDIRECT_TARGET = 'main.html'; // change if your main page filename is different

  // DOM refs (safe lookups)
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  let errorEl = document.getElementById('login-error');
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.id = 'login-error';
    errorEl.setAttribute('role', 'alert');
    errorEl.style.color = 'var(--error-color, #b00020)';
    errorEl.style.marginTop = '0.5rem';
    // Append near the form if possible
    if (loginForm) loginForm.appendChild(errorEl);
    else document.body.appendChild(errorEl);
  }

  // If already logged in, redirect immediately
  document.addEventListener('DOMContentLoaded', () => {
    const existing = loadSession();
    if (existing && existing.username) {
      // small delay so content is ready if needed
      setTimeout(() => window.location.replace(REDIRECT_TARGET), 150);
      return;
    }
    // Bind form handler if form exists
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
  });

  // Save session: minimal demo session stored in localStorage
  function saveSession(user) {
    try {
      localStorage.setItem(LS_SESSION_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save session', e);
    }
  }

  function loadSession() {
    try {
      const raw = localStorage.getItem(LS_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function clearError() {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
  }

  function handleLogin(evt) {
    evt.preventDefault();
    clearError();

    const username = (usernameInput && usernameInput.value || '').trim();
    const password = (passwordInput && passwordInput.value || '').trim();

    if (!username) {
      showError('Please enter a username.');
      (usernameInput || {}).focus && usernameInput.focus();
      return;
    }
    if (!password) {
      showError('Please enter a password.');
      (passwordInput || {}).focus && passwordInput.focus();
      return;
    }

    // Demo auth: accept any non-empty username/password.
    // Replace with real authentication when server/back-end available.
    const user = {
      username,
      isAdmin: username.toLowerCase() === 'admin',
      loggedAt: Date.now()
    };

    saveSession(user);

    // Optionally clear sensitive input
    if (passwordInput) passwordInput.value = '';

    // Provide a tiny delay so the user sees response if needed, then redirect
    // Use replace so login page isn't retained in history
    setTimeout(() => {
      try {
        window.location.replace(REDIRECT_TARGET);
      } catch (e) {
        // fallback
        window.location.href = REDIRECT_TARGET;
      }
    }, 150);
  }

  // Expose helper for debugging or logout
  window.ArtGalAuth = {
    getSession: loadSession,
    clearSession: function () { localStorage.removeItem(LS_SESSION_KEY); }
  };

})();