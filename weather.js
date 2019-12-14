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
