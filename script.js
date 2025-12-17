// ==================== MARKDOWN Support

// Create a promise that resolves when Marked is loaded
const markedReady = new Promise((resolve, reject) => {
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  s.onload = () => {
    console.log("Marked is loaded!");
    resolve();
  };
  s.onerror = (e) => reject(e);
  document.head.appendChild(s);
});

function renderMarkdownInTranslatedElements() {
  const nodes = document.querySelectorAll('[data-en][data-fr]');
  nodes.forEach(el => {
    // switchLanguage has set textContent to the Markdown
    const md = el.textContent || '';
    // Convert to HTML only if Marked is available
    const html = window.marked.parse(md, { breaks: true });
    el.innerHTML = html;
  });
}


// ==================== Language Switching ====================
let currentLanguage = 'en';

/*function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
    
    // Update all elements with data-en and data-fr attributes
    const elements = document.querySelectorAll('[data-en][data-fr]');
    elements.forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            // Check if the element contains HTML or just text
            if (content.includes('<')) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    });
    
    // Update page title if it has language attributes
    const title = document.querySelector('title');
    if (title && title.hasAttribute(`data-${lang}`)) {
        title.textContent = title.getAttribute(`data-${lang}`);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
}*/
function switchLanguage(lang) {
    currentLanguage = lang;

    // Update button states
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');

    // Update all elements with data-en and data-fr attributes
    const elements = document.querySelectorAll('[data-en][data-fr]');
    elements.forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            // If element has children, only update its own text node
            if (element.children.length > 0) {
                // Update only the first text node (before children)
                const firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                if (firstTextNode) {
                    firstTextNode.nodeValue = content + ' ';
                }
            } else {
                element.textContent = content;
            }
        }
    });

    // Update page title
    const title = document.querySelector('title');
    if (title && title.hasAttribute(`data-${lang}`)) {
        title.textContent = title.getAttribute(`data-${lang}`);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
}




// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    }
    // Re-render Markdown elements.

  // Ensure Marked is loaded before rendering Markdown
  markedReady
    .then(() => renderMarkdownInTranslatedElements())
    .catch((err) => console.error('Failed to load Marked:', err));

  // If you have inline onclick on buttons, you can also hook rendering after switches:
  const enBtn = document.getElementById('lang-en');
  const frBtn = document.getElementById('lang-fr');

  enBtn?.addEventListener('click', () => {
    switchLanguage('en');
    markedReady.then(renderMarkdownInTranslatedElements);
  });

  frBtn?.addEventListener('click', () => {
    switchLanguage('fr');
    markedReady.then(renderMarkdownInTranslatedElements);
  });


    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// ==================== Mobile Menu Toggle ====================
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (navMenu && navMenu.classList.contains('active') && 
        !navbar.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});