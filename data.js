// CHESS Mockup - Phase 3 v2

window.GEODATA = {

  dossiers: [
    { id: "global", name: "Global overview" },
    { id: "ukraine", name: "Ukraine / Russia / NATO" },
    { id: "taiwan", name: "Taiwan Strait / Chip supply chain" },
    { id: "iran", name: "Iran post-Epic Fury" }
  ],

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
    CHE: "Switzerland", AUT: "Austria", HUN: "Hungary", ROU: "Romania", CZE: "Czech Republic",
    TSMC: "Taiwan Semiconductor", OMN: "Oman", UAE: "United Arab Emirates",
    JOR: "Jordan", PSE: "Palestine", MMR: "Myanmar", SUD: "Sudan"
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
    { s: "PRC", t: "TSMC",pol: "complex", w: 4.6 },
    { s: "USA", t: "TSMC",pol: "aligned", w: 4.5 },
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
    { s: "USA", t: "UAE", pol: "aligned", w: 4.4 },
    { s: "USA", t: "JOR", pol: "aligned", w: 4.2 },
    { s: "USA", t: "EGY", pol: "aligned", w: 4.0 },
    { s: "USA", t: "IRN", pol: "hostile", w: 4.8 },
    { s: "USA", t: "SYR", pol: "hostile", w: 3.9 },
    { s: "USA", t: "YEM", pol: "hostile", w: 3.6 },
    { s: "ISR", t: "IRN", pol: "hostile", w: 4.9 },
    { s: "ISR", t: "SYR", pol: "hostile", w: 4.4 },
    { s: "ISR", t: "PSE", pol: "hostile", w: 4.7 },
    { s: "ISR", t: "UAE", pol: "aligned", w: 3.9 },
    { s: "ISR", t: "JOR", pol: "complex", w: 3.7 },
    { s: "ISR", t: "EGY", pol: "complex", w: 3.6 },
    { s: "ISR", t: "KSA", pol: "complex", w: 3.4 },
    { s: "IRN", t: "KSA", pol: "hostile", w: 4.3 },
    { s: "IRN", t: "IRQ", pol: "aligned", w: 4.1 },
    { s: "IRN", t: "SYR", pol: "aligned", w: 4.4 },
    { s: "IRN", t: "YEM", pol: "aligned", w: 3.9 },
    { s: "IRN", t: "OMN", pol: "aligned", w: 3.7 },
    { s: "KSA", t: "UAE", pol: "aligned", w: 4.5 },
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
    { s: "EGY", t: "SUD", pol: "complex", w: 3.6 },
    { s: "ETH", t: "EGY", pol: "hostile", w: 3.8 },
    { s: "ETH", t: "SUD", pol: "complex", w: 3.5 },
    { s: "NGA", t: "ETH", pol: "aligned", w: 3.3 },
    { s: "ZAF", t: "NGA", pol: "aligned", w: 3.6 },
    { s: "ZAF", t: "PRC", pol: "aligned", w: 3.9 },
    { s: "NGA", t: "PRC", pol: "aligned", w: 3.7 },
    { s: "LBY", t: "EGY", pol: "complex", w: 3.5 },
    { s: "LBY", t: "TUR", pol: "aligned", w: 3.6 },
    { s: "AFG", t: "PAK", pol: "complex", w: 4.0 },
    { s: "AFG", t: "IRN", pol: "complex", w: 3.7 },
    { s: "MMR", t: "PRC", pol: "aligned", w: 3.9 },
    { s: "MMR", t: "THA", pol: "complex", w: 3.4 },
    { s: "CHE", t: "EU",  pol: "aligned", w: 4.2 }
  ],

  actorCentrality: {
    USA: 22, PRC: 18, RUS: 11, EU: 5, DEU: 10, FRA: 8, GBR: 7,
    UKR: 6, ISR: 9, IRN: 10, TUR: 5, KSA: 7, JPN: 6, TWN: 4,
    POL: 6, KOR: 3, IND: 5, AUS: 5, ITA: 4, ESP: 3, NLD: 3,
    EGY: 5, PAK: 5, TSMC: 2, PHL: 3, VNM: 3, THA: 3, MEX: 3,
    BRA: 4, CAN: 3, HUN: 2, ROU: 2, CZE: 2, NOR: 4, SWE: 3, FIN: 4,
    EST: 2, GRC: 3, AUT: 3, CHE: 2, SYR: 4, IRQ: 1, YEM: 3, OMN: 1,
    UAE: 4, JOR: 3, PSE: 1, IDN: 2, LBY: 3, SUD: 2, ETH: 3, NGA: 3,
    ZAF: 2, ARG: 3, CHL: 2, COL: 3, PER: 2, BLR: 2, AFG: 2, MMR: 2
  },

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

  phase3: {

    dashboard: {
      corpus: {
        articles: 27533, sources: 6, embedded: 27533, embeddedPct: 100,
        graphNodes: 147, graphArcs: 428
      },
      ingestionSpark: [12, 18, 24, 22, 31, 28, 35, 42, 38, 45, 51, 48, 55, 62, 58],
      topActors: [
        { code: "USA", arcs: 42 }, { code: "PRC", arcs: 38 }, { code: "EU",  arcs: 33 },
        { code: "RUS", arcs: 29 }, { code: "DEU", arcs: 26 }, { code: "IRN", arcs: 24 },
        { code: "JPN", arcs: 22 }, { code: "ISR", arcs: 21 }, { code: "UKR", arcs: 19 },
        { code: "TWN", arcs: 18 }
      ],
      arcDistribution: [
        { bin: "w < 2",   count:  38 },
        { bin: "w 2-3",   count: 124 },
        { bin: "w 3-4",   count: 168 },
        { bin: "w 4-4.5", count:  71 },
        { bin: "w > 4.5", count:  27 }
      ],
      graphState: {
        avgWeight: 3.42, density: 0.040, lastRebuild: "6h ago",
        weightedAvg: 3.68, stronglyConnected: 12, isolatedNodes: 4
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
        { name: "ISPI",           kind: "Think tank",          articles: 4218, lastSync: "12m ago", status: "ok",   region: "Europe" },
        { name: "ECFR",           kind: "Think tank",          articles: 5104, lastSync: "8m ago",  status: "ok",   region: "Europe" },
        { name: "MERICS",         kind: "Research institute",  articles: 3892, lastSync: "24m ago", status: "ok",   region: "Europe / China focus" },
        { name: "Bruegel",        kind: "Economic think tank", articles: 2967, lastSync: "18m ago", status: "ok",   region: "Europe" },
        { name: "CSIS",           kind: "Think tank",          articles: 6841, lastSync: "3m ago",  status: "ok",   region: "USA" },
        { name: "Foreign Policy", kind: "Magazine",            articles: 4511, lastSync: "41m ago", status: "warn", region: "USA" }
      ]
    },

    explore: {
      news: [
        { id: "n1",  src: "MERICS",  date: "Aug 30 2026", dossier: "Taiwan",  title: "PLA Justice Mission drill patterns show shift toward off-calendar tempo", snippet: "The most recent PLA exercise sequence departs from the calendar-coincident pattern established since 2022." },
        { id: "n2",  src: "ECFR",    date: "Aug 28 2026", dossier: "Ukraine", title: "German 2027 budget draft opens Ukraine envelope to Bundestag amendment", snippet: "The Finance Ministry initial draft preserves the headline Ukraine allocation but introduces conditional language." },
        { id: "n3",  src: "CSIS",    date: "Aug 27 2026", dossier: "Iran",    title: "Bessent economic pressure campaign targets secondary sanctions on Chinese refiners", snippet: "Treasury guidance issued this week signals expanded secondary sanctions targeting Shandong teapot refineries." },
        { id: "n4",  src: "ISPI",    date: "Aug 26 2026", dossier: "Iran",    title: "Oman-mediated Hormuz shipping channel proposal advances", snippet: "Muscat proposal for a temporary corridor through the Strait of Hormuz has entered technical discussions." },
        { id: "n5",  src: "Bruegel", date: "Aug 25 2026", dossier: "Ukraine", title: "European defence industrial capacity holds despite disbursement slowdown", snippet: "Contract execution at Rheinmetall, KNDS and MBDA proceeds on schedule even as member state disbursement rhythm has slowed." },
        { id: "n6",  src: "FP",      date: "Aug 24 2026", dossier: "Taiwan",  title: "Japan defence white paper draft language on Taiwan hardens further", snippet: "The 2027 white paper draft under interagency review reportedly moves language from declared-substantive to operational." },
        { id: "n7",  src: "MERICS",  date: "Aug 23 2026", dossier: "Taiwan",  title: "Beijing signals through Global Times on Taiwan election framing", snippet: "The editorial line establishes the analytical frame Beijing intends to apply to any DPP-aligned outcome in 2028." },
        { id: "n8",  src: "CSIS",    date: "Aug 22 2026", dossier: "Ukraine", title: "US supplemental status remains uncertain into Q1 2027", snippet: "Senate calendar constraints and House Republican coalition dynamics make near-term action unlikely." }
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
        { id: "p1", src: "Japan MoD",        date: "Jul 2026", title: "Defense of Japan 2026 (Annual White Paper)",                              snippet: "Official Japanese defence policy document, explicitly names Taiwan Strait stability as a Japanese security interest." },
        { id: "p2", src: "US Treasury",      date: "Aug 2026", title: "OFAC guidance on secondary sanctions expansion - Iran oil trade",         snippet: "Technical guidance detailing the scope and enforcement approach for the Bessent economic operation." },
        { id: "p3", src: "PLA",              date: "Dec 2025", title: "Justice Mission 2025 exercise summary",                                   snippet: "Post-exercise summary from PLA-affiliated media, providing the doctrinal framing that positions the exercise as blockade rehearsal." },
        { id: "p4", src: "European Council", date: "Jun 2026", title: "Council conclusions on European Peace Facility Ukraine tranche",          snippet: "Formal conclusions on the multi-annual European support envelope, including the burden-sharing formula and disbursement schedule." }
      ],
      analyses: [
        { id: "a1", src: "IISS",         date: "Apr 2026", title: "Attrition and adaptation: Ukraine evolving war effort", snippet: "IISS assessment of the shift in the Ukrainian force posture under reduced Western support." },
        { id: "a2", src: "The Diplomat", date: "Jan 2026", title: "China Taiwan drills are crossing a new line",           snippet: "Analysis of the Justice Mission 2025 exercise and the normalisation of PLA activity inside Taiwan contiguous zone." },
        { id: "a3", src: "CSIS",         date: "Jul 2026", title: "Semiconductor dispersion and Taiwan risk",              snippet: "Detailed technical and strategic analysis of TSMC dispersion strategy and its interaction with Chinese calculations." },
        { id: "a4", src: "ECFR",         date: "Aug 2026", title: "Europe hybrid response deficit",                        snippet: "Assessment of the structural constraints on European coordination against Russian hybrid pressure." }
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
        thesis: "The conflict has settled into a war of attrition in which the operational tempo has slowed but the underlying dynamic continues to favour Russia at the margin. Ukrainian forces retain the ability to hold defensive lines across the eastern front, but recruitment shortfalls and the reduction in US assistance have narrowed their operational envelope. European deliveries of artillery, ammunition and howitzers have partially compensated for the American drawdown, yet Ukraine remains structurally dependent on US-made Patriot systems for medium- and long-range air defence.",
        implication: "The stabilisation of an attrition equilibrium produces a series of second-order effects across the European security architecture. The first is the gradual institutionalisation of a lower ceiling for Western military assistance. The second effect concerns the reconfiguration of European burden-sharing. Germany fiscal constraints, France political turbulence and the reduced US footprint force the Northern and Eastern member states to assume a proportionally larger share of the sustainment effort.",
        evidence: [
          { n: "01", body: "Ukraine dependence on US-made Patriot systems remains the single tightest structural constraint.", citations: [{ src: "IISS", date: "Apr 2026", emphasis: true }, { src: "ECFR", date: "Jul 2026" }] },
          { n: "02", body: "Recruitment problems are only partly addressed. Unit rotation stress continues to grow through Q1 2027.", citations: [{ src: "IISS", date: "Apr 2026" }, { src: "CSIS", date: "Jun 2026" }] },
          { n: "03", body: "European support has accelerated on artillery and ammunition. Germany 2027 budget is the single largest exogenous variable.", citations: [{ src: "Bruegel", date: "Aug 2026" }, { src: "ECFR", date: "Aug 2026", emphasis: true }] },
          { n: "04", body: "On the Russian side, the corpus reads Moscow as calibrated to outlast rather than outfight.", citations: [{ src: "FP", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
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
        title: "The modal path is compressed defense, but the tail toward negotiated freeze is not thin.",
        subtitle: "A 12-month projection of the Ukraine dossier across 4 scenarios.",
        thesis: "The simulation explored four trajectories on the Ukraine dossier over the twelve-month horizon. In the modal scenario (44%), Ukraine absorbs the reduction in US assistance through a combination of incremental European scaling and the drawdown of existing air defence stockpiles. In the second scenario (25%), the combination of a reduced assistance envelope, battlefield fatigue and German budget stress opens political space for a Korea-style armistice framework.",
        implication: "The persistence of the compressed-defence equilibrium produces effects that reshape European security beyond the Ukrainian theatre.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 16, ci: "12-20%", pol: "blue",      body: "Support recovers via political catalyst." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 44, ci: "38-51%", pol: "amber",     body: "Compressed defense holds; Ukraine adapts to reduced envelope." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 25, ci: "20-31%", pol: "red",       body: "Negotiated freeze codifies current line of contact." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 15, ci: "10-19%", pol: "dim-amber", body: "EU-only architecture; Ukrainian envelope collapses." }
        ],
        latticeCaption: "Each terminal is a support-architecture configuration at Q4 2027.",
        sensitivity: "The distribution is most sensitive to the German 2027 budget outcome.",
        robustness: 3.5, robustnessCaption: "MEDIUM-HIGH",
        robustnessNote: "Distribution stable across 4 restart seeds.",
        drivingArcs: [
          { pair: "USA - UKR", desc: "Pivot: supplemental cycle",     pol: "amber" },
          { pair: "DEU - EU",  desc: "Driver: budget stress",         pol: "amber" },
          { pair: "EU - UKR",  desc: "Anchor: multi-annual envelope", pol: "green" },
          { pair: "RUS - UKR", desc: "Frame: attrition dynamic",      pol: "red" }
        ],
        assumptions: [
          "A1: No Russian battlefield breakthrough in the horizon.",
          "A2: Existing air defense stockpiles hold through Q1 2027.",
          "A3: US supplemental is a binary event.",
          "A4: German coalition stability through H1 2027.",
          "A5: No third-actor major intervention."
        ],
        stats: { tier: "Standard", iterations: 194, nodes: 1382, time: "3m 28s", cost: "$0.31" },
        fullReport: {
          narrative: "The modal trajectory unfolds as follows. Russian tempo continues on the Pokrovsk axis in Q4 2026. Ukrainian air defence stress rises as Patriot interceptor stockpiles thin. The first SAMP/T-NG unit becomes operational in Q1 2027.",
          keyMoves: [
            "Q4 2026: Russia intensifies Pokrovsk axis.",
            "Q1 2027: First SAMP/T-NG operational.",
            "Q2 2027: Ukrainian posture narrows.",
            "Q3 2027: Choice architecture crystallises.",
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
        subtitle: "A focused reading of Germany coalition budget stress.",
        thesis: "Germany occupies two positions simultaneously in the European support architecture: it is the second-largest bilateral donor to Ukraine and the political anchor around which the broader EU envelope is coordinated.",
        implication: "The centrality of the German budget generates second-order effects that extend well beyond the Ukraine dossier.",
        evidence: [
          { n: "01", body: "Germany 2027 defense envelope is under pressure from three simultaneous domestic priorities.", citations: [{ src: "Bruegel", date: "Aug 2026", emphasis: true }, { src: "ECFR", date: "Aug 2026" }] },
          { n: "02", body: "The historical pattern since 2024 has been to announce ambitious multi-year commitments and rebalance them quietly.", citations: [{ src: "ECFR", date: "Jul 2026" }] },
          { n: "03", body: "Signaling effect: if Germany reduces materially, France political turbulence makes an offset unlikely.", citations: [{ src: "Bruegel", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "Bruegel weights the signaling channel more heavily than ECFR.",
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
      question: "How is Russia hybrid warfare against the EU evolving?",
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
        title: "Russia hybrid campaign has scaled faster than Europe coordinated response.",
        subtitle: "A focused reading of hybrid escalation.",
        thesis: "The Russian hybrid campaign against EU member states has transitioned into a sustained programme of pressure across multiple domains.",
        implication: "The persistence of the coordination gap generates second-order effects that reshape European security.",
        evidence: [
          { n: "01", body: "Undersea cable and pipeline incidents in the Baltic since 2024 have continued through 2026.", citations: [{ src: "ECFR", date: "Jul 2026", emphasis: true }, { src: "IISS", date: "Aug 2026" }] },
          { n: "02", body: "Airspace incursions have moved from probing to routine.", citations: [{ src: "CSIS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Disinformation operations targeting European elections have adapted after platform enforcement.", citations: [{ src: "ECFR", date: "Jun 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04", body: "The coordination deficit is structural.", citations: [{ src: "Bruegel", date: "Jul 2026" }] }
        ],
        divergence: "ECFR reads the coordination deficit as improvable; IISS sees it as requiring a crisis trigger.",
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
        title: "The 2027 window is real but the modal path is blockade, not amphibious assault.",
        subtitle: "A positioned reading of the timing question.",
        thesis: "The consensus is that 2027 represents the earliest point at which the PLA will possess full operational capability, rather than a scheduled date for action.",
        implication: "The interaction between latent capability and unmet preconditions produces effects that reshape East Asia security.",
        evidence: [
          { n: "01", body: "Justice Mission 2025 drills rehearsed a full maritime blockade, not amphibious assault.", citations: [{ src: "The Diplomat", date: "Jan 2026", emphasis: true }, { src: "CSIS", date: "Feb 2026" }] },
          { n: "02", body: "PLA activity has normalized inside Taiwan contiguous zone.", citations: [{ src: "The Diplomat", date: "Jan 2026" }, { src: "MERICS", date: "May 2026" }] },
          { n: "03", body: "The precondition set includes a Taiwanese political move, US posture change, or Chinese internal crisis.", citations: [{ src: "CSIS", date: "Jun 2026" }, { src: "ISPI", date: "Jul 2026" }] },
          { n: "04", body: "Japan defense white paper names Taiwan Strait stability as a Japanese interest.", citations: [{ src: "Japan MoD", date: "Aug 2026" }, { src: "MERICS", date: "Aug 2026" }] }
        ],
        divergence: "CSIS emphasizes the 2027 capability window; MERICS emphasizes trigger conditions.",
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
        title: "Modal path is blockade escalation, not assault.",
        subtitle: "A 24-month projection of the Taiwan Strait dossier.",
        thesis: "The simulation explored four trajectories on the Taiwan Strait dossier. In the modal scenario (46%), the PLA maintains large-scale exercises at Justice Mission scale two to three times per year.",
        implication: "The consolidation of the modal blockade equilibrium generates effects that extend well beyond Taiwan.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 12, ci: "8-16%",  pol: "blue",      body: "Cross-strait detente window opens after 2028 election." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 46, ci: "40-53%", pol: "amber",     body: "Sustained blockade rehearsal; no kinetic threshold crossed." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 22, ci: "17-27%", pol: "red",       body: "Limited kinetic incident from grey-zone threshold crossing." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 20, ci: "15-25%", pol: "dim-amber", body: "Trigger-set activation makes kinetic option probable." }
        ],
        latticeCaption: "Each terminal is a Strait configuration at 24-month horizon.",
        sensitivity: "The distribution is most sensitive to PLA exercise pattern deviation.",
        robustness: 3.7, robustnessCaption: "HIGH",
        robustnessNote: "Distribution stable across 5 restart seeds.",
        drivingArcs: [
          { pair: "PRC - TWN", desc: "Frame: PLA tempo",              pol: "red" },
          { pair: "USA - TWN", desc: "Anchor: reinforcement cadence", pol: "green" },
          { pair: "USA - JPN", desc: "Deterrent: trilateral tightness",pol: "green" },
          { pair: "USA - PRC", desc: "Frame: managed rivalry",        pol: "amber" }
        ],
        assumptions: [
          "A1: 2027 marks capability inflection, not scheduled event.",
          "A2: Blockade doctrine remains preferred to amphibious assault.",
          "A3: Trump administration Middle East focus continues.",
          "A4: TSMC operational continuity absent specific catalyst.",
          "A5: Taiwan political stability through 2028."
        ],
        stats: { tier: "Standard", iterations: 187, nodes: 1248, time: "3m 12s", cost: "$0.28" },
        fullReport: {
          narrative: "The modal trajectory unfolds through Q4 2026 and 2027 as PLA maintains large-scale exercises at Justice Mission scale.",
          keyMoves: [
            "Q4 2026: PLA conducts exercise at Justice Mission scale.",
            "Q1-Q2 2027: US arms package emphasising prolonged conflict.",
            "Q3 2027: Japan 2027 defence white paper formalises Taiwan interest.",
            "Q4 2027: PLA reaches full modernisation capability.",
            "H1 2028: Taiwan electoral cycle; Beijing calibrates signalling.",
            "H2 2028: New equilibrium consolidates."
          ]
        }
      }
    },

    "taiwan-fu-a": {
      question: "What role does the semiconductor supply chain play in Beijing calculus?",
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
        title: "TSMC is Beijing most valuable hostage and also its most binding constraint.",
        subtitle: "A focused reading of the semiconductor dimension.",
        thesis: "The semiconductor supply chain operates in Beijing Taiwan calculus as a two-sided constraint.",
        implication: "The centrality of the semiconductor supply chain generates second-order effects that reshape the global technology industry.",
        evidence: [
          { n: "01", body: "TSMC leading-node capacity is concentrated in a small number of fabs whose operational continuity depends on daily supply of ultra-pure gases.", citations: [{ src: "CSIS", date: "May 2026", emphasis: true }, { src: "Bruegel", date: "Jun 2026" }] },
          { n: "02", body: "Beijing semiconductor self-sufficiency push remains structurally blocked at leading nodes without EUV access.", citations: [{ src: "MERICS", date: "Jul 2026" }, { src: "Bruegel", date: "Aug 2026" }] },
          { n: "03", body: "The dispersion strategy reduces but does not eliminate concentration.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "CSIS reads the constraint as decisive; MERICS as slowing but not preventing.",
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
      question: "How does Japan defense posture change the risk window?",
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
        title: "Japan has moved from tacit to substantive on Taiwan.",
        subtitle: "A focused reading of Japan evolving posture.",
        thesis: "The 2026 Japanese defence white paper represents the culmination of a decade of gradual posture hardening on the Taiwan question.",
        implication: "Japan posture evolution generates second-order effects across the Indo-Pacific security architecture.",
        evidence: [
          { n: "01", body: "Japan 2026 defense white paper named Taiwan Strait stability as a Japanese security interest.", citations: [{ src: "Japan MoD", date: "Jul 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02", body: "Operational-level integration between US and Japanese forces on Taiwan contingencies has accelerated.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "Beijing response has been calibrated: no dramatic escalation, but consistent economic pressure.", citations: [{ src: "MERICS", date: "Aug 2026" }] }
        ],
        divergence: "CSIS emphasizes deterrent strengthening; MERICS emphasizes miscalculation risk.",
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
      question: "What if the US disengages from the Middle East after Operation Epic Fury?",
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
        title: "US disengagement is a counterfactual, not a trajectory.",
        subtitle: "A positioned reading of a hypothetical US pullback.",
        thesis: "Actual American posture in the region as of August 2026 does not correspond to disengagement. Naval rotation continues at established tempo.",
        implication: "The disengagement counterfactual reveals structural properties of the Middle East security architecture.",
        evidence: [
          { n: "01", body: "Actual US posture is dual: naval rotation continues, and the economic operation has escalated to sanctions.", citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "Reuters", date: "Aug 20 2026" }] },
          { n: "02", body: "Under disengagement, Israel strategic posture becomes the primary regional variable.", citations: [{ src: "FP", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "03", body: "China has publicly defended its cooperation with Iran against US sanctions.", citations: [{ src: "CNN", date: "Aug 25 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "04", body: "Gulf mediators are already hedging.", citations: [{ src: "Press TV", date: "Aug 2026" }, { src: "CSIS", date: "Aug 2026" }] }
        ],
        divergence: "CNN reads sanctions as escalation via new means; MERICS as prelude to negotiated exit.",
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
        title: "Under disengagement, modal path is PRC-anchored Iran with Israeli unilateral posture.",
        subtitle: "A 12-month counterfactual projection.",
        thesis: "The simulation explored four trajectories under the counterfactual condition of American disengagement. In the modal scenario (41%), Beijing assumes the role of principal external supporter for Tehran.",
        implication: "The consolidation of the modal PRC-anchored equilibrium produces effects that extend beyond the Iran dossier.",
        scenarios: [
          { code: "S1", tag: "LEFT TAIL", label: "S1", pct: 15, ci: "10-20%", pol: "blue",      body: "Multilateral stabilization via Chinese mediation." },
          { code: "S2", tag: "MODAL",     label: "S2", pct: 41, ci: "35-48%", pol: "amber",     body: "PRC-anchored Iran, Israeli unilateral posture." },
          { code: "S3", tag: "RIGHT TAIL",label: "S3", pct: 22, ci: "17-28%", pol: "red",       body: "Israeli escalation without US backing." },
          { code: "S4", tag: "UNSTABLE",  label: "S4", pct: 22, ci: "17-28%", pol: "dim-amber", body: "Nuclear breakout attempt; proliferation cascade." }
        ],
        latticeCaption: "Each terminal is a regional configuration at 12-month horizon.",
        sensitivity: "The distribution is most sensitive to PRC willingness to constrain Iran.",
        robustness: 3.3, robustnessCaption: "MEDIUM",
        robustnessNote: "Distribution moderately stable across 4 restart seeds.",
        drivingArcs: [
          { pair: "USA - PRC", desc: "Meta-variable",              pol: "amber" },
          { pair: "PRC - IRN", desc: "Anchor: economic guarantor", pol: "green" },
          { pair: "IRN - ISR", desc: "Driver: dyadic dynamic",     pol: "red" },
          { pair: "USA - ISR", desc: "Removed constraint",         pol: "amber" }
        ],
        assumptions: [
          "A1: Disengagement is discontinuous.",
          "A2: PRC willingness to substitute US role is bounded.",
          "A3: Israel retains capability but requires strategic choices.",
          "A4: Iran retains regime cohesion post-Khamenei.",
          "A5: No new Trump administration reversal."
        ],
        stats: { tier: "Standard", iterations: 176, nodes: 1156, time: "3m 04s", cost: "$0.27" },
        fullReport: {
          narrative: "The modal trajectory unfolds as US announces phased withdrawal in Q4 2026. Beijing responds with explicit oil purchase commitments to Tehran.",
          keyMoves: [
            "Q4 2026: US phased withdrawal announced.",
            "Q1 2027: PRC-Iran formal economic architecture activated.",
            "Q1-Q2 2027: Israeli unilateral strikes.",
            "Q2 2027: Iranian calibrated response through proxies.",
            "Q3 2027: Gulf hedging visible.",
            "Q4 2027: New regional configuration consolidates."
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
        title: "Israel would shift from managed rivalry to preemption doctrine.",
        subtitle: "A focused reading of Israeli strategic adaptation.",
        thesis: "Under counterfactual disengagement, Israeli doctrine would compress from managed rivalry toward preemption.",
        implication: "The Israeli transformation generates second-order effects that reshape the strategic environment.",
        evidence: [
          { n: "01", body: "Israel has demonstrated capability for unilateral strikes but not sustained regional posture.", citations: [{ src: "FP", date: "Aug 2026", emphasis: true }, { src: "ISPI", date: "Aug 2026" }] },
          { n: "02", body: "Abraham Accords formalization at security level has been on the table since 2020.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "03", body: "Internal Israeli political dynamics matter: preemption requires domestic consensus.", citations: [{ src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "FP emphasizes doctrinal compression; CSIS regional partnership adaptation.",
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
      question: "What is China role as economic lifeline for Iran under US sanctions?",
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
        title: "China Iran lifeline is real but calibrated.",
        subtitle: "A focused reading of the PRC-IRN economic architecture.",
        thesis: "Beijing has publicly defended cooperation with Iran against sanctions. The pattern is calibrated defiance rather than compliance or full support.",
        implication: "The Chinese calibrated posture generates second-order effects that reshape the sanctions architecture.",
        evidence: [
          { n: "01", body: "China public statement that US sanctions will only intensify tensions is a signaling move.", citations: [{ src: "CNN", date: "Aug 25 2026", emphasis: true }, { src: "MERICS", date: "Aug 2026" }] },
          { n: "02", body: "PRC-IRN oil trade operates through teapot refineries and UAE intermediaries.", citations: [{ src: "Reuters", date: "Aug 2026" }, { src: "Bruegel", date: "Jul 2026" }] },
          { n: "03", body: "The financial architecture has scaled sufficiently for Iran to operate outside dollar flows.", citations: [{ src: "CSIS", date: "Jul 2026" }, { src: "FP", date: "Aug 2026" }] },
          { n: "04", body: "Beijing prefers Iran weakened but not defeated.", citations: [{ src: "MERICS", date: "Aug 2026" }, { src: "ISPI", date: "Aug 2026" }] }
        ],
        divergence: "CNN reads Chinese support as strategic commitment; MERICS as tactical calibration.",
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
    }

  }

};
