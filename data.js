// GeoIntel Mockup -- Phase 3 (adds phase3 data block for Dashboard/Admin/Explore)

window.GEODATA = {

  dossiers: [
    { id: "global", name: "Global overview" },
    { id: "ukraine", name: "Ukraine / Russia / NATO" },
    { id: "taiwan", name: "Taiwan Strait / Chip supply chain" },
    { id: "iran", name: "Iran post-Epic Fury" }
  ],

  keywordMap: [
    { pattern: /ukrain|kyiv|kiev|russia/i, scenario: "ukraine-main" },
    { pattern: /german.*budget|budget.*german|2027 budget/i, scenario: "ukraine-fu-a" },
    { pattern: /hybrid|sabotag|coordin.*eu|eu.*coordin/i, scenario: "ukraine-fu-b" },
    { pattern: /taiwan|china.*attack|when.*china|prc.*attack/i, scenario: "taiwan-main" },
    { pattern: /semiconductor|chip|tsmc/i, scenario: "taiwan-fu-a" },
    { pattern: /japan|jpn.*posture|defense posture/i, scenario: "taiwan-fu-b" },
    { pattern: /iran|middle east|disengag|epic fury/i, scenario: "iran-main" },
    { pattern: /israel|isr/i, scenario: "iran-fu-a" },
    { pattern: /china.*lifeline|china.*iran|sanction.*china|beijing.*iran/i, scenario: "iran-fu-b" }
  ],

  followUpTree: {
    "ukraine-main": ["ukraine-fu-a", "ukraine-fu-b"],
    "ukraine-fu-a": ["ukraine-fu-b"],
    "ukraine-fu-b": ["ukraine-fu-a"],
    "taiwan-main": ["taiwan-fu-a", "taiwan-fu-b"],
    "taiwan-fu-a": ["taiwan-fu-b"],
    "taiwan-fu-b": ["taiwan-fu-a"],
    "iran-main": ["iran-fu-a", "iran-fu-b"],
    "iran-fu-a": ["iran-fu-b"],
    "iran-fu-b": ["iran-fu-a"]
  },

  // ==========================================================================
  // PHASE 3 DATA -- Dashboard, Admin, Explore
  // All values are DEMO ONLY - NOT REAL DATA
  // ==========================================================================
  phase3: {

    dashboard: {
      corpus: {
        articles: 27533,
        sources: 6,
        embedded: 27533,
        embeddedPct: 100,
        graphNodes: 2847,
        graphArcs: 8912
      },
      ingestionSpark: [12, 18, 24, 22, 31, 28, 35, 42, 38, 45, 51, 48, 55, 62, 58],
      coverage: [
        { source: "ISPI",    ukr: "hi",  twn: "med", irn: "hi",  glb: "hi" },
        { source: "ECFR",    ukr: "hi",  twn: "low", irn: "med", glb: "hi" },
        { source: "MERICS",  ukr: "low", twn: "hi",  irn: "med", glb: "med" },
        { source: "Bruegel", ukr: "med", twn: "med", irn: "low", glb: "hi" },
        { source: "CSIS",    ukr: "hi",  twn: "hi",  irn: "hi",  glb: "hi" },
        { source: "FP",      ukr: "med", twn: "med", irn: "hi",  glb: "med" }
      ],
      recent: [
        { t: "2m ago",  src: "MERICS",  body: "Beijing signals restraint on Taiwan overflight after MOFA briefing" },
        { t: "17m ago", src: "ECFR",    body: "Ukraine Q4 funding gap widens as US supplemental stalls" },
        { t: "41m ago", src: "ISPI",    body: "Oman-mediated backchannel between Tehran and Washington resumes" },
        { t: "1h ago",  src: "CSIS",    body: "PLA amphibious exercise pattern deviates from calendar cycle" },
        { t: "2h ago",  src: "Bruegel", body: "German 2027 budget draft signals Ukraine envelope rebalancing" },
        { t: "3h ago",  src: "FP",      body: "Israel doctrine paper on preemption gains coalition backing" }
      ],
      health: [
        { k: "Embedding lag",     v: "0.4s",   cls: "green" },
        { k: "Extraction lag",    v: "2.1m",   cls: "amber" },
        { k: "API error rate",    v: "0.02%",  cls: "green" },
        { k: "Job queue depth",   v: "3",      cls: "green" },
        { k: "Storage used",      v: "42.8 GB",cls: "" },
        { k: "Last KG rebuild",   v: "6h ago", cls: "" }
      ]
    },

    admin: {
      sources: [
        { name: "ISPI",             kind: "Think tank",        articles: 4218, lastSync: "12m ago",  status: "ok",   region: "Europe" },
        { name: "ECFR",             kind: "Think tank",        articles: 5104, lastSync: "8m ago",   status: "ok",   region: "Europe" },
        { name: "MERICS",           kind: "Research institute",articles: 3892, lastSync: "24m ago",  status: "ok",   region: "Europe / China focus" },
        { name: "Bruegel",          kind: "Economic think tank",articles: 2967,lastSync: "18m ago",  status: "ok",   region: "Europe" },
        { name: "CSIS",             kind: "Think tank",        articles: 6841, lastSync: "3m ago",   status: "ok",   region: "USA" },
        { name: "Foreign Policy",   kind: "Magazine",          articles: 4511, lastSync: "41m ago",  status: "warn", region: "USA" }
      ]
    },

    explore: {
      news: [
        { id: "n1",  src: "MERICS",  date: "Aug 30 2026", dossier: "Taiwan", title: "PLA Justice Mission drill patterns show shift toward off-calendar tempo", snippet: "The most recent PLA exercise sequence departs from the calendar-coincident pattern established since 2022, with implications for early-warning frameworks that rely on scheduled activity for baseline detection." },
        { id: "n2",  src: "ECFR",    date: "Aug 28 2026", dossier: "Ukraine", title: "German 2027 budget draft opens Ukraine envelope to Bundestag amendment", snippet: "The Finance Ministry's initial draft preserves the headline Ukraine allocation but introduces conditional language that leaves substantive space for coalition partners to propose reductions during committee review." },
        { id: "n3",  src: "CSIS",    date: "Aug 27 2026", dossier: "Iran",    title: "Bessent economic pressure campaign targets secondary sanctions on Chinese refiners", snippet: "Treasury guidance issued this week signals expanded secondary sanctions targeting Shandong teapot refineries and their intermediary networks in the UAE and Malaysia." },
        { id: "n4",  src: "ISPI",    date: "Aug 26 2026", dossier: "Iran",    title: "Oman-mediated Hormuz shipping channel proposal advances", snippet: "Muscat's proposal for a temporary corridor through the Strait of Hormuz has entered technical discussions between Iranian and Omani maritime authorities, with implicit US acquiescence." },
        { id: "n5",  src: "Bruegel", date: "Aug 25 2026", dossier: "Ukraine", title: "European defence industrial capacity holds despite disbursement slowdown", snippet: "Contract execution at Rheinmetall, KNDS and MBDA proceeds on schedule even as member state disbursement rhythm has slowed, generating temporary inventory build-up." },
        { id: "n6",  src: "FP",      date: "Aug 24 2026", dossier: "Taiwan",  title: "Japan defence white paper draft language on Taiwan hardens further", snippet: "The 2027 white paper draft under interagency review reportedly moves language from declared-substantive to operational, potentially referencing specific contingency planning frameworks." },
        { id: "n7",  src: "MERICS",  date: "Aug 23 2026", dossier: "Taiwan",  title: "Beijing signals through Global Times on Taiwan election framing", snippet: "The editorial line establishes the analytical frame Beijing intends to apply to any DPP-aligned outcome in the 2028 Taiwan election cycle, prefiguring the escalation triggers." },
        { id: "n8",  src: "CSIS",    date: "Aug 22 2026", dossier: "Ukraine", title: "US supplemental status remains uncertain into Q1 2027", snippet: "Senate calendar constraints and House Republican coalition dynamics make near-term action unlikely; the operational assumption in Kyiv shifts toward planning without additional US support." }
      ],
      structured: [
        { code: "USA", name: "United States",         type: "State",           arcs: 42 },
        { code: "PRC", name: "China",                 type: "State",           arcs: 38 },
        { code: "RUS", name: "Russia",                type: "State",           arcs: 29 },
        { code: "IRN", name: "Iran",                  type: "State",           arcs: 24 },
        { code: "ISR", name: "Israel",                type: "State",           arcs: 21 },
        { code: "EU",  name: "European Union",        type: "Institution",     arcs: 33 },
        { code: "JPN", name: "Japan",                 type: "State",           arcs: 22 },
        { code: "TWN", name: "Taiwan",                type: "State",           arcs: 18 },
        { code: "UKR", name: "Ukraine",               type: "State",           arcs: 19 },
        { code: "DEU", name: "Germany",               type: "State",           arcs: 26 },
        { code: "TSMC",name: "Taiwan Semiconductor",  type: "Corporate actor", arcs: 12 },
        { code: "OMN", name: "Oman",                  type: "State",           arcs:  9 }
      ],
      primary: [
        { id: "p1", src: "Japan MoD",     date: "Jul 2026", title: "Defense of Japan 2026 (Annual White Paper)", snippet: "Official Japanese defence policy document, explicitly names Taiwan Strait stability as a Japanese security interest for the first time." },
        { id: "p2", src: "US Treasury",   date: "Aug 2026", title: "OFAC guidance on secondary sanctions expansion -- Iran oil trade", snippet: "Technical guidance detailing the scope and enforcement approach for the Bessent 'economic operation' targeting third-country buyers of Iranian oil." },
        { id: "p3", src: "PLA",           date: "Dec 2025", title: "Justice Mission 2025 exercise summary (Chinese source translation)", snippet: "Post-exercise summary from PLA-affiliated media, providing the doctrinal framing that positions the exercise as blockade rehearsal rather than amphibious assault." },
        { id: "p4", src: "European Council", date: "Jun 2026", title: "Council conclusions on European Peace Facility Ukraine tranche", snippet: "Formal conclusions on the multi-annual European support envelope, including the burden-sharing formula and disbursement schedule." }
      ],
      analyses: [
        { id: "a1", src: "IISS",    date: "Apr 2026", title: "Attrition and adaptation: Ukraine's evolving war effort", snippet: "IISS assessment of the shift in the Ukrainian force posture under reduced Western support, with implications for the 2026-2027 horizon." },
        { id: "a2", src: "The Diplomat", date: "Jan 2026", title: "China's Taiwan drills are crossing a new line", snippet: "Analysis of the Justice Mission 2025 exercise and the normalisation of PLA activity inside Taiwan's contiguous zone." },
        { id: "a3", src: "CSIS",    date: "Jul 2026", title: "Semiconductor dispersion and Taiwan risk", snippet: "Detailed technical and strategic analysis of TSMC's dispersion strategy and its interaction with Chinese calculations on Taiwan." },
        { id: "a4", src: "ECFR",    date: "Aug 2026", title: "Europe's hybrid response deficit", snippet: "Assessment of the structural constraints on European coordination against Russian hybrid pressure, with proposed institutional pathways." }
      ]
    }

  },

  scenarios: {

    "ukraine-main": {
      question: "How could the Ukraine situation evolve over the next 12 months?",
      dossier: "Ukraine / Russia / NATO",
      dossierId: "ukraine",
      parent: null,
      subgraph: {
        focus: ["UKR", "RUS", "USA", "EU", "DEU", "POL"],
        peripheral: ["GBR", "BLR", "TUR"],
        arcs: [
          { s: "RUS", t: "UKR", w: 4.8, vol: "H", pol: "hostile" },
          { s: "USA", t: "UKR", w: 3.6, vol: "H", pol: "aligned" },
          { s: "EU",  t: "UKR", w: 4.2, vol: "M", pol: "aligned" },
          { s: "DEU", t: "UKR", w: 3.9, vol: "M", pol: "aligned" },
          { s: "POL", t: "UKR", w: 3.7, vol: "L", pol: "aligned" },
          { s: "USA", t: "EU",  w: 4.0, vol: "M", pol: "complex" },
          { s: "RUS", t: "EU",  w: 3.8, vol: "H", pol: "hostile" },
          { s: "RUS", t: "BLR", w: 3.4, vol: "L", pol: "aligned" }
        ],
        actorCount: 9, arcCount: 8, passageCount: 58, sourceCount: 6
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph resolved: 9 actors, 8 arcs",
        "Corpus retrieval: 58 passages, 6 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The war has entered an attrition phase where the modal path is neither victory nor collapse.",
        subtitle: "A positioned reading of the Ukraine dossier over a 12-month horizon.",
        thesis: "The conflict has settled into a war of attrition in which the operational tempo has slowed but the underlying dynamic continues to favour Russia at the margin. Ukrainian forces retain the ability to hold defensive lines across the eastern front, but recruitment shortfalls and the reduction in US assistance have narrowed their operational envelope. European deliveries of artillery, ammunition and howitzers have partially compensated for the American drawdown, yet Ukraine remains structurally dependent on US-made Patriot systems for medium- and long-range air defence. The first improved SAMP/T units will enter service in 2026, with additional systems following over the subsequent two years; until Aster missile production reaches sustained volume, the air defence gap will remain the single most exposed capability. Russian strategy over the period reflects a calculation of endurance rather than breakthrough. Moscow is prepared to accept high casualty rates and continued sanctions pressure, betting that Western political patience will erode faster than its own capacity to sustain operations. The interdiction of the shadow fleet is degrading oil revenue at the margin, but not at a scale that alters the timeline. Kyiv's manpower reforms have produced adjustments but not a resolution, and rotation stress on frontline units will intensify through the first quarter of 2027. Under these conditions the twelve-month projection points to a compressed defensive posture: core Ukrainian territory preserved, initiative ceded, and the recovery horizon pushed into 2028. The two variables capable of shifting this trajectory are the outcome of the German 2027 budget and any political catalyst in Washington that either accelerates the drawdown or reverses it.",
        implication: "The stabilisation of an attrition equilibrium produces a series of second-order effects across the European security architecture. The first is the gradual institutionalisation of a lower ceiling for Western military assistance. As monthly disbursements settle into a predictable but reduced pattern, allied capitals adjust their planning assumptions downward and defence-industrial procurement is calibrated to the new baseline rather than to the earlier surge levels. The consequence is that even a subsequent political decision to increase support would face a lag of six to twelve months before translating into deliverable capability. The second effect concerns the reconfiguration of European burden-sharing. Germany's fiscal constraints, France's political turbulence and the reduced US footprint force the Northern and Eastern member states to assume a proportionally larger share of the sustainment effort, altering the internal balance of influence within the EU on security matters. Poland, the Nordic and Baltic states acquire agenda-setting weight that they had not previously exercised. The third effect is the entrenchment of Russia's war economy. Sustained mobilisation over three years has restructured Russian industrial capacity around military output; a return to the pre-war economic model becomes increasingly costly and politically difficult. This raises the threshold at which Moscow could plausibly accept a negotiated settlement, and creates path-dependence toward continued confrontation even after the current phase ends. The fourth effect operates on the transatlantic relationship itself. Reduced US engagement in European security, sustained over multiple budget cycles, gradually redefines NATO from an integrated alliance toward a looser coalition in which American commitment is treated as conditional rather than structural. This shift is visible in force posture decisions, in exercise cadence, and in the language used at ministerial level.",
        evidence: [
          { n: "01", body: "Ukraine's dependence on US-made Patriot systems for long- and medium-range air defence remains the single tightest structural constraint. European long-range SAM production (SAMP/T, Aster missiles) is ramping but the first improved variants only arrive in 2026 with additional units over two years. This creates a <em>capability window</em> where Ukraine is exposed even if political will holds.", citations: [{ src: "IISS", date: "Apr 2026", emphasis: true }, { src: "ECFR", date: "Jul 2026" }] },
          { n: "02", body: "Recruitment problems are only partly addressed. The manpower reforms of 2024-2025 produced adjustments but not resolution. Under baseline projection, unit rotation stress continues to grow through Q1 2027, forcing operational choices between holding lines and preserving forces for later phases.", citations: [{ src: "IISS", date: "Apr 2026" }, { src: "CSIS", date: "Jun 2026" }] },
          { n: "03", body: "European support has accelerated on artillery, ammunition and howitzer supply -- but the pace of European co-financing depends on member state budget cycles. Germany's 2027 budget is the single largest exogenous variable: pressure from domestic priorities is real and the coalition politics are fragile. A material reduction in German commitment would compress the EU envelope more than any single US decision.", citations: [{ src: "Bruegel", date: "Aug 2026" }, { src: "ECFR", date: "Aug 2026", emphasis: true }] },
          { n: "04", body: "On the Russian side, the corpus reads Moscow as calibrated to <em>outlast</em> rather than <em>outfight</em>. Continued Western interdiction of the shadow fleet is disrupting oil revenue at the margin, but the scale of Russian mobilization and the acceptance of casualty rates suggest the horizon of endurance is longer than the horizon of Western political patience.", citations: [{ src: "FP", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "IISS reads the operational buffer as thicker than ECFR; both agree on the 2027 timing pivot.",
        sources: [ {name:"ECFR",passages:13},{name:"IISS",passages:11},{name:"CSIS",passages:10},{name:"Bruegel",passages:9},{name:"FP",passages:8},{name:"ISPI",passages:7} ],
        topArcs: [
          { pair: "RUS ↔ UKR", pol: "hostile", w: 4.8, vol: "H" },
          { pair: "EU ↔ UKR",  pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA ↔ EU",  pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU ↔ UKR", pol: "aligned", w: 3.9, vol: "M" },
          { pair: "RUS ↔ EU",  pol: "hostile", w: 3.8, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "The modal path is compressed defense -- but the tail toward negotiated freeze is not thin.",
        subtitle: "A 12-month projection of the Ukraine dossier across 4 scenarios, informed by current support architecture and battlefield dynamics.",
        thesis: "The simulation explored four trajectories on the Ukraine dossier over the twelve-month horizon.\n\nIn the modal scenario (44%), Ukraine absorbs the reduction in US assistance through a combination of incremental European scaling and the drawdown of existing air defence stockpiles. The line of contact moves marginally in Russia's favour but no operational breakthrough occurs. The first SAMP/T-NG unit becomes operational in the first quarter of 2027; production ramps but backlog persists. By mid-2027 Ukrainian posture has visibly narrowed: offensive operations are suspended, defensive positions consolidate, and munition use is rationed. The trajectory closes in a stable but degraded equilibrium.\n\nIn the second scenario (25%), the combination of a reduced assistance envelope, battlefield fatigue and German budget stress opens political space for a Korea-style armistice framework. Mediation is led by Turkey or a Gulf state and produces a formal freezing of the line of contact. Russia gains time and consolidates control over occupied territory; Ukraine loses the political claim to reversal but preserves sovereignty over the remainder.\n\nIn the third scenario (16%), a political catalyst -- resumption of the US supplemental, EU joint borrowing, or an acceleration of Aster production -- reverses the downward trend in support. Ukraine regains initiative in the second half of 2027. The trigger for this trajectory is not visible in the current corpus.\n\nIn the fourth scenario (15%), the reduction in US assistance accelerates into effective withdrawal. European scaling proves insufficient without the US air defence backbone. Ukrainian capacity collapses in the third or fourth quarter of 2027, forcing an unfavourable settlement or the loss of significant additional territory.",
        implication: "The persistence of the compressed-defence equilibrium produces effects that reshape European security beyond the Ukrainian theatre. The first effect is the crystallisation of a European defence-industrial complex that operates at a scale intermediate between the pre-2022 baseline and full war footing. Sustained procurement contracts to Rheinmetall, KNDS, MBDA and their smaller partners establish a permanent capacity that will remain in place regardless of how the war ends. This capacity generates its own political constituency and its own strategic logic, independent of the Ukrainian trajectory that created it. The second effect concerns the German fiscal architecture. Repeated stress on the defence envelope through successive budget cycles gradually erodes the debt-brake consensus, either through formal constitutional revision or through structural workarounds such as special funds and off-balance-sheet vehicles. The Schuldenbremse loses its status as a fixed parameter of German economic policy, with consequences that extend well beyond defence spending into the broader European fiscal debate. The third effect operates on the Russia-China alignment. Continued Russian dependence on Chinese industrial inputs, financial services and diplomatic cover deepens over the horizon and becomes structurally embedded in the Russian economy. The consequence is a reduction in Russian strategic autonomy that Moscow accepts as the price of continuing the war, and a corresponding increase in Chinese leverage over Russian conduct in third theatres. The fourth effect emerges within the European political landscape. The prolonged mobilisation of resources, the visibility of Ukrainian casualties in European media, and the fiscal trade-offs required to sustain assistance combine to strengthen political forces that argue for negotiated settlement, across both the traditional left and the nationalist right. This does not translate immediately into policy change but shifts the centre of gravity of European public opinion in ways that will constrain future governments regardless of their own preferences.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 16, ci: "12-20%", pol: "blue",      body: "<em>Support recovers.</em> A political catalyst (US supplemental resumption, EU joint borrowing) reverses the downward trend. Aster production accelerates. Ukraine regains initiative in H2 2027. Requires a specific trigger -- none currently visible in the corpus." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 44, ci: "38-51%", pol: "amber",     body: "<em>Compressed defense holds.</em> Ukraine adapts to reduced envelope by narrowing operational scope, prioritizing critical infrastructure, rationing munitions. Line of contact moves marginally. Territory loss limited. Recovery of initiative postponed to 2028. This is the modal reading." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 25, ci: "20-31%", pol: "red",       body: "<em>Negotiated freeze.</em> The combination of reduced envelope, battlefield fatigue and German budget stress creates political space for a Korea-style armistice framework. Codifies current line of contact. Russia gains time, Ukraine loses claim to reversal. Not a defeat, but a strategic loss." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 15, ci: "10-19%", pol: "dim-amber", body: "<em>EU-only architecture.</em> A political catalyst (US election, EU crisis) accelerates reduction into a phase where support becomes symbolic on the US side. EU scales but insufficient without US air defense. Ukraine's envelope collapses in Q3-Q4 2027." }
        ],
        latticeCaption: "Each terminal is a support-architecture configuration at Q4 2027; the modal band (compressed defense) concentrates most weight, but S3 negotiated-freeze is persistent across seeds where German budget signals turn negative.",
        sensitivity: "The distribution is most sensitive to the <em>German 2027 budget outcome</em>. A material reduction moves S3 from 25% to 37%. Second-most sensitive is <em>US supplemental status in Q1-Q2 2027</em>: a passage would move S1 to 27%; a delay moves S4 to 24%. The third lever is <em>Aster/SAMP-T production timing</em>.",
        robustness: 3.5, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 restart seeds (max delta 5pp). Confidence limited by dependence on political catalysts across three polities (US, DEU, EU-level).",
        drivingArcs: [
          { pair: "USA ↔ UKR", desc: "Pivot: supplemental cycle", pol: "amber" },
          { pair: "DEU ↔ EU",  desc: "Driver: budget stress",     pol: "amber" },
          { pair: "EU ↔ UKR",  desc: "Anchor: multi-annual envelope", pol: "green" },
          { pair: "RUS ↔ UKR", desc: "Frame: attrition dynamic",  pol: "red" }
        ],
        assumptions: [
          "A1: No Russian battlefield breakthrough in the horizon.",
          "A2: Existing air defense stockpiles hold through Q1 2027.",
          "A3: US supplemental is a binary event, not a gradient.",
          "A4: German coalition stability through H1 2027 budget cycle.",
          "A5: No third-actor major intervention (China-supplied lethal aid to Russia scale-up)."
        ],
        stats: { tier: "Standard", iterations: 194, nodes: 1382, time: "3m 28s", cost: "$0.31" },
        fullReport: {
          narrative: "The modal trajectory unfolds as follows across the twelve-month horizon. Russian tempo continues on the Pokrovsk and Kupiansk axes in the fourth quarter of 2026, producing marginal territorial gains without breakthrough. Ukrainian air defence stress rises as Patriot interceptor stockpiles thin. The first SAMP/T-NG unit becomes operational in the first quarter of 2027 but is insufficient to offset the broader degradation. German budget negotiations open in December 2026 with the defence envelope under pressure from Bundestag opposition. The EU envelope holds nominally but member state disbursement rhythm slows. Aster production reaches nominal rate but backlog persists. By the second quarter of 2027 Ukrainian operational posture has visibly narrowed: offensive operations are suspended and defensive lines consolidate. Casualties on both sides stabilise at attrition rates. Political space begins to open for freeze discussions and the negotiated-armistice branch gains probability weight. By the third quarter the choice architecture crystallises between EU-level joint procurement scaling, technically feasible but politically unprecedented, and a freeze framework mediated by Turkey or a Gulf state. Neither trajectory is decisive by the fourth quarter of 2027, and the horizon closes with the theatre in a new equilibrium: Ukraine retains sovereignty over approximately 78% of pre-2022 territory, has no realistic reversal path, and the war has effectively transitioned from active conflict to protracted stalemate.",
          keyMoves: [
            "Q4 2026: Russia intensifies Pokrovsk axis; Ukrainian air defence stress rises.",
            "Q1 2027: First SAMP/T-NG operational; German budget negotiations begin.",
            "Q2 2027: Ukrainian posture narrows; freeze discussions emerge.",
            "Q3 2027: Choice architecture crystallises between EU scaling and freeze framework.",
            "Q4 2027: New equilibrium; no decisive resolution."
          ]
        }
      }
    },

    "ukraine-fu-a": {
      question: "What role does the German 2027 budget play in this projection?",
      dossier: "Ukraine / Russia / NATO", dossierId: "ukraine", parent: "ukraine-main",
      subgraph: {
        focus: ["DEU", "EU", "UKR", "USA"], peripheral: ["FRA", "POL"],
        arcs: [
          { s: "DEU", t: "UKR", w: 3.9, vol: "H", pol: "aligned" },
          { s: "DEU", t: "EU",  w: 4.5, vol: "M", pol: "aligned" },
          { s: "EU",  t: "UKR", w: 4.2, vol: "M", pol: "aligned" },
          { s: "USA", t: "EU",  w: 4.0, vol: "M", pol: "complex" }
        ],
        actorCount: 6, arcCount: 4, passageCount: 34, sourceCount: 4
      },
      evidenceStrength: 3.8, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph refined: 6 actors, 4 arcs","Corpus retrieval: 34 passages, 4 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "The German 2027 budget is the single largest exogenous lever on the Ukraine trajectory.",
        subtitle: "A focused reading of Germany's coalition budget stress and its downstream effect on the EU support envelope.",
        thesis: "Germany occupies two positions simultaneously in the European support architecture: it is the second-largest bilateral donor to Ukraine in absolute terms, and it is the political anchor around which the broader EU envelope is coordinated. A material reduction in the German defence commitment therefore operates through two channels at once. The direct channel is the loss of German bilateral disbursements. The signalling channel is the effect on other member states, which read German rebalancing as a permission structure for their own retrenchment. Historical patterns since 2024 indicate that Berlin has followed a consistent approach: ambitious multi-year commitments announced at the political level, followed by quiet rebalancing during budget execution. A repetition of this pattern in 2027 would preserve headline figures while eroding the actual disbursement trajectory -- the modal risk identified in the corpus. The 2027 envelope is under pressure from three simultaneous domestic priorities. Pension reform requires substantial fiscal space and is politically non-negotiable given demographic dynamics. Infrastructure investment, particularly on rail and energy transition, competes for the same envelope. The Schuldenbremse debt-brake constrains the total available fiscal space and generates conflict between coalition partners over which lever moves first. The Ukraine allocation sits inside the defence envelope and is protected but not immunised. France's political turbulence, with successive minority governments and a fragmented National Assembly, makes any French offset unlikely; smaller EU donors will follow the German lead rather than compensate. Poland's operational role continues but does not substitute for the financial component that Germany and France jointly provide.",
        implication: "The centrality of the German budget in the European support architecture generates second-order effects that extend well beyond the Ukraine dossier. The first is the growing gap between declaratory and effective European commitment. As member states adopt the German pattern of headline preservation and quiet rebalancing, the aggregate European commitment communicated in summit conclusions and Council statements diverges progressively from the resources actually reaching Kyiv. This gap becomes visible to Moscow and factors into Russian calculations of Western resolve. The second effect concerns the internal balance of the European Union. The recurring dependence on German fiscal decisions to underwrite continental commitments consolidates Berlin's structural weight within the Council, but simultaneously exposes the fragility of an architecture in which a single member state's domestic politics can determine collective outcomes. This asymmetry generates pressure toward institutional innovation -- joint borrowing, EU-level defence funds, treaty-based mechanisms -- that would reduce dependence on the German cycle. Progress on such instruments becomes more likely under acute stress than under stable conditions. The third effect operates on the German political system itself. The repeated collision between defence commitments, social spending, infrastructure needs and the debt-brake produces sustained coalition instability. Successive German governments will inherit an increasingly constrained fiscal environment and an electorate that reads the trade-offs in real time, altering the trajectory of German domestic politics in ways that will shape European policy for a decade. The fourth effect concerns the transatlantic relationship. A visibly stressed German commitment weakens the argument that Europe can substitute for reduced US engagement, and reinforces the position of American voices arguing for further disengagement on the basis that Europe is unwilling to bear its own security costs.",
        evidence: [
          { n: "01", body: "Germany's 2027 defense envelope is under pressure from three simultaneous domestic priorities: pension reform, infrastructure investment, and the debt brake (Schuldenbremse) constraint. Coalition partners disagree on which lever to move first. The Ukraine allocation sits inside the defense envelope and is <em>protected but not immunized</em>.", citations: [{ src: "Bruegel", date: "Aug 2026", emphasis: true }, { src: "ECFR", date: "Aug 2026" }] },
          { n: "02", body: "The historical pattern since 2024 has been for Germany to announce ambitious multi-year commitments, then rebalance them quietly during budget execution. A repeat of this pattern in 2027 would preserve headline numbers while eroding the actual disbursement trajectory. The corpus flags this as the modal risk, not headline reduction.", citations: [{ src: "ECFR", date: "Jul 2026" }] },
          { n: "03", body: "Signaling effect: if Germany reduces materially, France's political turbulence makes an offset unlikely, and smaller EU donors will follow the German lead. This is not additive politics -- the DEU signal is <em>coordinating</em> for the rest of the EU. Poland's operational role continues but does not compensate for the financial component.", citations: [{ src: "Bruegel", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "Bruegel weights the signaling channel more heavily than ECFR, which sees the disbursement rhythm as more consequential.",
        sources: [ {name:"Bruegel",passages:11},{name:"ECFR",passages:9},{name:"ISPI",passages:8},{name:"FP",passages:6} ],
        topArcs: [
          { pair: "DEU ↔ EU",  pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU ↔ UKR",  pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA ↔ EU",  pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU ↔ UKR", pol: "aligned", w: 3.9, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:34"
      },
      dtReport: null
    },

    "ukraine-fu-b": {
      question: "How is Russia's hybrid warfare against the EU evolving, and can Europe coordinate a response?",
      dossier: "Ukraine / Russia / NATO", dossierId: "ukraine", parent: "ukraine-main",
      subgraph: {
        focus: ["RUS", "EU", "DEU", "POL", "GBR"], peripheral: ["FIN", "EST", "FRA"],
        arcs: [
          { s: "RUS", t: "EU",  w: 4.1, vol: "H", pol: "hostile" },
          { s: "RUS", t: "DEU", w: 3.7, vol: "H", pol: "hostile" },
          { s: "RUS", t: "POL", w: 3.8, vol: "H", pol: "hostile" },
          { s: "EU",  t: "DEU", w: 4.5, vol: "M", pol: "aligned" },
          { s: "EU",  t: "POL", w: 3.9, vol: "L", pol: "aligned" }
        ],
        actorCount: 8, arcCount: 5, passageCount: 42, sourceCount: 5
      },
      evidenceStrength: 3.6, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: ["Subgraph refined: 8 actors, 5 arcs","Corpus retrieval: 42 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "Russia's hybrid campaign has scaled faster than Europe's coordinated response -- the gap is the story.",
        subtitle: "A focused reading of hybrid escalation and the EU coordination deficit.",
        thesis: "The Russian hybrid campaign against European Union member states has transitioned over the 2025-2026 period from an episodic pattern of individual incidents to a sustained programme of pressure across multiple domains. The Baltic corridor has seen a consistent series of undersea cable and pipeline incidents, with attribution now consistently pointing to Russian shadow fleet vessels and state proxies. Airspace incursions by drones over sensitive infrastructure in Germany, Poland and the Baltic states have moved from probing operations to routine activity. Disinformation operations, adapted after platform enforcement improvements, now focus on defence-industrial policy debates including armament budgets, conscription frameworks and NATO tripwire posture, with clear evidence of coordinated inauthentic behaviour across Telegram, X and TikTok. Arson attacks on logistics chains supporting Ukraine have been documented in multiple member states. GPS jamming and spoofing has become a persistent feature of aviation and maritime operations across the Baltic and North Sea. The European response has remained fragmented along national lines. Attribution is technically feasible but politically constrained: member states resist collective attribution because it would require collective response, and collective response mechanisms do not exist. No EU-level joint attribution mechanism has materialised despite repeated proposals from the Commission, the External Action Service and multiple member states. The coordination deficit is structural rather than tactical. European Union treaties assign primary competence on internal security and intelligence sharing to member states; the institutional architecture built to support hybrid response -- the Hybrid Centre of Excellence in Helsinki, the EEAS strategic communications units -- has produced analysis and coordination but not enforcement authority. Without treaty change, or a triggering crisis that would justify emergency competence expansion under existing treaty provisions, the deficit is likely to persist. Moscow is exploiting this asymmetry deliberately: the campaign generates continuous strategic cost on European decision-making without ever reaching the threshold that would force a coordinated response and the political consolidation that would accompany it.",
        implication: "The persistence of the coordination gap generates second-order effects that reshape European security in ways that extend beyond the hybrid domain itself. The first is the gradual bifurcation of the European response into two tracks. Frontline states -- Poland, the Nordic and Baltic countries, and increasingly the United Kingdom operating outside the EU frame -- develop bilateral and minilateral response mechanisms that bypass the Union's institutional architecture. This produces effective capability at the regional level but simultaneously weakens the EU as the primary framework for European security, transferring political weight to formats such as the Nordic-Baltic Eight, the Weimar Triangle and ad hoc coalitions built around specific incident responses. The second effect concerns the normalisation of grey-zone activity as a permanent feature of European security. As specific incident types recur without triggering escalation, they cease to be treated as crises and become baseline conditions. Public tolerance rises, media coverage diminishes, and the political cost of inaction falls. This produces stability in the short term but progressively erodes the deterrent value of European response postures, encouraging Moscow to expand the operational envelope. The third effect operates on the domestic politics of individual member states. Sustained exposure to Russian hybrid pressure, particularly in the information domain, generates polarisation around defence and security questions that maps onto pre-existing political cleavages. Nationalist and Eurosceptic parties instrumentalise the failure of European coordination as evidence of the Union's structural inadequacy. This produces a feedback loop in which Russian pressure weakens European coordination, and weakened coordination strengthens political forces that would further reduce it. The fourth effect concerns the alliance architecture with the United States. American assessments of European willingness to bear security costs are shaped in part by the visible European response to hybrid pressure. A fragmented response reinforces Washington's argument that Europe is unwilling to defend itself, which in turn accelerates the drawdown of US commitment that has produced the current dependency dynamics.",
        evidence: [
          { n: "01", body: "The pattern of undersea cable and pipeline incidents in the Baltic since 2024 has continued through 2026 with attribution now consistently pointing to Russian shadow fleet and state proxies. Response has been national and slow: no EU-level joint attribution mechanism has materialized despite repeated proposals.", citations: [{ src: "ECFR", date: "Jul 2026", emphasis: true }, { src: "IISS", date: "Aug 2026" }] },
          { n: "02", body: "Airspace incursions -- drone activity over sensitive infrastructure in Germany, Poland, the Baltic states -- have moved from probing to routine. National responses vary from restrained to aggressive. The lack of a unified escalation ladder is itself a signal to Moscow: <em>the seams are exploitable</em>.", citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Disinformation operations targeting European elections have adapted after platform enforcement improvements. Current campaigns focus on defense-industrial policy debates (armament budgets, conscription, NATO tripwire posture) with clear evidence of coordinated inauthentic behavior across Telegram, X, and TikTok. Attribution is technically feasible but politically constrained.", citations: [{ src: "ECFR", date: "Jun 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04", body: "The coordination deficit is structural. EU treaties give member states primary competence on internal security and intelligence sharing. Attempts to create an EU-level hybrid response mechanism (Hybrid CoE Helsinki, EEAS StratCom units) have produced analysis but not enforcement authority. Without treaty change or a crisis triggering emergency competence expansion, the deficit persists.", citations: [{ src: "Bruegel", date: "Jul 2026" }] }
        ],
        divergence: "ECFR reads the coordination deficit as improvable within existing treaties; IISS sees it as requiring a crisis trigger to move.",
        sources: [ {name:"ECFR",passages:12},{name:"IISS",passages:10},{name:"CSIS",passages:9},{name:"ISPI",passages:7},{name:"Bruegel",passages:4} ],
        topArcs: [
          { pair: "RUS ↔ EU",  pol: "hostile", w: 4.1, vol: "H" },
          { pair: "EU ↔ DEU",  pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU ↔ POL",  pol: "aligned", w: 3.9, vol: "L" },
          { pair: "RUS ↔ POL", pol: "hostile", w: 3.8, vol: "H" },
          { pair: "RUS ↔ DEU", pol: "hostile", w: 3.7, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:38"
      },
      dtReport: null
    },

    "taiwan-main": {
      question: "When will China attack Taiwan, and what conditions must materialize first?",
      dossier: "Taiwan Strait / Chip supply chain", dossierId: "taiwan", parent: null,
      subgraph: {
        focus: ["PRC", "TWN", "USA", "JPN", "PHL"], peripheral: ["KOR", "AUS"],
        arcs: [
          { s: "PRC", t: "TWN", w: 4.7, vol: "H", pol: "hostile" },
          { s: "USA", t: "TWN", w: 4.1, vol: "M", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "JPN", t: "TWN", w: 3.7, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.2, vol: "L", pol: "aligned" },
          { s: "USA", t: "PHL", w: 3.8, vol: "M", pol: "aligned" }
        ],
        actorCount: 7, arcCount: 6, passageCount: 47, sourceCount: 5
      },
      evidenceStrength: 4.1, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph resolved: 7 actors, 6 arcs","Corpus retrieval: 47 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "The 2027 window is real but the modal path is blockade, not amphibious assault -- the precondition set is specific.",
        subtitle: "A positioned reading of the timing question, informed by PLA doctrine, exercise patterns, and current signals.",
        thesis: "The consensus across the corpus is that 2027 represents the earliest point at which the People's Liberation Army will possess the full operational capability required for a comprehensive Taiwan contingency, rather than a scheduled date for action. This assessment rests on Xi Jinping's explicit modernisation target for the PLA by 2027 and on repeated US Defence Department assessments of Chinese preparation timelines. Capability, however, is a necessary rather than sufficient condition for action. The precondition set that would transform latent capability into active decision is narrower and specific. Three categories of trigger emerge from the analysis. The first is a Taiwanese political event that Beijing interprets as crossing a red line: a formal declaration of independence, a US-Taiwan defence treaty ratified in Washington, or a constitutional revision that removes ambiguity about the status of the island. The second is an internal legitimacy crisis within the Chinese Communist Party that requires external distraction to consolidate elite unity or public support. The third is a US crisis of attention that Beijing perceives as opening a window of opportunity, whether generated by major conflict elsewhere or by sustained domestic political paralysis in Washington. None of these conditions is currently active. The modal trajectory under baseline dynamics is therefore continued escalation of blockade rehearsal and grey-zone pressure rather than kinetic action. The Justice Mission 2025 exercise conducted in December 2025 rehearsed a full maritime blockade rather than amphibious assault, a doctrinal signal that PLA planning currently prioritises economic strangulation over invasion. Blockade is politically ambiguous, technically achievable, and reversible; assault is none of these. PLA activity has meanwhile normalised inside Taiwan's contiguous zone, the twelve nautical mile buffer surrounding territorial waters. Each individual incursion is manageable in isolation, but the cumulative effect is a redefinition of the operational baseline that progressively lowers the threshold for miscalculation. Japan's 2026 defence white paper explicitly named Taiwan Strait stability as a Japanese security interest, hardening the trilateral configuration linking Washington, Tokyo and Taipei and raising the political cost of any Beijing move. This does not prevent a decision to act, but it prices such a decision higher.",
        implication: "The interaction between latent capability and unmet preconditions produces effects that reshape the security architecture of East Asia beyond the immediate question of Taiwan. The first effect is the institutionalisation of a permanent higher-alert posture across the region. As blockade rehearsals normalise and PLA activity in the contiguous zone becomes routine, allied forces adjust their operational tempo, exercise cadence and forward deployment patterns to a baseline that would have been considered escalatory two years earlier. This new baseline generates its own logistical, budgetary and political requirements that persist regardless of whether the underlying threat materialises. The second effect concerns the semiconductor supply chain. The prolonged uncertainty about Taiwan's status, combined with the visible normalisation of coercive activity, accelerates the dispersion of leading-node fabrication capacity to Arizona, Kumamoto and Dresden. By 2028 an estimated 15-20% of leading-node capacity will operate outside Taiwan, reducing the concentration risk but also reducing the strategic value of preserving TSMC intact in the event of Chinese action. This is a slow-moving shift with paradoxical implications: dispersion reduces global exposure but simultaneously weakens the economic disincentive that currently discourages Beijing from kinetic options. The third effect operates on Japanese defence policy. The formalisation of Taiwan Strait stability as a Japanese interest triggers a sustained process of doctrinal and capability adjustment, including expansion of Southwestern Island Chain defences, integration of Japanese command structures with US Indo-Pacific Command, and increases in defence spending toward the 2% of GDP target and beyond. These adjustments are structural rather than reversible; they produce a Japanese defence posture in 2028 that is qualitatively different from that of 2024. The fourth effect concerns regional alignment. Philippine, Australian and South Korean positions on Taiwan-related contingencies harden in ways that increase the political costs for each of these states of a US disengagement scenario, generating pressure on Washington to maintain commitment even under domestic political conditions that would otherwise favour reduction. This produces a self-reinforcing structure in which regional dependencies constrain American strategic flexibility.",
        evidence: [
          { n: "01", body: "The Justice Mission 2025 drills (December 2025) rehearsed a <em>full maritime blockade</em>, not amphibious assault. This is a doctrinal signal: PLA planning currently prioritizes economic strangulation over invasion. A blockade is politically ambiguous, technically achievable, and reversible. An assault is none of these.", citations: [{ src: "The Diplomat", date: "Jan 2026", emphasis: true }, { src: "CSIS", date: "Feb 2026" }] },
          { n: "02", body: "PLA activity has normalized inside Taiwan's contiguous zone (12nm). This is a boundary erosion, not a boundary breach. It lowers thresholds for miscalculation without requiring a strategic decision to escalate. The corpus reads this as <em>salami slicing at high tempo</em>: each individual incursion is manageable, the cumulative effect is a redefinition of the operational baseline.", citations: [{ src: "The Diplomat", date: "Jan 2026" }, { src: "MERICS", date: "May 2026" }] },
          { n: "03", body: "The precondition set for kinetic action includes: (a) a Taiwanese political move that Beijing frames as crossing the red line, (b) a US posture change that Beijing perceives as opening a window, (c) an internal Chinese economic or political crisis that requires external distraction. Currently, none of these conditions is present. The Trump administration's Middle East focus creates <em>marginal attention diversion</em> but not window-opening.", citations: [{ src: "CSIS", date: "Jun 2026" }, { src: "ISPI", date: "Jul 2026" }] },
          { n: "04", body: "Japan's defense white paper (2026) explicitly names the balance as tilting rapidly in China's favor and lists Taiwan Strait stability as a Japanese interest. This declaration hardens the trilateral USA-JPN-TWN configuration and raises the political cost of any Beijing move. It does not prevent a decision, but it prices it higher.", citations: [{ src: "Nikkei / Japan MoD", date: "Aug 2026" }, { src: "MERICS", date: "Aug 2026" }] }
        ],
        divergence: "CSIS emphasizes the 2027 capability window; MERICS emphasizes the trigger conditions as more decisive than capability.",
        sources: [ {name:"CSIS",passages:14},{name:"MERICS",passages:11},{name:"ISPI",passages:9},{name:"The Diplomat",passages:8},{name:"FP",passages:5} ],
        topArcs: [
          { pair: "PRC ↔ TWN", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "USA ↔ JPN", pol: "aligned", w: 4.2, vol: "L" },
          { pair: "USA ↔ TWN", pol: "aligned", w: 4.1, vol: "M" },
          { pair: "USA ↔ PHL", pol: "aligned", w: 3.8, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal path is blockade escalation, not assault -- but the tail toward kinetic action is not thin in 2027.",
        subtitle: "A 24-month projection of the Taiwan Strait dossier across 4 scenarios, informed by PLA doctrine and precondition dynamics.",
        thesis: "The simulation explored four trajectories on the Taiwan Strait dossier over the twenty-four-month horizon.\n\nIn the modal scenario (46%), the People's Liberation Army maintains large-scale exercises at Justice Mission scale two to three times per year, with continued normalisation of activity inside Taiwan's contiguous zone. Each exercise expands the operational envelope incrementally without crossing thresholds that would force a coalition response. The PLA reaches full invasion capability by the fourth quarter of 2027 but does not employ it. The trajectory closes with the Strait in a new equilibrium characterised by permanent higher-alert posture and normalised coercive activity below the kinetic threshold.\n\nIn the second scenario (22%), a grey-zone activity crosses a threshold that neither side had intended to breach. The most probable triggering events are an aerial intercept resulting in collision, maritime enforcement of an exclusion zone striking a civilian vessel, or a cyber operation with visible physical consequences. The subsequent trajectory depends on the speed and coherence of the trilateral response linking Washington, Tokyo and Taipei. Rapid coordination and effective backchannel communication produce de-escalation and a return to the pre-incident baseline. Slower or fragmented response produces formalisation of the blockade as a permanent posture, generating a Taiwan crisis without a Taiwan war.\n\nIn the third scenario (20%), one of the three precondition categories activates. A Taiwanese political move interpreted in Beijing as crossing a red line, a US-Taiwan formal defence treaty, or an internal Chinese crisis requiring external distraction. Any of these triggers shifts the kinetic option from unlikely to probable, with a concentrated window of six to twelve months following the triggering event. The most probable timing for the overall trajectory falls between the fourth quarter of 2027 and the first half of 2028, coinciding with the completion of PLA modernisation targets and the Taiwan electoral cycle.\n\nIn the fourth scenario (12%), a change of political configuration in Taipei following the 2028 elections opens dialogue space. Beijing responds by reducing exercise tempo in exchange for softer US arms transfer language, and a partial détente takes hold. This trajectory requires a specific electoral outcome favourable to the KMT or a third party, combined with a Trump administration recalibration toward the Indo-Pacific that would create political space for the reduced US posture on Taiwan that Beijing would demand.",
        implication: "The consolidation of the modal blockade equilibrium generates effects that extend well beyond the immediate question of Taiwan and reshape the security architecture of the Indo-Pacific over the horizon. The first effect is the entrenchment of a regional deterrence architecture that operates continuously at levels previously reserved for crisis response. The tempo of allied exercises, the density of forward-deployed assets, the frequency of freedom of navigation operations and the pattern of intelligence sharing all shift to a new baseline that is stable but structurally more expensive and less flexible than the pre-2024 configuration. This baseline generates its own political constituency across allied capitals, its own budgetary requirements, and its own logic that persists regardless of the underlying Chinese behaviour. The second effect is the transformation of miscalculation from residual concern to primary risk. In an equilibrium characterised by high tempo, permanent presence and normalised coercive activity, the probability of an unintended incident producing an escalatory spiral increases even as the probability of deliberate war-initiation remains constrained. The failure mode of the system shifts from strategic choice to protocol breakdown, and the mechanisms designed to prevent the former are poorly adapted to prevent the latter. The third effect operates through the global semiconductor supply chain. The sustained visibility of Taiwan risk accelerates dispersion of leading-node fabrication capacity beyond the pace that Beijing had anticipated. As dispersion progresses, the economic disincentive that currently constrains Chinese kinetic options weakens progressively. By 2028 the calculation that today makes seizure of TSMC self-defeating will be materially less binding than it is now, altering the strategic equation without any change in Beijing's declaratory position. The fourth effect is the crystallisation of Japan's transition from constrained security actor to full regional power. The formalisation of Taiwan as a Japanese interest, combined with the operational integration with US forces, the expansion of Nansei island chain infrastructure and the sustained increase in defence spending, produces a Japanese posture in 2028 that removes long-standing ambiguities and generates its own diplomatic weight across Southeast Asia. This weight interacts with Chinese regional strategy in ways that go beyond the Taiwan question, altering the calculus on the East China Sea, on South China Sea claims, and on Chinese influence operations across the Association of Southeast Asian Nations. The fifth effect concerns the pattern that Beijing has developed for managing pressure against Japan -- sustained economic and diplomatic friction without dramatic escalation -- which generalises across the region as the default operating mode. This mode is applied not as explicit strategy but as learned default, extending to Philippine, South Korean and Australian relationships in ways that reshape regional expectations of Chinese behaviour.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 12, ci: "8-16%",  pol: "blue",      body: "<em>Cross-strait detente window.</em> A new political configuration in Taipei (2028 election) opens dialogue space. PRC reduces exercise tempo in exchange for softer US arms transfer language. Requires a specific electoral outcome and a Trump administration recalibration; neither is currently visible." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 46, ci: "40-53%", pol: "amber",     body: "<em>Sustained blockade rehearsal.</em> PLA maintains Justice Mission-scale drills at 2-3 per year cadence. Contiguous zone activity normalizes further. USA-JPN-TWN reinforcement continues incrementally. No kinetic threshold crossed. Modal reading through 2027-early 2028." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 22, ci: "17-27%", pol: "red",       body: "<em>Limited kinetic incident.</em> A gray-zone activity crosses threshold (aerial intercept collision, maritime enforcement of exclusion zone, cyber event with visible effect). Response depends on trilateral coordination speed. Could de-escalate through backchannel or trigger blockade formalization." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 20, ci: "15-25%", pol: "dim-amber", body: "<em>Trigger-set activation.</em> One of the three trigger sets activates in the horizon: Taiwan declaration, US-Taiwan formal defense treaty, or PRC internal crisis requiring distraction. Under this scenario the kinetic option becomes probable. Timing depends on the trigger; the corpus reads Q4 2027-H1 2028 as the concentrated window." }
        ],
        latticeCaption: "Each terminal is a Strait configuration at 24-month horizon; modal band (blockade rehearsal) concentrates most weight. Right tail (kinetic incident, trigger activation) is persistent across seeds where PLA exercise pattern deviates from calendar.",
        sensitivity: "The distribution is most sensitive to <em>PLA exercise pattern deviation</em>: a shift from calendar-coincident to off-calendar large exercises would move S3+S4 collectively from 42% to 58%. Second-most sensitive is <em>Taiwan 2028 election dynamics</em>: a DPP victory framed as pro-independence moves S4 to 30%. Third is <em>US arms transfer categorization language</em>: a shift to explicitly offensive framing moves S1 to 5% and S4 to 26%.",
        robustness: 3.7, robustnessCaption: "HIGH",
        robustnessNote: "Distribution stable across 5 restart seeds. Confidence high on the modal path; tail probabilities have wider intervals due to trigger dependence.",
        drivingArcs: [
          { pair: "PRC ↔ TWN", desc: "Frame: PLA tempo",              pol: "red" },
          { pair: "USA ↔ TWN", desc: "Anchor: reinforcement cadence", pol: "green" },
          { pair: "USA ↔ JPN", desc: "Deterrent: trilateral tightness",pol: "green" },
          { pair: "USA ↔ PRC", desc: "Frame: managed rivalry",        pol: "amber" }
        ],
        assumptions: [
          "A1: 2027 marks capability inflection, not scheduled event.",
          "A2: Blockade doctrine remains preferred to amphibious assault in PLA planning.",
          "A3: Trump administration Middle East focus continues without full pivot to Asia.",
          "A4: TSMC operational continuity absent a specific catalyst.",
          "A5: Taiwan political stability through 2028 election cycle."
        ],
        stats: { tier: "Standard", iterations: 187, nodes: 1248, time: "3m 12s", cost: "$0.28" },
        fullReport: {
          narrative: "The modal trajectory unfolds as follows across the twenty-four-month horizon. Through the fourth quarter of 2026 and the whole of 2027, the People's Liberation Army maintains two to three large-scale exercises per year at Justice Mission scale, with continued normalisation of activity inside the contiguous zone. Each individual incursion is managed by Taiwanese and allied forces; the cumulative effect is that the operational baseline of PLA activity within twelve nautical miles becomes the new normal. The US arms transfer cycle to Taiwan continues at programmatic tempo, covering coastal defence, munitions replenishment, and cyber capability. Japan's defence posture formalisation proceeds through the 2027 white paper cycle; the language on the Japan-Taiwan relationship moves from declared-informal to declared-substantive. Philippine EDCA expansion continues at its established pace; South Korean posture remains ambiguous but supportive. Through early 2028 the Taiwan election dynamics dominate the political calendar. The DPP-KMT contest is close and the framing of cross-strait relations is central to both campaigns. Beijing calibrates its tempo to the electoral cycle: signalling without provoking, exercising restraint in the immediate pre-election period to avoid triggering the DPP mobilisation that intensive PLA activity historically produces. In the second half of 2028 the horizon closes with the Strait configuration essentially preserved but with all baseline metrics -- PLA activity, US commitment, Japanese posture, allied force presence -- at levels that would have been considered escalatory in 2024. The new normal is stable but structurally stiffer than the equilibrium it replaced.",
          keyMoves: [
            "Q4 2026: PLA conducts exercise at Justice Mission scale.",
            "Q1-Q2 2027: US arms package emphasising prolonged conflict capability.",
            "Q3 2027: Japan 2027 defence white paper formalises Taiwan interest.",
            "Q4 2027: PLA reaches full modernisation capability inflection.",
            "H1 2028: Taiwan electoral cycle; Beijing calibrates signalling.",
            "H2 2028: New equilibrium consolidates; blockade rehearsal fully normalised."
          ]
        }
      }
    },

    "taiwan-fu-a": {
      question: "What role does the semiconductor supply chain play in Beijing's calculus?",
      dossier: "Taiwan Strait / Chip supply chain", dossierId: "taiwan", parent: "taiwan-main",
      subgraph: {
        focus: ["PRC", "TWN", "USA", "TSMC", "NLD"], peripheral: ["KOR", "JPN"],
        arcs: [
          { s: "PRC", t: "TWN",  w: 4.7, vol: "H", pol: "hostile" },
          { s: "USA", t: "TWN",  w: 4.1, vol: "M", pol: "aligned" },
          { s: "USA", t: "PRC",  w: 4.9, vol: "H", pol: "complex" },
          { s: "PRC", t: "TSMC", w: 4.3, vol: "M", pol: "complex" },
          { s: "USA", t: "TSMC", w: 4.4, vol: "M", pol: "aligned" },
          { s: "USA", t: "NLD",  w: 4.0, vol: "L", pol: "aligned" }
        ],
        actorCount: 7, arcCount: 6, passageCount: 39, sourceCount: 5
      },
      evidenceStrength: 4.2, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph refined: 7 actors, 6 arcs","Corpus retrieval: 39 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "TSMC is Beijing's most valuable hostage -- and also its most binding constraint.",
        subtitle: "A focused reading of the semiconductor dimension in the Taiwan calculus.",
        thesis: "The semiconductor supply chain operates in Beijing's Taiwan calculus as a two-sided constraint rather than a unidirectional pressure point. On one side, control over Taiwan Semiconductor Manufacturing Company would confer strategic leverage over the global economy that no other single asset could provide. Approximately 90% of leading-node logic chip production is concentrated in a small number of TSMC fabrication facilities on the island. Any actor with effective control over these facilities would possess a chokepoint over the technology supply chain of the entire developed world. On the other side, the destruction or degradation of TSMC in a kinetic contingency would be strategically self-defeating for Beijing. The fabrication facilities are technologically fragile in ways that resist military seizure. Continuous operation requires the daily supply of ultra-pure gases, extreme ultraviolet lithography consumables and specialty chemicals, the maintenance of vibration-free environmental conditions, and the continuous presence of thousands of specialist engineers whose tacit knowledge cannot be captured through the acquisition of the physical plant. Any disruption of power, cooling, personnel movement or supply chains lasting more than a few days translates into weeks or months of production loss, with cascading effects on global electronics manufacturing that would fall heavily on China itself given the deep integration of Chinese assembly with TSMC-produced chips. Beijing's semiconductor self-sufficiency programme, structured around Big Fund III capital deployment, a mature-node dominance strategy and repeated attempts at high-bandwidth memory breakthroughs, has produced substantial progress at mature nodes but remains structurally blocked at leading nodes without EUV lithography access. The US-Netherlands-Japan trilateral arrangement on ASML export restrictions is holding across successive political cycles, and no credible alternative EUV source is expected within the horizon. This lengthens the period during which Taiwan-based capacity remains strategically decisive and simultaneously extends the interval during which Beijing has strong incentive to preserve rather than destroy the asset. The dispersion strategy implemented by TSMC, comprising the Arizona Phase 3 facility, Kumamoto Phase 2, and Dresden operations, reduces geographic concentration without eliminating it. Independent projections estimate that by 2028 approximately 15-20% of leading-node capacity will operate outside Taiwan, with the substantial majority remaining on the island. The American strategic assumption is that dispersion will continue to accelerate; the Chinese assumption is that it will not.",
        implication: "The centrality of the semiconductor supply chain in the Taiwan calculus generates second-order effects that reshape the global technology industry and the broader US-China strategic competition. The first effect is the acceleration of decoupling in critical technology domains. As the visibility of Taiwan risk persists, corporate boards and government procurement agencies apply pressure for supply chain redundancy that extends well beyond leading-node logic chips to include mature nodes, packaging, materials, and semiconductor manufacturing equipment. This pressure translates into sustained investment flows into non-Taiwan capacity across the United States, Japan, Korea, Germany and increasingly India, generating a structural transformation of the industry that will persist regardless of how the Taiwan question ultimately resolves. The second effect concerns the erosion of the economic disincentive that currently constrains Chinese kinetic options. Every quarter of successful dispersion reduces the strategic value to Beijing of preserving TSMC intact, and correspondingly weakens the calculation that makes kinetic action self-defeating. This is a slow-moving shift with paradoxical policy implications: the American dispersion strategy that reduces global economic exposure to a Taiwan contingency simultaneously reduces the deterrent effect that current concentration provides. The third effect operates on Chinese domestic technology policy. The persistence of the EUV constraint, combined with the visible success of the trilateral export control regime, drives sustained investment in alternative pathways including chiplet architectures, advanced packaging, and materials innovation. This investment does not close the leading-node gap in the horizon but produces incremental capability improvements at mature and specialty nodes that increase Chinese competitiveness in high-volume commodity segments of the semiconductor market. The consequence is a bifurcated industry structure in which the West retains leading-node dominance while China acquires progressively larger share at mature nodes, generating trade and pricing dynamics that reshape the global electronics industry. The fourth effect concerns the alliance structure supporting the trilateral export control regime. The regime's success depends on continued Dutch and Japanese willingness to enforce restrictions against significant commercial cost, and this willingness is subject to political turbulence in both countries. Any weakening of the trilateral, whether through electoral change or through Chinese economic pressure, would materially alter the horizon during which the EUV constraint holds and would therefore alter Chinese calculations on the Taiwan question.",
        evidence: [
          { n: "01", body: "TSMC leading-node capacity is not just concentrated in Taiwan -- it is concentrated in <em>a small number of fabs</em> whose operational continuity depends on daily supply of ultra-pure gases, EUV consumables, and thousands of specialist engineers. Any kinetic event that disrupts power, cooling, or personnel movement for more than days translates into weeks or months of production loss. This is <em>not recoverable by seizure</em>.", citations: [{ src: "CSIS", date: "May 2026", emphasis: true }, { src: "Bruegel", date: "Jun 2026" }] },
          { n: "02", body: "Beijing's semiconductor self-sufficiency push (Big Fund III, mature-node dominance strategy, HBM breakthrough attempts) has produced real progress at mature nodes but remains structurally blocked at leading nodes without EUV access. The US-Netherlands-Japan trilateral on ASML export restrictions is holding. This <em>lengthens the horizon</em> during which Taiwan-based capacity is strategically decisive.", citations: [{ src: "MERICS", date: "Jul 2026" }, { src: "Bruegel", date: "Aug 2026" }] },
          { n: "03", body: "The dispersion strategy (TSMC Arizona Phase 3, Kumamoto Phase 2, Dresden) reduces but does not eliminate the concentration. By 2028 estimated ~15-20% of leading-node capacity will be outside Taiwan. This is meaningful but leaves the majority still on-island. The US bet is that the trend continues; Beijing's bet is that it does not accelerate.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "CSIS reads the semiconductor constraint as decisive against kinetic action; MERICS reads it as slowing but not preventing.",
        sources: [ {name:"CSIS",passages:12},{name:"Bruegel",passages:9},{name:"MERICS",passages:8},{name:"ISPI",passages:6},{name:"FP",passages:4} ],
        topArcs: [
          { pair: "USA ↔ PRC",  pol: "complex", w: 4.9, vol: "H" },
          { pair: "PRC ↔ TWN",  pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ TSMC", pol: "aligned", w: 4.4, vol: "M" },
          { pair: "PRC ↔ TSMC", pol: "complex", w: 4.3, vol: "M" },
          { pair: "USA ↔ NLD",  pol: "aligned", w: 4.0, vol: "L" }
        ],
        cost: "$0.02", composedAt: "10:34"
      },
      dtReport: null
    },

    "taiwan-fu-b": {
      question: "How does Japan's defense posture change the risk window?",
      dossier: "Taiwan Strait / Chip supply chain", dossierId: "taiwan", parent: "taiwan-main",
      subgraph: {
        focus: ["JPN", "TWN", "USA", "PRC"], peripheral: ["KOR", "PHL", "AUS"],
        arcs: [
          { s: "JPN", t: "TWN", w: 3.8, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.3, vol: "L", pol: "aligned" },
          { s: "PRC", t: "JPN", w: 3.7, vol: "M", pol: "complex" },
          { s: "PRC", t: "TWN", w: 4.7, vol: "H", pol: "hostile" }
        ],
        actorCount: 7, arcCount: 4, passageCount: 33, sourceCount: 4
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph refined: 7 actors, 4 arcs","Corpus retrieval: 33 passages, 4 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "Japan has moved from tacit to substantive on Taiwan -- the risk window narrows in one direction, widens in another.",
        subtitle: "A focused reading of Japan's evolving posture and its effect on the Strait risk profile.",
        thesis: "The 2026 Japanese defence white paper represents the culmination of a decade of gradual posture hardening on the Taiwan question. For the first time in the postwar period, Taiwan Strait stability is explicitly named as a Japanese security interest in an official defence policy document. This language shifts Taiwan from the category of regional concern to the category of direct interest, with implications for planning, force posture, and diplomatic engagement that extend well beyond the declaratory dimension. The change is double-edged in its effect on the risk profile of the Taiwan Strait. On one side, it strengthens deterrence by making the trilateral configuration linking Washington, Tokyo and Taipei operationally real rather than rhetorical. Beijing can no longer rely on Japanese ambiguity as a fallback assumption in a crisis, and this uncertainty reduction removes a factor that previously lowered the political cost of coercive action. On the other side, the removal of ambiguity raises the political cost of any subsequent walk-back. When declaratory language is explicit, retreating from it becomes politically expensive; the flexibility that ambiguity provided for de-escalation off-ramps is correspondingly reduced. Operational integration between US and Japanese forces on Taiwan contingencies has accelerated in parallel with the declaratory shift. Joint exercises now include explicit Taiwan scenarios that were previously euphemistic, addressing sea denial, air superiority contests, and combined logistics operations under conditions that closely approximate wartime requirements. Basing arrangements in the Nansei island chain, particularly on Yonaguni, Ishigaki and Miyako, have been reinforced with additional Ground Self-Defense Force units and coordinated with US Marine Littoral Regiment deployments. The trilateral configuration has become substantive rather than aspirational. Beijing's response has been calibrated rather than confrontational. Chinese economic and diplomatic pressure on Japan has intensified in specific sectors and on specific issues, with restrictions on rare earth exports, targeted enforcement actions against Japanese firms operating in China, and consistent Foreign Ministry criticism of Japanese defence policy. However, this pressure has not translated into military escalation or dramatic diplomatic breach. The pattern indicates a Chinese assessment that Japan cannot be deterred from continued posture hardening but can be raised in cost, and that a slow-burn friction serves Chinese interests better than a rapid escalation that would consolidate Japanese domestic support for further defence spending.",
        implication: "Japan's posture evolution generates second-order effects across the Indo-Pacific security architecture that extend well beyond the immediate Taiwan question. The first effect is the transformation of the US-Japan alliance from a bilateral arrangement into the central pillar of a broader regional coalition. The demonstrated operational integration on Taiwan contingencies produces spillover effects on the alliance treatment of the East China Sea, the South China Sea, and Korean peninsula scenarios, generating a level of combined planning and force integration that was politically unfeasible in the previous decade. This transformation is structural and largely irreversible; a subsequent Japanese government could adjust tone but could not undo the operational capabilities that have been developed. The second effect concerns Japanese defence industrial policy. The formalisation of Taiwan as a Japanese interest, combined with the corresponding capability requirements, drives sustained investment in domestic weapons systems production, dual-use technology development, and cyber capabilities. Companies including Mitsubishi Heavy Industries, Kawasaki, and IHI receive multi-year procurement contracts that generate industrial capacity persisting regardless of the immediate security environment. This capacity generates its own political constituency and its own strategic logic. The third effect operates on the pattern of Chinese regional engagement. Beijing's decision to manage Japanese posture change through slow-burn economic and diplomatic friction rather than through dramatic escalation becomes a template that generalises across other regional relationships. The same approach is applied to Philippine assertiveness in the South China Sea, to Australian AUKUS commitments, and to South Korean posture developments. This pattern reshapes regional expectations of Chinese behaviour in ways that support broader regional consolidation against Chinese pressure. The fourth effect concerns the balance within the Japanese political system between traditional pacifist constituencies and emerging security constituencies. The Taiwan posture change is politically consequential in ways that extend beyond defence policy, shifting the centre of gravity of Japanese political debate on constitutional revision, on nuclear energy, on relations with Korea, and on the future of the pacifist Article 9 framework. These shifts are visible over the horizon and produce a Japanese political landscape in 2028 that is qualitatively different from that of 2024.",
        evidence: [
          { n: "01", body: "Japan's 2026 defense white paper stated that the military balance between China and Taiwan is <em>rapidly tilting in China's favor</em>, and named Taiwan Strait stability as a Japanese security interest. This is a substantive escalation from prior white papers that treated Taiwan as a regional concern rather than a direct security interest.", citations: [{ src: "Japan MoD white paper", date: "Jul 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02", body: "Operational-level integration between US and Japanese forces on Taiwan contingencies has accelerated. Joint exercises now include explicit Taiwan Strait scenarios (previously euphemistic). Basing arrangements in Nansei island chain support forward positioning. The trilateral configuration is real, not rhetorical.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Beijing's response has been calibrated: no dramatic escalation, but consistent economic and diplomatic pressure on Japan. The PRC read appears to be that Japan cannot be deterred from posture hardening but can be raised in cost. This is a slow-burn friction, not a rapid escalation.", citations: [{ src: "MERICS", date: "Aug 2026" }] }
        ],
        divergence: "CSIS emphasizes deterrent strengthening; MERICS emphasizes the miscalculation risk from removed ambiguity.",
        sources: [ {name:"CSIS",passages:11},{name:"MERICS",passages:9},{name:"ISPI",passages:8},{name:"Japan MoD",passages:5} ],
        topArcs: [
          { pair: "PRC ↔ TWN", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ JPN", pol: "aligned", w: 4.3, vol: "L" },
          { pair: "JPN ↔ TWN", pol: "aligned", w: 3.8, vol: "M" },
          { pair: "PRC ↔ JPN", pol: "complex", w: 3.7, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:38"
      },
      dtReport: null
    },

    "iran-main": {
      question: "What if the US disengages from the Middle East in the aftermath of Operation Epic Fury -- how does the Iran situation reshape?",
      dossier: "Iran post-Epic Fury", dossierId: "iran", parent: null,
      subgraph: {
        focus: ["USA", "IRN", "ISR", "PRC", "OMN", "KSA"], peripheral: ["TUR", "IRQ", "YEM"],
        arcs: [
          { s: "USA", t: "IRN", w: 4.6, vol: "H", pol: "hostile" },
          { s: "USA", t: "ISR", w: 4.5, vol: "M", pol: "aligned" },
          { s: "IRN", t: "ISR", w: 4.7, vol: "H", pol: "hostile" },
          { s: "PRC", t: "IRN", w: 4.0, vol: "H", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "OMN", t: "IRN", w: 3.6, vol: "M", pol: "aligned" },
          { s: "KSA", t: "IRN", w: 3.7, vol: "H", pol: "complex" }
        ],
        actorCount: 9, arcCount: 7, passageCount: 51, sourceCount: 6
      },
      evidenceStrength: 3.9, evidenceCaption: "MODERATE-HIGH",
      thinkingSteps: ["Subgraph resolved: 9 actors, 7 arcs","Corpus retrieval: 51 passages, 6 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "US disengagement is a counterfactual, not a trajectory -- but the counterfactual reshapes the whole subgraph.",
        subtitle: "A positioned reading of a hypothetical US pullback from the Middle East after Epic Fury and the post-cease-fire economic phase.",
        thesis: "Actual American posture in the region as of August 2026 does not correspond to disengagement. Naval rotation continues at established tempo, with the USS Abraham Lincoln returning to home port and the USS George Washington arriving to assume Gulf presence duties. The sanctions programme has escalated substantially, culminating in Treasury Secretary Bessent's announcement of an economic operation targeting countries purchasing Iranian oil, with secondary sanctions threatened against Chinese firms trading with Iran. This constitutes escalation through a different instrument rather than disengagement: pressure has been redirected from the kinetic domain to the financial domain while forward military presence is maintained. A genuine disengagement scenario would require discontinuous reversal of both trajectories, with the United States reducing naval presence, terminating the sanctions programme, and positioning itself as an offshore observer rather than an active regional participant. Under such a counterfactual, three principal effects would dominate the regional reconfiguration. The first is the sharp increase in Israeli strategic exposure. Israel possesses demonstrated capability for unilateral action, as Operation Epic Fury illustrated, but the joint nature of that operation reflected structural constraints on sustained Israeli independent operations. Interceptor stockpiles, aerial refuelling capacity, and the political sustainability of continuous mobilisation all limit Israeli capacity for prolonged campaigns without American backing. Under disengagement, Israeli doctrine would compress from managed rivalry toward preemption of specific Iranian capability thresholds. The second effect is the elevation of Chinese economic support for Iran from tactical to strategic significance. Beijing has publicly defended its cooperation with Tehran against the Bessent sanctions regime; under disengagement this cooperation would transition from calibrated defiance to strategic anchor, providing Iran with oil purchasing, financial services, and political cover through the Security Council. The third effect is the repositioning of Gulf mediators. Oman is actively negotiating a Hormuz shipping channel proposal and positioning itself as a bridge between the parties. Saudi Arabia is engaged in ongoing recalibration of its own regional posture. Under disengagement, both would shift decisively toward hedging arrangements, pursuing direct dialogue with Tehran rather than working through Washington. The resulting subgraph reconfigures around a triangle linking Beijing, Tehran and Jerusalem, with Washington as an offshore observer whose economic leverage persists but whose ability to shape outcomes is materially reduced.",
        implication: "The disengagement counterfactual reveals structural properties of the Middle East security architecture that remain latent under conditions of American engagement. The first structural feature exposed is the extent to which the current regional order depends on American willingness to bear the costs of continuous crisis management. The Bessent sanctions programme, the naval rotation, the diplomatic pressure on Chinese firms, and the coordination with Israeli operations together constitute a substantial and continuous American investment that is not visible as such because it operates as baseline rather than as intervention. Removal of this investment would immediately expose the fragility of arrangements that appear stable under current conditions. The second feature is the centrality of the US-China relationship as the meta-variable for regional stability. Under disengagement, Chinese behaviour toward Iran becomes the primary determinant of regional trajectory, and Chinese behaviour toward Iran is a function of the broader US-China competition on Taiwan, technology and trade. This produces a coupling in which Middle East outcomes are shaped by dynamics that unfold in the Pacific, generating strategic dependencies that would not be recognised as such under current arrangements. The third feature concerns the trajectory of Israeli strategic autonomy. Under sustained American engagement, Israeli doctrine develops within a framework of American backing that constrains options at the margin while providing security guarantees at the core. Under disengagement, Israeli autonomy increases in operational terms but decreases in strategic terms, as the removal of the American security guarantee forces the acceptance of a permanent higher level of regional risk. The Israeli political system would need to adjust to this changed strategic environment, with consequences for domestic coalition arithmetic that would reshape Israeli policy across multiple dimensions. The fourth feature is the acceleration of Gulf state hedging as a permanent regional posture. Oman, Saudi Arabia, the United Arab Emirates and Qatar would each pursue independent security arrangements that reduce dependence on American guarantees, including through direct engagement with China, expansion of security ties with Turkey, and development of indigenous capabilities. These arrangements would persist even under subsequent restoration of American engagement, producing a fundamentally more multipolar regional structure than has existed since the 1990s.",
        evidence: [
          { n: "01", body: "Actual US posture is dual: naval rotation continues (USS Abraham Lincoln returning, USS George Washington arriving), and the economic operation has escalated to sanctions on countries buying Iranian oil (Bessent's 'economic D-Day'). This is <em>escalation via a different instrument</em>, not disengagement. The counterfactual requires reversal of both trajectories.", citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "Reuters", date: "Aug 20 2026" }] },
          { n: "02", body: "Under disengagement, Israel's strategic posture becomes the primary regional variable. Israel has capability but not capacity for sustained regional deterrence without US backing. Two adaptations are plausible: (a) escalate independently to secure gains from Epic Fury, (b) seek explicit security guarantees from Gulf partners (Abraham Accords formalization at security level).", citations: [{ src: "FP", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "China has publicly defended its cooperation with Iran against US sanctions pressure. Under disengagement, this cooperation becomes a <em>strategic asset</em>: Iran gains oil buyer, financial channel, and a de facto political umbrella. The PRC-IRN arc, currently at weight 4.0, would move toward 4.5-4.8 range. This has second-order effects on the US-PRC dynamic globally.", citations: [{ src: "CNN", date: "Aug 25 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "04", body: "Gulf mediators are already hedging. The Iran-Oman shipping channel proposal for Hormuz is a signal that Muscat is positioning as a bridge rather than a US ally. Saudi Arabia's calculus becomes: manage Iran through direct dialogue if US is not the guarantor. Any US disengagement accelerates this repositioning.", citations: [{ src: "Press TV / regional", date: "Aug 2026" }, { src: "CSIS", date: "Aug 2026" }] }
        ],
        divergence: "CNN reads sanctions as escalation via new means; MERICS reads them as prelude to negotiated exit; ISPI positions between the two.",
        sources: [ {name:"CNN",passages:12},{name:"CSIS",passages:10},{name:"MERICS",passages:9},{name:"FP",passages:8},{name:"Reuters",passages:7},{name:"ISPI",passages:5} ],
        topArcs: [
          { pair: "USA ↔ PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "IRN ↔ ISR", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ IRN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "USA ↔ ISR", pol: "aligned", w: 4.5, vol: "M" },
          { pair: "PRC ↔ IRN", pol: "aligned", w: 4.0, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Under disengagement, the modal path is PRC-anchored Iran with Israeli unilateral posture -- but the incident risk is high.",
        subtitle: "A 12-month counterfactual projection of the Iran subgraph under hypothetical US Middle East disengagement.",
        thesis: "The simulation explored four trajectories on the Iran dossier under the counterfactual condition of American disengagement from the Middle East.\n\nIn the modal scenario (41%), Beijing assumes the role of principal external supporter for Tehran through a formal architecture of oil purchasing, financial services and diplomatic cover. The post-Khamenei transition consolidates around a pragmatic faction within the Iranian political system that accepts structural dependence on China in exchange for regime survival and reconstruction capacity. Iran resumes limited nuclear programme development at a pace calibrated to avoid triggering an Israeli response. Israel operates under a compressed doctrine of unilateral preemption, conducting occasional strikes on specific Iranian capabilities without American coordination or public backing. Regional Arab states hedge visibly, pursuing direct dialogue with Tehran while maintaining nominal alignment with Washington. The trajectory closes in an unstable equilibrium.\n\nIn the second scenario (22%), Israeli decision-makers interpret the American disengagement window as an opportunity for decisive action against remaining Iranian capability. Sustained strikes without American backing produce Iranian responses calibrated to preserve Chinese-mediated stability, avoiding direct kinetic escalation but generating economic disruption through proxies in Iraq, Lebanon and Yemen. The absence of American restraint on both parties allows successive escalation cycles to accumulate, with cumulative effects that resemble a regional war conducted without formal declaration.\n\nIn the third scenario (22%), Iran interprets American disengagement as a strategic window and accelerates nuclear programme development under the cover of Chinese economic support. Israel responds through preemptive strikes; Gulf states pursue their own nuclear capabilities as insurance. A regional proliferation cascade begins that reshapes the strategic environment permanently. The specific outcome that Epic Fury was designed to prevent materialises in slower motion and without the American resources required to counter it.\n\nIn the fourth scenario (15%), a regional framework emerges through Chinese mediation, linking Iran, Saudi Arabia and the Gulf states in a security architecture that constrains Iranian nuclear development in exchange for economic protection and political recognition. Israel accepts a frozen conflict under the terms of the emerging order. This trajectory requires Chinese willingness to constrain Iran actively, a willingness that the corpus reads as bounded and not currently visible.",
        implication: "The consolidation of the modal PRC-anchored equilibrium under disengagement produces effects that extend well beyond the Iran dossier and reshape the global strategic environment across multiple theatres. The first effect is the emergence of the Middle East as a domain of active US-China strategic competition, with Chinese instruments of influence operating openly in a region that has been under American strategic dominance since 1991. This shift generates spillover effects on Chinese behaviour in other regions, on American resource allocation, and on the pricing of global energy and financial assets. The second effect concerns the transformation of the global oil market. Sustained Chinese purchasing of sanctioned Iranian crude, operating outside dollar-denominated flows through the CIPS system and RMB clearing arrangements, produces a parallel oil trading architecture that reduces the effectiveness of American financial sanctions as an instrument of coercion. This architecture, once established, does not require Iran-specific conditions to persist; it becomes available to other sanctioned states and generates a structural weakening of the US dollar's role in global commodity markets. The third effect operates on the credibility of American security guarantees globally. The visible willingness of the United States to accept a fundamentally different Middle East security architecture under disengagement conditions signals to allies in other theatres that similar recalibration is possible. Taiwanese, Korean, Japanese, Baltic and Ukrainian assessments of American commitment are all affected by this signal, generating pressure for indigenous capability development, alternative security arrangements, and hedging behaviour that reduces American strategic influence across regions well beyond the Middle East. The fourth effect concerns the Israeli political and strategic transformation required by sustained operation without American backing. Israeli society, political institutions and defence establishment would need to accept levels of continuous mobilisation, economic sacrifice and international isolation that would fundamentally alter the character of the state. The trajectory of this transformation over the horizon is uncertain but the transformation itself is inevitable under sustained disengagement conditions. The fifth effect operates on the pattern of Chinese engagement with the developing world more broadly. Successful demonstration of the ability to provide economic protection, security cooperation and political umbrella to a state under American pressure becomes a template that Beijing offers to other governments facing American coercion, generating a systemic alternative to the American-led international order that has structured global politics for three decades.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 15, ci: "10-20%", pol: "blue",      body: "<em>Multilateral stabilization.</em> A regional framework emerges (Iran-Saudi-Gulf) mediated by China, with Iran nuclear program constrained by PRC pressure in exchange for economic protection. Israel accepts frozen conflict. Requires PRC willingness to constrain Iran, currently marginal in the corpus." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 41, ci: "35-48%", pol: "amber",     body: "<em>PRC-anchored Iran, Israeli unilateral posture.</em> China becomes Iran's economic lifeline. Iran stabilizes internally, resumes limited nuclear program development. Israel operates with unilateral doctrine, occasional strikes without US coordination. Regional actors hedge. Modal path but unstable equilibrium." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 22, ci: "17-28%", pol: "red",       body: "<em>Israeli escalation without US.</em> Israel judges the disengagement window as opportunity for decisive action against remaining Iranian capability. Strikes without US backing. Iranian response calibrated to PRC-Russian support. Escalation spirals in absence of US restraint on both parties." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 22, ci: "17-28%", pol: "dim-amber", body: "<em>Nuclear breakout attempt.</em> Iran reads disengagement as strategic window, accelerates program under PRC economic cover. Israel responds unilaterally. Gulf states seek own nuclear capability. Regional proliferation cascade. This is the tail that Epic Fury was designed to prevent." }
        ],
        latticeCaption: "Each terminal is a regional configuration at 12-month horizon under disengagement counterfactual; modal band (PRC-anchored) concentrates most weight but right tail is thick due to Israeli and Iranian agency.",
        sensitivity: "The distribution is most sensitive to <em>PRC willingness to constrain Iran</em>: high willingness moves S1 from 15% to 26% and shrinks S4 from 22% to 12%. Second-most sensitive is <em>Israeli threshold for unilateral action</em>: low threshold moves S3 from 22% to 33%. Third is <em>Gulf coordination</em>: high coordination moves S1 up and stabilizes distribution.",
        robustness: 3.3, robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 restart seeds (max delta 7pp). Confidence limited because the counterfactual removes the largest constraining actor (US), amplifying dependence on other actors' choices.",
        drivingArcs: [
          { pair: "USA ↔ PRC", desc: "Meta-variable",              pol: "amber" },
          { pair: "PRC ↔ IRN", desc: "Anchor: economic guarantor", pol: "green" },
          { pair: "IRN ↔ ISR", desc: "Driver: dyadic dynamic",     pol: "red" },
          { pair: "USA ↔ ISR", desc: "Removed constraint",         pol: "amber" }
        ],
        assumptions: [
          "A1: Disengagement is discontinuous, not gradual (counterfactual definition).",
          "A2: PRC willingness to substitute US role is bounded but not zero.",
          "A3: Israel retains capability but requires strategic choices.",
          "A4: Iran retains regime cohesion post-Khamenei transition.",
          "A5: No new Trump administration reversal in the horizon."
        ],
        stats: { tier: "Standard", iterations: 176, nodes: 1156, time: "3m 04s", cost: "$0.27" },
        fullReport: {
          narrative: "The modal trajectory under the disengagement counterfactual unfolds as follows across the twelve-month horizon. In the fourth quarter of 2026 the United States announces phased withdrawal of assets from Gulf Cooperation Council installations, reduces Fifth Fleet presence, and terminates the sanctions programme in favour of a purely defensive posture built around distant offshore capabilities. Beijing responds immediately with explicit oil purchase commitments to Tehran and the activation of a formal payment mechanism operating outside the SWIFT system. Iranian internal politics stabilise as the post-Khamenei transition consolidates around a pragmatic faction that accepts structural Chinese dependence in exchange for regime survival and reconstruction capital. Nuclear programme development resumes at a controlled pace calibrated to avoid triggering an Israeli unilateral response. Israel enters strategic recalibration through the winter of 2026-2027. With American backing removed, Israeli doctrine compresses toward preemption of any specific Iranian capability threshold rather than management of the overall relationship. Two strikes on Iranian sites occur in the first and second quarters of 2027 without American coordination or public backing. Iranian response is calibrated to preserve the Chinese-mediated stability, generating economic disruption through proxies in Iraq, Lebanon and Yemen rather than direct kinetic retaliation. Gulf states hedge visibly through the middle of 2027. Saudi Arabia opens a direct diplomatic channel with Tehran under Omani mediation. The United Arab Emirates positions between the sides, maintaining commercial ties with both while avoiding explicit security commitments. Qatar continues its established mediator role but with reduced access to American resources. By the third quarter of 2027 the regional architecture has reconfigured around three poles: China anchoring Iran, Israel operating under unilateral doctrine, and Gulf states pursuing hedging arrangements. The United States operates as an offshore observer with residual economic leverage but reduced capacity to shape outcomes. The trajectory closes not in stable equilibrium but in a new configuration whose stability depends on daily choices by three independent actors with divergent interests and no shared crisis management infrastructure.",
          keyMoves: [
            "Q4 2026: US phased withdrawal announced; sanctions programme terminated.",
            "Q1 2027: PRC-Iran formal economic architecture activated.",
            "Q1-Q2 2027: Israeli unilateral strikes on Iranian sites.",
            "Q2 2027: Iranian calibrated response through regional proxies.",
            "Q3 2027: Gulf hedging visible; Saudi-Iran direct channel opens.",
            "Q4 2027: New regional configuration consolidates; unstable equilibrium."
          ]
        }
      }
    },

    "iran-fu-a": {
      question: "How would Israel adapt if the US steps back from Middle East security?",
      dossier: "Iran post-Epic Fury", dossierId: "iran", parent: "iran-main",
      subgraph: {
        focus: ["ISR", "IRN", "USA", "KSA", "UAE"], peripheral: ["EGY", "JOR", "PSE"],
        arcs: [
          { s: "USA", t: "ISR", w: 4.5, vol: "H", pol: "aligned" },
          { s: "IRN", t: "ISR", w: 4.7, vol: "H", pol: "hostile" },
          { s: "ISR", t: "KSA", w: 3.5, vol: "M", pol: "complex" },
          { s: "ISR", t: "UAE", w: 3.8, vol: "L", pol: "aligned" }
        ],
        actorCount: 8, arcCount: 4, passageCount: 36, sourceCount: 5
      },
      evidenceStrength: 3.7, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: ["Subgraph refined: 8 actors, 4 arcs","Corpus retrieval: 36 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "Israel would shift from managed rivalry to preemption doctrine -- with regional partnerships as insurance.",
        subtitle: "A focused reading of Israeli strategic adaptation under US disengagement.",
        thesis: "Under a counterfactual scenario of American disengagement from the Middle East, Israeli strategic doctrine would compress from managed rivalry toward preemption. The current doctrine treats Iran as a threat to be managed through periodic action combined with American-backed deterrence, an architecture that provides strategic flexibility, allows calibrated responses, and permits the maintenance of ambiguity about Israeli intentions and capabilities. Without American backing this architecture cannot sustain: the choice would reduce to two options. The first is preemption of specific Iranian capability thresholds as they emerge, requiring more frequent operations conducted at lower thresholds and generating higher operational tempo across the region. The second is acceptance of gradual Iranian reconstitution of the capabilities degraded during Operation Epic Fury, allowing a return to the pre-2026 threat environment on an accelerated timeline. Israel possesses demonstrated capability for unilateral strikes but not the capacity for sustained regional posture. Epic Fury was conducted jointly precisely because Israeli independent capacity for prolonged operations is constrained by three structural limitations: interceptor stockpiles that would deplete during sustained air defence operations, aerial refuelling capacity that limits the geographic range and duration of independent strikes, and the political sustainability of continuous mobilisation given the size of the Israeli reserve force relative to the population. Doctrine adaptation under disengagement would therefore reorient toward shorter, sharper, more frequent operations calibrated to specific capability thresholds. In parallel, Israel would pursue formalisation of security-level cooperation with Gulf partners as insurance against regional isolation. Abraham Accords formalisation at the security level, distinct from the diplomatic and economic dimensions that have progressed since 2020, has been available in principle but not pursued because Israeli-Palestinian dynamics and Saudi conditions have made the required concessions prohibitive. Under American disengagement, Israeli calculation on these concessions would change materially: the cost of continued Palestinian intransigence weighed against the value of Saudi security cooperation would shift decisively in favour of the latter. The corpus identifies this pathway as the most probable adaptation. The internal Israeli political dimension adds a complication that constrains the pace of adaptation. A preemption doctrine requires sustained domestic consensus that current coalition arithmetic does not guarantee, and the operational tempo required would generate visible costs in casualties and economic disruption that would test coalition stability. A disengagement announcement from Washington would likely trigger internal Israeli political realignment before doctrinal change becomes operational, adding six to twelve months of transition uncertainty before the new posture stabilises.",
        implication: "The Israeli transformation under disengagement conditions generates second-order effects that reshape the strategic environment of the eastern Mediterranean and the Gulf. The first effect is the emergence of a new regional security architecture centred on the Gulf-Israel axis, with structural implications for the pattern of Arab politics that have organised the region since the establishment of the state of Israel. The formalisation of security cooperation between Riyadh and Jerusalem, and the associated inclusion of the United Arab Emirates and potentially Egypt, produces a defence architecture that operates independently of the American-led framework and that has its own logic, its own institutional development, and its own trajectory of consolidation over time. This architecture generates capabilities and dependencies that persist regardless of subsequent American re-engagement, permanently altering the regional strategic landscape. The second effect concerns the Palestinian question. Under sustained disengagement conditions the Israeli calculation on concessions required to unlock Saudi cooperation shifts in favour of concessions, but the concessions themselves generate domestic Israeli political consequences that reshape the internal balance between security-first and settlement-focused coalitions. The trajectory of these consequences is uncertain but the transformation of Israeli domestic politics is inevitable, with implications for the possibility of eventual Israeli-Palestinian settlement that would persist for a generation. The third effect operates on Iranian strategic calculation. Sustained Israeli preemption combined with Gulf-Israel security cooperation produces a regional environment in which Iranian nuclear ambitions face a coalition of adversaries operating independently of American constraints. The Iranian assessment of the costs and benefits of nuclear programme acceleration would shift, potentially toward more determined pursuit driven by the perception of existential regional isolation, or alternatively toward negotiation through Chinese mediation as the only path to survival. Which trajectory dominates depends on the balance of factions within the post-Khamenei Iranian leadership. The fourth effect concerns the Turkish position in the region. Ankara has developed strategic ambitions across the eastern Mediterranean, the Caucasus and the Gulf that have been constrained by American influence over regional dynamics. Under disengagement, Turkish freedom of action expands materially, generating a fourth pole in the regional order that competes with the Gulf-Israel axis, the Iran-China alignment and the residual American offshore presence. This four-pole structure produces a fundamentally more unstable regional environment than the American-mediated order it replaces.",
        evidence: [
          { n: "01", body: "Israel has demonstrated capability for unilateral strikes but not for sustained regional posture. The Epic Fury operation was joint precisely because Israeli independent capacity for prolonged operations is limited (interceptor stockpiles, refueling logistics, political sustainability). Under disengagement, the doctrine adaptation is toward <em>shorter, sharper, more frequent</em> action.", citations: [{ src: "FP", date: "Aug 2026", emphasis: true }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "02", body: "Abraham Accords formalization at security level (not just diplomatic and economic) has been on the table since 2020 but has not proceeded due to Israeli-Palestinian dynamics and Saudi conditions. Under US disengagement, Israeli calculus on making concessions to unlock Saudi security cooperation would change materially. The corpus flags this as the most probable adaptation pathway.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "03", body: "The internal Israeli political dynamics matter: a preemption doctrine requires domestic consensus that current coalition arithmetic does not guarantee. A US disengagement announcement would likely trigger internal Israeli political realignment before doctrinal change is operational.", citations: [{ src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "FP emphasizes doctrinal compression; CSIS emphasizes regional partnership adaptation.",
        sources: [ {name:"FP",passages:11},{name:"CSIS",passages:9},{name:"ISPI",passages:7},{name:"MERICS",passages:5},{name:"Reuters",passages:4} ],
        topArcs: [
          { pair: "IRN ↔ ISR", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ ISR", pol: "aligned", w: 4.5, vol: "H" },
          { pair: "ISR ↔ UAE", pol: "aligned", w: 3.8, vol: "L" },
          { pair: "ISR ↔ KSA", pol: "complex", w: 3.5, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:34"
      },
      dtReport: null
    },

    "iran-fu-b": {
      question: "What is China's role as economic lifeline for Iran under US sanctions?",
      dossier: "Iran post-Epic Fury", dossierId: "iran", parent: "iran-main",
      subgraph: {
        focus: ["PRC", "IRN", "USA", "RUS"], peripheral: ["IND", "TUR", "PAK"],
        arcs: [
          { s: "PRC", t: "IRN", w: 4.2, vol: "H", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "USA", t: "IRN", w: 4.6, vol: "H", pol: "hostile" },
          { s: "PRC", t: "RUS", w: 4.1, vol: "M", pol: "aligned" }
        ],
        actorCount: 7, arcCount: 4, passageCount: 38, sourceCount: 5
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph refined: 7 actors, 4 arcs","Corpus retrieval: 38 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "China's Iran lifeline is real but calibrated -- enough to keep Iran solvent, not enough to trigger direct US-PRC confrontation.",
        subtitle: "A focused reading of the PRC-IRN economic architecture under maximum US sanctions pressure.",
        thesis: "Beijing has publicly defended its cooperation with Iran against the sanctions regime announced by Treasury Secretary Bessent in August 2026, stating that American pressure will only intensify regional tensions and that Sino-Iranian cooperation should not be disrupted. The pattern of Chinese behaviour is one of calibrated defiance rather than either compliance or full-throated support. Beijing maintains Iranian oil purchases through opaque intermediary channels, provides financial services operating outside Western banking rails, and offers political cover in multilateral fora including the Security Council. Simultaneously, Beijing consistently avoids provocations that would force a direct US-China economic confrontation specifically over Iran. The operational mechanism for Chinese purchase of sanctioned Iranian crude has evolved over multiple sanctions cycles and now operates through a stable architecture. Teapot refineries in Shandong province purchase Iranian oil via intermediaries in the United Arab Emirates and Malaysia, with settlement conducted in renminbi through the Cross-Border Interbank Payment System. This channel is scale-limited by the capacity of the teapot refineries and by the willingness of intermediaries to accept counterparty risk, but it is resilient to sanctions targeting third-country buyers because it operates below the threshold that would force American secondary sanctions on Chinese state-owned banks. The broader financial architecture supporting the Iranian economy has scaled sufficiently since 2020 to permit essential Iranian trade to operate outside dollar-denominated flows. The Cross-Border Interbank Payment System handles cross-border settlement; renminbi clearing arrangements provide correspondent banking services; gold-mediated settlement infrastructure permits transactions that neither the American Treasury nor its allies can monitor effectively. This does not amount to Iranian autarky, since Iran remains exposed to secondary effects and to disruption of specific commodity supplies, but it is sufficient to maintain regime survival and to support baseline economic function. The strategic assessment underlying Chinese behaviour is that Beijing prefers an Iran that is weakened but not defeated. A collapsed Iran would generate regional chaos that China cannot manage and that would threaten Belt and Road logistics through the region, particularly the China-Central Asia-West Asia Economic Corridor and the maritime routes through the Strait of Hormuz. A strong Iran would act autonomously in ways that could damage Chinese regional interests, including through actions that might destabilise Gulf state governments with whom Beijing maintains substantial commercial relationships. The calibration is fine-grained: enough support to prevent collapse, not so much as to enable adventurism. The consequence for the broader strategic frame is that Chinese Iran policy operates as a subset of the overall US-China relationship rather than as an independent variable, and Chinese calibration on Iran moves with the trajectory of US-China dynamics on Taiwan, technology and trade rather than with Iran-specific developments.",
        implication: "The Chinese calibrated posture on Iran generates second-order effects that reshape both the global sanctions architecture and the broader US-China strategic competition in ways that extend well beyond the Iranian dossier. The first effect is the progressive erosion of the effectiveness of American financial sanctions as an instrument of coercion. Every successful transaction settled through the Chinese parallel financial architecture demonstrates the viability of dollar-independent trade and reduces the perceived cost of defying American secondary sanctions. This demonstration effect extends to other sanctioned states, including Russia, North Korea, and potentially Venezuela and Myanmar, and generates a cumulative weakening of the sanctions regime that has structured American coercive statecraft since the end of the Cold War. The second effect concerns the internationalisation of the renminbi. Sustained Iranian trade settled in renminbi produces a corpus of transactions, contracts and banking relationships that gradually expand the currency's role beyond its traditional geographic and sectoral limits. This expansion is not sufficient to challenge dollar dominance in the horizon but is sufficient to establish alternative infrastructure that provides options for actors seeking to reduce dollar exposure, generating structural changes in global financial architecture that persist regardless of subsequent Iran-specific developments. The third effect operates on the pattern of American strategic responses. As Chinese calibration on Iran demonstrates that Beijing can absorb secondary sanctions pressure without material strategic cost, American policy planners face pressure to either escalate sanctions to levels that would trigger direct US-China confrontation, or accept that sanctions have reached their effective ceiling and pursue alternative instruments. Neither option is politically comfortable, and both generate consequences that extend beyond the Iran question. The fourth effect concerns the pattern of Russian and Chinese coordination in third theatres. The Chinese-Iranian financial architecture is directly connected to the Russian-Chinese arrangements that have developed since 2022, generating cumulative learning about the design and operation of parallel systems that support both Iranian and Russian resilience against Western pressure. This coordination is not formalised as an alliance but produces effects that closely resemble alliance behaviour in specific operational domains, contributing to the consolidation of a Sino-Russian bloc that opposes American economic statecraft as a matter of systemic interest rather than case-by-case calculation. The fifth effect operates on Iranian domestic politics. Sustained Chinese support enables the post-Khamenei transition to consolidate around factions that accept Chinese dependence in exchange for economic protection and regime survival. This consolidation reshapes Iranian foreign policy in ways that persist beyond the current sanctions cycle, producing an Iran whose strategic orientation is structurally aligned with Beijing rather than merely tactically cooperative.",
        evidence: [
          { n: "01", body: "China's public statement (August 25, 2026) that US sanctions 'will only further intensify tensions' and that PRC-Iran cooperation 'should not be disrupted' is a signaling move. It commits Beijing rhetorically without specifying operational scope. This gives room to maintain existing channels while avoiding new escalatory commitments.", citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02", body: "The operational mechanism for PRC-IRN oil trade under sanctions has evolved: teapot refineries in China purchase Iranian crude via UAE and Malaysian intermediaries, with settlement in RMB. This channel is scale-limited but resilient to sanctions targeting third-country buyers because it operates below the threshold that would force US secondary sanctions on Chinese state-owned entities.", citations: [{ src: "Reuters", date: "Aug 2026" }, { src: "Bruegel", date: "Jul 2026" }] },
          { n: "03", body: "The financial architecture (CIPS cross-border payments, RMB clearing, gold-mediated settlement) has scaled sufficiently since 2020 that Iran can operate outside dollar-denominated flows for essential trade. This is not autarky -- Iran remains vulnerable to secondary effects -- but it is sufficient for regime survival.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04", body: "The strategic reading: Beijing prefers Iran <em>weakened but not defeated</em>. A collapsed Iran creates regional chaos China cannot manage; a strong Iran could act autonomously in ways that damage PRC regional interests. The calibration is fine-grained: enough support to prevent collapse, not so much as to enable adventurism.", citations: [{ src: "MERICS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "CNN reads Chinese support as strategic commitment; MERICS reads it as tactical calibration; ISPI positions between.",
        sources: [ {name:"CNN",passages:11},{name:"MERICS",passages:9},{name:"CSIS",passages:8},{name:"Reuters",passages:6},{name:"ISPI",passages:4} ],
        topArcs: [
          { pair: "USA ↔ PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "USA ↔ IRN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "PRC ↔ IRN", pol: "aligned", w: 4.2, vol: "H" },
          { pair: "PRC ↔ RUS", pol: "aligned", w: 4.1, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:38"
      },
      dtReport: null
    }

  }

};
