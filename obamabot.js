/*
Obamabot
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=3cDCEkQkhjv6RN6QyaUBMBeXe_2DaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkVviYkk5KM
2017: https://www.botbrackets.com/edit?id=8cXeYS0GZNsgux-UPu2tywRWTGeDaAJoAmIAAAfhbQAAAAiqbkOnJX-GvW0AAAAIujM9bgRH84o
2018: Thanks, Obama
2019: Thanks, Obama
2020: COVID
2021: https://www.botbrackets.com/edit?id=8gl7iE1L5jWeiw7jPIQyswen6miDaAJoAmIAAAflbQAAAAiqbkOnJX-GvW0AAAAIygDzE-KYBkU
*/

// Thanks, Obama
// So I call up Barry and I says, "Yo, Barry!  When you posting that bracket?"
// And he says, "Chris, let me be clear. I don't think I'm going to make one this
// year. You'll have to find some other bracket for your world famous Obamabot."
// So I did.  And that's why you have Biden Bot. But then along comes Thursday
// and I guess he changed his mind or somethin' because, low and behold,
// Barry's published has dadgum bracket. So here we go.
// Thanks, Obama

// https://www.obama.org/2021-ncaa/
// I gave him UCLA instead of Sparty
var winners = [["Gonzaga","Missouri","UC Santa Barbara","Ohio","Southern California","Kansas","Oregon","Iowa","Michigan","LSU","Georgetown","Florida St.","UCLA","Texas","Maryland","Alabama","Baylor","North Carolina","Villanova","Purdue","Texas Tech","Arkansas","Virginia Tech","Ohio St.","Illinois","Loyola Chicago","Tennessee","Oklahoma St.","San Diego St.","West Virginia","Rutgers","Houston"],
["Gonzaga","Ohio","Southern California","Iowa","Michigan","Florida St.","Texas","Alabama","Baylor","Purdue","Texas Tech","Ohio St.","Illinois","Oklahoma St.","San Diego St.","Houston"],
["Gonzaga","Southern California","Michigan","Texas","Baylor","Ohio St.","Illinois","Houston"],
["Gonzaga","Michigan","Baylor","Illinois"],
["Gonzaga","Illinois"],
["Gonzaga"]];

if (winners[$Round - 1].indexOf(team1) >= 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) >= 0)
  	return (-1);

// If things don't go his way, Barry's gonna go with the state that voted more for his
// good buddy Joe in 2020.
// I should really make this smart enough to know that, say, He thought more fondly
// of Houston if they get someone like UC Santa Barbara in the championship game...
// Or maybe something less extreme than that.
var popularVote = [57.97,65.36,32.29,41.41,54.29,46.48,54.11,45.24,63.48,44.89,41.56,50.01,56.45,54.11,44.89,49.36,50.62,46.48,39.85,60.86,55.4,57.97,58.74,59.26,37.65,46.48,46.48,46.48,46.48,65.36,36.57,60.86,46.48,59.26,48.59,49.45,50.01,43.43,40.96,46.48,46.48,63.48,34.78,60.86,58.74,54.11,45.24,32.29,57.54,50.01,54.11,58.74,37.45,56.45,32.29,54.11,54.29,60.86,29.69,41.41,43.43,54.29,46.48,43.43]

if (popularVote[$1.Position - 1] > popularVote[$2.Position - 1])
  	return (1);
if (popularVote[$1.Position - 1] < popularVote[$2.Position - 1])
  	return (-1);

return (0);
