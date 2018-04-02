// -----------------------
// Node imports
// -----------------------
const dotenv          = require("dotenv").config("./.env");
const keys            = require("./keys.js");
const liriObj         = require("./liriObj.js");
const request         = require("request");
const fs              = require('fs');
var twitter           = require("twitter");
var Spotify           = require('node-spotify-api');
// -----------------------
// User Interaction
// -----------------------
var liriCommand     = "Hello Liri";
//Check to see if user entered a command
if (typeof process.argv[2] !== "undefined") {
    liriCommand = process.argv[2];
} else { liriObj.reply(); }
//Check to see if user entered a argument
if (typeof process.argv[3] !== "undefined") {
    var liriArgument = process.argv[3];
}
//Runs the LIRI Logic Object
liriObj.command(keys, liriCommand, liriArgument, request, fs, twitter, Spotify);