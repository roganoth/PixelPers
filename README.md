This app works in node by using the user inputs to make a number of AJAX calls - the different calls are made based on user keywords. If the user runs the program ("node liri.js") the next input will determine the call and the following input will be their search. 
Example 1:
    node liri.js movie the matrix - will log to console information from omdb about the matrix;
    node liri.js artist-event billie eilish - will log to console upcomming events and venues for billie eilish;
    node liri.js music metallica (or enter sandman or st anger) - should return results from spotify about the artist, track, or album

the spotify node api isn't working. it keeps returning that spotify.search is not a function. I've tried every different syntax I could think of including wrapping it in axios.get, stand alone, I even copied straight from the docs and it kept saying that spotiy.search is not a function. I'm not sure what to do but submit it as it. 

The log.txt file is appended with all of the user's command inputs via the npm fs.

[This is a linke to the giphy of the app working](https://giphy.com/gifs/W3686CAZMnmcelwD6b)