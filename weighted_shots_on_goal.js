/*
weighted shots on goal
2013: N/A
2014: https://www.botbrackets.com/edit?id=7C51vSmF7N2YPM86bz4lyGxprgKDaAJoAmIAAAfebQAAAAiqbkOnJX-GvW0AAAAIrmjli5KAexU
*/

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

function CalculateShotsOnGoal(team)
{
	var fgaWeight = 1;
	var fg3aWeight = 1;
	var ftaWeight = 1;

	return (($(team).FGA * fgaWeight) +
            // yes, this means we're counting 3 pointers twice...
			($(team)["3FGA"] * fg3aWeight) +
			($(team).FTA * ftaWeight));
}

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

if (!$1.ShotsOnGoal)
	$1.ShotsOnGoal = CalculateShotsOnGoal(team1); 

if (!$2.ShotsOnGoal)
	$2.ShotsOnGoal = CalculateShotsOnGoal(team2); 

// this is how I test
if (!$1.ShotsOnGoal || !$2.ShotsOnGoal)
  return (0);
else
  return (($1.ShotsOnGoal * $1.RPI) - ($2.ShotsOnGoal * $2.RPI));