// CHESS Mockup -- Phase 3 revision
// DEMO ONLY - NOT REAL DATA

window.GEODATA = {


  actorNames: {
    USA: "United States", PRC: "China", RUS: "Russia", IRN: "Iran", ISR: "Israel",
    EU:  "European Union", JPN: "Japan", KOR: "South Korea", TWN: "Taiwan",
    IND: "India", TUR: "Turkey", KSA: "Saudi Arabia",
    UKR: "Ukraine", DEU: "Germany", GBR: "United Kingdom", FRA: "France",
    POL: "Poland", BLR: "Belarus", CAN: "Canada", MEX: "Mexico", BRA: "Brazil",
    AUS: "Australia", EGY: "Egypt", SYR: "Syria",
    PHL: "Philippines", IDN: "Indonesia", VNM: "Vietnam", THA: "Thailand",
    PAK: "Pakistan", AFG: "Afghanistan", IRQ: "Iraq", YEM: "Yemen",
    LBY: "Libya", ETH: "Ethiopia", NGA: "Nigeria", ZAF: "South Africa",
    ARG: "Argentina", CHL: "Chile", COL: "Colombia", PER: "Peru",
    NOR: "Norway", SWE: "Sweden", FIN: "Finland", EST: "Estonia",
    GRC: "Greece", ITA: "Italy", ESP: "Spain", NLD: "Netherlands",
    CHE: "Switzerland", AUT: "Austria", HUN: "Hungary", ROU: "Romania", CZE: "Czech Republic"
  },

  globalEdges: [
    { s: "USA", t: "GBR", pol: "aligned", w: 4.9 },
    { s: "USA", t: "CAN", pol: "aligned", w: 4.8 },
    { s: "USA", t: "DEU", pol: "aligned", w: 4.6 },
    { s: "USA", t: "FRA", pol: "aligned", w: 4.4 },
    { s: "USA", t: "ITA", pol: "aligned", w: 4.2 },
    { s: "USA", t: "POL", pol: "aligned", w: 4.5 },
    { s: "USA", t: "NLD", pol: "aligned", w: 4.3 },
    { s: "USA", t: "ESP", pol: "aligned", w: 3.9 },
    { s: "USA", t: "NOR", pol: "aligned", w: 4.2 },
    { s: "USA", t: "TUR", pol: "complex", w: 3.8 },
    { s: "USA", t: "GRC", pol: "aligned", w: 3.7 },
    { s: "USA", t: "ROU", pol: "aligned", w: 4.0 },
    { s: "USA", t: "CZE", pol: "aligned", w: 3.8 },
    { s: "USA", t: "HUN", pol: "complex", w: 3.2 },
    { s: "USA", t: "EU",  pol: "complex", w: 4.5 },
    { s: "DEU", t: "FRA", pol: "aligned", w: 4.7 },
    { s: "DEU", t: "POL", pol: "aligned", w: 4.2 },
    { s: "DEU", t: "ITA", pol: "aligned", w: 4.3 },
    { s: "DEU", t: "NLD", pol: "aligned", w: 4.5 },
    { s: "DEU", t: "AUT", pol: "aligned", w: 4.4 },
    { s: "DEU", t: "CHE", pol: "aligned", w: 4.3 },
    { s: "FRA", t: "ITA", pol: "aligned", w: 4.2 },
    { s: "FRA", t: "ESP", pol: "aligned", w: 4.1 },
    { s: "GBR", t: "FRA", pol: "aligned", w: 4.0 },
    { s: "GBR", t: "DEU", pol: "aligned", w: 4.1 },
    { s: "POL", t: "UKR", pol: "aligned", w: 4.4 },
    { s: "POL", t: "CZE", pol: "aligned", w: 4.1 },
    { s: "POL", t: "ROU", pol: "aligned", w: 4.0 },
    { s: "FIN", t: "SWE", pol: "aligned", w: 4.6 },
    { s: "FIN", t: "NOR", pol: "aligned", w: 4.4 },
    { s: "FIN", t: "EST", pol: "aligned", w: 4.2 },
    { s: "SWE", t: "NOR", pol: "aligned", w: 4.5 },
    { s: "NOR", t: "DEU", pol: "aligned", w: 4.0 },
    { s: "HUN", t: "AUT", pol: "aligned", w: 3.8 },
    { s: "RUS", t: "UKR", pol: "hostile", w: 5.0 },
    { s: "USA", t: "UKR", pol: "aligned", w: 4.3 },
    { s: "DEU", t: "UKR", pol: "aligned", w: 4.2 },
    { s: "GBR", t: "UKR", pol: "aligned", w: 4.4 },
    { s: "FRA", t: "UKR", pol: "aligned", w: 3.9 },
    { s: "EU",  t: "UKR", pol: "aligned", w: 4.5 },
    { s: "RUS", t: "BLR", pol: "aligned", w: 4.5 },
    { s: "RUS", t: "POL", pol: "hostile", w: 4.3 },
    { s: "RUS", t: "EST", pol: "hostile", w: 4.1 },
    { s: "RUS", t: "FIN", pol: "hostile", w: 4.0 },
    { s: "RUS", t: "DEU", pol: "hostile", w: 4.2 },
    { s: "RUS", t: "GBR", pol: "hostile", w: 4.3 },
    { s: "RUS", t: "EU",  pol: "hostile", w: 4.5 },
    { s: "USA", t: "PRC", pol: "complex", w: 4.9 },
    { s: "USA", t: "JPN", pol: "aligned", w: 4.8 },
    { s: "USA", t: "KOR", pol: "aligned", w: 4.6 },
    { s: "USA", t: "TWN", pol: "aligned", w: 4.5 },
    { s: "USA", t: "PHL", pol: "aligned", w: 4.4 },
    { s: "USA", t: "AUS", pol: "aligned", w: 4.7 },
    { s: "USA", t: "IND", pol: "aligned", w: 4.0 },
    { s: "USA", t: "VNM", pol: "aligned", w: 3.5 },
    { s: "USA", t: "THA", pol: "aligned", w: 3.6 },
    { s: "PRC", t: "TWN", pol: "hostile", w: 4.9 },
    { s: "PRC", t: "JPN", pol: "complex", w: 4.0 },
    { s: "PRC", t: "KOR", pol: "complex", w: 3.7 },
    { s: "PRC", t: "IND", pol: "hostile", w: 4.2 },
    { s: "PRC", t: "PHL", pol: "hostile", w: 4.0 },
    { s: "PRC", t: "VNM", pol: "complex", w: 3.8 },
    { s: "PRC", t: "AUS", pol: "complex", w: 3.7 },
    { s: "JPN", t: "TWN", pol: "aligned", w: 4.2 },
    { s: "JPN", t: "KOR", pol: "complex", w: 3.8 },
    { s: "JPN", t: "PHL", pol: "aligned", w: 4.0 },
    { s: "JPN", t: "AUS", pol: "aligned", w: 4.2 },
    { s: "IND", t: "PAK", pol: "hostile", w: 4.6 },
    { s: "IDN", t: "AUS", pol: "aligned", w: 3.6 },
    { s: "THA", t: "VNM", pol: "aligned", w: 3.5 },
    { s: "AUS", t: "GBR", pol: "aligned", w: 4.6 },
    { s: "USA", t: "ISR", pol: "aligned", w: 4.9 },
    { s: "USA", t: "KSA", pol: "aligned", w: 4.5 },
    { s: "USA", t: "EGY", pol: "aligned", w: 4.0 },
    { s: "USA", t: "IRN", pol: "hostile", w: 4.8 },
    { s: "USA", t: "SYR", pol: "hostile", w: 3.9 },
    { s: "USA", t: "YEM", pol: "hostile", w: 3.6 },
    { s: "ISR", t: "IRN", pol: "hostile", w: 4.9 },
    { s: "ISR", t: "SYR", pol: "hostile", w: 4.4 },
    { s: "ISR", t: "EGY", pol: "complex", w: 3.6 },
    { s: "ISR", t: "KSA", pol: "complex", w: 3.4 },
    { s: "IRN", t: "KSA", pol: "hostile", w: 4.3 },
    { s: "IRN", t: "IRQ", pol: "aligned", w: 4.1 },
    { s: "IRN", t: "SYR", pol: "aligned", w: 4.4 },
    { s: "IRN", t: "YEM", pol: "aligned", w: 3.9 },
    { s: "KSA", t: "EGY", pol: "aligned", w: 4.2 },
    { s: "KSA", t: "YEM", pol: "hostile", w: 4.3 },
    { s: "KSA", t: "PAK", pol: "aligned", w: 3.9 },
    { s: "TUR", t: "SYR", pol: "hostile", w: 4.1 },
    { s: "TUR", t: "GRC", pol: "hostile", w: 3.8 },
    { s: "TUR", t: "EGY", pol: "complex", w: 3.5 },
    { s: "PRC", t: "RUS", pol: "aligned", w: 4.6 },
    { s: "PRC", t: "IRN", pol: "aligned", w: 4.2 },
    { s: "RUS", t: "IRN", pol: "aligned", w: 4.1 },
    { s: "PRC", t: "PAK", pol: "aligned", w: 4.4 },
    { s: "RUS", t: "IND", pol: "aligned", w: 4.0 },
    { s: "PRC", t: "DEU", pol: "complex", w: 4.0 },
    { s: "PRC", t: "EU",  pol: "complex", w: 4.2 },
    { s: "USA", t: "MEX", pol: "complex", w: 4.5 },
    { s: "USA", t: "BRA", pol: "complex", w: 3.8 },
    { s: "USA", t: "COL", pol: "aligned", w: 4.1 },
    { s: "USA", t: "CHL", pol: "aligned", w: 3.8 },
    { s: "USA", t: "ARG", pol: "complex", w: 3.6 },
    { s: "BRA", t: "ARG", pol: "aligned", w: 4.2 },
    { s: "BRA", t: "COL", pol: "aligned", w: 3.7 },
    { s: "CHL", t: "PER", pol: "complex", w: 3.5 },
    { s: "COL", t: "PER", pol: "aligned", w: 3.7 },
    { s: "BRA", t: "PRC", pol: "aligned", w: 4.0 },
    { s: "ARG", t: "PRC", pol: "complex", w: 3.5 },
    { s: "MEX", t: "CAN", pol: "aligned", w: 4.3 },
    { s: "ETH", t: "EGY", pol: "hostile", w: 3.8 },
    { s: "NGA", t: "ETH", pol: "aligned", w: 3.3 },
    { s: "ZAF", t: "NGA", pol: "aligned", w: 3.6 },
    { s: "ZAF", t: "PRC", pol: "aligned", w: 3.9 },
    { s: "NGA", t: "PRC", pol: "aligned", w: 3.7 },
    { s: "LBY", t: "EGY", pol: "complex", w: 3.5 },
    { s: "LBY", t: "TUR", pol: "aligned", w: 3.6 },
    { s: "AFG", t: "PAK", pol: "complex", w: 4.0 },
    { s: "AFG", t: "IRN", pol: "complex", w: 3.7 },
    { s: "CHE", t: "EU",  pol: "aligned", w: 4.2 }
  ],

  actorCentrality: {
    USA: 22, PRC: 18, RUS: 11, EU: 5, DEU: 10, FRA: 8, GBR: 7,
    UKR: 6, ISR: 9, IRN: 10, TUR: 5, KSA: 7, JPN: 6, TWN: 4,
    POL: 6, KOR: 3, IND: 5, AUS: 5, ITA: 4, ESP: 3, NLD: 3,
    EGY: 5, PAK: 5, PHL: 3, VNM: 3, THA: 3, MEX: 3,
    BRA: 4, CAN: 3, HUN: 2, ROU: 2, CZE: 2, NOR: 4, SWE: 3, FIN: 4,
    EST: 2, GRC: 3, AUT: 3, CHE: 2, SYR: 4, IRQ: 1, YEM: 3,
    IDN: 2, LBY: 3, ETH: 3, NGA: 3, ZAF: 2, ARG: 3, CHL: 2,
    COL: 3, PER: 2, BLR: 2, AFG: 2
  },

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

  // =====================================================================
  // PHASE 3 DATA
  // =====================================================================
  phase3: {

    dashboard: {
      corpus: {
        articles: 27533,
        sources: 6,
        embedded: 27533,
        embeddedPct: 100,
        graphNodes: 147,
        graphArcs: 428
      },
      ingestionSpark: [12, 18, 24, 22, 31, 28, 35, 42, 38, 45, 51, 48, 55, 62, 58],
      topActors: [
        { code: "USA", arcs: 42, io: "in/out" },
        { code: "PRC", arcs: 38, io: "in/out" },
        { code: "EU",  arcs: 33, io: "in/out" },
        { code: "RUS", arcs: 29, io: "in/out" },
        { code: "DEU", arcs: 26, io: "in/out" },
        { code: "IRN", arcs: 24, io: "in/out" },
        { code: "JPN", arcs: 22, io: "in/out" },
        { code: "ISR", arcs: 21, io: "in/out" },
        { code: "UKR", arcs: 19, io: "in/out" },
        { code: "TWN", arcs: 18, io: "in/out" }
      ],
      arcDistribution: [
        { bin: "w < 2",   count:  38, pct:  8.9 },
        { bin: "w 2-3",   count: 124, pct: 29.0 },
        { bin: "w 3-4",   count: 168, pct: 39.3 },
        { bin: "w 4-4.5", count:  71, pct: 16.6 },
        { bin: "w > 4.5", count:  27, pct:  6.3 }
      ],
      graphState: {
        avgWeight: 3.42,
        density: 0.040,
        lastRebuild: "6h ago",
        weightedAvg: 3.68,
        stronglyConnected: 12,
        isolatedNodes: 4
      },
      health: [
        { k: "Embedding lag",   v: "0.4s",    cls: "green" },
        { k: "Extraction lag",  v: "2.1m",    cls: "amber" },
        { k: "API error rate",  v: "0.02%",   cls: "green" },
        { k: "Job queue depth", v: "3",       cls: "green" },
        { k: "Storage used",    v: "42.8 GB", cls: "" },
        { k: "Last KG rebuild", v: "6h ago",  cls: "" }
      ]
    },

    admin: {
      sources: [
        { name: "ISPI",           kind: "Think tank",         articles: 4218, lastSync: "12m ago", status: "ok",   region: "Europe" },
        { name: "ECFR",           kind: "Think tank",         articles: 5104, lastSync: "8m ago",  status: "ok",   region: "Europe" },
        { name: "MERICS",         kind: "Research institute", articles: 3892, lastSync: "24m ago", status: "ok",   region: "Europe / China focus" },
        { name: "Bruegel",        kind: "Economic think tank",articles: 2967, lastSync: "18m ago", status: "ok",   region: "Europe" },
        { name: "CSIS",           kind: "Think tank",         articles: 6841, lastSync: "3m ago",  status: "ok",   region: "USA" },
        { name: "Foreign Policy", kind: "Magazine",           articles: 4511, lastSync: "41m ago", status: "warn", region: "USA" }
      ]
    },

    explore: {
      news: [
        { id: "n1",  src: "MERICS",  date: "Aug 30 2026", dossier: "Taiwan",  title: "PLA Justice Mission drill patterns show shift toward off-calendar tempo", snippet: "The most recent PLA exercise sequence departs from the calendar-coincident pattern established since 2022, with implications for early-warning frameworks that rely on scheduled activity for baseline detection." },
        { id: "n2",  src: "ECFR",    date: "Aug 28 2026", dossier: "Ukraine", title: "German 2027 budget draft opens Ukraine envelope to Bundestag amendment", snippet: "The Finance Ministry's initial draft preserves the headline Ukraine allocation but introduces conditional language that leaves substantive space for coalition partners to propose reductions during committee review." },
        { id: "n3",  src: "CSIS",    date: "Aug 27 2026", dossier: "Iran",    title: "Bessent economic pressure campaign targets secondary sanctions on Chinese refiners", snippet: "Treasury guidance issued this week signals expanded secondary sanctions targeting Shandong teapot refineries and their intermediary networks in the UAE and Malaysia." },
        { id: "n4",  src: "ISPI",    date: "Aug 26 2026", dossier: "Iran",    title: "Oman-mediated Hormuz shipping channel proposal advances", snippet: "Muscat's proposal for a temporary corridor through the Strait of Hormuz has entered technical discussions between Iranian and Omani maritime authorities, with implicit US acquiescence." },
        { id: "n5",  src: "Bruegel", date: "Aug 25 2026", dossier: "Ukraine", title: "European defence industrial capacity holds despite disbursement slowdown", snippet: "Contract execution at Rheinmetall, KNDS and MBDA proceeds on schedule even as member state disbursement rhythm has slowed, generating temporary inventory build-up." },
        { id: "n6",  src: "FP",      date: "Aug 24 2026", dossier: "Taiwan",  title: "Japan defence white paper draft language on Taiwan hardens further", snippet: "The 2027 white paper draft under interagency review reportedly moves language from declared-substantive to operational, potentially referencing specific contingency planning frameworks." },
        { id: "n7",  src: "MERICS",  date: "Aug 23 2026", dossier: "Taiwan",  title: "Beijing signals through Global Times on Taiwan election framing", snippet: "The editorial line establishes the analytical frame Beijing intends to apply to any DPP-aligned outcome in the 2028 Taiwan election cycle, prefiguring the escalation triggers." },
        { id: "n8",  src: "CSIS",    date: "Aug 22 2026", dossier: "Ukraine", title: "US supplemental status remains uncertain into Q1 2027", snippet: "Senate calendar constraints and House Republican coalition dynamics make near-term action unlikely; the operational assumption in Kyiv shifts toward planning without additional US support." }
      ],
      structured: [
        { code: "USA", name: "United States",     type: "State", data: {
          gdp: "$28,780 bn", gdpGrowth: "+2.4%", population: "334.9 M",
          militarySpend: "$886 bn", militaryPctGdp: "3.4%",
          tradeBalance: "-$785 bn", exportTop: "Machinery, aircraft, oil",
          politicalRegime: "Federal presidential republic", allianceCore: "NATO, AUKUS, Quad"
        }},
        { code: "PRC", name: "China",             type: "State", data: {
          gdp: "$18,530 bn", gdpGrowth: "+4.8%", population: "1,410 M",
          militarySpend: "$296 bn", militaryPctGdp: "1.7%",
          tradeBalance: "+$823 bn", exportTop: "Electronics, machinery, textiles",
          politicalRegime: "Single-party socialist republic", allianceCore: "SCO, BRICS+"
        }},
        { code: "RUS", name: "Russia",            type: "State", data: {
          gdp: "$2,020 bn", gdpGrowth: "+3.6%", population: "144.2 M",
          militarySpend: "$109 bn", militaryPctGdp: "5.9%",
          tradeBalance: "+$118 bn", exportTop: "Oil, gas, metals, weapons",
          politicalRegime: "Federal semi-presidential republic", allianceCore: "CSTO, EAEU, BRICS+"
        }},
        { code: "IRN", name: "Iran",              type: "State", data: {
          gdp: "$367 bn", gdpGrowth: "+3.4%", population: "89.2 M",
          militarySpend: "$10.3 bn", militaryPctGdp: "2.8%",
          tradeBalance: "+$28 bn", exportTop: "Oil, petrochemicals",
          politicalRegime: "Theocratic republic", allianceCore: "SCO, informal Sino-Russian axis"
        }},
        { code: "ISR", name: "Israel",            type: "State", data: {
          gdp: "$520 bn", gdpGrowth: "+2.0%", population: "9.8 M",
          militarySpend: "$27 bn", militaryPctGdp: "5.2%",
          tradeBalance: "+$8 bn", exportTop: "High-tech, diamonds, chemicals",
          politicalRegime: "Parliamentary democracy", allianceCore: "US strategic partnership, Abraham Accords"
        }},
        { code: "EU",  name: "European Union",    type: "Institution", data: {
          gdp: "$19,400 bn", gdpGrowth: "+1.2%", population: "448.4 M",
          militarySpend: "$367 bn (aggregate)", militaryPctGdp: "1.9%",
          tradeBalance: "+$412 bn", exportTop: "Machinery, vehicles, pharma",
          politicalRegime: "Supranational union", allianceCore: "NATO (most members)"
        }},
        { code: "JPN", name: "Japan",             type: "State", data: {
          gdp: "$4,410 bn", gdpGrowth: "+1.1%", population: "125.1 M",
          militarySpend: "$50.2 bn", militaryPctGdp: "1.1%",
          tradeBalance: "+$21 bn", exportTop: "Vehicles, machinery, electronics",
          politicalRegime: "Parliamentary constitutional monarchy", allianceCore: "US-Japan Treaty, Quad"
        }},
        { code: "TWN", name: "Taiwan",            type: "State", data: {
          gdp: "$790 bn", gdpGrowth: "+3.8%", population: "23.6 M",
          militarySpend: "$19 bn", militaryPctGdp: "2.4%",
          tradeBalance: "+$85 bn", exportTop: "Semiconductors, electronics",
          politicalRegime: "Semi-presidential republic", allianceCore: "US Taiwan Relations Act (informal)"
        }},
        { code: "UKR", name: "Ukraine",           type: "State", data: {
          gdp: "$178 bn", gdpGrowth: "+3.2%", population: "37.8 M",
          militarySpend: "$65 bn (incl. Western aid)", militaryPctGdp: "36.5%",
          tradeBalance: "-$21 bn", exportTop: "Grain, metals, machinery",
          politicalRegime: "Semi-presidential republic under martial law", allianceCore: "EU candidate, NATO partner"
        }},
        { code: "DEU", name: "Germany",           type: "State", data: {
          gdp: "$4,590 bn", gdpGrowth: "+0.4%", population: "84.5 M",
          militarySpend: "$67.7 bn", militaryPctGdp: "1.5%",
          tradeBalance: "+$248 bn", exportTop: "Vehicles, machinery, chemicals",
          politicalRegime: "Federal parliamentary republic", allianceCore: "NATO, EU"
        }},
        { code: "TSMC",name: "Taiwan Semiconductor",type: "Corporate actor", data: {
          revenue: "$85 bn", grossMargin: "54%", employees: "~76,000",
          headquartered: "Hsinchu, Taiwan",
          leadingNodeShare: "~90% global", capexPlan: "$40 bn (2026)",
          keyMarkets: "Apple, NVIDIA, AMD, Qualcomm", strategicRole: "Choke-point in global semiconductor supply chain"
        }},
        { code: "OMN", name: "Oman",              type: "State", data: {
          gdp: "$108 bn", gdpGrowth: "+1.8%", population: "4.6 M",
          militarySpend: "$5.7 bn", militaryPctGdp: "5.3%",
          tradeBalance: "+$16 bn", exportTop: "Oil, gas",
          politicalRegime: "Absolute monarchy", allianceCore: "GCC, historical mediator role"
        }}
      ],
      primary: [
        { id: "p1", src: "Japan MoD",        date: "Jul 2026", title: "Defense of Japan 2026 (Annual White Paper)",                              snippet: "Official Japanese defence policy document, explicitly names Taiwan Strait stability as a Japanese security interest for the first time." },
        { id: "p2", src: "US Treasury",      date: "Aug 2026", title: "OFAC guidance on secondary sanctions expansion -- Iran oil trade",         snippet: "Technical guidance detailing the scope and enforcement approach for the Bessent 'economic operation' targeting third-country buyers of Iranian oil." },
        { id: "p3", src: "PLA",              date: "Dec 2025", title: "Justice Mission 2025 exercise summary (Chinese source translation)",     snippet: "Post-exercise summary from PLA-affiliated media, providing the doctrinal framing that positions the exercise as blockade rehearsal rather than amphibious assault." },
        { id: "p4", src: "European Council", date: "Jun 2026", title: "Council conclusions on European Peace Facility Ukraine tranche",          snippet: "Formal conclusions on the multi-annual European support envelope, including the burden-sharing formula and disbursement schedule." }
      ],
      analyses: [
        { id: "a1", src: "IISS",         date: "Apr 2026", title: "Attrition and adaptation: Ukraine's evolving war effort", snippet: "IISS assessment of the shift in the Ukrainian force posture under reduced Western support, with implications for the 2026-2027 horizon." },
        { id: "a2", src: "The Diplomat", date: "Jan 2026", title: "China's Taiwan drills are crossing a new line",           snippet: "Analysis of the Justice Mission 2025 exercise and the normalisation of PLA activity inside Taiwan's contiguous zone." },
        { id: "a3", src: "CSIS",         date: "Jul 2026", title: "Semiconductor dispersion and Taiwan risk",                snippet: "Detailed technical and strategic analysis of TSMC's dispersion strategy and its interaction with Chinese calculations on Taiwan." },
        { id: "a4", src: "ECFR",         date: "Aug 2026", title: "Europe's hybrid response deficit",                        snippet: "Assessment of the structural constraints on European coordination against Russian hybrid pressure, with proposed institutional pathways." }
      ],
      sourcesMatrix: {
        dossiers: ["Ukraine", "Taiwan", "Iran", "Global"],
        rows: [
          { source: "ISPI",    articles: 4218, dist: { Ukraine: "hi",  Taiwan: "med", Iran: "hi",  Global: "hi"  } },
          { source: "ECFR",    articles: 5104, dist: { Ukraine: "hi",  Taiwan: "low", Iran: "med", Global: "hi"  } },
          { source: "MERICS",  articles: 3892, dist: { Ukraine: "low", Taiwan: "hi",  Iran: "med", Global: "med" } },
          { source: "Bruegel", articles: 2967, dist: { Ukraine: "med", Taiwan: "med", Iran: "low", Global: "hi"  } },
          { source: "CSIS",    articles: 6841, dist: { Ukraine: "hi",  Taiwan: "hi",  Iran: "hi",  Global: "hi"  } },
          { source: "FP",      articles: 4511, dist: { Ukraine: "med", Taiwan: "med", Iran: "hi",  Global: "med" } }
        ]
      }
    }

  },

  scenarios: {

    "ukraine-main": {
      question: "How could the Ukraine situation evolve over the next 12 months?",
      dossier: "Ukraine / Russia / NATO", dossierId: "ukraine", parent: null,
      subgraph: {
        focus: ["UKR", "RUS", "USA", "EU", "DEU", "POL"], peripheral: ["GBR", "BLR", "TUR"],
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
      thinkingSteps: ["Subgraph resolved: 9 actors, 8 arcs","Corpus retrieval: 58 passages, 6 sources","Composing positioned answer","Validation on critical arcs"],
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
          { pair: "RUS - UKR", pol: "hostile", w: 4.8, vol: "H" },
          { pair: "EU - UKR",  pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA - EU",  pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU - UKR", pol: "aligned", w: 3.9, vol: "M" },
          { pair: "RUS - EU",  pol: "hostile", w: 3.8, vol: "H" }
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
          { pair: "USA - UKR", desc: "Pivot: supplemental cycle",     pol: "amber" },
          { pair: "DEU - EU",  desc: "Driver: budget stress",         pol: "amber" },
          { pair: "EU - UKR",  desc: "Anchor: multi-annual envelope", pol: "green" },
          { pair: "RUS - UKR", desc: "Frame: attrition dynamic",      pol: "red" }
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
          { pair: "DEU - EU",  pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU - UKR",  pol: "aligned", w: 4.2, vol: "M" },
          { pair: "USA - EU",  pol: "complex", w: 4.0, vol: "M" },
          { pair: "DEU - UKR", pol: "aligned", w: 3.9, vol: "H" }
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
          { pair: "RUS - EU",  pol: "hostile", w: 4.1, vol: "H" },
          { pair: "EU - DEU",  pol: "aligned", w: 4.5, vol: "M" },
          { pair: "EU - POL",  pol: "aligned", w: 3.9, vol: "L" },
          { pair: "RUS - POL", pol: "hostile", w: 3.8, vol: "H" },
          { pair: "RUS - DEU", pol: "hostile", w: 3.7, vol: "H" }
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
          { pair: "PRC - TWN", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA - PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "USA - JPN", pol: "aligned", w: 4.2, vol: "L" },
          { pair: "USA - TWN", pol: "aligned", w: 4.1, vol: "M" },
          { pair: "USA - PHL", pol: "aligned", w: 3.8, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal path is blockade escalation, not assault -- but the tail toward kinetic action is not thin in 2027.",
        subtitle: "A 24-month projection of the Taiwan Strait dossier across 4 scenarios, informed by PLA doctrine and precondition dynamics.",
        thesis: "The simulation explored four trajectories on the Taiwan Strait dossier over the twenty-four-month horizon.\n\nIn the modal scenario (46%), the People's Liberation Army maintains large-scale exercises at Justice Mission scale two to three times per year, with continued normalisation of activity inside Taiwan's contiguous zone. Each exercise expands the operational envelope incrementally without crossing thresholds that would force a coalition response. The PLA reaches full invasion capability by the fourth quarter of 2027 but does not employ it. The trajectory closes with the Strait in a new equilibrium characterised by permanent higher-alert posture and normalised coercive activity below the kinetic threshold.\n\nIn the second scenario (22%), a grey-zone activity crosses a threshold that neither side had intended to breach. The most probable triggering events are an aerial intercept resulting in collision, maritime enforcement of an exclusion zone striking a civilian vessel, or a cyber operation with visible physical consequences. The subsequent trajectory depends on the speed and coherence of the trilateral response linking Washington, Tokyo and Taipei. Rapid coordination and effective backchannel communication produce de-escalation and a return to the pre-incident baseline. Slower or fragmented response produces formalisation of the blockade as a permanent posture, generating a Taiwan crisis without a Taiwan war.\n\nIn the third scenario (20%), one of the three precondition categories activates. A Taiwanese political move interpreted in Beijing as crossing a red line, a US-Taiwan formal defence treaty, or an internal Chinese crisis requiring external distraction. Any of these triggers shifts the kinetic option from unlikely to probable, with a concentrated window of six to twelve months following the triggering event. The most probable timing for the overall trajectory falls between the fourth quarter of 2027 and the first half of 2028, coinciding with the completion of PLA modernisation targets and the Taiwan electoral cycle.\n\nIn the fourth scenario (12%), a change of political configuration in Taipei following the 2028 elections opens dialogue space. Beijing responds by reducing exercise tempo in exchange for softer US arms transfer language, and a partial detente takes hold. This trajectory requires a specific electoral outcome favourable to the KMT or a third party, combined with a Trump administration recalibration toward the Indo-Pacific that would create political space for the reduced US posture on Taiwan that Beijing would demand.",
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
          { pair: "PRC - TWN", desc: "Frame: PLA tempo",              pol: "red" },
          { pair: "USA - TWN", desc: "Anchor: reinforcement cadence", pol: "green" },
          { pair: "USA - JPN", desc: "Deterrent: trilateral tightness",pol: "green" },
          { pair: "USA - PRC", desc: "Frame: managed rivalry",        pol: "amber" }
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
          { pair: "USA - PRC",  pol: "complex", w: 4.9, vol: "H" },
          { pair: "PRC - TWN",  pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA - TSMC", pol: "aligned", w: 4.4, vol: "M" },
          { pair: "PRC - TSMC", pol: "complex", w: 4.3, vol: "M" },
          { pair: "USA - NLD",  pol: "aligned", w: 4.0, vol: "L" }
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
          { pair: "PRC - TWN", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA - JPN", pol: "aligned", w: 4.3, vol: "L" },
          { pair: "JPN - TWN", pol: "aligned", w: 3.8, vol: "M" },
          { pair: "PRC - JPN", pol: "complex", w: 3.7, vol: "M" }
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
          { pair: "USA - PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "IRN - ISR", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA - IRN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "USA - ISR", pol: "aligned", w: 4.5, vol: "M" },
          { pair: "PRC - IRN", pol: "aligned", w: 4.0, vol: "H" }
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
          { pair: "USA - PRC", desc: "Meta-variable",              pol: "amber" },
          { pair: "PRC - IRN", desc: "Anchor: economic guarantor", pol: "green" },
          { pair: "IRN - ISR", desc: "Driver: dyadic dynamic",     pol: "red" },
          { pair: "USA - ISR", desc: "Removed constraint",         pol: "amber" }
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
          { pair: "IRN - ISR", pol: "hostile", w: 4.7, vol: "H" },
          { pair: "USA - ISR", pol: "aligned", w: 4.5, vol: "H" },
          { pair: "ISR - UAE", pol: "aligned", w: 3.8, vol: "L" },
          { pair: "ISR - KSA", pol: "complex", w: 3.5, vol: "M" }
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
          { pair: "USA - PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "USA - IRN", pol: "hostile", w: 4.6, vol: "H" },
          { pair: "PRC - IRN", pol: "aligned", w: 4.2, vol: "H" },
          { pair: "PRC - RUS", pol: "aligned", w: 4.1, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:38"
      },
      dtReport: null
    },

    "eu-china-trade-main": {
      question: "How could an EU-China trade escalation evolve over the next 12-24 months?",
      dossier: "EU-China trade friction", dossierId: "eu-china-trade", parent: null,
      subgraph: {
        focus: ["EU", "PRC", "DEU", "FRA", "ITA"], peripheral: ["USA", "NLD", "POL", "ESP"],
        arcs: [
          { s: "EU",  t: "PRC", w: 4.4, vol: "H", pol: "complex" },
          { s: "PRC", t: "DEU", w: 4.1, vol: "H", pol: "complex" },
          { s: "PRC", t: "FRA", w: 3.8, vol: "M", pol: "complex" },
          { s: "PRC", t: "ITA", w: 3.6, vol: "M", pol: "complex" },
          { s: "USA", t: "EU",  w: 4.0, vol: "M", pol: "complex" },
          { s: "EU",  t: "NLD", w: 4.4, vol: "L", pol: "aligned" }
        ],
        actorCount: 9, arcCount: 6, passageCount: 44, sourceCount: 5
      },
      evidenceStrength: 3.8, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph resolved: 9 actors, 6 arcs","Corpus retrieval: 44 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "EU-China friction is drifting toward tariff-and-countermeasure equilibrium, not toward decoupling.",
        subtitle: "A positioned reading of the EU-China trade dynamic over a 12-24 month horizon.",
        thesis: "The EU-China trade relationship in 2026 sits in a phase of managed friction rather than decoupling. Brussels has completed the EV tariff investigation with duties in place, opened parallel investigations on medical devices, wind turbines and biodiesel, and activated the Anti-Coercion Instrument as a standing capability. Beijing has responded with targeted retaliation on French cognac, European pork and rare earth export licensing rather than with generalised measures, reflecting a calibrated approach that preserves the aggregate trade relationship while raising costs on specific member states. The German position remains the pivotal variable. Berlin has consistently signalled preference for negotiated de-escalation given the exposure of the German automotive and machinery sectors, and this preference is embedded in the Commission's tactical choices even as the declaratory line has hardened. France, Italy and Spain have supported firmer positions but require German coordination for meaningful escalation. The result is a system that ratchets tariffs upward through discrete rounds while both sides preserve dialogue channels and avoid the WTO-shattering moves that would characterise genuine decoupling. Over the horizon, the modal path is continued incremental escalation with periodic negotiated pauses, generating cumulative disruption to specific sectors without transitioning to a fundamentally different trade architecture.",
        implication: "The persistence of managed friction produces effects across the European economy that reshape corporate strategy independently of the underlying diplomatic trajectory. First, supply chain reconfiguration continues at the pace set by regulatory pressure and reputational risk rather than by tariff economics alone. European corporates in automotive, semiconductor equipment, chemicals and consumer electronics maintain China+1 strategies, with Southeast Asia and India absorbing the marginal reallocation. Second, Chinese direct investment into European automotive plants accelerates as a hedge against future tariff escalation, generating a Chinese industrial footprint in Hungary, Spain, France and Italy that complicates the political economy of future measures. Third, the German coalition arithmetic becomes structurally tied to trade outcomes, with SPD-CDU divergence on China policy visible in every major decision cycle. Fourth, European semiconductor equipment producers face sustained Chinese pressure through both procurement diversification and licensing constraints, generating margin pressure on ASML, ASM International and Zeiss SMT that persists regardless of tariff outcomes.",
        evidence: [
          { n: "01", body: "The EV tariff regime remains in force with duties at levels calibrated to allow continued Chinese exports at compressed margins. Chinese OEMs are absorbing rather than passing through, indicating strategic willingness to preserve market share at the cost of profitability.", citations: [{ src: "Bruegel", date: "Jun 2026", emphasis: true }, { src: "MERICS", date: "Jul 2026" }] },
          { n: "02", body: "Beijing's response pattern has been targeted retaliation rather than generalised measures. French cognac, European pork, rare earth licensing all fit a template of specific pressure on member states most likely to advocate escalation. Broader Chinese trade relationship preserved.", citations: [{ src: "ECFR", date: "Aug 2026" }, { src: "CSIS", date: "Jul 2026" }] },
          { n: "03", body: "German position remains pivotal. Berlin preference for negotiated de-escalation, driven by automotive and machinery exposure, embedded in Commission tactical choices. Any material shift in German posture would restructure EU coordination.", citations: [{ src: "Bruegel", date: "Aug 2026" }] }
        ],
        divergence: "Bruegel sees managed friction as stable equilibrium; ECFR reads it as pre-escalation phase.",
        sources: [ {name:"Bruegel",passages:12},{name:"ECFR",passages:10},{name:"MERICS",passages:9},{name:"CSIS",passages:8},{name:"FP",passages:5} ],
        topArcs: [
          { pair: "EU - PRC",  pol: "complex", w: 4.4, vol: "H" },
          { pair: "PRC - DEU", pol: "complex", w: 4.1, vol: "H" },
          { pair: "USA - EU",  pol: "complex", w: 4.0, vol: "M" },
          { pair: "PRC - FRA", pol: "complex", w: 3.8, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal path is managed friction with periodic flare-ups; tail toward broader retaliation exists but requires trigger.",
        subtitle: "A 12-24 month projection of EU-China trade dynamic across 4 scenarios.",
        thesis: "Four trajectories over 12-24 month horizon.\n\nModal (48%): incremental tariff escalation on defined sectors (EVs, medical devices, wind, biodiesel) with matched Chinese retaliation on specific member states. Aggregate trade preserved. Managed friction becomes structural.\n\nRight-tail (24%): a specific incident (Chinese acquisition blocked politically, EU investigation with punitive damages, rare earth export halt) triggers proportional retaliation cycle that escalates beyond calibrated pattern. Reaches new equilibrium at higher friction level.\n\nLeft-tail (16%): US-China detente under Trump II reduces European hedging incentive; EU-China negotiated framework emerges covering critical minerals, market access, subsidy discipline. Managed dialogue phase.\n\nUnstable (12%): German coalition collapse or French political realignment removes the pivotal member state's moderating role; escalation accelerates toward genuine decoupling architecture.",
        implication: "The consolidation of managed friction generates second-order effects across European corporate strategy and financial markets. First, European exporters to China face progressive margin compression that reshapes sector fundamentals across automotive, luxury goods, industrial machinery and chemicals, with visible impact on corporate bond spreads and equity valuations. Second, capital reallocation away from China-exposed European names accelerates in institutional portfolios, generating persistent underperformance for the most exposed segments. Third, the political economy of European industrial policy shifts toward explicit support for import substitution and reshoring, generating fiscal implications that transmit into sovereign bond markets particularly for Germany and France. Fourth, insurance underwriters revise geopolitical exclusions and sublimits on trade credit, marine cargo and political risk cover, generating premium increases and reduced capacity across affected corridors.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL",  label: "S1", pct: 16, ci: "12-20%", pol: "blue",      body: "<em>US-China detente reduces EU hedging.</em> Trump II reaches modus vivendi with Beijing on tariffs and tech; European escalation loses political rationale. EU-China negotiated framework covers critical minerals, market access, subsidy discipline." },
          { code: "S2", tag: "MODAL",      label: "S2", pct: 48, ci: "42-54%", pol: "amber",     body: "<em>Managed friction structural.</em> Incremental tariff escalation on defined sectors with matched targeted retaliation. Aggregate trade preserved. Supply chain reconfiguration proceeds at regulatory pace. German position pivotal but stable." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 24, ci: "19-30%", pol: "red",       body: "<em>Trigger event escalates cycle.</em> Chinese acquisition blocked, EU investigation with punitive damages, or rare earth export halt triggers proportional retaliation. Reaches new equilibrium at higher friction level. Specific sectors deeply affected." },
          { code: "S4", tag: "UNSTABLE",   label: "S4", pct: 12, ci: "8-16%",  pol: "dim-amber", body: "<em>German pivot lost.</em> Coalition collapse or French realignment removes moderating role. Escalation accelerates toward genuine decoupling architecture. WTO-shattering measures become plausible." }
        ],
        latticeCaption: "Each terminal is a EU-China trade configuration at 24-month horizon; modal band (managed friction) concentrates most weight. Right tail becomes thicker if German coalition weakens.",
        sensitivity: "Most sensitive to <em>German coalition stability</em>: instability moves S3+S4 collectively from 36% to 52%. Second: <em>US-China direction under Trump II</em>: detente moves S1 to 26%. Third: <em>specific trigger event probability</em>: any high-profile incident moves S3 up sharply.",
        robustness: 3.4, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 restart seeds (max delta 6pp). Tail probabilities sensitive to German political trajectory.",
        drivingArcs: [
          { pair: "EU - PRC",  desc: "Frame: friction dynamic",       pol: "amber" },
          { pair: "PRC - DEU", desc: "Pivot: German position",        pol: "amber" },
          { pair: "USA - EU",  desc: "Meta: US direction",            pol: "amber" },
          { pair: "PRC - FRA", desc: "Retaliation: targeted pressure",pol: "red" }
        ],
        assumptions: [
          "A1: WTO framework remains formally intact.",
          "A2: German coalition survives through H1 2027 budget.",
          "A3: Chinese retaliation stays targeted, not generalised.",
          "A4: No major security incident spillover onto trade.",
          "A5: Trump II tariff policy stabilises by mid-2027."
        ],
        stats: { tier: "Standard", iterations: 182, nodes: 1204, time: "3m 08s", cost: "$0.29" },
        fullReport: {
          narrative: "The modal trajectory unfolds through progressive tariff escalation on defined sectors, with matched Chinese retaliation calibrated to member states most advocating firmer positions. Aggregate bilateral trade is preserved; specific corridors deeply reshaped. Chinese OEMs continue investment into European plants in Hungary, Spain, France and Italy, generating footprint that complicates future measures. European semiconductor equipment sector faces sustained pressure on both procurement and licensing. By 2028 the friction architecture is structural, with corporate strategies fully adjusted to the higher-tariff environment.",
          keyMoves: [
            "Q4 2026: EU medical devices investigation moves to duties phase.",
            "Q1 2027: Chinese rare earth export licensing tightens further.",
            "Q2 2027: German 2028 budget locks defence spending; automotive lobbying intensifies.",
            "Q3 2027: EU wind turbine investigation reaches determination.",
            "Q4 2027: New tariff equilibrium consolidates; corporate strategies stabilise."
          ]
        }
      }
    },

    "us-debt-hyperscalers-main": {
      question: "How could the US debt trajectory and hyperscaler capex cycle evolve, and what are the systemic risks?",
      dossier: "US debt & hyperscaler capex", dossierId: "us-debt-hyperscalers", parent: null,
      subgraph: {
        focus: ["USA", "PRC", "EU", "JPN"], peripheral: ["IND", "KOR", "TWN", "GBR"],
        arcs: [
          { s: "USA", t: "PRC", w: 4.5, vol: "H", pol: "complex" },
          { s: "USA", t: "JPN", w: 4.7, vol: "M", pol: "aligned" },
          { s: "USA", t: "EU",  w: 4.0, vol: "M", pol: "complex" },
          { s: "USA", t: "TWN", w: 4.5, vol: "M", pol: "aligned" },
          { s: "USA", t: "KOR", w: 4.4, vol: "L", pol: "aligned" }
        ],
        actorCount: 8, arcCount: 5, passageCount: 41, sourceCount: 5
      },
      evidenceStrength: 3.7, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: ["Subgraph resolved: 8 actors, 5 arcs","Corpus retrieval: 41 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "US debt path and hyperscaler capex concentration are converging into a coupled fragility.",
        subtitle: "A positioned reading of the twin dynamics over an 18-24 month horizon.",
        thesis: "Two dynamics that traditionally operate in separate analytical frames are becoming coupled. The first is the US federal debt trajectory, projected to reach 120% of GDP by 2028 under current CBO baseline with primary deficits stable in the 5-6% of GDP range. Interest expense is now the second-largest budget category and rising. The second is the hyperscaler capex cycle, with Microsoft, Google, Meta, Amazon and Oracle committing an aggregated 350-400 billion USD to AI infrastructure in 2026 alone, financed increasingly through debt issuance rather than internal cash flow. The coupling emerges through two channels. First, hyperscaler debt issuance competes with Treasury supply for the same yield-sensitive institutional buyer base, contributing to term premium expansion. Second, hyperscaler capex is disproportionately concentrated in US data centre construction, chips procurement from TSMC and Samsung, and power grid interconnection, generating a demand shock that interacts with fiscal impulse in ways that complicate Fed policy calibration. The systemic risk is not the failure of any single actor but the correlated repricing that would follow a rate shock, a hyperscaler capex retrenchment or a Treasury auction failure. Any of these would transmit rapidly across the other two channels given the tight interconnection.",
        implication: "The coupling of US debt and hyperscaler capex generates second-order effects that reshape global capital flows and financial market structure. First, dollar-denominated corporate bond issuance from hyperscalers competes with Treasury issuance for the same buyer base, particularly Japanese and European institutional investors, generating spread compression between AAA corporates and sovereign that inverts historical patterns. Second, sustained hyperscaler demand for TSMC leading-node capacity generates concentration risk that Taiwan geopolitics amplifies, with any disruption transmitting immediately into hyperscaler earnings and equity valuations. Third, European institutional investors face a strategic choice between chasing US corporate yield with associated FX risk versus accepting compressed European sovereign yields, generating persistent European insurer duration mismatches. Fourth, any material Fed pivot on rate path generates coupled repricing across sovereign, AAA corporate and AI equity segments that could trigger portfolio-level margin calls in leveraged strategies.",
        evidence: [
          { n: "01", body: "US federal debt trajectory reaches 120 percent of GDP by 2028 under CBO baseline. Interest expense now second-largest budget category. Primary deficits stable at 5-6 percent of GDP with no political mechanism for reduction on horizon.", citations: [{ src: "CBO", date: "Jul 2026", emphasis: true }, { src: "PIIE", date: "Aug 2026" }] },
          { n: "02", body: "Hyperscaler aggregated AI capex 350-400 billion USD in 2026, financed increasingly through debt issuance. Microsoft, Google, Meta, Amazon, Oracle all raising bond volumes at record pace. Competes with Treasury supply for same institutional buyer base.", citations: [{ src: "FT", date: "Aug 2026" }, { src: "CSIS", date: "Jul 2026" }] },
          { n: "03", body: "TSMC leading-node capacity concentration means hyperscaler demand shock transmits to Taiwan risk. Any Strait disruption reprices hyperscaler equity via chip supply expectations, generating correlated shock across seemingly unrelated portfolio positions.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "Bruegel", date: "Aug 2026" }] },
          { n: "04", body: "Fed policy calibration complicated by dual pressure. Fiscal impulse from persistent deficits combined with private-sector capex boom generates inflation pressure that constrains rate cuts even as debt service costs rise.", citations: [{ src: "PIIE", date: "Aug 2026" }] }
        ],
        divergence: "PIIE reads debt path as sustainable given growth; CBO stress scenarios show breach thresholds by 2029.",
        sources: [ {name:"CBO",passages:11},{name:"PIIE",passages:10},{name:"CSIS",passages:9},{name:"FT",passages:6},{name:"Bruegel",passages:5} ],
        topArcs: [
          { pair: "USA - JPN", pol: "aligned", w: 4.7, vol: "M" },
          { pair: "USA - PRC", pol: "complex", w: 4.5, vol: "H" },
          { pair: "USA - TWN", pol: "aligned", w: 4.5, vol: "M" },
          { pair: "USA - KOR", pol: "aligned", w: 4.4, vol: "L" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal path is coupled tension without break; tail toward disorderly repricing is thicker than markets currently price.",
        subtitle: "18-24 month projection of the US debt + hyperscaler capex dynamic across 4 scenarios.",
        thesis: "Four trajectories over 18-24 month horizon.\n\nModal (42%): coupled tension persists. Debt path grinds higher, hyperscaler capex sustained, term premium gradually rises, Fed maintains restrictive stance. No breaking point but cumulative pressure on credit spreads and equity multiples.\n\nRight-tail (26%): disorderly repricing. Failed Treasury auction or hyperscaler capex retrenchment triggers correlated selling across sovereign, corporate and AI equity. Fed intervention required. Regime change in market structure.\n\nLeft-tail (17%): productivity boom validates capex. AI investment generates measurable productivity gains that justify capex intensity, absorbing debt through growth. Soft landing scenario.\n\nUnstable (15%): geopolitical trigger hits Taiwan supply chain during peak capex commitments. Hyperscaler earnings shock combines with debt refinancing stress. Compound crisis.",
        implication: "The consolidation of the modal coupled-tension equilibrium generates effects across global financial architecture. First, European insurers face structural challenge in matching liabilities as US corporate yields exceed European sovereign yields materially, generating pressure to expand USD allocations with associated FX hedging costs. Second, the term premium expansion trajectory persistently underprices tail risk relative to underlying fundamentals, creating conditions for episodic volatility spikes that transmit to European risk assets. Third, the correlation structure between US Treasury, hyperscaler credit and AI equity tightens beyond historical norms, invalidating traditional diversification approaches and requiring active risk management of coupled exposures. Fourth, the Taiwan supply chain becomes the primary channel through which geopolitical events transmit to global financial markets, elevating Strait dossier from regional concern to systemic financial variable.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL",  label: "S1", pct: 17, ci: "12-22%", pol: "blue",      body: "<em>Productivity absorbs capex.</em> AI investment generates measurable productivity gains that justify intensity. Debt-to-GDP stabilises through growth denominator. Soft landing." },
          { code: "S2", tag: "MODAL",      label: "S2", pct: 42, ci: "36-49%", pol: "amber",     body: "<em>Coupled tension persists.</em> Debt path grinds higher, hyperscaler capex sustained, term premium gradually rises. No break but cumulative pressure on credit spreads and equity multiples. Modal for horizon." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 26, ci: "20-32%", pol: "red",       body: "<em>Disorderly repricing.</em> Failed Treasury auction or hyperscaler capex retrenchment triggers correlated selling across sovereign, corporate and AI equity. Fed intervention required. Regime change." },
          { code: "S4", tag: "UNSTABLE",   label: "S4", pct: 15, ci: "10-20%", pol: "dim-amber", body: "<em>Compound crisis via Taiwan.</em> Strait event hits chip supply during peak capex commitments. Hyperscaler earnings shock combines with debt refinancing stress. Full financial crisis dynamics." }
        ],
        latticeCaption: "Each terminal is a coupled US debt + hyperscaler configuration at 24-month horizon; modal band concentrates most weight. Compound crisis tail thicker than markets price.",
        sensitivity: "Most sensitive to <em>Taiwan supply chain event probability</em>: increase moves S4 from 15% to 24%. Second: <em>AI productivity measurable in horizon</em>: strong evidence moves S1 to 28%. Third: <em>Fed communication on debt monetisation</em>: any pivot moves S3 upward.",
        robustness: 3.2, robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 seeds (max delta 8pp). Coupling of two independent trajectories generates higher variance than single-variable scenarios.",
        drivingArcs: [
          { pair: "USA - TWN", desc: "Coupling channel: chip supply", pol: "amber" },
          { pair: "USA - JPN", desc: "Buyer base: Treasury demand",   pol: "green" },
          { pair: "USA - EU",  desc: "Buyer base: European flows",    pol: "amber" },
          { pair: "USA - PRC", desc: "Meta: rivalry drives capex",    pol: "red" }
        ],
        assumptions: [
          "A1: No formal Fed shift on inflation target.",
          "A2: Hyperscaler capex not curtailed by antitrust action.",
          "A3: TSMC operational continuity absent Taiwan event.",
          "A4: US political ability to raise debt ceiling maintained.",
          "A5: No sovereign downgrade shock in horizon."
        ],
        stats: { tier: "Standard", iterations: 178, nodes: 1189, time: "3m 06s", cost: "$0.28" },
        fullReport: {
          narrative: "The modal trajectory unfolds through progressive term premium expansion as Treasury supply meets hyperscaler bond issuance in a compressed buyer pool. Debt-to-GDP grinds higher toward 120% by 2028. Hyperscaler capex is sustained at $350-400bn annually. AI productivity gains materialise partially, insufficient to close the growth-required gap. Fed maintains restrictive stance longer than markets price, generating episodic risk-off phases without triggering full repricing. By H2 2027 the coupled system is at maximum tension without break, with financial market volatility structurally elevated but crisis avoided.",
          keyMoves: [
            "Q4 2026: Hyperscaler bond issuance sets quarterly record.",
            "Q1 2027: 10Y Treasury yield tests 5% amid supply pressure.",
            "Q2 2027: First measurable productivity gains from AI deployment surface.",
            "Q3 2027: Fed signals patience on cuts; term premium expands further.",
            "Q4 2027: Coupled tension persistent, no break but no relief."
          ]
        }
      }
    },

    "us-china-tensions-main": {
      question: "How could US-China strategic tensions on tech and alliances evolve beyond Taiwan over the next 24 months?",
      dossier: "US-China strategic tensions", dossierId: "us-china-tensions", parent: null,
      subgraph: {
        focus: ["USA", "PRC", "NLD", "JPN", "KOR"], peripheral: ["PHL", "AUS", "IND", "TWN"],
        arcs: [
          { s: "USA", t: "PRC", w: 4.9, vol: "H", pol: "complex" },
          { s: "USA", t: "NLD", w: 4.3, vol: "M", pol: "aligned" },
          { s: "USA", t: "JPN", w: 4.8, vol: "M", pol: "aligned" },
          { s: "USA", t: "KOR", w: 4.6, vol: "L", pol: "aligned" },
          { s: "USA", t: "PHL", w: 4.4, vol: "M", pol: "aligned" },
          { s: "USA", t: "AUS", w: 4.7, vol: "L", pol: "aligned" }
        ],
        actorCount: 9, arcCount: 6, passageCount: 46, sourceCount: 5
      },
      evidenceStrength: 4.0, evidenceCaption: "HIGH",
      thinkingSteps: ["Subgraph resolved: 9 actors, 6 arcs","Corpus retrieval: 46 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "US-China tensions have shifted from Taiwan-centric to broad structural competition across tech and alliances.",
        subtitle: "A positioned reading of the strategic rivalry beyond the Strait, over a 24-month horizon.",
        thesis: "The US-China rivalry has evolved from a Taiwan-anchored concern into a diffuse structural competition operating across multiple domains simultaneously. Technology export controls have expanded from advanced semiconductor equipment to include quantum, biotech, additive manufacturing and specific materials. The trilateral coordination with the Netherlands and Japan on ASML and semiconductor equipment holds and is being extended to non-lithography tools. Data flow restrictions target Chinese apps with US user bases, generating incremental decoupling of consumer internet architectures. Alliance-building in the Indo-Pacific proceeds through AUKUS expansion, QUAD-plus configurations, US-Philippines EDCA expansion and Korean posture normalisation. Chinese responses combine domestic industrial policy acceleration through Big Fund cycles, dual-use technology diplomacy with the Global South, and calibrated economic pressure on individual allies. The rivalry has generated a stable pattern of competition below the threshold of direct confrontation, with both sides investing in long-term structural positioning rather than pursuing near-term confrontation. Over the horizon, the modal path is intensified structural competition with periodic tactical de-escalations, generating persistent friction across trade, technology and alliance domains without transitioning to open confrontation.",
        implication: "The consolidation of structural competition generates effects that reshape global technology, capital and alliance architectures. First, semiconductor supply chains reorganise into US-aligned and China-aligned clusters, with corporate strategies bifurcating along lines that persist regardless of specific tariff outcomes. Second, capital flows into US-aligned Indo-Pacific defence industrial base accelerate, generating sustained order flow for Korean, Japanese, Australian and Indian defence contractors. Third, European technology firms face progressive pressure to align with US export controls, generating conflict between commercial interests in Chinese markets and strategic requirements from US customer base. Fourth, Chinese domestic technology investment absorbs progressively larger fiscal capacity, generating trade and macro implications that transmit into currency, commodity and rate markets. Fifth, the alliance architecture in the Indo-Pacific consolidates into a de facto containment structure that constrains Chinese regional options across security, economic and diplomatic dimensions.",
        evidence: [
          { n: "01", body: "Technology export controls have expanded beyond advanced semiconductors to quantum, biotech, additive manufacturing, specific materials. Trilateral US-NLD-JPN coordination holds and extends to non-lithography tools. Structural rather than tactical.", citations: [{ src: "CSIS", date: "Jul 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02", body: "Alliance-building proceeds through AUKUS expansion, QUAD-plus configurations, US-Philippines EDCA expansion, Korean posture normalisation. Multiple simultaneous strands rather than single major move. Cumulative effect substantial.", citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "ISPI", date: "Jul 2026" }] },
          { n: "03", body: "Chinese response combines domestic industrial policy acceleration (Big Fund III+IV), dual-use technology diplomacy with Global South, calibrated economic pressure on individual allies. Consistent pattern below direct confrontation threshold.", citations: [{ src: "MERICS", date: "Aug 2026" }, { src: "Bruegel", date: "Jul 2026" }] },
          { n: "04", body: "Neither side pursuing near-term confrontation. Both investing in long-term structural positioning. Modal path is intensified competition with tactical de-escalations, not escalation to open confrontation.", citations: [{ src: "CSIS", date: "Aug 2026" }] }
        ],
        divergence: "CSIS emphasises alliance-building as decisive; MERICS emphasises Chinese domestic capacity as under-appreciated.",
        sources: [ {name:"CSIS",passages:14},{name:"MERICS",passages:10},{name:"ISPI",passages:8},{name:"Bruegel",passages:8},{name:"FP",passages:6} ],
        topArcs: [
          { pair: "USA - PRC", pol: "complex", w: 4.9, vol: "H" },
          { pair: "USA - JPN", pol: "aligned", w: 4.8, vol: "M" },
          { pair: "USA - AUS", pol: "aligned", w: 4.7, vol: "L" },
          { pair: "USA - KOR", pol: "aligned", w: 4.6, vol: "L" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal is structural competition with tactical de-escalations; genuine detente unlikely, hot conflict outside Taiwan also unlikely.",
        subtitle: "24-month projection of US-China strategic tensions beyond Taiwan across 4 scenarios.",
        thesis: "Four trajectories over 24-month horizon.\n\nModal (49%): structural competition intensifies across tech, alliances, trade with periodic tactical de-escalations preserving working relationship. No breakthrough deals, no direct confrontation. Cumulative effect substantial.\n\nRight-tail (22%): specific escalation event (major sanctions round, alliance treaty crossing threshold, Chinese economic coercion on Western firm) triggers cycle beyond calibrated pattern. Higher friction equilibrium.\n\nLeft-tail (15%): transactional Trump II deal reaches partial detente on select issues (tariffs, TikTok, specific export controls) in exchange for Chinese concessions. Structural competition slowed but not reversed.\n\nUnstable (14%): domestic political trigger in either capital forces posture shift. Chinese economic distress or US election cycle produces discontinuous change in trajectory.",
        implication: "The consolidation of the modal structural-competition equilibrium generates effects that reshape global technology, capital and security architectures over the horizon. First, corporate strategies across technology, defence and adjacent sectors calibrate to a structurally bifurcated global market, with margin implications that persist regardless of specific policy cycles. Second, the buildup of Indo-Pacific defence capabilities generates sustained order flow into a specific set of contractors and countries, reshaping capital allocation flows across the region. Third, European firms and governments face progressive pressure to choose alignment across an expanding list of technology and trade domains, generating cumulative EU-US friction on autonomous strategic capacity. Fourth, Chinese domestic technology investment absorbs progressively larger fiscal and human capital, generating internal economic implications that transmit externally through trade balances and currency flows. Fifth, the alliance architecture consolidates to the point where any subsequent US political shift toward reduction would generate acute crises across multiple regional relationships simultaneously.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL",  label: "S1", pct: 15, ci: "11-19%", pol: "blue",      body: "<em>Transactional detente.</em> Trump II deal on select issues (tariffs, TikTok, specific export controls) in exchange for Chinese concessions. Structural competition slowed but not reversed. Partial pattern." },
          { code: "S2", tag: "MODAL",      label: "S2", pct: 49, ci: "43-56%", pol: "amber",     body: "<em>Structural competition intensifies.</em> Tech export controls expand, alliance-building continues, trade friction sustained. Tactical de-escalations preserve working relationship. Modal for horizon." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 22, ci: "17-28%", pol: "red",       body: "<em>Trigger event escalates.</em> Major sanctions round, alliance treaty crossing threshold, or Chinese coercion on Western firm triggers cycle. Higher friction equilibrium." },
          { code: "S4", tag: "UNSTABLE",   label: "S4", pct: 14, ci: "9-19%",  pol: "dim-amber", body: "<em>Domestic political trigger.</em> Chinese economic distress or US election cycle produces discontinuous shift. Direction depends on specific trigger; uncertainty high." }
        ],
        latticeCaption: "Each terminal is a US-China strategic configuration at 24-month horizon; modal band (structural competition) concentrates most weight. Tail probabilities depend on domestic politics in both capitals.",
        sensitivity: "Most sensitive to <em>Trump II China policy consistency</em>: erratic pattern moves S4 from 14% to 23%. Second: <em>Chinese economic trajectory</em>: sharp slowdown moves S3+S4 collectively higher. Third: <em>alliance coordination events</em>: any high-visibility summit moves S2 higher.",
        robustness: 3.5, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 5 seeds (max delta 6pp). Modal path robust to variation; tails sensitive to political inputs in both capitals.",
        drivingArcs: [
          { pair: "USA - PRC", desc: "Frame: rivalry structure",         pol: "amber" },
          { pair: "USA - JPN", desc: "Anchor: alliance coordination",    pol: "green" },
          { pair: "USA - NLD", desc: "Instrument: export control regime",pol: "green" },
          { pair: "USA - AUS", desc: "Extension: AUKUS commitments",     pol: "green" }
        ],
        assumptions: [
          "A1: Trump II maintains transactional pattern on China.",
          "A2: Trilateral export control regime holds.",
          "A3: No hot conflict in Taiwan Strait in horizon.",
          "A4: Chinese domestic stability maintained.",
          "A5: European alignment with US pressure on China intensifies."
        ],
        stats: { tier: "Standard", iterations: 191, nodes: 1287, time: "3m 15s", cost: "$0.30" },
        fullReport: {
          narrative: "The modal trajectory unfolds through progressive intensification of structural competition across technology, alliance and trade domains. Export controls expand to cover new categories on a roughly quarterly cadence. Alliance-building proceeds through multiple simultaneous strands: AUKUS Pillar Two expansion, US-Philippines EDCA site additions, Korean-Japanese-US trilateral consolidation, QUAD-plus configurations with Vietnam and Indonesia. Chinese responses are calibrated: Big Fund cycles accelerate, Global South technology diplomacy expands, economic pressure applies to specific Western firms without generalised escalation. Tactical de-escalations preserve working channels: episodic high-level meetings, targeted deals on narrow issues, cooperative moves on climate. By H2 2028 the strategic architecture has consolidated into a structurally bifurcated system with cumulative effects on corporate strategy, capital flows and regional security that persist regardless of specific political cycles.",
          keyMoves: [
            "Q4 2026: Export control expansion covers quantum and additive manufacturing.",
            "Q1 2027: AUKUS Pillar Two reaches operational milestones.",
            "Q2 2027: Chinese Big Fund IV announced with expanded scope.",
            "Q3 2027: US-Philippines EDCA site additions completed.",
            "Q4 2027: Alliance architecture consolidates; competition structure locked in."
          ]
        }
      }
    },

    "eu-hybrid-main": {
      question: "How is Russian hybrid pressure on the EU evolving, and can Europe coordinate a response?",
      dossier: "EU hybrid pressure", dossierId: "eu-hybrid", parent: null,
      subgraph: {
        focus: ["RUS", "EU", "DEU", "POL", "GBR"], peripheral: ["FIN", "EST", "FRA", "NLD"],
        arcs: [
          { s: "RUS", t: "EU",  w: 4.3, vol: "H", pol: "hostile" },
          { s: "RUS", t: "DEU", w: 3.9, vol: "H", pol: "hostile" },
          { s: "RUS", t: "POL", w: 4.0, vol: "H", pol: "hostile" },
          { s: "RUS", t: "FIN", w: 3.8, vol: "H", pol: "hostile" },
          { s: "RUS", t: "EST", w: 3.9, vol: "H", pol: "hostile" },
          { s: "EU",  t: "DEU", w: 4.5, vol: "M", pol: "aligned" }
        ],
        actorCount: 9, arcCount: 6, passageCount: 44, sourceCount: 5
      },
      evidenceStrength: 3.7, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: ["Subgraph resolved: 9 actors, 6 arcs","Corpus retrieval: 44 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "Hybrid pressure has scaled beyond European coordination capacity; the gap is now the story.",
        subtitle: "A positioned reading of Russian hybrid campaign against EU and coordination deficit, 12-24 month horizon.",
        thesis: "The Russian hybrid campaign against European Union member states has scaled through 2025-2026 from episodic incidents to a sustained multi-domain programme. Baltic submarine cable and pipeline incidents continue with consistent attribution to Russian shadow fleet and state proxies. Airspace incursions by drones over sensitive infrastructure in Germany, Poland, Baltic states have normalised from probing to routine. Disinformation operations focus on defence-industrial policy debates (armament budgets, conscription, NATO tripwire posture) with coordinated inauthentic behaviour across Telegram, X, TikTok. Arson attacks on logistics chains supporting Ukraine documented in multiple member states. GPS jamming and spoofing persistent across Baltic and North Sea. The European response remains fragmented along national lines. Attribution is technically feasible but politically constrained: member states resist collective attribution because it would require collective response, and collective response mechanisms do not exist at treaty level. The coordination deficit is structural rather than tactical: EU treaties assign primary competence on internal security and intelligence sharing to member states. Institutional architectures built to support hybrid response have produced analysis but not enforcement authority. Moscow is exploiting the asymmetry deliberately, generating continuous strategic cost on European decision-making without ever reaching the threshold that would force coordinated response.",
        implication: "The persistence of the coordination gap generates second-order effects across European security and political architecture. First, frontline states develop bilateral and minilateral response mechanisms that bypass EU institutional architecture, producing effective regional capability but weakening the Union as primary framework and transferring political weight to Nordic-Baltic Eight, Weimar Triangle and ad hoc coalitions. Second, grey-zone activity normalises as permanent feature of European security: incident recurrence without escalation moves them from crisis to baseline, eroding deterrent value of European response postures. Third, sustained exposure to Russian hybrid pressure in the information domain generates polarisation around defence and security questions that maps onto pre-existing political cleavages, strengthening nationalist and Eurosceptic parties. Fourth, American assessments of European willingness to bear security costs are shaped by visible European response to hybrid pressure; fragmented response reinforces Washington's argument for further disengagement.",
        evidence: [
          { n: "01", body: "Baltic submarine cable and pipeline incident pattern continues through 2026 with consistent attribution to Russian shadow fleet and state proxies. Response national and slow. No EU-level joint attribution mechanism materialised despite repeated proposals.", citations: [{ src: "ECFR", date: "Jul 2026", emphasis: true }, { src: "IISS", date: "Aug 2026" }] },
          { n: "02", body: "Airspace incursions by drones over sensitive infrastructure normalised from probing to routine. National responses vary from restrained to aggressive. Lack of unified escalation ladder is itself a signal: seams exploitable.", citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Disinformation operations targeting European elections adapted after platform enforcement improvements. Current campaigns focus on defence-industrial policy debates with coordinated inauthentic behaviour. Attribution technically feasible but politically constrained.", citations: [{ src: "ECFR", date: "Jun 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04", body: "Coordination deficit structural. EU treaties assign primary competence on internal security to member states. Hybrid CoE Helsinki and EEAS StratCom units produce analysis but not enforcement authority. Without treaty change or crisis trigger, deficit persists.", citations: [{ src: "Bruegel", date: "Jul 2026" }] }
        ],
        divergence: "ECFR reads coordination deficit as improvable within existing treaties; IISS sees it as requiring crisis trigger to move.",
        sources: [ {name:"ECFR",passages:13},{name:"IISS",passages:11},{name:"CSIS",passages:9},{name:"ISPI",passages:7},{name:"Bruegel",passages:4} ],
        topArcs: [
          { pair: "EU - DEU",  pol: "aligned", w: 4.5, vol: "M" },
          { pair: "RUS - EU",  pol: "hostile", w: 4.3, vol: "H" },
          { pair: "RUS - POL", pol: "hostile", w: 4.0, vol: "H" },
          { pair: "RUS - EST", pol: "hostile", w: 3.9, vol: "H" },
          { pair: "RUS - DEU", pol: "hostile", w: 3.9, vol: "H" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal is sustained hybrid pressure with fragmented European response; kinetic escalation unlikely but coordination gap self-reinforcing.",
        subtitle: "12-24 month projection of EU hybrid dynamic across 4 scenarios.",
        thesis: "Four trajectories over 12-24 month horizon.\n\nModal (46%): sustained hybrid pressure with fragmented European response. Cable incidents, airspace incursions, disinformation continue at established tempo. National responses remain uncoordinated. Nordic-Baltic minilateral mechanisms strengthen but don't consolidate at EU level.\n\nRight-tail (24%): specific incident forces coordination. Major cable event affecting multiple states simultaneously, or disinformation event with attributable electoral impact, generates political pressure for treaty-level response. Coordination architecture emerges in crisis mode.\n\nLeft-tail (16%): Russian moderation post-Ukraine settlement or leadership transition reduces pressure intensity. European coordination remains fragmented but tempo of incidents drops.\n\nUnstable (14%): escalation to kinetic proxy attack (physical attack on infrastructure attributed to Russian direction). Forces NATO Article 5 consultation. Discontinuous change.",
        implication: "The consolidation of the modal fragmented-response equilibrium generates effects that extend beyond the immediate hybrid domain. First, the bifurcation of European security response into national and minilateral tracks becomes institutional, generating durable capabilities at regional level while weakening EU as strategic actor. Second, the normalisation of grey-zone activity as permanent feature reshapes European political discourse on defence and security, generating persistent electoral effects across member states. Third, the coordination gap becomes exploitable by actors other than Russia, generating precedent for Chinese and other state actors to apply similar techniques. Fourth, American assessments of European autonomous defence capacity are shaped negatively by fragmented response, accelerating US disengagement trajectory. Fifth, corporate operations of European insurers, banks, energy companies and telecommunications firms in exposed geographies face rising operational risk from cumulative hybrid pressure, generating premium and capacity adjustments across affected corridors.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL",  label: "S1", pct: 16, ci: "11-21%", pol: "blue",      body: "<em>Russian moderation.</em> Ukraine settlement or leadership transition reduces pressure intensity. European coordination remains fragmented but tempo of incidents drops. Not resolution, but relief." },
          { code: "S2", tag: "MODAL",      label: "S2", pct: 46, ci: "40-53%", pol: "amber",     body: "<em>Sustained hybrid with fragmented response.</em> Cable incidents, airspace incursions, disinformation continue at established tempo. Nordic-Baltic minilateral mechanisms strengthen. EU-level coordination remains structural gap." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 24, ci: "19-30%", pol: "red",       body: "<em>Incident forces coordination.</em> Major cable event affecting multiple states, or disinformation event with attributable electoral impact, generates political pressure for treaty-level response. Coordination architecture emerges in crisis mode." },
          { code: "S4", tag: "UNSTABLE",   label: "S4", pct: 14, ci: "9-19%",  pol: "dim-amber", body: "<em>Kinetic proxy attack.</em> Physical attack on infrastructure attributed to Russian direction. Forces NATO Article 5 consultation. Discontinuous change in European security posture. Full mobilisation dynamics." }
        ],
        latticeCaption: "Each terminal is EU hybrid-response configuration at 24-month horizon; modal band (sustained pressure, fragmented response) concentrates most weight.",
        sensitivity: "Most sensitive to <em>Ukraine trajectory</em>: settlement or freeze reduces S2-S4 collectively. Second: <em>single high-visibility incident probability</em>: increase moves S3 upward. Third: <em>European Council response capacity to trigger events</em>.",
        robustness: 3.4, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 seeds (max delta 7pp). Modal robust; tails sensitive to specific event realisation.",
        drivingArcs: [
          { pair: "RUS - EU",  desc: "Frame: sustained pressure",       pol: "red" },
          { pair: "EU - DEU",  desc: "Coordination: pivot state",       pol: "amber" },
          { pair: "RUS - POL", desc: "Front line: incident probability",pol: "red" },
          { pair: "RUS - EST", desc: "Front line: incident probability",pol: "red" }
        ],
        assumptions: [
          "A1: EU treaty framework on security competence unchanged in horizon.",
          "A2: Russian shadow fleet operational capacity preserved.",
          "A3: No NATO Article 5 invocation in horizon.",
          "A4: Nordic-Baltic minilateral mechanisms strengthen but don't formalise at EU level.",
          "A5: Trump II European posture consistent with disengagement trajectory."
        ],
        stats: { tier: "Standard", iterations: 175, nodes: 1156, time: "3m 03s", cost: "$0.27" },
        fullReport: {
          narrative: "The modal trajectory unfolds through sustained hybrid pressure at established tempo. Baltic cable and pipeline incidents continue at 2-3 per quarter with consistent attribution but fragmented response. Airspace incursions normalise fully; national responses diverge from restrained to aggressive. Disinformation operations target 2027 electoral cycles in Germany, France, Netherlands, Czech Republic. Nordic-Baltic Eight consolidates joint capabilities on maritime domain awareness, cyber defence, strategic communications. Weimar Triangle strengthens defence coordination. EU-level responses remain analytical and coordination-focused rather than enforcement-capable. By H2 2027 the fragmented-response equilibrium is institutional, with capabilities and gaps both structural.",
          keyMoves: [
            "Q4 2026: Two cable incidents in Baltic within same month.",
            "Q1 2027: German electoral cycle sees documented Russian information operation.",
            "Q2 2027: Nordic-Baltic Eight announces joint maritime domain awareness architecture.",
            "Q3 2027: French electoral cycle sees documented Russian information operation.",
            "Q4 2027: EU-level coordination architecture proposals stall in Council; fragmented equilibrium consolidates."
          ]
        }
      }
    },

    "eu-political-2027-main": {
      question: "How could European political evolution through the 2027-2028 electoral cycle reshape the EU?",
      dossier: "EU political evolution 2027", dossierId: "eu-political-2027", parent: null,
      subgraph: {
        focus: ["DEU", "FRA", "ITA", "EU", "POL"], peripheral: ["ESP", "NLD", "HUN", "CZE"],
        arcs: [
          { s: "DEU", t: "EU",  w: 4.6, vol: "H", pol: "aligned" },
          { s: "FRA", t: "EU",  w: 4.4, vol: "H", pol: "aligned" },
          { s: "ITA", t: "EU",  w: 4.0, vol: "M", pol: "complex" },
          { s: "POL", t: "EU",  w: 3.9, vol: "M", pol: "aligned" },
          { s: "DEU", t: "FRA", w: 4.7, vol: "M", pol: "aligned" },
          { s: "HUN", t: "EU",  w: 3.2, vol: "M", pol: "complex" }
        ],
        actorCount: 9, arcCount: 6, passageCount: 42, sourceCount: 5
      },
      evidenceStrength: 3.6, evidenceCaption: "MEDIUM-HIGH",
      thinkingSteps: ["Subgraph resolved: 9 actors, 6 arcs","Corpus retrieval: 42 passages, 5 sources","Composing positioned answer","Validation on critical arcs"],
      l1Report: {
        title: "The 2027-2028 electoral cycle in Europe is the single largest source of political discontinuity risk on the horizon.",
        subtitle: "A positioned reading of the compressed European electoral calendar and its implications.",
        thesis: "The 2027-2028 window concentrates electoral cycles across a set of European member states whose combined political trajectory determines the direction of EU strategic capacity for the subsequent decade. Germany faces federal elections with the current coalition under sustained fiscal and immigration pressure, with AfD polling at historic highs in eastern Lander and CDU-CSU leadership positioning for return to Chancellery. France faces the 2027 presidential election with Macron term-limited, generating open contest between Rassemblement National consolidation, Melenchon left mobilisation and centre-right restructuring. Italy has legislative elections with Meloni-led coalition seeking renewal against fragmented opposition. Poland faces presidential and potential parliamentary cycles with Tusk-led coalition contested by PiS resurgence. Netherlands, Czech Republic and Austria have parallel cycles that could reinforce or moderate the broader European trajectory. The compressed calendar generates a coordination challenge: no single election is decisive, but the aggregate direction across the set determines EU capacity on defence coordination, fiscal integration, migration policy, climate transition and China policy. The modal outcome is heterogeneous drift with individual member state trajectories cancelling at aggregate EU level, producing continued Commission-led incrementalism without decisive strategic direction. The tail scenarios include coordinated shift toward nationalist governance and coordinated shift toward federalist consolidation, both requiring alignment across at least three of the pivotal cycles.",
        implication: "The concentration of electoral risk in the 2027-2028 window generates second-order effects that extend beyond the immediate political outcomes and reshape European strategic and financial architecture. First, sovereign spreads across the Eurozone become progressively sensitive to individual electoral cycles, with pricing anticipating rather than reacting to outcomes. This generates volatility in Italian, French and Belgian sovereign markets that transmits directly to European insurer balance sheets and duration matching. Second, defence procurement decisions face delay or acceleration depending on individual electoral outcomes, generating uncertainty for European defence contractors and complicating sustained industrial policy coordination. Third, the EU regulatory pipeline (AI Act implementation, Green Deal delivery, capital markets union) faces execution risk across multiple simultaneous member state political transitions, generating uncertainty for corporate strategy across sectors. Fourth, the transatlantic relationship becomes more difficult to manage as European counterpart identity shifts across the cycle, requiring US administrations to navigate multiple simultaneous political transitions rather than a stable European interlocutor.",
        evidence: [
          { n: "01", body: "German federal election in 2025 was contested; next scheduled 2029 but coalition stability under sustained pressure. AfD polling at historic highs in eastern Lander. Fiscal pressure from defence spending and pension reform. Coalition arithmetic fragile.", citations: [{ src: "Bruegel", date: "Aug 2026", emphasis: true }, { src: "ECFR", date: "Jul 2026" }] },
          { n: "02", body: "France 2027 presidential election with Macron term-limited. Rassemblement National positioning for consolidation. Left mobilisation via Melenchon. Centre-right restructuring. Outcome open with three-way pattern possible.", citations: [{ src: "ECFR", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Italy legislative cycle with Meloni-led coalition seeking renewal. Fragmented opposition (PD, M5S, Terzo Polo) faces coordination challenge. Meloni pattern of European moderation combined with domestic nationalism holds.", citations: [{ src: "ISPI", date: "Jul 2026" }] },
          { n: "04", body: "Poland presidential and potential parliamentary cycles. Tusk-led coalition contested by PiS resurgence. Judicial reforms and PiS-era institutional legacies contested at Constitutional Tribunal level.", citations: [{ src: "ECFR", date: "Jul 2026" }] }
        ],
        divergence: "Bruegel weights German coalition stability as most consequential single variable; ECFR emphasises French cycle.",
        sources: [ {name:"Bruegel",passages:11},{name:"ECFR",passages:10},{name:"ISPI",passages:9},{name:"CSIS",passages:7},{name:"FP",passages:5} ],
        topArcs: [
          { pair: "DEU - FRA", pol: "aligned", w: 4.7, vol: "M" },
          { pair: "DEU - EU",  pol: "aligned", w: 4.6, vol: "H" },
          { pair: "FRA - EU",  pol: "aligned", w: 4.4, vol: "H" },
          { pair: "ITA - EU",  pol: "complex", w: 4.0, vol: "M" }
        ],
        cost: "$0.02", composedAt: "10:26"
      },
      dtReport: {
        title: "Modal path is heterogeneous drift with cycles cancelling at EU level; tails require coordinated shift across at least three pivotal cycles.",
        subtitle: "18-24 month projection of European political evolution across 4 scenarios.",
        thesis: "Four trajectories over 18-24 month horizon.\n\nModal (44%): heterogeneous drift. Individual member state cycles produce mixed outcomes that cancel at aggregate EU level. Continued Commission-led incrementalism without decisive strategic direction. Franco-German axis under stress but functional.\n\nRight-tail (25%): coordinated nationalist shift. RN victory in France combined with German coalition collapse and PiS return in Poland shifts EU toward intergovernmentalism, defence spending under pressure, migration hardening, climate delivery slowed.\n\nLeft-tail (17%): federalist consolidation. Stable German coalition + centrist French outcome + Tusk consolidation in Poland generates window for treaty amendment discussions, defence integration, fiscal capacity expansion.\n\nUnstable (14%): asymmetric shock in one pivotal cycle. Single major shift (e.g. RN victory) without corresponding movements elsewhere generates acute EU-level crisis without stable new equilibrium.",
        implication: "The consolidation of the modal heterogeneous-drift equilibrium generates effects that extend beyond the immediate political outcomes and reshape European strategic architecture over the horizon. First, the sovereign spread structure across the Eurozone reflects progressive election-cycle risk pricing, with volatility persistent even under stable modal outcomes. Second, European defence and industrial policy continues under Commission leadership but without member state strategic backing, generating execution challenges that undermine cumulative capability building. Third, the political capacity for major EU-level decisions on treaty amendment, fiscal capacity expansion or defence integration is postponed to post-cycle period, generating a two-year period of strategic drift. Fourth, corporate strategy across European multinationals prices political discontinuity risk into location decisions, with observable effects on capex allocation across member states. Fifth, non-European actors, particularly the US, UK, China and Russia, calibrate their European engagement to expected post-cycle configurations, generating strategic behaviour that itself shapes the cycle outcomes.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL",  label: "S1", pct: 17, ci: "12-22%", pol: "blue",      body: "<em>Federalist consolidation window.</em> Stable German coalition + centrist French + Tusk consolidation generates window for treaty amendment discussions, defence integration, fiscal capacity expansion. Requires alignment across three pivotal cycles." },
          { code: "S2", tag: "MODAL",      label: "S2", pct: 44, ci: "38-51%", pol: "amber",     body: "<em>Heterogeneous drift.</em> Individual member state cycles produce mixed outcomes that cancel at aggregate EU level. Commission-led incrementalism continues without decisive strategic direction. Franco-German axis functional but stressed." },
          { code: "S3", tag: "RIGHT TAIL", label: "S3", pct: 25, ci: "20-31%", pol: "red",       body: "<em>Coordinated nationalist shift.</em> RN victory in France + German coalition collapse + PiS return in Poland. EU shifts toward intergovernmentalism, defence spending under pressure, migration hardening, climate delivery slowed." },
          { code: "S4", tag: "UNSTABLE",   label: "S4", pct: 14, ci: "9-19%",  pol: "dim-amber", body: "<em>Asymmetric shock.</em> Single major shift (e.g. RN victory) without corresponding movements elsewhere generates acute EU-level crisis without stable new equilibrium. High volatility phase." }
        ],
        latticeCaption: "Each terminal is EU political configuration at 24-month horizon; modal band (drift) concentrates most weight but tails have material probability due to multiple pivotal cycles.",
        sensitivity: "Most sensitive to <em>French presidential outcome</em>: RN victory single most consequential outcome across scenarios. Second: <em>German coalition stability</em>: collapse moves S3+S4 collectively higher. Third: <em>Polish presidential and parliamentary cycles</em>.",
        robustness: 3.1, robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 seeds (max delta 8pp). Multiple pivotal cycles generate higher variance than single-country scenarios; interactions non-linear.",
        drivingArcs: [
          { pair: "DEU - FRA", desc: "Anchor: axis stability",         pol: "amber" },
          { pair: "DEU - EU",  desc: "Pivot: German capacity",         pol: "amber" },
          { pair: "FRA - EU",  desc: "Pivot: French direction",        pol: "amber" },
          { pair: "ITA - EU",  desc: "Modifier: Italian moderation",   pol: "amber" }
        ],
        assumptions: [
          "A1: Electoral cycles proceed on scheduled calendars.",
          "A2: No major exogenous shock (recession, security crisis) disrupts cycle.",
          "A3: EU institutional structures unchanged in horizon.",
          "A4: European Parliament composition post-2024 remains functional coalition.",
          "A5: No sovereign debt crisis triggers technocratic government interventions."
        ],
        stats: { tier: "Standard", iterations: 172, nodes: 1128, time: "2m 58s", cost: "$0.26" },
        fullReport: {
          narrative: "The modal trajectory unfolds through progressive individual electoral cycles producing heterogeneous outcomes that cancel at aggregate EU level. German coalition survives 2027 budget cycle with sustained internal stress. French presidential cycle produces three-way contest with centrist candidate consolidating in runoff against RN. Italian cycle returns Meloni coalition with reduced margin. Polish cycles preserve Tusk coalition with contested legitimacy. Netherlands and Czech cycles reinforce center-right rather than nationalist direction. Aggregate EU direction remains Commission-led incrementalism with Franco-German axis under stress but functional. Treaty amendment discussions postponed. Defence spending sustained but coordination challenges persist. By H2 2028 the political architecture has consolidated the drift pattern into structural feature, with strategic direction postponed to post-2029 cycle.",
          keyMoves: [
            "Q4 2026: German 2027 budget compromise reached; coalition preserved.",
            "Q1 2027: French presidential campaign consolidates three-way pattern.",
            "Q2 2027: French runoff second round; centrist candidate wins.",
            "Q3 2027: Italian election returns Meloni coalition with reduced margin.",
            "Q4 2027: Polish presidential cycle preserves Tusk coalition.",
            "H1 2028: Post-cycle European Council preserves incrementalist trajectory."
          ]
        }
      }
    },

  },

  insurance: {

    profile: {
      name: "European Composite Insurer",
      description: "Mid-size composite (Life + P&C) with EU home bias, EEA-heavy exposure, GWP 800m, AUM 5.0bn",
      aum: 5000,
      gwp: 800
    },

    portfolio: {
      investments: [
        { id: "inv01", assetClass: "Government Bond", issuer: "BTP Italia 10Y",        country: "ITA", sector: "Sovereign",       mv: 800, duration: 8.4, rating: "BBB",  ccy: "EUR" },
        { id: "inv02", assetClass: "Government Bond", issuer: "Bund 10Y",              country: "DEU", sector: "Sovereign",       mv: 700, duration: 8.7, rating: "AAA",  ccy: "EUR" },
        { id: "inv03", assetClass: "Government Bond", issuer: "OAT France 10Y",        country: "FRA", sector: "Sovereign",       mv: 500, duration: 8.6, rating: "AA-",  ccy: "EUR" },
        { id: "inv04", assetClass: "Government Bond", issuer: "Bonos Spain 10Y",       country: "ESP", sector: "Sovereign",       mv: 400, duration: 8.5, rating: "A",    ccy: "EUR" },
        { id: "inv05", assetClass: "Government Bond", issuer: "US Treasury 10Y",       country: "USA", sector: "Sovereign",       mv: 400, duration: 8.6, rating: "AAA",  ccy: "USD" },
        { id: "inv06", assetClass: "Government Bond", issuer: "UK Gilts 10Y",          country: "GBR", sector: "Sovereign",       mv: 200, duration: 8.5, rating: "AA",   ccy: "GBP" },
        { id: "inv07", assetClass: "Corporate Bond",  issuer: "Enel bond 5Y",          country: "ITA", sector: "Utilities",       mv: 250, duration: 4.6, rating: "BBB+", ccy: "EUR" },
        { id: "inv08", assetClass: "Corporate Bond",  issuer: "Volkswagen bond 5Y",    country: "DEU", sector: "Auto",            mv: 200, duration: 4.4, rating: "A-",   ccy: "EUR" },
        { id: "inv09", assetClass: "Corporate Bond",  issuer: "TotalEnergies bond 5Y", country: "FRA", sector: "Energy",          mv: 200, duration: 4.5, rating: "A+",   ccy: "EUR" },
        { id: "inv10", assetClass: "Corporate Bond",  issuer: "BNP Paribas senior 5Y", country: "FRA", sector: "Financials",      mv: 200, duration: 4.3, rating: "A+",   ccy: "EUR" },
        { id: "inv11", assetClass: "Corporate Bond",  issuer: "Unicredit senior 5Y",   country: "ITA", sector: "Financials",      mv: 150, duration: 4.4, rating: "BBB",  ccy: "EUR" },
        { id: "inv12", assetClass: "Equity",          issuer: "ETF Eurostoxx 50",      country: "EU",  sector: "Diversified",     mv: 200, duration: null, rating: null,   ccy: "EUR" },
        { id: "inv13", assetClass: "Equity",          issuer: "ETF S&P 500",           country: "USA", sector: "Diversified",     mv: 150, duration: null, rating: null,   ccy: "USD" },
        { id: "inv14", assetClass: "Equity",          issuer: "ETF MSCI Emerging",     country: "EM",  sector: "Diversified",     mv: 80,  duration: null, rating: null,   ccy: "USD" },
        { id: "inv15", assetClass: "Equity",          issuer: "ASML (single line)",    country: "NLD", sector: "Semi equipment",  mv: 40,  duration: null, rating: null,   ccy: "EUR" },
        { id: "inv16", assetClass: "Equity",          issuer: "TSMC ADR",              country: "TWN", sector: "Semiconductors",  mv: 30,  duration: null, rating: null,   ccy: "USD" },
        { id: "inv17", assetClass: "Real Estate",     issuer: "Milano offices",        country: "ITA", sector: "Office",          mv: 150, duration: null, rating: null,   ccy: "EUR" },
        { id: "inv18", assetClass: "Real Estate",     issuer: "Frankfurt logistics",   country: "DEU", sector: "Logistics",       mv: 120, duration: null, rating: null,   ccy: "EUR" },
        { id: "inv19", assetClass: "Real Estate",     issuer: "Warsaw retail",         country: "POL", sector: "Retail",          mv: 80,  duration: null, rating: null,   ccy: "EUR" },
        { id: "inv20", assetClass: "Alternatives",    issuer: "EU infra fund",         country: "EU",  sector: "Infrastructure",  mv: 100, duration: null, rating: null,   ccy: "EUR" },
        { id: "inv21", assetClass: "Alternatives",    issuer: "European private debt", country: "EU",  sector: "Private debt",    mv: 50,  duration: null, rating: null,   ccy: "EUR" }
      ],
      pandc: [
        { id: "pol01", lob: "Property Commercial",  country: "ITA", sumInsured: 450, deductible: 5, gwpShare: 90,  wordingExclusions: { war: true,  terrorism: "sublimit 20m", cyber: false, sanctions: true } },
        { id: "pol02", lob: "Property Commercial",  country: "DEU", sumInsured: 380, deductible: 4, gwpShare: 75,  wordingExclusions: { war: true,  terrorism: "sublimit 15m", cyber: false, sanctions: true } },
        { id: "pol03", lob: "Property Commercial",  country: "POL", sumInsured: 220, deductible: 3, gwpShare: 45,  wordingExclusions: { war: true,  terrorism: "sublimit 10m", cyber: false, sanctions: true } },
        { id: "pol04", lob: "Marine Cargo",         country: "Suez route",     sumInsured: 180, deductible: 0.5, gwpShare: 40, wordingExclusions: { war: "LMA5567", terrorism: "included", cyber: true,  sanctions: true } },
        { id: "pol05", lob: "Marine Cargo",         country: "Hormuz route",   sumInsured: 120, deductible: 0.5, gwpShare: 30, wordingExclusions: { war: "LMA5567", terrorism: "included", cyber: true,  sanctions: true } },
        { id: "pol06", lob: "Marine Cargo",         country: "Black Sea",      sumInsured: 90,  deductible: 0.5, gwpShare: 25, wordingExclusions: { war: "LMA5567", terrorism: "included", cyber: true,  sanctions: true } },
        { id: "pol07", lob: "PV & Terrorism",       country: "East Europe retail", sumInsured: 60, deductible: 2, gwpShare: 20, wordingExclusions: { war: false, terrorism: false, cyber: true, sanctions: false } },
        { id: "pol08", lob: "PV & Terrorism",       country: "North Africa energy",sumInsured: 80, deductible: 3, gwpShare: 28, wordingExclusions: { war: false, terrorism: false, cyber: true, sanctions: false } },
        { id: "pol09", lob: "Trade Credit",         country: "Turkey buyers",  sumInsured: 40, deductible: 1, gwpShare: 15, wordingExclusions: { war: true, terrorism: true, cyber: true, sanctions: true } },
        { id: "pol10", lob: "Trade Credit",         country: "Egypt buyers",   sumInsured: 25, deductible: 0.5, gwpShare: 10, wordingExclusions: { war: true, terrorism: true, cyber: true, sanctions: true } },
        { id: "pol11", lob: "Cyber",                country: "EU mid-corporate", sumInsured: 55, deductible: 1, gwpShare: 30, wordingExclusions: { war: "LMA5400", terrorism: "included", cyber: false, sanctions: true } },
        { id: "pol12", lob: "Aviation Hull & Liab", country: "EU fleet Asia routes", sumInsured: 200, deductible: 5, gwpShare: 60, wordingExclusions: { war: true, terrorism: "sublimit 30m", cyber: true, sanctions: true } },
        { id: "pol13", lob: "Motor Fleet",          country: "DEU/ITA/ESP",    sumInsured: 300, deductible: 2, gwpShare: 120, wordingExclusions: { war: true, terrorism: true, cyber: true, sanctions: true } },
        { id: "pol14", lob: "Health",               country: "ITA/ESP",        sumInsured: 250, deductible: 0.3, gwpShare: 90, wordingExclusions: { war: true, terrorism: true, cyber: true, sanctions: true } },
        { id: "pol15", lob: "Business Interruption",country: "EU manufacturing",sumInsured: 180, deductible: 3, gwpShare: 55, wordingExclusions: { war: true, terrorism: "sublimit 20m", cyber: true, sanctions: true } }
      ],
      operations: [
        { id: "op01", type: "Head office",  location: "Milano",     country: "ITA", riskLevel: "low",     staff: 850, criticality: "high" },
        { id: "op02", type: "Regional HQ",  location: "Roma",       country: "ITA", riskLevel: "low",     staff: 320, criticality: "medium" },
        { id: "op03", type: "Regional HQ",  location: "Frankfurt",  country: "DEU", riskLevel: "low",     staff: 280, criticality: "medium" },
        { id: "op04", type: "Sales office", location: "Warsaw",     country: "POL", riskLevel: "medium",  staff: 90,  criticality: "medium" },
        { id: "op05", type: "Sales office", location: "Istanbul",   country: "TUR", riskLevel: "high",    staff: 65,  criticality: "low" },
        { id: "op06", type: "Sales office", location: "Beirut",     country: "LBN", riskLevel: "critical",staff: 30,  criticality: "low" },
        { id: "op07", type: "Rep office",   location: "Kiev",       country: "UKR", riskLevel: "critical",staff: 12,  criticality: "low" },
        { id: "op08", type: "Data center primary",   location: "Dublin",  country: "IRL", riskLevel: "low",     staff: 45,  criticality: "critical" },
        { id: "op09", type: "Data center secondary", location: "Frankfurt", country: "DEU", riskLevel: "low",  staff: 40,  criticality: "critical" }
      ]
    },

    scenarioImpact: {
      "ukraine-main": {
        scenarioNarrative: "Compressed defensive posture in Ukraine holds; territory preserved, initiative ceded to Russia, recovery pushed to 2028",
        scenarioFamily: "Ukraine / Russia / NATO",
        scenarioLabel: "Ukraine attrition dossier",
        horizonMonths: 12,
        maturationByHorizon: { "0-12": "materialising", "12-24": "consolidated", ">24": "stable" },
        impact: {
          investments: {
            totalEur: -180,
            drivers: [
              { positionId: "inv01", deltaEur: -35, rationale: "BTP spread widening on EU defence spending pressure" },
              { positionId: "inv02", deltaEur: -20, rationale: "Bund yield rise on German defence commitments" },
              { positionId: "inv08", deltaEur: -25, rationale: "Volkswagen exposure to European supply chain stress" },
              { positionId: "inv12", deltaEur: -40, rationale: "Eurostoxx correction on prolonged conflict" },
              { positionId: "inv18", deltaEur: -10, rationale: "German logistics real estate softer" },
              { positionId: "inv19", deltaEur: -50, rationale: "Warsaw retail directly exposed to regional risk premium" }
            ]
          },
          pandc: {
            totalEur: -75,
            drivers: [
              { policyId: "pol04", deltaEur: -15, rationale: "Marine Suez route: higher claims frequency, LMA5567 partial coverage" },
              { policyId: "pol06", deltaEur: -30, rationale: "Marine Black Sea: severe elevated frequency, sub-limits reached" },
              { policyId: "pol13", deltaEur: -20, rationale: "Motor Fleet: parts scarcity inflates claims cost by 15%" },
              { policyId: "pol15", deltaEur: -10, rationale: "BI Manufacturing: supply chain disruption claims" }
            ]
          },
          operations: {
            totalEur: -8,
            drivers: [
              { opId: "op07", deltaEur: -5, rationale: "Kiev office: sustained operational disruption" },
              { opId: "op04", deltaEur: -3, rationale: "Warsaw office: regional stress premium" }
            ]
          }
        },
        redFlags: [
          { id: "rf-ukr-1", label: "German 2027 budget vote outcome",                    threshold: "Ukraine envelope <50bn EUR",     status: "amber",  currentValue: "under negotiation" },
          { id: "rf-ukr-2", label: "US Supplemental status in Congress",                  threshold: "Passed by Q2 2027",              status: "amber",  currentValue: "delayed, uncertain" },
          { id: "rf-ukr-3", label: "SAMP/T-NG delivery cadence",                          threshold: "On schedule",                     status: "amber",  currentValue: "3-month slippage" },
          { id: "rf-ukr-4", label: "Russian shadow fleet interdictions rate",             threshold: ">10 per month",                   status: "green",  currentValue: "6/month" },
          { id: "rf-ukr-5", label: "Ukrainian mobilisation shortfall vs targets",         threshold: "<15% shortfall",                  status: "red",    currentValue: "22% shortfall" }
        ]
      },
      "taiwan-main": {
        scenarioNarrative: "PLA sustains blockade rehearsals below kinetic threshold; contiguous zone activity normalises, no invasion",
        scenarioFamily: "Taiwan Strait / Chip supply chain",
        scenarioLabel: "Taiwan blockade rehearsal dossier",
        horizonMonths: 24,
        maturationByHorizon: { "0-12": "escalating", "12-24": "critical", ">24": "structural" },
        impact: {
          investments: {
            totalEur: -220,
            drivers: [
              { positionId: "inv13", deltaEur: -45, rationale: "S&P 500 correction on AI supply chain risk repricing" },
              { positionId: "inv14", deltaEur: -35, rationale: "EM equity broadly hit; Asia component leads decline" },
              { positionId: "inv16", deltaEur: -20, rationale: "TSMC ADR directly exposed to Strait risk" },
              { positionId: "inv15", deltaEur: -8,  rationale: "ASML pressure on China revenue plus Taiwan supply worry" },
              { positionId: "inv05", deltaEur: 15,  rationale: "UST 10Y benefits from flight-to-quality flows" },
              { positionId: "inv02", deltaEur: 12,  rationale: "Bund benefits partially from flight-to-quality" },
              { positionId: "inv12", deltaEur: -60, rationale: "Eurostoxx: broad market correction on Asia contagion" },
              { positionId: "inv08", deltaEur: -30, rationale: "Volkswagen: EU auto exposed to chip supply disruption" },
              { positionId: "inv07", deltaEur: -18, rationale: "Enel: utility exposure to energy price shock" },
              { positionId: "inv17", deltaEur: -12, rationale: "Milano offices: broader risk-off in EU real estate" },
              { positionId: "inv20", deltaEur: -19, rationale: "EU infrastructure fund: broader correction" }
            ]
          },
          pandc: {
            totalEur: -95,
            drivers: [
              { policyId: "pol12", deltaEur: -40, rationale: "Aviation Hull & Liab Asia routes: rerouting costs, hull risk elevated" },
              { policyId: "pol04", deltaEur: -20, rationale: "Marine Cargo Suez: Asia trade disruption spillover" },
              { policyId: "pol15", deltaEur: -25, rationale: "BI Manufacturing: chip supply-driven claims" },
              { policyId: "pol13", deltaEur: -10, rationale: "Motor Fleet: parts scarcity impact from Asia disruption" }
            ]
          },
          operations: {
            totalEur: -2,
            drivers: [
              { opId: "op03", deltaEur: -2, rationale: "Frankfurt HQ: elevated cyber threat during Asia crisis" }
            ]
          }
        },
        redFlags: [
          { id: "rf-twn-1", label: "PLA off-calendar exercise count last 90 days",       threshold: ">2",                             status: "amber",  currentValue: "1" },
          { id: "rf-twn-2", label: "TSMC Arizona Phase 3 delivery slippage",              threshold: ">6 months",                       status: "green",  currentValue: "3 months" },
          { id: "rf-twn-3", label: "Japan white paper language on Taiwan",                threshold: "operational commitment",          status: "amber",  currentValue: "substantive" },
          { id: "rf-twn-4", label: "US arms transfer categorization language",            threshold: "offensive framing",               status: "green",  currentValue: "defensive framing" },
          { id: "rf-twn-5", label: "PLA contiguous zone incursions frequency",            threshold: ">50 per month",                   status: "amber",  currentValue: "42/month" },
          { id: "rf-twn-6", label: "Taiwan 2028 election polling: DPP-independence stance",threshold: ">45% consolidation",              status: "green",  currentValue: "38%" }
        ]
      },
      "iran-main": {
        scenarioNarrative: "US posture holds; Bessent economic pressure on Iran-China oil trade; Israel operates within managed rivalry",
        scenarioFamily: "Iran post-Epic Fury",
        scenarioLabel: "Iran post-Epic Fury dossier",
        horizonMonths: 12,
        maturationByHorizon: { "0-12": "active", "12-24": "recalibration", ">24": "new equilibrium" },
        impact: {
          investments: {
            totalEur: -95,
            drivers: [
              { positionId: "inv09", deltaEur: -35, rationale: "TotalEnergies: oil price volatility, Iranian production disruption" },
              { positionId: "inv07", deltaEur: -12, rationale: "Enel: energy input cost spike" },
              { positionId: "inv13", deltaEur: -20, rationale: "S&P 500: geopolitical premium in energy and defence" },
              { positionId: "inv14", deltaEur: -18, rationale: "EM equity: broader risk-off; MENA weakness" },
              { positionId: "inv12", deltaEur: -25, rationale: "Eurostoxx: energy cost pass-through concerns" },
              { positionId: "inv05", deltaEur: 15,  rationale: "UST benefits from flight-to-quality" }
            ]
          },
          pandc: {
            totalEur: -110,
            drivers: [
              { policyId: "pol05", deltaEur: -45, rationale: "Marine Hormuz: direct exposure; frequency and severity spike" },
              { policyId: "pol08", deltaEur: -30, rationale: "PV North Africa energy: infrastructure attacks risk" },
              { policyId: "pol04", deltaEur: -15, rationale: "Marine Suez: Iran-linked disruption in Red Sea" },
              { policyId: "pol10", deltaEur: -12, rationale: "Trade Credit Egypt: buyer default risk elevated" },
              { policyId: "pol09", deltaEur: -8,  rationale: "Trade Credit Turkey: regional spillover" }
            ]
          },
          operations: {
            totalEur: -6,
            drivers: [
              { opId: "op06", deltaEur: -4, rationale: "Beirut office: regional stress" },
              { opId: "op05", deltaEur: -2, rationale: "Istanbul office: regional stress" }
            ]
          }
        },
        redFlags: [
          { id: "rf-irn-1", label: "US 5th Fleet posture in Gulf",                        threshold: "reduced presence",                status: "green",  currentValue: "rotation continues" },
          { id: "rf-irn-2", label: "Bessent sanctions program on Chinese refiners",       threshold: "active enforcement",              status: "red",    currentValue: "expanding" },
          { id: "rf-irn-3", label: "Israeli independent strike frequency on Iranian assets", threshold: ">1 per quarter",              status: "amber",  currentValue: "1 in Q3" },
          { id: "rf-irn-4", label: "Iran-Oman Hormuz corridor negotiations",              threshold: "signed agreement",                status: "amber",  currentValue: "technical talks" },
          { id: "rf-irn-5", label: "PRC-Iran oil purchase volume vs 2024 baseline",       threshold: ">150% baseline",                  status: "red",    currentValue: "168%" }
        ]
      },
      "eu-china-trade-main": {
        scenarioNarrative: "Managed friction structural; incremental tariff escalation on defined sectors, aggregate trade preserved",
        scenarioFamily: "EU-China trade friction",
        scenarioLabel: "EU-China trade friction dossier",
        horizonMonths: 24,
        maturationByHorizon: { "0-12": "escalating", "12-24": "structural", ">24": "consolidated" },
        impact: {
          investments: {
            totalEur: -130,
            drivers: [
              { positionId: "inv08", deltaEur: -35, rationale: "Volkswagen: retaliation targets German auto exports to China" },
              { positionId: "inv15", deltaEur: -12, rationale: "ASML: export licensing pressure sustained" },
              { positionId: "inv09", deltaEur: -8,  rationale: "TotalEnergies: PRC gas import concerns" },
              { positionId: "inv12", deltaEur: -40, rationale: "Eurostoxx: broad correction on trade war expectations" },
              { positionId: "inv14", deltaEur: -20, rationale: "EM equity: PRC weight in indices" },
              { positionId: "inv07", deltaEur: -10, rationale: "Enel: Chinese solar/battery inputs cost pressure" },
              { positionId: "inv17", deltaEur: -5,  rationale: "Milano offices: broader risk sentiment" }
            ]
          },
          pandc: {
            totalEur: -55,
            drivers: [
              { policyId: "pol04", deltaEur: -20, rationale: "Marine Cargo Suez: EU-China trade volumes shift" },
              { policyId: "pol15", deltaEur: -20, rationale: "BI Manufacturing: EU firms in supply chain disputes" },
              { policyId: "pol12", deltaEur: -10, rationale: "Aviation cargo: Asia route disruption from trade tensions" },
              { policyId: "pol13", deltaEur: -5,  rationale: "Motor Fleet: input cost pressure" }
            ]
          },
          operations: {
            totalEur: 0,
            drivers: []
          }
        },
        redFlags: [
          { id: "rf-euchn-1", label: "EU medical devices duties determination",           threshold: "duties imposed >10%",            status: "amber",  currentValue: "investigation phase" },
          { id: "rf-euchn-2", label: "PRC rare earth export licensing tightness",         threshold: "additional restrictions",         status: "red",    currentValue: "tightening" },
          { id: "rf-euchn-3", label: "German coalition China policy divergence (SPD-CDU)",threshold: "public disagreement",             status: "amber",  currentValue: "quiet tension" },
          { id: "rf-euchn-4", label: "Anti-Coercion Instrument activation",               threshold: "any activation",                  status: "green",  currentValue: "standby" },
          { id: "rf-euchn-5", label: "Chinese OEM investment in EU auto plants",          threshold: ">3 new announcements/quarter",    status: "amber",  currentValue: "2/quarter" }
        ]
      },
      "us-debt-hyperscalers-main": {
        scenarioNarrative: "Coupled tension persists; term premium expands, hyperscaler capex sustained, no break but cumulative pressure",
        scenarioFamily: "US debt & hyperscaler capex",
        scenarioLabel: "US debt & hyperscalers coupled fragility dossier",
        horizonMonths: 24,
        maturationByHorizon: { "0-12": "building", "12-24": "tension peak", ">24": "resolution or break" },
        impact: {
          investments: {
            totalEur: -165,
            drivers: [
              { positionId: "inv05", deltaEur: -25, rationale: "UST 10Y: term premium expansion, mark-to-market loss" },
              { positionId: "inv13", deltaEur: -55, rationale: "S&P 500: AI equity concentration reprices lower" },
              { positionId: "inv14", deltaEur: -20, rationale: "EM equity: USD strength and rate impact" },
              { positionId: "inv15", deltaEur: -10, rationale: "ASML: hyperscaler capex trajectory reprices" },
              { positionId: "inv16", deltaEur: -8,  rationale: "TSMC: coupled exposure" },
              { positionId: "inv12", deltaEur: -25, rationale: "Eurostoxx: correlation with US rate move" },
              { positionId: "inv10", deltaEur: -8,  rationale: "BNP Paribas: European bank spread widening" },
              { positionId: "inv11", deltaEur: -8,  rationale: "Unicredit: peripheral bank spread pressure" },
              { positionId: "inv20", deltaEur: -6,  rationale: "EU infra fund: broader repricing" }
            ]
          },
          pandc: {
            totalEur: -25,
            drivers: [
              { policyId: "pol11", deltaEur: -15, rationale: "Cyber: attacks on financial sector during volatility spike" },
              { policyId: "pol15", deltaEur: -10, rationale: "BI Manufacturing: rate shock hits EU firms" }
            ]
          },
          operations: {
            totalEur: 0,
            drivers: []
          }
        },
        redFlags: [
          { id: "rf-usdb-1", label: "10Y Treasury yield vs 6M average",                   threshold: ">50bp expansion",                status: "amber",  currentValue: "+32bp" },
          { id: "rf-usdb-2", label: "Hyperscaler aggregated quarterly bond issuance",     threshold: ">100bn USD/quarter",              status: "red",    currentValue: "112bn Q3" },
          { id: "rf-usdb-3", label: "TSMC leading-node utilization rate",                 threshold: ">95%",                            status: "red",    currentValue: "97%" },
          { id: "rf-usdb-4", label: "Fed communication on debt monetisation",             threshold: "any pivot",                       status: "green",  currentValue: "no signal" },
          { id: "rf-usdb-5", label: "Japan life insurers USD flows",                      threshold: "net outflow",                     status: "amber",  currentValue: "reduced inflow" }
        ]
      },
      "us-china-tensions-main": {
        scenarioNarrative: "Structural competition intensifies across tech, alliances, trade with periodic tactical de-escalations",
        scenarioFamily: "US-China strategic tensions",
        scenarioLabel: "US-China strategic tensions dossier",
        horizonMonths: 24,
        maturationByHorizon: { "0-12": "active", "12-24": "structural", ">24": "consolidated" },
        impact: {
          investments: {
            totalEur: -85,
            drivers: [
              { positionId: "inv15", deltaEur: -12, rationale: "ASML: sustained export control pressure" },
              { positionId: "inv13", deltaEur: -25, rationale: "S&P 500: rivalry uncertainty premium" },
              { positionId: "inv14", deltaEur: -22, rationale: "EM equity: PRC weight; regional bifurcation" },
              { positionId: "inv08", deltaEur: -12, rationale: "Volkswagen: EU-US alignment pressures China exports" },
              { positionId: "inv12", deltaEur: -10, rationale: "Eurostoxx: broader sentiment" },
              { positionId: "inv16", deltaEur: -4,  rationale: "TSMC: coupled to broader tensions" }
            ]
          },
          pandc: {
            totalEur: -35,
            drivers: [
              { policyId: "pol12", deltaEur: -15, rationale: "Aviation Asia routes: alliance dynamics affect operations" },
              { policyId: "pol15", deltaEur: -15, rationale: "BI: EU exporters in tech control regime crossfire" },
              { policyId: "pol04", deltaEur: -5,  rationale: "Marine Cargo: sanctions compliance costs" }
            ]
          },
          operations: {
            totalEur: 0,
            drivers: []
          }
        },
        redFlags: [
          { id: "rf-uscn-1", label: "US export control expansion frequency",              threshold: ">1 major expansion/quarter",     status: "red",    currentValue: "quarterly" },
          { id: "rf-uscn-2", label: "AUKUS Pillar Two operational milestones",            threshold: "on schedule",                     status: "green",  currentValue: "on schedule" },
          { id: "rf-uscn-3", label: "PRC economic coercion incidents on Western firms",   threshold: ">3 per quarter",                  status: "amber",  currentValue: "2/quarter" },
          { id: "rf-uscn-4", label: "Big Fund IV size vs III",                            threshold: ">2x",                             status: "amber",  currentValue: "1.7x announced" },
          { id: "rf-uscn-5", label: "Trump II China policy volatility (monthly changes)", threshold: ">2 major shifts/month",           status: "amber",  currentValue: "1.5/month" }
        ]
      },
      "eu-hybrid-main": {
        scenarioNarrative: "Sustained hybrid pressure with fragmented European response; Nordic-Baltic minilateral mechanisms strengthen",
        scenarioFamily: "EU hybrid pressure",
        scenarioLabel: "EU hybrid pressure dossier",
        horizonMonths: 12,
        maturationByHorizon: { "0-12": "ongoing", "12-24": "consolidated", ">24": "structural" },
        impact: {
          investments: {
            totalEur: -45,
            drivers: [
              { positionId: "inv01", deltaEur: -12, rationale: "BTP: broader EU risk premium in hybrid climate" },
              { positionId: "inv03", deltaEur: -8,  rationale: "OAT: France disinformation exposure risk premium" },
              { positionId: "inv19", deltaEur: -18, rationale: "Warsaw retail: Poland front-line exposure" },
              { positionId: "inv18", deltaEur: -4,  rationale: "Frankfurt logistics: cable/pipeline incidents in region" },
              { positionId: "inv12", deltaEur: -3,  rationale: "Eurostoxx: modest correction" }
            ]
          },
          pandc: {
            totalEur: -85,
            drivers: [
              { policyId: "pol11", deltaEur: -35, rationale: "Cyber EU mid-corporate: attack frequency and severity elevated" },
              { policyId: "pol01", deltaEur: -15, rationale: "Property IT: sabotage risk on critical infrastructure" },
              { policyId: "pol02", deltaEur: -12, rationale: "Property DEU: airspace incident spillover" },
              { policyId: "pol03", deltaEur: -20, rationale: "Property POL: direct front-line exposure" },
              { policyId: "pol15", deltaEur: -3,  rationale: "BI: cyber incidents disrupt operations" }
            ]
          },
          operations: {
            totalEur: -12,
            drivers: [
              { opId: "op09", deltaEur: -6, rationale: "Frankfurt data center: elevated attack surface" },
              { opId: "op08", deltaEur: -4, rationale: "Dublin data center: elevated attack surface" },
              { opId: "op04", deltaEur: -2, rationale: "Warsaw sales office: security cost increase" }
            ]
          }
        },
        redFlags: [
          { id: "rf-hyb-1", label: "Baltic cable/pipeline incidents last 90 days",        threshold: ">3",                             status: "red",    currentValue: "4" },
          { id: "rf-hyb-2", label: "Attributable disinformation ops per EU election cycle",threshold: ">1 documented per election",    status: "red",    currentValue: "2 documented" },
          { id: "rf-hyb-3", label: "EU joint attribution mechanism status",               threshold: "activated",                       status: "green",  currentValue: "under discussion" },
          { id: "rf-hyb-4", label: "GPS jamming/spoofing incidents in Baltic",            threshold: "persistent >100 events/month",    status: "red",    currentValue: "180/month" },
          { id: "rf-hyb-5", label: "Arson attacks on Ukraine logistics chains",           threshold: ">2 per quarter",                  status: "amber",  currentValue: "1/quarter" }
        ]
      },
      "eu-political-2027-main": {
        scenarioNarrative: "Heterogeneous drift; individual cycles produce mixed outcomes that cancel at aggregate EU level",
        scenarioFamily: "EU political evolution 2027",
        scenarioLabel: "EU political evolution 2027-2028 dossier",
        horizonMonths: 24,
        maturationByHorizon: { "0-12": "campaigns", "12-24": "outcomes", ">24": "post-cycle configuration" },
        impact: {
          investments: {
            totalEur: -140,
            drivers: [
              { positionId: "inv01", deltaEur: -30, rationale: "BTP: Italian election-cycle spread widening" },
              { positionId: "inv03", deltaEur: -35, rationale: "OAT: French election risk premium, RN outcome scenario" },
              { positionId: "inv04", deltaEur: -12, rationale: "Bonos: Spain contagion from French spread" },
              { positionId: "inv12", deltaEur: -25, rationale: "Eurostoxx: political uncertainty premium" },
              { positionId: "inv10", deltaEur: -10, rationale: "BNP Paribas: French bank sovereign feedback loop" },
              { positionId: "inv11", deltaEur: -8,  rationale: "Unicredit: Italian bank sovereign feedback loop" },
              { positionId: "inv17", deltaEur: -8,  rationale: "Milano offices: election uncertainty" },
              { positionId: "inv19", deltaEur: -12, rationale: "Warsaw retail: Polish election risk" }
            ]
          },
          pandc: {
            totalEur: -20,
            drivers: [
              { policyId: "pol07", deltaEur: -12, rationale: "PV East Europe retail: election-related civil unrest" },
              { policyId: "pol11", deltaEur: -8,  rationale: "Cyber: election-targeted attacks" }
            ]
          },
          operations: {
            totalEur: -3,
            drivers: [
              { opId: "op04", deltaEur: -3, rationale: "Warsaw sales office: election-cycle uncertainty" }
            ]
          }
        },
        redFlags: [
          { id: "rf-pol-1", label: "German AfD polling in eastern Lander",                threshold: ">35%",                            status: "amber",  currentValue: "31%" },
          { id: "rf-pol-2", label: "French RN polling first round",                       threshold: ">32%",                            status: "amber",  currentValue: "30%" },
          { id: "rf-pol-3", label: "Italian coalition arithmetic vs Meloni government",   threshold: "loss of Senate majority",         status: "green",  currentValue: "stable" },
          { id: "rf-pol-4", label: "Polish presidential polling: Tusk-backed candidate",  threshold: "<45%",                            status: "amber",  currentValue: "47%" },
          { id: "rf-pol-5", label: "BTP-Bund spread widening from baseline",              threshold: ">50bp",                           status: "amber",  currentValue: "+35bp" },
          { id: "rf-pol-6", label: "OAT-Bund spread widening from baseline",              threshold: ">80bp",                           status: "red",    currentValue: "+85bp" }
        ]
      }
    }

  }

};