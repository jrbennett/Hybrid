/**
 * CONSTANTS MODULE
 *
 * Created by justinbennett on 2016-01-05.
 *
 * Started using revealing module pattern but initally thought it unnecessary...
 * reverted back as its more expressive/meaningful.
 *
 *
 *
 */


var C = ( function() {
    var appName = "iTunes Movie Trailers",
        logTag = "APP: ";

    function getAppName() { return appName; }
    function  getLogTag() { return logTag; }

    return {
        APP_NAME: getAppName(),
        LOG_TAG: getLogTag()
    };

})();

