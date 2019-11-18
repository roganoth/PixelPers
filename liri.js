require("dotenv").config();
var keys = require("./keys.js");
// var spotifyKeys = spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var spotify = require("node-spotify-api");
var request = process.argv[2];
var fs = require("fs");

fs.appendFile('./log.txt', "\n" + process.argv, function (err) {
    if (err) throw err;
});

if (request === "artist-event") {
    var artist = process.argv.slice(3).join("");
    // var artist = process.argv[3]
    var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(bandsURL).then(function (result, err) {
        if (err) {
            console.log(err);
        }
        if (result.data.length === 0) {
            console.log("Not currently touring, sorry.");
        }
        for (i = 0; i < result.data.length; i++) {
            console.log("============================");
            console.log(moment(result.data[i].datetime).format('LL'));
            console.log("============================");
            console.log("Venue: " + result.data[i].venue.name);
            console.log("============================");
            console.log(result.data[i].venue.city + ", " + result.data[i].venue.country);
            console.log("============================");
        }
    })
}

if (request === "movie") {
    if (process.argv.length === 3) {
        axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy").then(function (response) {
            var info = response.data;
            console.log("Title: " + info.Title);
            console.log("Release Year: " + info.Year);
            console.log("imdbRating: " + info.imdbRating);
            console.log("Rotten Tomatoes Rating: " + info.Ratings[1].Value);
            console.log("Country: " + info.Country);
            console.log("Language: " + info.Language);
            console.log("Plot: " + info.Plot);
            console.log("Actors: " + info.Actors);

        })
    }
    else {
        var title = process.argv.slice(3).join("+");
        axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(function (response) {
            var info = response.data;
            // console.log(response);
            console.log("Title: " + info.Title);
            console.log("Release Year: " + info.Year);
            console.log("imdbRating: " + info.imdbRating);
            console.log("Rotten Tomatoes Rating: " + info.Ratings[1].Value);
            console.log("Country: " + info.Country);
            console.log("Language: " + info.Language);
            console.log("Plot: " + info.Plot);
            console.log("Actors: " + info.Actors);
        })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);

            });
    }
}

if (request === "music") {
    var spotifyInfo = process.argv.slice(3).join("");
    axios.get(spotify.search({ type: 'artist OR album OR track', query: spotifyInfo, limity: 20 }, function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    }))
}

if (request === "random") {
    var random = fs.readFile("./random.txt")
}
