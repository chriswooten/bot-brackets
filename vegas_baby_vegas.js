/*
Vegas, Baby! VEGAS!
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=pwBdASrjfKXKlX6hY-VeYr8f_fWDaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkWsCh62Y38
2017: N/A
2018: N/A
2019: https://www.botbrackets.com/edit?id=MCWbdq8L5xzM1IC3V3Bf-SctzjCDaAJoAmIAAAfjbQAAAAiqbkOnJX-GvW0AAAAIwiQrV9a6WgM
*/

// always say never
if ($2.Seed == 16)
    return (1);
else if ($1.Seed == 16)
    return (-1);

// ranked by overall odds.  Vegas baby!  VEGAS!!!
var vegasBaby = ["Duke","Gonzaga","North Carolina","Virginia","Kentucky","Michigan St.","Tennessee","Michigan","Texas Tech","Purdue","Houston","Florida St.","Iowa St.","Auburn","LSU","Villanova","Kansas","Nevada","Virginia Tech","Kansas St.","Marquette","Buffalo","Louisville","Syracuse","Cincinnati","Wisconsin","Oregon","Wofford","Florida","Iowa","Mississippi St.","Maryland","Murray St.","UCF","New Mexico St.","Seton Hall","Utah St.","VCU","Belmont","Minnesota","Oklahoma","Ole Miss","Saint Mary's (CA)","Washington","Ohio St.","UC Irvine","Baylor","Arizona St.","Georgia St.","Liberty","Montana","Northeastern","Northern Ky.","Old Dominion","Saint Louis","Yale","Vermont","Colgate","Iona","Bradley","Abilene Christian","Fairleigh Dickinson","Gardner-Webb","North Dakota St."];

if (vegasBaby.indexOf(team1) > vegasBaby.indexOf(team2))
	return (-1);
else
	return (1);