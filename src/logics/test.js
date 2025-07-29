export const fieldsOfInfluence = {
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
        ]
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
        icon: "👑", // Crown/Presidential seal
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