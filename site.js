document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

const header = document.querySelector('.site-header');
const syncHeader = () => {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
};
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 780) closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const revealElements = [...document.querySelectorAll('[data-reveal]')];

const addGroupStagger = (selector, maxDelay = 180) => {
  document.querySelectorAll(selector).forEach((group) => {
    [...group.querySelectorAll(':scope > [data-reveal]')].forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 60, maxDelay)}ms`;
    });
  });
};

addGroupStagger('.course-grid');
addGroupStagger('.pricing-grid', 120);
addGroupStagger('.trust-grid', 120);

const showEverything = () => {
  revealElements.forEach((el) => el.classList.add('is-visible'));
};

if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  showEverything();
} else {
  const heroElements = revealElements.filter((el) => el.dataset.reveal?.startsWith('hero'));
  const scrollElements = revealElements.filter((el) => !el.dataset.reveal?.startsWith('hero'));

  requestAnimationFrame(() => {
    heroElements.forEach((el, index) => {
      window.setTimeout(() => el.classList.add('is-visible'), 90 + index * 110);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  scrollElements.forEach((el) => observer.observe(el));
}

reduceMotion.addEventListener?.('change', (event) => {
  if (event.matches) showEverything();
});

const hero = document.querySelector('.hero');
const heroOrbOne = document.querySelector('.hero-orb-one');
const heroOrbTwo = document.querySelector('.hero-orb-two');
if (hero && heroOrbOne && heroOrbTwo && finePointer.matches && !reduceMotion.matches) {
  let frame = null;
  hero.addEventListener('pointermove', (event) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroOrbOne.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
      heroOrbTwo.style.transform = `translate3d(${x * 10}px, ${y * 8}px, 0)`;
    });
  });
  hero.addEventListener('pointerleave', () => {
    heroOrbOne.style.transform = 'translate3d(0,0,0)';
    heroOrbTwo.style.transform = 'translate3d(0,0,0)';
  });
}

const cookieBanner = document.querySelector('.cookie-banner');
const cookieChoice = localStorage.getItem('mfe-cookie-choice');
if (cookieBanner && !cookieChoice) cookieBanner.classList.add('show');

document.querySelectorAll('[data-cookie-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.setItem('mfe-cookie-choice', button.dataset.cookieChoice);
    cookieBanner?.classList.remove('show');
  });
});

document.querySelectorAll('[data-cookie-settings]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    cookieBanner?.classList.add('show');
  });
});

const form = document.querySelector('#lesson-enquiry');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('My Future Education lesson enquiry');
    const body = encodeURIComponent(
      `Parent/carer: ${data.get('parent')}\n` +
      `Email: ${data.get('email')}\n` +
      `Child's first name: ${data.get('child')}\n` +
      `Age/Year group: ${data.get('age')}\n` +
      `Level: ${data.get('level')}\n` +
      `Lesson format: ${data.get('format')}\n` +
      `Preferred timing: ${data.get('timing')}\n\n` +
      `Message:\n${data.get('message') || ''}`
    );

    const status = form.querySelector('.form-status');
    if (status) {
      status.style.display = 'block';
      status.textContent = 'Your email app should open with the enquiry ready to send.';
    }

    window.location.href = `mailto:info@myfuturedu.com?subject=${subject}&body=${body}`;
  });
}
