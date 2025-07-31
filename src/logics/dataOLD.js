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
    finance: {
        main: hexColors.gold, // Gold
        opp: hexColors.blue, // Military Blue for text on Gold
        des: desatColors.gold
    },
    media: {
        main: hexColors.crimson,     // Crimson
        opp: hexColors.green, 
        des: desatColors.crimson
    },
    culture: {
        main: hexColors.orange,   // Orange
        opp: hexColors.violet, 
        des: desatColors.orange
    },
    law: {
        main: hexColors.violet,       // Blue Violet
        opp: hexColors.orange,
        des: desatColors.violet
    },
    science: {
        main: hexColors.green,   // Lime Green
        opp: hexColors.crimson,
        des: desatColors.green
    },
    politics: {
        main: hexColors.blue,  // Medium Blue
        opp: hexColors.gold,
        des: desatColors.blue
    },
    capitalist: {
        main: hexColors.gold, // Gold
        opp: hexColors.blue,
        des: desatColors.gold
    },
    theocratic: {
        main: hexColors.crimson,     // Crimson
        opp: hexColors.green,
        des: desatColors.crimson
    },
    populist: {
        main: hexColors.orange,   // Orange
        opp: hexColors.violet,
        des: desatColors.orange
    },
    anarchist: {
        main: hexColors.violet,       // Blue Violet
        opp: hexColors.orange,
        des: desatColors.violet
    },
    utopianSocialist: {
        main: hexColors.green,   // Lime Green
        opp: hexColors.crimson,
        des: desatColors.green
    },
    technocratic: {
        main: hexColors.blue,  // Medium Blue
        opp: hexColors.gold,
        des: desatColors.blue
    }
};



console.log("Game Category Main Colors:", hexColors);


/*
// Example usage for your game UI:
// For a "Finance" panel, set its background to Finance's main color, and text to Military's main color.
const financePanel = document.getElementById('finance-game-panel');
if (financePanel) {
    financePanel.style.backgroundColor = gameColorPairings.finance.main;
    financePanel.style.color = gameColorPairings.finance.opp; // Text color from Military category
}

// For a "Military" panel, set its background to Military's main color, and text to Finance's main color.
const politicsPanel = document.getElementById('politics-game-panel');
if (politicsPanel) {
    politicsPanel.style.backgroundColor = gameColorPairings.politics.main;
    politicsPanel.style.color = gameColorPairings.politics.opp; // Text color from Finance category
}

// Use a desaturated color for a subtle background or a disabled UI element
const neutralBackground = document.getElementById('neutral-area');
if (neutralBackground) {
    neutralBackground.style.backgroundColor = desaturatedGameColors.media;
}
*/



/* const hexColors = {
    yellow: "#D4AF37",        // Finance
    red: "#A31F34",        // Media
    orange: "#FF6B3B",          // Culture
    violet: "#4d2a85ff",         // Law
    green: "#30b52eff",  // Science
    blue: "#1571d3ff",      // Military
}
export const colors = {
  ideologies: {
    capitalist: hexColors.yellow,        // Finance
    theocratic: hexColors.red,        // Media
    populist: hexColors.orange,          // Culture
    anarchist: hexColors.violet,         // Law
    utopianSocialist: hexColors.green,  // Science
    technocratic: hexColors.blue,      // Military
  },
  fields: {
    Finance: hexColors.yellow,        // capitalist
    Media: hexColors.red,          // theocratic
    Culture: hexColors.orange,        // populist
    Law: hexColors.violet,            // anarchist
    Science: hexColors.green,        // utopianSocialist
    Military: hexColors.blue,       // technocratic
  }
}; */


export const ideologies = {
  technocratic: {
    description: "Rule by experts, algorithms & data.",
    adjectives: [
      "Inquisitive",   // 1
      "Analytical",    // 2
      "Methodical",    // 3
      "Rational",      // 4
      "Algorithmic",   // 5
      "Post-Human"     // 6
    ]
  },
  anarchist: {
    description: "Dismantle all centralized control.",
    adjectives: [
      "Discontent",    // 1
      "Rebellious",    // 2
      "Radical",       // 3
      "Subversive",    // 4
      "Insurgent",     // 5
      "Chaotic"        // 6
    ]
  },
  theocratic: {
    description: "Govern by sacred authority.",
    adjectives: [
      "Spiritual",     // 1
      "Devout",        // 2
      "Pious",         // 3
      "Righteous",     // 4
      "Prophetic",     // 5
      "Divine"         // 6
    ]
  },
  capitalist: {
    description: "Power through markets & profit.",
    adjectives: [
      "Aspiring",      // 1
      "Profit-Seeking",// 2
      "Competitive",   // 3
      "Corporate",     // 4
      "Monopolistic",  // 5
      "Tycoon"         // 6
    ]
  },
  utopianSocialist: {
    description: "Build a classless, cooperative society.",
    adjectives: [
      "Idealistic",    // 1
      "Committed",     // 2
      "Egalitarian",   // 3
      "Revolutionary", // 4
      "Commanding",    // 5
      "Messianic"      // 6
    ]
  },
  populist: {
    description: "Stir the masses against the elites.",
    adjectives: [
      "Concerned",     // 1
      "Outspoken",     // 2
      "Fiery",         // 3
      "Demagogic",     // 4
      "Charismatic",   // 5
      "Fanatical"      // 6
    ]
  }
};
// 1️⃣ Fields of Dominance (jobs only, ascending power 1→6)
export const fieldsOfDominance = {
  politics: {
    jobs: [
      "Campaign Intern",   // 1
      "City Councilor",    // 2
      "Policy Advisor",    // 3
      "Minister of State", // 4
      "National Senator",  // 5
      "Global Diplomat"    // 6
    ]
  },
  finance: {
    jobs: [
      "Junior Trader",         // 1
      "Account Manager",       // 2
      "Banking Executive",     // 3
      "Private Equity Partner",// 4
      "Hedge Fund CEO",        // 5
      "Global Financial Czar"  // 6
    ]
  },
  media: {
    jobs: [
      "Content Moderator",  // 1
      "News Editor",        // 2
      "Television Anchor",  // 3
      "Network Director",   // 4
      "Media Mogul",        // 5
      "Narrative Architect" // 6
    ]
  },
  law: {
    jobs: [
      "Paralegal",            // 1
      "Public Defender",      // 2
      "Prosecutor",           // 3
      "High Court Judge",     // 4
      "Chief Justice",        // 5
      "Global Tribunal Chair" // 6
    ]
  },
  science: {
    jobs: [
      "Lab Assistant",      // 1
      "Research Scientist", // 2
      "Inventor",           // 3
      "Tech Startup CEO",   // 4
      "Defense Technologist",// 5
      "Quantum Futurist"    // 6
    ]
  },
  culture: {
    jobs: [
      "Street Artist",       // 1
      "Indie Musician",      // 2
      "Trend Influencer",    // 3
      "Cultural Critic",     // 4
      "Celebrity Strategist",// 5
      "Symbolic Architect"        // 6
    ]
  }
};

export const worldAreas = {
  "Iron Dominion": {
    name: "Iron Dominion",
    icon: "🛡️",
    char: "I",
    description: "A brutalist stronghold where strength and order dominate, shaped by harsh winters and harsher regimes.",
    nationalities: ["RU", "CN", "DE", "PL", "TR", "SA"],
    sides: [
      { side: 1, ideology: "capitalist", field: "Finance" },
      { side: 2, ideology: "theocratic", field: "Media" },
      { side: 3, ideology: "populist", field: "Culture" },
      { side: 4, ideology: "anarchist", field: "Law" },
      { side: 5, ideology: "utopianSocialist", field: "Science" },
      { side: 6, ideology: "technocratic", field: "Military" },
    ]
  },
  "Bleeding Sands": {
    name: "Bleeding Sands",
    icon: "🏜️",
    char: "B",
    description: "Endless deserts soaked in old conflicts and new riches, where ideology burns as hot as the sun.",
    nationalities: ["SA", "IN", "IL", "ID", "VN", "EG"],
    sides: [
      { side: 1, ideology: "technocratic", field: "Military" },
      { side: 2, ideology: "capitalist", field: "Finance" },
      { side: 3, ideology: "theocratic", field: "Media" },
      { side: 4, ideology: "populist", field: "Culture" },
      { side: 5, ideology: "anarchist", field: "Law" },
      { side: 6, ideology: "utopianSocialist", field: "Science" },
    ]
  },
  "Shattered Megalopolis": {
    name: "Shattered Megalopolis",
    icon: "🌆",
    char: "M",
    description: "Hyper-dense ruins of once-great cities, now fractured into ideological microstates battling for narrative control.",
    nationalities: ["US", "GB", "FR", "BE", "NL", "ES"],
    sides: [
      { side: 1, ideology: "utopianSocialist", field: "Science" },
      { side: 2, ideology: "technocratic", field: "Military" },
      { side: 3, ideology: "capitalist", field: "Finance" },
      { side: 4, ideology: "theocratic", field: "Media" },
      { side: 5, ideology: "populist", field: "Culture" },
      { side: 6, ideology: "anarchist", field: "Law" },
    ]
  },
  "Toxic Archipelago": {
    name: "Toxic Archipelago",
    icon: "☢️",
    char: "T",
    description: "A scattered chain of irradiated islands where experimentation, survival, and ideology float in uneasy balance.",
    nationalities: ["ID", "TH", "PH", "TW", "MY", "VN"],
    sides: [
      { side: 1, ideology: "anarchist", field: "Law" },
      { side: 2, ideology: "utopianSocialist", field: "Science" },
      { side: 3, ideology: "technocratic", field: "Military" },
      { side: 4, ideology: "capitalist", field: "Finance" },
      { side: 5, ideology: "theocratic", field: "Media" },
      { side: 6, ideology: "populist", field: "Culture" },
    ]
  },
  "Silent Expanse": {
    name: "Silent Expanse",
    icon: "🦜",
    char: "S",
    description: "A quiet frontier of overgrown ruins and whispered rebellions, where dreams of utopia never die.",
    nationalities: ["AR", "BR", "MX", "PT", "IT", "GR"],
    sides: [
      { side: 1, ideology: "populist", field: "Culture" },
      { side: 2, ideology: "anarchist", field: "Law" },
      { side: 3, ideology: "utopianSocialist", field: "Science" },
      { side: 4, ideology: "technocratic", field: "Military" },
      { side: 5, ideology: "capitalist", field: "Finance" },
      { side: 6, ideology: "theocratic", field: "Media" },
    ]
  },
  "Hive Nexus": {
    name: "Hive Nexus",
    icon: "🔧",
    char: "H",
    description: "A neon-lit technoscape of vertical farms, AI governors, and silent dissenters buried under optimization.",
    nationalities: ["JP", "KR", "SE", "FI", "NO", "DK"],
    sides: [
      { side: 1, ideology: "theocratic", field: "Media" },
      { side: 2, ideology: "populist", field: "Culture" },
      { side: 3, ideology: "anarchist", field: "Law" },
      { side: 4, ideology: "utopianSocialist", field: "Science" },
      { side: 5, ideology: "technocratic", field: "Military" },
      { side: 6, ideology: "capitalist", field: "Finance" },
    ]
  }
};