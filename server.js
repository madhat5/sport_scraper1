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
// >>>ESPN<<<
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

        // for (var x = 0; x < json.length; x++){
        //   playerName = data.children().children().text();

        //   json.skaters[x].playerName = playerName;
        // };

      var oddRow = $(".oddrow")


      $('tr.oddrow, tr.evenrow').filter(function(){
        var data = $(this);
        // console.log(data);

        playerName = data.children().children().text();
        // playerName = data.find('td').find('a').text();

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
//  - is there a completely different method to try?



// STORAGE ==========================================
// // >>>HOCKEY-REFERENCE<<<
// app.get('/scrape', function(req, res){

//   url = 'http://www.hockey-reference.com/leagues/NHL_2016_skaters.html';

//   request(url, function(err, resp, html){
//     if (!err){
//       var $ = cheerio.load(html);

//       var skaters, playerName, position, team, gamesPlayed, goals, assists, plusMinus, penMinutes;

//       var json = {
//         skaters : [{
//           playerName : "",
//           // position : "",
//           // team : "",
//           // gamesPlayed : "",
//           // goals : "",
//           // assists : "",
//           // plusMinus : "",
//           // penMinutes : "",
//         }]
//       };

//       $('tr').each().filter(function(){
//         var data = $(this);

//         playerName = data.find('td').find('a').text();

//         json.skaters.playerName = playerName;
//       });

//       // $('tr').each().filter(function(){
//       //   var data = $(this);
//         // console.log(data);

//         // for (var x = 0; x < 882; x++){
//         //   playerName = data.find('tr').eq(x).find('td').find('a').text();
//         //   console.log(playerName);

//         //   json.skaters[x].playerName = playerName;
//         // };

//         // playerName = data.children().children().text();
//         // playerName = data.find('td').find('a').text();

//         // position = ;
//         // team = ;
//         // gamesPlayed = ;
//         // goals = ;
//         // assists = ;
//         // plusMinus = ;
//         // penMinutes = ;

//         // json.playerInfo.playerName = playerName;
//         // json.playerInfo.position = position;
//         // json.playerInfo.team = team;
//         // json.playerInfo.gamesPlayed = gamesPlayed;
//         // json.playerInfo.goals = goals;
//         // json.playerInfo.assists = assists;
//         // json.playerInfo.plusMinus = plusMinus;
//         // json.playerInfo.penMinutes = penMinutes;
//       // });


//     }; // end of if

//     fs.writeFile('hocrefNHL.json', JSON.stringify(json, null, 4), function(err){
//       console.log('====================================' + '\n' + 'File created!' + '\n' + 'JSON file located in project Dir' + '\n' + '====================================' );
//     });

//     // res.send('Check console for status');
//   }) // end of request
// });
