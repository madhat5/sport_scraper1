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

  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(err, resp, html){
    if (!err){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = {
        title : "",
        release : "",
        rating : ""
      };

      $('.header').filter(function(){
        var data = $(this);

        title = data.children().first().text();
        release = data.children().last().children().text();

        json.title = title;
        json.release = release;
      });

      $('.star-box-giga-star').filter(function(){
        var data = $(this);

        rating = data.text();
        json.rating = rating;
      })
    }; // end of if

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File created! JSON file located in project dir')
    });

    // res.send('Check console for status');
  }) // end of request
});

exports = module.exports = app;
