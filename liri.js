// -----------------------
// Node imports
// -----------------------
const dotenv = require("dotenv").config("./.env");
const keys = require("./keys.js");
const liriObj = require("./liriObj.js");
const request = require("request");
const fs = require('fs');
const twitter = require("twitter");
const Spotify = require('node-spotify-api');
// -----------------------
// User Interaction
// -----------------------
var liriCommand = "Hello Liri";

//Check to see if user entered a command
if (typeof process.argv[2] !== "undefined") {
    liriCommand = process.argv[2];
    if (liriCommand.toLowerCase() === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", (err, data) => {
            if (err) return console.log(err);
            var Text = data.split(",");
            liriCommand = Text[0].toLowerCase();
            var liriArgument = Text[1];
            if (typeof process.argv[4] === "undefined") {
              
                
                //Runs the LIRI Logic Object
                liriObj.command(keys, liriCommand, liriArgument, request, fs, twitter, Spotify);
            }
        });
    }
} else { liriObj.reply(); }

//Check to see if user entered a argument
if (typeof process.argv[3] !== "undefined") {
    var liriArgument = process.argv[3];
}

// Check to see if user entered argument incorrectly
if (typeof process.argv[4] === "undefined") {
    //Runs the LIRI Logic Object
    liriObj.command(keys, liriCommand, liriArgument, request, fs, twitter, Spotify);
} else {
    liriObj.reply2();
}