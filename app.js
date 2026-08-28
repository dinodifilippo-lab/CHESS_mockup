// GeoIntel Mockup -- Phase 1
// Tab routing + Landing state graph rendering

(function() {
  'use strict';

  // ========================================================================
  // TAB ROUTING
  // ========================================================================

  var navTabs = document.querySelectorAll('.nav-tab');
  var views = document.querySelectorAll('.view');

  navTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-view');
      navTabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      views.forEach(function(v) {
        if (v.getAttribute('data-view') === target) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });
    });
  });

  // ========================================================================
  // GLOBAL GRAPH -- SVG radial layout, neutral (no focus) state
  // ========================================================================

  var CENTRAL_ACTORS = [
    { id: 'USA', label: 'USA', angle: 0 },
    { id: 'JPN', label: 'JPN', angle: 30 },
    { id: 'KOR', label: 'KOR', angle: 60 },
    { id: 'TWN', label: 'TWN', angle: 90 },
    { id: 'PRC', label: 'PRC', angle: 120 },
    { id: 'IND', label: 'IND', angle: 150 },
    { id: 'RUS', label: 'RUS', angle: 180 },
    { id: 'TUR', label: 'TUR', angle: 210 },
    { id: 'IRN', label: 'IRN', angle: 240 },
    { id: 'KSA', label: 'KSA', angle: 270 },
    { id: 'ISR', label: 'ISR', angle: 300 },
    { id: 'EU',  label: 'EU',  angle: 330 }
  ];

  var PERIPHERAL_ACTORS = [
    { id: 'CAN', angle: 12 },
    { id: 'AUS', angle: 48 },
    { id: 'PHL', angle: 78 },
    { id: 'MMR', angle: 102 },
    { id: 'MEX', angle: 355 },
    { id: 'BRA', angle: 340 },
    { id: 'UKR', angle: 195 },
    { id: 'BLR', angle: 175 },
    { id: 'POL', angle: 160 },
    { id: 'DEU', angle: 320 },
    { id: 'GBR', angle: 335 },
    { id: 'SYR', angle: 225 },
    { id: 'EGY', angle: 285 },
    { id: 'SUD', angle: 258 }
  ];

  var ARCS = [
    { s: 'USA', t: 'PRC', pol: 'complex', w: 4.9 },
    { s: 'USA', t: 'RUS', pol: 'hostile', w: 4.4 },
    { s: 'USA', t: 'IRN', pol: 'hostile', w: 4.2 },
    { s: 'USA', t: 'ISR', pol: 'aligned', w: 4.6 },
    { s: 'USA', t: 'EU',  pol: 'aligned', w: 4.3 },
    { s: 'USA', t: 'JPN', pol: 'aligned', w: 4.1 },
    { s: 'USA', t: 'KOR', pol: 'aligned', w: 3.9 },
    { s: 'USA', t: 'TWN', pol: 'aligned', w: 4.0 },
    { s: 'USA', t: 'IND', pol: 'complex', w: 3.5 },
    { s: 'USA', t: 'KSA', pol: 'complex', w: 3.7 },
    { s: 'USA', t: 'TUR', pol: 'complex', w: 3.4 },
    { s: 'USA', t: 'UKR', pol: 'aligned', w: 4.2 },
    { s: 'USA', t: 'GBR', pol: 'aligned', w: 4.0 },
    { s: 'PRC', t: 'RUS', pol: 'aligned', w: 4.1 },
    { s: 'PRC', t: 'TWN', pol: 'hostile', w: 4.6 },
    { s: 'PRC', t: 'JPN', pol: 'complex', w: 3.6 },
    { s: 'PRC', t: 'KOR', pol: 'complex', w: 3.5 },
    { s: 'PRC', t: 'IND', pol: 'complex', w: 3.8 },
    { s: 'PRC', t: 'IRN', pol: 'aligned', w: 3.4 },
    { s: 'PRC', t: 'EU',  pol: 'complex', w: 3.7 },
    { s: 'PRC', t: 'AUS', pol: 'complex', w: 3.2 },
    { s: 'RUS', t: 'UKR', pol: 'hostile', w: 4.8 },
    { s: 'RUS', t: 'IRN', pol: 'aligned', w: 3.6 },
    { s: 'RUS', t: 'BLR', pol: 'aligned', w: 3.4 },
    { s: 'RUS', t: 'EU',  pol: 'hostile', w: 3.8 },
    { s: 'RUS', t: 'TUR', pol: 'complex', w: 3.3 },
    { s: 'RUS', t: 'SYR', pol: 'aligned', w: 3.2 },
    { s: 'IRN', t: 'ISR', pol: 'hostile', w: 4.5 },
    { s: 'IRN', t: 'KSA', pol: 'complex', w: 3.4 },
    { s: 'IRN', t: 'SYR', pol: 'aligned', w: 3.3 },
    { s: 'ISR', t: 'KSA', pol: 'complex', w: 3.1 },
    { s: 'ISR', t: 'EGY', pol: 'complex', w: 3.0 },
    { s: 'EU',  t: 'UKR', pol: 'aligned', w: 4.1 },
    { s: 'EU',  t: 'GBR', pol: 'complex', w: 3.6 },
    { s: 'EU',  t: 'DEU', pol: 'aligned', w: 3.9 },
    { s: 'EU',  t: 'POL', pol: 'aligned', w: 3.4 },
    { s: 'JPN', t: 'KOR', pol: 'complex', w: 3.3 },
    { s: 'JPN', t: 'TWN', pol: 'aligned', w: 3.5 },
    { s: 'KOR', t: 'TWN', pol: 'complex', w: 3.0 },
    { s: 'IND', t: 'PHL', pol: 'complex', w: 3.0 },
    { s: 'TUR', t: 'SYR', pol: 'hostile', w: 3.2 },
    { s: 'KSA', t: 'EGY', pol: 'aligned', w: 3.1 }
  ];

  function polToColor(p) {
    if (p === 'hostile') return '#C25D5D';
    if (p === 'aligned') return '#4A9F70';
    return '#E8A93E';
  }
  function polToOpacity(w) {
    return Math.max(0.3, Math.min(0.75, (w - 2.8) / 2.8));
  }

  function polar(cx, cy, r, angDeg) {
    var rad = (angDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function renderGlobalGraph() {
    var svg = document.getElementById('global-graph');
    if (!svg) return;
    svg.innerHTML = '';

    var cx = 450, cy = 310;
    var rCentral = 175;
    var rPeripheral = 265;

    var positions = {};
    CENTRAL_ACTORS.forEach(function(a) {
      var p = polar(cx, cy, rCentral, a.angle);
      positions[a.id] = { x: p.x, y: p.y, central: true, label: a.label };
    });
    PERIPHERAL_ACTORS.forEach(function(a) {
      var p = polar(cx, cy, rPeripheral, a.angle);
      positions[a.id] = { x: p.x, y: p.y, central: false, label: a.id };
    });

    // Grid guide (subtle radial rings)
    var ringsG = svgEl('g', { 'class': 'grid-rings' });
    [90, 175, 265].forEach(function(r) {
      ringsG.appendChild(svgEl('circle', {
        cx: cx, cy: cy, r: r,
        fill: 'none',
        stroke: '#1F2842',
        'stroke-width': 1,
        'stroke-dasharray': '2 6',
        opacity: 0.5
      }));
    });
    svg.appendChild(ringsG);

    // ARCS
    var arcsG = svgEl('g', { 'class': 'arcs' });
    ARCS.forEach(function(a) {
      var s = positions[a.s], t = positions[a.t];
      if (!s || !t) return;
      var color = polToColor(a.pol);
      var op = polToOpacity(a.w);
      var thickness = a.w >= 4.3 ? 2 : (a.w >= 3.7 ? 1.3 : 0.9);
      var mx = (s.x + t.x) / 2;
      var my = (s.y + t.y) / 2;
      var dx = t.x - s.x, dy = t.y - s.y;
      var dist = Math.sqrt(dx*dx + dy*dy);
      var offset = dist * 0.08;
      var nx = -dy / dist, ny = dx / dist;
      var ctrlX = mx + nx * offset;
      var ctrlY = my + ny * offset;
      arcsG.appendChild(svgEl('path', {
        d: 'M ' + s.x + ' ' + s.y + ' Q ' + ctrlX + ' ' + ctrlY + ' ' + t.x + ' ' + t.y,
        stroke: color,
        'stroke-width': thickness,
        fill: 'none',
        opacity: op
      }));
    });
    svg.appendChild(arcsG);

    // NODES
    var nodesG = svgEl('g', { 'class': 'nodes' });
    Object.keys(positions).forEach(function(id) {
      var p = positions[id];
      var g = svgEl('g', { transform: 'translate(' + p.x + ',' + p.y + ')' });

      if (p.central) {
        // Neutral state: dim outline, panel-color fill, muted label
        g.appendChild(svgEl('circle', {
          r: 20,
          fill: '#0D1220',
          stroke: '#8E6A2D',
          'stroke-width': 1.5
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle',
          'dominant-baseline': 'central',
          fill: '#A0A9BD',
          'font-family': 'Georgia, serif',
          'font-size': 11,
          'font-weight': 500
        }, p.label));
      } else {
        g.appendChild(svgEl('circle', {
          r: 11,
          fill: '#12172A',
          stroke: '#3D4A73',
          'stroke-width': 1
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle',
          'dominant-baseline': 'central',
          fill: '#6B7590',
          'font-family': 'Courier New, monospace',
          'font-size': 8,
          'letter-spacing': 0.5
        }, p.label));
      }
      nodesG.appendChild(g);
    });
    svg.appendChild(nodesG);
  }

  function svgEl(tag, attrs, text) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    if (text !== undefined && text !== null) {
      el.textContent = text;
    }
    return el;
  }

  // ========================================================================
  // CHAT INPUT -- enable RUN button when typing
  // ========================================================================

  var chatInput = document.querySelector('.chat-input');
  var runBtn = document.querySelector('.run-btn');
  if (chatInput && runBtn) {
    chatInput.addEventListener('input', function() {
      if (chatInput.value.trim().length > 0) {
        runBtn.classList.add('active');
      } else {
        runBtn.classList.remove('active');
      }
    });
    document.querySelectorAll('.prompt-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var txt = btn.querySelector('.prompt-text em').textContent;
        chatInput.value = txt;
        chatInput.dispatchEvent(new Event('input'));
        chatInput.focus();
      });
    });
  }

  // ========================================================================
  // INIT
  // ========================================================================

  renderGlobalGraph();

})();
