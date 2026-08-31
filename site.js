document.documentElement.classList.add('js');

const faviconData = 'data:image/png;base64,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';

let favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  document.head.appendChild(favicon);
}
favicon.type = 'image/png';
favicon.sizes = '32x32';
favicon.href = faviconData;

const basicPrice = document.querySelector('.pricing-grid .price-card:first-child .price');
if (basicPrice) {
  basicPrice.innerHTML = '£20 <small>/ lesson</small>';
}

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
