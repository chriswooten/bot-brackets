// I think I "fixed" (some) of RimReaper, but this seems to historically do worse. Oh well.
// It does pick A&M over tu, so it must not be all bad :+1:
// Also, RimReaper is 100% doing the opposite of what it thinks it is

// Enter your script here....
function pickWinner()
{
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
    const team1Stat = $1[stat];
    const team2Stat = $2[stat];
    if (team1Stat === undefined || team2Stat === undefined) {
      // Skip undefined stats (from playing non-Division I teams)
      return acc;
    }
    return acc + weights[stat] * (team1Stat - team2Stat);
  }, 0);

  const team2Score = -team1Score;

  print("GPT: team1 = " + team1Score + ", team2 = " + team2Score); // debugging

  // Determine winner based on scores
  if (team1Score > team2Score)
    // Team 1 wins
    return (1);
  else
    // Team 2 wins
    return (-1);
}

// Some quick utility functions.... 

function Contains(list, item) 
{ 
   for (var i = 0; i < list.length; i++) 
      if (list[i] === item) 
         return true; 
   return false; 
}

function SetProp(obj, prop, val) 
{ 
   if (!obj.hasOwnProperty(prop)) 
      obj[prop] = val; 
}

function AverageProps(obj) 
{ 
   var sum = 0; 
   var count = 0; 
   for (var prop in obj) 
   { 
      if (obj.hasOwnProperty(prop)) 
      { 
         sum += obj[prop]; 
         count++; 
      } 
   } 
   return count > 0 ? (sum / count) : 0; 
} 

// Functions used to calculate winning percentages.... 
// Not extensively tested: may have bugs. Use at your own risk. 

function WinPct(team, excludeTeams) 
{ 
   var games = $(team).Games; 
   var wins = 0; 
   var losses = 0; 
   for (var i = 0; i < games.length; i++) 
   { 
      if (!Contains(excludeTeams, games[i].Opponent) && $(games[i].Opponent)) 
      { 
         wins += games[i].W; 
         losses += games[i].L; 
      } 
   } 

   if (losses == 0) return wins > 0 ? 1 : 0; 
   else return wins / (wins + losses); 
}

function OpponentWinPct(team) 
{ 
   var hashtable = {}; // to de-dup multiple games against same opponent 
   var games = $(team).Games; 
   for (var i = 0; i < games.length; i++) 
   { 
      var opp = games[i].Opponent; 
      if ($(opp) && !hashtable[opp]) 
         SetProp(hashtable, opp, WinPct(opp, [team])); 
   } 

   return AverageProps(hashtable); 
} 

function OpponentOpponentWinPct(team) 
{ 
   var hashtable = {}; 
   var games = $(team).Games; 
   for (var i = 0; i < games.length; i++) 
   { 
      var opp = games[i].Opponent; 
      var $opp = $(opp); 
      if ($opp) 
      { 
         for (var j = 0; j < $opp.Games.length; j++) 
         { 
            var oppopp = $opp.Games[j].Opponent; 
            var key = "" + opp + "__" + oppopp; 
            if ($(oppopp) && !hashtable[key]) 
               hashtable[key] = WinPct(oppopp, [opp, team]); 
         } 
      } 
   } 

   return AverageProps(hashtable); 
} 

function CalculateRPI(team) 
{ 
   return (0.25 * WinPct(team, [])) + 
      (0.5 * OpponentWinPct(team)) + 
      (0.25 * OpponentOpponentWinPct(team)); 
} 

// The actual script.... 
// Note how we attach the calculation to an expando property so we only have to 
// calculate it the first time the script runs for a given team. 
if (!$1.RPI) $1.RPI = CalculateRPI(team1); 
if (!$2.RPI) $2.RPI = CalculateRPI(team2); 
print("team1 = " + $1.RPI + ", team2 = " + $2.RPI); // debugging 

// always say never
// I guess this will just pick team 1 if we have two 16 seeds in what
// is either the best or the worst March Madness ever
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

return (pickWinner());