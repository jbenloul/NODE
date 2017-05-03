// ### What Each Command Should Do

// 1. `node liri.js my-tweets`

//    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from

//    * if no song is provided then your program will default to
//      * "The Sign" by Ace of Base

// 3. `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//        * Rotten Tomatoes URL.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
//      * It's on Netflix!

// 4. `node liri.js do-what-it-says`
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Feel free to change the text in that document to test out the feature for other commands.


"my-tweets"
"spotify-this-song"
"movie-this"
"do-what-it-says"

// Everything above is what is given to us already______________________________________________________________

var command = process.argv[2]



if (command === "my-tweets") {
    //* This will show your last 20 tweets and when they were created at in your terminal/bash window.
    //https://www.npmjs.com/package/node-tweet-stream
} else if (command === "spotify-this-song") {
	//https://www.npmjs.com/package/spotify-playlist-downloader
 //    * This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from

//    * if no song is provided then your program will default to
//      * "The Sign" by Ace of Base
} else if (command === "movie-this") {

//    * This will output the following information to your terminal/bash window:

//      ```
//		console log the path for all of these 
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//        * Rotten Tomatoes URL.
// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
//      * It's on Netflix!
    
} else if (command === "do-what-it-says") {
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Feel free to change the text in that document to test out the feature for other commands.
}