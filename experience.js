(() => {
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
