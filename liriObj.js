
const log4js = require('log4js');
log4js.configure('./config/log4js.json');
// -----------------------
// LIRI Logic Handler
// -----------------------
var liriObj = {
    // Initial LIRI Logic to filter what comand and function to use
    command: function (keys, liriCommand, liriArgument, request, fs, Twitter, Spotify) {
        var logger = log4js.getLogger('liri');
        switch (liriCommand.toLowerCase()) {
            case 'my-tweets':
                var twitterHandle = "DMK_COD3R";
                logger.info(liriCommand);
                if (typeof liriArgument !== "undefined") {
                    twitterHandle = liriArgument;
                    logger.info(liriArgument);
                }
                liriObj.tweet(keys, twitterHandle, Twitter);
                break;
            case 'spotify-this-song':
                var songName = "The Sign"
                logger.info(liriCommand);
                if (typeof liriArgument !== "undefined") {
                    songName = liriArgument;
                    logger.info(liriArgument);
                }
                liriObj.spot(keys, songName, Spotify);
                break;
            case 'movie-this':
                var movieName = "Mr. Nobody";
                logger.info(liriCommand);
                if (typeof liriArgument !== "undefined") {
                    movieName = liriArgument;
                    logger.info(liriArgument);
                }
                liriObj.movieInfo(request, movieName);
                break;
            case 'do-what-it-says':
                //Do nothing
                break;
            default:
                liriObj.reply();
        }
    },
    // Twitter Function to show the last 20 tweets and when they were created. To display in your terminal/bash window
    tweet: function (keys, twitterHandle, Twitter) {
        var logger = log4js.getLogger('tweet');
        var client = new Twitter(keys.twitter);
        var params = { screen_name: twitterHandle };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                // console.log(tweets[0].created_at);
                for (var i = 0; i < 20; i++) {
                    console.log(
                        "----------------------------------------------------------------" + "\n" +
                        tweets[i].created_at + "\n" +
                        tweets[i].text
                    );
                    logger.info("----------------------------------------------------------------" + "\n" +
                        tweets[i].created_at + "\n" +
                        tweets[i].text
                    );
                }
            }
        });
    },
    //This will show the following information about the song in your terminal/bash window: Artist(s), Song's name, A preview link of the song from Spotify, The Album
    spot: function (keys, songName, Spotify) {
        var logger = log4js.getLogger('spotify');
        var spotify = new Spotify(keys.spotify);
        spotify
            .search({ type: 'track', query: songName, limit: 1 })
            // .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
            .then(function (response) {
                for (var i = 0; i < response.tracks.items.length; i++) {
                    var log = (
                        "----------------------------------------------------------------" + "\r\n" +
                        "Artist Name:   " + response.tracks.items[i].artists[0].name + "\r\n" +
                        "Song Name:     " + response.tracks.items[i].name + "\r\n" +
                        "Preview Link:          " + response.tracks.items[i].preview_url + "\r\n" +
                        "Album:         " + response.tracks.items[i].album.name + "\r\n" +
                        "----------------------------------------------------------------" + "\n"
                    );
                    console.log(log);
                    logger.info(log);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    //This will show movie information
    movieInfo: function (request, movieName) {
        var logger = log4js.getLogger('OMDB');
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var log = (
                    "----------------------------------------------------------------" + "\r\n" +
                    "Title: " + JSON.parse(body).Title + "\r\n" +
                    "Year: " + JSON.parse(body).Year + "\r\n" +
                    "IMDB Rating: " + JSON.parse(body).imdbRating + "\r\n" +
                    "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[2].Value + "\r\n" +
                    "Country: " + JSON.parse(body).Country + "\r\n" +
                    "Production:" + JSON.parse(body).Production + "\r\n" +
                    "Language: " + JSON.parse(body).Language + "\r\n" +
                    "Plot: " + JSON.parse(body).Plote + "\r\n" +
                    "Actors: " + JSON.parse(body).Actors + "\r\n" +
                    "----------------------------------------------------------------" + "\n"
                );
                console.log(log);
                logger.info(log);
            }
        });
    },
    // Reply if user does not put in correct arguments
    reply: function () {
        var logger = log4js.getLogger('liri');
        var log = (
            "\r\n" +
            "----------------------------------------------------------------" + '\r\n' +
            'LIRI only responds to the correct commands followed by a <search parameter>:' + '\n' +
            "----------------------------------------------------------------" + '\n' +
            '1. node liri.js    my-tweets           <twitter handle>' + '\r\n' +
            '2. node liri.js    spofity-this-song   <song name here>' + '\r\n' +
            '3. node liri.js    movie-this          <movie name>' + '\r\n' +
            '4. node liri.js    do-what-it-says     {./random.txt file in the directory}' + '\r\n' +
            "----------------------------------------------------------------" + '\r\n' +
            'NOTE: If the song or movie title is more than one word it should be wrapped in "quotes"' + '\n' +
            'NOTE: In the random.txt the first value must have a comma after"' + '\n' +
            "----------------------------------------------------------------" + '\r\n'
        );
        console.log(log);
        logger.error(log);
    },
    // Reply if user does not place song or movie in quotes if needed
    reply2: function () {
        var logger = log4js.getLogger('liri');
        var log = (
            "\r\n" +
            "----------------------------------------------------------------" + '\r\n' +
            'NOTE: If the song or movie title is more than one word it should be wrapped in "quotes"' + '\n' +
            "----------------------------------------------------------------" + '\r\n'
        );
        console.log(log);
        logger.error(log);
    }
}
// -----------------------
module.exports = liriObj;