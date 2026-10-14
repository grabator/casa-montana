/*
 * Planinka - ilustracije (SVG) umjesto fotografija.
 *
 * Vanjske scene (exterior, view) koriste CSS varijable sezone (--sky-top, --snow-op ...),
 * pa se same prebojaju kad se promijeni zima/ljeto. Enterijeri imaju svoje boje.
 * Za pravog klijenta: u data/vikendica.js umjesto { scene: 'living' } stavi
 * { image: 'assets/img/dnevni-boravak.webp' } i ilustracija se zamijeni slikom.
 */
(function () {
  'use strict';
  var n = 0;
  function uid(p) { n += 1; return p + n; }

  /* jelka: x, y (dno), visina */
  function pine(x, y, h, cls) {
    var w = h * 0.42;
    var t = '';
    for (var i = 0; i < 4; i++) {
      var ty = y - h + i * h * 0.2;
      var tw = w * (0.45 + i * 0.2);
      var by = ty + h * 0.34;
      t += '<path d="M' + x + ' ' + ty + 'L' + (x + tw) + ' ' + by + 'H' + (x - tw) + 'Z"/>';
    }
    var snow = '';
    for (var j = 0; j < 4; j++) {
      var sy = y - h + j * h * 0.2;
      var sw = w * (0.45 + j * 0.2);
      snow += '<path d="M' + x + ' ' + sy + 'L' + (x + sw * 0.55) + ' ' + (sy + h * 0.17) + 'Q' + x + ' ' + (sy + h * 0.12) + ' ' + (x - sw * 0.55) + ' ' + (sy + h * 0.17) + 'Z"/>';
    }
    return '<g class="pine ' + (cls || '') + '"><rect x="' + (x - h * 0.03) + '" y="' + (y - h * 0.08) + '" width="' + h * 0.06 + '" height="' + h * 0.1 + '" class="trunk"/>' +
      '<g class="pine-body">' + t + '</g><g class="pine-snow">' + snow + '</g></g>';
  }

  function forest(seed, count, x0, x1, yBase, hMin, hMax, cls) {
    var s = seed, out = '';
    function r() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = 0; i < count; i++) {
      var x = x0 + (x1 - x0) * (i + r() * 0.8) / count;
      var h = hMin + (hMax - hMin) * r();
      out += pine(Math.round(x), Math.round(yBase + r() * 30), Math.round(h), cls);
    }
    return out;
  }

  function sky(id) {
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" class="sky-top"/><stop offset="1" class="sky-bot"/></linearGradient></defs>' +
      '<rect width="1600" height="1000" fill="url(#' + id + ')"/>';
  }

  function mountains() {
    return (
      '<g class="sun"><circle cx="1220" cy="250" r="70" class="sun-disc"/><circle cx="1220" cy="250" r="130" class="sun-glow"/></g>' +
      '<path class="mtn mtn-3" d="M0 560 L180 400 L320 470 L520 300 L700 430 L860 330 L1060 470 L1260 340 L1440 450 L1600 380 V1000 H0Z"/>' +
      '<path class="snowcap" d="M470 345 L520 300 L572 348 L545 340 L520 358 L498 342Z M820 360 L860 330 L902 362 L880 356 L860 372 L840 356Z M1220 372 L1260 340 L1300 372 L1280 366 L1260 382 L1240 368Z"/>' +
      '<path class="mtn mtn-2" d="M0 640 L240 470 L420 580 L640 430 L860 590 L1080 470 L1300 600 L1460 520 L1600 580 V1000 H0Z"/>' +
      '<path class="snowcap" d="M590 465 L640 430 L692 468 L668 462 L640 480 L614 464Z M1030 505 L1080 470 L1132 508 L1106 500 L1080 518 L1056 502Z"/>'
    );
  }

  /* vikendica (A-frame) */
  function cabin(x, y, s) {
    var g = '<g class="cabin" transform="translate(' + x + ' ' + y + ') scale(' + s + ')">';
    g += '<ellipse cx="0" cy="210" rx="330" ry="26" class="cabin-shadow"/>';
    /* bočni dio */
    g += '<path class="wood-dark" d="M120 40 L300 40 L300 210 L120 210Z"/>';
    g += '<path class="roof" d="M90 50 L150 -10 L330 -10 L330 50Z"/>';
    g += '<path class="roof-snow" d="M96 44 L152 -14 L332 -14 L332 4 L156 4 L110 50Z"/>';
    g += '<rect x="190" y="90" width="70" height="60" rx="4" class="win"/><path d="M225 90V150M190 120H260" class="win-bar"/>';
    /* dimnjak i dim */
    g += '<rect x="250" y="-70" width="34" height="70" class="chimney"/><rect x="246" y="-76" width="42" height="10" class="chimney-top"/>';
    g += '<g class="smoke"><circle cx="267" cy="-100" r="16"/><circle cx="280" cy="-140" r="22"/><circle cx="300" cy="-190" r="28"/></g>';
    /* glavni A dio */
    g += '<path class="wood" d="M-170 210 L0 -150 L170 210Z"/>';
    g += '<path class="planks" d="M-120 110 H120 M-150 160 H150 M-80 20 H80 M-40 -60 H40"/>';
    g += '<path class="glass" d="M-110 200 L0 -40 L110 200Z"/>';
    g += '<path class="glass-light" d="M-96 194 L0 -14 L96 194Z"/>';
    g += '<path class="win-bar" d="M0 -40 V200 M-55 80 H55 M-82 140 H82"/>';
    g += '<path class="roof" d="M-200 222 L0 -196 L22 -170 L-160 222Z M200 222 L0 -196 L-22 -170 L160 222Z"/>';
    g += '<path class="roof-snow" d="M-200 222 L0 -196 L10 -184 L-186 222Z M200 222 L0 -196 L-10 -184 L186 222Z"/>';
    /* terasa i stepenice */
    g += '<rect x="-230" y="200" width="460" height="16" rx="3" class="deck"/>';
    g += '<path class="rail" d="M-230 200 V160 M-170 200 V160 M170 200 V160 M230 200 V160 M-230 162 H-150 M150 162 H230"/>';
    g += '<g class="lantern"><rect x="-196" y="120" width="14" height="22" rx="3"/><circle cx="-189" cy="131" r="22" class="lantern-glow"/></g>';
    g += '</g>';
    return g;
  }


  /* kuća sa strmim krovom (Casa Montana): bijeli zidovi, antracit krov, solarni paneli, drvene škure, stepenice */
  function house(x, y, s) {
    function pt(u, v) { return [(-4 + 140 * u + 216 * v).toFixed(1), (-240 - 40 * u + 268 * v).toFixed(1)]; }
    function side(t, yy) { return [(190 + 140 * t).toFixed(1), (yy - 40 * t).toFixed(1)]; }
    function poly(a) { return a.map(function (q) { return q.join(','); }).join(' '); }
    function sideWin(t0, t1, y0, y1, lit) {
      return '<polygon points="' + poly([side(t0, y0), side(t1, y0), side(t1, y1), side(t0, y1)]) + '" class="' + (lit ? 'glass-light' : 'glass') + '"/>' +
        '<polygon points="' + poly([side(t0, y0), side(t1, y0), side(t1, y1), side(t0, y1)]) + '" class="h-frame"/>';
    }
    function frontWin(cx, y0, w, h, lit) {
      return '<rect x="' + (cx - w / 2 - 18) + '" y="' + y0 + '" width="16" height="' + h + '" rx="2" class="wood-dark"/>' +
        '<rect x="' + (cx + w / 2 + 2) + '" y="' + y0 + '" width="16" height="' + h + '" rx="2" class="wood-dark"/>' +
        '<rect x="' + (cx - w / 2) + '" y="' + y0 + '" width="' + w + '" height="' + h + '" class="' + (lit ? 'glass-light' : 'glass') + '"/>' +
        '<path d="M' + cx + ' ' + y0 + 'V' + (y0 + h) + '" class="h-bar"/><rect x="' + (cx - w / 2) + '" y="' + y0 + '" width="' + w + '" height="' + h + '" class="h-frame"/>';
    }
    var g = '<g class="cabin house" transform="translate(' + x + ' ' + y + ') scale(' + s + ')">';
    g += '<ellipse cx="60" cy="214" rx="360" ry="26" class="cabin-shadow"/>';
    /* bočni zid i prozori */
    g += '<polygon points="190,212 330,172 330,-30 190,10" class="h-side"/>';
    g += sideWin(0.22, 0.42, 60, 120, true) + sideWin(0.6, 0.8, 60, 120, false) + sideWin(0.32, 0.62, -10, 30, true);
    /* krov sa strane, solarni paneli, snijeg */
    g += '<polygon points="' + poly([pt(-0.02, -0.03), pt(1.06, -0.03), pt(1.06, 1.06), pt(-0.02, 1.06)]) + '" class="roof"/>';
    [0, 1, 2].forEach(function (i) {
      [0, 1].forEach(function (j) {
        var u0 = 0.18 + i * 0.24, v0 = 0.3 + j * 0.24;
        g += '<polygon points="' + poly([pt(u0, v0), pt(u0 + 0.22, v0), pt(u0 + 0.22, v0 + 0.22), pt(u0, v0 + 0.22)]) + '" class="solar"/>';
      });
    });
    g += '<polygon points="' + poly([pt(-0.02, -0.03), pt(1.06, -0.03), pt(1.06, 0.2), pt(-0.02, 0.2)]) + '" class="roof-snow"/>';
    /* dimnjak i dim */
    g += '<rect x="96" y="-318" width="30" height="104" class="chimney"/><rect x="91" y="-324" width="40" height="10" class="chimney-top"/>';
    g += '<g class="smoke" transform="translate(-155 -230)"><circle cx="267" cy="-100" r="16"/><circle cx="280" cy="-140" r="22"/><circle cx="300" cy="-190" r="28"/></g>';
    /* prednji zid sa zabatom */
    g += '<polygon points="-190,212 -190,10 0,-230 190,10 190,212" class="h-wall"/>';
    g += '<rect x="-190" y="196" width="380" height="16" class="h-base"/>';
    /* prozori: potkrovlje, sprat, prizemlje */
    g += frontWin(0, -120, 44, 58, true);
    g += frontWin(-105, 30, 54, 62, false) + frontWin(105, 30, 54, 62, true);
    g += '<rect x="-40" y="22" width="80" height="78" class="glass"/><rect x="-40" y="22" width="80" height="78" class="h-frame"/><path d="M0 22V100" class="h-bar"/>';
    g += '<rect x="-70" y="96" width="140" height="10" rx="2" class="wood-dark"/><path d="M-66 100V68M-40 100V68M-14 100V68M14 100V68M40 100V68M66 100V68M-70 68H70" class="h-rail"/>';
    g += frontWin(-105, 128, 54, 62, true) + frontWin(105, 128, 54, 62, false);
    g += '<rect x="-24" y="128" width="48" height="84" rx="3" class="wood-dark"/><circle cx="14" cy="172" r="3" class="h-knob"/>';
    g += '<g class="lantern"><rect x="34" y="136" width="10" height="16" rx="3"/><circle cx="39" cy="144" r="18" class="lantern-glow"/></g>';
    /* krov sprijeda (strehe) i snijeg */
    g += '<path d="M-214 34 L0 -250 L214 34" class="h-fascia"/>';
    g += '<path d="M-214 26 L0 -258 L214 26" class="h-fascia-snow"/>';
    /* stepenice uz kuću */
    for (var k = 0; k < 6; k++) g += '<rect x="' + (-330 + k * 24) + '" y="' + (212 - (k + 1) * 14) + '" width="' + (144 - k * 24 + 24) + '" height="14" class="h-step"/>';
    g += '<path d="M-322 170 L-200 96 M-322 170 V198 M-262 134 V170 M-204 98 V128" class="h-rail"/>';
    g += '</g>';
    return g;
  }

  function ground() {
    return (
      '<path class="ground" d="M0 760 Q400 690 800 740 T1600 720 V1000 H0Z"/>' +
      '<path class="ground-2" d="M0 860 Q500 800 1000 850 T1600 830 V1000 H0Z"/>' +
      '<g class="flowers">' +
      [[140, 900], [260, 930], [420, 880], [600, 940], [980, 910], [1120, 950], [1300, 900], [1460, 930], [760, 960], [1500, 880]].map(function (p, i) {
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (6 + (i % 3) * 2) + '" class="fl fl-' + (i % 3) + '"/>';
      }).join('') + '</g>' +
      '<path class="path" d="M760 1000 Q790 900 820 820 Q840 790 850 770 L880 770 Q900 800 930 860 Q980 950 1040 1000Z"/>'
    );
  }

  var SCENES = {
    exterior: function () {
      var id = uid('sk');
      return '<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" class="scene scene-ext" aria-hidden="true">' +
        sky(id) + mountains() +
        '<g class="far">' + forest(7, 26, -40, 1640, 650, 70, 120, 'far-pine') + '</g>' +
        ground() + ((window.VIKENDICA || {}).houseStyle === 'house' ? house(1010, 548, 0.92) : cabin(850, 545, 1)) +
        forest(13, 6, -60, 520, 860, 170, 260) + forest(29, 6, 1180, 1660, 850, 170, 270) +
        '</svg>';
    },
    view: function () {
      var id = uid('sk');
      return '<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" class="scene scene-view" aria-hidden="true">' +
        sky(id) + mountains() +
        '<g class="far">' + forest(41, 30, -40, 1640, 700, 60, 110, 'far-pine') + '</g>' +
        '<path class="ground" d="M0 820 Q800 760 1600 810 V1000 H0Z"/>' +
        /* terasa u prvom planu */
        '<rect x="0" y="880" width="1600" height="120" class="deck-floor"/>' +
        '<path class="rail-front" d="M0 760 H1600 M0 800 H1600"/>' +
        Array.apply(null, Array(17)).map(function (_, i) { return '<rect x="' + (i * 100 - 6) + '" y="740" width="14" height="150" class="rail-post"/>'; }).join('') +
        '<g class="mug" transform="translate(1180 690)"><rect x="0" y="0" width="70" height="60" rx="10"/><path d="M70 14 q30 0 30 18 q0 18 -30 18" class="mug-handle"/><path d="M18 -14 q10 -20 0 -40 M42 -14 q10 -20 0 -40" class="steam"/></g>' +
        '</svg>';
    },
    living: function () {
      return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
        '<rect width="800" height="600" fill="#5b3a26"/>' +
        Array.apply(null, Array(12)).map(function (_, i) { return '<rect x="0" y="' + i * 40 + '" width="800" height="38" fill="' + (i % 2 ? '#6a452d' : '#62402a') + '"/>'; }).join('') +
        /* prozor sa snijegom */
        '<rect x="70" y="90" width="220" height="200" rx="10" fill="#cfe6f5"/><path d="M70 230 Q180 200 290 235 V290 H70Z" fill="#fff"/>' +
        '<path d="M110 230 l18 -60 l18 60z M200 225 l22 -80 l22 80z" fill="#2f5d4a"/><path d="M180 90 V290 M70 190 H290" stroke="#3b2414" stroke-width="10"/>' +
        '<rect x="62" y="82" width="236" height="216" rx="12" fill="none" stroke="#3b2414" stroke-width="12"/>' +
        /* kamin */
        '<rect x="440" y="150" width="260" height="330" fill="#8a8f96"/>' +
        Array.apply(null, Array(8)).map(function (_, i) { return '<rect x="' + (440 + (i % 2) * 40) + '" y="' + (150 + i * 40) + '" width="260" height="2" fill="#6f747b"/>'; }).join('') +
        '<rect x="420" y="330" width="300" height="24" rx="4" fill="#4a2d1b"/>' +
        '<path d="M480 480 V420 Q570 360 660 420 V480Z" fill="#1e1410"/>' +
        '<g class="fire"><path d="M520 478 Q530 430 560 410 Q552 440 575 455 Q590 420 615 400 Q612 445 630 478Z" fill="#ff8a2a"/><path d="M545 478 Q556 448 575 435 Q575 458 592 468 Q600 450 612 440 Q612 462 618 478Z" fill="#ffd36b"/></g>' +
        '<rect x="505" y="470" width="130" height="12" rx="6" fill="#5a3a1f"/>' +
        '<circle cx="570" cy="440" r="140" fill="url(#fireglow)" class="fireglow"/>' +
        '<defs><radialGradient id="fireglow"><stop offset="0" stop-color="#ffb347" stop-opacity=".45"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>' +
        /* pod, tepih, sofa */
        '<rect y="480" width="800" height="120" fill="#7a5233"/><ellipse cx="330" cy="545" rx="260" ry="40" fill="#b5523b"/><ellipse cx="330" cy="545" rx="200" ry="28" fill="none" stroke="#e8c39e" stroke-width="4" stroke-dasharray="10 8"/>' +
        '<rect x="80" y="400" width="300" height="80" rx="20" fill="#d9c7a7"/><rect x="60" y="380" width="40" height="110" rx="16" fill="#cbb793"/><rect x="360" y="380" width="40" height="110" rx="16" fill="#cbb793"/>' +
        '<rect x="110" y="370" width="110" height="60" rx="16" fill="#e4d5b9"/><rect x="235" y="370" width="110" height="60" rx="16" fill="#e4d5b9"/><rect x="250" y="380" width="60" height="40" rx="10" fill="#b5523b"/>' +
        /* lampa i biljka */
        '<path d="M740 480 V300" stroke="#2b1d14" stroke-width="6"/><path d="M705 300 h70 l-15 -50 h-40z" fill="#f2d49b"/><circle cx="740" cy="300" r="60" fill="#ffd27a" opacity=".18"/>' +
        '</svg>';
    },
    bedroom: function () {
      return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
        '<rect width="800" height="600" fill="#e9dcc8"/>' +
        Array.apply(null, Array(16)).map(function (_, i) { return '<rect x="' + i * 50 + '" y="0" width="48" height="600" fill="' + (i % 2 ? '#dccbb2' : '#e4d4bc') + '"/>'; }).join('') +
        '<path d="M0 0 L400 -60 L800 0 V60 L400 0 L0 60Z" fill="#8a5a36"/>' +
        /* prozor sa planinom */
        '<rect x="520" y="110" width="200" height="170" rx="8" fill="#bfe0f0"/><path d="M520 250 L590 170 L640 220 L680 185 L720 230 V280 H520Z" fill="#7d9bb0"/><path d="M575 188 L590 170 L606 190Z M668 197 L680 185 L693 199Z" fill="#fff"/>' +
        '<rect x="514" y="104" width="212" height="182" rx="10" fill="none" stroke="#6b4428" stroke-width="10"/><path d="M620 110 V280" stroke="#6b4428" stroke-width="8"/>' +
        /* krevet */
        '<rect x="90" y="250" width="380" height="120" rx="14" fill="#7a4e2e"/>' +
        '<rect x="70" y="360" width="420" height="120" rx="18" fill="#f7f1e7"/><rect x="70" y="400" width="420" height="80" rx="18" fill="#3e6b5a"/>' +
        '<path d="M70 420 H490 M70 450 H490" stroke="#355d4e" stroke-width="3"/>' +
        '<rect x="110" y="320" width="150" height="60" rx="20" fill="#fffaf2"/><rect x="290" y="320" width="150" height="60" rx="20" fill="#fffaf2"/><rect x="220" y="340" width="120" height="40" rx="14" fill="#c9824b"/>' +
        '<rect x="60" y="480" width="440" height="20" rx="6" fill="#5c3a22"/>' +
        /* noćni ormarić i lampa */
        '<rect x="520" y="400" width="110" height="90" rx="8" fill="#8a5a36"/><rect x="530" y="430" width="90" height="4" fill="#6b4428"/>' +
        '<path d="M575 400 V350" stroke="#3b2414" stroke-width="5"/><path d="M545 350 h60 l-12 -42 h-36z" fill="#f2d49b"/><circle cx="575" cy="345" r="70" fill="#ffd27a" opacity=".2"/>' +
        '<rect y="500" width="800" height="100" fill="#a8774d"/><rect x="120" y="520" width="360" height="60" rx="30" fill="#efe3d0" opacity=".8"/>' +
        '</svg>';
    },
    kitchen: function () {
      return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
        '<rect width="800" height="600" fill="#f1e6d6"/>' +
        '<rect x="40" y="60" width="430" height="140" rx="8" fill="#5e7f6c"/><path d="M147 60 V200 M255 60 V200 M362 60 V200" stroke="#4f6d5c" stroke-width="4"/>' +
        '<rect x="40" y="230" width="430" height="60" fill="#e7ded1"/>' +
        Array.apply(null, Array(11)).map(function (_, i) { return '<rect x="' + (40 + i * 40) + '" y="230" width="2" height="60" fill="#d3c7b6"/>'; }).join('') +
        '<rect x="30" y="290" width="450" height="22" rx="4" fill="#3b2a1e"/><rect x="40" y="312" width="430" height="150" fill="#5e7f6c"/><path d="M147 312 V462 M255 312 V462 M362 312 V462" stroke="#4f6d5c" stroke-width="4"/>' +
        '<rect x="300" y="268" width="80" height="22" rx="4" fill="#c9cdd2"/><path d="M90 290 V250 q0 -20 20 -20" stroke="#9aa0a6" stroke-width="6" fill="none"/>' +
        '<circle cx="420" cy="266" r="20" fill="#d06b3a"/><rect x="150" y="250" width="40" height="40" rx="6" fill="#f2d49b"/>' +
        /* trpezarija */
        '<path d="M620 0 V120" stroke="#2b1d14" stroke-width="3"/><path d="M590 150 q30 -40 60 0z" fill="#2b1d14"/><circle cx="620" cy="160" r="70" fill="#ffd27a" opacity=".22"/>' +
        '<rect x="520" y="360" width="220" height="18" rx="6" fill="#8a5a36"/><rect x="540" y="378" width="12" height="110" fill="#6b4428"/><rect x="708" y="378" width="12" height="110" fill="#6b4428"/>' +
        '<rect x="500" y="330" width="40" height="160" rx="6" fill="#a8774d"/><rect x="720" y="330" width="40" height="160" rx="6" fill="#a8774d"/>' +
        '<circle cx="600" cy="350" r="14" fill="#fff"/><circle cx="660" cy="350" r="14" fill="#fff"/><rect x="622" y="332" width="16" height="26" rx="4" fill="#b5523b"/>' +
        '<rect y="490" width="800" height="110" fill="#b88a5e"/>' +
        Array.apply(null, Array(9)).map(function (_, i) { return '<rect x="' + i * 100 + '" y="490" width="2" height="110" fill="#a3784f"/>'; }).join('') +
        '</svg>';
    },
    sauna: function () {
      return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
        '<rect width="800" height="600" fill="#c98e55"/>' +
        Array.apply(null, Array(14)).map(function (_, i) { return '<rect x="0" y="' + i * 44 + '" width="800" height="42" fill="' + (i % 2 ? '#d29a62' : '#cc935b') + '"/>'; }).join('') +
        '<rect x="0" y="300" width="560" height="40" rx="6" fill="#a96a35"/><rect x="0" y="340" width="560" height="14" fill="#8a5426"/>' +
        '<rect x="0" y="430" width="640" height="40" rx="6" fill="#a96a35"/><rect x="0" y="470" width="640" height="14" fill="#8a5426"/>' +
        Array.apply(null, Array(6)).map(function (_, i) { return '<rect x="' + (40 + i * 100) + '" y="354" width="14" height="76" fill="#8a5426"/>'; }).join('') +
        /* peć sa kamenjem */
        '<rect x="620" y="320" width="130" height="200" rx="10" fill="#3b3f45"/><rect x="610" y="300" width="150" height="30" rx="8" fill="#2c2f34"/>' +
        '<g fill="#7d838b"><circle cx="640" cy="296" r="18"/><circle cx="676" cy="290" r="20"/><circle cx="712" cy="294" r="18"/><circle cx="742" cy="298" r="14"/><circle cx="660" cy="280" r="14"/><circle cx="700" cy="276" r="16"/></g>' +
        '<rect x="650" y="420" width="70" height="40" rx="6" fill="#ff8a2a" class="glow-box"/>' +
        '<g class="steam-group" fill="#fff"><circle cx="660" cy="240" r="20" opacity=".35"/><circle cx="700" cy="200" r="28" opacity=".28"/><circle cx="680" cy="150" r="36" opacity=".2"/></g>' +
        /* kanta i kutlača */
        '<path d="M120 300 l10 -50 h70 l10 50z" fill="#8a5426"/><path d="M128 266 h84" stroke="#3b2414" stroke-width="5"/><path d="M200 252 l50 -40" stroke="#8a5426" stroke-width="8" stroke-linecap="round"/>' +
        '<rect x="300" y="268" width="90" height="34" rx="16" fill="#f7f1e7"/><rect x="420" y="276" width="70" height="26" rx="12" fill="#f7f1e7"/>' +
        '<rect y="520" width="800" height="80" fill="#8a5426"/>' +
        '</svg>';
    },
    bathroom: function () {
      return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
        '<rect width="800" height="600" fill="#e6e1d8"/>' +
        Array.apply(null, Array(8)).map(function (_, r) { return Array.apply(null, Array(9)).map(function (__, c) { return '<rect x="' + (c * 90 + (r % 2) * 45 - 45) + '" y="' + (r * 45) + '" width="86" height="41" rx="3" fill="' + ((r + c) % 3 ? '#efebe4' : '#e9e4dc') + '"/>'; }).join(''); }).join('') +
        '<rect x="0" y="360" width="800" height="240" fill="#a8774d"/>' +
        /* kada */
        '<rect x="60" y="340" width="400" height="120" rx="40" fill="#fbfaf7"/><rect x="80" y="352" width="360" height="40" rx="20" fill="#cfe3ea"/>' +
        '<path d="M100 340 V250 q0 -30 30 -30 h20" stroke="#9aa0a6" stroke-width="8" fill="none"/><circle cx="160" cy="220" r="14" fill="#9aa0a6"/>' +
        '<rect x="90" y="460" width="20" height="30" rx="6" fill="#c9cdd2"/><rect x="410" y="460" width="20" height="30" rx="6" fill="#c9cdd2"/>' +
        /* lavabo i ogledalo */
        '<rect x="560" y="300" width="180" height="120" rx="10" fill="#7a5233"/><rect x="545" y="285" width="210" height="20" rx="8" fill="#fbfaf7"/><ellipse cx="650" cy="285" rx="60" ry="12" fill="#e2ecef"/>' +
        '<rect x="572" y="90" width="156" height="170" rx="78" fill="#cfe3ea" stroke="#7a5233" stroke-width="10"/><path d="M610 130 l40 40" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".7"/>' +
        /* biljka i peškiri */
        '<rect x="480" y="420" width="50" height="60" rx="8" fill="#d9c7a7"/><path d="M505 420 q-30 -60 -10 -110 q20 50 10 110 q20 -70 40 -90 q0 60 -40 90" fill="#3e6b5a"/>' +
        '<rect x="470" y="160" width="70" height="8" rx="4" fill="#7a5233"/><rect x="478" y="168" width="54" height="80" rx="6" fill="#c9824b"/>' +
        '</svg>';
    }
  };

  /* doručak: sto uz prozor, kafa, jaja, sir, hljeb */
  SCENES.breakfast = function () {
    return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
      '<rect width="800" height="600" fill="#efe6d8"/>' +
      Array.apply(null, Array(10)).map(function (_, i) { return '<rect x="' + i * 80 + '" y="0" width="78" height="360" fill="' + (i % 2 ? '#e8ddcb' : '#ece2d2') + '"/>'; }).join('') +
      /* prozor sa snijegom i jelkama */
      '<rect x="470" y="50" width="260" height="230" rx="10" fill="#d6e8f2"/><path d="M470 220 Q600 190 730 225 V280 H470Z" fill="#fff"/>' +
      '<path d="M520 225 l22-70 l22 70z M620 222 l26-90 l26 90z M690 226 l16-50 l16 50z" fill="#2f5d4a"/><path d="M528 190 l14-35 l14 35z M630 180 l16-48 l16 48z" fill="#fff" opacity=".85"/>' +
      '<path d="M600 50 V280 M470 165 H730" stroke="#6b4a2f" stroke-width="10"/><rect x="462" y="42" width="276" height="246" rx="12" fill="none" stroke="#6b4a2f" stroke-width="12"/>' +
      /* sto */
      '<rect y="360" width="800" height="240" fill="#a5754a"/><path d="M0 360 H800" stroke="#8a5f3a" stroke-width="6"/>' +
      Array.apply(null, Array(6)).map(function (_, i) { return '<path d="M0 ' + (400 + i * 38) + ' H800" stroke="#9a6b42" stroke-width="2" opacity=".5"/>'; }).join('') +
      /* tanjir sa jajima i sirom */
      '<ellipse cx="330" cy="455" rx="160" ry="62" fill="#f8f4ec"/><ellipse cx="330" cy="450" rx="128" ry="46" fill="#fffdf8"/>' +
      '<ellipse cx="285" cy="445" rx="42" ry="20" fill="#fff"/><circle cx="288" cy="442" r="13" fill="#f4b63c"/>' +
      '<ellipse cx="350" cy="455" rx="38" ry="18" fill="#fff"/><circle cx="352" cy="452" r="12" fill="#f4b63c"/>' +
      '<path d="M385 420 l60 -6 l10 28 l-62 10z" fill="#f6efd6"/><path d="M385 420 l60 -6 l3 9 l-61 7z" fill="#e9dfbd"/>' +
      '<path d="M250 470 q20 -10 40 0 q-20 10 -40 0z" fill="#6aa84f"/>' +
      /* šoljica kafe sa parom */
      '<ellipse cx="590" cy="470" rx="70" ry="22" fill="#f8f4ec"/><path d="M548 400 h84 v40 a42 30 0 0 1 -84 0z" fill="#fffdf8"/>' +
      '<ellipse cx="590" cy="400" rx="42" ry="10" fill="#5a3420"/><path d="M632 412 q26 0 26 18 q0 18 -26 18" stroke="#fffdf8" stroke-width="9" fill="none"/>' +
      '<g class="steam-group" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"><path d="M575 380 q-10 -20 0 -40 q10 -20 0 -40"/><path d="M605 380 q-10 -20 0 -40 q10 -20 0 -40"/></g>' +
      /* korpa sa hljebom */
      '<path d="M60 430 h150 l-14 60 h-122z" fill="#c08a4f"/><path d="M60 430 h150" stroke="#9a6a35" stroke-width="8"/>' +
      '<ellipse cx="110" cy="420" rx="44" ry="22" fill="#d9a35f"/><ellipse cx="165" cy="424" rx="38" ry="18" fill="#c98f4c"/><path d="M90 412 l10 10 M112 408 l10 10 M150 418 l8 8" stroke="#a8743c" stroke-width="4" stroke-linecap="round"/>' +
      /* staklenka meda / džema */
      '<rect x="700" y="400" width="54" height="66" rx="12" fill="#e2a23a" opacity=".9"/><rect x="696" y="390" width="62" height="16" rx="6" fill="#8a5f3a"/>' +
      '</svg>';
  };


  /* moderno kupatilo: beton, hrast, okruglo LED ogledalo, lavabo na drvenoj ploči, tuš kabina, viseći WC */
  SCENES.bathModern = function () {
    var id = uid('led');
    return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
      '<defs><radialGradient id="' + id + '"><stop offset="0.62" stop-color="#fff6e0" stop-opacity=".95"/><stop offset="0.78" stop-color="#ffe9b8" stop-opacity=".35"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="800" height="600" fill="#6f6d69"/>' +
      Array.apply(null, Array(5)).map(function (_, i) { return '<path d="M' + (i * 160) + ' 0V470" stroke="#62605c" stroke-width="2"/>'; }).join('') +
      '<path d="M0 160H520M0 320H520" stroke="#62605c" stroke-width="2"/>' +
      /* hrastov zid sa nišom */
      '<rect x="540" y="0" width="260" height="470" fill="#9b6a3c"/>' +
      Array.apply(null, Array(9)).map(function (_, i) { return '<path d="M540 ' + (i * 52 + 26) + 'H800" stroke="#86592f" stroke-width="3"/>'; }).join('') +
      '<rect x="590" y="40" width="160" height="190" fill="#5d5a55"/><rect x="590" y="130" width="160" height="10" fill="#b07a46"/>' +
      '<rect x="604" y="98" width="22" height="32" rx="4" fill="#2a2a2a"/><rect x="634" y="108" width="16" height="22" rx="4" fill="#d9d2c4"/>' +
      '<rect x="690" y="186" width="30" height="44" rx="6" fill="#34403a"/><path d="M705 186 q-40 -40 -14 -80 q10 40 14 80 q8 -60 40 -78 q-6 50 -40 78" fill="#5f8a55"/>' +
      /* viseći WC i tipka */
      '<rect x="640" y="290" width="54" height="30" rx="4" fill="#efeee9"/>' +
      '<path d="M600 380 h120 v20 q0 52 -60 52 h-40 q-20 0 -20 -20z" fill="#f4f3ef"/>' +
      /* staklo tuš kabine i tuš */
      '<rect x="452" y="30" width="70" height="470" fill="#cfe2e6" opacity=".18"/><rect x="452" y="30" width="5" height="470" fill="#1d1d1d"/><path d="M455 30H560" stroke="#1d1d1d" stroke-width="5"/>' +
      '<rect x="476" y="40" width="44" height="8" rx="3" fill="#1d1d1d"/>' +
      /* LED ogledalo */
      '<circle cx="250" cy="170" r="138" fill="url(#' + id + ')" class="led-glow"/>' +
      '<circle cx="250" cy="170" r="92" fill="#b9bcb9"/><circle cx="250" cy="170" r="92" fill="none" stroke="#fffaf0" stroke-width="7"/>' +
      '<path d="M200 120 l40 40 M222 106 l50 50" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".35"/>' +
      /* ploča od hrasta, crni ram, lavabo, crna slavina */
      '<rect x="110" y="338" width="300" height="22" rx="3" fill="#a8743f"/><path d="M120 360V470M400 360V470M120 430H400" stroke="#1d1d1d" stroke-width="7"/>' +
      '<rect x="150" y="438" width="70" height="30" rx="5" fill="#d8ccb6"/>' +
      '<ellipse cx="260" cy="318" rx="80" ry="24" fill="#f7f6f2"/><path d="M180 318 q80 50 160 0 v6 q-80 44 -160 0z" fill="#e3e1db"/>' +
      '<path d="M344 338 V268 q0 -14 -14 -14 h-18" stroke="#1d1d1d" stroke-width="8" fill="none" stroke-linecap="round"/>' +
      '<rect x="128" y="300" width="22" height="38" rx="6" fill="#3a463f"/><circle cx="133" cy="290" r="11" fill="#eaeae6"/><circle cx="146" cy="292" r="10" fill="#f3f1ea"/>' +
      /* pod */
      '<rect x="0" y="470" width="800" height="130" fill="#55534f"/><path d="M0 470H800" stroke="#4a4844" stroke-width="4"/>' +
      '<path d="M120 470V600M300 470V600M500 470V600M680 470V600" stroke="#4d4b47" stroke-width="2"/>' +
      '</svg>';
  };

  /* dnevni boravak: siva sjedeća garnitura, šareni (ćilim) puf, okrugli stočić, veliki prozor na jelke */
  SCENES.lounge = function () {
    var cp = uid('win');
    return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="scene" aria-hidden="true">' +
      '<defs><clipPath id="' + cp + '"><rect x="470" y="40" width="290" height="330"/></clipPath></defs>' +
      '<rect width="800" height="600" fill="#f1eee8"/>' +
      /* prozor sa jelkama */
      '<g clip-path="url(#' + cp + ')"><rect x="470" y="40" width="290" height="330" fill="#cfe0d6"/>' +
      '<path d="M480 370 l40 -200 l40 200z M540 370 l50 -260 l50 260z M630 370 l40 -190 l40 190z M690 370 l45 -230 l45 230z" fill="#3f6b49"/>' +
      '<path d="M500 280 l20 -110 l20 110z M565 240 l25 -130 l25 130z" fill="#5c8a5f"/>' +
      '<g class="snowcap"><path d="M510 225 l10 -55 l10 55z M578 180 l12 -70 l12 70z M700 230 l12 -75 l12 75z" fill="#fff"/></g></g>' +
      '<path d="M615 40V370M470 205H760" stroke="#fbfaf7" stroke-width="12"/><rect x="464" y="34" width="302" height="342" fill="none" stroke="#fbfaf7" stroke-width="14"/>' +
      /* slika na zidu */
      '<rect x="120" y="70" width="140" height="100" fill="#7d6a58"/><rect x="130" y="80" width="120" height="80" fill="#e8e1d4"/><path d="M140 150 l40 -40 l30 25 l25 -20 l15 35z" fill="#b9a68f"/>' +
      /* pod i tepih */
      '<rect x="0" y="430" width="800" height="170" fill="#b48a5e"/>' +
      Array.apply(null, Array(5)).map(function (_, i) { return '<path d="M0 ' + (450 + i * 34) + 'H800" stroke="#a37a50" stroke-width="2"/>'; }).join('') +
      '<ellipse cx="380" cy="520" rx="330" ry="60" fill="#6f7f78"/><ellipse cx="380" cy="520" rx="300" ry="48" fill="none" stroke="#859690" stroke-width="4" stroke-dasharray="10 8"/>' +
      /* siva garnitura */
      '<rect x="40" y="290" width="380" height="80" rx="18" fill="#a9a8a4"/>' +
      '<rect x="30" y="350" width="400" height="80" rx="14" fill="#bdbcb8"/><path d="M160 352V428M290 352V428" stroke="#aaa9a5" stroke-width="3"/>' +
      '<rect x="60" y="300" width="70" height="56" rx="12" fill="#3f6e68"/><rect x="330" y="306" width="62" height="50" rx="12" fill="#cfcac0"/>' +
      /* okrugli stočić */
      '<ellipse cx="520" cy="440" rx="80" ry="18" fill="#5a3f2b"/><rect x="514" y="440" width="12" height="50" fill="#1f1f1f"/><ellipse cx="520" cy="492" rx="44" ry="8" fill="#1f1f1f"/>' +
      '<rect x="500" y="414" width="18" height="26" rx="3" fill="#2f3b35"/><rect x="530" y="420" width="24" height="18" rx="4" fill="#f4efe4"/>' +
      /* ćilim puf */
      '<g transform="translate(660 400)"><path d="M-70 110 q-20 -90 30 -150 q40 -30 80 10 q40 60 20 140z" fill="#efe3c8"/>' +
      '<path d="M-40 10 l20 -20 l20 20 l-20 20z M10 40 l22 -22 l22 22 l-22 22z M-50 70 l18 -18 l18 18 l-18 18z" fill="#c4372b"/>' +
      '<path d="M-20 60 l14 -14 l14 14 l-14 14z M30 -10 l12 -12 l12 12 l-12 12z" fill="#2d4f8f"/>' +
      '<path d="M-60 40 l10 -10 l10 10 l-10 10z M20 90 l12 -12 l12 12 l-12 12z M-10 -30 l8 -8 l8 8 l-8 8z" fill="#e8a628"/>' +
      '<path d="M-50 100 l10 -10 l10 10 l-10 10z M40 70 l8 -8 l8 8 l-8 8z" fill="#3d7d4a"/></g>' +
      '</svg>';
  };

  window.PLANINKA_SCENES = SCENES;
})();
