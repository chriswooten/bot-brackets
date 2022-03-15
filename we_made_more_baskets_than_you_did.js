/*
We made more baskets than you did
2013: https://www.botbrackets.com/edit?id=73vkrtbdZCtsqJH5Iuj61BxOmFCDaAJoAmIAAAfdbQAAAAiqbkOnJX-GvW0AAAAIqnnpM4krqh0
*/

function CalculateTotalBaskets(team)
{
	var fgmWeight = 1;
	var fg3Weight = 1;
	//free throws just count as half a basket
	var ftWeight = 0.5;

	return (($(team).FGM * fgmWeight) +
			($(team)["3FG"] * fg3Weight) +
			($(team).FT * ftWeight));
}

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

if (!$1.TotalBaskets)
	$1.TotalBaskets = CalculateTotalBaskets(team1); 

if (!$2.TotalBaskets)
	$2.TotalBaskets = CalculateTotalBaskets(team2); 

// this is how I test
if (!$1.TotalBaskets || !$2.TotalBaskets)
  return (0);
else
  return ($1.TotalBaskets - $2.TotalBaskets);
