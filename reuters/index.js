/* global $ */ 
var request = require('request');
var cheerio = require('cheerio');
// var searchTerm = 'screen+scraping';

var url = 'http://www.reuters.com';

request(url, function(err, resp, body){
 if(err)
 {
   console.log(err);
 }
 else
 {
  $ = cheerio.load(body);
 var links = $('a'); //jquery get all hyperlinks
  
  for(var i=0;i<links.length;i++)
  {
     console.log($(links[i]).text() + ':\n  ' + $(links[i]).attr('href'));
  }
}});
  
//   $(links).each(function(i, link){
//     console.log($(link).text() + ':\n  ' + $(link).attr('href'));
//   });
// });


//another method:
// const rp = require('request-promise');
// const cheerio = require('cheerio');

// const options = {
//   uri: `https://www.hindustantimes.com`,
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };

// rp(options)
//   .then(($) => {
//     console.log($);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  
// $('#cities').find('.small').text();