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


// SCRAPER ROUTES =======================================
app.get('/scrape', function(req, res){

  url = 'http://www.hockey-reference.com/leagues/NHL_2016_skaters.html'

  request(url, function(err, resp, html){
    if (!err){
      var $ = cheerio.load(html);

      var playerInfo, playerName, position, team, gamesPlayed, goals, assists, plusMinus, penMinutes;

      var json = {
        players: []
      };

      var row = $("tr").find("td").find("a").first();

      $(row).each(function(){
        var data = $(this);

        playerName = {
          name: data.html()
        }

        json.players.push(playerName);
      });

      // ==========================================
      // position = ;
      // team = ;
      // gamesPlayed = ;
      // goals = ;
      // assists = ;
      // plusMinus = ;
      // penMinutes = ;
      // ==========================================
    }; // end of if

    fs.writeFile('espnNHL.json', JSON.stringify(json, null, 4), function(err){
      console.log('====================================' + '\n' + 'File created!' + '\n' + 'JSON file located in project Dir' + '\n' + '====================================' );
    });
    // res.send('Check console for status');
  }) // end of request
});
exports = module.exports = app;


// NOTES ==========================================
// - Can i find by table, pull table, then pull individually?
// - Can i create a class or id, and pull based on that? (.addClass)

// TEMP ==========================================
