// -----------------------
// LIRI Logic Handler
// -----------------------
var liriObj = {
    // Initial LIRI Logic to filter what comand and function to use
    command: function (keys, liriCommand, liriArgument, request, fs, Twitter, Spotify) {
        switch (liriCommand.toLowerCase()) {
            case 'my-tweets':
                var twitterHandle = "DMK_COD3R";
                if (typeof liriArgument !== "undefined") {
                    twitterHandle = liriArgument;
                }
                liriObj.tweet(keys, twitterHandle, Twitter);
                break;
            case 'spotify-this-song':
                var songName = "The Sign"
                if (typeof liriArgument !== "undefined") {
                    songName = liriArgument;
                }
                liriObj.spot(keys, songName, Spotify);
                break;
            case 'movie-this':
                var movieName = "Mr. Nobody";
                if (typeof liriArgument !== "undefined") {
                    movieName = liriArgument;
                }
                liriObj.movieInfo(request, movieName);
                break;
            case 'do-what-it-says':
                liriObj.doIt(keys, request, fs);
                break;
            default:
                liriObj.reply();
        }
    },
    // Twitter Function to show the last 20 tweets and when they were created. To display in your terminal/bash window
    tweet: function (keys, twitterHandle, Twitter) {
        var client = new Twitter(keys.twitter);
        var params = { screen_name: twitterHandle };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < 20; i++) {
                    console.log(
                        "----------------------------------------------------------------" + "\n" + 
                    (i+1) + " : " +tweets[i].text
                    );
                }
            }
        });
    },
    //This will show the following information about the song in your terminal/bash window: Artist(s), Song's name, A preview link of the song from Spotify, The Album
    spot: function (keys, songName, Spotify) {
        // console.log(keys.spotify);
        // console.log(songName);
        var spotify = new Spotify(keys.spotify);

        spotify
            .search({ type: 'track', query: songName, limit: 10 })
            // .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
            .then(function (response) {
                // console.log(response.tracks);
                for (var i = 0; i < response.tracks.items.length; i++) {
                    console.log(
                        "----------------------------------------------------------------" + "\r\n" +
                        "Artist Name:   " + response.tracks.items[i].artists[0].name + "\r\n" +
                        "Song Name:     " + response.tracks.items[i].name + "\r\n" +
                        "Link:          " + response.tracks.items[i].preview_url + "\r\n" +
                        "Album:         " + response.tracks.items[i].album.name + "\r\n" +
                        "----------------------------------------------------------------" + "\n"
                    );
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    //This will show movie information
    movieInfo: function (request, movieName) {
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // console.log(JSON.parse(body));
                console.log(
                    "----------------------------------------------------------------" + "\r\n" +
                    "Title: " + JSON.parse(body).Title+ "\r\n" +
                    "Year: " + JSON.parse(body).Year + "\r\n" +
                    "IMDB Rating: " + JSON.parse(body).imdbRating + "\r\n" +
                    "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[2].Value + "\r\n" +
                    "Country: " + JSON.parse(body).Country + "\r\n" +
                    "Language: " + JSON.parse(body).Language + "\r\n" +
                    "Plot: " + JSON.parse(body).Plote + "\r\n" +
                    "Actors: " + JSON.parse(body).Actors + "\r\n" +
                    "----------------------------------------------------------------" + "\n"
                );
            }
        });
    },
    //This will read comand and argument from a text file.
    doIt: function (keys, request, fs) {
        fs.readFile("random.txt", "utf8", (err, data) => {
            if (err) return console.log(err);
            var Text = data.split(",");
            var liriCommand = Text[0].toLowerCase();
            var liriArgument = Text[1];
            // console.log("1: "+liriCommand+ "  2:"+ liriArgument);

            liriObj.command(keys, liriCommand, liriArgument, request, fs, Twitter, Spotify);
        })
    },
    reply: function () {
        console.log(
            "\r\n" +
            "----------------------------------------------------------------" + '\r\n' +
            'LIRI only responds to the correct commands followed by a <search parameter>:' + '\n' +
            "----------------------------------------------------------------" + '\n' +
            '1. node liri.js    my-tweets           <twitter handle>' + '\r\n' +
            '2. node liri.js    spofity-this-song   <song name here>' + '\r\n' +
            '3. node liri.js    movie-this          <movie name>' + '\r\n' +
            '4. node liri.js    do-what-it-says' + '\r\n' +
            "----------------------------------------------------------------" + '\r\n' +
            'NOTE: If the song or movie title is more than one word it should be wrapped in "quotes"' + '\n' +
            "----------------------------------------------------------------" + '\r\n'
        );
    },
    reply2: function () {
        console.log(
            "\r\n" +
            "----------------------------------------------------------------" + '\r\n' +
            'NOTE: If the song or movie title is more than one word it should be wrapped in "quotes"' + '\n' +
            "----------------------------------------------------------------" + '\r\n'
        );
    }
}
// -----------------------
module.exports = liriObj;