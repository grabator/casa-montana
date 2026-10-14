/*
 * Ukrasi sa strane (samo na širokim ekranima): tanke linije planina i jelki koje se blago pomjeraju dok se lista,
 * ćilim traka na ivici (motiv sa šarenog pufa iz Casa Montane) i snijeg zimi. Čisto ukras, ne smeta klikovima.
 * Na mobitelu nema praznog prostora sa strane, pa tamo ostaje samo mali ćilim ukras uz naslove sekcija (CSS).
 */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* jednostavan pseudo-slučajni niz, da raspored bude uvijek isti */
  function rng(seed) { var s = seed; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  function pine(x, y, h) {
    var w = h * 0.42, p = [];
    /* tri sloja grana, cik-cak kao jelka nacrtana jednom linijom */
    p.push('M' + x + ' ' + (y - h));
    p.push('L' + (x - w * 0.32) + ' ' + (y - h * 0.62) + ' L' + (x - w * 0.16) + ' ' + (y - h * 0.62));
    p.push('L' + (x - w * 0.42) + ' ' + (y - h * 0.3) + ' L' + (x - w * 0.22) + ' ' + (y - h * 0.3));
    p.push('L' + (x - w * 0.5) + ' ' + (y - h * 0.06) + ' L' + (x + w * 0.5) + ' ' + (y - h * 0.06));
    p.push('L' + (x + w * 0.22) + ' ' + (y - h * 0.3) + ' L' + (x + w * 0.42) + ' ' + (y - h * 0.3));
    p.push('L' + (x + w * 0.16) + ' ' + (y - h * 0.62) + ' L' + (x + w * 0.32) + ' ' + (y - h * 0.62) + ' Z');
    p.push('M' + x + ' ' + (y - h * 0.06) + ' V' + y);
    return '<path d="' + p.join(' ') + '"/>';
  }

  function mountains(w, y, peaks, seed, h) {
    var r = rng(seed), pts = [[0, y]], step = w / peaks;
    for (var i = 0; i < peaks; i++) {
      pts.push([step * i + step * (0.35 + r() * 0.3), y - h * (0.55 + r() * 0.45)]);
      pts.push([step * (i + 1), y - h * (0.15 + r() * 0.2)]);
    }
    var d = 'M' + pts.map(function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join(' L');
    /* snježne kape: kratke linije ispod vrhova */
    var caps = '';
    for (var k = 1; k < pts.length; k += 2) {
      var px = pts[k][0], py = pts[k][1];
      caps += '<path class="dc-cap" d="M' + (px - 14).toFixed(1) + ' ' + (py + 12).toFixed(1) + ' L' + (px - 5).toFixed(1) + ' ' + (py + 7).toFixed(1) + ' L' + px.toFixed(1) + ' ' + (py + 13).toFixed(1) + ' L' + (px + 6).toFixed(1) + ' ' + (py + 8).toFixed(1) + ' L' + (px + 13).toFixed(1) + ' ' + (py + 12).toFixed(1) + '"/>';
    }
    return '<path d="' + d + '"/>' + caps;
  }

  /* jedna strana: 300 x 1200, planine dolje, jelke na više visina, mjesec gore */
  function side(seed, flip) {
    var r = rng(seed), W = 300, far = '', near = '', i;
    far += mountains(W, 1060, 3, seed + 3, 220);
    far += mountains(W, 640, 2, seed + 9, 150);
    far += '<circle cx="' + (flip ? 70 : 220) + '" cy="150" r="34"/><circle cx="' + (flip ? 70 : 220) + '" cy="150" r="48" class="dc-faint"/>';
    /* ptice */
    far += '<path d="M' + (flip ? 180 : 90) + ' 260 q10 -8 20 0 q10 -8 20 0 M' + (flip ? 210 : 60) + ' 300 q7 -6 14 0 q7 -6 14 0"/>';
    for (i = 0; i < 5; i++) near += pine(20 + r() * 260, 1180 - r() * 40, 90 + r() * 90);
    for (i = 0; i < 3; i++) near += pine(30 + r() * 240, 760 - r() * 30, 60 + r() * 60);
    near += '<path d="M0 1180 Q150 1150 300 1175"/>';
    return '<svg class="dc-far" viewBox="0 0 300 1200" preserveAspectRatio="xMidYMax meet" aria-hidden="true"' + (flip ? ' style="transform:scaleX(-1)"' : '') + '><g>' + far + '</g></svg>' +
      '<svg class="dc-near" viewBox="0 0 300 1200" preserveAspectRatio="xMidYMax meet" aria-hidden="true"' + (flip ? ' style="transform:scaleX(-1)"' : '') + '><g>' + near + '</g></svg>';
  }

  /* ćilim traka: rombovi u bojama pufa (crvena, plava, žuta, zelena) */
  function kilim() {
    return '<svg class="dc-kilim" aria-hidden="true"><defs><pattern id="kilim-p" width="36" height="72" patternUnits="userSpaceOnUse">' +
      '<path d="M18 4 L32 18 L18 32 L4 18Z" fill="none" stroke="#c4372b" stroke-width="2"/><path d="M18 11 L25 18 L18 25 L11 18Z" fill="#2d4f8f"/>' +
      '<path d="M18 40 L32 54 L18 68 L4 54Z" fill="none" stroke="#3d7d4a" stroke-width="2"/><path d="M18 47 L25 54 L18 61 L11 54Z" fill="#e8a628"/>' +
      '<path d="M0 36 H36" stroke="#c4372b" stroke-width="1" stroke-dasharray="3 3"/>' +
      '</pattern></defs><rect width="100%" height="100%" fill="url(#kilim-p)"/></svg>';
  }

  /* crtež iza naslova sekcija: mali pomak u odnosu na sredinu ekrana (radi i na mobitelu) */
  function headsUpdate() {
    if (reduced) return;
    var vh = window.innerHeight;
    /* svaki put iznova, jer promjena jezika ponovo nacrta sekcije */
    [].forEach.call(document.querySelectorAll('.sec-head'), function (h) {
      var r = h.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      h.style.setProperty('--py', ((r.top - vh / 2) * 0.12).toFixed(1) + 'px');
    });
  }

  var el = document.createElement('div');
  el.className = 'deco';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<div class="deco-side deco-l">' + kilim() + '<div class="deco-art">' + side(7, false) + '</div><i class="deco-snow"></i></div>' +
    '<div class="deco-side deco-r">' + kilim() + '<div class="deco-art">' + side(19, true) + '</div><i class="deco-snow"></i></div>';
  document.body.appendChild(el);

  /* pojavi se tek kad se pređe prvi ekran; blago pomjeranje dok se lista */
  var ticking = false;
  function update() {
    ticking = false;
    headsUpdate();
    var y = window.scrollY, vh = window.innerHeight;
    el.classList.toggle('on', y > vh * 0.55);
    if (reduced) return;
    el.style.setProperty('--far', (-y * 0.04).toFixed(1) + 'px');
    el.style.setProperty('--near', (-y * 0.1).toFixed(1) + 'px');
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
