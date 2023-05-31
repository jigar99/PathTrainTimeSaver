var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var VibrationOriginal = /** @class */ (function (_super) {
    __extends(VibrationOriginal, _super);
    function VibrationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrationOriginal.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    VibrationOriginal.pluginName = "Vibration";
    VibrationOriginal.plugin = "cordova-plugin-vibration";
    VibrationOriginal.pluginRef = "navigator";
    VibrationOriginal.repo = "https://github.com/apache/cordova-plugin-vibration";
    VibrationOriginal.platforms = ["Android", "iOS", "Windows"];
    return VibrationOriginal;
}(AwesomeCordovaNativePlugin));
var Vibration = new VibrationOriginal();
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlicmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBcUM3RCw2QkFBMEI7Ozs7SUFTdkQsMkJBQU8sYUFBQyxJQUF1Qjs7Ozs7O29CQS9DakM7RUFzQytCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBWaWJyYXRpb25cbiAqIEBwcmVtaWVyIHZpYnJhdGlvblxuICogQGRlc2NyaXB0aW9uIFZpYnJhdGVzIHRoZSBkZXZpY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3ZpYnJhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlicmF0aW9uOiBWaWJyYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFZpYnJhdGUgdGhlIGRldmljZSBmb3IgYSBzZWNvbmRcbiAqIC8vIER1cmF0aW9uIGlzIGlnbm9yZWQgb24gaU9TLlxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgxMDAwKTtcbiAqXG4gKiAvLyBWaWJyYXRlIDIgc2Vjb25kc1xuICogLy8gUGF1c2UgZm9yIDEgc2Vjb25kXG4gKiAvLyBWaWJyYXRlIGZvciAyIHNlY29uZHNcbiAqIC8vIFBhdHRlcm5zIHdvcmsgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKFsyMDAwLDEwMDAsMjAwMF0pO1xuICpcbiAqIC8vIFN0b3AgYW55IGN1cnJlbnQgdmlicmF0aW9ucyBpbW1lZGlhdGVseVxuICogLy8gV29ya3Mgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVmlicmF0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlicmF0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVmlicmF0ZXMgdGhlIGRldmljZSBmb3IgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB0aW1lIHtudW1iZXJ8bnVtYmVyW119IE1pbGxpc2Vjb25kcyB0byB2aWJyYXRlIHRoZSBkZXZpY2UuIElmIHBhc3NlZCBhbiBhcnJheSBvZiBudW1iZXJzLCBpdCB3aWxsIGRlZmluZSBhIHZpYnJhdGlvbiBwYXR0ZXJuLiBQYXNzIDAgdG8gc3RvcCBhbnkgdmlicmF0aW9uIGltbWVkaWF0ZWx5LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHZpYnJhdGUodGltZTogbnVtYmVyIHwgbnVtYmVyW10pIHt9XG59XG4iXX0=