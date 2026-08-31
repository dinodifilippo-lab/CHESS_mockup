// GeoIntel Mockup -- Phase 2 revised v3
// Thesis in stile analitico (scenari) + Implications sistemiche

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
        thesis: "The conflict has settled into a war of attrition in which the operational tempo has slowed but the underlying dynamic continues to favour Russia at the margin. Ukrainian forces retain the ability to hold defensive lines across the eastern front, but recruitment shortfalls and the reduction in US assistance have narrowed their operational envelope. European deliveries of artillery, ammunition and howitzers have partially compensated for the American drawdown, yet Ukraine remains structurally dependent on US-made Patriot systems for medium- and long-range air defence. The first improved SAMP/T units will enter service in 2026, with additional systems following over the subsequent two years; until Aster missile production reaches sustained volume, the air defence gap will remain the single most exposed capability. Russian strategy over the period reflects a calculation of endurance rather than breakthrough. Moscow is prepared to accept high casualty rates and continued sanctions pressure, betting that Western political patience will erode faster than its own capacity to sustain operations. The interdiction of the shadow fleet is degrading oil revenue at the margin, but not at a scale that alters the timeline. Kyiv's manpower reforms have produced adjustments but not a resolution, and rotation stress on frontline units will intensify through the first quarter of 2027. Under these conditions the twelve-month projection points to a compressed defensive posture: core Ukrainian territory preserved, initiative ceded, and the recovery horizon pushed into 2028. The two variables capable of shifting this trajectory are the outcome of the German 2027 budget and any political catalyst in Washington that either accelerates the drawdown or reverses it.",
        implication: "The stabilisation of an attrition equilibrium produces a series of second-order effects across the European security architecture. The first is the gradual institutionalisation of a lower ceiling for Western military assistance. As monthly disbursements settle into a predictable but reduced pattern, allied capitals adjust their planning assumptions downward and defence-industrial procurement is calibrated to the new baseline rather than to the earlier surge levels. The consequence is that even a subsequent political decision to increase support would face a lag of six to twelve months before translating into deliverable capability. The second effect concerns the reconfiguration of European burden-sharing. Germany's fiscal constraints, France's political turbulence and the reduced US footprint force the Northern and Eastern member states to assume a proportionally larger share of the sustainment effort, altering the internal balance of influence within the EU on security matters. Poland, the Nordic and Baltic states acquire agenda-setting weight that they had not previously exercised. The third effect is the entrenchment of Russia's war economy. Sustained mobilisation over three years has restructured Russian industrial capacity around military output; a return to the pre-war economic model becomes increasingly costly and politically difficult. This raises the threshold at which Moscow could plausibly accept a negotiated settlement, and creates path-dependence toward continued confrontation even after the current phase ends. The fourth effect operates on the transatlantic relationship itself. Reduced US engagement in European security, sustained over multiple budget cycles, gradually redefines NATO from an integrated alliance toward a looser coalition in which American commitment is treated as conditional rather than structural. This shift is visible in force posture decisions, in exercise cadence, and in the language used at ministerial level.",
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
        thesis: "The simulation explored four trajectories on the Ukraine dossier over the twelve-month horizon.\n\nIn the modal scenario (44%), Ukraine absorbs the reduction in US assistance through a combination of incremental European scaling and the drawdown of existing air defence stockpiles. The line of contact moves marginally in Russia's favour but no operational breakthrough occurs. The first SAMP/T-NG unit becomes operational in the first quarter of 2027; production ramps but backlog persists. By mid-2027 Ukrainian posture has visibly narrowed: offensive operations are suspended, defensive positions consolidate, and munition use is rationed. The trajectory closes in a stable but degraded equilibrium.\n\nIn the second scenario (25%), the combination of a reduced assistance envelope, battlefield fatigue and German budget stress opens political space for a Korea-style armistice framework. Mediation is led by Turkey or a Gulf state and produces a formal freezing of the line of contact. Russia gains time and consolidates control over occupied territory; Ukraine loses the political claim to reversal but preserves sovereignty over the remainder.\n\nIn the third scenario (16%), a political catalyst -- resumption of the US supplemental, EU joint borrowing, or an acceleration of Aster production -- reverses the downward trend in support. Ukraine regains initiative in the second half of 2027. The trigger for this trajectory is not visible in the current corpus.\n\nIn the fourth scenario (15%), the reduction in US assistance accelerates into effective withdrawal. European scaling proves insufficient without the US air defence backbone. Ukrainian capacity collapses in the third or fourth quarter of 2027, forcing an unfavourable settlement or the loss of significant additional territory.",
        implication: "The persistence of the compressed-defence equilibrium produces effects that reshape European security beyond the Ukrainian theatre. The first effect is the crystallisation of a European defence-industrial complex that operates at a scale intermediate between the pre-2022 baseline and full war footing. Sustained procurement contracts to Rheinmetall, KNDS, MBDA and their smaller partners establish a permanent capacity that will remain in place regardless of how the war ends. This capacity generates its own political constituency and its own strategic logic, independent of the Ukrainian trajectory that created it. The second effect concerns the German fiscal architecture. Repeated stress on the defence envelope through successive budget cycles gradually erodes the debt-brake consensus, either through formal constitutional revision or through structural workarounds such as special funds and off-balance-sheet vehicles. The Schuldenbremse loses its status as a fixed parameter of German economic policy, with consequences that extend well beyond defence spending into the broader European fiscal debate. The third effect operates on the Russia-China alignment. Continued Russian dependence on Chinese industrial inputs, financial services and diplomatic cover deepens over the horizon and becomes structurally embedded in the Russian economy. The consequence is a reduction in Russian strategic autonomy that Moscow accepts as the price of continuing the war, and a corresponding increase in Chinese leverage over Russian conduct in third theatres. The fourth effect emerges within the European political landscape. The prolonged mobilisation of resources, the visibility of Ukrainian casualties in European media, and the fiscal trade-offs required to sustain assistance combine to strengthen political forces that argue for negotiated settlement, across both the traditional left and the nationalist right. This does not translate immediately into policy change but shifts the centre of gravity of European public opinion in ways that will constrain future governments regardless of their own preferences.",
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
        thesis: "Germany occupies two positions simultaneously in the European support architecture: it is the second-largest bilateral donor to Ukraine in absolute terms, and it is the political anchor around which the broader EU envelope is coordinated. A material reduction in the German defence commitment therefore operates through two channels at once. The direct channel is the loss of German bilateral disbursements. The signalling channel is the effect on other member states, which read German rebalancing as a permission structure for their own retrenchment. Historical patterns since 2024 indicate that Berlin has followed a consistent approach: ambitious multi-year commitments announced at the political level, followed by quiet rebalancing during budget execution. A repetition of this pattern in 2027 would preserve headline figures while eroding the actual disbursement trajectory -- the modal risk identified in the corpus. The 2027 envelope is under pressure from three simultaneous domestic priorities. Pension reform requires substantial fiscal space and is politically non-negotiable given demographic dynamics. Infrastructure investment, particularly on rail and energy transition, competes for the same envelope. The Schuldenbremse debt-brake constrains the total available fiscal space and generates conflict between coalition partners over which lever moves first. The Ukraine allocation sits inside the defence envelope and is protected but not immunised. France's political turbulence, with successive minority governments and a fragmented National Assembly, makes any French offset unlikely; smaller EU donors will follow the German lead rather than compensate. Poland's operational role continues but does not substitute for the financial component that Germany and France jointly provide.",
        implication: "The centrality of the German budget in the European support architecture generates second-order effects that extend well beyond the Ukraine dossier. The first is the growing gap between declaratory and effective European commitment. As member states adopt the German pattern of headline preservation and quiet rebalancing, the aggregate European commitment communicated in summit conclusions and Council statements diverges progressively from the resources actually reaching Kyiv. This gap becomes visible to Moscow and factors into Russian calculations of Western resolve. The second effect concerns the internal balance of the European Union. The recurring dependence on German fiscal decisions to underwrite continental commitments consolidates Berlin's structural weight within the Council, but simultaneously exposes the fragility of an architecture in which a single member state's domestic politics can determine collective outcomes. This asymmetry generates pressure toward institutional innovation -- joint borrowing, EU-level defence funds, treaty-based mechanisms -- that would reduce dependence on the German cycle. Progress on such instruments becomes more likely under acute stress than under stable conditions. The third effect operates on the German political system itself. The repeated collision between defence commitments, social spending, infrastructure needs and the debt-brake produces sustained coalition instability. Successive German governments will inherit an increasingly constrained fiscal environment and an electorate that reads the trade-offs in real time, altering the trajectory of German domestic politics in ways that will shape European policy for a decade. The fourth effect concerns the transatlantic relationship. A visibly stressed German commitment weakens the argument that Europe can substitute for reduced US engagement, and reinforces the position of American voices arguing for further disengagement on the basis that Europe is unwilling to bear its own security costs.",
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
        thesis: "The Russian hybrid campaign against European Union member states has transitioned over the 2025-2026 period from an episodic pattern of individual incidents to a sustained programme of pressure across multiple domains. The Baltic corridor has seen a consistent series of undersea cable and pipeline incidents, with attribution now consistently pointing to Russian shadow fleet vessels and state proxies. Airspace incursions by drones over sensitive infrastructure in Germany, Poland and the Baltic states have moved from probing operations to routine activity. Disinformation operations, adapted after platform enforcement improvements, now focus on defence-industrial policy debates including armament budgets, conscription frameworks and NATO tripwire posture, with clear evidence of coordinated inauthentic behaviour across Telegram, X and TikTok. Arson attacks on logistics chains supporting Ukraine have been documented in multiple member states. GPS jamming and spoofing has become a persistent feature of aviation and maritime operations across the Baltic and North Sea. The European response has remained fragmented along national lines. Attribution is technically feasible but politically constrained: member states resist collective attribution because it would require collective response, and collective response mechanisms do not exist. No EU-level joint attribution mechanism has materialised despite repeated proposals from the Commission, the External Action Service and multiple member states. The coordination deficit is structural rather than tactical. European Union treaties assign primary competence on internal security and intelligence sharing to member states; the institutional architecture built to support hybrid response -- the Hybrid Centre of Excellence in Helsinki, the EEAS strategic communications units -- has produced analysis and coordination but not enforcement authority. Without treaty change, or a triggering crisis that would justify emergency competence expansion under existing treaty provisions, the deficit is likely to persist. Moscow is exploiting this asymmetry deliberately: the campaign generates continuous strategic cost on European decision-making without ever reaching the threshold that would force a coordinated response and the political consolidation that would accompany it.",
        implication: "The persistence of the coordination gap generates second-order effects that reshape European security in ways that extend beyond the hybrid domain itself. The first is the gradual bifurcation of the European response into two tracks. Frontline states -- Poland, the Nordic and Baltic countries, and increasingly the United Kingdom operating outside the EU frame -- develop bilateral and minilateral response mechanisms that bypass the Union's institutional architecture. This produces effective capability at the regional level but simultaneously weakens the EU as the primary framework for European security, transferring political weight to formats such as the Nordic-Baltic Eight, the Weimar Triangle and ad hoc coalitions built around specific incident responses. The second effect concerns the normalisation of grey-zone activity as a permanent feature of European security. As specific incident types recur without triggering escalation, they cease to be treated as crises and become baseline conditions. Public tolerance rises, media coverage diminishes, and the political cost of inaction falls. This produces stability in the short term but progressively erodes the deterrent value of European response postures, encouraging Moscow to expand the operational envelope. The third effect operates on the domestic politics of individual member states. Sustained exposure to Russian hybrid pressure, particularly in the information domain, generates polarisation around defence and security questions that maps onto pre-existing political cleavages. Nationalist and Eurosceptic parties instrumentalise the failure of European coordination as evidence of the Union's structural inadequacy. This produces a feedback loop in which Russian pressure weakens European coordination, and weakened coordination strengthens political forces that would further reduce it. The fourth effect concerns the alliance architecture with the United States. American assessments of European willingness to bear security costs are shaped in part by the visible European response to hybrid pressure. A fragmented response reinforces Washington's argument that Europe is unwilling to defend itself, which in turn accelerates the drawdown of US commitment that has produced the current dependency dynamics.",
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
        divergence: "ECFR reads the coordination deficit as improvable within existing treaties; IISS sees it as requiring a crisis trigger to move.",
        sources: [ {name:"ECFR",passages:12},{name:"IISS",passages:10},{name:"CSIS",passages:9},{name:"ISPI",passages:7},{name:"Bruegel",passages:4} ],
        topArcs: [
          { pair: "RUS ↔ EU", pol: "hostile", w: 4.1, vol: "H
