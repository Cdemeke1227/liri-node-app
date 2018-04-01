// -----------------------
// LIRI Logic Handler
// -----------------------
var fs = require('fs');
// -----------------------
var liriObj = {
    tweet: function (keys) {
        console.log('tweets');
        console.log(keys.twitter);
        //  var client = new Twitter(keys.twitter);


        var twitterHandle = "DMK_COD3R";
        if (typeof process.argv[3] !== "undefined") {
            twitterHandle = process.argv[3];
        }

        // var twitterHandle = "DMK_COD3R";
        console.log(twitterHandle);

        // var params = { screen_name: twitterHandle };
        // client.get('statuses/user_timeline', params, function (error, tweets, response) {
        //     if (!error) {
        //         console.log(tweets);
        //     }
        // });
    },
    spot: function () {
        console.log('spotify');
        // var spotify = new Spotify(keys.spotify);
    },
    movieInfo: function () {
        console.log('movie');
    },
    doIt: function () {
        console.log('say what');
    },
    reply: function () {
        console.log(
            "\r\n" +
            'LIRI only responds to the correct commands followed by a <search parameter>:' + "\r\n" +
            '1. my-tweets           <twitter handle>' + '\r\n' +
            '2. spofity-this-song   <song name>' + '\r\n' +
            '3. movie-this          <movie name>' + '\r\n' +
            '4. do-what-it-says' + '\r\n' +
            'NOTE: If the song or movie title is more than one work it should be wrapped in "quotes"'
        );
    }
}
// -----------------------
module.exports = liriObj;