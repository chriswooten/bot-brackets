/*
it seemed legit
2013: N/A
2014: https://www.botbrackets.com/edit?id=YjGGod_ynVQrX9sKei34p1CfWomDaAJoAmIAAAfebQAAAAiqbkOnJX-GvW0AAAAIrmj5mAtYVm8
*/

// http://www.basketball-reference.com/about/factors.html

function CalculateShootingFactor(team)
{
	return (($(team).FGM + 0.5 * $(team)["3FG"]) / $(team).FGA)
}

function CalculateTurnoverFactor(team)
{
	var TOV = $(team).TO;
	var FGA = $(team).FGA;
	var FTA = $(team).FTA;
	
	return (TOV / (FGA + 0.44 * FTA + TOV));
}

function CalculateReboundingFactor(team, opponent)
{
	var ORB = $(team).ORB;
	var OppDRB = $(opponent).DRB;
	var DRB = $(team).DRB;
	var OppORB = $(opponent).DRB;

	return ((ORB / (ORB + OppDRB)) + (DRB / (OppORB + DRB)));
}

function CalculateFreeThrowFactor(team)
{
	return ($(team).FT / $(team).FTA);
}

function CalculateTotalScore(team)
{
	return (4 * $(team).ShootingFactor + 25 * $(team).TurnoverFactor + 20 * $(team).ReboundingFactor + 15 * $(team).FreeThrowFactor );
}

// always say never
if ($2.Seed == 16)
  return (1);
else if ($1.Seed == 16)
  return -1;

if (!$1.ShootingFactor)
	$1.ShootingFactor = CalculateShootingFactor(team1);

if (!$2.ShootingFactor)
	$2.ShootingFactor = CalculateShootingFactor(team2);

if (!$1.TurnoverFactor)
	$1.TurnoverFactor = CalculateTurnoverFactor(team1);

if (!$2.TurnoverFactor)
	$2.TurnoverFactor = CalculateTurnoverFactor(team2);

if (!$1.ReboundingFactor)
	$1.ReboundingFactor = CalculateReboundingFactor(team1, team2);

if (!$2.ReboundingFactor)
	$2.ReboundingFactor = CalculateReboundingFactor(team2, team1);

if (!$1.FreeThrowFactor)
	$1.FreeThrowFactor = CalculateFreeThrowFactor(team1);

if (!$2.FreeThrowFactor)
	$2.FreeThrowFactor = CalculateFreeThrowFactor(team2);

if (!$1.TotalScore)
	$1.TotalScore = CalculateTotalScore(team1);

if (!$2.TotalScore)
	$2.TotalScore = CalculateTotalScore(team2);

if ($1.TotalScore > $2.TotalScore)
    return 1;
else
    return -1;
