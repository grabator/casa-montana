/*
 * Ukrasi po brendu: crtež planine i jelki iza naslova sekcija stoji mirno (bez pomjeranja dok se lista, da ništa ne trza).
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

})();
