// var settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api?id=SubwayStats",
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
//     "x-rapidapi-key": "82dc767f13mshbdf4a2c3d79a8acp11acc7jsnba7678519fb8"
//   }
// };

// $.ajax(settings).done(function(response) {
//   console.log(response);
//   $("#tweet1").append(
//     response.all[4].innerHTML + "<br>" + response.all[6].innerHTML
//   );
//   $("#tweet2").append(
//     response.all[9].innerHTML + "<br>" + response.all[11].innerHTML
//   );
//   $("#tweet3").append(
//     response.all[14].innerHTML + "<br>" + response.all[16].innerHTML
//   );
// });

var weatherURL =
  "http://api.weatherapi.com/v1/current.json?key=be0c4ef8958e4be892a15652191312&q=new york";

$.ajax(weatherURL).done(function(response) {
  console.log(response);
  console.log(response.current.temp_f);
});

var twitterURL =
  "http://api.twitter.com/1.0/statuses/user_timeline.json?screen_name=twitterapi&count=2";

$.ajax(twitterURL).done(function(response) {
  console.log(response);
  console.log(response.current.temp_f);
});
