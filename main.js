// ==================== NAVBAR RESPONSIVE ====================
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
});

// ==================== HERO: TYPEWRITER ====================
document.addEventListener("DOMContentLoaded", function () {
  const heroTitleText = "Transformando tu mundo digital";
  const heroTitleElement = document.getElementById("hero-title");
  let heroTitleIndex = 0;
  let cursorVisible = true;
  function typeHeroTitle() {
    if (heroTitleElement && heroTitleIndex <= heroTitleText.length) {
      heroTitleElement.innerHTML =
        heroTitleText.substring(0, heroTitleIndex) +
        `<span class="cursor">${cursorVisible ? "|" : " "}</span>`;
      heroTitleIndex++;
      setTimeout(typeHeroTitle, 68);
    } else if (heroTitleElement) {
      blinkHeroCursor();
    }
  }
  function blinkHeroCursor() {
    if (heroTitleElement) {
      cursorVisible = !cursorVisible;
      heroTitleElement.innerHTML =
        heroTitleText +
        `<span class="cursor">${cursorVisible ? "|" : " "}</span>`;
      setTimeout(blinkHeroCursor, 500);
    }
  }
  if (heroTitleElement) typeHeroTitle();
});

// ==================== FONDO VANTA GLOBE EN QUIÉNES SOMOS (index) ====================
document.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA && window.VANTA.GLOBE && document.getElementById("globe-bg")) {
    VANTA.GLOBE({
      el: "#globe-bg",
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
});

// ==================== FONDO VANTA NET (VENTO) EN TODA LA PÁGINA ====================
document.addEventListener("DOMContentLoaded", function () {
  // Para index
  if (window.VANTA && window.VANTA.NET && document.getElementById("main-vanta-bg")) {
    VANTA.NET({
      el: "#main-vanta-bg",
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
  // Para servicios.html
  if (window.VANTA && window.VANTA.NET && document.getElementById("servicios-vanta-bg")) {
    VANTA.NET({
      el: "#servicios-vanta-bg",
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
});

// ==================== FADE-IN SCROLL PARA ELEMENTOS ====================
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

// ==================== MAPA INTERACTIVO LEAFLET ====================
document.addEventListener("DOMContentLoaded", function() {
  if (window.L && document.getElementById("js-mapa-bg")) {
    var map = L.map('js-mapa-bg', {
      center: [19.4132326, -99.1679688],
      zoom: 16,
      zoomControl: true,
      attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(map);

    L.marker([19.4132326, -99.1679688]).addTo(map)
      .bindPopup('Avenida Yucatán 54').openPopup();
  }
});
