'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Vibration = /** @class */ (function (_super) {
    tslib.__extends(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return core.cordova(this, "vibrate", { "sync": true }, arguments); };
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
    Vibration.decorators = [
        { type: core$1.Injectable }
    ];
    return Vibration;
}(core.IonicNativePlugin));

exports.Vibration = Vibration;
