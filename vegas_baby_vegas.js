/*
Vegas, Baby! VEGAS!
2013: N/A
2014: N/A
2015: N/A
2016: https://www.botbrackets.com/edit?id=pwBdASrjfKXKlX6hY-VeYr8f_fWDaAJoAmIAAAfgbQAAAAiqbkOnJX-GvW0AAAAItkWsCh62Y38
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

var odds = [650,35000,30000,8000,2800,50000,3300,20000,5000,8000,3300,50000,4500,25000,1500,75000,1800,75000,20000,10000,6600,30000,2200,75000,4000,35000,3300,75000,12500,15000,1400,75000,700,50000,15000,8000,3000,75000,1300,75000,8000,12500,1800,35000,6600,20000,1600,75000,1100,75000,15000,12500,3000,75000,4500,50000,12500,8000,6600,50000,10000,12500,750,75000];

return (odds[$2.Position - 1] - odds[$1.Position - 1]);
