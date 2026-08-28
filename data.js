// GeoIntel Mockup -- Phase 2 revised
// Three natural-framing scenarios, each with 2 follow-ups, all news-based (Aug 2026)

window.GEODATA = {

  dossiers: [
    { id: "global", name: "Global overview" },
    { id: "ukraine", name: "Ukraine / Russia / NATO" },
    { id: "taiwan", name: "Taiwan Strait / Chip supply chain" },
    { id: "iran", name: "Iran post-Epic Fury" }
  ],

  // Keyword patterns for input matching
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

  // Which follow-ups are valid after which parent scenario
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
          { s: "EU", t: "UKR", w: 4.2, vol: "M", pol: "aligned" },
          { s: "DEU", t: "UKR", w: 3.9, vol: "M", pol: "aligned" },
          { s: "POL", t: "UKR", w: 3.7, vol: "L", pol: "aligned" },
          { s: "USA", t: "EU", w: 4.0, vol: "M", pol: "complex" },
          { s: "RUS", t: "EU", w: 3.8, vol: "H", pol: "hostile" },
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
        thesis: "The dominant read across sources is that Ukraine's ability to deny Russian breakthroughs is <em>under increasing strain</em>. The 2025 US supplemental cycle produced a decision to reduce support that Europe has struggled to offset. The modal projection is not defeat -- it is a <em>compressed defensive posture</em> that preserves core territory while ceding tempo. The two conditions that would shift this reading materially are the German 2027 budget outcome and the Aster/SAMP-T production ramp that could substitute US Patriot dependence.",
        evidence: [
          { n: "01",
            body: "Ukraine's dependence on US-made Patriot systems for long- and medium-range air defence remains the single tightest structural constraint. European long-range SAM production (SAMP/T, Aster missiles) is ramping but the first improved variants only arrive in 2026 with additional units over two years. This creates a <em>capability window</em> where Ukraine is exposed even if political will holds.",
            citations: [{ src: "IISS", date: "Apr 2026", emphasis: true }, { src: "ECFR", date: "Jul 2026" }] },
          { n: "02",
            body: "Recruitment problems are only partly addressed. The manpower reforms of 2024-2025 produced adjustments but not resolution. Under baseline projection, unit rotation stress continues to grow through Q1 2027, forcing operational choices between holding lines and preserving forces for later phases.",
            citations: [{ src: "IISS", date: "Apr 2026" }, { src: "CSIS", date: "Jun 2026" }] },
          { n: "03",
            body: "European support has accelerated on artillery, ammunition and howitzer supply -- but the pace of European co-financing depends on member state budget cycles. Germany's 2027 budget is the single largest exogenous variable: pressure from domestic priorities is real and the coalition politics are fragile. A material reduction in German commitment would compress the EU envelope more than any single US decision.",
            citations: [{ src: "Bruegel", date: "Aug 2026" }, { src: "ECFR", date: "Aug 2026", emphasis: true }] },
          { n: "04",
            body: "On the Russian side, the corpus reads Moscow as calibrated to <em>outlast</em> rather than <em>outfight</em>. Continued Western interdiction of the shadow fleet is disrupting oil revenue at the margin, but the scale of Russian mobilization and the acceptance of casualty rates suggest the horizon of endurance is longer than the horizon of Western political patience.",
            citations: [{ src: "FP", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, the 12-month projection is <em>bounded pessimism</em>. Ukraine holds through H1 2027 under compressed posture. The critical monitoring variables are: German coalition budget signal (late Q4 2026 - Q1 2027), Aster production announcements, and any political catalyst in the US that could either accelerate the drawdown or reverse it.",
        divergence: "IISS reads the operational buffer as thicker than ECFR; both agree on the 2027 timing pivot.",
        sources: [ {name:"ECFR",passages:13},{name:"IISS",passages:11},{name:"CSIS",passages:10},{name:"Bruegel",passages:9},{name:"FP",passages:8},{name:"ISPI",passages:7} ],
        topArcs: [
          { pair: "RUS ↔ UKR", pol: "hostile", w: 4.8, vol: "H" },
          { pair: "EU ↔ UKR", pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA ↔ EU", pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU ↔ UKR", pol: "aligned", w: 3.9, vol: "M" },
          { pair: "RUS ↔ EU", pol: "hostile", w: 3.8, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "The modal path is compressed defense -- but the tail toward negotiated freeze is not thin.",
        subtitle: "A 12-month projection of the Ukraine dossier across 4 scenarios, informed by current support architecture and battlefield dynamics.",
        thesis: "The Deep-Think distribution separates into <em>two macro-phases</em>. Through H1 2027 (modal 44%) Ukraine holds current lines under a compressed defensive posture, absorbing US reduction through European incremental scaling and existing stockpiles. Starting H2 2027 the distribution widens: three tail scenarios (freeze, structural withdrawal, EU-only architecture) collectively reach 56%. The pivot is not military -- it is <em>budgetary and political</em>.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 16, ci: "12-20%", pol: "blue",
            body: "<em>Support recovers.</em> A political catalyst (US supplemental resumption, EU joint borrowing) reverses the downward trend. Aster production accelerates. Ukraine regains initiative in H2 2027. Requires a specific trigger -- none currently visible in the corpus." },
          { code: "S2", tag: "MODAL", label: "S2", pct: 44, ci: "38-51%", pol: "amber",
            body: "<em>Compressed defense holds.</em> Ukraine adapts to reduced envelope by narrowing operational scope, prioritizing critical infrastructure, rationing munitions. Line of contact moves marginally. Territory loss limited. Recovery of initiative postponed to 2028. This is the modal reading." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 25, ci: "20-31%", pol: "red",
            body: "<em>Negotiated freeze.</em> The combination of reduced envelope, battlefield fatigue and German budget stress creates political space for a Korea-style armistice framework. Codifies current line of contact. Russia gains time, Ukraine loses claim to reversal. Not a defeat, but a strategic loss." },
          { code: "S4", tag: "UNSTABLE", label: "S4", pct: 15, ci: "10-19%", pol: "dim-amber",
            body: "<em>EU-only architecture.</em> A political catalyst (US election, EU crisis) accelerates reduction into a phase where support becomes symbolic on the US side. EU scales but insufficient without US air defense. Ukraine's envelope collapses in Q3-Q4 2027." }
        ],
        latticeCaption: "Each terminal is a support-architecture configuration at Q4 2027; the modal band (compressed defense) concentrates most weight, but S3 negotiated-freeze is persistent across seeds where German budget signals turn negative.",
        sensitivity: "The distribution is most sensitive to the <em>German 2027 budget outcome</em>. A material reduction moves S3 from 25% to 37%. Second-most sensitive is <em>US supplemental status in Q1-Q2 2027</em>: a passage would move S1 to 27%; a delay moves S4 to 24%. The third lever is <em>Aster/SAMP-T production timing</em>.",
        implication: "For the analyst, the two variables to monitor with the highest priority are the <em>German coalition budget signal</em> and the <em>US Q1-Q2 supplemental status</em>. These are the two catalysts that decide whether the projection lands in the modal compressed-defense scenario or shifts to the freeze right-tail.",
        robustness: 3.5, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 restart seeds (max delta 5pp). Confidence limited by dependence on political catalysts across three polities (US, DEU, EU-level).",
        drivingArcs: [
          { pair: "USA ↔ UKR", desc: "Pivot: supplemental cycle", pol: "amber" },
          { pair: "DEU ↔ EU", desc: "Driver: budget stress", pol: "amber" },
          { pair: "EU ↔ UKR", desc: "Anchor: multi-annual envelope", pol: "green" },
          { pair: "RUS ↔ UKR", desc: "Frame: attrition dynamic", pol: "red" }
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
          narrative: "The modal trajectory (S2) unfolds as follows across the 12-month horizon. In Q4 2026, Russian tempo continues on Pokrovsk and Kupiansk axes with marginal territorial gains but no breakthrough. Ukrainian air defense stress rises as Patriot interceptor stockpiles thin. First SAMP/T-NG unit becomes operational in Q1 2027 but insufficient to offset degradation. German budget negotiation begins in December 2026 with defense envelope under pressure from Bundestag opposition. EU joint envelope holds nominally but member state disbursement rhythm slows. Aster production reaches nominal rate but backlog persists. By Q2 2027, Ukrainian operational posture has visibly narrowed: offensive operations are suspended; defensive lines consolidate. Casualties on both sides stabilize at attrition rates. Political space opens for freeze discussions (S3 branch begins to gain probability weight). By Q3 2027, the choice architecture is between (a) EU-level scaling of joint procurement -- technically feasible but politically unprecedented -- or (b) freeze framework mediated by a third party (Turkey, Gulf state). Neither trajectory is decisive by Q4 2027; the horizon closes with the graph in a new equilibrium where Ukraine holds sovereignty on ~78% of pre-2022 territory but has no realistic reversal path.",
          keyMoves: [
            "Q4 2026: Russia intensifies Pokrovsk axis; UKR air defense stress rises.",
            "Q1 2027: First SAMP/T-NG operational; German budget crunch begins.",
            "Q2 2027: Ukrainian posture narrows; freeze discussions emerge.",
            "Q3 2027: Choice architecture crystallizes (EU scale-up vs freeze).",
            "Q4 2027: New equilibrium; no decisive resolution."
          ]
        }
      }
    },

    "ukraine-fu-a": {
      question: "What role does the German 2027 budget play in this projection?",
      dossier: "Ukraine / Russia / NATO",
      dossierId: "ukraine",
      parent: "ukraine-main",
      subgraph: {
        focus: ["DEU", "EU", "UKR", "USA"],
        peripheral: ["FRA", "POL"],
        arcs: [
          { s: "DEU", t: "UKR", w: 3.9, vol: "H", pol: "aligned" },
          { s: "DEU", t: "EU", w: 4.5, vol: "M", pol: "aligned" },
          { s: "EU", t: "UKR", w: 4.2, vol: "M", pol: "aligned" },
          { s: "USA", t: "EU", w: 4.0, vol: "M", pol: "complex" }
        ],
        actorCount: 6, arcCount: 4, passageCount: 34, sourceCount: 4
      },
      evidenceStrength: 3.8, evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph refined: 6 actors, 4 arcs",
        "Corpus retrieval: 34 passages, 4 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The German 2027 budget is the single largest exogenous lever on the Ukraine trajectory.",
        subtitle: "A focused reading of Germany's coalition budget stress and its downstream effect on the EU support envelope.",
        thesis: "The German 2027 budget is <em>disproportionately consequential</em> because Germany is both the second-largest bilateral donor and the political anchor of the EU envelope. A material reduction in the German defense commitment would signal to other member states that scaling down is politically acceptable, triggering a coordination failure at the EU level. The corpus reads the budget process as a <em>signaling event</em>, not just a resource event.",
        evidence: [
          { n: "01",
            body: "Germany's 2027 defense envelope is under pressure from three simultaneous domestic priorities: pension reform, infrastructure investment, and the debt brake (Schuldenbremse) constraint. Coalition partners disagree on which lever to move first. The Ukraine allocation sits inside the defense envelope and is <em>protected but not immunized</em>.",
            citations: [{ src: "Bruegel", date: "Aug 2026", emphasis: true }, { src: "ECFR", date: "Aug 2026" }] },
          { n: "02",
            body: "The historical pattern since 2024 has been for Germany to announce ambitious multi-year commitments, then rebalance them quietly during budget execution. A repeat of this pattern in 2027 would preserve headline numbers while eroding the actual disbursement trajectory. The corpus flags this as the modal risk, not headline reduction.",
            citations: [{ src: "ECFR", date: "Jul 2026" }] },
          { n: "03",
            body: "Signaling effect: if Germany reduces materially, France's political turbulence makes an offset unlikely, and smaller EU donors will follow the German lead. This is not additive politics -- the DEU signal is <em>coordinating</em> for the rest of the EU. Poland's operational role continues but does not compensate for the financial component.",
            citations: [{ src: "Bruegel", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        implication: "The German 2027 budget process is the <em>single most consequential exogenous event</em> in the 12-month Ukraine projection. Monitor the coalition negotiation cycle (typically November-December), the Bundestag committee stage (typically January-February), and the disbursement rhythm through Q2 2027. Any language about 'rebalancing' or 'reprioritizing' the Ukraine envelope should be treated as a leading indicator, not a routine budget dispatch.",
        divergence: "Bruegel weights the signaling channel more heavily than ECFR, which sees the disbursement rhythm as more consequential.",
        sources: [ {name:"Bruegel",passages:11},{name:"ECFR",passages:9},{name:"ISPI",passages:8},{name:"FP",passages:6} ],
        topArcs: [
          { pair: "DEU ↔ EU", pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU ↔ UKR", pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA ↔ EU", pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU ↔ UKR", pol: "aligned", w: 3.9, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:34"
      },
      dtReport: null
    },

    "ukraine-fu-b": {
      question: "How is Russia's hybrid warfare against the EU evolving, and can Europe coordinate a response?",
      dossier: "Ukraine / Russia / NATO",
      dossierId: "ukraine",
      parent: "ukraine-main",
      subgraph: {
        focus: ["RUS", "EU", "DEU", "POL", "GBR"],
        peripheral: ["FIN", "EST", "FRA"],
        arcs: [
          { s: "RUS", t: "EU", w: 4.1, vol: "H", pol: "hostile" },
          { s: "RUS", t: "DEU", w: 3.7, vol: "H", pol: "hostile" },
          { s: "RUS", t: "POL", w: 3.8, vol: "H", pol: "hostile" },
          { s: "EU", t: "DEU", w: 4.5, vol: "M", pol: "aligned" },
          { s: "EU", t: "POL", w: 3.9, vol: "L", pol: "aligned" }
        ],
        actorCount: 8, arcCount: 5, passageCount: 42, sourceCount: 5
      },
      evidenceStrength: 3.6, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: [
        "Subgraph refined: 8 actors, 5 arcs",
        "Corpus retrieval: 42 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "Russia's hybrid campaign has scaled faster than Europe's coordinated response -- the gap is the story.",
        subtitle: "A focused reading of hybrid escalation and the EU coordination deficit.",
        thesis: "Russian hybrid activity against EU member states -- cable sabotage, airspace incursions, disinformation, arson attacks on logistics chains, GPS jamming -- has moved from episodic to <em>sustained pressure</em> over 2025-2026. The EU response remains fragmented across national security services, with limited attribution sharing and no unified retaliation doctrine. The corpus reads this asymmetry as a <em>growing strategic liability</em> that Russia is deliberately exploiting.",
        evidence: [
          { n: "01",
            body: "The pattern of undersea cable and pipeline incidents in the Baltic since 2024 has continued through 2026 with attribution now consistently pointing to Russian shadow fleet and state proxies. Response has been national and slow: no EU-level joint attribution mechanism has materialized despite repeated proposals.",
            citations: [{ src: "ECFR", date: "Jul 2026", emphasis: true }, { src: "IISS", date: "Aug 2026" }] },
          { n: "02",
            body: "Airspace incursions -- drone activity over sensitive infrastructure in Germany, Poland, the Baltic states -- have moved from probing to routine. National responses vary from restrained to aggressive. The lack of a unified escalation ladder is itself a signal to Moscow: <em>the seams are exploitable</em>.",
            citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03",
            body: "Disinformation operations targeting European elections have adapted after platform enforcement improvements. Current campaigns focus on defense-industrial policy debates (armament budgets, conscription, NATO tripwire posture) with clear evidence of coordinated inauthentic behavior across Telegram, X, and TikTok. Attribution is technically feasible but politically constrained.",
            citations: [{ src: "ECFR", date: "Jun 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04",
            body: "The coordination deficit is structural. EU treaties give member states primary competence on internal security and intelligence sharing. Attempts to create an EU-level hybrid response mechanism (Hybrid CoE Helsinki, EEAS StratCom units) have produced analysis but not enforcement authority. Without treaty change or a crisis triggering emergency competence expansion, the deficit persists.",
            citations: [{ src: "Bruegel", date: "Jul 2026" }] }
        ],
        implication: "The hybrid dimension is the <em>underweighted vector</em> in the Ukraine dossier. It creates continuous cost on the EU without reaching the threshold that would force a coordinated response. Monitor: (a) any incident with clear kinetic effect on EU civilian population that could trigger political consolidation, (b) national initiatives (Poland, Nordics) that could form a coalition-of-the-willing outside the EU frame, (c) any US signal on Article 5 posture that would either reinforce or undermine the deterrent.",
        divergence: "ECFR reads the coordination deficit as improvable within existing treaties; IISS sees it as requiring a crisis trigger to move.",
        sources: [ {name:"ECFR",passages:12},{name:"IISS",passages:10},{name:"CSIS",passages:9},{name:"ISPI",passages:7},{name:"Bruegel",passages:4} ],
        topArcs: [
          { pair: "RUS ↔ EU", pol: "hostile", w: 4.1, vol: "H" },
          { pair: "EU ↔ DEU", pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU ↔ POL", pol: "aligned", w: 3.9, vol: "L" },
          { pair: "RUS ↔ POL", pol: "hostile", w: 3.8, vol: "H" },
          { pair: "RUS ↔ DEU", pol: "hostile", w: 3.7, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:38"
      },
      dtReport: null
    },

    "taiwan-main": {
      question: "When will China attack Taiwan, and what conditions must materialize first?",
      dossier: "Taiwan Strait / Chip supply chain",
      dossierId: "taiwan",
      parent: null,
      subgraph: {
        focus: ["PRC", "TWN", "USA", "JPN", "PHL"],
        peripheral: ["KOR", "AUS"],
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
      thinkingSteps: [
        "Subgraph resolved: 7 actors, 6 arcs",
        "Corpus retrieval: 47 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The 2027 window is real but the modal path is blockade, not amphibious assault -- the precondition set is specific.",
        subtitle: "A positioned reading of the timing question, informed by PLA doctrine, exercise patterns, and current signals.",
        thesis: "The consensus read is that <em>2027 marks the earliest window of full PLA operational readiness</em>, not the trigger date. Xi has set the PLA's modernization goal at 2027 and US officials have repeatedly cited this as the preparation horizon. But <em>capability is a necessary, not sufficient</em>, condition. The trigger set is narrower: a specific Taiwanese political event (declaration of independence, US-Taiwan defense treaty), a PRC internal legitimacy crisis, or a US crisis of attention (major war elsewhere). Under baseline dynamics -- none of the triggers active -- the modal path is <em>continued escalation of blockade rehearsal and gray-zone pressure</em>, not kinetic assault.",
        evidence: [
          { n: "01",
            body: "The Justice Mission 2025 drills (December 2025) rehearsed a <em>full maritime blockade</em>, not amphibious assault. This is a doctrinal signal: PLA planning currently prioritizes economic strangulation over invasion. A blockade is politically ambiguous, technically achievable, and reversible. An assault is none of these.",
            citations: [{ src: "The Diplomat", date: "Jan 2026", emphasis: true }, { src: "CSIS", date: "Feb 2026" }] },
          { n: "02",
            body: "PLA activity has normalized inside Taiwan's contiguous zone (12nm). This is a boundary erosion, not a boundary breach. It lowers thresholds for miscalculation without requiring a strategic decision to escalate. The corpus reads this as <em>salami slicing at high tempo</em>: each individual incursion is manageable, the cumulative effect is a redefinition of the operational baseline.",
            citations: [{ src: "The Diplomat", date: "Jan 2026" }, { src: "MERICS", date: "May 2026" }] },
          { n: "03",
            body: "The precondition set for kinetic action includes: (a) a Taiwanese political move that Beijing frames as crossing the red line, (b) a US posture change that Beijing perceives as opening a window, (c) an internal Chinese economic or political crisis that requires external distraction. Currently, none of these conditions is present. The Trump administration's Middle East focus creates <em>marginal attention diversion</em> but not window-opening.",
            citations: [{ src: "CSIS", date: "Jun 2026" }, { src: "ISPI", date: "Jul 2026" }] },
          { n: "04",
            body: "Japan's defense white paper (2026) explicitly names the balance as tilting rapidly in China's favor and lists Taiwan Strait stability as a Japanese interest. This declaration hardens the trilateral USA-JPN-TWN configuration and raises the political cost of any Beijing move. It does not prevent a decision, but it prices it higher.",
            citations: [{ src: "Nikkei / Japan MoD", date: "Aug 2026" }, { src: "MERICS", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, the honest read is: <em>attack is not the modal path in the 12-month horizon</em>, but the window opens materially from 2027. The precondition set is narrow and specific. Monitor: Taiwan political calendar (2028 election cycle already visible), US arms transfer categorization language, PLA exercise pattern deviation from calendar, TSMC operational continuity. The single strongest early-warning signal is a shift from blockade rehearsal to amphibious rehearsal at scale.",
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
        thesis: "The Deep-Think distribution places the modal weight (46%) on <em>continued blockade rehearsal with normalized contiguous-zone activity</em> through 2027. The right tail is not thin: 22% probability of a limited kinetic event (blockade enforcement, contested incident) within 24 months, conditional on one of three trigger sets activating. The 2027 date is a <em>capability inflection</em>, not a scheduled event.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 12, ci: "8-16%", pol: "blue",
            body: "<em>Cross-strait detente window.</em> A new political configuration in Taipei (2028 election) opens dialogue space. PRC reduces exercise tempo in exchange for softer US arms transfer language. Requires a specific electoral outcome and a Trump administration recalibration; neither is currently visible." },
          { code: "S2", tag: "MODAL", label: "S2", pct: 46, ci: "40-53%", pol: "amber",
            body: "<em>Sustained blockade rehearsal.</em> PLA maintains Justice Mission-scale drills at 2-3 per year cadence. Contiguous zone activity normalizes further. USA-JPN-TWN reinforcement continues incrementally. No kinetic threshold crossed. Modal reading through 2027-early 2028." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 22, ci: "17-27%", pol: "red",
            body: "<em>Limited kinetic incident.</em> A gray-zone activity crosses threshold (aerial intercept collision, maritime enforcement of exclusion zone, cyber event with visible effect). Response depends on trilateral coordination speed. Could de-escalate through backchannel or trigger blockade formalization." },
          { code: "S4", tag: "UNSTABLE", label: "S4", pct: 20, ci: "15-25%", pol: "dim-amber",
            body: "<em>Trigger-set activation.</em> One of the three trigger sets activates in the horizon: Taiwan declaration, US-Taiwan formal defense treaty, or PRC internal crisis requiring distraction. Under this scenario the kinetic option becomes probable. Timing depends on the trigger; the corpus reads Q4 2027-H1 2028 as the concentrated window." }
        ],
        latticeCaption: "Each terminal is a Strait configuration at 24-month horizon; modal band (blockade rehearsal) concentrates most weight. Right tail (kinetic incident, trigger activation) is persistent across seeds where PLA exercise pattern deviates from calendar.",
        sensitivity: "The distribution is most sensitive to <em>PLA exercise pattern deviation</em>: a shift from calendar-coincident to off-calendar large exercises would move S3+S4 collectively from 42% to 58%. Second-most sensitive is <em>Taiwan 2028 election dynamics</em>: a DPP victory framed as pro-independence moves S4 to 30%. Third is <em>US arms transfer categorization language</em>: a shift to explicitly offensive framing moves S1 to 5% and S4 to 26%.",
        implication: "For the analyst, the honest 24-month monitoring set is: PLA exercise cadence and off-calendar activity, Taiwan 2028 electoral trajectory, US arms transfer language, TSMC operational continuity, and any Chinese economic indicator that could pressure Beijing toward external distraction.",
        robustness: 3.7, robustnessCaption: "HIGH",
        robustnessNote: "Distribution stable across 5 restart seeds. Confidence high on the modal path; tail probabilities have wider intervals due to trigger dependence.",
        drivingArcs: [
          { pair: "PRC ↔ TWN", desc: "Frame: PLA tempo", pol: "red" },
          { pair: "USA ↔ TWN", desc: "Anchor: reinforcement cadence", pol: "green" },
          { pair: "USA ↔ JPN", desc: "Deterrent: trilateral tightness", pol: "green" },
          { pair: "USA ↔ PRC", desc: "Frame: managed rivalry", pol: "amber" }
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
          narrative: "The modal trajectory (S2) unfolds as follows across the 24-month horizon. Through Q4 2026 and 2027, the PLA maintains 2-3 large-scale exercises per year at Justice Mission scale, with continued normalization of contiguous-zone activity. Each individual incursion is managed; the cumulative effect is that the operational baseline of PLA activity within 12nm becomes the new normal. The US arms transfer cycle to Taiwan continues at programmatic tempo, covering coastal defense, munitions replenishment, and cyber capability. Japan's defense posture formalization proceeds through 2027 white paper cycle; the JPN-TWN language moves from declared-informal to declared-substantive. Philippines EDCA expansion continues; Korea's role remains ambiguous but supportive. Through early 2028, the Taiwan election dynamics dominate the political calendar; DPP-KMT contest is close and framing of cross-strait relations is central. Beijing's tempo is calibrated to the electoral cycle: signaling without provoking. In H2 2028 the horizon closes with the Strait configuration essentially preserved but with all baseline metrics (PLA activity, US commitment, JPN posture) at levels that would have been considered escalatory in 2024. The new normal is stable but stiffer.",
          keyMoves: [
            "Q4 2026: PLA exercise at Justice Mission scale.",
            "Q1-Q2 2027: US arms package emphasizing prolonged conflict capability.",
            "Q3 2027: Japan 2027 defense white paper formalization.",
            "Q4 2027: PLA capability inflection reached.",
            "H1 2028: Taiwan electoral cycle; Beijing signaling calibrated.",
            "H2 2028: New equilibrium; blockade rehearsal normalized."
          ]
        }
      }
    },

    "taiwan-fu-a": {
      question: "What role does the semiconductor supply chain play in Beijing's calculus?",
      dossier: "Taiwan Strait / Chip supply chain",
      dossierId: "taiwan",
      parent: "taiwan-main",
      subgraph: {
        focus: ["PRC", "TWN", "USA", "TSMC", "NLD"],
        peripheral: ["KOR", "JPN"],
        arcs: [
          { s: "PRC", t: "TWN", w: 4.7, vol: "H", pol: "hostile" },
          { s: "USA", t: "TWN", w: 4.1, vol: "M", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "PRC", t: "TSMC", w: 4.3, vol: "M", pol: "complex" },
          { s: "USA", t: "TSMC", w: 4.4, vol: "M", pol: "aligned" },
          { s: "USA", t: "NLD", w: 4.0, vol: "L", pol: "aligned" }
        ],
        actorCount: 7, arcCount: 6, passageCount: 39, sourceCount: 5
      },
      evidenceStrength: 4.2, evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph refined: 7 actors, 6 arcs",
        "Corpus retrieval: 39 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "TSMC is Beijing's most valuable hostage -- and also its most binding constraint.",
        subtitle: "A focused reading of the semiconductor dimension in the Taiwan calculus.",
        thesis: "The semiconductor supply chain functions as a <em>two-way constraint</em>. For Beijing, controlling TSMC would be the strategic prize of the century -- but destroying it in a kinetic action would be self-defeating: the fab is fragile, the tacit knowledge is embedded in people who would leave, and the export controls regime would tighten globally. For the US, the ongoing dispersion (TSMC Arizona, Kumamoto) reduces the strategic value of TWN as a chokepoint but does not eliminate the concentration risk. The corpus reads this as <em>the strongest single argument against a fast kinetic timeline</em>.",
        evidence: [
          { n: "01",
            body: "TSMC leading-node capacity is not just concentrated in Taiwan -- it is concentrated in <em>a small number of fabs</em> whose operational continuity depends on daily supply of ultra-pure gases, EUV consumables, and thousands of specialist engineers. Any kinetic event that disrupts power, cooling, or personnel movement for more than days translates into weeks or months of production loss. This is <em>not recoverable by seizure</em>.",
            citations: [{ src: "CSIS", date: "May 2026", emphasis: true }, { src: "Bruegel", date: "Jun 2026" }] },
          { n: "02",
            body: "Beijing's semiconductor self-sufficiency push (Big Fund III, mature-node dominance strategy, HBM breakthrough attempts) has produced real progress at mature nodes but remains structurally blocked at leading nodes without EUV access. The US-Netherlands-Japan trilateral on ASML export restrictions is holding. This <em>lengthens the horizon</em> during which Taiwan-based capacity is strategically decisive.",
            citations: [{ src: "MERICS", date: "Jul 2026" }, { src: "Bruegel", date: "Aug 2026" }] },
          { n: "03",
            body: "The dispersion strategy (TSMC Arizona Phase 3, Kumamoto Phase 2, Dresden) reduces but does not eliminate the concentration. By 2028 estimated ~15-20% of leading-node capacity will be outside Taiwan. This is meaningful but leaves the majority still on-island. The US bet is that the trend continues; Beijing's bet is that it does not accelerate.",
            citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, semiconductor logic <em>argues against a fast kinetic timeline</em> and toward a coercive-but-not-destructive posture (blockade, gray zone, political pressure). Monitor: TSMC dispersion pace announcements, Big Fund III performance metrics, any Chinese breakthrough language on EUV-adjacent capability, and any US export control adjustment that could either tighten or loosen the pressure valve.",
        divergence: "CSIS reads the semiconductor constraint as decisive against kinetic action; MERICS reads it as slowing but not preventing.",
        sources: [ {name:"CSIS",passages:12},{name:"Bruegel",passages:9},{name:"MERICS",passages:8},{name:"ISPI",passages:6},{name:"FP",passages:4} ],
        topArcs: [
          { pair: "USA ↔ PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "PRC ↔ TWN", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA ↔ TSMC", pol: "aligned", w: 4.4, vol: "M" },
          { pair: "PRC ↔ TSMC", pol: "complex", w: 4.3, vol: "M" },
          { pair: "USA ↔ NLD", pol: "aligned", w: 4.0, vol: "L" }
        ],
        cost: "$0.02", composedAt: "10:34"
      },
      dtReport: null
    },

    "taiwan-fu-b": {
      question: "How does Japan's defense posture change the risk window?",
      dossier: "Taiwan Strait / Chip supply chain",
      dossierId: "taiwan",
      parent: "taiwan-main",
      subgraph: {
        focus: ["JPN", "TWN", "USA", "PRC"],
        peripheral: ["KOR", "PHL", "AUS"],
        arcs: [
          { s: "JPN", t: "TWN", w: 3.8, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.3, vol: "L", pol: "aligned" },
          { s: "PRC", t: "JPN", w: 3.7, vol: "M", pol: "complex" },
          { s: "PRC", t: "TWN", w: 4.7, vol: "H", pol: "hostile" }
        ],
        actorCount: 7, arcCount: 4, passageCount: 33, sourceCount: 4
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph refined: 7 actors, 4 arcs",
        "Corpus retrieval: 33 passages, 4 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "Japan has moved from tacit to substantive on Taiwan -- the risk window narrows in one direction, widens in another.",
        subtitle: "A focused reading of Japan's evolving posture and its effect on the Strait risk profile.",
        thesis: "Japan's 2026 defense white paper explicitly named Taiwan Strait stability as a Japanese interest -- the culmination of a decade of gradual posture hardening. This change is <em>double-edged</em>: it strengthens deterrent by making the trilateral USA-JPN-TWN configuration real, but it also raises the political cost of ambiguity in a crisis, potentially removing off-ramps that ambiguity used to provide. The net effect on the risk window is contingent on how PRC reads the signal.",
        evidence: [
          { n: "01",
            body: "Japan's 2026 defense white paper stated that the military balance between China and Taiwan is <em>rapidly tilting in China's favor</em>, and named Taiwan Strait stability as a Japanese security interest. This is a substantive escalation from prior white papers that treated Taiwan as a regional concern rather than a direct security interest.",
            citations: [{ src: "Japan MoD white paper", date: "Jul 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02",
            body: "Operational-level integration between US and Japanese forces on Taiwan contingencies has accelerated. Joint exercises now include explicit Taiwan Strait scenarios (previously euphemistic). Basing arrangements in Nansei island chain support forward positioning. The trilateral configuration is real, not rhetorical.",
            citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03",
            body: "Beijing's response has been calibrated: no dramatic escalation, but consistent economic and diplomatic pressure on Japan. The PRC read appears to be that Japan cannot be deterred from posture hardening but can be raised in cost. This is a slow-burn friction, not a rapid escalation.",
            citations: [{ src: "MERICS", date: "Aug 2026" }] }
        ],
        implication: "Japan's posture change <em>narrows the risk window for opportunistic action</em> (Beijing cannot count on Japanese ambiguity in a crisis) but <em>widens the risk window for miscalculation</em> (removed ambiguity means less flexibility for off-ramps). Monitor: Japan-Taiwan direct security dialogue frequency, Japanese basing decisions in Nansei chain, and PRC economic countermeasures against Japan.",
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
      dossier: "Iran post-Epic Fury",
      dossierId: "iran",
      parent: null,
      subgraph: {
        focus: ["USA", "IRN", "ISR", "PRC", "OMN", "KSA"],
        peripheral: ["TUR", "IRQ", "YEM"],
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
      thinkingSteps: [
        "Subgraph resolved: 9 actors, 7 arcs",
        "Corpus retrieval: 51 passages, 6 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "US disengagement is a counterfactual, not a trajectory -- but the counterfactual reshapes the whole subgraph.",
        subtitle: "A positioned reading of a hypothetical US pullback from the Middle East after Epic Fury and the post-cease-fire economic phase.",
        thesis: "Actual US posture in August 2026 is not disengagement -- it is a <em>shift from kinetic to economic leverage</em> (sanctions, secondary sanctions on Iran's trading partners, Hormuz pressure). A genuine disengagement scenario would be a discontinuous move away from both. In that counterfactual, three effects dominate: Israel's exposure rises sharply, China's role as economic lifeline for Iran becomes decisive, and the Gulf mediators (Oman, Saudi Arabia) reposition toward hedging rather than alignment. The subgraph reconfigures around a <em>PRC-IRN-ISR triangle</em> with USA as an offshore observer.",
        evidence: [
          { n: "01",
            body: "Actual US posture is dual: naval rotation continues (USS Abraham Lincoln returning, USS George Washington arriving), and the economic operation has escalated to sanctions on countries buying Iranian oil (Bessent's 'economic D-Day'). This is <em>escalation via a different instrument</em>, not disengagement. The counterfactual requires reversal of both trajectories.",
            citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "Reuters", date: "Aug 20 2026" }] },
          { n: "02",
            body: "Under disengagement, Israel's strategic posture becomes the primary regional variable. Israel has capability but not capacity for sustained regional deterrence without US backing. Two adaptations are plausible: (a) escalate independently to secure gains from Epic Fury, (b) seek explicit security guarantees from Gulf partners (Abraham Accords formalization at security level).",
            citations: [{ src: "FP", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03",
            body: "China has publicly defended its cooperation with Iran against US sanctions pressure. Under disengagement, this cooperation becomes a <em>strategic asset</em>: Iran gains oil buyer, financial channel, and a de facto political umbrella. The PRC-IRN arc, currently at weight 4.0, would move toward 4.5-4.8 range. This has second-order effects on the US-PRC dynamic globally.",
            citations: [{ src: "CNN", date: "Aug 25 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "04",
            body: "Gulf mediators are already hedging. The Iran-Oman shipping channel proposal for Hormuz is a signal that Muscat is positioning as a bridge rather than a US ally. Saudi Arabia's calculus becomes: manage Iran through direct dialogue if US is not the guarantor. Any US disengagement accelerates this repositioning.",
            citations: [{ src: "Press TV / regional", date: "Aug 2026" }, { src: "CSIS", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, the disengagement counterfactual is <em>a stress test of the regional architecture, not a realistic near-term projection</em>. It clarifies which actors would rise (China, Israel, Saudi-Iran direct diplomacy) and which would lose leverage (US allies without security guarantee, US economic pressure without military backing). Monitor as leading indicators: any US signal on force posture rotation cadence beyond routine, any Israeli explicit request for guarantees, and any Chinese scale-up of Iran-directed trade or infrastructure investment.",
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
        thesis: "The Deep-Think distribution under the disengagement counterfactual concentrates modal weight (41%) on a <em>PRC-anchored Iran scenario</em>: China becomes economic guarantor, Iran stabilizes internally, regional actors reposition toward direct dialogue. But the right tail is heavy (33% combined): Israeli unilateral escalation, Iranian nuclear breakout, or Gulf hedging producing new regional configurations. The modal path is not peaceful -- it is a redistribution of the pressure that the US previously absorbed.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 15, ci: "10-20%", pol: "blue",
            body: "<em>Multilateral stabilization.</em> A regional framework emerges (Iran-Saudi-Gulf) mediated by China, with Iran nuclear program constrained by PRC pressure in exchange for economic protection. Israel accepts frozen conflict. Requires PRC willingness to constrain Iran, currently marginal in the corpus." },
          { code: "S2", tag: "MODAL", label: "S2", pct: 41, ci: "35-48%", pol: "amber",
            body: "<em>PRC-anchored Iran, Israeli unilateral posture.</em> China becomes Iran's economic lifeline. Iran stabilizes internally, resumes limited nuclear program development. Israel operates with unilateral doctrine, occasional strikes without US coordination. Regional actors hedge. Modal path but unstable equilibrium." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 22, ci: "17-28%", pol: "red",
            body: "<em>Israeli escalation without US.</em> Israel judges the disengagement window as opportunity for decisive action against remaining Iranian capability. Strikes without US backing. Iranian response calibrated to PRC-Russian support. Escalation spirals in absence of US restraint on both parties." },
          { code: "S4", tag: "UNSTABLE", label: "S4", pct: 22, ci: "17-28%", pol: "dim-amber",
            body: "<em>Nuclear breakout attempt.</em> Iran reads disengagement as strategic window, accelerates program under PRC economic cover. Israel responds unilaterally. Gulf states seek own nuclear capability. Regional proliferation cascade. This is the tail that Epic Fury was designed to prevent." }
        ],
        latticeCaption: "Each terminal is a regional configuration at 12-month horizon under disengagement counterfactual; modal band (PRC-anchored) concentrates most weight but right tail is thick due to Israeli and Iranian agency.",
        sensitivity: "The distribution is most sensitive to <em>PRC willingness to constrain Iran</em>: high willingness moves S1 from 15% to 26% and shrinks S4 from 22% to 12%. Second-most sensitive is <em>Israeli threshold for unilateral action</em>: low threshold moves S3 from 22% to 33%. Third is <em>Gulf coordination</em>: high coordination moves S1 up and stabilizes distribution.",
        implication: "For the analyst, the disengagement counterfactual reveals that <em>the US-China relationship is the decisive variable</em>, not the US-Iran relationship. Under disengagement, PRC becomes the primary constraint on Iran (constructive or absent), and PRC-US relations on Iran become as important as PRC-US relations on Taiwan. Monitor: any PRC signal on Iran nuclear program stance, any Israeli explicit doctrine change, and any Gulf coordination signal.",
        robustness: 3.3, robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 restart seeds (max delta 7pp). Confidence limited because the counterfactual removes the largest constraining actor (US), amplifying dependence on other actors' choices.",
        drivingArcs: [
          { pair: "USA ↔ PRC", desc: "Meta-variable", pol: "amber" },
          { pair: "PRC ↔ IRN", desc: "Anchor: economic guarantor", pol: "green" },
          { pair: "IRN ↔ ISR", desc: "Driver: dyadic dynamic", pol: "red" },
          { pair: "USA ↔ ISR", desc: "Removed constraint", pol: "amber" }
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
          narrative: "The modal trajectory (S2) under the disengagement counterfactual unfolds as follows across the 12-month horizon. In Q4 2026, the US announces phased withdrawal of assets from Gulf Cooperation Council installations, reduces Fifth Fleet presence, and terminates the sanctions program in favor of a purely defensive posture. Beijing immediately signals economic backing for Iran through explicit oil purchase commitments and a formal payment mechanism outside the SWIFT system. Iran's internal politics stabilize: the post-Khamenei transition consolidates around a pragmatic faction that accepts PRC dependence in exchange for regime survival. Nuclear program development resumes at a controlled pace calibrated to avoid triggering Israeli unilateral response. Israel meanwhile enters a strategic recalibration: with US backing removed, its doctrine shifts toward preemption of any specific Iranian capability threshold rather than management of the overall relationship. Two strikes on Iranian sites occur in Q1-Q2 2027 without US coordination or public backing. Iranian response is calibrated: economic disruption via proxies rather than direct kinetic response, preserving the PRC-mediated stability. Gulf states hedge visibly: Saudi Arabia opens direct diplomatic channel with Tehran mediated by Oman; UAE positions between the sides; Qatar continues mediator role. By Q3 2027, the regional architecture has reconfigured around three poles (China-Iran, Israel-unilateral, Gulf-hedging) with the US as an offshore observer. This is not stable equilibrium -- it is a new configuration whose stability depends on daily choices by three independent actors.",
          keyMoves: [
            "Q4 2026: US phased withdrawal announced; sanctions program ended.",
            "Q1 2027: PRC-Iran formal economic architecture activated.",
            "Q1-Q2 2027: Israeli unilateral strikes on Iranian sites.",
            "Q2 2027: Iranian calibrated response via proxies.",
            "Q3 2027: Gulf hedging visible; Saudi-Iran direct channel opens.",
            "Q4 2027: New regional configuration; unstable equilibrium."
          ]
        }
      }
    },

    "iran-fu-a": {
      question: "How would Israel adapt if the US steps back from Middle East security?",
      dossier: "Iran post-Epic Fury",
      dossierId: "iran",
      parent: "iran-main",
      subgraph: {
        focus: ["ISR", "IRN", "USA", "KSA", "UAE"],
        peripheral: ["EGY", "JOR", "PSE"],
        arcs: [
          { s: "USA", t: "ISR", w: 4.5, vol: "H", pol: "aligned" },
          { s: "IRN", t: "ISR", w: 4.7, vol: "H", pol: "hostile" },
          { s: "ISR", t: "KSA", w: 3.5, vol: "M", pol: "complex" },
          { s: "ISR", t: "UAE", w: 3.8, vol: "L", pol: "aligned" }
        ],
        actorCount: 8, arcCount: 4, passageCount: 36, sourceCount: 5
      },
      evidenceStrength: 3.7, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: [
        "Subgraph refined: 8 actors, 4 arcs",
        "Corpus retrieval: 36 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "Israel would shift from managed rivalry to preemption doctrine -- with regional partnerships as insurance.",
        subtitle: "A focused reading of Israeli strategic adaptation under US disengagement.",
        thesis: "Under US disengagement, Israel's strategic posture would <em>compress from management to preemption</em>. The current doctrine treats Iran as a threat to be managed through periodic action combined with US-backed deterrence. Without US backing, the doctrine cannot sustain: the choice becomes preemption of specific capability thresholds or acceptance of Iranian gradual reconstitution. In parallel, Israel would formalize security-level cooperation with Gulf partners (Abraham Accords + security dimension) as insurance against isolation.",
        evidence: [
          { n: "01",
            body: "Israel has demonstrated capability for unilateral strikes but not for sustained regional posture. The Epic Fury operation was joint precisely because Israeli independent capacity for prolonged operations is limited (interceptor stockpiles, refueling logistics, political sustainability). Under disengagement, the doctrine adaptation is toward <em>shorter, sharper, more frequent</em> action.",
            citations: [{ src: "FP", date: "Aug 2026", emphasis: true }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "02",
            body: "Abraham Accords formalization at security level (not just diplomatic and economic) has been on the table since 2020 but has not proceeded due to Israeli-Palestinian dynamics and Saudi conditions. Under US disengagement, Israeli calculus on making concessions to unlock Saudi security cooperation would change materially. The corpus flags this as the most probable adaptation pathway.",
            citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "03",
            body: "The internal Israeli political dynamics matter: a preemption doctrine requires domestic consensus that current coalition arithmetic does not guarantee. A US disengagement announcement would likely trigger internal Israeli political realignment before doctrinal change is operational.",
            citations: [{ src: "ISPI", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, Israeli adaptation under disengagement is <em>a compressed timeline</em>: doctrinal change requires 6-12 months, coalition dynamics could accelerate or delay, and each Iranian capability announcement would test the emerging doctrine. Monitor: any explicit Israeli statement on independent doctrine, Saudi-Israel official meetings, and internal coalition realignment signals.",
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
      dossier: "Iran post-Epic Fury",
      dossierId: "iran",
      parent: "iran-main",
      subgraph: {
        focus: ["PRC", "IRN", "USA", "RUS"],
        peripheral: ["IND", "TUR", "PAK"],
        arcs: [
          { s: "PRC", t: "IRN", w: 4.2, vol: "H", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "USA", t: "IRN", w: 4.6, vol: "H", pol: "hostile" },
          { s: "PRC", t: "RUS", w: 4.1, vol: "M", pol: "aligned" }
        ],
        actorCount: 7, arcCount: 4, passageCount: 38, sourceCount: 5
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph refined: 7 actors, 4 arcs",
        "Corpus retrieval: 38 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "China's Iran lifeline is real but calibrated -- enough to keep Iran solvent, not enough to trigger direct US-PRC confrontation.",
        subtitle: "A focused reading of the PRC-IRN economic architecture under maximum US sanctions pressure.",
        thesis: "Beijing has publicly defended its cooperation with Iran against Bessent's 'economic D-Day' sanctions. The pattern shows <em>calibrated defiance</em>: China maintains Iranian oil purchases through opaque channels, provides financial services outside Western banking rails, and offers political cover in multilateral fora -- but avoids provocations that would force a direct US-PRC economic confrontation over Iran. This is Iran-support instrumentalized within the larger US-PRC rivalry, not Iran-support as an end in itself.",
        evidence: [
          { n: "01",
            body: "China's public statement (August 25, 2026) that US sanctions 'will only further intensify tensions' and that PRC-Iran cooperation 'should not be disrupted' is a signaling move. It commits Beijing rhetorically without specifying operational scope. This gives room to maintain existing channels while avoiding new escalatory commitments.",
            citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02",
            body: "The operational mechanism for PRC-IRN oil trade under sanctions has evolved: teapot refineries in China purchase Iranian crude via UAE and Malaysian intermediaries, with settlement in RMB. This channel is scale-limited but resilient to sanctions targeting third-country buyers because it operates below the threshold that would force US secondary sanctions on Chinese state-owned entities.",
            citations: [{ src: "Reuters", date: "Aug 2026" }, { src: "Bruegel", date: "Jul 2026" }] },
          { n: "03",
            body: "The financial architecture (CIPS cross-border payments, RMB clearing, gold-mediated settlement) has scaled sufficiently since 2020 that Iran can operate outside dollar-denominated flows for essential trade. This is not autarky -- Iran remains vulnerable to secondary effects -- but it is sufficient for regime survival.",
            citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04",
            body: "The strategic reading: Beijing prefers Iran <em>weakened but not defeated</em>. A collapsed Iran creates regional chaos China cannot manage; a strong Iran could act autonomously in ways that damage PRC regional interests. The calibration is fine-grained: enough support to prevent collapse, not so much as to enable adventurism.",
            citations: [{ src: "MERICS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        implication: "For the analyst, PRC-IRN dynamics are <em>a subset of PRC-USA dynamics</em>, not an independent variable. China's Iran policy will move with US-China overall trajectory (Taiwan tensions, chip war, trade). Monitor as leading indicators: PRC official language on Iran (rhetorical scale-up or scale-down), Chinese state-owned bank exposure to Iranian entities, and any US secondary sanctions actually targeting Chinese firms.",
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
