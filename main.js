// ArtHub Enhanced - Complete JavaScript

// Art Data - In a real app, this would come from a database/API
const artData = [
  {
    id: 'charcoal',
    title: 'Charcoal Drawing',
    type: 'drawing',
    technique: 'traditional',
    description: 'Charcoal drawing is one of the most expressive and versatile forms of art. It allows artists to create deep shadows, bold lines, and soft shading with ease.',
    image: 'assets/Charcoal.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'colored',
    title: 'Color Pencil Drawing',
    type: 'drawing',
    technique: 'traditional',
    description: 'Color pencil art is widely appreciated for its vibrant tones and precision. With layering techniques, artists can achieve realistic shading.',
    image: 'assets/Colored.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'oil-painting',
    title: 'Painting (Oil / Acrylic / Watercolor)',
    type: 'painting',
    technique: 'traditional',
    description: 'Painting is one of the oldest and most dynamic forms of art, ranging from classical oil paintings to modern acrylics and watercolors.',
    image: 'assets/Oil Painting.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'graphite',
    title: 'Graphite Drawing',
    type: 'drawing',
    technique: 'traditional',
    description: 'Graphite drawing is a classic and widely practiced art form, often associated with sketching and detailed studies.',
    image: 'assets/Graphite.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'pointillism',
    title: 'Pointillism',
    type: 'painting',
    technique: 'traditional',
    description: 'Pointillism is a painting technique that uses tiny dots of color placed closely together to form an image.',
    image: 'assets/Pointillism.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'impressionism',
    title: 'Impressionism',
    type: 'painting',
    technique: 'traditional',
    description: 'Impressionism focuses on capturing the fleeting effects of light and color in a scene rather than precise detail.',
    image: 'assets/Impressionism.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'abstract',
    title: 'Abstract Art',
    type: 'painting',
    technique: 'traditional',
    description: 'Abstract art breaks away from realistic representation and uses shapes, colors, and forms to express emotions or ideas.',
    image: 'assets/Abstract.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'cubism',
    title: 'Cubism',
    type: 'painting',
    technique: 'traditional',
    description: 'Cubism deconstructs subjects into geometric shapes and reassembles them in abstract compositions.',
    image: 'assets/Cubism.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'surrealism',
    title: 'Surrealism',
    type: 'painting',
    technique: 'traditional',
    description: 'Surrealism blends dreamlike imagery with reality, often producing strange or fantastical scenes.',
    image: 'assets/Surrealism.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'digital',
    title: 'Digital Art',
    type: 'digital',
    technique: 'modern',
    description: 'Digital art uses software and digital tools to create illustrations, paintings, and designs.',
    image: 'assets/Digital.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'mixed',
    title: 'Mixed Media',
    type: 'mixed',
    technique: 'traditional',
    description: 'Mixed media combines multiple art forms, such as painting, collage, and drawing, into one piece.',
    image: 'assets/Mixed.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'graffiti',
    title: 'Graffiti Art',
    type: 'painting',
    technique: 'modern',
    description: 'Graffiti art transforms public spaces into vibrant canvases using spray paint and bold designs.',
    image: 'assets/Graffiti.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  },
  {
    id: 'collage',
    title: 'Collage Art',
    type: 'mixed',
    technique: 'traditional',
    description: 'Collage art involves assembling different materials like paper, photos, and fabric into a single artwork.',
    image: 'assets/Collage.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'line-art',
    title: 'Line Art',
    type: 'drawing',
    technique: 'traditional',
    description: 'Line art uses simple lines without shading or color to define form and structure.',
    image: 'assets/Line Art.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: false
  },
  {
    id: 'pop-art',
    title: 'Pop Art',
    type: 'painting',
    technique: 'modern',
    description: 'Pop Art celebrates popular culture with bold colors and imagery from advertising, comics, and media.',
    image: 'assets/Pop Art.jpg',
    likes: 0,
    dislikes: 0,
    comments: [],
    popular: true
  }
];

// Sample Artists Data
const sampleArtists = [
  { 
    name: "Nepthali", 
    age: 22, 
    address: "Cagayan De Oro City", 
    fb: "https://web.facebook.com/photo/?fbid=9541345695877917&set=a.433257306686847t", 
    email: "anepthaliaya@gmail.com", 
    image: "assets/neptali.jpg",
    specialty: "Charcoal Drawing"
  },
  { 
    name: "Den Art", 
    age: 28, 
    address: "Parang, Maguindanao", 
    fb: "https://web.facebook.com/photo/?fbid=122145668840398639&set=a.122104581302398639", 
    email: "Artden@gmail.com", 
    image: "assets/den.jpg",
    specialty: "Digital Art"
  },
  { 
    name: "Myco Lava", 
    age: 25, 
    address: "Pagbilao, Quezon", 
    fb: "https://web.facebook.com/myko.lava", 
    email: "MycoLava@gmail.com", 
    image: "assets/myko.jpg",
    specialty: "Oil Painting"
  },
  { 
    name: "Guhit Rhenz", 
    age: 30, 
    address: "San Jose Delmonte, Bulacan", 
    fb: "https://web.facebook.com/guhitrhenzofficial", 
    email: "GuhitRhenz@gmail.com", 
    image: "assets/rhenz.jpg",
    specialty: "Watercolor"
  },
  { 
    name: "Thirdy Arts", 
    age: 21, 
    address: "Pagbilao, Quezon", 
    fb: "https://web.facebook.com/photo/?fbid=1809935503263437&set=a.108949026695435", 
    email: "dalugollln2gmail.com", 
    image: "assets/thiirdy.jpg",
    specialty: "Acrylic Painting"
  }
];

// Demo Credentials
const demoCredentials = {
  email: 'demo@arthub.com',
  password: 'demo123',
  role: 'client'
};

// ============================
// UTILITY FUNCTIONS
// ============================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Format date
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

// Truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Validate email
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Load user preferences
function loadUserPreferences() {
  return {
    theme: localStorage.getItem('arthub-theme'),
    bookmarks: JSON.parse(localStorage.getItem('arthub-bookmarks') || '[]'),
    searchHistory: JSON.parse(localStorage.getItem('arthub-search-history') || '[]'),
    tutorialSeen: localStorage.getItem('arthub-tutorial-seen'),
    accessibility: {
      highContrast: localStorage.getItem('accessibility-highContrast') === 'true',
      largeText: localStorage.getItem('accessibility-largeText') === 'true',
      readingGuide: localStorage.getItem('accessibility-readingGuide') === 'true',
      reducedMotion: localStorage.getItem('accessibility-reducedMotion') === 'true'
    }
  };
}

// Save user preference
function saveUserPreference(key, value) {
  localStorage.setItem(`arthub-${key}`, JSON.stringify(value));
}

// ============================
// NOTIFICATION SYSTEM
// ============================

class NotificationSystem {
  constructor() {
    this.container = document.querySelector('.notification-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'notification-container';
      document.body.appendChild(this.container);
    }
  }

  show(options) {
    const {
      title = 'Notification',
      message = '',
      type = 'info',
      duration = 5000,
      progress = false
    } = options;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
      success: 'check-circle',
      error: 'exclamation-circle',
      warning: 'exclamation-triangle',
      info: 'info-circle'
    };
    
    notification.innerHTML = `
      <div class="notification-icon">
        <i class="fas fa-${icons[type]}"></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
        ${progress ? '<div class="notification-progress"><div class="notification-progress-fill"></div></div>' : ''}
      </div>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    this.container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Progress bar animation
    if (progress) {
      const progressFill = notification.querySelector('.notification-progress-fill');
      let width = 0;
      const interval = setInterval(() => {
        width += 1;
        progressFill.style.width = `${width}%`;
        
        if (width >= 100) {
          clearInterval(interval);
        }
      }, duration / 100);
    }
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
      this.hide(notification);
    });
    
    // Auto hide
    if (duration > 0) {
      setTimeout(() => {
        this.hide(notification);
      }, duration);
    }
    
    return notification;
  }

  hide(notification) {
    notification.classList.remove('show');
    notification.classList.add('hide');
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  success(message, title = 'Success!') {
    return this.show({ title, message, type: 'success' });
  }

  error(message, title = 'Error!') {
    return this.show({ title, message, type: 'error' });
  }

  warning(message, title = 'Warning!') {
    return this.show({ title, message, type: 'warning' });
  }

  info(message, title = 'Info') {
    return this.show({ title, message, type: 'info' });
  }

  progress(message, title = 'Processing...') {
    return this.show({ 
      title, 
      message, 
      type: 'info', 
      progress: true, 
      duration: 3000 
    });
  }
}

// Global notification instance
const notification = new NotificationSystem();
window.showNotification = function(message, type = 'info', title = '') {
  if (!title) {
    switch(type) {
      case 'success': title = 'Success!'; break;
      case 'error': title = 'Error!'; break;
      case 'warning': title = 'Warning!'; break;
      default: title = 'Info';
    }
  }
  return notification[type]?.(message, title) || notification.info(message, title);
};

// ============================
// LOADING MANAGER
// ============================

const LoadingManager = {
  show: function(message = 'Loading...') {
    let overlay = document.getElementById('loadingOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'loadingOverlay';
      overlay.className = 'loading-overlay';
      overlay.innerHTML = `
        <div class="loading-spinner-large"></div>
        <p id="loadingMessage">${message}</p>
      `;
      document.body.appendChild(overlay);
    } else {
      document.getElementById('loadingMessage').textContent = message;
    }
    overlay.classList.add('active');
  },

  hide: function() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  },

  showProgressBar: function(containerId) {
    const container = document.getElementById(containerId);
    if (container && !container.querySelector('.progress-bar')) {
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.innerHTML = '<div class="progress-fill"></div>';
      container.appendChild(progressBar);
    }
  },

  updateProgress: function(percentage) {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
  },

  showSkeleton: function(count, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-loader skeleton-card';
        container.appendChild(skeleton);
      }
    }
  }
};

// ============================
// COMPARISON TOOL
// ============================

const ComparisonTool = {
  items: [],

  init: function() {
    this.createTool();
    this.setupEventListeners();
  },

  createTool: function() {
    const tool = document.createElement('div');
    tool.id = 'comparisonTool';
    tool.className = 'comparison-tool';
    tool.innerHTML = `
      <div class="comparison-header">
        <h4><i class="fas fa-balance-scale"></i> Compare Arts (0/2)</h4>
        <button id="closeComparison" class="btn-link">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="comparison-grid" id="comparisonGrid">
        <div class="comparison-item empty">
          <p>Add first artwork</p>
        </div>
        <div class="comparison-item empty">
          <p>Add second artwork</p>
        </div>
      </div>
      <button id="clearComparison" class="btn-secondary" style="width:100%;margin-top:1rem;">
        <i class="fas fa-trash"></i> Clear All
      </button>
    `;
    document.body.appendChild(tool);
  },

  setupEventListeners: function() {
    document.getElementById('closeComparison')?.addEventListener('click', () => {
      document.getElementById('comparisonTool').classList.remove('active');
    });

    document.getElementById('clearComparison')?.addEventListener('click', () => {
      this.clear();
    });
  },

  addArt: function(artData) {
    if (this.items.length >= 2) {
      showNotification('Maximum 2 items for comparison', 'warning');
      return;
    }

    if (this.items.some(item => item.id === artData.id)) {
      showNotification('Art already added', 'warning');
      return;
    }

    this.items.push(artData);
    this.updateUI();
    showNotification(`Added "${artData.title}" to comparison`, 'success');

    if (this.items.length === 2) {
      this.compare();
    }
  },

  updateUI: function() {
    const tool = document.getElementById('comparisonTool');
    const grid = document.getElementById('comparisonGrid');
    const header = tool.querySelector('h4');

    tool.classList.add('active');
    header.innerHTML = `<i class="fas fa-balance-scale"></i> Compare Arts (${this.items.length}/2)`;

    grid.innerHTML = '';

    // Add comparison items
    this.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'comparison-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <p class="title"><strong>${truncateText(item.title, 20)}</strong></p>
        <button class="btn-link remove-compare" data-id="${item.id}">
          <i class="fas fa-times"></i> Remove
        </button>
      `;
      grid.appendChild(div);
    });

    // Add empty slots
    for (let i = this.items.length; i < 2; i++) {
      const div = document.createElement('div');
      div.className = 'comparison-item empty';
      div.innerHTML = `<p>Add artwork ${i + 1}</p>`;
      grid.appendChild(div);
    }

    // Add remove listeners
    document.querySelectorAll('.remove-compare').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('.remove-compare').dataset.id;
        this.remove(id);
      });
    });
  },

  remove: function(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateUI();
  },

  clear: function() {
    this.items = [];
    document.getElementById('comparisonTool').classList.remove('active');
    showNotification('Comparison cleared', 'info');
  },

  compare: function() {
    if (this.items.length !== 2) return;

    // Add comparison metrics
    const grid = document.getElementById('comparisonGrid');
    const metrics = document.createElement('div');
    metrics.className = 'comparison-metrics';
    metrics.innerHTML = `
      <h5>Comparison</h5>
      <div class="metric">
        <span>Style Similarity:</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 75%"></div>
        </div>
      </div>
      <div class="metric">
        <span>Complexity:</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 60%"></div>
        </div>
      </div>
    `;
    grid.parentNode.insertBefore(metrics, grid.nextSibling);
  }
};

// ============================
// SMART SEARCH
// ============================

class SmartSearch {
  constructor() {
    this.searchHistory = JSON.parse(localStorage.getItem('arthub-search-history') || '[]');
    this.init();
  }

  init() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    // Create suggestions container
    const container = searchInput.parentNode;
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.id = 'searchSuggestions';
    container.appendChild(suggestions);

    // Add search icon
    searchInput.parentNode.classList.add('search-with-suggestions');

    // Event listeners
    searchInput.addEventListener('input', debounce((e) => this.handleInput(e), 300));
    searchInput.addEventListener('focus', () => this.showSuggestions());
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-with-suggestions')) {
        this.hideSuggestions();
      }
    });
  }

  handleInput(e) {
    const query = e.target.value.trim();
    if (query.length < 2) {
      this.showHistory();
      return;
    }

    const suggestions = this.generateSuggestions(query);
    this.displaySuggestions(suggestions);
  }

  generateSuggestions(query) {
    // Search in art data
    const results = artData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase()) ||
      item.technique.toLowerCase().includes(query.toLowerCase())
    ).map(item => ({
      text: item.title,
      type: item.type,
      id: item.id
    }));

    // Add general suggestions
    const generalSuggestions = [
      { text: 'Charcoal Drawing', type: 'style' },
      { text: 'Oil Painting', type: 'style' },
      { text: 'Digital Art', type: 'style' },
      { text: 'Portrait', type: 'category' },
      { text: 'Landscape', type: 'category' },
      { text: 'Abstract', type: 'category' },
      { text: 'Modern Art', type: 'movement' },
      { text: 'Renaissance', type: 'movement' }
    ].filter(item => item.text.toLowerCase().includes(query.toLowerCase()));

    return [...results, ...generalSuggestions];
  }

  displaySuggestions(suggestions) {
    const container = document.getElementById('searchSuggestions');

    if (suggestions.length === 0) {
      container.innerHTML = '<div class="search-suggestion">No results found</div>';
      container.classList.add('active');
      return;
    }

    let html = '';
    suggestions.forEach(item => {
      html += `
        <div class="search-suggestion" data-text="${item.text}" data-id="${item.id || ''}">
          ${item.text}
          <span class="type">${item.type}</span>
        </div>
      `;
    });

    // Add search history section
    if (this.searchHistory.length > 0) {
      html += `
        <div class="search-history">
          <div style="color:var(--text-light);font-size:0.9rem;padding:0.5rem;">Recent searches:</div>
          ${this.searchHistory.map(term => `
            <div class="search-history-item" data-text="${term}">
              <span>${term}</span>
              <button class="clear-history" data-term="${term}">×</button>
            </div>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = html;
    container.classList.add('active');

    // Add click listeners
    container.querySelectorAll('.search-suggestion, .search-history-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('clear-history')) {
          this.removeFromHistory(e.target.dataset.term);
          return;
        }

        const text = el.dataset.text;
        const id = el.dataset.id;
        if (text) {
          document.getElementById('searchInput').value = text;
          this.addToHistory(text);
          this.hideSuggestions();
          // Trigger search
          if (typeof performSearch === 'function') {
            performSearch(text);
          }
          // Scroll to art if id exists
          if (id) {
            const artItem = document.querySelector(`[data-art-id="${id}"]`);
            if (artItem) {
              artItem.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });
  }

  showHistory() {
    const container = document.getElementById('searchSuggestions');

    if (this.searchHistory.length === 0) {
      container.classList.remove('active');
      return;
    }

    let html = '<div class="search-history">';
    html += '<div style="color:var(--text-light);font-size:0.9rem;padding:0.5rem;">Recent searches:</div>';

    this.searchHistory.forEach(term => {
      html += `
        <div class="search-history-item" data-text="${term}">
          <span>${term}</span>
          <button class="clear-history" data-term="${term}">×</button>
        </div>
      `;
    });

    html += '</div>';
    container.innerHTML = html;
    container.classList.add('active');

    // Add listeners
    container.querySelectorAll('.search-history-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains('clear-history')) {
          this.removeFromHistory(e.target.dataset.term);
          return;
        }
        const text = el.dataset.text;
        document.getElementById('searchInput').value = text;
        if (typeof performSearch === 'function') {
          performSearch(text);
        }
        this.hideSuggestions();
      });
    });
  }

  hideSuggestions() {
    const container = document.getElementById('searchSuggestions');
    if (container) container.classList.remove('active');
  }

  showSuggestions() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.value.trim().length >= 2) {
      this.handleInput({ target: searchInput });
    } else {
      this.showHistory();
    }
  }

  addToHistory(term) {
    if (!term.trim()) return;

    // Remove if already exists
    this.searchHistory = this.searchHistory.filter(t => t.toLowerCase() !== term.toLowerCase());
    // Add to beginning
    this.searchHistory.unshift(term);
    // Keep only last 5
    this.searchHistory = this.searchHistory.slice(0, 5);

    localStorage.setItem('arthub-search-history', JSON.stringify(this.searchHistory));
  }

  removeFromHistory(term) {
    this.searchHistory = this.searchHistory.filter(t => t !== term);
    localStorage.setItem('arthub-search-history', JSON.stringify(this.searchHistory));
    this.showHistory();
  }
}

// ============================
// ART FUNCTIONS
// ============================

// Initialize art items
function initializeArtItems() {
  const container = document.getElementById('artItemsContainer');
  if (!container) return;

  container.innerHTML = '';

  artData.forEach(art => {
    const artItem = createArtItem(art);
    container.appendChild(artItem);
  });

  // Initialize art features
  initializeBookmarking();
  initializeImageZoom();
  initializeFeedbackButtons();
  initializeCommentSections();
  addCompareButtons();
}

// Create art item element
function createArtItem(art) {
  const div = document.createElement('div');
  div.className = 'art-item';
  div.dataset.artId = art.id;
  div.dataset.type = art.type;
  div.dataset.technique = art.technique;
  div.dataset.popular = art.popular;

  const comments = art.comments || [];
  const commentCount = comments.length;

  div.innerHTML = `
    <button class="bookmark-btn" data-art-id="${art.id}">
      <i class="far fa-bookmark"></i>
    </button>
    <button class="compare-btn">
      <i class="fas fa-balance-scale"></i> Compare
    </button>
    
    <div class="image-zoom-container">
      <img src="${art.image}" alt="${art.title}" />
      <div class="zoom-controls">
        <button class="zoom-btn" data-action="zoom-in">
          <i class="fas fa-search-plus"></i>
        </button>
        <button class="zoom-btn" data-action="zoom-out">
          <i class="fas fa-search-minus"></i>
        </button>
        <button class="zoom-btn" data-action="reset">
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
    
    <div class="art-description">
      <h3>
        <i class="fas fa-palette"></i> ${art.title}
      </h3>
      <div class="art-meta">
        <span class="meta-tag">${art.type}</span>
        <span class="meta-tag">${art.technique}</span>
        ${art.popular ? '<span class="meta-tag"><i class="fas fa-fire"></i> Popular</span>' : ''}
      </div>
      <p>${art.description}</p>
      
      <div class="art-feedback">
        <div class="feedback-buttons">
          <button class="like-btn">
            <i class="fas fa-thumbs-up"></i> Like <span class="like-count">${art.likes || 0}</span>
          </button>
          <button class="dislike-btn">
            <i class="fas fa-thumbs-down"></i> Dislike <span class="dislike-count">${art.dislikes || 0}</span>
          </button>
          <button class="share-btn">
            <i class="fas fa-share"></i> Share
          </button>
        </div>
        
        <div class="comments-section">
          <div class="comment-row">
            <input class="comment-input" type="text" placeholder="Add a comment..." />
            <button class="add-comment-btn" type="button">
              <i class="fas fa-paper-plane"></i> Post
            </button>
          </div>
          <div class="comment-stats">
            <small>${commentCount} comment${commentCount !== 1 ? 's' : ''}</small>
          </div>
          <ul class="comment-list" aria-live="polite">
            ${comments.map(comment => `
              <li class="comment-container">
                <div class="comment-meta">
                  <span class="comment-author">${comment.author || 'User'}</span>
                  <span class="comment-time">${formatDate(comment.timestamp || new Date())}</span>
                </div>
                <div class="comment-body">${escapeHtml(comment.text)}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  return div;
}

// Initialize bookmarking
function initializeBookmarking() {
  const bookmarkedArts = JSON.parse(localStorage.getItem('arthub-bookmarks') || '[]');
  
  // Update all bookmark buttons
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    const artId = btn.dataset.artId;
    if (bookmarkedArts.includes(artId)) {
      btn.classList.add('bookmarked');
      btn.innerHTML = '<i class="fas fa-bookmark"></i>';
    }
    
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const artId = btn.dataset.artId;
      let bookmarks = JSON.parse(localStorage.getItem('arthub-bookmarks') || '[]');
      
      if (bookmarks.includes(artId)) {
        // Remove bookmark
        bookmarks = bookmarks.filter(id => id !== artId);
        btn.classList.remove('bookmarked');
        btn.innerHTML = '<i class="far fa-bookmark"></i>';
        showNotification('Removed from bookmarks', 'info');
      } else {
        // Add bookmark
        bookmarks.push(artId);
        btn.classList.add('bookmarked');
        btn.innerHTML = '<i class="fas fa-bookmark"></i>';
        showNotification('Added to bookmarks!', 'success');
      }
      
      localStorage.setItem('arthub-bookmarks', JSON.stringify(bookmarks));
      updateBookmarkedSection();
      updateDrawerBookmarks();
    });
  });
  
  // Update bookmarked section
  updateBookmarkedSection();
}

// Update bookmarked section
function updateBookmarkedSection() {
  const section = document.getElementById('bookmarkedSection');
  const grid = document.getElementById('bookmarkedArtsGrid');
  
  if (!section || !grid) return;
  
  const bookmarks = JSON.parse(localStorage.getItem('arthub-bookmarks') || '[]');
  
  if (bookmarks.length === 0) {
    section.style.display = 'none';
    return;
  }
  
  section.style.display = 'block';
  grid.innerHTML = '';
  
  // Show only first 6 bookmarks
  const displayedBookmarks = bookmarks.slice(0, 6);
  
  displayedBookmarks.forEach(artId => {
    const art = artData.find(a => a.id === artId);
    if (art) {
      const card = document.createElement('div');
      card.className = 'art-thumbnail';
      card.innerHTML = `
        <img src="${art.image}" alt="${art.title}" />
        <div class="art-thumbnail-title">${truncateText(art.title, 30)}</div>
      `;
      card.addEventListener('click', () => {
        const artItem = document.querySelector(`[data-art-id="${artId}"]`);
        if (artItem) {
          artItem.scrollIntoView({ behavior: 'smooth' });
          // Highlight the item
          artItem.style.animation = 'pulse 2s';
          setTimeout(() => {
            artItem.style.animation = '';
          }, 2000);
        }
      });
      grid.appendChild(card);
    }
  });
  
  // Add view all button if more bookmarks
  if (bookmarks.length > 6) {
    const viewAllBtn = document.createElement('button');
    viewAllBtn.className = 'btn-secondary';
    viewAllBtn.textContent = `View all ${bookmarks.length} bookmarks`;
    viewAllBtn.style.marginTop = '1rem';
    viewAllBtn.addEventListener('click', () => {
      // Filter to show all bookmarked items
      document.querySelectorAll('.art-item').forEach(item => {
        const artId = item.dataset.artId;
        if (bookmarks.includes(artId)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
      // Show all filter
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    });
    grid.appendChild(viewAllBtn);
  }
}

// Initialize image zoom
function initializeImageZoom() {
  document.querySelectorAll('.image-zoom-container').forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;
    
    let scale = 1;
    
    // Click to zoom
    container.addEventListener('click', (e) => {
      if (e.target === container || e.target === img) {
        container.classList.toggle('zoomed');
        if (container.classList.contains('zoomed')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
          scale = 1;
          img.style.transform = `scale(${scale})`;
        }
      }
    });
    
    // Control buttons
    const controls = container.querySelector('.zoom-controls');
    if (controls) {
      controls.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = e.target.closest('.zoom-btn')?.dataset.action;
        
        switch(action) {
          case 'zoom-in':
            scale = Math.min(scale + 0.5, 5);
            break;
          case 'zoom-out':
            scale = Math.max(scale - 0.5, 1);
            break;
          case 'reset':
            scale = 1;
            break;
        }
        
        img.style.transform = `scale(${scale})`;
        img.style.transformOrigin = 'center center';
      });
    }
    
    // Zoom with mouse wheel
    container.addEventListener('wheel', (e) => {
      if (container.classList.contains('zoomed')) {
        e.preventDefault();
        scale += e.deltaY * -0.01;
        scale = Math.min(Math.max(1, scale), 5);
        img.style.transform = `scale(${scale})`;
      }
    });
  });
}

// Initialize feedback buttons
function initializeFeedbackButtons() {
  document.querySelectorAll('.feedback-buttons').forEach(buttons => {
    const likeBtn = buttons.querySelector('.like-btn');
    const dislikeBtn = buttons.querySelector('.dislike-btn');
    const shareBtn = buttons.querySelector('.share-btn');
    
    if (likeBtn) {
      likeBtn.addEventListener('click', () => {
        const span = likeBtn.querySelector('.like-count');
        const current = parseInt(span.textContent) || 0;
        span.textContent = current + 1;
        showNotification('Liked!', 'success');
      });
    }
    
    if (dislikeBtn) {
      dislikeBtn.addEventListener('click', () => {
        const span = dislikeBtn.querySelector('.dislike-count');
        const current = parseInt(span.textContent) || 0;
        span.textContent = current + 1;
        showNotification('Disliked', 'info');
      });
    }
    
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({
            title: 'ArtHub',
            text: 'Check out this amazing artwork on ArtHub!',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          showNotification('Link copied to clipboard!', 'success');
        }
      });
    }
  });
}

// Initialize comment sections
function initializeCommentSections() {
  document.querySelectorAll('.comments-section').forEach(section => {
    const addRow = section.querySelector('.comment-row');
    const input = addRow ? addRow.querySelector('.comment-input') : null;
    const postBtn = addRow ? addRow.querySelector('.add-comment-btn') : null;
    const list = section.querySelector('.comment-list');

    if (postBtn && input && list) {
      postBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        
        const li = document.createElement('li');
        li.className = 'comment-container';
        li.innerHTML = `
          <div class="comment-meta">
            <span class="comment-author">You</span>
            <span class="comment-time">just now</span>
          </div>
          <div class="comment-body">${escapeHtml(text)}</div>
        `;
        list.prepend(li);
        input.value = '';
        
        // Update comment count
        const stats = section.querySelector('.comment-stats small');
        if (stats) {
          const count = list.children.length;
          stats.textContent = `${count} comment${count !== 1 ? 's' : ''}`;
        }
        
        showNotification('Comment posted!', 'success');
      });
      
      // Allow Enter key to post
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          postBtn.click();
        }
      });
    }
  });
}

// Add compare buttons
function addCompareButtons() {
  document.querySelectorAll('.compare-btn').forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const artItem = e.target.closest('.art-item');
      const img = artItem.querySelector('img');
      const title = artItem.querySelector('h3').textContent;
      const artId = artItem.dataset.artId;
      
      const art = artData.find(a => a.id === artId);
      if (art) {
        ComparisonTool.addArt({
          id: art.id,
          title: art.title,
          image: art.image
        });
      }
    });
  });
}

// Initialize art filters
function initializeArtFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const artItems = document.querySelectorAll('.art-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter art items
      artItems.forEach(item => {
        const itemType = item.dataset.type;
        const itemTechnique = item.dataset.technique;
        const isPopular = item.dataset.popular === 'true';
        
        let shouldShow = false;
        
        switch(filter) {
          case 'all':
            shouldShow = true;
            break;
          case 'drawing':
            shouldShow = itemType === 'drawing';
            break;
          case 'painting':
            shouldShow = itemType === 'painting';
            break;
          case 'digital':
            shouldShow = itemType === 'digital';
            break;
          case 'traditional':
            shouldShow = itemTechnique === 'traditional';
            break;
          case 'popular':
            shouldShow = isPopular;
            break;
          default:
            shouldShow = itemType === filter || itemTechnique === filter;
        }
        
        if (shouldShow) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
      
      // Update URL hash
      window.location.hash = `Arts-${filter}`;
    });
  });
}

// ============================
// AUTHENTICATION & LOGIN
// ============================

// DOM Elements
const loginPage = document.getElementById('loginPage');
const appContent = document.getElementById('appContent');
const topNavbar = document.querySelector('.top-navbar');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const roleSelect = document.getElementById('roleSelect');
const loginBtn = document.getElementById('loginBtn');
const loginMessage = document.getElementById('loginMessage');
const demoLoginBtn = document.getElementById('demoLoginBtn');
const showCreateAccountBtn = document.getElementById('showCreateAccountBtn');
const inlineCreateBtn = document.getElementById('inlineCreateBtn');
const createAccountModal = document.getElementById('createAccountModal');
const createAccountForm = document.getElementById('createAccountForm');
const createAccountMessage = document.getElementById('createAccountMessage');
const closeCreateAccount = document.getElementById('closeCreateAccount');
const cancelCreate = document.getElementById('cancelCreate');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');
const resetPasswordModal = document.getElementById('resetPasswordModal');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const resetPasswordMessage = document.getElementById('resetPasswordMessage');
const closeResetModal = document.getElementById('closeResetModal');
const cancelReset = document.getElementById('cancelReset');
const drawerStatus = document.getElementById('drawerStatus');
const drawerLoginBtn = document.getElementById('drawerLoginBtn');

// Modal functions
function openModal(modal) {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (ev) => {
    if (ev.target === modal) closeModal(modal);
  });
});

// Close modals with Escape key
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(closeModal);
  }
});

// Show app after login
function showAppAfterLogin(userData) {
  loginPage.style.display = 'none';
  appContent.style.display = '';
  if (topNavbar) topNavbar.style.display = 'flex';
  
  if (drawerStatus) {
    const name = userData.name || userData.email.split('@')[0];
    drawerStatus.textContent = `Signed in as ${name}`;
    drawerStatus.innerHTML += `<br><small>Role: ${userData.role}</small>`;
  }
  
  if (drawerLoginBtn) {
    drawerLoginBtn.textContent = 'Sign Out';
    drawerLoginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Sign Out';
    drawerLoginBtn.onclick = logout;
  }
  
  // Initialize app features
  initializeArtItems();
  initializeArtFilters();
  initializeSmartSearch();
  updateDrawerBookmarks();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  showNotification(`Welcome back, ${userData.name || userData.email}!`, 'success');
}

// Logout function
function logout() {
  loginPage.style.display = 'flex';
  appContent.style.display = 'none';
  if (topNavbar) topNavbar.style.display = 'none';
  
  if (drawerStatus) drawerStatus.textContent = 'Not signed in';
  if (drawerLoginBtn) {
    drawerLoginBtn.textContent = 'Sign in';
    drawerLoginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign in';
    drawerLoginBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
  
  // Close drawer if open
  const sideDrawer = document.getElementById('sideDrawer');
  if (sideDrawer.classList.contains('open')) {
    sideDrawer.classList.remove('open');
  }
  
  showNotification('Logged out successfully', 'info');
}

// Simulated login
async function attemptLogin(email, password, role) {
  LoadingManager.show('Signing in...');
  
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address.');
  }
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // For demo purposes, accept any valid email format
  const userData = { 
    email, 
    role, 
    name: email.split('@')[0],
    joinDate: new Date().toISOString()
  };
  
  // Save to localStorage
  localStorage.setItem('arthub-user', JSON.stringify(userData));
  
  return userData;
}

// Login button handler
loginBtn.addEventListener('click', async function () {
  loginMessage.textContent = '';
  const originalText = loginBtn.innerHTML;
  loginBtn.disabled = true;
  loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const role = roleSelect.value;

  try {
    const userData = await attemptLogin(email, password, role);
    loginMessage.className = 'message success';
    loginMessage.innerHTML = '<i class="fas fa-check-circle"></i> Login successful.';
    setTimeout(() => showAppAfterLogin(userData), 500);
  } catch (err) {
    loginMessage.className = 'message error';
    loginMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${err.message}`;
  } finally {
    loginBtn.disabled = false;
    loginBtn.innerHTML = originalText;
    LoadingManager.hide();
  }
});

// Demo login
if (demoLoginBtn) {
  demoLoginBtn.addEventListener('click', async () => {
    emailInput.value = demoCredentials.email;
    passwordInput.value = demoCredentials.password;
    roleSelect.value = demoCredentials.role;
    loginBtn.click();
  });
}

// Create account modal
showCreateAccountBtn.addEventListener('click', () => openModal(createAccountModal));
inlineCreateBtn.addEventListener('click', () => openModal(createAccountModal));
closeCreateAccount.addEventListener('click', () => closeModal(createAccountModal));
cancelCreate.addEventListener('click', () => closeModal(createAccountModal));

// Create account form
createAccountForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  createAccountMessage.textContent = '';
  
  const name = document.getElementById('createName').value.trim();
  const email = document.getElementById('createEmail').value.trim();
  const password = document.getElementById('createPassword').value;
  const confirm = document.getElementById('createPasswordConfirm').value;
  const role = document.getElementById('createRole').value;

  if (!name) { 
    createAccountMessage.className = 'message error';
    createAccountMessage.textContent = 'Please enter your name.';
    return; 
  }
  if (!validateEmail(email)) { 
    createAccountMessage.className = 'message error';
    createAccountMessage.textContent = 'Please enter a valid email.'; 
    return; 
  }
  if (password.length < 6) { 
    createAccountMessage.className = 'message error';
    createAccountMessage.textContent = 'Password must be at least 6 characters.'; 
    return; 
  }
  if (password !== confirm) { 
    createAccountMessage.className = 'message error';
    createAccountMessage.textContent = 'Passwords do not match.'; 
    return; 
  }

  try {
    LoadingManager.show('Creating account...');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    createAccountMessage.className = 'message success';
    createAccountMessage.textContent = 'Account created successfully!';
    
    // Auto login after account creation
    setTimeout(() => {
      closeModal(createAccountModal);
      showAppAfterLogin({ 
        email, 
        role, 
        name,
        joinDate: new Date().toISOString()
      });
    }, 1000);
  } catch (err) {
    createAccountMessage.className = 'message error';
    createAccountMessage.textContent = 'Registration failed. Please try again.';
  } finally {
    LoadingManager.hide();
  }
});

// Reset password modal
resetPasswordBtn.addEventListener('click', () => openModal(resetPasswordModal));
closeResetModal.addEventListener('click', () => closeModal(resetPasswordModal));
cancelReset.addEventListener('click', () => closeModal(resetPasswordModal));

// Reset password form
resetPasswordForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  resetPasswordMessage.textContent = '';
  
  const email = document.getElementById('resetEmail').value.trim();
  if (!validateEmail(email)) { 
    resetPasswordMessage.className = 'message error';
    resetPasswordMessage.textContent = 'Please enter a valid email.'; 
    return; 
  }

  try {
    LoadingManager.show('Sending reset link...');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    resetPasswordMessage.className = 'message success';
    resetPasswordMessage.textContent = 'Reset link sent! Check your email.';
    
    // Close modal after 2 seconds
    setTimeout(() => {
      closeModal(resetPasswordModal);
      resetPasswordForm.reset();
    }, 2000);
  } catch (err) {
    resetPasswordMessage.className = 'message error';
    resetPasswordMessage.textContent = 'Unable to send reset link.';
  } finally {
    LoadingManager.hide();
  }
});

// ============================
// DARK MODE
// ============================

function initializeDarkMode() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('arthub-theme');
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark.matches);
  
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }
  
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('arthub-theme', 'light');
      showNotification('Switched to light mode', 'info');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('arthub-theme', 'dark');
      showNotification('Switched to dark mode', 'info');
    }
  });
}

// ============================
// ACCESSIBILITY FEATURES
// ============================

function initializeAccessibility() {
  const panel = document.getElementById('accessibilityToggle');
  const menu = document.getElementById('accessibilityMenu');
  
  if (!panel || !menu) return;
  
  panel.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.accessibility-panel')) {
      menu.classList.remove('active');
    }
  });
  
  // High Contrast
  const highContrastToggle = document.getElementById('highContrastToggle');
  if (highContrastToggle) {
    highContrastToggle.checked = localStorage.getItem('accessibility-highContrast') === 'true';
    highContrastToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('high-contrast');
        localStorage.setItem('accessibility-highContrast', 'true');
        showNotification('High contrast enabled', 'info');
      } else {
        document.body.classList.remove('high-contrast');
        localStorage.setItem('accessibility-highContrast', 'false');
      }
    });
  }
  
  // Large Text
  const largeTextToggle = document.getElementById('largeTextToggle');
  if (largeTextToggle) {
    largeTextToggle.checked = localStorage.getItem('accessibility-largeText') === 'true';
    largeTextToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('large-text');
        localStorage.setItem('accessibility-largeText', 'true');
        showNotification('Large text enabled', 'info');
      } else {
        document.body.classList.remove('large-text');
        localStorage.setItem('accessibility-largeText', 'false');
      }
    });
  }
  
  // Reading Guide
  const readingGuideToggle = document.getElementById('readingGuideToggle');
  if (readingGuideToggle) {
    readingGuideToggle.checked = localStorage.getItem('accessibility-readingGuide') === 'true';
    readingGuideToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        const guide = document.createElement('div');
        guide.className = 'reading-guide';
        guide.id = 'readingGuide';
        guide.innerHTML = '<div class="reading-guide-line"></div>';
        document.body.appendChild(guide);
        localStorage.setItem('accessibility-readingGuide', 'true');
        showNotification('Reading guide enabled', 'info');
      } else {
        const guide = document.getElementById('readingGuide');
        if (guide) guide.remove();
        localStorage.setItem('accessibility-readingGuide', 'false');
      }
    });
  }
  
  // Reduced Motion
  const reducedMotionToggle = document.getElementById('reducedMotionToggle');
  if (reducedMotionToggle) {
    reducedMotionToggle.checked = localStorage.getItem('accessibility-reducedMotion') === 'true';
    reducedMotionToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.documentElement.style.setProperty('--transition-normal', 'none');
        document.documentElement.style.setProperty('--transition-fast', 'none');
        document.documentElement.style.setProperty('--transition-slow', 'none');
        document.querySelectorAll('*').forEach(el => {
          el.style.animation = 'none';
          el.style.transition = 'none';
        });
        localStorage.setItem('accessibility-reducedMotion', 'true');
        showNotification('Reduced motion enabled', 'info');
      } else {
        document.documentElement.style.setProperty('--transition-normal', 'all 0.3s ease');
        document.documentElement.style.setProperty('--transition-fast', 'all 0.2s ease');
        document.documentElement.style.setProperty('--transition-slow', 'all 0.5s ease');
        localStorage.setItem('accessibility-reducedMotion', 'false');
        location.reload(); // Refresh to restore animations
      }
    });
  }
  
  // Reset All
  const resetAccessibility = document.getElementById('resetAccessibility');
  if (resetAccessibility) {
    resetAccessibility.addEventListener('click', () => {
      if (highContrastToggle) {
        highContrastToggle.checked = false;
        highContrastToggle.dispatchEvent(new Event('change'));
      }
      if (largeTextToggle) {
        largeTextToggle.checked = false;
        largeTextToggle.dispatchEvent(new Event('change'));
      }
      if (readingGuideToggle) {
        readingGuideToggle.checked = false;
        readingGuideToggle.dispatchEvent(new Event('change'));
      }
      if (reducedMotionToggle) {
        reducedMotionToggle.checked = false;
        reducedMotionToggle.dispatchEvent(new Event('change'));
      }
      showNotification('Accessibility settings reset', 'success');
      menu.classList.remove('active');
    });
  }
}

// ============================
// TUTORIAL SYSTEM
// ============================

function initializeTutorial() {
  // Check if user has seen tutorial before
  if (!localStorage.getItem('arthub-tutorial-seen')) {
    setTimeout(() => {
      showTutorial();
    }, 1500); // Show after 1.5 seconds
  }
  
  // Help button
  const helpBtn = document.getElementById('helpBtn');
  if (helpBtn) {
    helpBtn.addEventListener('click', showTutorial);
  }
  
  function showTutorial() {
    const overlay = document.getElementById('tutorialOverlay');
    const steps = document.querySelectorAll('.tutorial-step');
    const dots = document.querySelectorAll('.tutorial-dot');
    let currentStep = 0;
    
    overlay.classList.add('active');
    
    // Update step display
    function updateStep() {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStep);
      });
      
      const prevBtn = document.getElementById('prevTutorial');
      const nextBtn = document.getElementById('nextTutorial');
      
      if (prevBtn) prevBtn.disabled = currentStep === 0;
      if (nextBtn) {
        nextBtn.innerHTML = currentStep === steps.length - 1 
          ? 'Get Started! <i class="fas fa-check"></i>' 
          : 'Next <i class="fas fa-arrow-right"></i>';
      }
    }
    
    // Navigation
    const nextBtn = document.getElementById('nextTutorial');
    const prevBtn = document.getElementById('prevTutorial');
    const skipBtn = document.getElementById('skipTutorial');
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          updateStep();
        } else {
          localStorage.setItem('arthub-tutorial-seen', 'true');
          overlay.classList.remove('active');
          showNotification('Welcome to ArtHub! Start exploring!', 'success');
        }
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          updateStep();
        }
      });
    }
    
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        localStorage.setItem('arthub-tutorial-seen', 'true');
        overlay.classList.remove('active');
      });
    }
    
    // Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentStep = parseInt(dot.dataset.step) - 1;
        updateStep();
      });
    });
    
    updateStep();
  }
}

// ============================
// DRAWER & NAVIGATION
// ============================

function initializeNavigation() {
  // Side drawer
  const openDrawerBtn = document.getElementById('openDrawerBtn');
  const sideDrawer = document.getElementById('sideDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  
  if (openDrawerBtn && sideDrawer) {
    openDrawerBtn.addEventListener('click', () => {
      sideDrawer.classList.add('open');
      sideDrawer.setAttribute('aria-hidden', 'false');
    });
  }
  
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
      sideDrawer.classList.remove('open');
      sideDrawer.setAttribute('aria-hidden', 'true');
    });
  }
  
  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (sideDrawer && sideDrawer.classList.contains('open') &&
        !e.target.closest('.drawer') && 
        !e.target.closest('#openDrawerBtn')) {
      sideDrawer.classList.remove('open');
      sideDrawer.setAttribute('aria-hidden', 'true');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close drawer if open
        if (sideDrawer && sideDrawer.classList.contains('open')) {
          sideDrawer.classList.remove('open');
        }
        
        // Scroll to section
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
  
  // Update active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-left a');
  
  function updateActiveNavLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
  
  // Update navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      topNavbar.classList.add('scrolled');
    } else {
      topNavbar.classList.remove('scrolled');
    }
  });
}

// Update drawer bookmarks
function updateDrawerBookmarks() {
  const drawerBookmarks = document.getElementById('drawerBookmarks');
  if (!drawerBookmarks) return;
  
  const bookmarks = JSON.parse(localStorage.getItem('arthub-bookmarks') || '[]');
  
  if (bookmarks.length === 0) {
    drawerBookmarks.innerHTML = '<p class="empty-message">No bookmarks yet</p>';
    return;
  }
  
  let html = '';
  bookmarks.slice(0, 3).forEach(artId => {
    const art = artData.find(a => a.id === artId);
    if (art) {
      html += `
        <div class="drawer-bookmark-item">
          <img src="${art.image}" alt="${art.title}" />
          <span>${truncateText(art.title, 20)}</span>
          <button class="btn-link" data-art-id="${art.id}">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      `;
    }
  });
  
  if (bookmarks.length > 3) {
    html += `<p class="more-bookmarks">+${bookmarks.length - 3} more</p>`;
  }
  
  drawerBookmarks.innerHTML = html;
  
  // Add click listeners
  drawerBookmarks.querySelectorAll('.drawer-bookmark-item button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const artId = e.target.closest('button').dataset.artId;
      const artItem = document.querySelector(`[data-art-id="${artId}"]`);
      if (artItem) {
        artItem.scrollIntoView({ behavior: 'smooth' });
        // Close drawer
        const sideDrawer = document.getElementById('sideDrawer');
        if (sideDrawer) sideDrawer.classList.remove('open');
      }
    });
  });
}

// ============================
// SEARCH FUNCTIONALITY
// ============================

const toggleApiSearchBtn = document.getElementById('toggleApiSearchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchModal = document.getElementById('closeSearchModal');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Open search modal
if (toggleApiSearchBtn && searchModal) {
  toggleApiSearchBtn.addEventListener('click', () => {
    openModal(searchModal);
    searchInput.focus();
  });
}

// Close search modal
if (closeSearchModal) {
  closeSearchModal.addEventListener('click', () => closeModal(searchModal));
}

// Perform search
async function performSearch(query) {
  if (!searchResults) return;
  
  searchResults.innerHTML = '';
  if (!query) {
    searchResults.innerHTML = '<div class="message info">Please enter a search term.</div>';
    return;
  }
  
  LoadingManager.show('Searching artworks...');
  searchResults.innerHTML = '<div class="spinner"></div>';
  
  try {
    // Try Art Institute of Chicago API
    const resp = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&limit=12&fields=id,title,image_id,thumbnail`);
    
    if (!resp.ok) throw new Error('Search failed');
    
    const data = await resp.json();
    const results = data && data.data ? data.data : [];
    
    if (!results.length) {
      searchResults.innerHTML = '<div class="message info">No results found.</div>';
      return;
    }
    
    searchResults.innerHTML = '';
    results.forEach(item => {
      const imgId = item.image_id;
      const imgUrl = imgId ? `https://www.artic.edu/iiif/2/${imgId}/full/200,/0/default.jpg` : 'https://placehold.co/200x200/ccc/333?text=No+Image';
      
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <img src="${imgUrl}" alt="${item.title || 'Artwork'}" loading="lazy" />
        <div class="title">${item.title || 'Untitled'}</div>
        <div class="meta">ID: ${item.id}</div>
      `;
      
      card.addEventListener('click', () => {
        const paintingTitle = document.getElementById('paintingTitle');
        const paintingDesc = document.getElementById('paintingDesc');
        const paintingImage = document.getElementById('paintingImage');
        
        if (paintingTitle) paintingTitle.textContent = item.title || '';
        if (paintingDesc) paintingDesc.textContent = item.thumbnail?.alt_text || 'No description available.';
        if (paintingImage) paintingImage.src = imgUrl;
        
        openModal(document.getElementById('paintingModal'));
      });
      
      searchResults.appendChild(card);
    });
    
    // Add to search history
    const smartSearch = new SmartSearch();
    smartSearch.addToHistory(query);
    
  } catch (e) {
    console.error('Search error:', e);
    searchResults.innerHTML = `
      <div class="message error">
        Search temporarily unavailable.<br>
        <button onclick="showSampleResults()" class="btn-secondary" style="margin-top:8px;">
          Show Sample Results
        </button>
      </div>
    `;
  } finally {
    LoadingManager.hide();
  }
}

// Show sample results
window.showSampleResults = function() {
  if (!searchResults) return;
  
  searchResults.innerHTML = '';
  const sampleData = [
    { id: 1, title: 'Starry Night', image: 'https://placehold.co/200x200/4fc3f7/333?text=Starry+Night' },
    { id: 2, title: 'Water Lilies', image: 'https://placehold.co/200x200/4fc3f7/333?text=Water+Lilies' },
    { id: 3, title: 'The Persistence of Memory', image: 'https://placehold.co/200x200/4fc3f7/333?text=Surreal+Art' },
    { id: 4, title: 'The Scream', image: 'https://placehold.co/200x200/4fc3f7/333?text=The+Scream' },
    { id: 5, title: 'Mona Lisa', image: 'https://placehold.co/200x200/4fc3f7/333?text=Mona+Lisa' },
    { id: 6, title: 'Girl with a Pearl Earring', image: 'https://placehold.co/200x200/4fc3f7/333?text=Girl+Pearl' }
  ];
  
  sampleData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="title">${item.title}</div>
      <div class="meta">Sample Artwork</div>
    `;
    searchResults.appendChild(card);
  });
};

// Search button click
if (searchBtn) {
  searchBtn.addEventListener('click', () => performSearch(searchInput.value.trim()));
}

// Search on Enter key
if (searchInput) {
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(searchInput.value.trim());
    }
  });
}

// ============================
// ARTISTS FUNCTIONALITY
// ============================

const showArtistsBtn = document.getElementById('showArtistsBtn');
const artistOverlay = document.getElementById('artistOverlay');
const randomNames = document.getElementById('randomNames');
const artistProfile = document.getElementById('artistProfile');
const artistProfileImg = document.getElementById('artistProfileImg');
const artistProfileName = document.getElementById('artistProfileName');
const artistProfileAge = document.getElementById('artistProfileAge');
const artistProfileAddress = document.getElementById('artistProfileAddress');
const artistProfileEmail = document.getElementById('artistProfileEmail');
const artistProfileSpecialty = document.getElementById('artistProfileSpecialty');
const artistProfileFb = document.getElementById('artistProfileFb');
const closeArtistProfile = document.getElementById('closeArtistProfile');
const closeArtistOverlay = document.getElementById('closeArtistOverlay');

// Show artists list
if (showArtistsBtn && artistOverlay && randomNames) {
  showArtistsBtn.addEventListener('click', () => {
    randomNames.innerHTML = '';
    sampleArtists.forEach((artist, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="artist-name">${artist.name}</span>
        <span style="color:var(--text-light);font-size:13px;">${artist.address}</span>
      `;
      li.addEventListener('click', () => {
        showArtistProfile(artist);
      });
      randomNames.appendChild(li);
    });
    openModal(artistOverlay);
  });
}

// Close artist overlay
if (closeArtistOverlay) {
  closeArtistOverlay.addEventListener('click', () => closeModal(artistOverlay));
}

// Show artist profile
function showArtistProfile(artist) {
  if (artistProfileImg) artistProfileImg.src = artist.image;
  if (artistProfileName) artistProfileName.textContent = artist.name;
  if (artistProfileAge) artistProfileAge.textContent = artist.age;
  if (artistProfileAddress) artistProfileAddress.textContent = artist.address;
  if (artistProfileEmail) artistProfileEmail.textContent = artist.email;
  if (artistProfileSpecialty) artistProfileSpecialty.textContent = artist.specialty;
  if (artistProfileFb) artistProfileFb.href = artist.fb;
  
  closeModal(artistOverlay);
  openModal(artistProfile);
}

// Close artist profile
if (closeArtistProfile) {
  closeArtistProfile.addEventListener('click', () => closeModal(artistProfile));
}

// ============================
// FORM HANDLERS
// ============================

// Post artwork form
const postForm = document.getElementById('postForm');
const postNote = document.getElementById('postNote');

if (postForm) {
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    postNote.textContent = '';
    
    const title = document.getElementById('artTitle').value.trim();
    const imageInput = document.getElementById('artImage');
    const description = document.getElementById('artDescription').value.trim();
    const price = document.getElementById('artPrice').value;
    const category = document.getElementById('artCategory').value;
    
    if (!title) {
      postNote.className = 'message error';
      postNote.textContent = 'Please enter a title for your artwork.';
      return;
    }
    
    if (!imageInput.files.length) {
      postNote.className = 'message error';
      postNote.textContent = 'Please select an image to upload.';
      return;
    }
    
    try {
      LoadingManager.show('Uploading artwork...');
      
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      postNote.className = 'message success';
      postNote.textContent = 'Artwork posted successfully!';
      
      // Reset form
      postForm.reset();
      
      // Show success notification
      showNotification('Your artwork has been posted!', 'success');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        postNote.textContent = '';
      }, 3000);
      
    } catch (err) {
      postNote.className = 'message error';
      postNote.textContent = 'Failed to post artwork. Please try again.';
    } finally {
      LoadingManager.hide();
    }
  });
  
  // File upload preview
  const fileInput = document.getElementById('artImage');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // You could show a preview here
          console.log('File selected:', file.name);
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

// Contact form
const contactForm = document.getElementById('contactForm');
const contactNote = document.getElementById('contactNote');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    contactNote.textContent = '';
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !validateEmail(email) || !message) {
      contactNote.className = 'message error';
      contactNote.textContent = 'Please provide name, valid email, and a message.';
      return;
    }
    
    try {
      LoadingManager.show('Sending message...');
      
      // Simulate sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      contactNote.className = 'message success';
      contactNote.textContent = 'Message sent successfully! We\'ll get back to you soon.';
      
      // Reset form
      contactForm.reset();
      
      // Show success notification
      showNotification('Message sent! Thank you for contacting us.', 'success');
      
    } catch (err) {
      contactNote.className = 'message error';
      contactNote.textContent = 'Failed to send message. Please try again.';
    } finally {
      LoadingManager.hide();
    }
  });
}

// Password toggle visibility
function initializePasswordToggles() {
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.parentNode.querySelector('input');
      const icon = this.querySelector('i');
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
}

// ============================
// PAINTING MODAL
// ============================

const closePaintingModal = document.getElementById('closePaintingModal');
if (closePaintingModal) {
  closePaintingModal.addEventListener('click', () => closeModal(document.getElementById('paintingModal')));
}

// ============================
// INITIALIZATION
// ============================

// Check if user is already logged in
function checkExistingLogin() {
  const userData = JSON.parse(localStorage.getItem('arthub-user') || 'null');
  if (userData) {
    showAppAfterLogin(userData);
  }
}

// Main initialization function
function initializeApp() {
  console.log('ArtHub Enhanced - Initializing...');
  
  // Check existing login
  checkExistingLogin();
  
  // Initialize password toggles
  initializePasswordToggles();
  
  // Initialize features
  initializeDarkMode();
  initializeAccessibility();
  initializeNavigation();
  initializeTutorial();
  
  // Initialize comparison tool
  ComparisonTool.init();
  
  // Load user preferences
  const prefs = loadUserPreferences();
  
  // Apply accessibility preferences
  if (prefs.accessibility.highContrast) {
    document.body.classList.add('high-contrast');
    document.getElementById('highContrastToggle').checked = true;
  }
  if (prefs.accessibility.largeText) {
    document.body.classList.add('large-text');
    document.getElementById('largeTextToggle').checked = true;
  }
  if (prefs.accessibility.readingGuide) {
    const guide = document.createElement('div');
    guide.className = 'reading-guide';
    guide.id = 'readingGuide';
    guide.innerHTML = '<div class="reading-guide-line"></div>';
    document.body.appendChild(guide);
    document.getElementById('readingGuideToggle').checked = true;
  }
  
  console.log('ArtHub Enhanced - Ready!');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Update any responsive elements if needed
}, 250));

// Service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}