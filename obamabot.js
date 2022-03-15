/*
Obamabot
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=3cDCEkQkhjv6RN6QyaUBMBeXe_2DaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkVviYkk5KM
2017: https://www.botbrackets.com/edit?id=8cXeYS0GZNsgux-UPu2tywRWTGeDaAJoAmIAAAfhbQAAAAiqbkOnJX-GvW0AAAAIujM9bgRH84o
*/

// Thanks, Obama.
// Yes we can
// Yes we can go with Obama's human bracket.
// And you know what, we'll use the state that liked him more in 2012 if
// he didn't pick either one, again.
// Next time I should fallback on whichever team he picked to make it farthest
// so I can cut it out with this ridiculous array of voting percent
// You thought it was time for the Trump bot, but he's too busy at Maralago
// to make picks.  He's also worried that Obama would steal his picks.

var winners = [["Villanova","Virginia Tech","Virginia","Florida","SMU","Baylor","Marquette","Duke","Gonzaga","Northwestern","Notre Dame","Bucknell","Maryland","Florida St.","VCU","Arizona","Kansas","Michigan St.","Iowa St.","Purdue","Creighton","Oregon","Michigan","Louisville","North Carolina","Seton Hall","Minnesota","Butler","Cincinnati","UCLA","Wichita St.","Kentucky"],
["Villanova","Florida","Baylor","Duke","Gonzaga","Notre Dame","Florida St.","Arizona","Kansas","Iowa St.","Oregon","Michigan","North Carolina","Butler","Cincinnati","Kentucky"],
["Villanova","Duke","Notre Dame","Arizona","Kansas","Michigan","North Carolina","Kentucky"],
["Duke","Arizona","Kansas","North Carolina"],
["Duke","North Carolina"],
["North Carolina"]];

// Now with fewer bugs.  We can pick Nova, Duke, and UNC!
if (winners[$Round - 1].indexOf(team1) >= 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) >= 0)
  	return (-1);

var popularVote = [51.97,61.97,52.83,51.16,51.16,48.35,50.01,39.08,41.38,60.24,41.38,52.99,60.24,52.83,48.35,38.69,56.16,39.87,57.60,39.08,43.93,58.38,35.54,51.97,61.97,50.67,50.01,50.01,60.24,51.16,44.59,38.36,37.99,48.35,50.01,54.21,51.99,52.36,43.93,66.57,38.03,62.70,54.24,63.35,54.21,33.23,37.80,50.01,48.35,41.38,36.88,58.38,52.65,39.08,43.93,44.09,50.67,37.99,60.24,50.67,50.67,37.99,37.80,37.80]

if (popularVote[$1.Position - 1] > popularVote[$2.Position - 1])
  	return (1);
if (popularVote[$1.Position - 1] < popularVote[$2.Position - 1])
  	return (-1);

return (0);
