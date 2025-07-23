export const ideologies = {
  Technocratic: {
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
  Anarchist: {
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
  Theocratic: {
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
  Capitalist: {
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
  UtopianSocialist: {
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
  Populist: {
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
  1: {
    field: "Politics",
    jobs: [
      "Campaign Intern",   // 1
      "City Councilor",    // 2
      "Policy Advisor",    // 3
      "Minister of State", // 4
      "National Senator",  // 5
      "Global Diplomat"    // 6
    ]
  },
  2: {
    field: "Finance",
    jobs: [
      "Junior Trader",
      "Account Manager",
      "Banking Executive",
      "Private Equity Partner",
      "Hedge Fund CEO",
      "Global Financial Czar"
    ]
  },
  3: {
    field: "Media",
    jobs: [
      "Content Moderator",
      "News Editor",
      "Television Anchor",
      "Network Director",
      "Media Mogul",
      "Narrative Architect"
    ]
  },
  4: {
    field: "Law",
    jobs: [
      "Paralegal",
      "Public Defender",
      "Prosecutor",
      "High Court Judge",
      "Chief Justice",
      "Global Tribunal Chair"
    ]
  },
  5: {
    field: "Science",
    jobs: [
      "Lab Assistant",
      "Research Scientist",
      "Inventor",
      "Tech Startup CEO",
      "Defense Technologist",
      "Quantum Futurist"
    ]
  },
  6: {
    field: "Culture",
    jobs: [
      "Street Artist",
      "Indie Musician",
      "Trend Influencer",
      "Cultural Critic",
      "Celebrity Strategist",
      "Symbolic Icon"
    ]
  }
};

// 2️⃣ Ideologies → only adjectives (plus optional metadata)
/* const ideologies = {
  1: {
    ideology: "Technocratic",
    adjective: "Analytical",
    description: "Rule by experts, algorithms & data."
  },
  2: {
    ideology: "Anarchist",
    adjective: "Rebellious",
    description: "Dismantle all centralized control."
  },
  3: {
    ideology: "Theocratic",
    adjective: "Divine",
    description: "Govern by sacred authority."
  },
  4: {
    ideology: "Capitalist",
    adjective: "Corporate",
    description: "Power through markets & profit."
  },
  5: {
    ideology: "Utopian Socialist",
    adjective: "Collectivist",
    description: "Build a classless, cooperative society."
  },
  6: {
    ideology: "Populist",
    adjective: "Vocal",
    description: "Stir the masses against the elites."
  }
}; */
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
