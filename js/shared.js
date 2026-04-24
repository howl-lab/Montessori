/* ─────────────────────────────────────────
   Mega Montessori — Shared JS
   (mobile nav · scroll reveal · form AJAX)
   ───────────────────────────────────────── */

// Mobile nav toggle
(function () {
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (!burger || !navLinks) return;
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

// Form submission (Web3Forms AJAX)
(function () {
  document.querySelectorAll('.tour-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.innerHTML = '<div class="form-success"><div class="form-success-icon">✅</div><p>Thank you! We\'ll be in touch within one school day.</p></div>';
        } else { throw new Error(); }
      } catch {
        btn.textContent = 'Request a Tour';
        btn.disabled = false;
        let err = form.querySelector('.form-error');
        if (!err) { err = document.createElement('p'); err.className = 'form-error'; form.appendChild(err); }
        err.textContent = 'Something went wrong — please email megamontressori@gmail.com directly.';
      }
    });
  });
})();
