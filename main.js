// ========== UTILS ==========
function isMobile() {
  return window.innerWidth <= 900 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========== NAVBAR HAMBURGUESA ==========
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
});

// ========== HERO: TYPEWRITER ==========
document.addEventListener("DOMContentLoaded", function () {
  const heroTitleText = "Transformando tu mundo digital";
  const heroTitleElement = document.getElementById("hero-title");
  let heroTitleIndex = 0;
  let cursorVisible = true;
  function typeHeroTitle() {
    if (heroTitleIndex <= heroTitleText.length) {
      heroTitleElement.innerHTML =
        heroTitleText.substring(0, heroTitleIndex) +
        `<span class="cursor">${cursorVisible ? "|" : " "}</span>`;
      heroTitleIndex++;
      setTimeout(typeHeroTitle, 68);
    } else {
      blinkHeroCursor();
    }
  }
  function blinkHeroCursor() {
    cursorVisible = !cursorVisible;
    heroTitleElement.innerHTML =
      heroTitleText +
      `<span class="cursor">${cursorVisible ? "|" : " "}</span>`;
    setTimeout(blinkHeroCursor, 500);
  }
  if (heroTitleElement) typeHeroTitle();
});

// ========== ¿QUIÉNES SOMOS? Título animado ==========
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById('quienes-title');
  if (title) {
    const txt = title.textContent;
    title.textContent = '';
    let idx = 0;
    function type() {
      if (idx <= txt.length) {
        title.innerHTML = txt.substring(0, idx) + '<span class="cursor">|</span>';
        idx++;
        setTimeout(type, 52);
      } else {
        title.innerHTML = txt;
      }
    }
    type();
  }
});

// ========== FONDOS DINÁMICOS SOLO EN DESKTOP ==========
document.addEventListener("DOMContentLoaded", function () {
  if (!isMobile()) {
    // Navbar particles
    if (window.particlesJS && document.getElementById("navbar-particles")) {
      particlesJS("navbar-particles", {
        "particles": {
          "number": { "value": 36 },
          "color": { "value": "#ffe082" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.26, "random": true },
          "size": { "value": 2.6, "random": true },
          "line_linked": {
            "enable": true,
            "distance": 60,
            "color": "#e53935",
            "opacity": 0.22,
            "width": 1.1
          },
          "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": false },
            "onclick": { "enable": false }
          }
        },
        "retina_detect": true
      });
    }

    // Hero Vanta.NET
    if (window.VANTA && window.VANTA.NET && document.getElementById("hero-particles")) {
      VANTA.NET({
        el: "#hero-particles",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 340.0,
        minWidth: 320.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe53935,
        backgroundColor: 0x18181c,
        points: 13.0,
        maxDistance: 22.0,
        spacing: 18.0,
        showDots: true,
      });
    }

    // Quienes Globe
    if (window.VANTA && window.VANTA.GLOBE && document.getElementById("quienes-globe")) {
      VANTA.GLOBE({
        el: "#quienes-globe",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 320.0,
        minWidth: 320.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe53935,
        color2: 0xffe082,
        backgroundColor: 0x18181c,
        size: 1.05,
        points: 12.0,
        maxDistance: 18.0
      });
    }

    // Fondo partículas global tech section
    if (window.particlesJS && document.getElementById("global-particles")) {
      particlesJS("global-particles", {
        "particles": {
          "number": { "value": 75 },
          "color": { "value": "#ffe082" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.26, "random": true },
          "size": { "value": 3.1, "random": true },
          "line_linked": {
            "enable": true,
            "distance": 62,
            "color": "#e53935",
            "opacity": 0.19,
            "width": 1.1
          },
          "move": {
            "enable": true,
            "speed": 1.15,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": false },
            "onclick": { "enable": false }
          }
        },
        "retina_detect": true
      });
    }
  }
});

// ========== FADE-IN SCROLL PARA ELEMENTOS ==========
function handleFadeOnScroll() {
  const elements = document.querySelectorAll('.fade-on-scroll');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeOnScroll);
window.addEventListener('DOMContentLoaded', handleFadeOnScroll);

// ========== MAPA INTERACTIVO LEAFLET ==========
document.addEventListener("DOMContentLoaded", function() {
  if (window.L && document.getElementById("js-mapa-bg")) {
    var map = L.map('js-mapa-bg', {
      center: [19.4132326, -99.1679688],
      zoom: 16,
      zoomControl: true,
      attributionControl: false
    });

    // Capa clara tipo "Google Maps"
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(map);

    L.marker([19.4132326, -99.1679688]).addTo(map)
      .bindPopup('Avenida Yucatán 54').openPopup();
  }
});
