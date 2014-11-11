/**
 * Created by Imakandy on 11.11.2014 г..
 */
function soccerResults(arr){
    var teams = {};
    for(var i = 0; i<arr.length;i++){
        var team = arr[i].split("/");
        var team2 = team[1].split(":");
        var mainTeam = team[0].trim();
        var score = team2[1].split("-");
        var enemyTeam = team2[0].trim();
        if (!teams[mainTeam]) {
            teams[mainTeam] = {};
            teams[mainTeam].goalsScored = 0;
            teams[mainTeam].goalsConceded = 0;
            teams[mainTeam].matchesPlayedWith = [];
        }
        if (!teams[enemyTeam]) {
            teams[enemyTeam] = {};
            teams[enemyTeam].goalsScored = 0;
            teams[enemyTeam].goalsConceded = 0;
            teams[enemyTeam].matchesPlayedWith = [];
        }
        teams[mainTeam].goalsScored += parseInt(score[0]);
        teams[mainTeam].goalsConceded += parseInt(score[1]);
        teams[enemyTeam].goalsScored += parseInt(score[1]);
        teams[enemyTeam].goalsConceded += parseInt(score[0]);
        if (teams[mainTeam].matchesPlayedWith.indexOf(enemyTeam) == -1){
            teams[mainTeam].matchesPlayedWith.push(enemyTeam);
        }
        if (teams[enemyTeam].matchesPlayedWith.indexOf(mainTeam) == -1){
            teams[enemyTeam].matchesPlayedWith.push(mainTeam);
        }
    }
    teams = sortObjectProperties(teams);
    for (var team in teams) {
        teams[team].matchesPlayedWith.sort();
    }
    console.log(JSON.stringify(teams));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}


//soccerResults(['Germany / Argentina: 1-0',
//'Brazil / Netherlands: 0-3',
//'Netherlands / Argentina: 0-0',
//'Brazil / Germany: 1-7',
//'Argentina / Belgium: 1-0',
//'Netherlands / Costa Rica: 0-0',
//'France / Germany: 0-1',
//'Brazil / Colombia: 2-1']);

soccerResults(['Germany/Argentina:18-0',
'Brazil/Netherlands:36-32',
'Netherlands/Argentina:12-11',
'Brazil/Germany:61-97',
'Argentina/Belgium:11-3',
'Netherlands/CostaRica:22-18',
'France/Germany:11-16',
'Brazil/Colombia:21-31',
'Argentina/Germany:8-4',
'Brazil/Netherlands:27-11',
'Argentina/Netherlands:76-74',
'Brazil/Germany:1-2',
'Argentina/Belgium:21-13',
'CostaRica/Netherlands:42-42',
'France/Germany:11-16',
'Colombia/France:11-6',
'germany/france:7-6']);