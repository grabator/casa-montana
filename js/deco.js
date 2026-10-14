/*
 * Ukrasi po brendu: blijedi crtež planine i jelki iza naslova sekcija blago se pomjera dok se lista.
 * (Jelke na grebenima između sekcija, ćilim rombovi i traka napretka su čisti CSS.)
 */
(function () {
  /* brzina: animacije u ilustracijama (svjetla u prozorima, dim, vatra) pauziraju kad dio stranice nije na ekranu */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { e.target.classList.toggle('anim-off', !e.isIntersecting); });
    }, { rootMargin: '100px 0px' });
    var watch = function () { [].forEach.call(document.querySelectorAll('.hero, #main > section, .ribbon'), function (el) { if (!el.__w) { el.__w = 1; io.observe(el); } }); };
    watch();
    /* promjena jezika ponovo nacrta sekcije: prati i nove */
    new MutationObserver(watch).observe(document.getElementById('main'), { childList: true });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ticking = false;
  function update() {
    ticking = false;
    var vh = window.innerHeight;
    /* svaki put iznova, jer promjena jezika ponovo nacrta sekcije */
    [].forEach.call(document.querySelectorAll('.sec-head'), function (h) {
      var r = h.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      h.style.setProperty('--py', ((r.top - vh / 2) * 0.12).toFixed(1) + 'px');
    });
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
