
var TwitterPackage = require('twitter');

// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: '4htzviqLS4MiNXdhdmIMBOKUX',
  consumer_secret: 'jfQlywNQbgg84rTRUIYNUauRb93K1T0QmzswKU7pv6raXvSZUJ',
  access_token_key: '4769508458-r7wksI9v6Xw6hTE4EWkmXpitI0FSOFqbAKE7eGc',
  access_token_secret: '3cAL2Es31vClF0uONurfynqGCImP6JhkuisE5JYHwaBKj'
}

var Twitter = new TwitterPackage(secret);

var query = "itsevalieu";
Twitter.get('search/tweets', {q: query, count: 1, lang:"en"}, function(error, tweets, response) {
   
   var tweet_list = tweets['statuses'];
   
   for (var i = 0; i < tweet_list.length; i++) {
   		if ('retweeted_status' in tweet_list[i]) {
   			continue;
   		} 
   		var screen_name = tweet_list[i].user.screen_name;
   		var message = "@" + screen_name + " Alot confused, a lot not understand feelings";
   		var tweet_id = tweet_list[i].id_str;

   		try {
		    Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
			     console.log("Tweet posted successfully!");
  			});
  		}

  		catch(err) {
  		    console.log(err);
  		}
   }
});
