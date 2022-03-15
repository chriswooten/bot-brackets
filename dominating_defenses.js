/*
dominating defenses
2013: N/A
2014: https://www.botbrackets.com/edit?id=ZIdDwnQ0dbyeaTfIKFhLoYjUFrSDaAJoAmIAAAfebQAAAAiqbkOnJX-GvW0AAAAIrmj-3B90kik
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

if (($1.DRB > $2.DRB) && ($1.TO < $2.TO) && ($1.PTA < $2.PTA))
  return (1);
else if (($1.DRB < $2.DRB) && ($1.TO > $2.TO) && ($1.PTA > $2.PTA))
  return (-1);
else
  return ($1.FTA - $2.FTA);
