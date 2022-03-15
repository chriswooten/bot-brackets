/*
Biden Bot
2013: N/A
2014: N/A
2015: N/A
2016: N/A
2017: N/A
2018: N/A
2019: N/A
2020: COVID
2021: https://www.botbrackets.com/edit?id=ammGxW_voKaO374ncGwqZSCeizWDaAJoAmIAAAflbQAAAAiqbkOnJX-GvW0AAAAIygEjm5edo5I
*/

// Yes we can.
// Yes we can go with Biden's human bracket. Which he outsourced to me.
// He took my peronsal call and asked me to fill it out for him.
// Fine.  It's my human bracket.  Why can't any presidents publish a bracket
// since Obama?
// For games that don't play out the way his outsourced bracket decreed, we can
// decide the winner based on which school's state supported him more in the
// 2020 election.  I gotta say, that tie brekaer didn't look like it was going
// to help, but what can you do?

// Edit: Obama published a bracket today. Thanks, Obama.

var winners = [["Gonzaga","Baylor","Michigan","Houston","Illinois","Ohio St.","Iowa","Alabama","San Diego St.","Florida St.","Creighton","Wichita St.","Purdue","BYU","Arkansas","Oklahoma St.","Maryland","Georgia Tech","Florida","Georgetown","Oregon","Oregon St.","Rutgers","Virginia","North Carolina","Texas","Texas Tech","Winthrop","Kansas","Missouri","LSU","West Virginia"],
["Gonzaga","Baylor","Michigan","Houston","Illinois","Ohio St.","Iowa","Alabama","San Diego St.","Florida St.","Creighton","Wichita St.","Purdue","BYU","Arkansas","Oklahoma St."],
["Gonzaga","Baylor","Michigan","Houston","Illinois","Ohio St.","Iowa","Alabama"],
["Gonzaga","Baylor","Michigan","Houston"],
["Gonzaga","Baylor"],
["Gonzaga"]];

if (winners[$Round - 1].indexOf(team1) >= 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) >= 0)
  	return (-1);

var popularVote = [57.97,65.36,32.29,41.41,54.29,46.48,54.11,45.24,63.48,44.89,41.56,50.01,56.45,54.11,44.89,49.36,50.62,46.48,39.85,60.86,55.4,57.97,58.74,59.26,37.65,46.48,46.48,46.48,46.48,65.36,36.57,60.86,46.48,59.26,48.59,49.45,50.01,43.43,40.96,46.48,46.48,63.48,34.78,60.86,58.74,54.11,45.24,32.29,57.54,50.01,54.11,58.74,37.45,56.45,32.29,54.11,54.29,60.86,29.69,41.41,43.43,54.29,46.48,43.43]

if (popularVote[$1.Position - 1] > popularVote[$2.Position - 1])
  	return (1);
if (popularVote[$1.Position - 1] < popularVote[$2.Position - 1])
  	return (-1);

return (0);
