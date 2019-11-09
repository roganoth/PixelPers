require("dotenv").config();
var keys = require("./keys.spotify");

var axios = require("axios");

var artist = process.argv[3];
var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get(bandsURL).then(function(result, err) {
    if (err) {
        console.log(err);
    }
    console.log(result);
})