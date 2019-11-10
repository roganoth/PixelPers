require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var request = process.argv[2];

if (request === "artist-event") {
    var artist = process.argv.slice(3).join();
    var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(bandsURL).then(function (result, err) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        // for (i = 0; i < result.length; i++) {
        //     console.log(result[i].datetime)
        //     console.log("Venue: " + result[i].venue.name);
        //     console.log(result[i].venue.city + ", "+ result[i].venue.country);
        // }

    })
}

if (request === "movie") {
    var title = process.argv.slice(3).join("+");
    axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(function (response) {
        console.log(response);
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

if (request === "music") {
    var spotifyInfo = process.argv.slice(3).join();
    var spotify = new spotify(keys.spotify);
    axios.get("https://api.spotify.com" + "/v1/artists/" + spotifyInfo)
}