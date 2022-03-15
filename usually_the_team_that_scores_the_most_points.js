/*
Usually the team that scores the most points...
https://www.botbrackets.com/edit?id=7_xW5I6Gr3fLvsOV5H9A1-3Ojw2DaAJoAmIAAAfdbQAAAAiqbkOnJX-GvW0AAAAIqnnjvnVWP0U
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

// Usually, the team that scores the most points wins the game.
var usually = 0.98;

if ($1.PTF > $2.PTF)
  return (1 * usually);
else if ($1.PTF < $2.PTF)
  return (-1 * usually);
else
  return (0);
