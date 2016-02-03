cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-plugin/www/sqlite.js",
        "id": "cordova-sqlite-plugin.SQLite"
    },
    {
        "file": "plugins/com.moust.cordova.videoplayer/www/videoplayer.js",
        "id": "com.moust.cordova.videoplayer.VideoPlayer",
        "clobbers": [
            "VideoPlayer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "cordova-sqlite-plugin": "1.0.0",
    "com.moust.cordova.videoplayer": "1.0.1"
}
// BOTTOM OF METADATA
});