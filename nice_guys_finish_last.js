/*
nice guys finish last
2013: N/A
2014: https://www.botbrackets.com/edit?id=N3iBNBuklnZgYbUmr0T0x-1DKx6DaAJoAmIAAAfebQAAAAiqbkOnJX-GvW0AAAAIrmj-PW5l_Rs
*/

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

return ($1.PF - $2.PF);