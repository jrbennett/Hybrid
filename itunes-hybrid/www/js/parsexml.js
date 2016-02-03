/**
 * Created by justinbennett on 2016-01-06.
 *
 * Hopefully this method will prepare the raw xml file and spit out
 * useable movieitems.
 *
 * TODO: Still need a method to restrict building older items... maybe by date???
 */



var parseXML = (function(rawXML) {

    console.log("parseXML: Received raw xml data... Processing", rawXML);

    //collect all items from rawXML
    var items = rawXML.getElementsByTagName('item'),
        movieItems = [],
        feedLastBuildDate = rawXML.getElementsByTagName('lastBuildDate');


    // the heavy lifting starts here
    // loop through array for movies with'Trailer' in the title
    // create a movie item for each one.
    for (var i = 0; i < items.length; i++) {

        // start with the title and weed out non-trailers
       var title = items[i].childNodes[1].textContent;
        //console.log(items[i].childNodes);

        if (title.includes("Trailer") || title.includes("trailer")) {

            // lets build a movie item!!!!
            var publishDate = prettyDate(items[i].childNodes[7].textContent),
                posterStr = items[i].childNodes[9].textContent,
                posterLink = getPosterLink(posterStr),
                link = items[i].childNodes[3].textContent,
                trailerLink = getTrailerLink(link);

            // TODO: Figure out Trailer link.
            movieItems.push(new MovieItem(publishDate, title, posterLink, trailerLink, ''))

        } else {
            console.log("Bouncing: " + title);
        }
    }

    // return array of movies
    return movieItems;

    /////////////////////////////////////
    // METHODS

    function  getPosterLink(str) {
        var begin = str.indexOf("img src") + 9,
            end = str.indexOf('"', begin);

        return str.substring(begin, end).trim();
    }

    function prettyDate(str) {
        var end = str.indexOf(':') - 2,
            begin = str.indexOf(',') + 1;

        return str.substring(begin, end).trim();
    }

    function getTrailerLink(link) {

        // THANKS GERRY - used most of your logic from the itunes project!

        var theRealLink = link;

        // replace the start of the link with the correct top-level URL
        theRealLink = theRealLink.replace( "http://trailers.apple.com/trailers/", "http://movietrailers.apple.com/movies/" );

        var positions =[],
            pos = link.indexOf('/'),
            count = 0;

        while (pos !== -1) {
            count++;
            pos = link.indexOf('/', pos + 1);
          //  console.log("COUNT: " + count, "POSITION: "+ pos);
            positions.push(pos);
        }

        var upperBound = positions.length - 1,
            begin = (positions[upperBound - 2] +1), //strip off leading slash
            end = (positions[upperBound - 1]);

        var name = link.substring(begin, end);

        // re-build the real link by appending each piece.
        // Use the concat( ) method to concatenate 2 Strings.
        theRealLink = theRealLink.concat( name );

        theRealLink = theRealLink.concat( "-tlr1" );

        // the last piece: resolution + extension
        theRealLink = theRealLink.concat( "_i320.m4v" );

        // Studios.
        if ( theRealLink.includes("/lions_gate/") )
            theRealLink = theRealLink.replace( "/lions_gate/", "/lionsgate/" );
        if ( theRealLink.includes("/magnolia/") )
            theRealLink = theRealLink.replace( "/magnolia/", "/magnolia_pictures/" );
        if ( theRealLink.includes("/pnwpictures/") )
            theRealLink = theRealLink.replace( "/pnwpictures/", "/pnp/" );

        // Edge case: movie name
        if ( theRealLink.includes("thedivergentseriesallegiant") )
            theRealLink = theRealLink.replace( "thedivergentseriesallegiant", "allegiant" );

        return theRealLink.trim();
    }
});


