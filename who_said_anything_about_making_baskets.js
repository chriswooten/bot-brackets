/*
Who said anything about making baskets?
Won in 2013!
2013: https://www.botbrackets.com/edit?id=kb7jcfumVDG3rez-L-ZnmAgFuKSDaAJoAmIAAAfdbQAAAAiqbkOnJX-GvW0AAAAIqnnrQ0EDCTQ
2014: https://www.botbrackets.com/edit?id=76ijHe7EAI2v8mEMm2pGImn2RK6DaAJoAmIAAAfebQAAAAiqbkOnJX-GvW0AAAAIrlcjhUuJ6xU
2015: https://www.botbrackets.com/edit?id=22Nw9VQ1Up4aZ9fIla00EtsN-imDaAJoAmIAAAffbQAAAAiqbkOnJX-GvW0AAAAIslD1Ya3WACU
2016: https://www.botbrackets.com/edit?id=sy_aqN44n5mEY9KsLBjm2KI45LyDaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkVzJLh7Ub4
2017: https://www.botbrackets.com/edit?id=QlU0YF8fMzfsIWngG7uGe-RuOsmDaAJoAmIAAAfhbQAAAAiqbkOnJX-GvW0AAAAIujMLVoTfwaE
2018: https://www.botbrackets.com/edit?id=Iwe2HVDwGpYvfU43CaSzUJPG2w2DaAJoAmIAAAfibQAAAAiqbkOnJX-GvW0AAAAIviKKAOQVepY
2019: https://www.botbrackets.com/edit?id=wkpEAC62dUw4r3FIepONbPnl33qDaAJoAmIAAAfjbQAAAAiqbkOnJX-GvW0AAAAIwiPmHzJHGAQ
*/

// won in 2013, so it must still be good, right?

function CalculateShotsOnGoal(team)
{
	var fgaWeight = 1;
	var fg3aWeight = 1;
	var ftaWeight = 1;

	return (($(team).FGA * fgaWeight) +
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
  return ($1.ShotsOnGoal - $2.ShotsOnGoal);
