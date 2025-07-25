export const colors = {
  
}

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
      "Symbolic Icon"        // 6
    ]
  }
};

export const worldAreas = {
  "Iron Dominion": {
    nationalities: ["RU", "CN", "DE", "PL", "TR", "SA"],
    sides: [
      { side: 1, ideology: "Capitalist", field: "Military" },
      { side: 2, ideology: "Theocratic", field: "Finance" },
      { side: 3, ideology: "Populist", field: "Law" },
      { side: 4, ideology: "Anarchist", field: "Media" },
      { side: 5, ideology: "UtopianSocialist", field: "Culture" },
      { side: 6, ideology: "Technocratic", field: "Science" },
    ]
  },
  "Bleeding Sands": {
    nationalities: ["SA", "IN", "IL", "ID", "VN", "EG"],
    sides: [
      { side: 1, ideology: "Theocratic", field: "Science" },
      { side: 2, ideology: "Populist", field: "Military" },
      { side: 3, ideology: "Anarchist", field: "Finance" },
      { side: 4, ideology: "UtopianSocialist", field: "Law" },
      { side: 5, ideology: "Technocratic", field: "Media" },
      { side: 6, ideology: "Capitalist", field: "Culture" },
    ]
  },
  "Shattered Megalopolis": {
    nationalities: ["US", "GB", "FR", "BE", "NL", "ES"],
    sides: [
      { side: 1, ideology: "Populist", field: "Culture" },
      { side: 2, ideology: "Anarchist", field: "Science" },
      { side: 3, ideology: "UtopianSocialist", field: "Military" },
      { side: 4, ideology: "Technocratic", field: "Finance" },
      { side: 5, ideology: "Capitalist", field: "Law" },
      { side: 6, ideology: "Theocratic", field: "Media" },
    ]
  },
  "Toxic Archipelago": {
    nationalities: ["ID", "TH", "PH", "TW", "MY", "VN"],
    sides: [
      { side: 1, ideology: "Anarchist", field: "Media" },
      { side: 2, ideology: "UtopianSocialist", field: "Culture" },
      { side: 3, ideology: "Technocratic", field: "Science" },
      { side: 4, ideology: "Capitalist", field: "Military" },
      { side: 5, ideology: "Theocratic", field: "Finance" },
      { side: 6, ideology: "Populist", field: "Law" },
    ]
  },
  "Silent Expanse": {
    nationalities: ["AR", "BR", "MX", "PT", "IT", "GR"],
    sides: [
      { side: 1, ideology: "UtopianSocialist", field: "Law" },
      { side: 2, ideology: "Technocratic", field: "Media" },
      { side: 3, ideology: "Capitalist", field: "Culture" },
      { side: 4, ideology: "Theocratic", field: "Science" },
      { side: 5, ideology: "Populist", field: "Military" },
      { side: 6, ideology: "Anarchist", field: "Finance" },
    ]
  },
  "Hive Nexus": {
    nationalities: ["JP", "KR", "SE", "FI", "NO", "DK"],
    sides: [
      { side: 1, ideology: "Technocratic", field: "Finance" },
      { side: 2, ideology: "Capitalist", field: "Law" },
      { side: 3, ideology: "Theocratic", field: "Media" },
      { side: 4, ideology: "Populist", field: "Culture" },
      { side: 5, ideology: "Anarchist", field: "Science" },
      { side: 6, ideology: "UtopianSocialist", field: "Military" },
    ]
  }
};
