/*
Some sort of offense per defense I guess?
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=KFKC1tybw0AN0fKgdxQ189Qx5GGDaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkXc9ObYbvI
2017: https://www.botbrackets.com/edit?id=ascAA1Cqjp5g_l8oqMfb4T91KTSDaAJoAmIAAAfhbQAAAAiqbkOnJX-GvW0AAAAIujMLN1sfCgM
2018: https://www.botbrackets.com/edit?id=IKYPa518_iN-abrZXVz6a8difJGDaAJoAmIAAAfibQAAAAiqbkOnJX-GvW0AAAAIviKLB2MNCfs
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

function PointsForPerSteal(team)
{
  return ($(team).PTF / $(team).ST);
}

function PointsAllowedPerTurnover(team)
{
  return ($(team).PTA / $(team).TO);
}

function OffensePerDefense(team)
{
  return ($(team).PointsForPerSteal / $(team).PointsAllowedPerTurnover);
}

if (!$1.PointsForPerSteal)
  $1.PointsForPerSteal = PointsForPerSteal(team1);

if (!$1.PointsAllowedPerTurnover)
  $1.PointsAllowedPerTurnover = PointsAllowedPerTurnover(team1);

if (!$1.OffensePerDefense)
  $1.OffensePerDefense = OffensePerDefense(team1);

if (!$2.PointsForPerSteal)
  $2.PointsForPerSteal = PointsForPerSteal(team2);

if (!$2.PointsAllowedPerTurnover)
  $2.PointsAllowedPerTurnover = PointsAllowedPerTurnover(team2);

if (!$2.OffensePerDefense)
  $2.OffensePerDefense = OffensePerDefense(team2);

print ($1.PointsForPerSteal);
print ($1.PointsAllowedPerTurnover);
print ($1.OffensePerDefense);
print ($2.PointsForPerSteal);
print ($2.PointsAllowedPerTurnover);
print ($2.OffensePerDefense);

// it still doesn't do very well.  Oh well, it's late.
// Happy St. Patrick's Day
if ($1.OffensePerDefense > $2.OffensePerDefense)
  return (1);
else if ($1.OffensePerDefense < $2.OffensePerDefense)
  return (-1);
else if ($1.TRB > $2.TRB)
  return (1);
else if ($1.TRB < $2.TRB)
  return (2);
else
  //they must be the same team
  return (0);

return (0);