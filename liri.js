var request = require("request");
var fs = require('fs');

var Twitter = require('twitter');
var twitterKeys = require('./keys.js').twitterKeys
var tweet = ""
var movieName = ""
var client = new Twitter(twitterKeys)
var command = process.argv[2];
var queryUrl;

if (command === "my-tweets") {
    console.log("Tweets will show here");

    if (process.argv.length > 3) {
        console.log('this worked')

        for (var i = 3; i < process.argv.length; i++) {
            tweet += process.argv[i] += "+"
            var tweetSearch = tweet.slice(0, -1);
        }
        console.log(tweetSearch);

        client.get('search/tweets', { q: tweetSearch, result_type: "recent", count: 20 }, function(error, tweets, response) {
            // console.log(response);
            for (var i = 0; i < tweets.statuses.length; i++) {
                tweets[i]
                console.log(tweets.statuses[i].text);
            }
            console.log(tweets.statuses[0].text);
        });
    }
} else if (command === "spotify-this-song") {
    var songName = '';
    var songNameFinal;

    if (process.argv.length > 3) {
        console.log('this worked')

        for (var i = 3; i < process.argv.length; i++) {
            songName += process.argv[i] += "+"
            songNameFinal = songName.slice(0, -1);
        }
        console.log(songNameFinal);

        queryUrl = "https://api.spotify.com/v1/search?q=" + songNameFinal + "&type=track"
        console.log(queryUrl);

        request(queryUrl, function(error, response, body) {
            console.log("The song's Artist is: " + JSON.parse(body).tracks.items[0].album.artists[0].name);
            console.log("Even though you searched for it specifically, we're asked to provide you the song's name, so here goes: " + JSON.parse(body).tracks.items[0].name);
            console.log("The song's preview link: " + JSON.parse(body).tracks.items[0].external_urls.spotify);
            console.log("The song is from the Album: " + JSON.parse(body).tracks.items[0].album.name);
        });
    }
} else if (command === "movie-this") {
    if (process.argv.length > 3) {
        console.log('this worked')

        for (var i = 3; i < process.argv.length; i++) {
            movieName += process.argv[i] += "+"
            movieInputFinal = movieName.slice(0, -1);
        }
        console.log(movieInputFinal);

        queryUrl = "http://www.omdbapi.com/?t=" + movieInputFinal + "&y=&plot=short&r=json"
        console.log(queryUrl)
            //    * This will output the following information to your terminal/bash window:
        request(queryUrl, function(error, response, body) {
            // If the request is successful
            if (!error && response.statusCode === 200) {
                console.log("The movie's Title is: " + JSON.parse(body).Title);
                console.log("The movie's release year is: " + JSON.parse(body).Year);
                // console.log("The movie's IMDB Rating is :" + JSON.parse(body).Ratings[0].Value);
                console.log("The movie's IMDB Rating is: " + JSON.parse(body).imdbRating);
                console.log("The movie's runtime is: " + JSON.parse(body).Runtime);
                console.log("The movie's Country of production is: " + JSON.parse(body).Country);
                console.log("The movie's Language(s) is/are: " + JSON.parse(body).Language);
                console.log("The movie's Plot is: " + JSON.parse(body).Plot);
                console.log("The movie's Actors are: " + JSON.parse(body).Actors);
                console.log("The movie's URL is: " + JSON.parse(body).Website);
            }
        })
    } else if (process.argv.length === 3) {
        queryUrl = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&r=json"
            //    * This will output the following information to your terminal/bash window:
        request(queryUrl, function(error, response, body) {
            // If the request is successful
            if (!error && response.statusCode === 200) {
                console.log("The movie's Title is: " + JSON.parse(body).Title);
                console.log("The movie's release year is: " + JSON.parse(body).Year);
                // console.log("The movie's IMDB Rating is :" + JSON.parse(body).Ratings[0].Value);
                console.log("The movie's IMDB Rating is: " + JSON.parse(body).imdbRating);
                console.log("The movie's runtime is: " + JSON.parse(body).Runtime);
                console.log("The movie's Country of production is: " + JSON.parse(body).Country);
                console.log("The movie's Language(s) is/are: " + JSON.parse(body).Language);
                console.log("The movie's Plot is: " + JSON.parse(body).Plot);
                console.log("The movie's Actors are: " + JSON.parse(body).Actors);
                console.log("The movie's URL is: " + JSON.parse(body).Website);
            }
        })
    }
} else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        //console.log(data);
        var dataArray = data.split(",");
        for (var i = 0; i < dataArray.length; i += 2) {
            command = dataArray[i].trim();
            var textFileInput = dataArray[i + 1].trim();
            console.log(command);
            // console.log(textFileInput)
            if (command === "spotify-this-song") {
                queryUrl = "https://api.spotify.com/v1/search?q=" + textFileInput + "&type=track";
                request(queryUrl, function(error, response, body) {
                    console.log("The song's Artist is: " + JSON.parse(body).tracks.items[0].album.artists[0].name);
                    console.log("Even though you searched for it specifically, we're asked to provide you the song's name, so here goes: " + JSON.parse(body).tracks.items[0].name);
                    console.log("The song's preview link: " + JSON.parse(body).tracks.items[0].external_urls.spotify);
                    console.log("The song is from the Album: " + JSON.parse(body).tracks.items[0].album.name);
                });
            } else if (command === "my-tweets") {
                client.get('search/tweets', { q: textFileInput, result_type: "recent", count: 20 }, function(error, tweets, response) {
                    // console.log(response);
                    for (var i = 0; i < tweets.statuses.length; i++) {
                        tweets[i]
                        console.log(tweets.statuses[i].text);
                    }
                })
            } else if (command === "movie-this") {
                queryUrl = "http://www.omdbapi.com/?t=" + textFileInput + "&y=&plot=short&r=json"
                console.log(queryUrl)
                    //    * This will output the following information to your terminal/bash window:
                request(queryUrl, function(error, response, body) {
                    // If the request is successful
                    if (!error && response.statusCode === 200) {
                        console.log("The movie's Title is: " + JSON.parse(body).Title);
                        console.log("The movie's release year is: " + JSON.parse(body).Year);
                        // console.log("The movie's IMDB Rating is :" + JSON.parse(body).Ratings[0].Value);
                        console.log("The movie's IMDB Rating is: " + JSON.parse(body).imdbRating);
                        console.log("The movie's runtime is: " + JSON.parse(body).Runtime);
                        console.log("The movie's Country of production is: " + JSON.parse(body).Country);
                        console.log("The movie's Language(s) is/are: " + JSON.parse(body).Language);
                        console.log("The movie's Plot is: " + JSON.parse(body).Plot);
                        console.log("The movie's Actors are: " + JSON.parse(body).Actors);
                        console.log("The movie's URL is: " + JSON.parse(body).Website);
                    }
                })

            }
        }
    });
}
