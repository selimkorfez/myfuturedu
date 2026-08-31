(() => {
  const brandStyles = document.createElement('link');
  brandStyles.rel = 'stylesheet';
  brandStyles.href = 'brand-logo.css?v=1';
  document.head.appendChild(brandStyles);

  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.sizes = '32x32';
  favicon.href = 'data:image/png;base64,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';
  document.head.appendChild(favicon);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const body = document.body;
  body.classList.add('motion-ready');

  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, value))})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  const tones = [...document.querySelectorAll('[data-tone-section]')];
  if (tones.length) {
    const toneObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) body.dataset.tone = visible.target.dataset.toneSection || 'paper';
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-12% 0px -22% 0px' });
    tones.forEach(section => toneObserver.observe(section));
  }

  const motionItems = [...document.querySelectorAll('[data-motion]')];
  if (reduced.matches) {
    motionItems.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    motionItems.forEach((el, index) => {
      if (!el.style.getPropertyValue('--delay')) {
        const local = Number(el.dataset.delay || 0);
        el.style.setProperty('--delay', `${Math.min(local || (index % 4) * 55, 220)}ms`);
      }
      revealObserver.observe(el);
    });
  }

  const header = document.querySelector('.site-header');
  const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  const ambient = document.querySelector('.ambient-field');
  if (ambient && finePointer.matches && !reduced.matches) {
    let targetX = window.innerWidth * .7;
    let targetY = window.innerHeight * .18;
    let currentX = targetX;
    let currentY = targetY;

    const pointerLight = document.createElement('div');
    pointerLight.setAttribute('aria-hidden', 'true');
    Object.assign(pointerLight.style, {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '760px',
      height: '560px',
      pointerEvents: 'none',
      zIndex: '0',
      opacity: '.9',
      borderRadius: '50%',
      background: 'radial-gradient(ellipse at center, rgba(37,99,235,.18) 0%, rgba(37,99,235,.10) 28%, rgba(56,189,248,.045) 48%, rgba(37,99,235,0) 72%)',
      filter: 'blur(22px)',
      transform: 'translate3d(-1000px,-1000px,0)',
      willChange: 'transform'
    });
    body.prepend(pointerLight);

    const tick = () => {
      currentX += (targetX - currentX) * .105;
      currentY += (targetY - currentY) * .105;
      document.documentElement.style.setProperty('--mx', `${(currentX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--my', `${(currentY / window.innerHeight) * 100}%`);
      pointerLight.style.transform = `translate3d(${currentX - 380}px,${currentY - 280}px,0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      pointerLight.style.opacity = '.45';
    });
    window.addEventListener('pointerenter', () => {
      pointerLight.style.opacity = '.9';
    });

    requestAnimationFrame(tick);
  }

  document.querySelectorAll('.cursor-halo,.cursor-dot').forEach(el => el.remove());

  const hero = document.querySelector('.hero');
  if (hero && !reduced.matches) {
    const syncHeroLine = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / Math.max(rect.height, 1)));
      hero.style.setProperty('--hero-line', String(Math.min(1, .25 + progress * .75)));
    };
    syncHeroLine();
    window.addEventListener('scroll', syncHeroLine, { passive: true });
  }

  reduced.addEventListener?.('change', () => window.location.reload());
})();
