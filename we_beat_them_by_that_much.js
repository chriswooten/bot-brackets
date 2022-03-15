/*
We beat them by that much!
2013: https://www.botbrackets.com/edit?id=GPbw7b9AL3G24qQdqtRyrSJndqeDaAJoAmIAAAfdbQAAAAiqbkOnJX-GvW0AAAAIqnn_8PPW4iU
2014: N/A
*/

function CalculateAverageMarginOfVictory(team)
{
	var aggregatePointDifferential = 0;
	var wins = 0;
	var games = $(team).Games;
	for (var i = 0; i < games.length; i++) 
	{ 
		if ($(games[i].Opponent) && (games[i].W))
		{
			var pointDifferential = games[i].PTF - games[i].PTA;
			// we'll put a cap on blowouts.
			if (pointDifferential > 15)
				pointDifferential	= 15;
           
			aggregatePointDifferential += pointDifferential;
			wins++;
		}
	}
  
	return (aggregatePointDifferential / wins);
}

function CalculateWinPct(team)
{
	var games = $(team).Games;
	var wins = 0;
	var losses = 0;
	for (var i = 0; i < games.length; i++)
	{
		if ($(games[i].Opponent))
		{
			wins += games[i].W;
			losses += games[i].L;
		}
	}

	if (losses == 0)
		return (wins > 0 ? 1 : 0);
	else
		return (wins / (wins + losses));
}

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

if (!$1.AverageMarginOfVictory)
	$1.AverageMarginOfVictory = CalculateAverageMarginOfVictory(team1); 

if (!$2.AverageMarginOfVictory)
	$2.AverageMarginOfVictory = CalculateAverageMarginOfVictory(team2); 

// ignoring win percentage seems to do better, so that's what we'll do!
// the script hasn't tested particularly well, anyway...
// I should probably just figure out a good method for factoring this in to RPI, but oh well
if (!$1.WinPct)
//	$1.WinPct = CalculateWinPct(team1); 
	$1.WinPct = 1; 

if (!$2.WinPct)
//	$2.WinPct = CalculateWinPct(team2); 
	$2.WinPct = 1;

print (team1 + ": " + $1.AverageMarginOfVictory);
print (team2 + ": " + $2.AverageMarginOfVictory);

// this is how I test
if (!$1.AverageMarginOfVictory || !$2.AverageMarginOfVictory || !$1.WinPct || !$2.WinPct)
{
  return (0);
}
else if (($1.AverageMarginOfVictory * $1.WinPct) > ($2.AverageMarginOfVictory * $2.WinPct))
  return (1);
else if (($1.AverageMarginOfVictory * $1.WinPct) < ($2.AverageMarginOfVictory * $2.WinPct))
  return (-1);
else
{
  return (0);
}
