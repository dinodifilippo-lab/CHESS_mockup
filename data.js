// GeoIntel Mockup -- Wired scenario data (Phase 2)
// Three end-to-end scenarios: Taiwan AS IS, Ukraine WHAT IF, Taiwan SENSITIVITY

window.GEODATA = {

  scenarios: {

    "taiwan-asis": {
      question: "Baseline path of Taiwan Strait stability over the next 12 months",
      questionType: "AS IS",
      dossier: "Taiwan Strait / Chip supply chain",
      dossierId: "taiwan",
      subgraph: {
        focus: ["PRC", "TWN", "USA", "JPN", "KOR"],
        peripheral: ["AUS", "PHL"],
        arcs: [
          { s: "PRC", t: "TWN", w: 4.6, vol: "H", pol: "hostile" },
          { s: "USA", t: "TWN", w: 4.0, vol: "M", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "M", pol: "complex" },
          { s: "JPN", t: "TWN", w: 3.5, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.1, vol: "L", pol: "aligned" },
          { s: "PRC", t: "JPN", w: 3.6, vol: "M", pol: "complex" },
          { s: "PRC", t: "KOR", w: 3.5, vol: "L", pol: "complex" },
          { s: "USA", t: "KOR", w: 3.9, vol: "L", pol: "aligned" }
        ],
        actorCount: 7,
        arcCount: 8,
        passageCount: 41,
        sourceCount: 5
      },
      clarify: {
        show: false
      },
      evidenceStrength: 3.9,
      evidenceCaption: "MODERATE-HIGH",
      thinkingSteps: [
        "Subgraph resolved: 7 actors, 8 arcs",
        "Corpus retrieval: 41 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The status quo holds -- but the perimeter is quietly hardening.",
        subtitle: "A positioned reading of the Taiwan Strait, informed by the last quarter.",
        thesis: "The baseline over the next 12 months is <em>continuity of an armed peace</em>, not resolution. Beijing keeps pressure on the operational envelope (overflights, exercises, gray-zone maritime activity) without moving to a decisive posture, while Washington and Tokyo continue to reinforce Taiwan's deterrent through <em>incremental commitments</em>. The path is stable but the underlying arcs are stiffer, not softer.",
        evidence: [
          {
            n: "01",
            body: "PLA activity around the Strait shows sustained tempo but no departure from established patterns. Rehearsal exercises track with the calendar (August drills, October coincidence with US electoral cycle) rather than with a specific catalyst. This is <em>routinized signaling</em>, not preparation for escalation.",
            citations: [{ src: "MERICS", date: "Sep 2026" }, { src: "CSIS", date: "Aug 2026" }]
          },
          {
            n: "02",
            body: "US arms transfer approvals to Taipei have moved from episodic to programmatic. The August package covered coastal defense, cyber, and munitions replenishment -- capabilities calibrated for prolonged conflict rather than for symbolic reassurance. Read as a signal on <em>expected duration</em> of the standoff.",
            citations: [{ src: "CSIS", date: "Aug 2026", emphasis: true }, { src: "FP", date: "Sep 2026" }]
          },
          {
            n: "03",
            body: "Japan's defense posture continues to formalize what was already implicit. The 2026 revision of the National Security Strategy explicitly names Taiwan Strait stability as a Japanese interest, moving the JPN-TWN arc from tacit to declared. This tightens the trilateral USA-JPN-TWN configuration.",
            citations: [{ src: "ISPI", date: "Jul 2026" }]
          },
          {
            n: "04",
            body: "Semiconductor policy remains the shadow driver. Continued US export controls, TSMC's Arizona and Kumamoto ramp-up, and Beijing's rare-earth export licensing regime constitute a slow-motion decoupling that raises the political cost of any kinetic move for all parties, including Beijing.",
            citations: [{ src: "Bruegel", date: "Sep 2026" }, { src: "MERICS", date: "Aug 2026" }]
          }
        ],
        implication: "For the analyst, the baseline is <em>stable but not benign</em>. The arcs are hardening, not relaxing -- which means shocks matter more than they would under a softer configuration. Monitor the JPN-TWN declared posture, TSMC operational continuity, and PLA off-calendar activity as the three signals that would move the reading materially.",
        divergence: "MERICS reads Beijing's tempo as calibrated restraint; CSIS reads it as calibrated pressure. Both frames fit the evidence.",
        sources: [
          { name: "MERICS", passages: 12 },
          { name: "CSIS", passages: 11 },
          { name: "ISPI", passages: 8 },
          { name: "Bruegel", passages: 6 },
          { name: "FP", passages: 4 }
        ],
        topArcs: [
          { pair: "PRC ↔ TWN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "USA ↔ PRC", pol: "complex", w: 4.9, vol: "M" },
          { pair: "USA ↔ TWN", pol: "aligned", w: 4.0, vol: "M" },
          { pair: "JPN ↔ TWN", pol: "aligned", w: 3.5, vol: "M" },
          { pair: "USA ↔ JPN", pol: "aligned", w: 4.1, vol: "L" }
        ],
        cost: "$0.02",
        composedAt: "10:26",
        followUp: "Suggested follow-up: <em>What if Trump resumes strikes on Iran?</em> -- projects a counterfactual through Deep-Think."
      },
      dtReport: {
        title: "Under baseline dynamics, the modal path is armed peace -- but the tail toward operational incidents is not thin.",
        subtitle: "A 12-turn projection of the Taiwan Strait subgraph under current arc configuration and no exogenous shocks.",
        thesis: "The modal outcome (48%) is a continuation of the current pattern -- sustained PLA pressure without decisive move, US and Japan incremental reinforcement, TSMC operational continuity. Around this modal path, however, sits a <em>meaningful right-tail</em> of operational incidents (23%) that does not require a strategic decision to escalate -- it requires only <em>the accumulation of gray-zone activity to cross a red line accidentally</em>.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 18, ci: "14–22%", pol: "blue", body: "<em>Detente window opens.</em> Backchannel diplomatic activity produces a codified reduction in PLA exercise tempo, in exchange for softer US arms transfer language. Requires a change in US administration posture or a Chinese leadership recalibration; neither is currently visible in the corpus." },
          { code: "S3", tag: "MODAL", label: "S3", pct: 48, ci: "42–55%", pol: "amber", body: "<em>Armed peace continues.</em> PLA maintains routinized pressure; USA and JPN incremental reinforcement; TSMC continues operational continuity; no incident crosses threshold. The status quo is preserved through mutual perception that the alternative is worse for all." },
          { code: "S2", tag: "RIGHT TAIL", label: "S2", pct: 23, ci: "18–28%", pol: "red", body: "<em>Operational incident.</em> A gray-zone activity (aerial intercept, maritime near-miss, cyber event) crosses a threshold without a strategic decision to escalate. Depending on the actor triangle response, this could either de-escalate (through backchannel) or trigger a wider posture change." },
          { code: "S4", tag: "UNSTABLE", label: "S4", pct: 11, ci: "7–15%", pol: "dim-amber", body: "<em>Strategic decoupling accelerates.</em> A political catalyst (Taiwan election, US policy shift, Chinese economic downturn) accelerates the decoupling into a phase where kinetic risk becomes materially higher. This is the tail toward S2 becoming persistent rather than episodic." }
        ],
        latticeCaption: "Each terminal is a graph configuration at 12-month horizon; band thickness proxies density of trajectories reaching that class. Modal band S3 concentrates most weight; right tail S2 is thin but persistent across seeds.",
        sensitivity: "The distribution is most sensitive to <em>Japan-Taiwan declared posture strength</em>: a formal defense commitment (currently at declared-informal level) would move S1 from 18% to 9% and S2 from 23% to 31%. The second-most sensitive lever is <em>TSMC operational continuity</em>: any disruption longer than 30 days shifts S4 from 11% to 24%.",
        implication: "The one arc to monitor is <em>JPN-TWN declared posture</em>. Second-order signals: TSMC Arizona ramp announcements, PLA off-calendar activity, and any change in US arms transfer categorization from defensive to offensive.",
        robustness: 3.7,
        robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 restart seeds (max delta 4pp). Confidence limited by dependence on domestic political catalysts, which the corpus underweights.",
        drivingArcs: [
          { pair: "JPN ↔ TWN", desc: "Pivot: declared posture", pol: "green" },
          { pair: "USA ↔ TWN", desc: "Anchor: reinforcement cadence", pol: "green" },
          { pair: "PRC ↔ TWN", desc: "Driver: PLA tempo", pol: "red" },
          { pair: "USA ↔ PRC", desc: "Frame: managed rivalry", pol: "amber" }
        ],
        assumptions: [
          "A1: No US leadership change materially affecting Asia posture in the horizon.",
          "A2: TSMC operational continuity holds absent a specific catalyst.",
          "A3: Chinese leadership prioritizes economic stability over kinetic decisive action.",
          "A4: Japan's defense posture continues formalization without treaty-level commitment.",
          "A5: No third-actor catalyst (Philippines, Korea) triggers a wider arc reconfiguration."
        ],
        stats: {
          tier: "Standard",
          iterations: 187,
          nodes: 1248,
          time: "3m 12s",
          cost: "$0.28"
        }
      }
    },

    "ukraine-whatif": {
      question: "What if Ukraine's Western support drops materially in Q4 2026?",
      questionType: "WHAT IF",
      dossier: "Ukraine / Russia / NATO",
      dossierId: "ukraine",
      subgraph: {
        focus: ["UKR", "RUS", "EU", "USA", "DEU", "POL"],
        peripheral: ["GBR", "BLR"],
        arcs: [
          { s: "RUS", t: "UKR", w: 4.8, vol: "H", pol: "hostile" },
          { s: "USA", t: "UKR", w: 4.2, vol: "H", pol: "aligned" },
          { s: "EU", t: "UKR", w: 4.1, vol: "M", pol: "aligned" },
          { s: "DEU", t: "UKR", w: 3.8, vol: "M", pol: "aligned" },
          { s: "POL", t: "UKR", w: 3.6, vol: "L", pol: "aligned" },
          { s: "USA", t: "EU", w: 4.3, vol: "M", pol: "aligned" },
          { s: "RUS", t: "EU", w: 3.8, vol: "H", pol: "hostile" },
          { s: "RUS", t: "BLR", w: 3.4, vol: "L", pol: "aligned" }
        ],
        actorCount: 8,
        arcCount: 8,
        passageCount: 53,
        sourceCount: 6
      },
      clarify: {
        show: true,
        text: "By <em>material drop</em>, I read a scenario where combined US and EU financial and military assistance falls below 60% of the 2025 baseline over a full quarter -- enough to constrain Ukraine's operational choices, short of full withdrawal. Confirm?"
      },
      evidenceStrength: 4.1,
      evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph resolved: 8 actors, 8 arcs",
        "Corpus retrieval: 53 passages, 6 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The current window has more slack than the headlines suggest -- but the floor is close.",
        subtitle: "A positioned reading of the Ukraine support architecture and its degradation dynamics.",
        thesis: "Western support to Ukraine is <em>structurally more resilient than the political noise implies</em>, but has real slack only until roughly the end of 2026. The US Congressional cycle, the EU multi-annual budget frame, and Germany's supplementary defense envelope are all designed to absorb short-term shocks, but not a sustained multi-quarter reduction. A material Q4 drop -- as defined -- would compress Ukraine's operational choices before the corpus expects it.",
        evidence: [
          {
            n: "01",
            body: "The US supplemental disbursement cadence has slowed but not stopped. Congressional support has become procedural rather than enthusiastic -- <em>the votes are there, the appetite is not</em>. This creates a fragile configuration: any political catalyst (election, budget crisis, external distraction) can convert procedural continuity into procedural stall.",
            citations: [{ src: "FP", date: "Sep 2026", emphasis: true }, { src: "CSIS", date: "Aug 2026" }]
          },
          {
            n: "02",
            body: "The EU's four-year support envelope (2024–2027) provides a floor, but the execution rhythm depends on member state co-financing. Germany's 2027 budget is already under pressure from domestic priorities, and France's political turbulence adds noise. The floor exists on paper; the delivery is not on autopilot.",
            citations: [{ src: "ECFR", date: "Sep 2026" }, { src: "Bruegel", date: "Aug 2026" }]
          },
          {
            n: "03",
            body: "Poland's operational role -- logistical hub, forward positioning of NATO assets -- is more resilient than the financial support. Even under a material Q4 drop scenario, the operational infrastructure would not degrade at the same pace. This creates <em>asymmetric degradation</em>: Ukraine loses financial and munitions support faster than logistical backbone.",
            citations: [{ src: "ISPI", date: "Sep 2026" }]
          },
          {
            n: "04",
            body: "On the Russian side, the corpus reads Moscow as calibrated to <em>outlast</em> rather than <em>outfight</em>. A material Western drop would validate this calibration and increase Russian confidence in extended-horizon pressure, even if it does not enable an immediate breakthrough. This lengthens the war's expected duration under the counterfactual, not shortens it.",
            citations: [{ src: "MERICS", date: "Aug 2026" }, { src: "ECFR", date: "Sep 2026" }]
          }
        ],
        implication: "For the analyst, the WHAT IF question is really <em>a question about timing, not about outcome</em>. Ukraine can hold current lines through end-2026 with a materially reduced envelope; the constraint bites in H1 2027. The key monitoring signal is not the level of Q4 support but the <em>trajectory of the German 2027 budget process</em> and the <em>US election cycle politics on supplementals</em>.",
        divergence: "ECFR and Bruegel agree on the Q4-to-H1 timing; ISPI reads the operational buffer as thicker.",
        sources: [
          { name: "ECFR", passages: 14 },
          { name: "FP", passages: 11 },
          { name: "CSIS", passages: 10 },
          { name: "Bruegel", passages: 8 },
          { name: "ISPI", passages: 6 },
          { name: "MERICS", passages: 4 }
        ],
        topArcs: [
          { pair: "RUS ↔ UKR", pol: "hostile", w: 4.8, vol: "H" },
          { pair: "USA ↔ EU", pol: "aligned", w: 4.3, vol: "M" },
          { pair: "USA ↔ UKR", pol: "aligned", w: 4.2, vol: "H" },
          { pair: "EU ↔ UKR", pol: "aligned", w: 4.1, vol: "M" },
          { pair: "RUS ↔ EU", pol: "hostile", w: 3.8, vol: "H" }
        ],
        cost: "$0.02",
        composedAt: "10:29",
        followUp: "Suggested follow-up: <em>Run this as a Deep-Think projection over 4 quarters</em> -- quantify the degradation curve."
      },
      dtReport: {
        title: "Material Q4 drop is absorbable through Q1 2027 -- after which the operational envelope narrows sharply.",
        subtitle: "A 4-quarter projection of the Ukraine support architecture under a material material Q4 2026 reduction in Western envelope.",
        thesis: "The projection separates cleanly into <em>two phases</em>. Through Q1 2027 (60% modal probability) the current operational posture holds: existing munitions stockpiles, forward positioning, and political will convert reduced financial input into continued output at declining efficiency. Starting Q2 2027 the distribution widens sharply -- the modal path drops to 34% and three tail scenarios (compressed defense, negotiated freeze, structural withdrawal) collectively reach 66%.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 14, ci: "10–18%", pol: "blue", body: "<em>Support recovers by mid-2027.</em> The Q4 drop triggers a political correction in the US and EU; supplementals resume at close to pre-cut levels by Q2. Requires a specific catalyst (Russian battlefield escalation, external NATO stimulus). Not the modal path but not negligible." },
          { code: "S2", tag: "MODAL", label: "S2", pct: 41, ci: "35–48%", pol: "amber", body: "<em>Compressed defense.</em> Ukraine adapts to the reduced envelope by narrowing the operational scope (defensive over offensive posture), rationing munitions, and prioritizing critical infrastructure. Territory loss is limited but the recovery of initiative is postponed to 2028." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 28, ci: "23–34%", pol: "red", body: "<em>Negotiated freeze.</em> The reduced envelope combined with battlefield fatigue creates political space for a Korea-style armistice framework. This is not a Ukrainian defeat but codifies the current line of contact and postpones political resolution indefinitely. Russia gains time, Ukraine loses claim to reversal." },
          { code: "S4", tag: "UNSTABLE", label: "S4", pct: 17, ci: "12–22%", pol: "dim-amber", body: "<em>Structural withdrawal.</em> A political catalyst (US election outcome, EU internal crisis) accelerates the reduction into a phase where support becomes symbolic. Ukraine's operational envelope collapses in H2 2027, forcing terms that were not politically possible in 2026." }
        ],
        latticeCaption: "Each terminal is a support configuration at Q4 2027; the modal band S2 (compressed defense) concentrates most weight. Right-tail S3 (negotiated freeze) is persistent across seeds where a mid-2027 catalyst appears.",
        sensitivity: "The distribution is most sensitive to the <em>US supplemental cycle in Q1-Q2 2027</em>. A single supplemental passage would move S1 from 14% to 26%; a delayed one moves S4 from 17% to 27%. The second-most sensitive lever is <em>German coalition politics</em>: a change of government in Berlin would move S3 up materially.",
        implication: "For the analyst, the two arcs to monitor are <em>US Q1-Q2 2027 supplemental status</em> and <em>German 2027 budget negotiation</em>. These are the two catalysts that decide whether the projection lands in the modal compressed-defense scenario or shifts to the right tail.",
        robustness: 3.4,
        robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 restart seeds (max delta 6pp). Confidence limited by dependence on domestic political catalysts across three major polities.",
        drivingArcs: [
          { pair: "USA ↔ UKR", desc: "Pivot: supplemental cycle", pol: "amber" },
          { pair: "EU ↔ UKR", desc: "Anchor: multi-annual envelope", pol: "green" },
          { pair: "DEU ↔ EU", desc: "Driver: German budget", pol: "amber" },
          { pair: "RUS ↔ UKR", desc: "Frame: attrition dynamic", pol: "red" }
        ],
        assumptions: [
          "A1: No Russian battlefield breakthrough in the horizon (probability weighted low, not zero).",
          "A2: Existing munitions stockpiles hold through Q1 2027 under reduced replenishment.",
          "A3: US Q1-Q2 supplemental is a binary event, not a gradient.",
          "A4: German coalition stability holds through the H1 2027 budget cycle.",
          "A5: No third-actor intervention (China, Turkey) materially shifts the arc configuration."
        ],
        stats: {
          tier: "Standard",
          iterations: 194,
          nodes: 1382,
          time: "3m 28s",
          cost: "$0.31"
        }
      }
    },

    "taiwan-sens": {
      question: "Which relationships hold the most leverage over Taiwan Strait kinetic risk?",
      questionType: "SENSITIVITY",
      dossier: "Taiwan Strait / Chip supply chain",
      dossierId: "taiwan",
      subgraph: {
        focus: ["USA", "PRC", "TWN", "JPN", "KOR", "PHL"],
        peripheral: ["AUS"],
        arcs: [
          { s: "PRC", t: "TWN", w: 4.6, vol: "H", pol: "hostile" },
          { s: "USA", t: "TWN", w: 4.0, vol: "M", pol: "aligned" },
          { s: "USA", t: "PRC", w: 4.9, vol: "M", pol: "complex" },
          { s: "JPN", t: "TWN", w: 3.5, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.1, vol: "L", pol: "aligned" },
          { s: "USA", t: "PHL", w: 3.6, vol: "M", pol: "aligned" },
          { s: "USA", t: "KOR", w: 3.9, vol: "L", pol: "aligned" }
        ],
        actorCount: 7,
        arcCount: 7,
        passageCount: 38,
        sourceCount: 5
      },
      clarify: {
        show: false
      },
      evidenceStrength: 4.0,
      evidenceCaption: "HIGH",
      thinkingSteps: [
        "Subgraph resolved: 7 actors, 7 arcs",
        "Corpus retrieval: 38 passages, 5 sources",
        "Composing positioned answer",
        "Validation on critical arcs"
      ],
      l1Report: {
        title: "The leverage is not on the PRC-TWN arc itself -- it sits on the arcs that surround it.",
        subtitle: "A positioned reading of which relationships most materially move the kinetic-risk distribution around Taiwan.",
        thesis: "The intuitive frame -- that Taiwan Strait risk is a function of the PRC-TWN dyad -- is misleading. The dyad's polarity is stable in the hostile range and moves only slowly. The <em>real leverage</em> sits on the arcs that <em>surround</em> the dyad: US-Japan alliance tightness, US-Taiwan declared support explicitness, and the Philippines' base access agreements. These arcs move fast enough that they can materially shift the kinetic-risk distribution within a 12-month horizon.",
        evidence: [
          {
            n: "01",
            body: "US-Japan alliance tightness is the single largest lever. Formalization of Article V applicability to Taiwan contingencies would move the modal scenario from armed peace to armed peace under stronger deterrent. De-formalization (never happened, but under a specific US administration hypothesis) would move it in the opposite direction. Elasticity: <em>very high</em>.",
            citations: [{ src: "CSIS", date: "Aug 2026", emphasis: true }, { src: "ISPI", date: "Sep 2026" }]
          },
          {
            n: "02",
            body: "US-Taiwan declared support explicitness is a lever with high political cost. Moving from strategic ambiguity to strategic clarity would compress the space for gray-zone activity but simultaneously reduce Beijing's off-ramps. Historically, small shifts here (like the 2022 speech reversals) produced disproportionate market and rhetoric reactions.",
            citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "FP", date: "Aug 2026" }]
          },
          {
            n: "03",
            body: "The Philippines' EDCA site expansion has shifted the base access arithmetic in ways that the graph is still absorbing. Additional site openings -- particularly in Luzon -- would compress PLA operational planning envelope in a way that a Taiwanese defense reform of similar magnitude would not.",
            citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "MERICS", date: "Sep 2026" }]
          },
          {
            n: "04",
            body: "Korea's role is asymmetric: a formal ROK involvement in Taiwan-contingency planning is politically constrained but even a public exercise scenario would compress Beijing's assumption space. Small moves here have large signaling effect precisely because they are not currently priced in.",
            citations: [{ src: "MERICS", date: "Aug 2026" }]
          }
        ],
        implication: "For the analyst, the counterintuitive read is that <em>the arcs to watch are not the ones the newspapers report on</em>. The dyad PRC-TWN is stable-hostile; monitoring it produces little information. The signals with predictive power are: US-JPN alliance formalization language, US-TWN support categorization, PHL base access expansion, KOR public exercise participation. Any of these moving materially -- <em>even at the level of language</em> -- deserves immediate re-run of the projection.",
        divergence: "CSIS and MERICS agree on the primacy of the US-JPN arc; ISPI weights the US-TWN declaration lever more heavily.",
        sources: [
          { name: "CSIS", passages: 13 },
          { name: "MERICS", passages: 9 },
          { name: "ISPI", passages: 7 },
          { name: "FP", passages: 5 },
          { name: "Bruegel", passages: 4 }
        ],
        topArcs: [
          { pair: "USA ↔ JPN", pol: "aligned", w: 4.1, vol: "L" },
          { pair: "USA ↔ TWN", pol: "aligned", w: 4.0, vol: "M" },
          { pair: "USA ↔ PHL", pol: "aligned", w: 3.6, vol: "M" },
          { pair: "PRC ↔ TWN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "USA ↔ KOR", pol: "aligned", w: 3.9, vol: "L" }
        ],
        cost: "$0.02",
        composedAt: "10:31",
        followUp: "Suggested follow-up: <em>Run a Deep-Think sensitivity ranking on these six arcs</em> -- quantify their marginal leverage."
      },
      dtReport: {
        title: "USA-JPN alliance tightness and USA-TWN declared support are the two arcs that move the distribution most.",
        subtitle: "A leverage ranking over the six arcs identified in the L1 reading, projected across a 12-month horizon.",
        thesis: "The Deep-Think sensitivity ranks the six candidate leverage arcs by marginal effect on the kinetic-risk distribution. Two arcs dominate: <em>USA-JPN alliance tightness</em> (leverage 0.78) and <em>USA-TWN declared support</em> (leverage 0.63). The next two -- USA-PHL base access, JPN defense posture -- are secondary but material. The remaining candidates (KOR involvement, EU Taiwan policy) contribute noise, not signal.",
        scenarios: [
          { code: "L1", tag: "LEVERAGE .78", label: "USA-JPN", pct: 78, ci: "72-84%", pol: "amber", body: "<em>USA-JPN alliance tightness.</em> Formalization of Article V language applicability moves the modal scenario materially toward armed peace under stronger deterrent (23 percentage points shift). De-formalization moves it in the opposite direction. This is the single largest lever." },
          { code: "L2", tag: "LEVERAGE .63", label: "USA-TWN", pct: 63, ci: "57-69%", pol: "amber", body: "<em>USA-TWN declared support explicitness.</em> Moving from strategic ambiguity to declared clarity shifts the distribution by 15 percentage points but reduces Beijing off-ramps. High leverage but high political cost -- the trade-off is not linear." },
          { code: "L3", tag: "LEVERAGE .48", label: "USA-PHL", pct: 48, ci: "42-54%", pol: "green", body: "<em>USA-PHL base access expansion.</em> Additional EDCA sites in Luzon compress PLA operational planning envelope. Leverage is real but capped: only 8 percentage point shift in modal probability under maximum expansion." },
          { code: "L4", tag: "LEVERAGE .35", label: "JPN-TWN", pct: 35, ci: "30-40%", pol: "green", body: "<em>JPN-TWN declared posture.</em> Moving from tacit to declared defense commitment shifts distribution by 6 percentage points. Secondary lever, high political feasibility." },
          { code: "L5", tag: "LEVERAGE .18", label: "USA-KOR", pct: 18, ci: "14-22%", pol: "dim-amber", body: "<em>USA-KOR involvement in Taiwan planning.</em> Public exercise participation shifts distribution by only 3 percentage points. Signals more than moves." },
          { code: "L6", tag: "LEVERAGE .09", label: "EU-TWN", pct: 9, ci: "6-13%", pol: "dim-amber", body: "<em>EU Taiwan policy.</em> Marginal lever. Any move here shifts distribution by less than 2 percentage points. Noise, not signal." }
        ],
        latticeCaption: "Bars represent marginal leverage on the kinetic-risk distribution over 12 months, normalized against baseline. Two arcs dominate; the tail is thin.",
        sensitivity: "The ranking is <em>stable</em> across sensitivity restart seeds: the ordering of the top two arcs (USA-JPN, USA-TWN) does not change. Their absolute leverage values move by less than 6 percentage points. The ranking is <em>less stable</em> in the middle band: USA-PHL vs JPN-TWN can swap under certain assumption sets.",
        implication: "For the analyst, this is a re-prioritization instruction. Traditional monitoring focuses on PRC-TWN and USA-PRC dyads; this analysis says those are lagging, not leading, indicators. <em>The two arcs to monitor with the highest priority are USA-JPN alliance language and USA-TWN support categorization</em>. Both can move faster than the headline dyad, and both have disproportionate downstream effect.",
        robustness: 3.8,
        robustnessCaption: "HIGH",
        robustnessNote: "Distribution stable across 5 restart seeds. Confidence high because the ranking rests primarily on documented US alliance architecture rather than on projected behavior.",
        drivingArcs: [
          { pair: "USA ↔ JPN", desc: "Dominant lever", pol: "amber" },
          { pair: "USA ↔ TWN", desc: "Secondary lever", pol: "amber" },
          { pair: "USA ↔ PHL", desc: "Material but capped", pol: "green" },
          { pair: "JPN ↔ TWN", desc: "Feasible secondary", pol: "green" }
        ],
        assumptions: [
          "A1: Baseline PRC posture as characterized in specialized-analyses corpus (calibrated pressure, not decisive intent).",
          "A2: US alliance architecture continues to hold across administrations in the horizon.",
          "A3: The ranking measures leverage on kinetic-risk distribution, not on total geopolitical outcome.",
          "A4: EDCA site expansion assumes Philippine political continuity.",
          "A5: EU Taiwan policy remains bounded by the trade-focused frame."
        ],
        stats: {
          tier: "Standard",
          iterations: 176,
          nodes: 1094,
          time: "2m 58s",
          cost: "$0.26"
        }
      }
    }
  },

  scenarioByPromptId: {
    "taiwan-asis": "taiwan-asis",
    "ukraine-whatif": "ukraine-whatif",
    "taiwan-sens": "taiwan-sens"
  },

  dossiers: [
    { id: "global", name: "Global overview" },
    { id: "taiwan", name: "Taiwan Strait / Chip supply chain" },
    { id: "ukraine", name: "Ukraine / Russia / NATO" },
    { id: "iran", name: "Iran cease-fire" }
  ]

};
