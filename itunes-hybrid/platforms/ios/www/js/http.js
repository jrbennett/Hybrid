/**
 * Created by justinbennett on 2015-12-21.
 */

var xmlRequest = (function () {

    var URL_LOCAL = "newtrailers.xml",
        URL_REMOTE = "http://trailers.apple.com/trailers/home/rss/newtrailers.rss",
        xhttp = new XMLHttpRequest();


    return {

        getLocal: function() {
            console.log("Called for Local file");

            xhttp.onreadystatechange = function () {
                if(xhttp.readyState == 4 && xhttp.status == 200 ) {
                    return xhttp.responseXML
                }
            };

            xhttp.open("GET", URL_REMOTE, true);
            xhttp.send();
        },

        getRemote: function() {
            console.log('Called for Remote file');

        }


    }

})();