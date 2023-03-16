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
2022: https://www.botbrackets.com/edit?id=a0_DyTa-ii8ORtbW_qPD9uzBk1iDaAJoAmIAAAfmbQAAAAiqbkOnJX-GvW0AAAAIze8wtlGjvhA
*/

// Thanks, Obama. Thobama.
// https://www.obama.org/march-madness-2023/
// Seriously? Duke overall?
var winners = [["Alabama","West Virginia","San Diego St.","Virginia","NC State","Baylor","Missouri","Arizona",
"Purdue","Memphis","Duke","Tennessee","Kentucky","Kansas St.","Michigan St.","Marquette",
"Houston","Auburn","Miami","Indiana","Pittsburgh","Xavier","Penn St.","Texas",
"Kansas","Illinois","VCU","Iona","TCU","Gonzaga","Boise St.","UCLA"],
// Obama didn't pick Pitt/Xavier, so I'm giving him Pitt because Pennsylvania voted for him 51.97% in 2012 while Ohio was a measly 50.67%
["Alabama","San Diego St.","Baylor","Arizona","Memphis","Duke","Kentucky","Michigan St.","Houston","Indiana","Pittsburgh","Texas","Kansas","Iona","TCU","UCLA"],
["Alabama","Baylor","Duke","Michigan St.","Houston","Texas","Kansas","UCLA"],
["Baylor","Duke","Houston","UCLA"],
["Duke","Houston"],
["Duke"]];

if (winners[$Round - 1].indexOf(team1) >= 0)
  	return (1);
if (winners[$Round - 1].indexOf(team2) >= 0)
  	return (-1);

// Alright, not doing popular vote as tiebreaker now. Hight seed wins if Obama didn't pick them. It's too late to compile election data.
// I really need to write a function that maps that for all states and then just add new teams as needed
return $1.Seed - $2.Seed;