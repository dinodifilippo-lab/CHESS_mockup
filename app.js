// GeoIntel Mockup -- Phase 2
// State machine: Landing -> Asking -> L1 Report -> DT Running -> DT Report

(function() {
  'use strict';

  // ========================================================================
  // STATE
  // ========================================================================

  var STATE = {
    view: 'chat',
    flow: 'landing',
    activeScenario: null,
    activeDossier: 'global',
    turns: [],
    dtTier: null,
    dtProgress: 0,
    timers: []
  };

  function clearTimers() {
    STATE.timers.forEach(function(t) { clearTimeout(t); clearInterval(t); });
    STATE.timers = [];
  }

  // ========================================================================
  // TAB ROUTING
  // ========================================================================

  var navTabs = document.querySelectorAll('.nav-tab');
  var views = document.querySelectorAll('.view');

  navTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-view');
      STATE.view = target;
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
  // DOSSIER SELECTOR
  // ========================================================================

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
  document.addEventListener('click', function() {
    dossierMenu.classList.remove('open');
  });

  function selectDossier(dossierId) {
    var d = window.GEODATA.dossiers.find(function(x) { return x.id === dossierId; });
    if (!d) return;
    STATE.activeDossier = dossierId;
    dossierName.textContent = d.name;
    ftDossier.textContent = d.name.toLowerCase();
    // reset flow to landing on dossier change
    resetToLanding();
  }

  // ========================================================================
  // SVG HELPER
  // ========================================================================

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

  function polar(cx, cy, r, angDeg) {
    var rad = (angDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function polToColor(p) {
    if (p === 'hostile') return '#C25D5D';
    if (p === 'aligned') return '#4A9F70';
    if (p === 'complex') return '#E8A93E';
    if (p === 'blue') return '#6A8DE8';
    if (p === 'red') return '#C25D5D';
    if (p === 'amber') return '#E8A93E';
    if (p === 'green') return '#4A9F70';
    if (p === 'dim-amber') return '#8E6A2D';
    return '#E8A93E';
  }

  // ========================================================================
  // GLOBAL GRAPH DATA (landing state)
  // ========================================================================

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
    { id: 'EGY', angle: 285 }, { id: 'SUD', angle: 258 }
  ];

  var GLOBAL_ARCS = [
    { s: 'USA', t: 'PRC', pol: 'complex', w: 4.9 }, { s: 'USA', t: 'RUS', pol: 'hostile', w: 4.4 },
    { s: 'USA', t: 'IRN', pol: 'hostile', w: 4.2 }, { s: 'USA', t: 'ISR', pol: 'aligned', w: 4.6 },
    { s: 'USA', t: 'EU', pol: 'aligned', w: 4.3 }, { s: 'USA', t: 'JPN', pol: 'aligned', w: 4.1 },
    { s: 'USA', t: 'KOR', pol: 'aligned', w: 3.9 }, { s: 'USA', t: 'TWN', pol: 'aligned', w: 4.0 },
    { s: 'USA', t: 'IND', pol: 'complex', w: 3.5 }, { s: 'USA', t: 'KSA', pol: 'complex', w: 3.7 },
    { s: 'USA', t: 'TUR', pol: 'complex', w: 3.4 }, { s: 'USA', t: 'UKR', pol: 'aligned', w: 4.2 },
    { s: 'USA', t: 'GBR', pol: 'aligned', w: 4.0 }, { s: 'PRC', t: 'RUS', pol: 'aligned', w: 4.1 },
    { s: 'PRC', t: 'TWN', pol: 'hostile', w: 4.6 }, { s: 'PRC', t: 'JPN', pol: 'complex', w: 3.6 },
    { s: 'PRC', t: 'KOR', pol: 'complex', w: 3.5 }, { s: 'PRC', t: 'IND', pol: 'complex', w: 3.8 },
    { s: 'PRC', t: 'IRN', pol: 'aligned', w: 3.4 }, { s: 'PRC', t: 'EU', pol: 'complex', w: 3.7 },
    { s: 'PRC', t: 'AUS', pol: 'complex', w: 3.2 }, { s: 'RUS', t: 'UKR', pol: 'hostile', w: 4.8 },
    { s: 'RUS', t: 'IRN', pol: 'aligned', w: 3.6 }, { s: 'RUS', t: 'BLR', pol: 'aligned', w: 3.4 },
    { s: 'RUS', t: 'EU', pol: 'hostile', w: 3.8 }, { s: 'RUS', t: 'TUR', pol: 'complex', w: 3.3 },
    { s: 'RUS', t: 'SYR', pol: 'aligned', w: 3.2 }, { s: 'IRN', t: 'ISR', pol: 'hostile', w: 4.5 },
    { s: 'IRN', t: 'KSA', pol: 'complex', w: 3.4 }, { s: 'IRN', t: 'SYR', pol: 'aligned', w: 3.3 },
    { s: 'ISR', t: 'KSA', pol: 'complex', w: 3.1 }, { s: 'ISR', t: 'EGY', pol: 'complex', w: 3.0 },
    { s: 'EU', t: 'UKR', pol: 'aligned', w: 4.1 }, { s: 'EU', t: 'GBR', pol: 'complex', w: 3.6 },
    { s: 'EU', t: 'DEU', pol: 'aligned', w: 3.9 }, { s: 'EU', t: 'POL', pol: 'aligned', w: 3.4 },
    { s: 'JPN', t: 'KOR', pol: 'complex', w: 3.3 }, { s: 'JPN', t: 'TWN', pol: 'aligned', w: 3.5 },
    { s: 'KOR', t: 'TWN', pol: 'complex', w: 3.0 }, { s: 'IND', t: 'PHL', pol: 'complex', w: 3.0 },
    { s: 'TUR', t: 'SYR', pol: 'hostile', w: 3.2 }, { s: 'KSA', t: 'EGY', pol: 'aligned', w: 3.1 }
  ];

  function computePositions(cx, cy, rCentral, rPeripheral) {
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

  function renderGlobalGraph(svgId) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 900 620');
    svg.innerHTML = '';

    var positions = computePositions(450, 310, 175, 265);

    var ringsG = svgEl('g');
    [90, 175, 265].forEach(function(r) {
      ringsG.appendChild(svgEl('circle', {
        cx: 450, cy: 310, r: r, fill: 'none',
        stroke: '#1F2842', 'stroke-width': 1,
        'stroke-dasharray': '2 6', opacity: 0.5
      }));
    });
    svg.appendChild(ringsG);

    var arcsG = svgEl('g');
    GLOBAL_ARCS.forEach(function(a) {
      var s = positions[a.s], t = positions[a.t];
      if (!s || !t) return;
      var color = polToColor(a.pol);
      var op = Math.max(0.3, Math.min(0.75, (a.w - 2.8) / 2.8));
      var thickness = a.w >= 4.3 ? 2 : (a.w >= 3.7 ? 1.3 : 0.9);
      var dx = t.x - s.x, dy = t.y - s.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var offset = dist * 0.08;
      var nx = -dy / dist, ny = dx / dist;
      var ctrlX = (s.x + t.x) / 2 + nx * offset;
      var ctrlY = (s.y + t.y) / 2 + ny * offset;
      arcsG.appendChild(svgEl('path', {
        d: 'M ' + s.x + ' ' + s.y + ' Q ' + ctrlX + ' ' + ctrlY + ' ' + t.x + ' ' + t.y,
        stroke: color, 'stroke-width': thickness, fill: 'none', opacity: op
      }));
    });
    svg.appendChild(arcsG);

    var nodesG = svgEl('g');
    Object.keys(positions).forEach(function(id) {
      var p = positions[id];
      var g = svgEl('g', { transform: 'translate(' + p.x + ',' + p.y + ')' });
      if (p.central) {
        g.appendChild(svgEl('circle', {
          r: 20, fill: '#0D1220', stroke: '#8E6A2D', 'stroke-width': 1.5
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#A0A9BD', 'font-family': 'Georgia, serif',
          'font-size': 11, 'font-weight': 500
        }, p.label));
      } else {
        g.appendChild(svgEl('circle', {
          r: 11, fill: '#12172A', stroke: '#3D4A73', 'stroke-width': 1
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#6B7590', 'font-family': 'Courier New, monospace',
          'font-size': 8, 'letter-spacing': 0.5
        }, p.label));
      }
      nodesG.appendChild(g);
    });
    svg.appendChild(nodesG);
  }

  function renderSubgraph(svgId, scenario) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 900 620');
    svg.innerHTML = '';

    var positions = computePositions(450, 310, 175, 265);

    // Focused actors as a Set
    var focus = {};
    scenario.subgraph.focus.forEach(function(a) { focus[a] = true; });
    var periph = {};
    scenario.subgraph.peripheral.forEach(function(a) { periph[a] = true; });

    // Full graph dimmed
    var ringsG = svgEl('g');
    [90, 175, 265].forEach(function(r) {
      ringsG.appendChild(svgEl('circle', {
        cx: 450, cy: 310, r: r, fill: 'none',
        stroke: '#1F2842', 'stroke-width': 1,
        'stroke-dasharray': '2 6', opacity: 0.3
      }));
    });
    svg.appendChild(ringsG);

    // Global arcs dimmed
    var dimArcsG = svgEl('g');
    GLOBAL_ARCS.forEach(function(a) {
      if (focus[a.s] && focus[a.t]) return; // will be drawn as focus
      var s = positions[a.s], t = positions[a.t];
      if (!s || !t) return;
      var dx = t.x - s.x, dy = t.y - s.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var offset = dist * 0.08;
      var nx = -dy / dist, ny = dx / dist;
      var ctrlX = (s.x + t.x) / 2 + nx * offset;
      var ctrlY = (s.y + t.y) / 2 + ny * offset;
      dimArcsG.appendChild(svgEl('path', {
        d: 'M ' + s.x + ' ' + s.y + ' Q ' + ctrlX + ' ' + ctrlY + ' ' + t.x + ' ' + t.y,
        stroke: polToColor(a.pol), 'stroke-width': 0.8, fill: 'none', opacity: 0.15
      }));
    });
    svg.appendChild(dimArcsG);

    // Focus subgraph arcs (from scenario)
    var focusArcsG = svgEl('g');
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
      focusArcsG.appendChild(svgEl('path', {
        d: 'M ' + s.x + ' ' + s.y + ' Q ' + ctrlX + ' ' + ctrlY + ' ' + t.x + ' ' + t.y,
        stroke: color, 'stroke-width': thickness, fill: 'none', opacity: 0.85
      }));
    });
    svg.appendChild(focusArcsG);

    // Focus ellipse (dashed) around focus actors
    var focusPts = scenario.subgraph.focus.map(function(id) { return positions[id]; }).filter(Boolean);
    if (focusPts.length > 0) {
      var minX = 900, maxX = 0, minY = 620, maxY = 0;
      focusPts.forEach(function(p) {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
      });
      var ecx = (minX + maxX) / 2;
      var ecy = (minY + maxY) / 2;
      var erx = (maxX - minX) / 2 + 50;
      var ery = (maxY - minY) / 2 + 50;
      svg.appendChild(svgEl('ellipse', {
        cx: ecx, cy: ecy, rx: erx, ry: ery,
        fill: 'none', stroke: '#E8A93E', 'stroke-width': 1.5,
        'stroke-dasharray': '6 6', opacity: 0.6
      }));
    }

    // Nodes: dimmed by default, focused with amber ring, peripheral (scenario) medium
    var nodesG = svgEl('g');
    Object.keys(positions).forEach(function(id) {
      var p = positions[id];
      var g = svgEl('g', { transform: 'translate(' + p.x + ',' + p.y + ')' });
      var isFocus = !!focus[id];
      var isPeriph = !!periph[id];

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
          r: 14, fill: '#0D1220', stroke: '#8E6A2D', 'stroke-width': 1.5, opacity: 0.7
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#A0A9BD', 'font-family': 'Georgia, serif',
          'font-size': 9, opacity: 0.9
        }, id));
      } else if (p.central) {
        g.appendChild(svgEl('circle', {
          r: 20, fill: '#0D1220', stroke: '#2A3251', 'stroke-width': 1, opacity: 0.25
        }));
        g.appendChild(svgEl('text', {
          'text-anchor': 'middle', 'dominant-baseline': 'central',
          fill: '#4A5A7A', 'font-family': 'Georgia, serif',
          'font-size': 11, opacity: 0.4
        }, id));
      } else {
        g.appendChild(svgEl('circle', {
          r: 11, fill: '#12172A', stroke: '#3D4A73', 'stroke-width': 1, opacity: 0.18
        }));
      }
      nodesG.appendChild(g);
    });
    svg.appendChild(nodesG);
  }

  // ========================================================================
  // TIMESTAMP
  // ========================================================================

  function nowHM() {
    var d = new Date();
    var h = d.getHours(); if (h < 10) h = '0' + h;
    var m = d.getMinutes(); if (m < 10) m = '0' + m;
    return h + ':' + m;
  }

  // ========================================================================
  // CHAT BODY RENDERING
  // ========================================================================

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
  var footerLeft = document.getElementById('footer-left');
  var footerRight = document.getElementById('footer-right');

  function renderChatBody() {
    chatBody.innerHTML = '';

    if (STATE.flow === 'landing') {
      chatBody.innerHTML =
        '<div class="opening-message">' +
        '<p><em>Ready to answer. Ask about the state of any actor, the drivers of a dossier, or a projection over a horizon you specify. I will pull the relevant subgraph and answer with sources.</em></p>' +
        '</div>' +
        '<div class="suggested-prompts">' +
        '<div class="prompts-label">TRY ONE OF THESE</div>' +
        '<button class="prompt-btn" data-prompt="taiwan-asis"><span class="prompt-arrow">→</span><span class="prompt-text"><em>Baseline path of Taiwan Strait stability over the next 12 months</em></span></button>' +
        '<button class="prompt-btn" data-prompt="ukraine-whatif"><span class="prompt-arrow">→</span><span class="prompt-text"><em>What if Ukraine\'s Western support drops materially in Q4 2026?</em></span></button>' +
        '<button class="prompt-btn" data-prompt="taiwan-sens"><span class="prompt-arrow">→</span><span class="prompt-text"><em>Which relationships hold the most leverage over Taiwan Strait kinetic risk?</em></span></button>' +
        '</div>';
      attachPromptClicks();
      return;
    }

    // Render turns
    STATE.turns.forEach(function(turn) {
      var div = document.createElement('div');
      div.className = 'chat-turn';
      if (turn.type === 'user') {
        div.innerHTML =
          '<div class="turn-user"><div class="turn-body">' + turn.body + '</div>' +
          '<div class="turn-ts">' + turn.ts + '</div></div>';
      } else if (turn.type === 'clarify') {
        div.innerHTML =
          '<div class="turn-clarify"><div class="clarify-label">◇ A quick refinement</div>' +
          '<div class="turn-body">' + turn.body + '</div></div>';
      } else if (turn.type === 'confirm') {
        div.innerHTML = '<div class="turn-confirm">' + turn.body + '</div>';
      } else if (turn.type === 'answer') {
        div.innerHTML =
          '<div class="turn-answer"><span class="answer-check">✓</span>' +
          '<div class="turn-body">' + turn.body + '</div></div>';
      } else if (turn.type === 'suggest') {
        div.innerHTML =
          '<div class="turn-suggest"><span class="suggest-diamond">◇</span>' +
          '<div class="turn-body">' + turn.body + '</div></div>';
      }
      chatBody.appendChild(div);
    });

    // Thinking block (asking + dt-running states)
    if (STATE.flow === 'asking' || STATE.flow === 'dt-running') {
      var thinkDiv = document.createElement('div');
      thinkDiv.className = 'thinking-block';
      thinkDiv.id = 'thinking-block';
      chatBody.appendChild(thinkDiv);
      renderThinking();
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function renderThinking() {
    var block = document.getElementById('thinking-block');
    if (!block) return;
    var s = STATE.activeScenario;
    if (!s) return;

    var isDT = STATE.flow === 'dt-running';
    var steps = isDT ? [
      'Subgraph resolved · 6 actors, 12 arcs · 0.4s',
      'First-mover selected (' + (s.subgraph.focus[0] || 'USA') + ' · high confidence) · 1.2s',
      '4 seeds generated (Direction × Reach) · 14s',
      'Full expansion turns 0-2 (240 nodes) · 42s',
      'MCTS sampling · turn 3-4 · iter ' + Math.floor(STATE.dtProgress * 200) + ' / ~200',
      'Aggregating outcomes & probabilities',
      'Composing scenario report'
    ] : s.thinkingSteps;

    var progressLabel = isDT ? Math.floor(STATE.dtProgress * 100) + '%' : Math.floor(STATE.dtProgress * 100) + '%';
    var timeLabel = isDT ? '2m 14s of ~3m 20s' : '';

    var itemsHtml = steps.map(function(step, i) {
      var progress = STATE.dtProgress;
      var itemThreshold = (i + 1) / steps.length;
      var cls, mark;
      if (progress >= itemThreshold) { cls = 'done'; mark = '✓'; }
      else if (progress >= i / steps.length) { cls = 'active pulse-amber'; mark = '●'; }
      else { cls = ''; mark = '○'; }
      return '<li class="thinking-item ' + cls + '"><span class="ti-mark">' + mark + '</span><span>' + step + '</span></li>';
    }).join('');

    block.innerHTML =
      '<div class="thinking-hdr">' +
      '<span>● WORKING ' + (isDT ? '· ' + progressLabel : 'ON IT...') + '</span>' +
      (timeLabel ? '<span class="thinking-progress">' + timeLabel + '</span>' : '') +
      '</div>' +
      '<ul class="thinking-list">' + itemsHtml + '</ul>';
  }

  function attachPromptClicks() {
    document.querySelectorAll('.prompt-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var promptId = btn.getAttribute('data-prompt');
        startScenario(promptId);
      });
    });
  }

  // ========================================================================
  // CENTER + INTEL PANELS RENDERING PER STATE
  // ========================================================================

  var centerPanel = document.getElementById('center-panel');
  var intelPanel = document.getElementById('intel-panel');

  function renderCenterAndIntel() {
    if (STATE.flow === 'landing') { renderLandingCenter(); renderLandingIntel(); }
    else if (STATE.flow === 'asking') { renderAskingCenter(); renderAskingIntel(); }
    else if (STATE.flow === 'l1-report') { renderL1ReportCenter(); renderL1ReportIntel(); }
    else if (STATE.flow === 'dt-running') { renderDTRunningCenter(); renderDTRunningIntel(); }
    else if (STATE.flow === 'dt-report') { renderDTReportCenter(); renderDTReportIntel(); }
  }

  function renderLandingCenter() {
    centerPanel.innerHTML =
      '<div class="center-hdr"><div class="center-hdr-left">' +
      '<div class="ctx-tag">GLOBAL · MULTI-DOSSIER</div>' +
      '<div class="center-title">The world in arcs</div>' +
      '</div><div class="center-hdr-right">' +
      '<div class="meta-row"><span class="meta-lbl">ACTORS</span><span class="meta-val">147</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ARCS SHOWN</span><span class="meta-val">428</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">FILTER</span><span class="meta-val">weight ≥ 3</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ZOOM</span><span class="meta-val">1.0×</span></div>' +
      '</div></div>' +
      '<div class="graph-canvas"><svg id="global-graph" preserveAspectRatio="xMidYMid meet"></svg>' +
      '<div class="graph-legend"><div class="legend-title">LEGEND</div>' +
      '<div class="legend-row"><span class="lg-swatch amber-ring"></span><span>Central actor</span></div>' +
      '<div class="legend-row"><span class="lg-swatch muted-ring"></span><span>Peripheral</span></div>' +
      '<div class="legend-row"><span class="lg-line red"></span><span>Antagonistic</span></div>' +
      '<div class="legend-row"><span class="lg-line green"></span><span>Aligned</span></div>' +
      '<div class="legend-row"><span class="lg-line amber"></span><span>Complex</span></div>' +
      '<div class="legend-row"><span class="lg-line thick"></span><span>Weight ≥ 4</span></div>' +
      '</div></div>' +
      '<div class="graph-controls">' +
      '<button class="gc-btn active">◉ WEIGHT ≥ 3</button>' +
      '<button class="gc-btn">FORCE LAYOUT</button>' +
      '<button class="gc-btn">FILTERS</button>' +
      '<div class="gc-zoom"><button class="gc-zoom-btn">−</button><span class="gc-zoom-lbl">ZOOM</span><button class="gc-zoom-btn">+</button></div>' +
      '</div>' +
      '<div class="graph-hints"><em>ZOOM IN reveals lower-weight arcs · CLICK A NODE to focus &amp; open panel</em></div>';
    renderGlobalGraph('global-graph');
  }

  function renderLandingIntel() {
    intelPanel.innerHTML =
      '<div class="intel-section"><div class="section-label">GLOBAL EVIDENCE</div>' +
      '<div class="gauge-block"><div class="gauge-5bar">' +
      '<div class="gb-seg on"></div><div class="gb-seg on"></div><div class="gb-seg on"></div><div class="gb-seg on partial"></div><div class="gb-seg"></div>' +
      '</div><div class="gauge-value">3.8 <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">MODERATE-HIGH</div></div></div>' +
      '<div class="intel-section"><div class="section-label">MOST ACTIVE ARCS</div><ol class="arcs-list">' +
      '<li class="arc-row"><span class="arc-idx">01</span><span class="arc-pair hostile">RUS ↔ UKR</span><span class="vol-tag hi">H</span><span class="arc-w">w 4.8</span></li>' +
      '<li class="arc-row"><span class="arc-idx">02</span><span class="arc-pair hostile">IRN ↔ ISR</span><span class="vol-tag hi">H</span><span class="arc-w">w 4.5</span></li>' +
      '<li class="arc-row"><span class="arc-idx">03</span><span class="arc-pair complex">USA ↔ PRC</span><span class="vol-tag med">M</span><span class="arc-w">w 4.9</span></li>' +
      '<li class="arc-row"><span class="arc-idx">04</span><span class="arc-pair hostile">USA ↔ IRN</span><span class="vol-tag hi">H</span><span class="arc-w">w 4.2</span></li>' +
      '<li class="arc-row"><span class="arc-idx">05</span><span class="arc-pair hostile">PRC ↔ TWN</span><span class="vol-tag med">M</span><span class="arc-w">w 4.6</span></li>' +
      '</ol></div>' +
      '<div class="intel-section"><div class="section-label">RECENT UPDATES</div>' +
      '<div class="update-row"><div class="update-meta"><span class="src-tag">MERICS</span><span class="update-ts">2 MIN AGO</span></div>' +
      '<div class="update-headline"><em>Beijing signals restraint on Taiwan overflight after MOFA briefing</em></div></div>' +
      '<div class="update-row"><div class="update-meta"><span class="src-tag">ECFR</span><span class="update-ts">17 MIN AGO</span></div>' +
      '<div class="update-headline"><em>Ukraine Q4 funding gap widens as US supplemental stalls in Senate</em></div></div>' +
      '<div class="update-row"><div class="update-meta"><span class="src-tag">ISPI</span><span class="update-ts">41 MIN AGO</span></div>' +
      '<div class="update-headline"><em>Oman-mediated backchannel between Tehran and Washington resumes</em></div></div>' +
      '</div>';
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
      '<div class="meta-row"><span class="meta-lbl">REST OF GRAPH</span><span class="meta-val">dimmed</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ZOOM</span><span class="meta-val">1.8×</span></div>' +
      '</div></div>' +
      '<div class="graph-canvas"><svg id="subgraph-svg" class="subgraph-svg" preserveAspectRatio="xMidYMid meet"></svg>' +
      '<div class="graph-status"><div class="gs-title">◉ SUBGRAPH FILTERED BY QUESTION</div>' +
      '<div class="gs-body">Click a dimmed node to include it in the analysis, or click the background to restore the global view.</div></div>' +
      '</div>' +
      '<div class="graph-controls">' +
      '<button class="gc-btn active">◉ SUBGRAPH FOCUS</button>' +
      '<button class="gc-btn">RESTORE GLOBAL</button>' +
      '<div class="gc-zoom"><button class="gc-zoom-btn">−</button><span class="gc-zoom-lbl">ZOOM</span><button class="gc-zoom-btn">+</button></div>' +
      '</div>';
    renderSubgraph('subgraph-svg', s);
  }

  function renderAskingIntel() {
    var s = STATE.activeScenario;
    var arcRowsHtml = s.subgraph.arcs.slice(0, 5).map(function(a, i) {
      var idx = i + 1; if (idx < 10) idx = '0' + idx;
      var volLbl = a.vol; var volCls = a.vol === 'H' ? 'hi' : a.vol === 'M' ? 'med' : 'low';
      return '<li class="arc-row"><span class="arc-idx">' + idx + '</span>' +
             '<span class="arc-pair ' + a.pol + '">' + a.s + ' ↔ ' + a.t + '</span>' +
             '<span class="vol-tag ' + volCls + '">' + volLbl + '</span>' +
             '<span class="arc-w">w ' + a.w.toFixed(1) + '</span></li>';
    }).join('');
    var sourcesHtml = 'MERICS · ECFR · ISPI · CSIS · Bruegel · FP'.split(' · ').slice(0, s.subgraph.sourceCount).map(function(src) {
      return '<div class="source-row"><span class="source-name">' + src + '</span><span class="source-passages">' +
             Math.floor(s.subgraph.passageCount / s.subgraph.sourceCount) + ' passages</span></div>';
    }).join('');
    intelPanel.innerHTML =
      '<div class="intel-section"><span class="intel-badge">◉ QUESTION CONTEXT</span>' +
      '<div class="intel-focus-card"><div class="focus-title">' + s.dossier + '</div>' +
      '<div class="focus-meta">' + s.subgraph.actorCount + ' actors · ' + s.subgraph.arcCount + ' arcs · ' + s.subgraph.passageCount + ' passages</div></div></div>' +
      '<div class="intel-section"><div class="section-label">SUBGRAPH EVIDENCE STRENGTH</div>' +
      '<div class="gauge-block">' + gaugeHtml(s.evidenceStrength) +
      '<div class="gauge-value">' + s.evidenceStrength.toFixed(1) + ' <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">' + s.evidenceCaption + '</div></div></div>' +
      '<div class="intel-section"><div class="section-label">TOP ARCS IN SCOPE</div><ol class="arcs-list">' + arcRowsHtml + '</ol></div>' +
      '<div class="intel-section"><div class="section-label">SOURCES TAPPED SO FAR</div>' + sourcesHtml + '</div>';
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

    centerPanel.innerHTML =
      '<div class="report-meta-bar">' +
      '<span class="rmb-badge">◆ L1 ANSWER</span>' +
      '<span>' + s.dossier + '</span><span class="rmb-sep">·</span>' +
      '<span>Level 1 · RAG</span><span class="rmb-sep">·</span>' +
      '<span>Composed ' + r.composedAt + '</span>' +
      '<div class="rmb-actions"><button class="rmb-action">SAVE</button>' +
      '<button class="rmb-action">SHARE</button>' +
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
      '</div>' +
      '<div class="dt-tier-block">' +
      '<div class="tier-card" data-tier="light">' +
      '<div class="tier-title">Light</div>' +
      '<div class="tier-cost">~ $0.05</div>' +
      '<div class="tier-desc">Top-N seeds only, shallow tree. Fast, indicative.</div>' +
      '<button class="tier-btn">RUN LIGHT</button></div>' +
      '<div class="tier-card recommended" data-tier="standard">' +
      '<div class="tier-title amber">Standard <span class="tier-reco">RECOMMENDED</span></div>' +
      '<div class="tier-cost amber">~ $0.30</div>' +
      '<div class="tier-desc">Full seeds + MCTS. Balanced depth and cost.</div>' +
      '<button class="tier-btn filled">◆ RUN STANDARD</button></div>' +
      '<div class="tier-card" data-tier="heavy">' +
      '<div class="tier-title">Heavy</div>' +
      '<div class="tier-cost red">~ $1.20</div>' +
      '<div class="tier-desc">Deeper tree, more iterations, validation loop.</div>' +
      '<button class="tier-btn">RUN HEAVY</button></div>' +
      '</div>';

    // Attach tier click handlers
    document.querySelectorAll('.tier-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var tier = card.getAttribute('data-tier');
        startDeepThink(tier);
      });
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
      '<div class="gauge-caption">' + s.evidenceCaption + '</div></div>' +
      '<div class="gauge-note">Cross-source consensus is high on direct arcs.</div></div>' +
      '<div class="intel-section"><div class="section-label">TOP ARCS CITED</div><ol class="arcs-list">' + arcRowsHtml + '</ol></div>' +
      '<div class="intel-section"><div class="section-label">SOURCES CITED (' + r.sources.length + ')</div>' + sourcesHtml + '</div>' +
      '<div class="intel-section"><div class="divergence-strip">' +
      '<span class="divergence-label">◇ Divergence flagged</span>' + r.divergence + '</div></div>';
  }

  function renderDTRunningCenter() {
    var s = STATE.activeScenario;
    var progress = STATE.dtProgress;
    var phases = ['Setup &amp; seeds', 'Full expansion (t0-t2)', 'MCTS (t3-t5)', 'Aggregate outcomes', 'Compose report'];
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
      '<div class="meta-row"><span class="meta-lbl">ELAPSED</span><span class="meta-val">' + Math.floor(progress * 200) + 's</span></div>' +
      '<div class="meta-row"><span class="meta-lbl">ETA</span><span class="meta-val">' + Math.floor((1 - progress) * 200) + 's</span></div>' +
      '</div></div>' +
      '<div class="dt-phase-bar">' + phaseHtml + '</div>' +
      '<div class="dt-counters">' +
      '<div class="counter-cell"><span class="counter-lbl">ITERATIONS</span>' +
      '<span class="counter-val">' + mctsIter + ' <span style="font-family:Courier New,monospace;font-size:12px;color:#6B7590">/ ~200</span></span>' +
      '<span class="counter-sub green">▲ 3.2/s</span></div>' +
      '<div class="counter-cell"><span class="counter-lbl">SEEDS</span>' +
      '<span class="counter-val">4</span><span class="counter-sub">scenarios</span></div>' +
      '<div class="counter-cell"><span class="counter-lbl">NODES</span>' +
      '<span class="counter-val">' + (240 + Math.floor(progress * 1000)) + '</span>' +
      '<span class="counter-sub green">+1 dynamic</span></div>' +
      '<div class="counter-cell"><span class="counter-lbl">ACTORS</span>' +
      '<span class="counter-val">7 <span style="font-family:Courier New,monospace;font-size:12px;color:#6B7590">/ 12</span></span>' +
      '<span class="counter-sub">candidates</span></div>' +
      '<div class="counter-cell accent"><span class="counter-lbl">TURN</span>' +
      '<span class="counter-val">t = ' + Math.min(5, Math.floor(progress * 6)) + ' <span style="font-family:Courier New,monospace;font-size:12px">/ 5 max</span></span>' +
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

    var cols = 6;
    var colW = 900 / cols;
    var activeCol = Math.min(cols - 1, Math.floor(progress * cols));

    // Column guides
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

    // Root
    svg.appendChild(svgEl('circle', {
      cx: colW / 2, cy: 160, r: 10, fill: '#1A3520', stroke: '#4A9F70', 'stroke-width': 2
    }));
    svg.appendChild(svgEl('text', {
      x: colW / 2, y: 145, 'text-anchor': 'middle',
      fill: '#A0D0B0', 'font-family': 'Courier New, monospace', 'font-size': 9
    }, 'START'));

    // Seed branches at t=1
    var seedLabels = ['Contain', 'Escalate', 'Retaliate + Mediate', 'Freeze'];
    var seedYs = [60, 120, 200, 260];
    for (var i = 0; i < 4; i++) {
      var isModal = i === 2;
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
      svg.appendChild(svgEl('text', {
        x: colW * 1.5, y: seedYs[i] - 14, 'text-anchor': 'middle',
        fill: isModal ? '#E8A93E' : '#6B7590',
        'font-family': 'Courier New, monospace', 'font-size': 8
      }, 'S' + (i + 1) + ' ' + seedLabels[i]));
    }

    // t=2..5 nodes proportional to progress
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

        // Connecting line back
        var prevY = 40 + (Math.floor(k * (nodesPerCol[c2 - 2] || 4) / n) / ((nodesPerCol[c2 - 2] || 4) - 1 || 1)) * 240;
        svg.appendChild(svgEl('line', {
          x1: colW * (c2 - 0.5) + 6, y1: prevY, x2: xPos - 6, y2: y,
          stroke: isAmber ? '#E8A93E' : '#3D4A73',
          'stroke-width': isAmber ? 1.2 : 0.6,
          opacity: isDashed ? 0.3 : 0.6,
          'stroke-dasharray': isDashed ? '3 4' : 'none'
        }));

        svg.appendChild(svgEl('circle', {
          cx: xPos, cy: y, r: isCurrent ? 7 : 5,
          fill: isCurrent ? '#E8A93E' : (isAmber ? '#1A1710' : (isDashed ? 'none' : '#1A3520')),
          stroke: isCurrent ? '#FFFFFF' : (isAmber ? '#E8A93E' : (isDashed ? '#6B7590' : '#4A9F70')),
          'stroke-width': isCurrent ? 2 : 1,
          'stroke-dasharray': isDashed ? '2 2' : 'none',
          opacity: isDashed ? 0.5 : 1
        }));
      }
    }

    // Rollouts pending label
    svg.appendChild(svgEl('text', {
      x: colW * 5.5, y: 300, 'text-anchor': 'middle',
      fill: '#6B7590', 'font-family': 'Courier New, monospace',
      'font-size': 9, 'font-style': 'italic'
    }, 'Rollouts pending'));
  }

  function renderDTRunningIntel() {
    var s = STATE.activeScenario;
    var progress = STATE.dtProgress;
    var costNow = (progress * 0.28).toFixed(2);
    var costPct = progress * 50; // 50% of the bar at completion

    intelPanel.innerHTML =
      '<div class="intel-section"><div class="dt-cost-block">' +
      '<div class="cost-live">$' + costNow + '<span class="cost-live-sub">/ ~$0.30</span></div>' +
      '<div class="cost-caption">ACCUMULATED · STANDARD TIER</div>' +
      '<div class="cost-bar-wrap"><div class="cost-bar-fill" style="width:' + costPct + '%"></div></div>' +
      '<div class="cost-marks"><span>$0</span><span class="cm-now">▲ now</span><span>$0.30 est</span><span class="cm-cap">$0.60 hard cap</span></div>' +
      '</div></div>' +
      '<div class="intel-section"><div class="section-label">ACTORS IN PLAY</div>' +
      s.subgraph.focus.slice(0, 6).map(function(a, i) {
        var roles = ['First mover', 'Retaliator', 'Aligned pressure', 'Mediator', 'Proxy channel', 'Regional'];
        var tags = ['FM', '1H', '2H', '3H', '4H', '5H'];
        return '<div class="actor-play-row"><span class="ap-code">' + a + '</span>' +
               '<span class="ap-role">' + roles[i] + '</span>' +
               '<span class="ap-tag">' + tags[i] + '</span></div>';
      }).join('') +
      '<div class="actor-play-row"><span class="ap-code" style="color:#A0D0B0">ISI</span>' +
      '<span class="ap-role">Dynamic add · seed 3</span><span class="ap-tag" style="color:#4A9F70">DYN</span></div>' +
      '</div>' +
      '<div class="intel-section"><div class="section-label">CURRENT MOVE BEING EVALUATED</div>' +
      '<div class="current-move-card"><div class="cm-label">◉ SEED 3 · t = ' + Math.min(5, Math.floor(progress * 6)) + ' · MCTS SELECTION</div>' +
      '<div class="cm-body"><em>' + s.subgraph.focus[0] + '</em> shifts polarity on <em>' +
      s.subgraph.focus[0] + '-' + (s.subgraph.focus[3] || s.subgraph.focus[1]) +
      '</em> toward cooperative, activating mediation while <em>' + (s.subgraph.focus[2] || s.subgraph.focus[1]) +
      '</em> continues low-intensity pressure.</div>' +
      '<div class="cm-stats"><span class="cm-delta">Propagated delta: +0.42</span> · UCB score: 1.87 · Visits: ' + (10 + Math.floor(progress * 40)) + '</div>' +
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

    centerPanel.innerHTML =
      '<div class="report-meta-bar">' +
      '<span class="rmb-badge dt">◆ DEEP-THINK · STANDARD</span>' +
      '<span>' + s.dossier + '</span><span class="rmb-sep">·</span>' +
      '<span>Horizon 5 turns</span><span class="rmb-sep">·</span>' +
      '<span>' + r.stats.iterations + ' iterations</span><span class="rmb-sep">·</span>' +
      '<span>Composed ' + nowHM() + '</span>' +
      '<div class="rmb-actions"><button class="rmb-action">SAVE</button>' +
      '<button class="rmb-action">SHARE</button>' +
      '<button class="rmb-action">↓ PDF</button></div>' +
      '</div>' +
      '<h1 class="report-title">' + r.title + '</h1>' +
      '<div class="report-subtitle">' + r.subtitle + '</div>' +
      '<div class="report-block thesis"><div class="rb-label">THESIS</div><div class="rb-body">' + r.thesis + '</div></div>' +
      '<div class="dt-two-col">' +
      '<div class="dt-left"><div class="dt-scenarios-label">DISTRIBUTION READING · ' + r.scenarios.length + ' SCENARIOS</div>' + scHtml + '</div>' +
      '<div class="dt-right"><div class="dt-right-hdr">' +
      '<span class="dtr-title">◉ LATTICE · ' + r.stats.iterations + ' TRAJECTORIES</span>' +
      '<button class="dtr-expand">EXPAND ↗</button></div>' +
      '<svg id="dt-lattice-svg" preserveAspectRatio="xMidYMid meet"></svg>' +
      '<div class="lattice-caption">' + r.latticeCaption + '</div>' +
      '</div></div>' +
      '<div class="report-block sensitivity"><div class="rb-label">SENSITIVITY · WHAT MOVES THE DISTRIBUTION</div>' +
      '<div class="rb-body">' + r.sensitivity + '</div></div>' +
      '<div class="report-block implication"><div class="rb-label">IMPLICATION FOR THE ANALYST</div>' +
      '<div class="rb-body">' + r.implication + '</div></div>' +
      '<div class="feedback-strip">' +
      '<span class="fb-label">WAS THIS USEFUL?</span>' +
      '<button class="fb-btn">◍ Helpful</button>' +
      '<button class="fb-btn">◍ Not useful</button>' +
      '<span class="fb-note">helps calibrate the system on pilot</span>' +
      '</div>' +
      '<div class="rerun-strip">' +
      '<div class="rerun-text">Not robust enough? Deepen the analysis at higher tier -- same question, more iterations, tighter intervals.</div>' +
      '<button class="rerun-btn" id="rerun-heavy">◆ RE-RUN HEAVY ($1.20)</button>' +
      '</div>';

    renderLattice('dt-lattice-svg', r);
    document.getElementById('rerun-heavy').addEventListener('click', function() {
      startDeepThink('heavy');
    });
    document.querySelectorAll('.fb-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { btn.classList.toggle('selected'); });
    });
  }

  function renderLattice(svgId, r) {
    var svg = document.getElementById(svgId);
    if (!svg) return;
    svg.setAttribute('viewBox', '0 0 500 300');
    svg.innerHTML = '';

    var cols = 6;
    var colW = 500 / cols;

    for (var c = 0; c < cols; c++) {
      svg.appendChild(svgEl('line', {
        x1: colW * c + colW / 2, y1: 20, x2: colW * c + colW / 2, y2: 280,
        stroke: '#1F2842', 'stroke-width': 0.5, 'stroke-dasharray': '2 4', opacity: 0.4
      }));
    }

    // Root
    svg.appendChild(svgEl('circle', {
      cx: colW / 2, cy: 150, r: 6, fill: '#0D1220', stroke: '#4A9F70', 'stroke-width': 1.5
    }));

    // 4 seed classes with band widths proportional to final %
    var scenarios = r.scenarios;
    var yPositions = [50, 100, 170, 240];
    for (var i = 0; i < scenarios.length; i++) {
      var sc = scenarios[i];
      var color = polToColor(sc.pol);
      var bandThick = Math.max(2, sc.pct / 8);
      // Path from root to terminal
      var d = 'M ' + (colW / 2 + 6) + ' 150 ';
      for (var c2 = 1; c2 < cols; c2++) {
        var x = colW * c2 + colW / 2;
        var yProg = 150 + (yPositions[i] - 150) * (c2 / (cols - 1));
        d += 'L ' + x + ' ' + yProg + ' ';
      }
      svg.appendChild(svgEl('path', {
        d: d, stroke: color, 'stroke-width': bandThick, fill: 'none', opacity: 0.5
      }));
      // Terminal label
      svg.appendChild(svgEl('circle', {
        cx: colW * 5.5, cy: yPositions[i], r: 8, fill: color, opacity: 0.85
      }));
      svg.appendChild(svgEl('text', {
        x: colW * 5.5 + 14, y: yPositions[i] + 3,
        fill: color, 'font-family': 'Courier New, monospace', 'font-size': 10, 'font-weight': 700
      }, sc.code + ' ' + sc.pct + '%'));
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
      '<div class="dist-caption">Modal ' + r.scenarios[1].code + ' · Right-tail heavy · Left-tail thin</div></div>' +
      '<div class="intel-section"><div class="section-label">REPORT ROBUSTNESS</div>' +
      '<div class="gauge-block">' + gaugeHtml(r.robustness) +
      '<div class="gauge-value">' + r.robustness.toFixed(1) + ' <span class="gauge-value-slash">/</span> 5</div>' +
      '<div class="gauge-caption">' + r.robustnessCaption + '</div></div>' +
      '<div class="gauge-note">' + r.robustnessNote + '</div></div>' +
      '<div class="intel-section"><div class="section-label">KEY DRIVING ARCS</div>' + arcsHtml + '</div>' +
      '<div class="intel-section"><div class="section-label">ASSUMPTIONS</div><ul class="assumptions-list">' + assumHtml + '</ul></div>' +
      '<div class="intel-section"><div class="section-label">RUN STATS</div><div class="stats-rows">' +
      '<div class="stat-row"><span class="stat-lbl">TIER</span><span class="stat-val amber">' + r.stats.tier + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">ITERATIONS</span><span class="stat-val">' + r.stats.iterations + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">NODES</span><span class="stat-val">' + r.stats.nodes + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">TOTAL TIME</span><span class="stat-val">' + r.stats.time + '</span></div>' +
      '<div class="stat-row"><span class="stat-lbl">COST</span><span class="stat-val amber">' + r.stats.cost + '</span></div>' +
      '</div></div>';
  }

  // ========================================================================
  // FOOTER RENDERING PER STATE
  // ========================================================================

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
        '<span class="ft-item amber"><span class="ft-lbl">COST NOW</span> $0.014 of ~$0.02</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status amber">GENERATING · ' + Math.floor(STATE.dtProgress * 100) + '%</span>' +
        '<button class="ft-stop-btn" id="ft-stop-asking">■ STOP</button>';
      var stopBtn = document.getElementById('ft-stop-asking');
      if (stopBtn) stopBtn.addEventListener('click', function() { resetToLanding(); });
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
        '<span class="ft-item"><span class="ft-lbl">EVIDENCE</span> ' + s.evidenceStrength.toFixed(1) + '/5</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-watermark">◇ PDF export watermark: Draft for internal analysis. Not calibrated forecasts.</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status ok">ANSWER READY</span>';
      return;
    }
    if (STATE.flow === 'dt-running') {
      footer.classList.add('tall');
      var costNow = (STATE.dtProgress * 0.28).toFixed(2);
      footerRight.innerHTML =
        '<span class="ft-item amber"><span class="ft-lbl">LEVEL</span> L2 · DEEP-THINK · STANDARD</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST NOW</span> $' + costNow + ' of ~$0.30</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item"><span class="ft-lbl">ETA</span> ' + Math.floor((1 - STATE.dtProgress) * 200) + 's</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status amber">RUNNING · ' + Math.floor(STATE.dtProgress * 100) + '%</span>' +
        '<button class="ft-stop-btn" id="ft-stop-dt">■ STOP AND KEEP PARTIAL</button>';
      var stopBtn2 = document.getElementById('ft-stop-dt');
      if (stopBtn2) stopBtn2.addEventListener('click', function() {
        clearTimers();
        goToDTReport();
      });
      return;
    }
    if (STATE.flow === 'dt-report') {
      footer.classList.remove('tall');
      var s2 = STATE.activeScenario;
      footerRight.innerHTML =
        '<span class="ft-item amber"><span class="ft-lbl">LEVEL</span> L2 · DEEP-THINK · STANDARD</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item amber"><span class="ft-lbl">COST FINAL</span> ' + s2.dtReport.stats.cost + '</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-item"><span class="ft-lbl">ROBUSTNESS</span> ' + s2.dtReport.robustness.toFixed(1) + '/5</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-watermark">◇ Not calibrated forecasts</span>' +
        '<span class="ft-sep">·</span>' +
        '<span class="ft-status ok">DT REPORT READY</span>';
      return;
    }
  }

  // ========================================================================
  // BREADCRUMB
  // ========================================================================

  function renderBreadcrumb() {
    if (STATE.flow === 'landing' || STATE.turns.length === 0) {
      breadcrumb.classList.remove('visible');
      return;
    }
    breadcrumb.classList.add('visible');
    var s = STATE.activeScenario;
    if (!s) return;
    bcDossier.textContent = s.dossier;
    bcActors.textContent = s.subgraph.focus.join(', ');
    var reportCount = 0;
    STATE.turns.forEach(function(t) { if (t.type === 'answer') reportCount++; });
    if (STATE.flow === 'dt-running' || STATE.flow === 'dt-report') {
      bcReports.textContent = STATE.flow === 'dt-running' ? '· ' + reportCount + ' L1 + running DT' : '· ' + reportCount + ' reports (L1 + DT)';
    } else if (reportCount > 0) {
      bcReports.textContent = '· ' + reportCount + ' report';
    } else {
      bcReports.textContent = '';
    }
  }

  // ========================================================================
  // FLOW TRANSITIONS
  // ========================================================================

  function resetToLanding() {
    clearTimers();
    STATE.flow = 'landing';
    STATE.activeScenario = null;
    STATE.turns = [];
    STATE.dtProgress = 0;
    chatSubtitle.textContent = 'Session · new';
    chatSubtitle.className = 'panel-subtitle';
    chatInput.disabled = false;
    chatInput.value = '';
    runBtn.classList.remove('active');
    inputHint.textContent = 'Answer first · Deep-Think from the report if needed';
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();
  }

  function startScenario(promptId) {
    var scenarioKey = window.GEODATA.scenarioByPromptId[promptId];
    if (!scenarioKey) return;
    var s = window.GEODATA.scenarios[scenarioKey];
    if (!s) return;

    STATE.activeScenario = s;
    // Update dossier to match scenario
    if (s.dossierId) {
      selectDossierSilent(s.dossierId);
    }

    // Add user turn
    STATE.turns.push({ type: 'user', body: s.question, ts: nowHM() });
    if (s.clarify && s.clarify.show) {
      STATE.turns.push({ type: 'clarify', body: s.clarify.text });
      STATE.turns.push({ type: 'confirm', body: '<em>Yes, proceed.</em>' });
    }

    goToAsking();
  }

  function selectDossierSilent(dossierId) {
    var d = window.GEODATA.dossiers.find(function(x) { return x.id === dossierId; });
    if (!d) return;
    STATE.activeDossier = dossierId;
    dossierName.textContent = d.name;
    ftDossier.textContent = d.name.toLowerCase();
  }

  function goToAsking() {
    STATE.flow = 'asking';
    STATE.dtProgress = 0;
    chatSubtitle.textContent = 'Session · ' + STATE.turns.length + ' turns';
    chatSubtitle.className = 'panel-subtitle amber';
    chatInput.disabled = false;
    chatInput.value = '';
    runBtn.classList.remove('active');
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();

    // Animate thinking progress
    var duration = 4000;
    var start = Date.now();
    var timer = setInterval(function() {
      var elapsed = Date.now() - start;
      STATE.dtProgress = Math.min(1, elapsed / duration);
      renderThinking();
      renderFooter();
      if (STATE.dtProgress >= 1) {
        clearInterval(timer);
        goToL1Report();
      }
    }, 100);
    STATE.timers.push(timer);
  }

  function goToL1Report() {
    clearTimers();
    STATE.flow = 'l1-report';
    STATE.dtProgress = 0;
    var s = STATE.activeScenario;
    // Add answer + suggest turns
    STATE.turns.push({
      type: 'answer',
      body: 'Answer ready. Report at right. Sources tapped: ' + s.subgraph.passageCount + ' passages, ' + s.subgraph.sourceCount + ' outlets. Evidence strength: ' + s.evidenceStrength.toFixed(1) + '/5.'
    });
    STATE.turns.push({
      type: 'suggest',
      body: s.l1Report.followUp
    });
    chatSubtitle.textContent = STATE.turns.length + ' turns · L1 answer ready';
    chatSubtitle.className = 'panel-subtitle green';
    chatInput.disabled = false;
    inputHint.textContent = 'Ask a follow-up on this dossier';
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();
  }

  function startDeepThink(tier) {
    STATE.dtTier = tier;
    STATE.dtProgress = 0;
    var s = STATE.activeScenario;
    STATE.turns.push({
      type: 'user',
      body: 'Run Deep-Think ' + tier + ' on: <em>' + s.question + '</em>',
      ts: nowHM()
    });
    STATE.turns.push({
      type: 'suggest',
      body: '<em>Deep-Think ' + tier.charAt(0).toUpperCase() + tier.slice(1) + ' launched.</em> Reading the current state as starting position. Sampling 4 seed scenarios. Rolling out to horizon 5 turns or decisive event.'
    });
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
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();

    var duration = 6000;
    var start = Date.now();
    var timer = setInterval(function() {
      var elapsed = Date.now() - start;
      STATE.dtProgress = Math.min(1, elapsed / duration);
      renderCenterAndIntel();
      renderThinking();
      renderFooter();
      if (STATE.dtProgress >= 1) {
        clearInterval(timer);
        goToDTReport();
      }
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
    STATE.turns.push({
      type: 'suggest',
      body: 'Suggested follow-up: <em>Which arc most changes if a key assumption shifts?</em> -- sensitivity probe.'
    });
    chatSubtitle.textContent = STATE.turns.length + ' turns · DT report ready';
    chatSubtitle.className = 'panel-subtitle green';
    chatInput.disabled = false;
    inputHint.textContent = 'Ask a follow-up on this dossier';
    renderChatBody();
    renderBreadcrumb();
    renderCenterAndIntel();
    renderFooter();
  }

  // ========================================================================
  // CHAT INPUT
  // ========================================================================

  chatInput.addEventListener('input', function() {
    if (chatInput.value.trim().length > 0 && !chatInput.disabled) {
      runBtn.classList.add('active');
    } else {
      runBtn.classList.remove('active');
    }
  });

  runBtn.addEventListener('click', function() {
    if (!runBtn.classList.contains('active')) return;
    // For custom input, default to Taiwan AS IS scenario as demo
    var txt = chatInput.value.trim();
    if (!txt) return;
    // Match against known prompts (crude keyword match)
    var promptId = 'taiwan-asis';
    if (txt.toLowerCase().indexOf('ukraine') !== -1) promptId = 'ukraine-whatif';
    else if (txt.toLowerCase().indexOf('leverage') !== -1 || txt.toLowerCase().indexOf('sensitivity') !== -1) promptId = 'taiwan-sens';
    startScenario(promptId);
  });

  // ========================================================================
  // INIT
  // ========================================================================

  resetToLanding();

})();
