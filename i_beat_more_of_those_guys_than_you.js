/*
I beat more of those guys than you!
2013: N/A
2014: N/A
2015: https://www.botbrackets.com/edit?id=IZP1dzupZ4TaiXB8aaG7ifudYEmDaAJoAmIAAAffbQAAAAiqbkOnJX-GvW0AAAAIslEYdWazkeg
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

function Contains(list, item) 
{
  for (var i = 0; i < list.length; i++) 
  {
    if (list[i] === item) 
    {
      return true; 
    }
  }

  return false; 
}

function IntersectArrays(a, b)
{
  var result = new Array();

  for(var i = 0; i<a.length; i++)
  {
    if (!Contains(result, a[i]))
    {
      for(var j=0; j<b.length; j++)
      {
        if(a[i] === b[j])
        {
          result.push(a[i]);
          break;
        }
      }
    }
  }
  
  return result;
}

function FindCommonOpponents(team1, team2)
{
  var team1Games = $(team1).Games;
  var team2Games = $(team2).Games;
  var team1Opponents = new Array();
  var team2Opponents = new Array();
  
  for (var i = 0; i < team1Games.length; i++)
  {
    team1Opponents.push(team1Games[i].Opponent);
  }
  
  for (var i = 0; i < team2Games.length; i++)
  {
    team2Opponents.push(team2Games[i].Opponent);
  }
  
  return (IntersectArrays(team1Opponents, team2Opponents));
}

function CalculateWinPercentageAgainstOpponents(team, opponents)
{
  var games = $(team1).Games;
  var wins = 0;
  var losses = 0;
  for (var i = 0; i < games.length; i++)
  {
    if (Contains(opponents, games[i].Opponent))
    {
      wins += games[i].W;
      losses += games[i].L;
    }
  }
  
  return (wins / (wins + losses));
}

var commonOpponents = FindCommonOpponents(team1, team2);
$1.CommonWinPercentage = CalculateWinPercentageAgainstOpponents(team1, commonOpponents);
$2.CommonWinPercentage = CalculateWinPercentageAgainstOpponents(team2, commonOpponents);

print ($1.CommonWinPercentage);
print ($2.CommonWinPercentage);

if ($1.CommonWinPercentage > $2.CommonWinPercentage)
  return 1;
else if ($1.CommonWinPercentage < $2.CommonWinPercentage)
  return -1;
else if ($1.W > $2.W)
  return 1;
else if ($1.W < $2.W)
  return -1;
else
  return 0;