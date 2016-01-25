// SETUP ===========================================
// DEPENDENCIES
var express   = require('express'),
    fs        = require('fs'),
    request   = require('request'),
    cheerio   = require('cheerio');

var app = express();

var port = process.env.PORT || 8081;
app.listen(port);
console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);


// ROUTES ===========================================

app.get('/scrape', function(req, res){

  url = 'http://espn.go.com/nhl/statistics/player/_/stat/points/'

  request(url, function(err, resp, html){
    if (!err){
      var $ = cheerio.load(html);

      var playerInfo, playerName, position, team, gamesPlayed, goals, assists, plusMinus, penMinutes;

      var json = {
        playerInfo : {
          playerName : "",
          // position : "",
          // team : "",
          // gamesPlayed : "",
          // goals : "",
          // assists : "",
          // plusMinus : "",
          // penMinutes : "",
        },
      };

      $('.oddrow' && '.evenrow').filter(function(){
        var data = $(this);

        playerName = data.children().eq(1).children().text();
        // position = ;
        // team = ;
        // gamesPlayed = ;
        // goals = ;
        // assists = ;
        // plusMinus = ;
        // penMinutes = ;

        json.playerInfo.playerName = playerName;
        // json.playerInfo.position = position;
        // json.playerInfo.team = team;
        // json.playerInfo.gamesPlayed = gamesPlayed;
        // json.playerInfo.goals = goals;
        // json.playerInfo.assists = assists;
        // json.playerInfo.plusMinus = plusMinus;
        // json.playerInfo.penMinutes = penMinutes;
      });


    }; // end of if

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File created! JSON file located in project dir')
    });

    // res.send('Check console for status');
  }) // end of request
});

exports = module.exports = app;
