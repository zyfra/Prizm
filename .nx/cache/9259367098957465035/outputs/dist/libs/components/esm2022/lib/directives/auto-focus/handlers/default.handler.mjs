import { Directive, ElementRef, Inject, Optional, Self } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { Observable, race, timer } from 'rxjs';
import { map, skipWhile, take, throttleTime } from 'rxjs/operators';
import { PRIZM_POLLING_TIME } from '../../../constants/polling-time';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { AbstractPrizmAutofocusHandler } from './abstract.handler';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = `.ng-animating`;
export class PrizmDefaultAutofocusHandler extends AbstractPrizmAutofocusHandler {
    constructor(prizmFocusableComponent, elementRef, animationFrame$) {
        super(prizmFocusableComponent, elementRef);
        this.animationFrame$ = animationFrame$;
    }
    setFocus() {
        if (this.isTextFieldElement) {
            race(timer(TIMEOUT), this.animationFrame$.pipe(throttleTime(PRIZM_POLLING_TIME), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus());
        }
        else {
            this.element.focus();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDefaultAutofocusHandler, deps: [{ token: PRIZM_FOCUSABLE_ITEM_ACCESSOR, optional: true, self: true }, { token: ElementRef }, { token: ANIMATION_FRAME }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmDefaultAutofocusHandler, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDefaultAutofocusHandler, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [PRIZM_FOCUSABLE_ITEM_ACCESSOR]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [ANIMATION_FRAME]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2hhbmRsZXJzL2RlZmF1bHQuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV4RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRW5FLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixNQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQztBQUc5QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsNkJBQTZCO0lBQzdFLFlBSUUsdUJBQTZELEVBQ3pDLFVBQW1DLEVBQ2IsZUFBbUM7UUFFN0UsS0FBSyxDQUFDLHVCQUF1QixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRkQsb0JBQWUsR0FBZixlQUFlLENBQW9CO0lBRy9FLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUNGLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDdkIsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQ3RELFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQ0YsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs4R0ExQlUsNEJBQTRCLGtCQUk3Qiw2QkFBNkIseUNBRTdCLFVBQVUsYUFDVixlQUFlO2tHQVBkLDRCQUE0Qjs7MkZBQTVCLDRCQUE0QjtrQkFEeEMsU0FBUzs7MEJBR0wsUUFBUTs7MEJBQ1IsSUFBSTs7MEJBQ0osTUFBTTsyQkFBQyw2QkFBNkI7OzBCQUVwQyxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9GUkFNRSB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgcmFjZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2tpcFdoaWxlLCB0YWtlLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQUklaTV9QT0xMSU5HX1RJTUUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvcG9sbGluZy10aW1lJztcbmltcG9ydCB7IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2ZvY3VzYWJsZS1pdGVtLWFjY2Vzc29yJztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUF1dG9mb2N1c0hhbmRsZXIgfSBmcm9tICcuL2Fic3RyYWN0LmhhbmRsZXInO1xuXG5jb25zdCBUSU1FT1VUID0gMTAwMDtcbmNvbnN0IE5HX0FOSU1BVElPTl9TRUxFQ1RPUiA9IGAubmctYW5pbWF0aW5nYDtcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgUHJpem1EZWZhdWx0QXV0b2ZvY3VzSGFuZGxlciBleHRlbmRzIEFic3RyYWN0UHJpem1BdXRvZm9jdXNIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2VsZigpXG4gICAgQEluamVjdChQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUilcbiAgICBwcml6bUZvY3VzYWJsZUNvbXBvbmVudDogUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfCBudWxsLFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChBTklNQVRJT05fRlJBTUUpIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0aW9uRnJhbWUkOiBPYnNlcnZhYmxlPG51bWJlcj5cbiAgKSB7XG4gICAgc3VwZXIocHJpem1Gb2N1c2FibGVDb21wb25lbnQsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgcHVibGljIHNldEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGV4dEZpZWxkRWxlbWVudCkge1xuICAgICAgcmFjZShcbiAgICAgICAgdGltZXIoVElNRU9VVCksXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUkLnBpcGUoXG4gICAgICAgICAgdGhyb3R0bGVUaW1lKFBSSVpNX1BPTExJTkdfVElNRSksXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMuZWxlbWVudC5jbG9zZXN0KE5HX0FOSU1BVElPTl9TRUxFQ1RPUikpLFxuICAgICAgICAgIHNraXBXaGlsZShCb29sZWFuKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuZWxlbWVudC5mb2N1cygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=