cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "cordova-plugin-mfp.mfp",
        "file": "plugins/cordova-plugin-mfp/bootstrap.js",
        "pluginId": "cordova-plugin-mfp",
        "runs": true
    },
    {
        "id": "cordova-plugin-mfp-push.MFPPush",
        "file": "plugins/cordova-plugin-mfp-push/www/MFPPush.js",
        "pluginId": "cordova-plugin-mfp-push",
        "clobbers": [
            "MFPPush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-dialogs": "1.3.3",
    "cordova-plugin-globalization": "1.0.7",
    "cordova-plugin-mfp": "8.0.2017090705",
    "cordova-plugin-mfp-push": "8.0.2017082110"
};
// BOTTOM OF METADATA
});