import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { RESIZE_OBSERVER_SUPPORT, RESIZE_OPTION_BOX, ResizeObserverService, } from '@ng-web-apis/resize-observer';
import { Observable } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, mapTo, takeUntil, throttleTime, } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmZoneFree } from '../observables/zone-free';
import { PRIZM_POLLING_TIME } from '../constants/polling-time';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
export class PrizmResizeService extends ResizeObserverService {
    constructor(elementRef, ngZone, destroy$, support, box, animationFrame$) {
        super(elementRef, ngZone, support, box);
        return this.pipe(catchError(() => animationFrame$.pipe(throttleTime(PRIZM_POLLING_TIME), map(() => `${elementRef.nativeElement.clientWidth} ${elementRef.nativeElement.clientHeight}`), distinctUntilChanged(), mapTo(PRIZM_EMPTY_ARRAY))), debounceTime(0), prizmZoneFree(ngZone), takeUntil(destroy$));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmResizeService, deps: [{ token: ElementRef }, { token: NgZone }, { token: PrizmDestroyService }, { token: RESIZE_OBSERVER_SUPPORT }, { token: RESIZE_OPTION_BOX }, { token: ANIMATION_FRAME }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmResizeService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmResizeService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.NgZone, decorators: [{
                    type: Inject,
                    args: [NgZone]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [RESIZE_OBSERVER_SUPPORT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [RESIZE_OPTION_BOX]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [ANIMATION_FRAME]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9zZXJ2aWNlcy9yZXNpemUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixxQkFBcUIsR0FDdEIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsS0FBSyxFQUNMLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEscUJBQXFCO0lBQzNELFlBQ3NCLFVBQW1DLEVBQ3ZDLE1BQWMsRUFDRCxRQUEwQixFQUN0QixPQUFnQixFQUN0QixHQUE2QixFQUMvQixlQUFtQztRQUU1RCxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FDZCxlQUFlLENBQUMsSUFBSSxDQUNsQixZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFDaEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUM3RixvQkFBb0IsRUFBRSxFQUN0QixLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FDekIsQ0FDRixFQUNELFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixhQUFhLENBQUMsTUFBTSxDQUFDLEVBQ3JCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FDcEIsQ0FBQztJQUNKLENBQUM7OEdBeEJVLGtCQUFrQixrQkFFbkIsVUFBVSxhQUNWLE1BQU0sYUFDTixtQkFBbUIsYUFDbkIsdUJBQXVCLGFBQ3ZCLGlCQUFpQixhQUNqQixlQUFlO2tIQVBkLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVTs7MEJBR04sTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxNQUFNOzswQkFDYixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBQzFCLE1BQU07MkJBQUMsdUJBQXVCOzswQkFDOUIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX0ZSQU1FIH0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQge1xuICBSRVNJWkVfT0JTRVJWRVJfU1VQUE9SVCxcbiAgUkVTSVpFX09QVElPTl9CT1gsXG4gIFJlc2l6ZU9ic2VydmVyU2VydmljZSxcbn0gZnJvbSAnQG5nLXdlYi1hcGlzL3Jlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIG1hcFRvLFxuICB0YWtlVW50aWwsXG4gIHRocm90dGxlVGltZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgcHJpem1ab25lRnJlZSB9IGZyb20gJy4uL29ic2VydmFibGVzL3pvbmUtZnJlZSc7XG5pbXBvcnQgeyBQUklaTV9QT0xMSU5HX1RJTUUgfSBmcm9tICcuLi9jb25zdGFudHMvcG9sbGluZy10aW1lJztcblxuaW1wb3J0IHsgUFJJWk1fRU1QVFlfQVJSQVkgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bVJlc2l6ZVNlcnZpY2UgZXh0ZW5kcyBSZXNpemVPYnNlcnZlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTmdab25lKSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFByaXptRGVzdHJveVNlcnZpY2UpIGRlc3Ryb3kkOiBPYnNlcnZhYmxlPHZvaWQ+LFxuICAgIEBJbmplY3QoUkVTSVpFX09CU0VSVkVSX1NVUFBPUlQpIHN1cHBvcnQ6IGJvb2xlYW4sXG4gICAgQEluamVjdChSRVNJWkVfT1BUSU9OX0JPWCkgYm94OiBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMsXG4gICAgQEluamVjdChBTklNQVRJT05fRlJBTUUpIGFuaW1hdGlvbkZyYW1lJDogT2JzZXJ2YWJsZTxudW1iZXI+XG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgc3VwcG9ydCwgYm94KTtcblxuICAgIHJldHVybiB0aGlzLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgIGFuaW1hdGlvbkZyYW1lJC5waXBlKFxuICAgICAgICAgIHRocm90dGxlVGltZShQUklaTV9QT0xMSU5HX1RJTUUpLFxuICAgICAgICAgIG1hcCgoKSA9PiBgJHtlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGh9ICR7ZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodH1gKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIG1hcFRvKFBSSVpNX0VNUFRZX0FSUkFZKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgcHJpem1ab25lRnJlZShuZ1pvbmUpLFxuICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==