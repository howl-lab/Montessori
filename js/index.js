/* ─────────────────────────────────────────
   Mega Montessori — Homepage JS
   (testimonial scroll-sync dots)
   ───────────────────────────────────────── */

(function () {
  const grid = document.getElementById('testiGrid');
  const dots = document.querySelectorAll('.testi-dot');
  if (!grid || !dots.length) return;

  // Mark first dot active on load
  dots[0].classList.add('active');

  // Click a dot → scroll to that card
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const card = grid.children[+dot.dataset.index];
      grid.scrollTo({ left: card.offsetLeft - grid.offsetLeft, behavior: 'smooth' });
    });
  });

  // Scroll → update active dot
  grid.addEventListener('scroll', () => {
    const center = grid.scrollLeft + grid.offsetWidth / 2;
    let closest = 0, minDist = Infinity;
    Array.from(grid.children).forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === closest));
  }, { passive: true });
})();
