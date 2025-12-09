(function () {
  'use strict';

  // Config / Keys
  const LS_SESSION_KEY = 'ag_sessionUser';
  const LS_GALLERY_KEY = 'ag_gallery';
  const LOGIN_PAGE = 'login.html'; // when session missing, redirect here

  // DOM refs (safe)
  const mainPage = document.getElementById('main-page');
  const welcomeUserEl = document.getElementById('welcome-user');
  const logoutBtn = document.getElementById('logout-btn');

  const addImageForm = document.getElementById('add-image-form');
  const imageUrlInput = document.getElementById('image-url');
  const imageFileInput = document.getElementById('image-file');
  const imageTitleInput = document.getElementById('image-title');
  const dropArea = document.getElementById('drop-area') || document.getElementById('gallery');

  const galleryEl = document.getElementById('gallery');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const filterSelect = document.getElementById('filter-select');

  const settingsForm = document.getElementById('settings-form');
  const usernameInput = document.getElementById('username-input');

  const exportBtn = document.getElementById('export-btn');
  const importInput = document.getElementById('import-input');
  const importBtn = document.getElementById('import-btn');
  const clearGalleryBtn = document.getElementById('clear-gallery-btn');

  // Modal (create if missing)
  let modal = document.getElementById('ag-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ag-modal';
    modal.className = 'ag-modal';
    modal.style.display = 'none';
    modal.innerHTML = '<div class="ag-modal-inner" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(modal);
  }
  const modalInner = modal.querySelector('.ag-modal-inner');

  // State
  let session = loadSession();
  let gallery = loadGallery();
  let searchTerm = '';
  let sortMode = (sortSelect && sortSelect.value) || 'newest';
  let filterMode = (filterSelect && filterSelect.value) || 'all'; // all | mine | favorites

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // session check
    if (!session || !session.username) {
      redirectToLogin();
      return;
    }

    // show main page and username
    if (mainPage) mainPage.style.display = '';
    if (welcomeUserEl) welcomeUserEl.textContent = session.username;

    bindEvents();
    renderGallery();
  }

  // --------------------
  // Session helpers
  // --------------------
  function loadSession() {
    try {
      const raw = localStorage.getItem(LS_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function saveSession(s) {
    session = s;
    try {
      localStorage.setItem(LS_SESSION_KEY, JSON.stringify(s));
    } catch (e) { /* ignore */ }
  }
  function redirectToLogin() {
    window.location.replace(LOGIN_PAGE);
  }

  // --------------------
  // Gallery storage
  // --------------------
  function loadGallery() {
    try {
      const raw = localStorage.getItem(LS_GALLERY_KEY);
      if (!raw) {
        // seed minimal default gallery
        const seed = [
          makeImageObj('https://picsum.photos/id/1015/800/600', 'Mountain View'),
          makeImageObj('https://picsum.photos/id/1016/800/600', 'Forest Path'),
          makeImageObj('https://picsum.photos/id/1025/800/600', 'Friendly Dog')
        ];
        localStorage.setItem(LS_GALLERY_KEY, JSON.stringify(seed));
        return seed;
      }
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }
  function saveGallery() {
    try {
      localStorage.setItem(LS_GALLERY_KEY, JSON.stringify(gallery));
    } catch (e) { /* ignore */ }
  }

  function makeImageObj(url, title = 'Untitled') {
    return {
      id: 'img_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9),
      url,
      title,
      createdAt: Date.now(),
      likes: 0,
      likedBy: [],
      comments: [] // {author, text, at}
    };
  }

  // --------------------
  // Bind events
  // --------------------
  function bindEvents() {
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    if (addImageForm) addImageForm.addEventListener('submit', handleAddImage);
    if (imageFileInput) imageFileInput.addEventListener('change', handleFileSelected);

    if (searchInput) searchInput.addEventListener('input', debounce((e) => {
      searchTerm = (e.target.value || '').trim().toLowerCase();
      renderGallery();
    }, 250));

    if (sortSelect) sortSelect.addEventListener('change', (e) => {
      sortMode = e.target.value;
      renderGallery();
    });

    if (filterSelect) filterSelect.addEventListener('change', (e) => {
      filterMode = e.target.value;
      renderGallery();
    });

    if (settingsForm) settingsForm.addEventListener('submit', handleChangeUsername);

    if (exportBtn) exportBtn.addEventListener('click', handleExport);
    if (importBtn && importInput) importBtn.addEventListener('click', () => importInput.click());
    if (importInput) importInput.addEventListener('change', handleImport);
    if (clearGalleryBtn) clearGalleryBtn.addEventListener('click', handleClearGallery);

    if (galleryEl) {
      // card actions delegate: like, view, comment, edit, delete
      galleryEl.addEventListener('click', handleGalleryClick);
    }

    // modal: close on background or escape
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // drag & drop
    if (dropArea) {
      ['dragenter', 'dragover'].forEach(ev => dropArea.addEventListener(ev, preventDefaults));
      ['dragleave', 'drop'].forEach(ev => dropArea.addEventListener(ev, preventDefaults));
      dropArea.addEventListener('drop', handleDrop);
    }
  }

  // --------------------
  // Add / Upload images
  // --------------------
  async function handleAddImage(e) {
    e.preventDefault();
    const url = (imageUrlInput && imageUrlInput.value || '').trim();
    const title = (imageTitleInput && imageTitleInput.value || '').trim() || 'Untitled';

    // If file input has file, prioritize it
    if (imageFileInput && imageFileInput.files && imageFileInput.files.length > 0) {
      const file = imageFileInput.files[0];
      try {
        const dataUrl = await fileToDataURL(file);
        const img = makeImageObj(dataUrl, title);
        gallery.unshift(img);
        saveGallery();
        resetAddForm();
        renderGallery();
        showToast('Image uploaded.');
      } catch (err) {
        showToast('Failed to read file.');
      }
      return;
    }

    if (!url) {
      showToast('Provide image URL or select a file.');
      return;
    }
    if (!/^data:|^https?:\/\//i.test(url)) {
      showToast('Image URL must be http(s) or data URL.');
      return;
    }

    gallery.unshift(makeImageObj(url, title));
    saveGallery();
    resetAddForm();
    renderGallery();
    showToast('Image added.');
  }

  function resetAddForm() {
    if (addImageForm) addImageForm.reset();
  }

  function handleFileSelected(e) {
    // optionally preview or auto-submit — here we just leave form control
    // nothing necessary; user still clicks "Add"
  }

  function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

  function handleDrop(e) {
    preventDefaults(e);
    const dt = e.dataTransfer;
    const files = dt?.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    // auto-add with default title = filename
    fileToDataURL(file).then((dataUrl) => {
      const img = makeImageObj(dataUrl, file.name || 'Uploaded image');
      gallery.unshift(img);
      saveGallery();
      renderGallery();
      showToast('Image added from drop.');
    }).catch(() => showToast('Failed to add dropped file.'));
  }

  // --------------------
  // Render gallery
  // --------------------
  function renderGallery() {
    if (!galleryEl) return;
    let items = gallery.slice();

    // Filter search
    if (searchTerm) {
      items = items.filter(i => (i.title || '').toLowerCase().includes(searchTerm));
    }

    // Filter mode
    if (filterMode === 'mine') {
      items = items.filter(i => i.comments?.some(c => c.author === session.username) || i.likedBy?.includes(session.username));
    } else if (filterMode === 'favorites') {
      items = items.filter(i => i.likedBy?.includes(session.username));
    }

    // Sort
    if (sortMode === 'newest') items.sort((a,b) => b.createdAt - a.createdAt);
    else if (sortMode === 'oldest') items.sort((a,b) => a.createdAt - b.createdAt);
    else if (sortMode === 'popular') items.sort((a,b) => (b.likes || 0) - (a.likes || 0));

    // Build DOM
    galleryEl.innerHTML = '';
    if (items.length === 0) {
      const p = document.createElement('p');
      p.className = 'ag-empty';
      p.textContent = 'No images found.';
      galleryEl.appendChild(p);
      return;
    }

    const frag = document.createDocumentFragment();
    for (const img of items) {
      const card = buildCard(img);
      frag.appendChild(card);
    }
    galleryEl.appendChild(frag);
  }

  function buildCard(img) {
    const card = document.createElement('article');
    card.className = 'ag-card';
    card.dataset.id = img.id;
    const liked = img.likedBy && img.likedBy.includes(session.username);
    const commentCount = img.comments ? img.comments.length : 0;

    card.innerHTML = `
      <div class="ag-thumb" role="button" tabindex="0" aria-label="Open ${escapeHtml(img.title)}">
        <img src="${escapeHtml(img.url)}" alt="${escapeHtml(img.title)}">
      </div>
      <div class="ag-body">
        <h3 class="ag-title">${escapeHtml(img.title)}</h3>
        <div class="ag-meta-line">Uploaded: ${new Date(img.createdAt).toLocaleString()}</div>
        <div class="ag-actions">
          <button class="ag-btn ag-like" aria-pressed="${liked ? 'true' : 'false'}">${liked ? '♥' : '♡'} <span class="ag-like-count">${img.likes || 0}</span></button>
          <button class="ag-btn ag-comment">💬 <span class="ag-comment-count">${commentCount}</span></button>
          <button class="ag-btn ag-view">🔍 View</button>
          <div class="ag-ctx">
            <button class="ag-btn ag-edit">✏️ Edit</button>
            <button class="ag-btn ag-delete">🗑️ Delete</button>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // --------------------
  // Delegate gallery actions
  // --------------------
  function handleGalleryClick(e) {
    const card = e.target.closest('.ag-card');
    if (!card) return;
    const id = card.dataset.id;
    const img = gallery.find(x => x.id === id);
    if (!img) return;

    if (e.target.closest('.ag-like')) {
      toggleLike(img);
      return;
    }
    if (e.target.closest('.ag-comment')) {
      openModalFor(img, { focusComment: true });
      return;
    }
    if (e.target.closest('.ag-view') || e.target.closest('.ag-thumb')) {
      openModalFor(img, { focusComment: false });
      return;
    }
    if (e.target.closest('.ag-edit')) {
      inlineEditTitle(card, img);
      return;
    }
    if (e.target.closest('.ag-delete')) {
      handleDeleteImage(img);
      return;
    }
  }

  function toggleLike(img) {
    if (!img.likedBy) img.likedBy = [];
    const user = session.username;
    const idx = img.likedBy.indexOf(user);
    if (idx === -1) {
      img.likedBy.push(user);
    } else {
      img.likedBy.splice(idx, 1);
    }
    img.likes = img.likedBy.length;
    saveGallery();
    renderGallery();
  }

  function inlineEditTitle(card, img) {
    const titleEl = card.querySelector('.ag-title');
    if (!titleEl) return;
    const old = img.title || '';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = old;
    input.className = 'ag-title-input';
    titleEl.replaceWith(input);
    input.focus();
    input.select();

    function finish(save) {
      const newVal = (input.value || '').trim() || 'Untitled';
      if (save) {
        img.title = newVal;
        saveGallery();
        showToast('Title updated.');
      }
      const h3 = document.createElement('h3');
      h3.className = 'ag-title';
      h3.textContent = img.title;
      input.replaceWith(h3);
      renderGallery();
    }

    input.addEventListener('blur', () => finish(true));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { finish(true); }
      if (e.key === 'Escape') { finish(false); }
    });
  }

  function handleDeleteImage(img) {
    if (!confirm('Delete this image? This cannot be undone.')) return;
    gallery = gallery.filter(x => x.id !== img.id);
    saveGallery();
    renderGallery();
    showToast('Image deleted.');
  }

  // --------------------
  // Modal: view + comments + edit + download
  // --------------------
  function openModalFor(img, opts = {}) {
    modalInner.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'ag-modal-card';
    container.innerHTML = `
      <button class="ag-modal-close" aria-label="Close">✕</button>
      <div class="ag-modal-content">
        <div class="ag-modal-left">
          <img class="ag-modal-img" src="${escapeHtml(img.url)}" alt="${escapeHtml(img.title)}">
        </div>
        <div class="ag-modal-right">
          <h2 class="ag-modal-title">${escapeHtml(img.title)}</h2>
          <div class="ag-modal-meta">Uploaded: ${new Date(img.createdAt).toLocaleString()}</div>
          <div class="ag-modal-actions">
            <button class="ag-btn ag-like-modal">${img.likedBy && img.likedBy.includes(session.username) ? '♥' : '♡'} <span class="ag-like-count">${img.likes || 0}</span></button>
            <a class="ag-btn ag-download" href="${escapeHtml(img.url)}" download>⬇️ Download</a>
            <button class="ag-btn ag-edit-modal">✏️ Edit</button>
            <button class="ag-btn ag-delete-modal">🗑️ Delete</button>
          </div>
          <section class="ag-comments">
            <h3>Comments (${(img.comments || []).length})</h3>
            <ul class="ag-comments-list">
              ${(img.comments || []).map(c => `<li><strong>${escapeHtml(c.author)}</strong>: ${escapeHtml(c.text)} <span class="ag-comment-time">${timeAgo(c.at)}</span></li>`).join('')}
            </ul>
            <form class="ag-add-comment">
              <input name="comment" placeholder="Add a comment..." required>
              <button type="submit">Send</button>
            </form>
          </section>
        </div>
      </div>
    `;
    modalInner.appendChild(container);
    modal.style.display = 'block';

    // wire up close
    const closeBtn = modalInner.querySelector('.ag-modal-close');
    closeBtn && closeBtn.addEventListener('click', closeModal);

    // like in modal
    const likeBtn = modalInner.querySelector('.ag-like-modal');
    likeBtn && likeBtn.addEventListener('click', () => {
      toggleLike(img);
      // update counts
      const countSpan = modalInner.querySelector('.ag-like-count');
      if (countSpan) countSpan.textContent = img.likes || 0;
      likeBtn.textContent = (img.likedBy.includes(session.username) ? '♥' : '♡') + ' ' + (img.likes || 0);
      renderGallery();
    });

    // delete from modal
    const delBtn = modalInner.querySelector('.ag-delete-modal');
    delBtn && delBtn.addEventListener('click', () => {
      closeModal();
      handleDeleteImage(img);
    });

    // edit from modal (title)
    const editBtn = modalInner.querySelector('.ag-edit-modal');
    editBtn && editBtn.addEventListener('click', () => {
      const titleEl = modalInner.querySelector('.ag-modal-title');
      if (!titleEl) return;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = img.title;
      input.className = 'ag-modal-title-input';
      titleEl.replaceWith(input);
      input.focus();
      input.select();
      input.addEventListener('blur', () => {
        img.title = input.value.trim() || 'Untitled';
        saveGallery();
        renderGallery();
        openModalFor(img); // re-open updated UI
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.blur();
        if (e.key === 'Escape') { openModalFor(img); }
      });
    });

    // comments
    const commentForm = modalInner.querySelector('.ag-add-comment');
    if (commentForm) {
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = commentForm.querySelector('[name="comment"]');
        const text = (input.value || '').trim();
        if (!text) return;
        const comment = { author: session.username, text, at: Date.now() };
        img.comments = img.comments || [];
        img.comments.push(comment);
        saveGallery();
        // update UI
        const list = modalInner.querySelector('.ag-comments-list');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${escapeHtml(comment.author)}</strong>: ${escapeHtml(comment.text)} <span class="ag-comment-time">${timeAgo(comment.at)}</span>`;
        list.appendChild(li);
        input.value = '';
        renderGallery();
      });
      if (opts.focusComment) {
        const input = commentForm.querySelector('[name="comment"]');
        input && input.focus();
      }
    }
  }

  function closeModal() {
    modal.style.display = 'none';
    modalInner.innerHTML = '';
  }

  // --------------------
  // Settings: change username
  // --------------------
  function handleChangeUsername(e) {
    e.preventDefault();
    const newName = (usernameInput && usernameInput.value || '').trim();
    if (!newName) { showToast('Username cannot be empty.'); return; }
    const oldName = session.username;
    if (newName === oldName) { showToast('Username unchanged.'); return; }
    // update session
    session.username = newName;
    saveSession(session);
    // update author's name in comments and likedBy references
    for (const img of gallery) {
      if (img.likedBy) {
        const idx = img.likedBy.indexOf(oldName);
        if (idx !== -1) {
          img.likedBy[idx] = newName;
        }
      }
      if (img.comments) {
        img.comments.forEach(c => { if (c.author === oldName) c.author = newName; });
      }
    }
    saveGallery();
    if (welcomeUserEl) welcomeUserEl.textContent = session.username;
    renderGallery();
    showToast('Username updated.');
  }

  // --------------------
  // Export / Import / Clear
  // --------------------
  function handleExport() {
    const data = JSON.stringify(gallery, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'artgal-gallery.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function handleImport(e) {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed)) throw new Error('Invalid format');
        // naive merge: append imported items (avoid id clashes by reassigning ids)
        const normalized = parsed.map(p => {
          return {
            id: p.id || makeImageObj(p.url, p.title).id,
            url: p.url || '',
            title: p.title || 'Untitled',
            createdAt: p.createdAt || Date.now(),
            likes: p.likes || 0,
            likedBy: Array.isArray(p.likedBy) ? p.likedBy : [],
            comments: Array.isArray(p.comments) ? p.comments : []
          };
        });
        // prepend imported items so they appear first
        gallery = normalized.concat(gallery);
        saveGallery();
        renderGallery();
        showToast('Gallery imported.');
      } catch (err) {
        showToast('Failed to import: invalid file.');
      } finally {
        importInput.value = '';
      }
    };
    reader.onerror = () => { showToast('Failed to read file.'); importInput.value = ''; };
    reader.readAsText(file);
  }

  function handleClearGallery() {
    if (!confirm('Clear all images from this gallery? This cannot be undone.')) return;
    gallery = [];
    saveGallery();
    renderGallery();
    showToast('Gallery cleared.');
  }

  // --------------------
  // Logout
  // --------------------
  function handleLogout(e) {
    e && e.preventDefault();
    try {
      localStorage.removeItem(LS_SESSION_KEY);
    } catch (err) { /* ignore */ }
    redirectToLogin();
  }

  // --------------------
  // Utilities
  // --------------------
  function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('File read error'));
      reader.readAsDataURL(file);
    });
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function debounce(fn, wait = 200) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function timeAgo(ts) {
    if (!ts) return '';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return `${s}s ago`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    return `${d}d ago`;
  }

  // lightweight toast
  function showToast(msg, timeout = 2500) {
    let t = document.getElementById('ag-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'ag-toast';
      t.className = 'ag-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('visible');
    clearTimeout(t._hideTimer);
    t._hideTimer = setTimeout(() => t.classList.remove('visible'), timeout);
  }

  // Expose for debugging
  window.ArtGalMain = {
    getGallery: () => gallery,
    setGallery: (g) => { gallery = g; saveGallery(); renderGallery(); },
    logout: handleLogout
  };

})();