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

// Thanks, Obama. Thobama.
// https://www.obama.org/2022-ncaa/
var winners = [["Gonzaga","Boise St.","UConn","Vermont","Alabama","Texas Tech","Michigan St.","Duke",
"Baylor","North Carolina","Saint Mary's (CA)","UCLA","Virginia Tech","Purdue","Murray St.","Kentucky",
"Arizona","Seton Hall","UAB","Illinois","Michigan","Tennessee","Loyola Chicago","Villanova",
"Kansas","Creighton","Iowa","South Dakota St.","Iowa St.","Wisconsin","Miami (FL)","Auburn"],
["Gonzaga","UConn","Texas Tech","Duke","Baylor","UCLA","Purdue","Kentucky","Arizona","Illinois","Michigan","Villanova","Kansas","Iowa","Wisconsin","Auburn"],
["Gonzaga","Texas Tech","UCLA","Kentucky","Arizona","Villanova","Kansas","Wisconsin"],
["Gonzaga","Kentucky","Arizona","Kansas"],
["Gonzaga","Arizona"],
["Gonzaga"]];

if (winners[$Round - 1].indexOf(team1) >= 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) >= 0)
  	return (-1);

// Alright, not doing popular vote as tiebreaker now. Hight seed wins if Obama didn't pick them. It's too late to compile election data.
return $1.Seed - $2.Seed;