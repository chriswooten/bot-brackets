// Ukraine is game to you?! https://youtu.be/fzLtF_PxbYw

/*
Color codes obtained from https://teamcolorcodes.com/ncaa-color-codes/
Are they right?
¯\_(ツ)_/¯
Good enough!  
*/

/*
This bot will pick the team whos two primary colors are closest
to the colors in Ukrain's flag.
Is this the right way to calculate similary with the flag's colors? 
Who knows!  Are these all the school's primary colors?
Sure?  Probably?  A&M's looked right.
*/

/*
It will also pick San Fransisco, because they have the only Ukranian in the tournament,
as far as I can tell.  Which was my first bot idea.  LOL
Go Volodymyr Markovetskyy?
https://basketball.realgm.com/national/countries/27/Ukraine/ncaa_players
*/

var colorsTeam1 = GetPrimaryColors(team1);
var colorsTeam2 = GetPrimaryColors(team2);

print (team1 + " = " + colorsTeam1);
print (team2 + " = " + colorsTeam2);

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

// How 'bout I take your little board and smash!
// AKA, San Francisco all the way!  Volodymyr Markovetskyy!
if ($1.Position === 30)
  return (1);
else if ($2.Position === 30)
  return (-1);

var team1ColorDifference = ColorsDifference(colorsTeam1);
print (team1ColorDifference);

var team2ColorDifference = ColorsDifference(colorsTeam2);
print (team2ColorDifference);

if (team1ColorDifference < team2ColorDifference)
  return (1);
else
  return (-1);

function ColorsDifference(teamColors)
{
  var ukraineFlagColors = [[0, 87, 184], [254, 221, 0]];
  var distance1 = ColorDifference(ukraineFlagColors[0], teamColors[0]);
  var distance2 = ColorDifference(ukraineFlagColors[1], teamColors[1]);
  var altDistance1 = ColorDifference(ukraineFlagColors[0], teamColors[1]);
  var altDistance2 = ColorDifference(ukraineFlagColors[1], teamColors[0]);
  
  print (distance1 + distance2);
  print (altDistance1 + altDistance2);

  return (Math.min(distance1 + distance2, altDistance1 + altDistance2));
}

function ColorDifference(color1, color2)
{
  var x1 = color1[0];
  var x2 = color2[0];
  var y1 = color1[1];
  var y2 = color2[1];
  var z1 = color1[2];
  var z2 = color2[2];

	/*
  var x1 = 7;
  var x2 = 17;
  var y1 = 4;
  var y2 = 6;
  var z1 = 3;
  var z2 = 2;
  10.246950765959598 
  */
  
  var distance = Math.pow((Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2) +
                Math.pow(z2 - z1, 2) * 1.0), 0.5);
  
  return (distance);
}

function GetPrimaryColors(team)
{
	switch (team)
	{
		case "Gonzaga": return [[4, 30, 66],[200, 16, 46]];
		case "Georgia St.": return [[0, 57, 166],[198, 12, 48]];
		case "Boise St.": return [[214, 67, 9],[0, 51, 160]];
		case "Memphis": return [[0, 48, 135],[137, 141, 141]];
		case "UConn": return [[0, 14, 47],[255, 255, 255]];
		case "New Mexico St.": return [[134, 31, 65],[151, 153, 155]];
		case "Arkansas": return [[157, 34, 53],[255, 255, 255]];
		case "Vermont": return [[21, 71, 52],[139, 91, 41]];
		case "Alabama": return [[158, 27, 50],[130, 138, 143]];
		case "Notre Dame": return [[12, 35, 64],[201, 151, 0]];
		case "Texas Tech": return [[204, 0, 0],[0, 0, 0]];
		case "Montana St.": return [[0, 32, 91],[185, 151, 91]];
		case "Michigan St.": return [[24, 69, 59],[255, 255, 255]];
		case "Davidson": return [[172, 26, 47],[0, 0, 0]];
		case "Duke": return [[0, 48, 135],[255, 255, 255]];
		case "Cal St. Fullerton": return [[0, 39, 76],[220, 130, 24]];
		case "Baylor": return [[21, 71, 52],[255, 184, 28]];
		case "Norfolk St.": return [[0, 122, 83],[243, 208, 62]];
		case "North Carolina": return [[123, 175, 212],[255, 255, 255]];
		case "Marquette": return [[0, 51, 102],[205, 204, 0]];
		case "Saint Mary's (CA)": return [[205, 0, 27],[0, 55, 104]];
		case "Indiana": return [[153, 0, 0],[238, 237, 235]];
		case "UCLA": return [[45, 104, 96],[242, 169, 0]];
		case "Akron": return [[4, 30, 66],[168, 153, 104]];
		case "Texas": return [[191, 87, 0],[51, 63, 72]];
		case "Virginia Tech": return [[99, 0, 49],[207, 69, 32]];
		case "Purdue": return [[206, 184, 136],[0, 0, 0]];
		case "Yale": return [[0, 53, 107],[255, 255, 255]];
		case "Murray St.": return [[255, 69, 0],[0, 33, 68]];
		case "San Francisco": return [[253, 187, 48],[0, 84, 60]];
		case "Kentucky": return [[0, 51, 160],[255, 255, 255]];
		case "Saint Peter's": return [[0, 60, 113],[0, 114, 206]];
		case "Arizona": return [[204, 0, 51],[0, 51, 102]];
		case "Wright St.": return [[2, 105, 55],[206, 160, 82]];
		case "Seton Hall": return [[0, 51, 160],[158, 162, 163]];
		case "TCU": return [[77, 25, 121],[164, 189, 173]];
		case "Houston": return [[201, 42, 57],[125, 41, 53]];
		case "UAB": return [[0, 99, 65],[204, 138, 0]];
		case "Illinois": return [[19, 41, 75],[232, 74, 39]];
		case "Chattanooga": return [[0, 56, 107],[224, 170, 15]];
		case "Colorado St.": return [[30, 77, 43],[200, 195, 114]];
		case "Michigan": return [[0, 39, 76],[255, 203, 5]];
		case "Tennessee": return [[255, 130, 0],[88, 89, 91]];
		case "Longwood": return [[21, 33, 59],[153, 157, 158]];
		case "Ohio St.": return [[187, 0, 0],[102, 102, 102]];
		case "Loyola Chicago": return [[146, 34, 71],[254, 189, 24]];
		case "Villanova": return [[0, 32, 91],[19, 181, 234]];
		case "Delaware": return [[0, 83, 159],[255, 221, 49]];
		case "Kansas": return [[0, 81, 186],[232, 0, 13]];
		case "A&M-Corpus Christi": return [[0, 103, 197],[0, 127, 62]];
		case "San Diego St.": return [[194, 48, 56],[35, 31, 32]];
		case "Creighton": return [[0, 93, 170],[0, 36, 93]];
		case "Iowa": return [[255, 205, 0],[0, 0, 0]];
		case "Richmond": return [[0, 0, 102],[153, 0, 0]];
		case "Providence": return [[138, 141, 143],[0, 0, 0]];
		case "South Dakota St.": return [[0, 51, 160],[255, 209, 0]];
		case "LSU": return [[70, 29, 124],[253, 208, 35]];
		case "Iowa St.": return [[200, 16, 46],[241, 190, 72]];
		case "Wisconsin": return [[197, 5, 12],[255, 255, 255]];
		case "Colgate": return [[130, 16, 25],[225, 0, 40]];
		case "Southern California": return [[153, 27, 30],[255, 199, 44]];
		case "Miami (FL)": return [[244, 115, 33],[0, 80, 48]];
		case "Auburn": return [[12, 35, 64],[232, 119, 34]];
		case "Jacksonville St.": return [[203, 32, 39],[0, 0, 0]];
		default: return [[255, 255, 255], [255, 255, 255]];
	}
}
