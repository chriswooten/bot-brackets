/*
Lowest PTA % wins
2013: N/A
2014: N/A
2015: https://www.botbrackets.com/edit?id=bPyVl4rxvfhsqP-whx47iMK-yuODaAJoAmIAAAffbQAAAAiqbkOnJX-GvW0AAAAIslECSBxr4X4
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

function CalculatePTFPercentage(team)
{
  return ($(team).PTF / ($(team).PTF + $(team).PTA));
}

function CalculatePTAPercentage(team)
{
  return ($(team).PTA / ($(team).PTF + $(team).PTA));
}

if (!$1.PTFPercentage) $1.PTFPercentage = CalculatePTFPercentage(team1);
if (!$2.PTFPercentage) $2.PTFPercentage = CalculatePTFPercentage(team2);

if (!$1.PTAPercentage) $1.PTAPercentage = CalculatePTAPercentage(team1);
if (!$2.PTAPercentage) $2.PTAPercentage = CalculatePTAPercentage(team2);

/*
if ($1.PTFPercentage > $2.PTFPercentage)
    return 1;
else
    return -1;
*/

if ($1.PTAPercentage > $2.PTAPercentage)
    return -1;
else if ($1.PTAPercentage < $2.PTAPercentage)
    return 1;
else
  	return 0;