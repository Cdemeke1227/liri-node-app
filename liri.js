// -----------------------
// Node imports
// -----------------------
const dotenv    = require("dotenv").config("./.env");
const keys      = require("./keys.js");
const liriObj   = require("./liriObj.js");
const request   = require("request");
const fs        = require('fs');
// const twitter       = require("twitter");
// const spotify       = require ("spotify");
var liriCommand = "Hello Liri";
if(typeof process.argv[2] !== "undefined"){
    liriCommand = process.argv[2];
}

// -----------------------
// User Command Options
// -----------------------
switch (liriCommand.toLowerCase()) {
    case 'my-tweets':
        liriObj.tweet(keys);
        break;
    case 'spotify-this-song':
        liriObj.spot();
        break;
    case 'movie-this':
        liriObj.movieInfo();
        break;
    case 'do-what-it-says':
        liriObj.doIt();
        break;
    default:
        liriObj.reply();
}
