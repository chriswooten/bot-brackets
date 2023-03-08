function pickWinner(team1, team2) {
  // Define weights for each stat
  const weights = {
    RPI: 0.1,
    Seed: 0.15,
    W: 0.05,
    L: -0.05,
    PTF: 0.1,
    PTA: -0.1,
    FGM: 0.05,
    FGA: -0.05,
    "3FG": 0.1,
    "3FGA": -0.1,
    FT: 0.05,
    FTA: -0.05,
    ORB: 0.05,
    DRB: 0.1,
    TRB: 0.1,
    AST: 0.05,
    TO: -0.05,
    ST: 0.1,
    BLK: 0.1,
    PF: -0.1,
    OppFGM: -0.05,
    OppFGA: 0.05,
    Opp3FG: -0.1,
    Opp3FGA: 0.1,
    OppFT: -0.05,
    OppFTA: 0.05,
    OppORB: -0.05,
    OppDRB: -0.1,
    OppTRB: -0.1,
    OppAST: -0.05,
    OppTO: 0.05,
    OppST: -0.1,
    OppBLK: -0.1,
    OppPF: 0.1,
  };

  // Compute team scores
  const team1Score = Object.keys(weights).reduce((acc, stat) => {
    const team1Stat = team1[stat];
    const team2Stat = team2[stat];
    if (team1Stat === undefined || team2Stat === undefined) {
      // Skip undefined stats (from playing non-Division I teams)
      return acc;
    }
    return acc + weights[stat] * (team1Stat - team2Stat);
  }, 0);

  const team2Score = -team1Score;

  // Determine winner based on scores
  if (team1Score > team2Score) {
    // Team 1 wins
    return team1Score / team2Score;
  } else {
    // Team 2 wins
    return -team2Score / team1Score;
  }
}
