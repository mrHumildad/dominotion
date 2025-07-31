
const hexColors = {
    gold: "#FFD700",   // Gold
    crimson: "#DC143C",     // Crimson
    orange: "#FFA500",   // Orange
    violet: "#8A2BE2",       // Blue Violet
    green: "#32CD32",   // Lime Green
    blue: "#0000CD"   // Medium Blue
};

export const desatColors = {
    gold: "#C3C3A0",   // Desaturated Gold
    crimson: "#A08082",     // Desaturated Crimson
    orange: "#C3A880",   // Desaturated Orange
    violet: "#A08AB0",       // Desaturated Blue Violet
    green: "#A0B5A0",   // Desaturated Lime Green
    blue: "#8080A8"   // Desaturated Medium Blue
};

export const colors = {
    // Governance & Law <-> Faith (Using Theocratic/Crimson colors)
    governance: {
        main: hexColors.crimson,
        opp: hexColors.green,
        des: desatColors.crimson
    },
    faith: {
        main: hexColors.crimson,
        opp: hexColors.green,
        des: desatColors.crimson
    },

    // Economy & Trade <-> Wealth (Using Capitalist/Finance/Gold colors)
    economy: {
        main: hexColors.gold,
        opp: hexColors.blue,
        des: desatColors.gold
    },
    wealth: {
        main: hexColors.gold,
        opp: hexColors.blue,
        des: desatColors.gold
    },

    // Science & Innovation <-> Progress (Using Science/UtopianSocialist/Lime Green colors)
    science: {
        main: hexColors.green,
        opp: hexColors.crimson,
        des: desatColors.green
    },
    progress: {
        main: hexColors.green,
        opp: hexColors.crimson,
        des: desatColors.green
    },

    // Information & Social Engineering <-> Influence (Using Populist/Orange colors)
    social: {
        main: hexColors.orange,
        opp: hexColors.violet,
        des: desatColors.orange
    },
    influence: {
        main: hexColors.orange,
        opp: hexColors.violet,
        des: desatColors.orange
    },

    // Security & Defense <-> Order (Using Politics/Technocratic/Medium Blue colors)
    security: {
        main: hexColors.blue,
        opp: hexColors.gold,
        des: desatColors.blue
    },
    order: {
        main: hexColors.blue,
        opp: hexColors.gold,
        des: desatColors.blue
    },

    // Underworld & Illicit Operations <-> Chaos (Using Anarchist/Blue Violet colors)
    underworld: {
        main: hexColors.violet,
        opp: hexColors.orange,
        des: desatColors.violet
    },
    chaos: {
        main: hexColors.violet,
        opp: hexColors.orange,
        des: desatColors.violet
    }
};

export const fields = {
  governance: {
    name: "Governance & Law",
    resource: "Power",
    icon: "🏛️", // Classical building/courthouse
    
    subFields: [
      {
        name: "Judicial System",
        icon: "⚖️", // Scales of justice
        specialActions: [
          "Install Sympathetic Judges",
          "Challenge Legal Precedent",
          "Obscure Crucial Evidence"
        ],
        jobs: [
          "Court Clerk",
          "Paralegal",
          "Trial Lawyer",
          "District Judge",
          "Supreme Court Justice",
          "Chief Justice"
        ],
        /* events: [
          { name: "Election", description: "A new judicial system is established." },
          { name: "Judicial Overhaul", description: "Judicial procedures are overhauled." },
          { name: "Judicial Grace", description: "All agents in jail are released." },
          {naem: "big scandal", description: "A scandal could pick my agents."}
        ] */
      },
      {
        name: "Legislative Bodies",
        icon: "📜", // Scroll/document
        specialActions: [
          "Lobby for Key Legislation",
          "Obstruct Rival Bills",
          "Push Through Covert Amendments"
        ],
        jobs: [
          "Legislative Aide",
          "Committee Staffer",
          "Political Lobbyist",
          "District Representative",
          "Senate Majority Leader",
          "Speaker of the House"
        ]
      },
      {
        name: "Executive Authority",
        icon: "👑", // Crown/Presidential seal,
        specialActions: [
          "Infiltrate Cabinet Staff",
          "Manipulate Policy Directives",
          "Initiate Emergency Decrees"
        ],
        jobs: [
          "Junior Aide",
          "Policy Advisor",
          "Department Secretary",
          "Cabinet Minister",
          "Vice President",
          "Head of State"
        ]
      },
      {
        name: "Local Administration",
        icon: "🏘️", // Houses/Town Hall
        specialActions: [
          "Bribe City Officials",
          "Control Zoning Permits",
          "Manipulate Local Elections"
        ],
        jobs: [
          "Community Organizer",
          "City Planner",
          "Council Member",
          "City Manager",
          "Mayor",
          "Governor"
        ]
      },
      {
        name: "International Treaties",
        icon: "🤝", // Handshake/Globe
        specialActions: [
          "Sabotage Global Accords",
          "Forge Secret Alliances",
          "Redraft International Law"
        ],
        jobs: [
          "Embassy Intern",
          "Diplomatic Attache",
          "Ambassador",
          "UN Delegate",
          "Chief Negotiator",
          "World Forum Convener"
        ]
      },
      {
        name: "Constitutional Review",
        icon: "♾️", // Infinity/Foundations
        specialActions: [
          "Force Constitutional Amendments",
          "Reinterpret Foundational Texts",
          "Invalidate Old Laws"
        ],
        jobs: [
          "Legal Researcher",
          "Constitutional Scholar",
          "Advisory Counsel",
          "Constitutional Judge",
          "Supreme Legal Authority",
          "Founder of New Law"
        ]
      }
    ]
  },  //  faith
  economy: {
    name: "Economy & Trade",
    resource: "Money",
    icon: "💰", // Bag of money
    subFields: [
      {
        name: "Financial Markets",
        icon: "📈", // Stock chart
        specialActions: [
          "Trigger Market Crash",
          "Execute Insider Trading",
          "Manipulate Currency Value"
        ],
        jobs: [
          "Broker Assistant",
          "Stock Trader",
          "Hedge Fund Manager",
          "Investment Banker",
          "Central Bank Governor",
          "Global Market Overlord"
        ]
      },
      {
        name: "Resource Extraction",
        icon: "⛏️", // Pickaxe
        specialActions: [
          "Monopolize Key Resources",
          "Sabotage Rival Operations",
          "Control Supply Chains"
        ],
        jobs: [
          "Mine Foreman",
          "Geological Surveyor",
          "Site Manager",
          "Resource Baron",
          "Global Energy Magnate",
          "Planetary Resource King"
        ]
      },
      {
        name: "Manufacturing",
        icon: "🏭", // Factory
        specialActions: [
          "Acquire Major Industries",
          "Control Production Quotas",
          "Introduce Planned Obsolescence"
        ],
        jobs: [
          "Assembly Line Worker",
          "Production Engineer",
          "Factory Manager",
          "Industrial CEO",
          "Global Manufacturing Chief",
          "World Industrial Tsar"
        ]
      },
      {
        name: "Global Commerce",
        icon: "🚢", // Ship/Cargo
        specialActions: [
          "Block Trade Routes",
          "Negotiate Preferential Tariffs",
          "Exploit Loopholes in Customs"
        ],
        jobs: [
          "Customs Agent",
          "Logistics Coordinator",
          "Trade Representative",
          "Shipping Magnate",
          "World Trade Negotiator",
          "Global Commerce Emperor"
        ]
      },
      {
        name: "Labor & Workforce",
        icon: "👷", // Hard hat/worker
        specialActions: [
          "Infiltrate Labor Unions",
          "Incited Worker Strikes",
          "Implement Automated Labor"
        ],
        jobs: [
          "Union Steward",
          "HR Specialist",
          "Labor Organizer",
          "Union President",
          "Global Labor Minister",
          "Workforce Controller"
        ]
      },
      {
        name: "Digital Currencies",
        icon: "₿", // Bitcoin symbol
        specialActions: [
          "Manipulate Crypto Markets",
          "Develop Proprietary Blockchain",
          "Fund Anonymous Transactions"
        ],
        jobs: [
          "Crypto Miner",
          "Blockchain Developer",
          "Exchange Operator",
          "Digital Currency Investor",
          "Global Crypto Architect",
          "Decentralized Finance God"
        ]
      }
    ]
  }, // wealth
  science: {
    name: "Science & Innovation",
    resource: "Knowledge",
    icon: "🔬", // Microscope
    subFields: [
      {
        name: "Biotechnology",
        icon: "🧬", // DNA strand
        specialActions: [
          "Develop Genetic Enhancements",
          "Engineer Designer Pathogens",
          "Control Seed Banks"
        ],
        jobs: [
          "Lab Assistant",
          "Genetic Researcher",
          "Bio-Engineer",
          "Chief Medical Officer",
          "Global Health Director",
          "Life Architect"
        ]
      },
      {
        name: "Artificial Intelligence",
        icon: "🤖", // Robot face
        specialActions: [
          "Train Predictive AI Models",
          "Integrate AI into Governance",
          "Develop Autonomous Agents"
        ],
        jobs: [
          "Data Annotator",
          "AI Programmer",
          "Machine Learning Engineer",
          "AI Ethics Board Member",
          "Global AI Czar",
          "Singularity Engineer"
        ]
      },
      {
        name: "Advanced Physics",
        icon: "⚛️", // Atom symbol
        specialActions: [
          "Unlock New Energy Source",
          "Develop Quantum Computing",
          "Weaponize Theoretical Physics"
        ],
        jobs: [
          "Junior Physicist",
          "Theoretical Researcher",
          "Particle Accelerator Lead",
          "Quantum Computing Head",
          "Energy Nexus Director",
          "Cosmic Engineer"
        ]
      },
      {
        name: "Cybernetics & Robotics",
        icon: "⚙️", // Gear/Cyborg eye
        specialActions: [
          "Manufacture Cybernetic Implants",
          "Deploy Autonomous Robot Armies",
          "Reverse-Engineer Alien Tech"
        ],
        jobs: [
          "Robotics Technician",
          "Prosthetics Designer",
          "Automaton Engineer",
          "Cybernetics Division Head",
          "Global Robotics Commander",
          "Humanity 2.0 Architect"
        ]
      },
      {
        name: "Space Exploration",
        icon: "🚀", // Rocket
        specialActions: [
          "Establish Lunar Colony",
          "Secure Orbital Weapons Platforms",
          "Mine Asteroid Resources"
        ],
        jobs: [
          "Mission Control Junior",
          "Astrogeologist",
          "Spacecraft Commander",
          "Space Program Director",
          "Interstellar Colonist",
          "Cosmic Emperor"
        ]
      },
      {
        name: "Environmental Engineering",
        icon: "🌳", // Tree
        specialActions: [
          "Initiate Geoengineering Project",
          "Control Regional Weather",
          "Accelerate Ecological Collapse"
        ],
        jobs: [
          "Climate Modeler",
          "Pollution Control Specialist",
          "Eco-Engineer",
          "Global Climate Authority",
          "Planetary Terraformist",
          "Eco-System God"
        ]
      }
    ]
  },// progress
  social: {
    name: "Information & Social Engineering",
    resource: "Information",
    icon: "🌐", // Globe with lines, representing interconnected info/society
    subFields: [
      {
        name: "News & Journalism",
        icon: "🎤", // Microphone
        specialActions: [
          "Discredit Rival Media",
          "Publish Fabricated Stories",
          "Control Major News Outlets"
        ],
        jobs: [
          "Fact-Checker",
          "Investigative Reporter",
          "Chief Editor",
          "Media Conglomerate Owner",
          "Global News Director",
          "Truth Architect"
        ]
      },
      {
        name: "Social Platforms",
        icon: "💬", // Speech bubble/chat
        specialActions: [
          "Amplify Viral Narratives",
          "Censor Dissenting Voices",
          "Deploy Social Bots"
        ],
        jobs: [
          "Content Moderator",
          "Algorithm Designer",
          "Community Manager",
          "Platform Executive",
          "Global Social Media Head",
          "Digital Conversation God"
        ]
      },
      {
        name: "Arts & Entertainment",
        icon: "🎬", // Clapperboard/Popcorn
        specialActions: [
          "Produce Propagandist Media",
          "Influence Celebrity Opinions",
          "Promote Cultural Trends"
        ],
        jobs: [
          "Script Writer",
          "Talent Agent",
          "Studio Executive",
          "Entertainment Mogul",
          "Global Culture Czar",
          "Dream Weaver"
        ]
      },
      {
        name: "Education & Academia",
        icon: "🎓", // Graduation cap
        specialActions: [
          "Rewrite Historical Texts",
          "Influence Curriculum Design",
          "Fund Ideological Think Tanks"
        ],
        jobs: [
          "Teaching Assistant",
          "Curriculum Developer",
          "University Dean",
          "Educational Minister",
          "Global Academic Authority",
          "Knowledge Custodian"
        ]
      },
      {
        name: "Public Health & Social Norms",
        icon: "🏥", // Hospital/Family emoji
        specialActions: [
          "Control Medical Research",
          "Monopolize Pharmaceuticals",
          "Influence Demographics & Family Values"
        ],
        jobs: [
          "Public Health Worker",
          "Sociologist",
          "Bioethicist",
          "Head of Social Welfare",
          "Global Norms Regulator",
          "Societal Engineer"
        ]
      },
      {
        name: "Covert Intelligence & Data",
        icon: "🕵️", // Spy
        specialActions: [
          "Harvest Personal Data",
          "Conduct Psychological Operations",
          "Infiltrate Foreign Agencies"
        ],
        jobs: [
          "Data Entry Clerk",
          "Analyst",
          "Spymaster",
          "Intelligence Director",
          "Global Shadow Handler",
          "Master of Secrets"
        ]
      }
    ]
  },//  influence
  security: {
    name: "Security & Defense",
    resource: "Security",
    icon: "🛡️", // Shield
    subFields: [
      {
        name: "Military Forces",
        icon: "⚔️", // Crossed swords
        specialActions: [
          "Stage Coup d'État",
          "Deploy Elite Strike Teams",
          "Initiate Border Skirmishes"
        ],
        jobs: [
          "Foot Soldier",
          "Special Forces Operative",
          "Battalion Commander",
          "General",
          "Supreme Commander",
          "Warlord of Earth"
        ]
      },
      {
        name: "Law Enforcement",
        icon: "🚓", // Police car
        specialActions: [
          "Infiltrate Police Commands",
          "Weaponize Public Order Laws",
          "Establish Secret Police"
        ],
        jobs: [
          "Patrol Officer",
          "Detective",
          "Police Chief",
          "Head of Internal Security",
          "Global Law Enforcer",
          "Order Dictator"
        ]
      },
      {
        name: "Cyber Warfare",
        icon: "💻", // Laptop/code
        specialActions: [
          "Launch Critical Infrastructure Hacks",
          "Develop Advanced Malware",
          "Disrupt Enemy Communications"
        ],
        jobs: [
          "Cyber Analyst",
          "Ethical Hacker",
          "Zero-Day Exploiter",
          "Cyber Security Chief",
          "Global Cyber Warfare Director",
          "Digital Demolisher"
        ]
      },
      {
        name: "Weapons Development",
        icon: "💣", // Bomb
        specialActions: [
          "Research Forbidden Arms",
          "Mass Produce Super-Weapons",
          "Sell Arms to Proxy Factions"
        ],
        jobs: [
          "Arms Engineer",
          "Munitions Expert",
          "Lead Weapon Designer",
          "Arms Manufacturer CEO",
          "Global Armaments Director",
          "God of War"
        ]
      },
      {
        name: "Border Control",
        icon: "🚧", // Construction barrier
        specialActions: [
          "Control Immigration Flows",
          "Enforce Quarantine Zones",
          "Smuggle Illicit Cargo"
        ],
        jobs: [
          "Border Patrol Agent",
          "Customs Inspector",
          "Port Authority Chief",
          "National Border Security Head",
          "Global Migration Czar",
          "Frontier Gatekeeper"
        ]
      },
      {
        name: "Private Security",
        icon: "💲", // Dollar sign
        specialActions: [
          "Hire Mercenary Forces",
          "Provide Covert Protection",
          "Undertake Deniable Operations"
        ],
        jobs: [
          "Security Guard",
          "Private Investigator",
          "Bodyguard Captain",
          "Private Military Contractor CEO",
          "Global Black Ops Director",
          "Shadow Commander"
        ]
      }
    ]
  }, // order
  underworld: {
    name: "Underworld & Illicit Operations",
    resource: "Illicit Goods",
    icon: "🕶️", // Sunglasses/shadowy figure
    subFields: [
      {
        name: "Organized Crime Syndicates",
        icon: "🎩", // Hat/mobster
        specialActions: [
          "Expand Territory via Racketeering",
          "Execute Extortion Schemes",
          "Infiltrate Legitimate Businesses"
        ],
        jobs: [
          "Street Enforcer",
          "Gang Lieutenant",
          "Capo/Boss",
          "Crime Family Don",
          "Global Syndicate Head",
          "Kingpin of Crime"
        ]
      },
      {
        name: "Cybercrime & Hacking",
        icon: " anonymity", // Hacker mask
        specialActions: [
          "Launch Ransomware Attacks",
          "Steal Sensitive Data (for blackmail/sale)",
          "Disrupt Financial Systems (for illicit gain)"
        ],
        jobs: [
          "Script Kiddie",
          "Dark Web Analyst",
          "Exploit Developer",
          "Cybercrime Ring Leader",
          "Global Hacking Mastermind",
          "Digital Ghost"
        ]
      },
      {
        name: "Black Markets & Smuggling",
        icon: "📦", // Box/cargo, illicit trade
        specialActions: [
          "Establish Covert Trade Routes",
          "Smuggle High-Value Contraband",
          "Manufacture Counterfeit Goods"
        ],
        jobs: [
          "Mule",
          "Runner",
          "Fence",
          "Smuggling Kingpin",
          "Global Black Market Director",
          "Lord of Shadows"
        ]
      },
      {
        name: "Assassination & Coercion",
        icon: "🔪", // Knife/threat
        specialActions: [
          "Eliminate Key Targets",
          "Execute Blackmail Operations",
          "Initiate Targeted Intimidation"
        ],
        jobs: [
          "Hired Muscle",
          "Information Broker",
          "Hitman/Cleaner",
          "Coercion Specialist",
          "Global Eliminator",
          "Puppet Master of Fear"
        ]
      },
      {
        name: "Corruption & Bribery",
        icon: "💵", // Money bag
        specialActions: [
          "Bribe High-Level Officials",
          "Infiltrate Political Parties",
          "Launder Illicit Funds Through Legitimate Channels"
        ],
        jobs: [
          "Petty Briber",
          "Fixer",
          "Political Contributor",
          "Influence Peddler",
          "Global Corruption Architect",
          "Shadow Patron"
        ]
      },
      {
        name: "Shadow Finance",
        icon: " hiding", // Briefcase/hidden money
        specialActions: [
          "Establish Offshore Accounts",
          "Create Shell Corporations",
          "Manipulate Dark Pools"
        ],
        jobs: [
          "Accountant (Offshore)",
          "Forensic Accountant (Illicit)",
          "Shell Corp Creator",
          "Money Launderer",
          "Global Shadow Banker",
          "Architect of Hidden Wealth"
        ]
      }
    ]
  }   //chaos
};

export const ideologies = {
  order: {
    subIdeologies: [
      { name: 'totalitarian', icon: '🔗', }, // Chain links, symbolizing complete control/binding
      { name: 'aristocratic', icon: '⚜️', }, // Fleur-de-lis, symbol of nobility
      { name: 'militarist', icon: '⚔️', },
      { name: 'authoritarian', icon: '✊', },
      { name: 'traditionalist', icon: '🏛️', },
      { name: 'imperialist', icon: '👑', },
    ],
    adjectives: [
      "Structured",
      "Disciplined",
      "Controlled",
      "Hierarchical",
      "Regimental",
      "Unyielding"
    ]
  },
  chaos: {
    subIdeologies: [
      { name: 'anarchist', icon: 'Ⓐ', },
      { name: 'nihilist', icon: '💀', },
      { name: 'primitivist', icon: '🪵', },
      { name: 'collectivist', icon: '🤝', },
      { name: 'rioter', icon: '💥', },
      { name: 'prepper', icon: '🧰', },
    ],
    adjectives: [
      "Discontent",
      "Rebellious",
      "Subversive",
      "Radical",
      "Insurgent",
      "Chaotic"
    ]
  },
  progress: {
    subIdeologies: [
      { name: 'utopian', icon: '✨', },
      { name: 'reformist', icon: '⚖️', },
      { name: 'technocrat', icon: '⚙️', },
      { name: 'transhumanist', icon: '🦾', },
      { name: 'ecologist', icon: '🌳', },
      { name: 'futurist', icon: '🚀', },
    ],
    adjectives: [
      "Modern",
      "Adaptive",
      "Innovative",
      "Forward-thinking",
      "Evolving",
      "Visionary"
    ]
  },
  wealth: {
    subIdeologies: [
      { name: 'capitalist', icon: '💰', },
      { name: 'liberal', icon: '📈', },
      { name: 'monopolist', icon: '✋', }, // Hand for exclusive control/blocking
      { name: 'financier', icon: '🏦', },
      { name: 'elitist', icon: '💎', },
      { name: 'colonialist', icon: '🗺️', },
    ],
    adjectives: [
      "Profitable",
      "Affluent",
      "Materialistic",
      "Acquisitive",
      "Strategic",
      "Dominant"
    ]
  },
  faith: {
    subIdeologies: [
      { name: 'jew', icon: '✡️', },
      { name: 'christian', icon: ' cross', },
      { name: 'muslim', icon: '☪️', },
      { name: 'hindu', icon: '🕉️', },
      { name: 'animist', icon: '🐾', },
      { name: 'satanist', icon: ' pentagram', },
    ],
    adjectives: [
      "Believing",
      "Inspirational",
      "Devout",
      "Dogmatic",
      "Unquestioning",
      "Zealous"
    ]
  },
  influence: {
    subIdeologies: [
      { name: 'hedonist', icon: '🥳', },
      { name: 'new age', icon: '🧘', },
      { name: 'propagandist', icon: '📢', }, // Loudspeaker for spreading messages
      { name: 'lodge member', icon: '🔑', }, // Key for secret knowledge/access
      { name: 'ufologist', icon: '🛸', },
      { name: 'conspiracy theorist', icon: '👁️', }, // Eye for hidden truths/watching (corrected typo)
    ],
    adjectives: [
      "Guiding",
      "Subtle",
      "Persuasive",
      "Alluring",
      "Charismatic",
      "Manipulative"
    ]
  }
};

export const worldAreas = {
  // Area 1: The Cogwork Citadel - Obsessed with efficiency and technological might.
  "The Cogwork Citadel": {
    name: "The Cogwork Citadel",
    icon: "⚙️", // Gear for industry/efficiency
    char: "C",//
    description: "A sprawling, highly industrialized region obsessed with efficiency and technological might. Every citizen is a cog in a vast machine of progress and control, orchestrated by unseen hands.",
    nationalities: ["JP", "KR", "DE", "SE", "CH", "SG"], // Industrialized, high-tech nations
    sides: [
      { side: 1, ideology: "chaos", field: "underworld" },
      { side: 2, ideology: "order", field: "security" },
      { side: 3, ideology: "influence", field: "social" },
      { side: 4, ideology: "progress", field: "science" },
      { side: 5, ideology: "wealth", field: "economy" },
      { side: 6, ideology: "faith", field: "governance" },
    ]
  },

  // Area 2: Veridian Wilds - Untamed natural landscapes and fiercely independent communities.
  "Veridian Wilds": {
    name: "Veridian Wilds",
    icon: "🌳", // Tree for nature
    char: "V",
    description: "Untamed natural landscapes interspersed with small, self-sufficient communities. Life here is dictated by primal forces and fierce independence, far from the reach of global powers.",
    nationalities: ["BR", "CA", "AU", "NZ", "NO", "FI"], // Large landmasses, natural resources
    sides: [
      { side: 1, ideology: "order", field: "security" },
      { side: 2, ideology: "influence", field: "social" },
      { side: 3, ideology: "progress", field: "science" },
      { side: 4, ideology: "wealth", field: "economy" },
      { side: 5, ideology: "faith", field: "governance" },
      { side: 6, ideology: "chaos", field: "underworld" },
    ]
  },

  // Area 3: Axiom Spires - Dominated by unwavering belief and rigid doctrine.
  "Axiom Spires": {
    name: "Axiom Spires",
    icon: "⛪", // Church/Temple for faith
    char: "A",
    description: "Towering monuments to unwavering belief, where faith dictates every law and custom. Dogma is truth, and spiritual devotion is the ultimate currency, enforced by fervent zealots.",
    nationalities: ["SA", "IR", "PK", "EG", "ID", "VA"], // Nations with strong religious influence
    sides: [
      { side: 1, ideology: "influence", field: "social" },
      { side: 2, ideology: "progress", field: "science" },
      { side: 3, ideology: "wealth", field: "economy" },
      { side: 4, ideology: "faith", field: "governance" },
      { side: 5, ideology: "chaos", field: "underworld" },
      { side: 6, ideology: "order", field: "security" },
    ]
  },

  // Area 4: Market Labyrinth - A bustling nexus of trade and finance.
  "Market Labyrinth": {
    name: "Market Labyrinth",
    icon: "📈", // Stock chart for finance
    char: "L",
    description: "A bustling nexus of trade and finance, where wealth concentrates in glittering towers and poverty festers in shadowed alleys. Every deal is a gamble, and power flows with capital.",
    nationalities: ["US", "GB", "HK", "AE", "QA", "LU"], // Major financial hubs
    sides: [
      { side: 1, ideology: "progress", field: "science" },
      { side: 2, ideology: "wealth", field: "economy" },
      { side: 3, ideology: "faith", field: "governance" },
      { side: 4, ideology: "chaos", field: "underworld" },
      { side: 5, ideology: "order", field: "security" },
      { side: 6, ideology: "influence", field: "social" },
    ]
  },

  // Area 5: Whispernet Weave - A hyper-connected digital realm.
  "Whispernet Weave": {
    name: "Whispernet Weave",
    icon: "🌐", // Globe for connectivity/internet
    char: "W",//
    description: "A hyper-connected digital realm where information is power, and narratives are constantly sculpted. influence is gained through data, media, and the subtle manipulation of public opinion.",
    nationalities: ["CN", "IN", "VN", "PH", "MX", "TR"], // Large, diverse populations with significant online presence
    sides: [
      { side: 1, ideology: "wealth", field: "economy" },
      { side: 2, ideology: "faith", field: "governance" },
      { side: 3, ideology: "chaos", field: "underworld" },
      { side: 4, ideology: "order", field: "security" },
      { side: 5, ideology: "influence", field: "social" },
      { side: 6, ideology: "progress", field: "science" },
    ]
  },

  // Area 6: Shattered Marches - A fractured and volatile zone.
  "Shattered Marches": {
    name: "Shattered Marches",
    icon: "💥", // Explosion for chaos/breakdown
    char: "S",//
    description: "A fractured and volatile zone, scarred by conflict and societal breakdown. Warlords, rebel factions, and desperate survivors carve out brutal existences amidst perpetual chaos.",
    nationalities: ["SY", "YE", "SO", "CD", "UA", "VE"], // Nations historically affected by conflict/instability
    sides: [
      { side: 1, ideology: "faith", field: "governance" },
      { side: 2, ideology: "chaos", field: "underworld" },
      { side: 3, ideology: "order", field: "security" },
      { side: 4, ideology: "influence", field: "social" }, // Corrected from side 5
      { side: 5, ideology: "progress", field: "science" }, // Corrected from side 6
      { side: 6, ideology: "wealth", field: "economy" }, // Corrected from side 5
    ]
  }
};