/*
planting a seed?
2013: N/A
2014: N/A
2015: https://www.botbrackets.com/edit?id=yb4hIaBUXOnBwao7q5HNSw7P12SDaAJoAmIAAAffbQAAAAiqbkOnJX-GvW0AAAAIslEm6ZH7Xyw
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

function SumSeeds(team)
{
  var games = $(team).Games;
  var seedSum = 0;
  var seedSumWinOnly = 0;
  var seedSumLossOnly = 0;
  var seededOpponents = 0;
  var seededWins = 0;
  var seededLosses = 0;
  
  for (var i = 0; i < games.length; i++)
  {
    var opp = games[i].Opponent;
    var $opp = $(opp);
    if ($opp && $opp.Seed)
    {
      seededOpponents++;
      seedSum += $opp.Seed;
      seedSumWinOnly += $opp.Seed * games[i].W;
      seededWins += games[i].W;
      seedSumLossOnly += $opp.Seed * games[i].L;
      seededLosses += games[i].L;
    }
    else
    {
      seededOpponents++;
      seedSum += 16;
      seedSumWinOnly += 16 * games[i].W;
      seededWins += games[i].W;
      seedSumLossOnly += 16 * games[i].L;
      seededLosses += games[i].L;
    }
  }
  
  $(team).SeedSumWinOnly = seedSumWinOnly;
  $(team).SeedSumLossOnly = seedSumLossOnly;
  $(team).SeededOpponents = seededOpponents;
  $(team).SeededWins = seededWins;
  $(team).SeededLosses = seededLosses;
  
  return (seedSum);
}

function VeryImportant(team)
{
  var unseededWins = $(team).W - $(team).SeededWins;
  
  return ($(team).SumSeeds / $(team).SeededOpponents);
  // return (unseededWins + 2 * $(team).SeededWins + 0.5 * $(team).SeededLosses);
}

if (!$1.AggregateSeed) $1.AggregateSeed = SumSeeds(team1);
if (!$2.AggregateSeed) $2.AggregateSeed = SumSeeds(team2);

if (!$1.VeryImportant) $1.VeryImportant = VeryImportant(team1);
if (!$2.VeryImportant) $2.VeryImportant = VeryImportant(team2);

if ($1.VeryImportant < $2.VeryImportant)
  return 1;
else if ($1.VeryImportant > $2.VeryImportant)
  return -1;
else
  return 0;