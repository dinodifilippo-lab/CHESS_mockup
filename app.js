// GeoIntel Mockup -- Phase 2 revised
// Multi-turn with enrichment, clarify, spherical landing graph, full report overlay

(function() {
  'use strict';

  var STATE = {
    view: 'chat',
    flow: 'landing',
    activeScenario: null,
    scenarioHistory: [],
    activeDossier: 'global',
    turns: [],
    dtProgress: 0,
    timers: [],
    pendingScenarioId: null
  };

  function clearTimers() {
    STATE.timers.forEach(function(t) { clearTimeout(t); clearInterval(t); });
    STATE.timers = [];
  }

  // NAV
  var navTabs = document.querySelectorAll('.nav-tab');
  var views = document.querySelectorAll('.view');
  navTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-view');
      STATE.view = target;
      navTabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      views.forEach(function(v) {
        if (v.getAttribute('data-view') === target) v.classList.add('active');
        else v.classList.remove('active');
      });
    });
  });

  // DOSSIER
  var dossierBtn = document.getElementById('dossier-btn');
  var dossierMenu = document.getElementById('dossier-menu');
  var dossierName = document.getElementById('dossier-name');
  var ftDossier = document.getElementById('ft-dossier');

  function renderDossierMenu() {
    dossierMenu.innerHTML = '';
    window.GEODATA.dossiers.forEach(function(d) {
      var item = document.createElement('button');
      item.className = 'dossier-menu-item';
      item.textContent = d.name;
      item.addEventListener('click', function() {
        selectDossier(d.id);
        dossierMenu.classList.remove('open');
      });
      dossierMenu.appendChild(item);
    });
  }
  renderDossierMenu();
  dossierBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dossierMenu.classList.toggle('open');
  });
  document.addEventListener('click', function() { dossierMenu.classList.remove('open'); });

  function selectDossier(dossierId) {
    var d = window.GEODATA.dossiers.find(function(x) { return x.id === dossierId; });
    if (!d) return;
    STATE.activeDossier = dossierId;
    dossierName.textContent = d.name;
    ftDossier.textContent = d.name.toLowerCase();
    resetToLanding();
  }
  function selectDossierSilent(dossierId) {
    var d = window.GEODATA.dossiers.find(function(x) { return x.id === dossierId; });
    if (!d) return;
    STATE.activeDossier = dossierId;
    dossierName.textContent = d.name;
    ftDossier.textContent = d.name.toLowerCase();
  }

  // SVG HELPERS
  function svgEl(tag, attrs, text) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) Object.keys(attrs).forEach(function(k) { el.setAttribute(k, attrs[k]); });
    if (text !== undefined && text !== null) el.textContent = text;
    return el;
  }
  function polar(cx, cy, r, angDeg) {
    var rad = (angDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }
  function polToColor(p) {
    if (p === 'hostile' || p === 'red') return '#C25D5D';
    if (p === 'aligned' || p === 'green') return '#4A9F70';
    if (p === 'complex' || p === 'amber') return '#E8A93E';
    if (p === 'blue') return '#6A8DE8';
    if (p === 'dim-amber') return '#8E6A2D';
    return '#E8A93E';
  }

  // SPHERICAL GLOBAL GRAPH
  // Fibonacci-sphere distribution projected to 2D with depth-based rendering
  var GLOBAL_ACTORS_SPHERE = [
    'USA','PRC','RUS','IRN','ISR','EU','JPN','KOR','TWN','IND','TUR','KSA',
    'UKR','DEU','GBR','FRA','POL','BLR','CAN','MEX','BRA','AUS','EGY','SYR',
    'PHL','IDN','VNM','THA','PAK','AFG','IRQ','YEM','LBY','ETH','NGA','ZAF',
    'ARG','CHL','COL','PER','NOR','SWE','FIN','EST','GRC','ITA','ESP','NLD',
    'CHE','AUT','HUN','ROU','CZE'
  ];

  function fibSphere(n) {
    var pts = [];
    var phi = Math.PI * (Math.sqrt(5) - 1);
    for (var i = 0; i < n; i++) {
      var y = 1 - (i / (n - 1)) * 2;
      var radius = Math.sqrt(1 - y * y);
      var theta = phi * i;
      pts.push({ x: Math.cos(theta) * radius, y: y, z: Math.sin(theta) * radius });
    }
    return pts;
  }

  function renderGlobalGraph(svgId) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 900 620');
    svg.innerHTML = '';

    var cx = 450, cy = 310, R = 260;
    var actors = GLOBAL_ACTORS_SPHERE;
    var pts3d = fibSphere(actors.length);

    // Slight rotation for nicer angle
    var rotY = 0.35, rotX = 0.18;
    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    var positions = pts3d.map(function(p, i) {
      var x1 = p.x * cosY - p.z * sinY;
      var z1 = p.x * sinY + p.z * cosY;
      var y1 = p.y * cosX - z1 * sinX;
      var z2 = p.y * sinX + z1 * cosX;
      return {
        id: actors[i],
        sx: cx + x1 * R,
        sy: cy + y1 * R,
        depth: z2  // -1 (back) to 1 (front)
      };
    });

    // Subtle sphere outline
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: R,
      fill: 'none', stroke: '#1F2842',
      'stroke-width': 1, opacity: 0.35
    }));
    // Latitude ellipses (fake 3D)
    for (var lat = -0.66; lat <= 0.66; lat += 0.33) {
      var ry = Math.abs(lat) < 0.05 ? R * 0.28 : R * Math.abs(lat) * 0.38 + R * 0.15;
      var yOff = lat * R * 0.62;
      svg.appendChild(svgEl('ellipse', {
        cx: cx, cy: cy + yOff, rx: R * Math.sqrt(1 - lat * lat),
        ry: ry * 0.25, fill: 'none', stroke: '#1F2842',
        'stroke-width': 0.6, opacity: 0.25, 'stroke-dasharray': '2 5'
      }));
    }
    // Longitude arcs
    for (var lng = 0; lng < 6; lng++) {
      var ang = (lng / 6) * Math.PI;
      var rx = Math.abs(Math.sin(ang)) * R;
      if (rx < 5) continue;
      svg.appendChild(svgEl('ellipse', {
        cx: cx, cy: cy, rx: rx, ry: R,
        fill: 'none', stroke: '#1F2842',
        'stroke-width': 0.5, opacity: 0.2, 'stroke-dasharray': '2 6'
      }));
    }

    // Sort by depth so back renders first
    positions.sort(function(a, b) { return a.depth - b.depth; });

    // Draw a network of neutral arcs between actors that are close on sphere
    // Simple: connect actors whose 3D distance is under a threshold
    var arcsG = svgEl('g');
    for (var i = 0; i < positions.length; i++) {
      for (var j = i + 1; j < positions.length; j++) {
        var a = positions[i], b = positions[j];
        var dx = a.sx - b.sx, dy = a.sy - b.sy;
        var d2 = dx * dx + dy * dy;
        if (d2 > 14000) continue;
        // Only draw if both are on front hemisphere (positive depth) or one front + close
        var frontness = (a.depth + b.depth) / 2;
        if (frontness < -0.4) continue;
        var op = Math.max(0.05, (frontness + 1) * 0.14);
        arcsG.appendChild(svgEl('line', {
          x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy,
          stroke: '#E8A93E', 'stroke-width': 0.6, opacity: op
        }));
      }
    }
    svg.appendChild(arcsG);

    // Nodes with depth-based size and opacity
    var nodesG = svgEl('g');
    positions.forEach(function(p) {
      var depthN = (p.depth + 1) / 2; // 0 back, 1 front
      var r = 4 + depthN * 8;
      var op = 0.25 + depthN * 0.7;
      var strokeColor = p.depth > 0.2 ? '#E8A93E' : '#8E6A2D';
      nodesG.appendChild(svgEl('circle', {
        cx: p.sx, cy: p.sy, r: r,
        fill: '#0D1220', stroke: strokeColor,
        'stroke-width': 0.5 + depthN * 1, opacity: op
      }));
      if (depthN > 0.55) {
        nodesG.appendChild(svgEl('text', {
          x: p.sx, y: p.sy + 1,
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#A0A9BD', 'font-family': 'Georgia, serif',
          'font-size': 7 + depthN * 3, opacity: op
        }, p.id));
      }
    });
    svg.appendChild(nodesG);
  }

  // SUBGRAPH RENDERING (for asking/report states) - uses flat radial layout
  var CENTRAL_ACTORS = [
    { id: 'USA', angle: 0 }, { id: 'JPN', angle: 30 }, { id: 'KOR', angle: 60 },
    { id: 'TWN', angle: 90 }, { id: 'PRC', angle: 120 }, { id: 'IND', angle: 150 },
    { id: 'RUS', angle: 180 }, { id: 'TUR', angle: 210 }, { id: 'IRN', angle: 240 },
    { id: 'KSA', angle: 270 }, { id: 'ISR', angle: 300 }, { id: 'EU', angle: 330 }
  ];
  var PERIPHERAL_ACTORS = [
    { id: 'CAN', angle: 12 }, { id: 'AUS', angle: 48 }, { id: 'PHL', angle: 78 },
    { id: 'MMR', angle: 102 }, { id: 'MEX', angle: 355 }, { id: 'BRA', angle: 340 },
    { id: 'UKR', angle: 195 }, { id: 'BLR', angle: 175 }, { id: 'POL', angle: 160 },
    { id: 'DEU', angle: 320 }, { id: 'GBR', angle: 335 }, { id: 'SYR', angle: 225 },
    { id: 'EGY', angle: 285 }, { id: 'SUD', angle: 258 }, { id: 'FRA', angle: 330 },
    { id: 'FIN', angle: 168 }, { id: 'EST', angle: 172 }, { id: 'NLD', angle: 328 },
    { id: 'UAE', angle: 267 }, { id: 'JOR', angle: 252 }, { id: 'PSE', angle: 295 },
    { id: 'IRQ', angle: 246 }, { id: 'YEM', angle: 264 }, { id: 'IDN', angle: 96 },
    { id: 'TSMC', angle: 84 }, { id: 'PAK', angle: 219 }
  ];

  function computePositions() {
    var cx = 450, cy = 310, rCentral = 175, rPeripheral = 265;
    var pos = {};
    CENTRAL_ACTORS.forEach(function(a) {
      var p = polar(cx, cy, rCentral, a.angle);
      pos[a.id] = { x: p.x, y: p.y, central: true, label: a.id };
    });
    PERIPHERAL_ACTORS.forEach(function(a) {
      var p = polar(cx, cy, rPeripheral, a.angle);
      pos[a.id] = { x: p.x, y: p.y, central: false, label: a.id };
    });
    return pos;
  }

  function renderSubgraph(svgId, scenario) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 900 620');
    svg.innerHTML = '';

    var positions = computePositions();
    var focus = {}; scenario.subgraph.focus.forEach(function(a) { focus[a] = true; });
    var periph = {}; scenario.subgraph.peripheral.forEach(function(a) { periph[a] = true; });

    // Faint background rings
    [90, 175, 265].forEach(function(r) {
      svg.appendChild(svgEl('circle', {
        cx: 450, cy: 310, r: r, fill: 'none',
        stroke: '#1F2842', 'stroke-width': 1,
        'stroke-dasharray': '2 6', opacity: 0.25
      }));
    });

    // Focus arcs
    var arcsG = svgEl('g');
    scenario.subgraph.arcs.forEach(function(a) {
      var s = positions[a.s], t = positions[a.t];
      if (!s || !t) return;
      var color = polToColor(a.pol);
      var thickness = a.w >= 4.3 ? 3 : (a.w >= 3.7 ? 2.2 : 1.6);
      var dx = t.x - s.x, dy = t.y - s.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var offset = dist * 0.08;
      var nx = -dy / dist, ny = dx / dist;
      var ctrlX = (s.x + t.x) / 2 + nx * offset;
      var ctrlY = (s.y + t.y) / 2 + ny * offset;
      arcsG.appendChild(svgEl('path', {
        d: 'M ' + s.x + ' ' + s.y + ' Q ' + ctrlX + ' ' + ctrlY + ' ' + t.x + ' ' + t.y,
        stroke: color, 'stroke-width': thickness, fill: 'none', opacity: 0.85
      }));
    });
    svg.appendChild(arcsG);

    // Focus ellipse
    var focusPts = scenario.subgraph.focus.map(function(id) { return positions[id]; }).filter(Boolean);
    if (focusPts.length > 0) {
      var minX = 900, maxX = 0, minY = 620, maxY = 0;
      focusPts.forEach(function(p) {
        if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
      });
      svg.appendChild(svgEl('ellipse', {
        cx: (minX + maxX) / 2, cy: (minY + maxY) / 2,
        rx: (maxX - minX) / 2 + 60, ry: (maxY - minY) / 2 + 55,
        fill: 'none', stroke: '#E8A93E', 'stroke-width': 1.5,
        'stroke-dasharray': '6 6', opacity: 0.5
      }));
    }

    // Nodes
    var nodesG = svgEl('g');
    Object.keys(positions).forEach(function(id) {
      var p = positions[id];
      var g = svgEl('g', { transform: 'translate(' + p.x + ',' + p.y + ')' });
      var isFocus = !!focus[id], isPeriph = !!periph[id];
      if (isFocus) {
        g.appendChild(svgEl('circle', {
          r: 22, fill: '#1A1710', stroke: '#E8A93E', 'stroke-width': 2.5
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#E8ECEF', 'font-family': 'Georgia, serif',
          'font-size': 11, 'font-weight': 600
        }, id));
      } else if (isPeriph) {
        g.appendChild(svgEl('circle', {
          r: 14, fill: '#0D1220', stroke: '#8E6A2D', 'stroke-width': 1.5, opacity: 0.75
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#A0A9BD', 'font-family': 'Georgia, serif', 'font-size': 9
        }, id));
      }
      nodesG.appendChild(g);
    });
    svg.appendChild(nodesG);
  }

  function nowHM() {
    var d = new Date();
    var h = d.getHours(); if (h < 10) h = '0' + h;
    var m = d.getMinutes(); if (m < 10) m = '0' + m;
    return h + ':' + m;
  }

  // DOM refs
  var chatBody = document.getElementById('chat-body');
  var chatSubtitle = document.getElementById('chat-subtitle');
  var breadcrumb = document.getElementById('breadcrumb');
  var bcDossier = document.getElementById('bc-dossier');
  var bcActors = document.getElementById('bc-actors');
  var bcReports = document.getElementById('bc-reports');
  var chatInput = document.getElementById('chat-input');
  var runBtn = document.getElementById('run-btn');
  var inputHint = document.getElementById('input-hint');
  var footer = document.getElementById('footer');
  var footerRight = document.getElementById('footer-right');
  var centerPanel = document.getElementById('center-panel');
  var intelPanel = document.getElementById('intel-panel');
  var newChatBtn = document.getElementById('new-chat-btn');

  newChatBtn.addEventListener('click', resetToLanding);

  function renderChatBody() {
    chatBody.innerHTML = '';

    if (STATE.flow === 'landing') {
      chatBody.innerHTML =
        '<div class="opening-message"><p><em>Ready to answer. Ask about the state of any actor, ' +
        'the drivers of a dossier, or a projection over a horizon you specify. ' +
        'I will pull the relevant subgraph and answer with sources.</em></p></div>';
      return;
    }

    STATE.turns.forEach(function(turn) {
      var div = document.createElement('div');
      div.className = 'chat-turn';
      if (turn.type === 'user') {
        div.innerHTML =
          '<div class="turn-user"><div class="turn-body">' + turn.body + '</div>' +
          '<div class="turn-ts">' + turn.ts + '</div></div>';
      } else if (turn.type === 'clarify') {
        var chipsHtml = turn.chips.map(function(c) {
          return '<button class="clarify-chip" data-scenario="' + c.id + '">' +
                 '<span class="clarify-chip-arrow">→</span>' +
                 '<span><em>' + c.text + '</em></span></button>';
        }).join('');
        div.innerHTML =
          '<div class="turn-clarify"><div class="clarify-label">◇ A quick refinement</div>' +
          '<div class="turn-body">' + turn.body + '</div>' +
          '<div class="clarify-chips">' + chipsHtml + '</div></div>';
      } else if (turn.type === 'answer') {
        div.innerHTML =
          '<div class="turn-answer"><span class="answer-check">✓</span>' +
          '<div class="turn-body">' + turn.body + '</div></div>';
      }
      chatBody.appendChild(div);
    });

    if (STATE.flow === 'asking' || STATE.flow === 'dt-running') {
      var thinkDiv = document.createElement('div');
      thinkDiv.className = 'thinking-block';
      thinkDiv.id = 'thinking-block';
      chatBody.appendChild(thinkDiv);
      renderThinking();
    }

    // Attach clarify chip handlers
    document.querySelectorAll('.clarify-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        var scenarioId = chip.getAttribute('data-scenario');
        startScenario(scenarioId);
      });
    });

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function renderThinking() {
    var block = document.getElementById('thinking-block');
    if (!block) return;
    var s = STATE.activeScenario;
    if (!s) return;
    var isDT = STATE.flow === 'dt-running';
    var steps = isDT ? [
      'Subgraph resolved',
      'First-mover selected (' + (s.subgraph.focus[0] || 'USA') + ')',
      '4 seeds generated (Direction × Reach)',
      'Full expansion turns 0-2',
      'MCTS sampling · iter ' + Math.floor(STATE.dtProgress * 200) + ' / ~200',
      'Aggregating outcomes & probabilities',
      'Composing scenario report'
    ] : s.thinkingSteps;

    var itemsHtml = steps.map(function(step, i) {
      var progress = STATE.dtProgress;
      var itemThreshold = (i + 1) / steps.length;
      var cls, mark;
      if (progress >= itemThreshold) { cls = 'done'; mark = '✓'; }
      else if (progress >= i / steps.length) { cls = 'active pulse-amber'; mark = '●'; }
      else { cls = ''; mark = '○'; }
      return '<li class="thinking-item ' + cls + '"><span class="ti-mark">' + mark + '</span><span>' + step + '</span></li>';
    }).join('');

    var timeLabel = isDT ? '2m 14s of ~3m 20s' : '';
    block.innerHTML =
      '<div class="thinking-hdr">' +
      '<span>● WORKING · ' + Math.floor(STATE.dtProgress * 100) + '%</span>' +
      (timeLabel ? '<span class="thinking-progress">' + timeLabel + '</span>' : '') +
      '</div><ul class="thinking-list">' + itemsHtml + '</ul>';
  }

  // CENTER + INTEL RENDERING PER STATE
  function renderCenterAndIntel() {
    if (STATE.flow === 'landing') {
      renderLandingCenter();
      intelPanel.classList.add('hidden');
      intelPanel.innerHTML = '';
    } else {
      intelPanel.classList.remove('hidden');
      if (STATE.flow === 'asking') { renderAskingCenter(); renderAskingIntel(); }
      else if (STATE.flow === 'l1-report') { renderL1ReportCenter(); renderL1ReportIntel(); }
      else if (STATE.flow === 'dt-running') { renderDTRunningCenter(); renderDTRunningIntel(); }
      else if (STATE.flow === 'dt-report') { renderDTReportCenter(); renderDTReportIntel(); }
    }
  }

  function renderLandingCenter() {
    centerPanel.innerHTML =
      '<div class="center-hdr"><div class="center-hdr-left">' +
      '<div class="ctx-tag">GLOBAL · MULTI-DOSSIER</div>' +
      '<div class="center-title">The world in arcs</div>' +
      '</div><div class="center-hdr-right">' +
      '<div class="meta-row"><span class="meta-lbl">ACTORS</span><span class="meta-val">147</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ARCS</span><span class="meta-val">428</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">VIEW</span><span class="meta-val">sphere · 1.0×</span></div>' +
      '</div></div>' +
      '<div class="graph-canvas"><svg id="global-graph" preserveAspectRatio="xMidYMid meet"></svg></div>' +
      '<div class="graph-controls">' +
      '<button class="gc-btn active">◉ SPHERE</button>' +
      '<button class="gc-btn">ROTATE</button>' +
      '<button class="gc-btn">FILTERS</button>' +
      '<div class="gc-zoom"><button class="gc-zoom-btn">−</button><span class="gc-zoom-lbl">ZOOM</span><button class="gc-zoom-btn">+</button></div>' +
      '</div>' +
      '<div class="graph-hints"><em>Ask a question to pull the relevant subgraph into focus</em></div>';
    renderGlobalGraph('global-graph');
  }

  function renderAskingCenter() {
    var s = STATE.activeScenario;
    centerPanel.innerHTML =
      '<div class="center-hdr"><div class="center-hdr-left">' +
      '<div class="ctx-tag amber">◉ FOCUSED ON QUESTION SUBGRAPH</div>' +
      '<div class="center-title">' + s.dossier + ' <em>· the arcs in play</em></div>' +
      '</div><div class="center-hdr-right">' +
      '<div class="meta-row"><span class="meta-lbl">ACTORS</span><span class="meta-val amber">' + s.subgraph.actorCount + '</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ARCS</span><span class="meta-val amber">' + s.subgraph.arcCount + '</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">REST</span><span class="meta-val">dimmed</span></div>' +
      '</div></div>' +
      '<div class="graph-canvas"><svg id="subgraph-svg" class="subgraph-svg" preserveAspectRatio="xMidYMid meet"></svg>' +
      '<div class="graph-status"><div class="gs-title">◉ SUBGRAPH FILTERED BY QUESTION</div>' +
      '<div class="gs-body">Pulling relevant actors and arcs into focus.</div></div></div>' +
      '<div class="graph-controls">' +
      '<button class="gc-btn active">◉ SUBGRAPH FOCUS</button>' +
      '<button class="gc-btn">RESTORE GLOBAL</button>' +
      '<div class="gc-zoom"><button class="gc-zoom-btn">−</button><span class="gc-zoom-lbl">ZOOM</span><button class="gc-zoom-btn">+</button></div>' +
      '</div>';
    renderSubgraph('subgraph-svg', s);
  }

  function gaugeHtml(val) {
    var full = Math.floor(val);
    var partial = (val - full) > 0.3 ? 1 : 0;
    var html = '<div class="gauge-5bar">';
    for (var i = 0; i < 5; i++) {
      if (i < full) html += '<div class="gb-seg on"></div>';
      else if (i === full && partial) html += '<div class="gb-seg on partial"></div>';
      else html += '<div class="gb-seg"></div>';
    }
    html += '</div>';
    return html;
  }

  function renderAskingIntel() {
    var s = STATE.activeScenario;
    var arcRowsHtml = s.subgraph.arcs.slice(0, 5).map(function(a, i) {
      var idx = i + 1; if (idx < 10) idx = '0' + idx;
      var volCls = a.vol === 'H' ? 'hi' : a.vol === 'M' ? 'med' : 'low';
      return '<li class="arc-row"><span class="arc-idx">' + idx + '</span>' +
             '<span class="arc-pair ' + a.pol + '">' + a.s + ' ↔ ' + a.t + '</span>' +
             '<span class="vol-tag ' + volCls + '">' + a.vol + '</span>' +
             '<span class="arc-w">w ' + a.w.toFixed(1) + '</span></li>';
    }).join('');
    intelPanel.innerHTML =
      '<div class="intel-section"><span class="intel-badge">◉ QUESTION CONTEXT</span>' +
      '<div class="intel-focus-card"><div class="focus-title">' + s.dossier + '</div>' +
      '<div class="focus-meta">' + s.subgraph.actorCount + ' actors · ' + s.subgraph.arcCount + ' arcs · ' + s.subgraph.passageCount + ' passages</div></div></div>' +
      '<div class="intel-section"><div class="section-label">SUBGRAPH EVIDENCE STRENGTH</div>' +
      '<div class="gauge-block">' + gaugeHtml(s.evidenceStrength) +
      '<div class="gauge-value">' + s.evidenceStrength.toFixed(1) + ' <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">' + s.evidenceCaption + '</div></div></div>' +
      '<div class="intel-section"><div class="section-label">TOP ARCS IN SCOPE</div><ol class="arcs-list">' + arcRowsHtml + '</ol></div>';
  }

  function renderL1ReportCenter() {
    var s = STATE.activeScenario;
    var r = s.l1Report;
    var evHtml = r.evidence.map(function(e) {
      var citesHtml = e.citations.map(function(c) {
        return '<span class="ev-cite' + (c.emphasis ? ' emphasis' : '') + '">' +
               '<span class="cite-src">' + c.src + '</span> · ' + c.date + '</span>';
      }).join('');
      return '<div class="ev-item"><div class="ev-n">' + e.n + '</div>' +
             '<div class="ev-body"><div class="ev-text">' + e.body + '</div>' +
             '<div class="ev-citations">' + citesHtml + '</div></div></div>';
    }).join('');

    var tierBlock = s.dtReport ? (
      '<div class="dt-tier-block">' +
      '<div class="tier-card" data-tier="light">' +
      '<div class="tier-title">Light</div><div class="tier-cost">~ $0.05</div>' +
      '<div class="tier-desc">Top-N seeds only, shallow tree. Fast, indicative.</div>' +
      '<button class="tier-btn">RUN LIGHT</button></div>' +
      '<div class="tier-card recommended" data-tier="standard">' +
      '<div class="tier-title amber">Standard <span class="tier-reco">RECOMMENDED</span></div>' +
      '<div class="tier-cost amber">~ $0.30</div>' +
      '<div class="tier-desc">Full seeds + MCTS. Balanced depth and cost.</div>' +
      '<button class="tier-btn filled">◆ RUN STANDARD</button></div>' +
      '<div class="tier-card" data-tier="heavy">' +
      '<div class="tier-title">Heavy</div><div class="tier-cost red">~ $1.20</div>' +
      '<div class="tier-desc">Deeper tree, more iterations, validation loop.</div>' +
      '<button class="tier-btn">RUN HEAVY</button></div>' +
      '</div>'
    ) : '';

    centerPanel.innerHTML =
      '<div class="report-meta-bar">' +
      '<span class="rmb-badge">◆ L1 ANSWER</span>' +
      '<span>' + s.dossier + '</span><span class="rmb-sep">·</span>' +
      '<span>Level 1 · RAG</span><span class="rmb-sep">·</span>' +
      '<span>Composed ' + r.composedAt + '</span>' +
      '<div class="rmb-actions"><button class="rmb-action">SAVE</button>' +
      '<button class="rmb-action">↓ PDF</button></div>' +
      '</div>' +
      '<h1 class="report-title">' + r.title + '</h1>' +
      '<div class="report-subtitle">' + r.subtitle + '</div>' +
      '<div class="report-block thesis"><div class="rb-label">THESIS</div><div class="rb-body">' + r.thesis + '</div></div>' +
      '<div class="evidence-section"><div class="ev-label">EVIDENCE READING</div>' + evHtml + '</div>' +
      '<div class="report-block implication"><div class="rb-label">IMPLICATION FOR THE ANALYST</div><div class="rb-body">' + r.implication + '</div></div>' +
      '<div class="feedback-strip">' +
      '<span class="fb-label">WAS THIS USEFUL?</span>' +
      '<button class="fb-btn">◍ Helpful</button>' +
      '<button class="fb-btn">◍ Not useful</button>' +
      '<span class="fb-note">helps calibrate the system on pilot</span>' +
      '</div>' + tierBlock;

    document.querySelectorAll('.tier-card').forEach(function(card) {
      card.addEventListener('click', function() { startDeepThink(card.getAttribute('data-tier')); });
    });
    document.querySelectorAll('.fb-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        btn.classList.toggle('selected');
      });
    });
  }

  function renderL1ReportIntel() {
    var s = STATE.activeScenario;
    var r = s.l1Report;
    var arcRowsHtml = r.topArcs.map(function(a, i) {
      var idx = i + 1; if (idx < 10) idx = '0' + idx;
      var volCls = a.vol === 'H' ? 'hi' : a.vol === 'M' ? 'med' : 'low';
      return '<li class="arc-row"><span class="arc-idx">' + idx + '</span>' +
             '<span class="arc-pair ' + a.pol + '">' + a.pair + '</span>' +
             '<span class="vol-tag ' + volCls + '">' + a.vol + '</span>' +
             '<span class="arc-w">w ' + a.w.toFixed(1) + '</span></li>';
    }).join('');
    var sourcesHtml = r.sources.map(function(src) {
      return '<div class="source-row"><span class="source-name">' + src.name + '</span>' +
             '<span class="source-passages">' + src.passages + ' passages</span></div>';
    }).join('');
    intelPanel.innerHTML =
      '<div class="intel-section"><div class="section-label">ANSWER EVIDENCE STRENGTH</div>' +
      '<div class="gauge-block">' + gaugeHtml(s.evidenceStrength) +
      '<div class="gauge-value">' + s.evidenceStrength.toFixed(1) + ' <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">' + s.evidenceCaption + '</div></div></div>' +
      '<div class="intel-section"><div class="section-label">TOP ARCS CITED</div><ol class="arcs-list">' + arcRowsHtml + '</ol></div>' +
      '<div class="intel-section"><div class="section-label">SOURCES CITED (' + r.sources.length + ')</div>' + sourcesHtml + '</div>' +
      '<div class="intel-section"><div class="divergence-strip">' +
      '<span class="divergence-label">◇ Divergence flagged</span>' + r.divergence + '</div></div>';
  }

  function renderDTRunningCenter() {
    var s = STATE.activeScenario;
    var progress = STATE.dtProgress;
    var phases = ['Setup &amp; seeds', 'Full expansion', 'MCTS sampling', 'Aggregate outcomes', 'Compose report'];
    var activePhase = Math.min(4, Math.floor(progress * 5));
    var phaseHtml = phases.map(function(p, i) {
      var cls = i < activePhase ? 'done' : (i === activePhase ? 'active' : '');
      var n = i + 1; if (n < 10) n = '0' + n;
      return '<div class="phase-card ' + cls + '"><span class="phase-n">' + n + '</span>' +
             '<span class="phase-name">' + p + '</span>' +
             (i < phases.length - 1 ? '<span class="phase-chev">›</span>' : '') + '</div>';
    }).join('');
    var mctsIter = Math.floor(progress * 200);
    centerPanel.innerHTML =
      '<div class="center-hdr"><div class="center-hdr-left">' +
      '<div class="ctx-tag amber">◆ DEEP-THINK STANDARD · RUNNING</div>' +
      '<div class="center-title"><em>' + s.question + '</em></div>' +
      '</div><div class="center-hdr-right">' +
      '<div class="meta-row"><span class="meta-lbl">STARTED</span><span class="meta-val amber">' + nowHM() + '</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ETA</span><span class="meta-val">' + Math.floor((1 - progress) * 200) + 's</span></div>' +
      '</div></div>' +
      '<div class="dt-phase-bar">' + phaseHtml + '</div>' +
      '<div class="dt-counters">' +
      '<div class="counter-cell"><span class="counter-lbl">ITERATIONS</span>' +
      '<span class="counter-val">' + mctsIter + '</span><span class="counter-sub green">▲ 3.2/s</span></div>' +
      '<div class="counter-cell"><span class="counter-lbl">SEEDS</span>' +
      '<span class="counter-val">4</span><span class="counter-sub">scenarios</span></div>' +
      '<div class="counter-cell"><span class="counter-lbl">NODES</span>' +
      '<span class="counter-val">' + (240 + Math.floor(progress * 1000)) + '</span>' +
      '<span class="counter-sub green">+1 dynamic</span></div>' +
      '<div class="counter-cell accent"><span class="counter-lbl">TURN</span>' +
      '<span class="counter-val">t = ' + Math.min(5, Math.floor(progress * 6)) + ' / 5</span>' +
      '<span class="counter-sub amber">active</span></div>' +
      '</div>' +
      '<div class="dt-tree-canvas"><svg id="dt-tree-svg" preserveAspectRatio="xMidYMid meet"></svg></div>';
    renderDTTree('dt-tree-svg', progress);
  }

  function renderDTTree(svgId, progress) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 900 320');
    svg.innerHTML = '';
    var cols = 6, colW = 900 / cols;
    var activeCol = Math.min(cols - 1, Math.floor(progress * cols));
    for (var c = 0; c < cols; c++) {
      var x = colW * c + colW / 2;
      svg.appendChild(svgEl('line', {
        x1: x, y1: 20, x2: x, y2: 300,
        stroke: c === activeCol ? '#E8A93E' : '#1F2842',
        'stroke-width': c === activeCol ? 1 : 0.5,
        'stroke-dasharray': '3 5', opacity: c === activeCol ? 0.4 : 0.3
      }));
      svg.appendChild(svgEl('text', {
        x: x, y: 15, 'text-anchor': 'middle',
        fill: '#6B7590', 'font-family': 'Courier New, monospace', 'font-size': 9
      }, 't=' + c));
    }
    svg.appendChild(svgEl('circle', {
      cx: colW / 2, cy: 160, r: 10, fill: '#1A3520', stroke: '#4A9F70', 'stroke-width': 2
    }));
    var seedYs = [60, 120, 200, 260];
    for (var i = 0; i < 4; i++) {
      var isModal = i === 1;
      svg.appendChild(svgEl('line', {
        x1: colW / 2 + 10, y1: 160, x2: colW * 1.5 - 8, y2: seedYs[i],
        stroke: isModal ? '#E8A93E' : '#3D4A73',
        'stroke-width': isModal ? 2 : 1, opacity: 0.7
      }));
      svg.appendChild(svgEl('circle', {
        cx: colW * 1.5, cy: seedYs[i], r: 8,
        fill: isModal ? '#1A1710' : '#0D1220',
        stroke: isModal ? '#E8A93E' : '#3D4A73', 'stroke-width': 1.5
      }));
    }
    var nodesPerCol = [4, 8, 10, 8, 6];
    for (var c2 = 2; c2 < 6; c2++) {
      if (progress * cols < c2) continue;
      var n = nodesPerCol[c2 - 1];
      for (var k = 0; k < n; k++) {
        var y = 40 + (k / (n - 1 || 1)) * 240;
        var xPos = colW * (c2 + 0.5);
        var isAmber = c2 === 2 && k >= 3 && k <= 6;
        var isCurrent = c2 === activeCol && k === Math.floor(n / 2);
        var isDashed = c2 >= 4;
        svg.appendChild(svgEl('line', {
          x1: colW * (c2 - 0.5) + 6, y1: 150, x2: xPos - 6, y2: y,
          stroke: isAmber ? '#E8A93E' : '#3D4A73',
          'stroke-width': isAmber ? 1.2 : 0.6, opacity: isDashed ? 0.3 : 0.6,
          'stroke-dasharray': isDashed ? '3 4' : 'none'
        }));
        svg.appendChild(svgEl('circle', {
          cx: xPos, cy: y, r: isCurrent ? 7 : 5,
          fill: isCurrent ? '#E8A93E' : (isAmber ? '#1A1710' : (isDashed ? 'none' : '#1A3520')),
          stroke: isCurrent ? '#FFFFFF' : (isAmber ? '#E8A93E' : (isDashed ? '#6B7590' : '#4A9F70')),
          'stroke-width': isCurrent ? 2 : 1,
          'stroke-dasharray': isDashed ? '2 2' : 'none', opacity: isDashed ? 0.5 : 1
        }));
      }
    }
  }

  function renderDTRunningIntel() {
    var s = STATE.activeScenario;
    var progress = STATE.dtProgress;
    var costNow = (progress * 0.28).toFixed(2);
    var costPct = progress * 50;
    intelPanel.innerHTML =
      '<div class="intel-section"><div class="dt-cost-block">' +
      '<div class="cost-live">$' + costNow + '<span class="cost-live-sub">/ ~$0.30</span></div>' +
      '<div class="cost-caption">ACCUMULATED · STANDARD TIER</div>' +
      '<div class="cost-bar-wrap"><div class="cost-bar-fill" style="width:' + costPct + '%"></div></div>' +
      '<div class="cost-marks"><span>$0</span><span class="cm-now">▲ now</span><span>$0.30 est</span><span class="cm-cap">$0.60 cap</span></div>' +
      '</div></div>' +
      '<div class="intel-section"><div class="section-label">ACTORS IN PLAY</div>' +
      s.subgraph.focus.slice(0, 6).map(function(a, i) {
        var roles = ['First mover', 'Retaliator', 'Aligned pressure', 'Mediator', 'Proxy channel', 'Regional'];
        var tags = ['FM', '1H', '2H', '3H', '4H', '5H'];
        return '<div class="actor-play-row"><span class="ap-code">' + a + '</span>' +
               '<span class="ap-role">' + (roles[i] || 'Actor') + '</span>' +
               '<span class="ap-tag">' + (tags[i] || '') + '</span></div>';
      }).join('') + '</div>' +
      '<div class="intel-section"><div class="section-label">CURRENT MOVE</div>' +
      '<div class="current-move-card"><div class="cm-label">◉ SEED · t = ' + Math.min(5, Math.floor(progress * 6)) + ' · MCTS</div>' +
      '<div class="cm-body">Evaluating <em>' + s.subgraph.focus[0] + '</em> move on <em>' +
      s.subgraph.focus[0] + '-' + (s.subgraph.focus[1] || 'target') + '</em> arc.</div>' +
      '<div class="cm-stats"><span class="cm-delta">Delta: +0.42</span> · UCB: 1.87 · Visits: ' + (10 + Math.floor(progress * 40)) + '</div>' +
      '</div></div>';
  }

  function renderDTReportCenter() {
    var s = STATE.activeScenario;
    var r = s.dtReport;
    var scHtml = r.scenarios.map(function(sc) {
      var isModal = sc.tag === 'MODAL';
      return '<div class="scenario-item ' + (isModal ? 'modal' : '') + '">' +
             '<div class="sc-badge"><div class="sc-code">' + sc.code + '</div>' +
             '<div class="sc-tag">' + sc.tag + '</div>' +
             '<div class="sc-pct">' + sc.pct + '%</div>' +
             '<div class="sc-ci">CI ' + sc.ci + '</div></div>' +
             '<div class="sc-body">' + sc.body + '</div></div>';
    }).join('');

    var fullReportBtn = r.fullReport ?
      '<button class="rmb-action primary" id="full-report-btn">◆ FULL REPORT</button>' : '';

    centerPanel.innerHTML =
      '<div class="report-meta-bar">' +
      '<span class="rmb-badge dt">◆ DEEP-THINK · STANDARD</span>' +
      '<span>' + s.dossier + '</span><span class="rmb-sep">·</span>' +
      '<span>' + r.stats.iterations + ' iterations</span><span class="rmb-sep">·</span>' +
      '<span>Composed ' + nowHM() + '</span>' +
      '<div class="rmb-actions">' + fullReportBtn +
      '<button class="rmb-action">SAVE</button>' +
      '<button class="rmb-action">↓ PDF</button></div>' +
      '</div>' +
      '<h1 class="report-title">' + r.title + '</h1>' +
      '<div class="report-subtitle">' + r.subtitle + '</div>' +
      '<div class="report-block thesis"><div class="rb-label">THESIS</div><div class="rb-body">' + r.thesis + '</div></div>' +
      '<div class="dt-two-col">' +
      '<div class="dt-left"><div class="dt-scenarios-label">DISTRIBUTION · ' + r.scenarios.length + ' SCENARIOS</div>' + scHtml + '</div>' +
      '<div class="dt-right"><div class="dt-right-hdr">' +
      '<span class="dtr-title">◉ LATTICE</span>' +
      '<button class="dtr-expand" id="expand-lattice">EXPAND ↗</button></div>' +
      '<svg id="dt-lattice-svg" preserveAspectRatio="xMidYMid meet"></svg>' +
      '<div class="lattice-caption">' + r.latticeCaption + '</div>' +
      '</div></div>' +
      '<div class="report-block sensitivity"><div class="rb-label">SENSITIVITY</div>' +
      '<div class="rb-body">' + r.sensitivity + '</div></div>' +
      '<div class="report-block implication"><div class="rb-label">IMPLICATION</div>' +
      '<div class="rb-body">' + r.implication + '</div></div>' +
      '<div class="feedback-strip">' +
      '<span class="fb-label">WAS THIS USEFUL?</span>' +
      '<button class="fb-btn">◍ Helpful</button>' +
      '<button class="fb-btn">◍ Not useful</button>' +
      '<span class="fb-note">helps calibrate the system on pilot</span>' +
      '</div>' +
      '<div class="rerun-strip">' +
      '<div class="rerun-text">Not robust enough? Deepen at higher tier -- same question, more iterations, tighter intervals.</div>' +
      '<button class="rerun-btn">◆ RE-RUN HEAVY ($1.20)</button>' +
      '</div>';

    renderLattice('dt-lattice-svg', r, false);
    var fullBtn = document.getElementById('full-report-btn');
    if (fullBtn) fullBtn.addEventListener('click', openFullReport);
    var expBtn = document.getElementById('expand-lattice');
    if (expBtn) expBtn.addEventListener('click', openFullReport);
    document.querySelectorAll('.fb-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { btn.classList.toggle('selected'); });
    });
  }

  function renderLattice(svgId, r, isLarge) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    var vbW = isLarge ? 900 : 500;
    var vbH = isLarge ? 500 : 300;
    svg.setAttribute('viewBox', '0 0 ' + vbW + ' ' + vbH);
    svg.innerHTML = '';
    var cols = 6, colW = vbW / cols;
    for (var c = 0; c < cols; c++) {
      svg.appendChild(svgEl('line', {
        x1: colW * c + colW / 2, y1: 20, x2: colW * c + colW / 2, y2: vbH - 20,
        stroke: '#1F2842', 'stroke-width': 0.5, 'stroke-dasharray': '2 4', opacity: 0.4
      }));
      if (isLarge) {
        svg.appendChild(svgEl('text', {
          x: colW * c + colW / 2, y: 15, 'text-anchor': 'middle',
          fill: '#6B7590', 'font-family': 'Courier New, monospace', 'font-size': 10
        }, 't=' + c));
      }
    }
    var midY = vbH / 2;
    svg.appendChild(svgEl('circle', {
      cx: colW / 2, cy: midY, r: isLarge ? 10 : 6, fill: '#0D1220',
      stroke: '#4A9F70', 'stroke-width': 1.5
    }));
    var yBase = isLarge ? [midY - 180, midY - 60, midY + 60, midY + 180] : [50, 100, 170, 240];
    for (var i = 0; i < r.scenarios.length; i++) {
      var sc = r.scenarios[i];
      var color = polToColor(sc.pol);
      var bandThick = Math.max(2, sc.pct / (isLarge ? 5 : 8));
      var d = 'M ' + (colW / 2 + 6) + ' ' + midY + ' ';
      for (var c2 = 1; c2 < cols; c2++) {
        var x = colW * c2 + colW / 2;
        var yProg = midY + (yBase[i] - midY) * (c2 / (cols - 1));
        d += 'L ' + x + ' ' + yProg + ' ';
      }
      svg.appendChild(svgEl('path', {
        d: d, stroke: color, 'stroke-width': bandThick, fill: 'none', opacity: 0.55
      }));
      svg.appendChild(svgEl('circle', {
        cx: colW * 5.5, cy: yBase[i], r: isLarge ? 12 : 8, fill: color, opacity: 0.85
      }));
      svg.appendChild(svgEl('text', {
        x: colW * 5.5 + (isLarge ? 20 : 14), y: yBase[i] + 4,
        fill: color, 'font-family': 'Courier New, monospace',
        'font-size': isLarge ? 13 : 10, 'font-weight': 700
      }, sc.code + ' ' + sc.pct + '%'));
      if (isLarge) {
        svg.appendChild(svgEl('text', {
          x: colW * 5.5 + 20, y: yBase[i] + 22,
          fill: '#A0A9BD', 'font-family': 'Georgia, serif',
          'font-size': 11, 'font-style': 'italic'
        }, sc.tag));
      }
    }
  }

  function renderDTReportIntel() {
    var s = STATE.activeScenario;
    var r = s.dtReport;
    var distBarsHtml = r.scenarios.map(function(sc) {
      var height = Math.max(8, sc.pct * 1.4);
      return '<div class="dist-bar-col"><div class="dist-bar ' + sc.pol + '" style="height:' + height + 'px">' +
             '<span class="dist-bar-val">' + sc.pct + '%</span></div>' +
             '<div class="dist-bar-lbl">' + sc.code + '</div></div>';
    }).join('');
    var arcsHtml = r.drivingArcs.map(function(a) {
      return '<div class="source-row"><span class="source-name ' + a.pol + '">' + a.pair + '</span>' +
             '<span style="font-family:Georgia,serif;font-style:italic;font-size:11px;color:#A0A9BD">' + a.desc + '</span></div>';
    }).join('');
    var assumHtml = r.assumptions.map(function(a) {
      var parts = a.split(':');
      return '<div class="assumption-row"><span class="assumption-code">' + parts[0] + ':</span>' + parts.slice(1).join(':') + '</div>';
    }).join('');
    intelPanel.innerHTML =
      '<div class="intel-section"><div class="section-label">DISTRIBUTION SHAPE</div>' +
      '<div class="dist-bars">' + distBarsHtml + '</div>' +
      '<div class="dist-caption">Modal ' + (r.scenarios[1] ? r.scenarios[1].code : 'S2') + '</div></div>' +
      '<div class="intel-section"><div class="section-label">ROBUSTNESS</div>' +
      '<div class="gauge-block">' + gaugeHtml(r.robustness) +
      '<div class="gauge-value">' + r.robustness.toFixed(1) + ' <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">' + r.robustnessCaption + '</div></div>' +
      '<div class="gauge-note">' + r.robustnessNote + '</div></div>' +
      '<div class="intel-section"><div class="section-label">DRIVING ARCS</div>' + arcsHtml + '</div>' +
      '<div class="intel-section"><div class="section-label">ASSUMPTIONS</div><ul class="assumptions-list">' + assumHtml + '</ul></div>' +
      '<div class="intel-section"><div class="section-label">RUN STATS</div><div class="stats-rows">' +
      '<div class="stat-row"><span class="stat-lbl">TIER</span><span class="stat-val amber">' + r.stats.tier + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">ITER</span><span class="stat-val">' + r.stats.iterations + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">NODES</span><span class="stat-val">' + r.stats.nodes + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">TIME</span><span class="stat-val">' + r.stats.time + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">COST</span><span class="stat-val amber">' + r.stats.cost + '</span></div>' +
      '</div></div>';
  }

  // FULL REPORT OVERLAY
  var overlay = document.getElementById('full-report-overlay');
  var froTitle = document.getElementById('fro-title');
  var froNarrative = document.getElementById('fro-narrative');
  var froClose = document.getElementById('fro-close');
  froClose.addEventListener('click', function() { overlay.classList.remove('open'); });

  function openFullReport() {
    var s = STATE.activeScenario;
    if (!s || !s.dtReport || !s.dtReport.fullReport) return;
    var fr = s.dtReport.fullReport;
    froTitle.textContent = s.dossier + ' -- Full Trajectory Report';
    var keyMovesHtml = fr.keyMoves.map(function(m, i) {
      var idx = i + 1; if (idx < 10) idx = '0' + idx;
      return '<div class="fro-keymove-row"><div class="fro-keymove-idx">' + idx + '</div>' +
             '<div class="fro-keymove-body">' + m + '</div></div>';
    }).join('');
    froNarrative.innerHTML =
      '<div class="fro-section-label">◉ TRAJECTORY NARRATIVE · MODAL PATH</div>' +
      '<div class="fro-narr-body">' + fr.narrative + '</div>' +
      '<div class="fro-keymoves"><div class="fro-section-label">◉ KEY MOVES SEQUENCE</div>' +
      keyMovesHtml + '</div>';
    overlay.classList.add('open');
    renderLattice('fro-lattice-svg', s.dtReport, true);
  }

  // FOOTER
  function renderFooter() {
    if (STATE.flow === 'landing') {
      footer.classList.remove('tall');
      footerRight.innerHTML = '<span class="ft-status ok">● CONNECTED · REAL-TIME</span>';
      return;
    }
    if (STATE.flow === 'asking') {
      footer.classList.remove('tall');
      footerRight.innerHTML =
        '<span class="ft-item"><span class="ft-lbl">LEVEL</span> L1 · RAG</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST</span> $0.014 of ~$0.02</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status amber">GENERATING · ' + Math.floor(STATE.dtProgress * 100) + '%</span>' +
        '<button class="ft-stop-btn" id="ft-stop">■ STOP</button>';
      var b = document.getElementById('ft-stop');
      if (b) b.addEventListener('click', function() {
        clearTimers();
        STATE.flow = 'landing';
        renderFull();
      });
      return;
    }
    if (STATE.flow === 'l1-report') {
      footer.classList.remove('tall');
      var s = STATE.activeScenario;
      footerRight.innerHTML =
        '<span class="ft-item"><span class="ft-lbl">LEVEL</span> L1 · RAG</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST</span> ' + s.l1Report.cost + '</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-watermark">◇ Draft -- not calibrated forecasts</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status ok">ANSWER READY</span>';
      return;
    }
    if (STATE.flow === 'dt-running') {
      footer.classList.add('tall');
      var costNow = (STATE.dtProgress * 0.28).toFixed(2);
      footerRight.innerHTML =
        '<span class="ft-item amber"><span class="ft-lbl">L2</span> DEEP-THINK STANDARD</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST</span> $' + costNow + ' of ~$0.30</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status amber">RUNNING · ' + Math.floor(STATE.dtProgress * 100) + '%</span>' +
        '<button class="ft-stop-btn" id="ft-stop-dt">■ STOP AND KEEP PARTIAL</button>';
      var b2 = document.getElementById('ft-stop-dt');
      if (b2) b2.addEventListener('click', function() { clearTimers(); goToDTReport(); });
      return;
    }
    if (STATE.flow === 'dt-report') {
      footer.classList.remove('tall');
      var s2 = STATE.activeScenario;
      footerRight.innerHTML =
        '<span class="ft-item amber"><span class="ft-lbl">L2</span> DEEP-THINK STANDARD</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST</span> ' + s2.dtReport.stats.cost + '</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-watermark">◇ Not calibrated forecasts</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status ok">DT REPORT READY</span>';
      return;
    }
  }

  function renderBreadcrumb() {
    if (STATE.flow === 'landing' || STATE.turns.length === 0) {
      breadcrumb.classList.remove('visible');
      return;
    }
    breadcrumb.classList.add('visible');
    var s = STATE.activeScenario;
    if (!s) return;
    bcDossier.textContent = s.dossier;
    // Union of all focus actors across scenarioHistory + current
    var allFocus = {};
    STATE.scenarioHistory.forEach(function(sc) {
      sc.subgraph.focus.forEach(function(a) { allFocus[a] = true; });
    });
    s.subgraph.focus.forEach(function(a) { allFocus[a] = true; });
    bcActors.textContent = Object.keys(allFocus).slice(0, 10).join(', ');
    var reportCount = STATE.scenarioHistory.length;
    if (STATE.flow === 'l1-report' || STATE.flow === 'dt-report') reportCount += 1;
    bcReports.textContent = reportCount > 0 ? '· ' + reportCount + (reportCount === 1 ? ' report' : ' reports') : '';
  }

  function renderFull() {
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();
  }

  // FLOW TRANSITIONS
  function resetToLanding() {
    clearTimers();
    overlay.classList.remove('open');
    STATE.flow = 'landing';
    STATE.activeScenario = null;
    STATE.scenarioHistory = [];
    STATE.turns = [];
    STATE.dtProgress = 0;
    STATE.pendingScenarioId = null;
    chatSubtitle.textContent = 'Session · new';
    chatSubtitle.className = 'panel-subtitle';
    chatInput.disabled = false;
    chatInput.value = '';
    runBtn.classList.remove('active');
    inputHint.textContent = 'Answer first · Deep-Think from the report if needed';
    renderFull();
  }

  function startScenario(scenarioKey) {
    var s = window.GEODATA.scenarios[scenarioKey];
    if (!s) return;
    if (STATE.activeScenario) {
      STATE.scenarioHistory.push(STATE.activeScenario);
    }
    STATE.activeScenario = s;
    if (s.dossierId) selectDossierSilent(s.dossierId);
    STATE.turns.push({ type: 'user', body: s.question, ts: nowHM() });
    goToAsking();
  }

  function askClarify(userText) {
    STATE.turns.push({ type: 'user', body: userText, ts: nowHM() });
    // Compute allowed follow-ups given current context
    var lastId = STATE.activeScenario ? findScenarioKey(STATE.activeScenario) : null;
    var allowedIds;
    if (!lastId) {
      allowedIds = ['ukraine-main', 'taiwan-main', 'iran-main'];
    } else {
      allowedIds = window.GEODATA.followUpTree[lastId] || [];
    }
    var chips = allowedIds.map(function(id) {
      return { id: id, text: window.GEODATA.scenarios[id].question };
    });
    STATE.turns.push({
      type: 'clarify',
      body: 'I want to make sure I answer well. Did you mean one of these?',
      chips: chips
    });
    renderChatBody();
    chatInput.value = '';
    runBtn.classList.remove('active');
  }

  function findScenarioKey(scenario) {
    var keys = Object.keys(window.GEODATA.scenarios);
    for (var i = 0; i < keys.length; i++) {
      if (window.GEODATA.scenarios[keys[i]] === scenario) return keys[i];
    }
    return null;
  }

  function matchInput(text) {
    // Check keyword map
    for (var i = 0; i < window.GEODATA.keywordMap.length; i++) {
      var km = window.GEODATA.keywordMap[i];
      if (km.pattern.test(text)) {
        // If we're in follow-up context, verify allowed
        var lastId = STATE.activeScenario ? findScenarioKey(STATE.activeScenario) : null;
        if (lastId) {
          var allowed = window.GEODATA.followUpTree[lastId] || [];
          // main scenarios always allowed as new thread
          if (km.scenario.indexOf('-main') !== -1 || allowed.indexOf(km.scenario) !== -1) {
            return km.scenario;
          }
        } else {
          if (km.scenario.indexOf('-main') !== -1) return km.scenario;
        }
      }
    }
    return null;
  }

  function goToAsking() {
    STATE.flow = 'asking';
    STATE.dtProgress = 0;
    chatSubtitle.textContent = 'Session · ' + STATE.turns.filter(function(t){return t.type==='user';}).length + ' turns';
    chatSubtitle.className = 'panel-subtitle amber';
    chatInput.disabled = false;
    chatInput.value = '';
    runBtn.classList.remove('active');
    renderFull();
    var duration = 4000, start = Date.now();
    var timer = setInterval(function() {
      var elapsed = Date.now() - start;
      STATE.dtProgress = Math.min(1, elapsed / duration);
      renderThinking();
      renderFooter();
      if (STATE.dtProgress >= 1) { clearInterval(timer); goToL1Report(); }
    }, 100);
    STATE.timers.push(timer);
  }

  function goToL1Report() {
    clearTimers();
    STATE.flow = 'l1-report';
    STATE.dtProgress = 0;
    var s = STATE.activeScenario;
    STATE.turns.push({
      type: 'answer',
      body: 'Answer ready. Report at right. Sources: ' + s.subgraph.passageCount + ' passages, ' + s.subgraph.sourceCount + ' outlets. Evidence: ' + s.evidenceStrength.toFixed(1) + '/5.'
    });
    chatSubtitle.textContent = STATE.turns.filter(function(t){return t.type==='user';}).length + ' turns · L1 answer ready';
    chatSubtitle.className = 'panel-subtitle green';
    chatInput.disabled = false;
    inputHint.textContent = 'Ask a follow-up on this dossier';
    renderFull();
  }

  function startDeepThink(tier) {
    var s = STATE.activeScenario;
    if (!s.dtReport) return; // no DT for follow-ups
    STATE.dtProgress = 0;
    STATE.turns.push({ type: 'user', body: 'Run Deep-Think ' + tier + ' projection.', ts: nowHM() });
    goToDTRunning();
  }

  function goToDTRunning() {
    STATE.flow = 'dt-running';
    STATE.dtProgress = 0;
    chatSubtitle.textContent = '◆ Deep-Think running';
    chatSubtitle.className = 'panel-subtitle amber';
    chatInput.disabled = true;
    chatInput.value = '';
    runBtn.classList.remove('active');
    inputHint.textContent = '◇ Wait for completion or stop the run';
    renderFull();
    var duration = 6000, start = Date.now();
    var timer = setInterval(function() {
      var elapsed = Date.now() - start;
      STATE.dtProgress = Math.min(1, elapsed / duration);
      renderCenterAndIntel();
      renderThinking();
      renderFooter();
      if (STATE.dtProgress >= 1) { clearInterval(timer); goToDTReport(); }
    }, 200);
    STATE.timers.push(timer);
  }

  function goToDTReport() {
    clearTimers();
    STATE.flow = 'dt-report';
    STATE.dtProgress = 1;
    var s = STATE.activeScenario;
    STATE.turns.push({
      type: 'answer',
      body: 'Deep-Think Standard completed. Scenario report ready. ' + s.dtReport.stats.iterations + ' iterations · ' + s.dtReport.stats.cost + ' · ' + s.dtReport.stats.time + '.'
    });
    chatSubtitle.textContent = STATE.turns.filter(function(t){return t.type==='user';}).length + ' turns · DT ready';
    chatSubtitle.className = 'panel-subtitle green';
    chatInput.disabled = false;
    inputHint.textContent = 'Ask a follow-up on this dossier';
    renderFull();
  }

  // INPUT
  chatInput.addEventListener('input', function() {
    if (chatInput.value.trim().length > 0 && !chatInput.disabled) runBtn.classList.add('active');
    else runBtn.classList.remove('active');
  });
  runBtn.addEventListener('click', function() {
    if (!runBtn.classList.contains('active')) return;
    var txt = chatInput.value.trim();
    if (!txt) return;
    var scenarioKey = matchInput(txt);
    if (scenarioKey) {
      chatInput.value = '';
      runBtn.classList.remove('active');
      startScenario(scenarioKey);
    } else {
      askClarify(txt);
    }
  });
  chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (runBtn.classList.contains('active')) runBtn.click();
    }
  });

  // INIT
  resetToLanding();

})();
