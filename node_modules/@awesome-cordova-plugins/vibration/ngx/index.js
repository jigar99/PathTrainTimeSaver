import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Vibration = /** @class */ (function (_super) {
    __extends(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    Vibration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Vibration, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Vibration.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Vibration });
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
    Vibration = __decorate([], Vibration);
    return Vibration;
}(AwesomeCordovaNativePlugin));
export { Vibration };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Vibration, decorators: [{
            type: Injectable
        }], propDecorators: { vibrate: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlicmF0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFxQzdELDZCQUEwQjs7OztJQVN2RCwyQkFBTyxhQUFDLElBQXVCOzJHQVRwQixTQUFTOytHQUFULFNBQVM7Ozs7OztJQUFULFNBQVMsa0JBQVQsU0FBUztvQkF0Q3RCO0VBc0MrQiwwQkFBMEI7U0FBNUMsU0FBUzs0RkFBVCxTQUFTO2tCQURyQixVQUFVOzhCQVVULE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFZpYnJhdGlvblxuICogQHByZW1pZXIgdmlicmF0aW9uXG4gKiBAZGVzY3JpcHRpb24gVmlicmF0ZXMgdGhlIGRldmljZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWJyYXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdmlicmF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVmlicmF0ZSB0aGUgZGV2aWNlIGZvciBhIHNlY29uZFxuICogLy8gRHVyYXRpb24gaXMgaWdub3JlZCBvbiBpT1MuXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xuICpcbiAqIC8vIFZpYnJhdGUgMiBzZWNvbmRzXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcbiAqIC8vIFZpYnJhdGUgZm9yIDIgc2Vjb25kc1xuICogLy8gUGF0dGVybnMgd29yayBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XG4gKlxuICogLy8gU3RvcCBhbnkgY3VycmVudCB2aWJyYXRpb25zIGltbWVkaWF0ZWx5XG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWJyYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBWaWJyYXRlcyB0aGUgZGV2aWNlIGZvciBnaXZlbiBhbW91bnQgb2YgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHRpbWUge251bWJlcnxudW1iZXJbXX0gTWlsbGlzZWNvbmRzIHRvIHZpYnJhdGUgdGhlIGRldmljZS4gSWYgcGFzc2VkIGFuIGFycmF5IG9mIG51bWJlcnMsIGl0IHdpbGwgZGVmaW5lIGEgdmlicmF0aW9uIHBhdHRlcm4uIFBhc3MgMCB0byBzdG9wIGFueSB2aWJyYXRpb24gaW1tZWRpYXRlbHkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdmlicmF0ZSh0aW1lOiBudW1iZXIgfCBudW1iZXJbXSkge31cbn1cbiJdfQ==