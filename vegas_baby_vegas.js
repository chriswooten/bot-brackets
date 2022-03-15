/*
Vegas, Baby! VEGAS!
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=pwBdASrjfKXKlX6hY-VeYr8f_fWDaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkWsCh62Y38
2017: N/A
2018: N/A
2019: https://www.botbrackets.com/edit?id=MCWbdq8L5xzM1IC3V3Bf-SctzjCDaAJoAmIAAAfjbQAAAAiqbkOnJX-GvW0AAAAIwiQrV9a6WgM
2020: COVID
2021: https://www.botbrackets.com/edit?id=vyqMrbwlzPpA19Cl532RgebdeUyDaAJoAmIAAAflbQAAAAiqbkOnJX-GvW0AAAAIygD_I0q5Q1g
*/

// https://youtu.be/dV1HSscPYSY

// always say never
if ($2.Seed == 16)
    return (1);
else if ($1.Seed == 16)
    return (-1);

// ranked by overall odds.  Vegas baby!  VEGAS!!!
var vegasBaby = ["Gonzaga","Baylor","Michigan","Illinois","Iowa","Houston","Alabama","Ohio St.","Florida St.","West Virginia","Virginia","Oklahoma St.","UConn","Texas","Creighton","Texas Tech","Arkansas","Kansas","Wisconsin","Purdue","Villanova","Tennessee","Colorado","San Diego St.","Loyola Chicago","Southern California","BYU","North Carolina","Oklahoma","Oregon","LSU","Clemson","Georgia Tech","Florida","Maryland","Rutgers","Syracuse","Missouri","St. Bonaventure","Utah St.","VCU","Georgetown","Virginia Tech","Michigan St.","UCLA","Drake","Wichita St.","Oregon St.","Appalachian St.","UC Santa Barbara","Drexel","Grand Canyon","Morehead St.","Cleveland St.","Winthrop","Hartford","Abilene Christian","Colgate","Iona","Eastern Wash.","Norfolk St.","Ohio","Liberty","UNC Greensboro","Mt. St. Mary's","North Texas","Oral Roberts","Texas Southern"];

if (vegasBaby.indexOf(team1) > vegasBaby.indexOf(team2))
	return (-1);
else
	return (1);