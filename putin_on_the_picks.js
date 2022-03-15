/*
Putin on the Picks
2013: N/A
2014: N/A
2015: N/A
2016: N/A
2017: https://www.botbrackets.com/edit?id=QdRtotUzzo_gbgt7bEbZon9eH1SDaAJoAmIAAAfhbQAAAAiqbkOnJX-GvW0AAAAIujMoqL2M9SQ
*/

// I assume Russia has a hand in the results and that the common thread is
// vodka consumption per state.  Because I couldn't find vodka consumption per
// state, I went with alcohol consumption per capita per state.  I actually
// thought it was liquor consumption, but too late!  We'll assume that vodka
// overall alcohol consumption per capita per state is indicative of vodka
// consumption - probably a better assumption for just liquor, but Soviet.
// We're also assuming that people drink to celebrate their basketball teams
// and not to drown their woes in their pathetic basketball teams.
// Data from https://www.statista.com/statistics/442848/per-capita-alcohol-consumption-of-all-beverages-in-the-us-by-state/
// Save you a click, New Hampshire is far and away the drunkest and, unsurprisingly,
// Utah is the most sober.  Followed, a bit surprisingly, by West Virgina.
// Guess they don't measure moonshine.

// Because even Putin only has so much power, always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

var gallons = [2.34,2.15,2.97,2.11,2.11,2.06,2.59,2.01,2.23,2.3,2.23,2.42,2.28,2.97,2.06,1.99,2.26,2.73,2.32,2.01,1.97,2.37,1.78,2.34,2.15,2.03,2.59,2.59,2.3,2.11,2.37,3.41,1.92,2.06,2.59,2.32,2.35,3.35,1.97,3.05,2.29,2.39,2.69,2.19,2.32,1.91,1.88,2.59,2.06,2.23,1.79,2.37,2.8,2.01,1.97,2.28,2.03,1.92,2.3,2.03,2.03,1.92,1.88,1.88]

var result = gallons[$2.Position - 1] - gallons[$1.Position - 1];
if (result == 0)
  result = $2.Seed - $1.Seed // If there's one thing Putin can't stand, it's a tie.
  							 // Thankfully, he is tolerant of them for teams with the same
  							 // seed.

if (result > 0)
  return (1);
else if (result < 0)
  return (-1);
else
  return (0);