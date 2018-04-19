# Project Title: liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Prerequisites

The package.json lists dependent node packages as listed below:

#### Twitter
npm install twitter
*    [Twitter API](https://www.npmjs.com/package/twitter)
#### Spotify
npm install node-spotify-api
*   [Spotify API](https://www.npmjs.com/package/node-spotify-api)
#### Request
npm install request
*   [Request](https://www.npmjs.com/package/request)
#### FS
npm install fs
#### DotEnv
npm install dotenv
*   [dotenv](https://www.npmjs.com/package/dotenv)
#### Log4js
npm install log4js
*   [Log4js](https://www.npmjs.com/package/log4js)


What things you need to install the software and how to install them
*   [Node JS](https://nodejs.org/en/)


### Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Download the directory form git hub:
    *   ```git clone: https://github.com/Cdemeke1227/liri-node-app.git```
    *   ```cd [liri-node-app]```

2. Using terminal (bash/cmd) run npm install from the [liri-node-app] directory retrieve node modules

3. Next, change the name of `.env.example` to  `.env`, replacing the values with your API keys (no quotes) once you have them:

    * This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node.

    * Since you are using a clone this app from github and run to run it, you need to supply your own `.env` file for it to work.

4. Get your Twitter API keys by following these steps:

    * Step One: Visit <https://apps.twitter.com/app/new>
   
    * Step Two: Fill out the form with dummy data. Type `http://google.com` in the Website input. Don't fill out the Callback URL input. Then submit the form.
   
    * Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 
     
        * Copy and paste them into your .env file, replacing the `your-twitter-consumer-key` and `your-twitter-consumer-secret` placeholders.
   
    * Step Four: At the bottom of the page, click the `Create my access token` button to get your access token key and secret. 
     
        * Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file, replacing the placeholders for `your-twitter-access-token-key` and `your-twitter-access-token-secret`.

5. You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
   
    * Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

## Getting Started

To use the [liri-node-app] 

 Using terminal (bash/cmd)
    *   cd [liri-node-app]

### Get Tweets

    Retrieves up to your latest 20 tweets:
        ```
        node liri.js my-tweets <twitter username>
        ```

### Get Song Info

    Retrieves song information for 5 songs:
        ```
        node liri.js spotify-this-song <song name>
        ```

### Get Movie Info

    Retrieves movie information:
        ```
        node liri.js movie-this <movie name>
        ```

### Get Random info

    Retrieves random text inside a file and does what it says:
        ```
        node liri.js do-what-it-says
        ```


*   Random info is retrieved from random.txt file     
*   All node and interaction and responses are logged to liri.log file

## Authors

* **Christopher Demeke** - *Initial work* - [Cdemeke1227](https://github.com/Cdemeke1227)

## Acknowledgments

* Hat tip to anyone who's code was used

