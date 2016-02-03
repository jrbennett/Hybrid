/**
 * Created by justinbennett on 2015-12-21.
 */

var xmlRequest = (function () {

    var URL_LOCAL = "data.xml",
        URL_REMOTE = "http://trailers.apple.com/trailers/home/rss/newtrailers.rss",
        xhttp = new XMLHttpRequest();

    return new Promise(function(resolve, reject){
        xhttp.open("GET", URL_REMOTE, true);

        xhttp.addEventListener('load', function() {
            if ( xhttp.status == 200 ){
                resolve(xhttp.responseXML);
            } else {
                reject( Error(xhttp.statusText ) );
            }
        });

        xhttp.addEventListener('error', function () {
            reject(Error("Network Error"));
        });
        xhttp.send();
    });
})();
