/*
Who said anything about making baskets?
https://www.botbrackets.com/edit?id=kb7jcfumVDG3rez-L-ZnmAgFuKSDaAJoAmIAAAfdbQAAAAiqbkOnJX-GvW0AAAAIqnnrQ0EDCTQ
*/

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
