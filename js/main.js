/* ============================================
   MVMNTD INC — MAIN JS
============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });


  /* ── HAMBURGER / MOBILE MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const navMobile = document.querySelector('.nav-mobile');

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMobile.classList.toggle('open');
      document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  /* ── SMOOTH SCROLL LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ── INTERSECTION OBSERVER (reveal) ── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach(el => revealObserver.observe(el));


  /* ── RELEASE CARDS STAGGER ── */
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.release-card');
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.style.animationDelay = `${idx * 0.07}s`;
              card.classList.add('visible');
            }, idx * 70);
          });
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  const grid = document.querySelector('.releases-grid');
  if (grid) cardObserver.observe(grid);


  /* ── FILTER BUTTONS ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const releaseCards = document.querySelectorAll('.release-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      releaseCards.forEach(card => {
        const match = filter === 'all' || card.dataset.genre === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });


  /* ── FORM SUBMIT (placeholder) ── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const original = btn.textContent;
      btn.textContent = 'MENSAGEM ENVIADA ✓';
      btn.style.background = '#1a7a1a';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }


  /* ── TICKER DUPLICATE ── */
  const track = document.querySelector('.ticker-track');
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate for seamless loop
  }


  /* ── COUNTER ANIMATION ── */
  function animateCounter(el, target, duration = 1600) {
    let start = 0;
    const step = target / (duration / 16);
    const suffix = el.dataset.suffix || '';

    const update = () => {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start) + suffix;
      if (start < target) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const statNums = document.querySelectorAll('.stat-num[data-target]');

  const statsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateCounter(el, parseInt(el.dataset.target), 1800);
          statsObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach(el => statsObserver.observe(el));


  /* ── ACTIVE NAV LINK on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - navbar.offsetHeight - 80;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

});
