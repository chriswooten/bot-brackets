// https://github.com/chriswooten/bot-brackets

// always say never
// I guess this will just pick team 1 if we have two 16 seeds in what
// is either the best or the worst March Madness ever
// Maybe I should update this to always pick UMBC over UVA...
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

function GamesPlayed(wins, losses)
{
  return (wins + losses);
}

if (!$1.GamesPlayed)
{
  $1.GamesPlayed = GamesPlayed($1.W, $1.L);
  $1.PointsPerGame = $1.PTF / $1.GamesPlayed;
  print ($1.PointsPerGame);
  $1.PointsAllowedPerGame = $1.PTA / $1.GamesPlayed;
  print ($1.PointsAllowedPerGame);
}

if (!$2.GamesPlayed)
{
  $2.GamesPlayed = GamesPlayed($2.W, $2.L);
  $2.PointsPerGame = $2.PTF / $2.GamesPlayed;
  print ($2.PointsPerGame);
  $2.PointsAllowedPerGame = $2.PTA / $2.GamesPlayed;
  print ($2.PointsAllowedPerGame);
}

var team1Projected = ($1.PointsPerGame + $2.PointsAllowedPerGame) / 2
var team2Projected = ($2.PointsPerGame + $1.PointsAllowedPerGame) / 2

print (team1Projected);
print (team2Projected);

return ((team1Projected - ($1.Seed / $Round)) - (team2Projected - ($2.Seed / $Round)));
