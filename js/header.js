document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('#cabecalho nav a[href^="#"]'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function clearActive() {
    navLinks.forEach(l => l.classList.remove('active'));
  }

  function setActiveById(id) {
    clearActive();
    const link = document.querySelector(`#cabecalho nav a[href="#${id}"]`);
    if (link) link.classList.add('active');
  }

  // IntersectionObserver to detect visible section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveById(entry.target.id);
      }
    });
  }, { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));

  // If URL has a hash on load, set active immediately
  if (location.hash) {
    setActiveById(location.hash.slice(1));
  }

  // Update on hashchange (clicking nav links)
  window.addEventListener('hashchange', () => {
    setActiveById(location.hash.slice(1));
  });

  // Also update when user clicks a nav link (instant feedback)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href').slice(1);
      setActiveById(id);
      // close mobile menu if open
      const toggle = document.getElementById('menu-toggle');
      if (toggle && toggle.checked && window.matchMedia('(max-width: 768px)').matches) {
        // uncheck to close menu
        toggle.checked = false;
      }
    });
  });
});
