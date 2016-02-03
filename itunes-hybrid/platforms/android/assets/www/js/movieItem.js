/**
 * Created by justinbennett on 2016-01-06.
 *
 * Constructor pattern
 */


var MovieItem = function(date, movieTitle, plink, tlink, i) {

    //private data members
    var pubDate = date,
        title = movieTitle,
        posterURL = plink,
        trailerURL = tlink,
        id = i;                // match the PK in DB

    // Remove the '- trailer' for display
    this.prettyTitle = function() {
        var end = title.indexOf('-'),
            begin = 0;

        return title.substring(begin, end).trim();
    };

    // Public Getters and Setters

    this.getPubDate = function() {
        return pubDate;
    };

    this.getPosterURL = function() {
        return posterURL;
    };

    this.getTrailerURL = function() {
        return trailerURL;
    };

    this.setId = function(value) {
        id = value;
    };

    this.getId = function() {
        return id;
    };

};
