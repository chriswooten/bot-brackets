/*
Obamabot
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=3cDCEkQkhjv6RN6QyaUBMBeXe_2DaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkVviYkk5KM
*/

// Yes we can
// Yes we can go with Obama's human bracket. For games that don't play out the way he decreed,
// we can decide the winner based on which school's state supported him more in the 2012 election

var winners = [["Kansas","UConn","Maryland","Hawaii","Arizona","Miami (FL)","Iowa","Villanova","Oregon","Cincinnati","Baylor","Duke","Texas","Texas A&M","VCU","Oklahoma","North Carolina","Providence","Indiana","Kentucky","Notre Dame","West Virginia","Pittsburgh","Xavier","Virginia","Butler","Purdue","Iowa St.","Seton Hall","Utah","Syracuse","Michigan St."],
["Kansas","Maryland","Miami (FL)","Villanova","Oregon","Duke","Texas A&M","Oklahoma","North Carolina","Kentucky","West Virginia","Xavier","Virginia","Purdue","Utah","Michigan St."],
["Kansas","Villanova","Duke","Texas A&M","North Carolina","West Virginia","Virginia","Michigan St."],
["Kansas","Texas A&M","North Carolina","Michigan St."],
["Kansas","North Carolina"],
["Kansas"]];

if (winners[$Round - 1].indexOf(team1) > 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) > 0)
  	return (-1);

var popularVote = [37.99,39.08,51.49,58.06,61.97,39.87,60.24,70.55,44.59,37.99,50.01,63.35,51.99,51.97,51.97,48.35,54.24,60.65,51.97,50.67,41.38,58.06,48.35,48.35,41.38,51.99,41.38,52.83,54.24,51.16,33.23,60.24,48.35,50.01,60.24,62.70,57.60,39.08,37.80,63.35,43.93,54.21,35.54,41.38,52.83,51.97,50.67,24.75,51.16,51.16,41.38,43.93,43.93,36.88,51.99,63.35,58.38,56.16,24.75,60.24,50.67,63.35,54.21,39.08]

if (popularVote[$1.Position - 1] > popularVote[$2.Position - 1])
  	return (1);
if (popularVote[$1.Position - 1] < popularVote[$2.Position - 1])
  	return (-1);

return (0);
