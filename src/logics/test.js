export const ideologies = {
  chaos: {
    name: "Chaos",
    resource: 'freedom',
    description: "Rule by chaos by dismantling existing order and systems, believing true freedom emerges from disruption.",
    adjectives: [
      "Discontent",    // 1
      "Rebellious",    // 2
      "Radical",       // 3
      "Subversive",    // 4
      "Insurgent",     // 5
      "Chaotic"        // 6
    ],
    subIdeologies: [
      {
        name: "Anarchist",
        icon: "👻", // Ghostly figure, representing absence of rule
        specialActions: [
          "Launch DDoS Attack (Disrupt centralized networks)",
          "Decentralize Data Network (Break corporate control)",
          "Create Encrypted Haven (Establish unmonitored zones)"
        ]
      },
      {
        name: "Nihilist",
        icon: "💀", // Skull, representing ultimate deconstruction
        specialActions: [
          "Induce Mass Apathy (Undermine collective will)",
          "Perform Symbolic Destruction (Erode meaning in institutions)",
          "Unleash Existential Crisis Campaign (Sow doubt in societal values)"
        ]
      },
      {
        name: "Primalist",
        icon: "🌿", // Leaf/wilderness, representing return to nature
        specialActions: [
          "Establish Autonomous Zone (Create off-grid communities)",
          "Sabotage Urban Infrastructure (Dismantle city reliance)",
          "Forge Tribal Alliance (Unite decentralized groups)"
        ]
      },
      {
        name: "Insurrectionist",
        icon: "💥", // Explosion/spark, representing active rebellion
        specialActions: [
          "Organize Civil Disobedience (Encourage mass non-compliance)",
          "Fund Black Market Network (Support parallel economies)",
          "Arm Local Militias (Empower self-defense groups)"
        ]
      },
      {
        name: "Reconstructor",
        icon: "♻️", // Recycle/rebuild, representing building anew from destruction
        specialActions: [
          "Catalyze Systemic Collapse (Accelerate breakdown for new growth)",
          "Redistribute Scars of Old Order (Re-purpose remnants of power)",
          "Forge Post-Collapse Consensus (Guide new societal formation)"
        ]
      },
      {
        name: "Accidentalist",
        icon: "🎲", // Dice, representing randomness/chance
        specialActions: [
          "Introduce Random Anomalies (Disrupt predictable outcomes)",
          "Amplify Unforeseen Variables (Heighten chaos in controlled systems)",
          "Exploit Systemic Glitches (Leverage inherent flaws for disruption)"
        ]
      }
    ]
  },
  information: {
    name: "Information",
    resource: 'control',
    description: "Control through pervasive information, data-driven insights, and digital oversight, aiming for a perfectly managed society.",
    adjectives: [
      "Connected",     // 1
      "Informative",   // 2
      "Analytical",    // 3
      "Integrated",    // 4
      "Omniscient",    // 5
      "Controlling"    // 6
    ],
    subIdeologies: [
      {
        name: "Logician",
        icon: "📊", // Bar chart/analytics, representing data focus
        specialActions: [
          "Deploy Predictive Algorithms (Anticipate public behavior)",
          "Refine Data-Driven Directives (Optimize policy for efficiency)",
          "Eliminate Systemic Inconsistencies (Ensure logical coherence)"
        ]
      },
      {
        name: "Integrator",
        icon: "🔗", // Chain links, representing connection
        specialActions: [
          "Merge Global Digital Infrastructure (Connect all networks)",
          "Standardize Communication Protocols (Ensure universal compatibility)",
          "Bridge Inter-System Gaps (Remove all data silos)"
        ]
      },
      {
        name: "Cognitivist",
        icon: "🧠", // Brain, representing thought shaping
        specialActions: [
          "Curate Information Flow (Control what is seen and heard)",
          "Develop Targeted Messaging (Influence specific demographics)",
          "Implant Core Belief Constructs (Shape fundamental worldviews)"
        ]
      },
      {
        name: "Panopticon",
        icon: "👁️", // Eye, representing surveillance
        specialActions: [
          "Expand Biometric Surveillance (Monitor individual movements)",
          "Implement Universal Digital ID (Track all citizen activity)",
          "Detect Pre-Crimimal Intent (Identify potential dissenters)"
        ]
      },
      {
        name: "Predictivist",
        icon: "🔮", // Crystal ball, representing foresight
        specialActions: [
          "Simulate Future Scenarios (Model potential global events)",
          "Optimize Resource Allocation (Based on forecasted needs)",
          "Prevent Unplanned Deviations (Guide society towards desired outcomes)"
        ]
      },
      {
        name: "Infoliberal",
        icon: "📖", // Open book, representing controlled knowledge
        specialActions: [
          "Release Curated Data Dumps (Shape public perception strategically)",
          "Filter Global Information Streams (Control access to specific content)",
          "Promote 'Enlightened' Narratives (Guide understanding of truth)"
        ]
      }
    ]
  },
  wealth: {
    name: "Wealth",
    resource: 'Money',
    description: "Control through economic dominance, resource monopolization, and the manipulation of global markets.",
    adjectives: [
      "Profitable",    // 1
      "Amassing",      // 2
      "Influential",   // 3
      "Dominant",      // 4
      "Monopolistic",  // 5
      "Greedy"         // 6
    ],
    subIdeologies: [
      {
        name: "Market Supremacist",
        icon: "📈", // Stock chart, representing market control
        specialActions: [
          "Engineer Market Crash (Collapse rival economies)",
          "Corner Global Commodity (Control vital trade goods)",
          "Leverage Debt Slavery (Bind populations through financial burden)"
        ]
      },
      {
        name: "Resource Extortionist",
        icon: "💎", // Diamond/gem, representing precious resources
        specialActions: [
          "Monopolize Rare Earths (Control critical tech components)",
          "Control Global Water Supply (Command essential human need)",
          "Exploit Labor Force (Maximize profit through subjugation)"
        ]
      },
      {
        name: "Debt Forger",
        icon: "💸", // Money with wings, representing financial manipulation
        specialActions: [
          "Indebt Sovereign Nations (Subjugate countries financially)",
          "Foreclose on Vital Assets (Seize critical infrastructure)",
          "Weaponize Economic Sanctions (Cripple opposition economies)"
        ]
      },
      {
        name: "Monopolist",
        icon: "🏭", // Factory, representing industrial control
        specialActions: [
          "Acquire Key Industries (Buy out competitors)",
          "Eliminate Competition (Undermine rival businesses)",
          "Control Supply Chains (Dominant production and distribution)"
        ]
      },
      {
        name: "Black Marketeer",
        icon: "🥷", // Ninja/shadow, representing illicit operations
        specialActions: [
          "Establish Illicit Trade Routes (Circumvent legal channels)",
          "Traffick Forbidden Goods (Deal in banned or scarce items)",
          "Corrupt Officials (Buy influence and protection)"
        ]
      },
      {
        name: "Asset Stripper",
        icon: "💔", // Broken heart/dismantling, representing deconstruction for profit
        specialActions: [
          "Initiate Hostile Takeover (Acquire and dismantle failing entities)",
          "Liquidate Public Holdings (Privatize essential services)",
          "Offshore Wealth & Resources (Hide assets from taxation/control)"
        ]
      }
    ]
  },
  vanguard: {
    name: "Vanguard",
    resource: 'order',
    description: "Control through military strength, strict discipline, and the imposition of absolute societal order.",
    adjectives: [
      "Disciplined",   // 1
      "Secure",        // 2
      "Authoritative", // 3
      "Enforcing",     // 4
      "Militarized",   // 5
      "Iron-fisted"    // 6
    ],
    subIdeologies: [
      {
        name: "Authoritarian",
        icon: "👑", // Crown/ruler, representing central power
        specialActions: [
          "Implement Martial Law (Impose military rule)",
          "Dissolve Legislative Bodies (Centralize all decision-making)",
          "Consolidate Executive Power (Concentrate authority to one leader)"
        ]
      },
      {
        name: "Disciplinarian",
        icon: "⛓️", // Chains, representing strict rules
        specialActions: [
          "Enforce Strict Curfews (Control citizen movement)",
          "Mandate Compulsory Service (Force obedience through labor/military)",
          "Punish Deviance Severely (Crush dissent to maintain order)"
        ]
      },
      {
        name: "Strategic Supremacist",
        icon: "♟️", // Chess pawn, representing tactical dominance
        specialActions: [
          "Execute Pre-emptive Strike (Neutralize perceived threats)",
          "Establish Global Garrisons (Project power worldwide)",
          "Develop Unrivaled Weaponry (Ensure military superiority)"
        ]
      },
      {
        name: "Order Purist",
        icon: "📐", // Ruler/set square, representing exactness/perfection
        specialActions: [
          "Eradicate Dissident Factions (Eliminate all opposition)",
          "Censor Unapproved Information (Control narratives that challenge order)",
          "Establish Thought Police (Monitor and suppress ideological deviation)"
        ]
      },
      {
        name: "Militaristic Traditionalist",
        icon: "🛡️", // Shield, representing old ways/defense
        specialActions: [
          "Restore Ancient Military Codes (Revive forgotten doctrines)",
          "Reinstate Hereditary Leadership (Re-establish bloodline authority)",
          "Emphasize Cultural Uniformity (Suppress diversity for cohesion)"
        ]
      },
      {
        name: "Defensive Hegemon",
        icon: "🌐", // Globe, representing global security
        specialActions: [
          "Impose No-Fly Zones (Control airspace globally)",
          "Establish Global Anti-Terror Protocols (Justify wide-reaching interventions)",
          "Force Disarmament of Rivals (Ensure no other power can challenge them)"
        ]
      }
    ]
  },
  cult: {
    name: "Cult",
    resource: 'influence',
    description: "Control through shaping belief systems, moral narratives, and the spiritual or ideological conviction of the masses.",
    adjectives: [
      "Devoted",       // 1
      "Persuasive",    // 2
      "Dogmatic",      // 3
      "Indoctrinating",// 4
      "Fanatical",     // 5
      "Absolute"       // 6
    ],
    subIdeologies: [
      {
        name: "Zealot",
        icon: "🔥", // Fire, representing fervent belief
        specialActions: [
          "Initiate Mass Conversion Drive (Bring new believers into the fold)",
          "Condemn Heretical Thought (Suppress opposing ideologies)",
          "Martyr Key Figures (Inspire ultimate devotion)"
        ]
      },
      {
        name: "Charismatist",
        icon: "✨", // Sparkle, representing inspiration
        specialActions: [
          "Deliver Inspiring Orations (Rally mass support)",
          "Cultivate Personal Devotion (Secure unswerving loyalty)",
          "Unify Disparate Factions (Bring rivals under common cause)"
        ]
      },
      {
        name: "Moral Imperative",
        icon: "⚖️", // Scales, representing judgment/morality
        specialActions: [
          "Declare Universal Moral Code (Impose singular ethical system)",
          "Sanction Immoral Practices (Punish perceived transgressions)",
          "Redefine Good and Evil (Control the societal compass)"
        ]
      },
      {
        name: "Mystic",
        icon: "🌌", // Milky Way/stars, representing cosmic knowledge
        specialActions: [
          "Unveil Ancient Prophecy (Legitimize claims with hidden knowledge)",
          "Perform World-Shaping Ritual (Invoke unseen powers)",
          "Channel Cosmic Energy (Tap into supernatural forces)"
        ]
      },
      {
        name: "Propagandist",
        icon: "📢", // Megaphone, representing mass communication
        specialActions: [
          "Flood Media with Doctrines (Control public narrative)",
          "Create Emotionally Charged Campaigns (Manipulate public sentiment)",
          "Suppress Dissenting Voices (Silence opposition through media control)"
        ]
      },
      {
        name: "Redeemer",
        icon: "🕊️", // Dove/peace, representing salvation
        specialActions: [
          "Offer Universal Absolution (Draw followers through forgiveness)",
          "Promise Utopian Afterlife/Future (Provide hope for loyalty)",
          "Implement 'Cleansing' Protocols (Eliminate those who resist 'salvation')"
        ]
      }
    ]
  },
  architects: {
    name: "Architects",
    resource: 'progress',
    description: "Control through planned advancement, scientific innovation, and the deliberate design of future societies.",
    adjectives: [
      "Innovative",    // 1
      "Efficient",     // 2
      "Strategic",     // 3
      "Designing",     // 4
      "Transformative",// 5
      "Utopian"        // 6
    ],
    subIdeologies: [
      {
        name: "Planner",
        icon: "🗺️", // Map/blueprint, representing foresight
        specialActions: [
          "Enact Global Development Plan (Oversee vast societal projects)",
          "Engineer Societal Evolution (Guide human progress scientifically)",
          "Design Future Cities (Create optimized living environments)"
        ]
      },
      {
        name: "Researcher",
        icon: "🔬", // Microscope, representing scientific inquiry
        specialActions: [
          "Accelerate Breakthrough Research (Push boundaries of knowledge)",
          "Control Genetic Modification (Direct human and ecological evolution)",
          "Direct AI Development (Shape the future of intelligence)"
        ]
      },
      {
        name: "Optimiser",
        icon: "⚙️", // Gear, representing efficiency
        specialActions: [
          "Implement Sustainable Systems (Ensure long-term viability of resources)",
          "Automate Resource Allocation (Streamline distribution of goods)",
          "Eliminate Waste & Inefficiency (Perfect all societal processes)"
        ]
      },
      {
        name: "Utopian",
        icon: "✨", // Sparkle/ideal, representing perfection
        specialActions: [
          "Construct Ideal Societies (Build perfect communities)",
          "Eradicate Poverty & Disease (Solve humanity's core problems)",
          "Redistribute Global Wealth (Create economic equality)"
        ]
      },
      {
        name: "Technician",
        icon: "🤖", // Robot, representing advanced tech
        specialActions: [
          "Deploy Advanced Robotics (Integrate automated workforce)",
          "Integrate Smart Infrastructure (Create self-managing cities)",
          "Control Global Networks (Manage all digital connectivity)"
        ]
      },
      {
        name: "Ecologist",
        icon: "🌳", // Tree, representing nature/environment
        specialActions: [
          "Terraform Hostile Regions (Make uninhabitable areas habitable)",
          "Restore Global Ecosystems (Reverse environmental damage)",
          "Manipulate Weather Patterns (Control climate for societal benefit)"
        ]
      }
    ]
  }
};


export const fieldsOfInfluence = {
  governance: {
    name: "Governance & Law",
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
  },
  economy: {
    name: "Economy & Trade",
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
  },
  science: {
    name: "Science & Innovation",
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
  },
  information: {
    name: "Information & Media",
    icon: "📰", // Newspaper
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
        name: "Entertainment & Culture",
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
        name: "Data & Analytics",
        icon: "📊", // Bar chart
        specialActions: [
          "Harvest Personal Data",
          "Profile Key Individuals",
          "Predict Public Opinion"
        ],
        jobs: [
          "Data Entry Clerk",
          "Data Analyst",
          "Chief Data Scientist",
          "Data Broker CEO",
          "Global Data Nexus Head",
          "Information Omnipresence"
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
        name: "Covert Intelligence",
        icon: "🕵️", // Spy
        specialActions: [
          "Launch Disinformation Campaigns",
          "Conduct Psychological Operations",
          "Infiltrate Foreign Agencies"
        ],
        jobs: [
          "Field Operative",
          "Analyst",
          "Spymaster",
          "Intelligence Director",
          "Global Shadow Handler",
          "Master of Secrets"
        ]
      }
    ]
  },
  security: {
    name: "Security & Defense",
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
  },
  society: {
    name: "Society & Culture",
    icon: "👥", // Silhouettes of people
    subFields: [
      {
        name: "Public Health",
        icon: "🏥", // Hospital
        specialActions: [
          "Control Medical Research",
          "Monopolize Pharmaceuticals",
          "Influence Pandemic Response"
        ],
        jobs: [
          "Nurse",
          "Doctor",
          "Hospital Administrator",
          "Pharmaceutical CEO",
          "World Health Authority Head",
          "Biological Overlord"
        ]
      },
      {
        name: "Religious Institutions",
        icon: "🛐", // Place of worship
        specialActions: [
          "Infiltrate Spiritual Leadership",
          "Sponsor New Cults",
          "Manipulate Religious Dogma"
        ],
        jobs: [
          "Parish Priest/Cleric",
          "Theologian",
          "Sect Leader",
          "Archbishop/Grand Imam",
          "Head of Global Faith",
          "Divine Oracle"
        ]
      },
      {
        name: "Family & Social Norms",
        icon: "👨‍👩‍👧‍👦", // Family emoji
        specialActions: [
          "Promote New Social Paradigms",
          "Undermine Traditional Structures",
          "Influence Demographics"
        ],
        jobs: [
          "Social Worker",
          "Sociologist",
          "Cultural Anthropologist",
          "Family Policy Advisor",
          "Global Norms Dictator",
          "Societal Engineer"
        ]
      },
      {
        name: "Arts & Performance",
        icon: "🎭", // Theater masks
        specialActions: [
          "Commission Propaganda Art",
          "Suppress Dissident Expression",
          "Control Cultural Events"
        ],
        jobs: [
          "Street Artist",
          "Performer",
          "Art Curator",
          "Media Producer",
          "Global Cultural Minister",
          "Narrative God"
        ]
      },
      {
        name: "Youth Movements",
        icon: "🧑‍🎓", // Student/Graduation
        specialActions: [
          "Infiltrate Student Organizations",
          "Sponsor Youth Activism",
          "Direct Educational Trends"
        ],
        jobs: [
          "Student Activist",
          "Youth Counselor",
          "Campus Organizer",
          "National Youth Leader",
          "Global Education Czar",
          "Future Generation Shaper"
        ]
      },
      {
        name: "Leisure & Recreation",
        icon: "🎮", // Game controller
        specialActions: [
          "Control Global Sports Leagues",
          "Monopolize Entertainment Media",
          "Promote Distraction Campaigns"
        ],
        jobs: [
          "Game Tester",
          "Sports Agent",
          "Entertainment Producer",
          "Media Conglomerate Executive",
          "Global Leisure Baron",
          "Master of Distraction"
        ]
      }
    ]
  }
};