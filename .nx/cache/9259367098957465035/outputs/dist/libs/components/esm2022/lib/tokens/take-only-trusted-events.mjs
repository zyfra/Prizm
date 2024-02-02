import { InjectionToken } from '@angular/core';
/**
 * @description:
 * The isTrusted read-only property of the Event interface is a boolean value that is true
 * when the event was generated by a user action, and false when the event was created or
 * modified by a script or dispatched via EventTarget.dispatchEvent().
 */
export const PRIZM_TAKE_ONLY_TRUSTED_EVENTS = new InjectionToken('This token need for override behavior the `prizmPressedObservable` function', {
    factory: () => true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFrZS1vbmx5LXRydXN0ZWQtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvdG9rZW5zL3Rha2Utb25seS10cnVzdGVkLWV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQTRCLElBQUksY0FBYyxDQUN2Riw2RUFBNkUsRUFDN0U7SUFDRSxPQUFPLEVBQUUsR0FBWSxFQUFFLENBQUMsSUFBSTtDQUM3QixDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbjpcbiAqIFRoZSBpc1RydXN0ZWQgcmVhZC1vbmx5IHByb3BlcnR5IG9mIHRoZSBFdmVudCBpbnRlcmZhY2UgaXMgYSBib29sZWFuIHZhbHVlIHRoYXQgaXMgdHJ1ZVxuICogd2hlbiB0aGUgZXZlbnQgd2FzIGdlbmVyYXRlZCBieSBhIHVzZXIgYWN0aW9uLCBhbmQgZmFsc2Ugd2hlbiB0aGUgZXZlbnQgd2FzIGNyZWF0ZWQgb3JcbiAqIG1vZGlmaWVkIGJ5IGEgc2NyaXB0IG9yIGRpc3BhdGNoZWQgdmlhIEV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFBSSVpNX1RBS0VfT05MWV9UUlVTVEVEX0VWRU5UUzogSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oXG4gICdUaGlzIHRva2VuIG5lZWQgZm9yIG92ZXJyaWRlIGJlaGF2aW9yIHRoZSBgcHJpem1QcmVzc2VkT2JzZXJ2YWJsZWAgZnVuY3Rpb24nLFxuICB7XG4gICAgZmFjdG9yeTogKCk6IGJvb2xlYW4gPT4gdHJ1ZSxcbiAgfVxuKTtcbiJdfQ==