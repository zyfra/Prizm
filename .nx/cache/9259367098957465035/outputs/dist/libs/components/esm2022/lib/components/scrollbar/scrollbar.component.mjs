import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Inject, Input, } from '@angular/core';
import { PRIZM_IS_IOS, PRIZM_SCROLL_REF } from '../../tokens';
import { CSS, USER_AGENT } from '@ng-web-apis/common';
import { prizmIsFirefox } from '../../util/browser';
import { PRIZM_SCROLL_INTO_VIEW, PRIZM_SCROLLABLE } from '../../constants/events';
import { prizmGetElementOffset } from '../../util/dom';
import { PrizmHoveredService } from '../../services';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmScrollControlsComponent } from './scroll-controls.component';
import { AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
export function scrollRefFactory({ browserScrollRef }) {
    return browserScrollRef;
}
export class PrizmScrollbarComponent extends PrizmAbstractTestId {
    set visibility(visibility) {
        this.visibility$.next(visibility);
    }
    get visibility() {
        return this.visibility$.value;
    }
    constructor(hoveredService, cssRef, elementRef, userAgent, isIos) {
        super();
        this.hoveredService = hoveredService;
        this.cssRef = cssRef;
        this.elementRef = elementRef;
        this.userAgent = userAgent;
        this.isIos = isIos;
        this.testId_ = 'ui_scrollbar';
        this.delegated = false;
        this.isLegacy = !this.cssRef.supports('position', 'sticky') ||
            (prizmIsFirefox(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none'));
        this.visibility$ = new BehaviorSubject('auto');
        this.showScrollbars$ = this.visibility$.pipe(switchMap((visibility) => {
            const canShow = !this.isIos && (!this.isLegacy || this.delegated);
            if (!canShow)
                return of(false);
            switch (visibility) {
                case 'hidden':
                    return of(false);
                case 'auto':
                    return this.hoveredService.createHovered$(this.elementRef.nativeElement);
                default:
                    return of(true);
            }
        }), shareReplay(1));
        this.browserScrollRef = new ElementRef(this.elementRef.nativeElement);
    }
    get showNative() {
        return this.isLegacy && this.visibility === 'visible' && !this.delegated;
    }
    onScrollable(element, $event) {
        this.delegated = true;
        this.browserScrollRef.nativeElement = element;
    }
    scrollIntoView(detail, event) {
        if (this.delegated) {
            return;
        }
        const { nativeElement } = this.browserScrollRef;
        const { offsetTop, offsetLeft } = prizmGetElementOffset(nativeElement, detail);
        nativeElement.scrollTop = offsetTop + detail.offsetHeight / 2 - nativeElement.clientHeight / 2;
        nativeElement.scrollLeft = offsetLeft + detail.offsetWidth / 2 - nativeElement.clientWidth / 2;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarComponent, deps: [{ token: i1.PrizmHoveredService }, { token: CSS }, { token: i0.ElementRef }, { token: USER_AGENT }, { token: PRIZM_IS_IOS }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmScrollbarComponent, isStandalone: true, selector: "prizm-scrollbar", inputs: { visibility: "visibility" }, host: { listeners: { "prizm-scrollable": "onScrollable($event.detail)", "prizm-scroll-into-view": "scrollIntoView($event.detail,$event)" }, properties: { "class._legacy": "this.showNative" } }, providers: [
            {
                provide: PRIZM_SCROLL_REF,
                useFactory: scrollRefFactory,
                deps: [PrizmScrollbarComponent],
            },
        ], usesInheritance: true, ngImport: i0, template: "<prizm-scroll-controls [style.visibility]=\"(showScrollbars$ | async) ? '' : 'hidden'\"></prizm-scroll-controls>\n<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{z-index:0;position:relative;display:flex;overflow:auto}:host:not(._legacy),:host ::ng-deep [prizmScrollable]{scrollbar-width:none;-ms-overflow-style:none}:host:not(._legacy)::-webkit-scrollbar,:host ::ng-deep [prizmScrollable]::-webkit-scrollbar,:host:not(._legacy)::-webkit-scrollbar-thumb,:host ::ng-deep [prizmScrollable]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}:host._legacy{overflow:overlay}@media all and (-webkit-min-device-pixel-ratio: 0) and (-webkit-min-device-pixel-ratio: 0),all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){:host._legacy::-webkit-scrollbar,:host._legacy::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:2.667rem solid transparent}:host._legacy::-webkit-scrollbar{background-color:transparent}:host._legacy::-webkit-scrollbar-thumb{background-color:var(--prizm-clear-hover)}:host._legacy::-webkit-scrollbar-thumb:hover{background-color:var(--prizm-clear-active)}:host._legacy::-webkit-scrollbar-thumb:active{background-color:var(--prizm-text-03)}}.content{position:relative;z-index:0;flex:1;flex-basis:auto;width:100%;height:100%}\n"], dependencies: [{ kind: "component", type: PrizmScrollControlsComponent, selector: "prizm-scroll-controls" }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-scrollbar', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [PrizmScrollControlsComponent, AsyncPipe], providers: [
                        {
                            provide: PRIZM_SCROLL_REF,
                            useFactory: scrollRefFactory,
                            deps: [PrizmScrollbarComponent],
                        },
                    ], template: "<prizm-scroll-controls [style.visibility]=\"(showScrollbars$ | async) ? '' : 'hidden'\"></prizm-scroll-controls>\n<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{z-index:0;position:relative;display:flex;overflow:auto}:host:not(._legacy),:host ::ng-deep [prizmScrollable]{scrollbar-width:none;-ms-overflow-style:none}:host:not(._legacy)::-webkit-scrollbar,:host ::ng-deep [prizmScrollable]::-webkit-scrollbar,:host:not(._legacy)::-webkit-scrollbar-thumb,:host ::ng-deep [prizmScrollable]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}:host._legacy{overflow:overlay}@media all and (-webkit-min-device-pixel-ratio: 0) and (-webkit-min-device-pixel-ratio: 0),all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){:host._legacy::-webkit-scrollbar,:host._legacy::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:2.667rem solid transparent}:host._legacy::-webkit-scrollbar{background-color:transparent}:host._legacy::-webkit-scrollbar-thumb{background-color:var(--prizm-clear-hover)}:host._legacy::-webkit-scrollbar-thumb:hover{background-color:var(--prizm-clear-active)}:host._legacy::-webkit-scrollbar-thumb:active{background-color:var(--prizm-text-03)}}.content{position:relative;z-index:0;flex:1;flex-basis:auto;width:100%;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmHoveredService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [CSS]
                }] }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_AGENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_IS_IOS]
                }] }]; }, propDecorators: { visibility: [{
                type: Input
            }], showNative: [{
                type: HostBinding,
                args: ['class._legacy']
            }], onScrollable: [{
                type: HostListener,
                args: [`${PRIZM_SCROLLABLE}`, ['$event.detail']]
            }], scrollIntoView: [{
                type: HostListener,
                args: [`${PRIZM_SCROLL_INTO_VIEW}`, ['$event.detail', '$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFNUMsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEVBQUUsZ0JBQWdCLEVBQTJCO0lBQzVFLE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQztBQWlCRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1CO0lBQzlELElBQ0ksVUFBVSxDQUFDLFVBQW9DO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFpQ0QsWUFDbUIsY0FBbUMsRUFDdEIsTUFBVyxFQUN4QixVQUFzQixFQUNGLFNBQWlCLEVBQ2YsS0FBYztRQUVyRCxLQUFLLEVBQUUsQ0FBQztRQU5TLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDRixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBUztRQXBDckMsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUVuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRVQsYUFBUSxHQUN2QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDM0MsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV0RSxnQkFBVyxHQUMxQixJQUFJLGVBQWUsQ0FBMkIsTUFBTSxDQUFDLENBQUM7UUFFeEMsb0JBQWUsR0FBd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzFFLFNBQVMsQ0FBZ0QsQ0FBQyxVQUFvQyxFQUFFLEVBQUU7WUFDaEcsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixRQUFRLFVBQVUsRUFBRTtnQkFDbEIsS0FBSyxRQUFRO29CQUNYLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuQixLQUFLLE1BQU07b0JBQ1QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzRTtvQkFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxFQUNGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDZixDQUFDO1FBRU8scUJBQWdCLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQVUxRSxDQUFDO0lBRUQsSUFDVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDM0UsQ0FBQztJQUdNLFlBQVksQ0FBQyxPQUFvQixFQUFFLE1BQWE7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdNLGNBQWMsQ0FBQyxNQUFtQixFQUFFLEtBQVk7UUFDckQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUVELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0UsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDL0YsYUFBYSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDakcsQ0FBQzs4R0F2RVUsdUJBQXVCLHFEQTBDeEIsR0FBRyx1Q0FFSCxVQUFVLGFBQ1YsWUFBWTtrR0E3Q1gsdUJBQXVCLHNTQVJ2QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzVCLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ2hDO1NBQ0YsaURDdkNILGtMQUlBLCtzQ0Q0QlksNEJBQTRCLDZEQUFFLFNBQVM7OzJGQVN0Qyx1QkFBdUI7a0JBZm5DLFNBQVM7K0JBQ0UsaUJBQWlCLG1CQUdWLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLGFBQ3ZDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFVBQVUsRUFBRSxnQkFBZ0I7NEJBQzVCLElBQUksRUFBRSx5QkFBeUI7eUJBQ2hDO3FCQUNGOzswQkE0Q0UsTUFBTTsyQkFBQyxHQUFHOzswQkFFVixNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLFlBQVk7NENBM0NsQixVQUFVO3NCQURiLEtBQUs7Z0JBa0RLLFVBQVU7c0JBRHBCLFdBQVc7dUJBQUMsZUFBZTtnQkFNckIsWUFBWTtzQkFEbEIsWUFBWTt1QkFBQyxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBTy9DLGNBQWM7c0JBRHBCLFlBQVk7dUJBQUMsR0FBRyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fSVNfSU9TLCBQUklaTV9TQ1JPTExfUkVGIH0gZnJvbSAnLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7IENTUywgVVNFUl9BR0VOVCB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1Jc0ZpcmVmb3ggfSBmcm9tICcuLi8uLi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgUFJJWk1fU0NST0xMX0lOVE9fVklFVywgUFJJWk1fU0NST0xMQUJMRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9ldmVudHMnO1xuaW1wb3J0IHsgcHJpem1HZXRFbGVtZW50T2Zmc2V0IH0gZnJvbSAnLi4vLi4vdXRpbC9kb20nO1xuaW1wb3J0IHsgUHJpem1Ib3ZlcmVkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkgfSBmcm9tICcuL3Njcm9sbGJhci5tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vc2Nyb2xsLWNvbnRyb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsUmVmRmFjdG9yeSh7IGJyb3dzZXJTY3JvbGxSZWYgfTogUHJpem1TY3JvbGxiYXJDb21wb25lbnQpOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB7XG4gIHJldHVybiBicm93c2VyU2Nyb2xsUmVmO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1zY3JvbGxiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2Nyb2xsYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2Nyb2xsYmFyLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUHJpem1TY3JvbGxDb250cm9sc0NvbXBvbmVudCwgQXN5bmNQaXBlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fU0NST0xMX1JFRixcbiAgICAgIHVzZUZhY3Rvcnk6IHNjcm9sbFJlZkZhY3RvcnksXG4gICAgICBkZXBzOiBbUHJpem1TY3JvbGxiYXJDb21wb25lbnRdLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2Nyb2xsYmFyQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmlsaXR5KHZpc2liaWxpdHk6IFByaXptU2Nyb2xsYmFyVmlzaWJpbGl0eSkge1xuICAgIHRoaXMudmlzaWJpbGl0eSQubmV4dCh2aXNpYmlsaXR5KTtcbiAgfVxuICBnZXQgdmlzaWJpbGl0eSgpOiBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkge1xuICAgIHJldHVybiB0aGlzLnZpc2liaWxpdHkkLnZhbHVlO1xuICB9XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9zY3JvbGxiYXInO1xuXG4gIHByaXZhdGUgZGVsZWdhdGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBpc0xlZ2FjeTogYm9vbGVhbiA9XG4gICAgIXRoaXMuY3NzUmVmLnN1cHBvcnRzKCdwb3NpdGlvbicsICdzdGlja3knKSB8fFxuICAgIChwcml6bUlzRmlyZWZveCh0aGlzLnVzZXJBZ2VudCkgJiYgIXRoaXMuY3NzUmVmLnN1cHBvcnRzKCdzY3JvbGxiYXItd2lkdGgnLCAnbm9uZScpKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHZpc2liaWxpdHkkOiBCZWhhdmlvclN1YmplY3Q8UHJpem1TY3JvbGxiYXJWaXNpYmlsaXR5PiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bVNjcm9sbGJhclZpc2liaWxpdHk+KCdhdXRvJyk7XG5cbiAgcHVibGljIHJlYWRvbmx5IHNob3dTY3JvbGxiYXJzJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMudmlzaWJpbGl0eSQucGlwZShcbiAgICBzd2l0Y2hNYXA8UHJpem1TY3JvbGxiYXJWaXNpYmlsaXR5LCBPYnNlcnZhYmxlPGJvb2xlYW4+PigodmlzaWJpbGl0eTogUHJpem1TY3JvbGxiYXJWaXNpYmlsaXR5KSA9PiB7XG4gICAgICBjb25zdCBjYW5TaG93ID0gIXRoaXMuaXNJb3MgJiYgKCF0aGlzLmlzTGVnYWN5IHx8IHRoaXMuZGVsZWdhdGVkKTtcbiAgICAgIGlmICghY2FuU2hvdykgcmV0dXJuIG9mKGZhbHNlKTtcblxuICAgICAgc3dpdGNoICh2aXNpYmlsaXR5KSB7XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcblxuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3ZlcmVkU2VydmljZS5jcmVhdGVIb3ZlcmVkJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHNoYXJlUmVwbGF5KDEpXG4gICk7XG5cbiAgcmVhZG9ubHkgYnJvd3NlclNjcm9sbFJlZiA9IG5ldyBFbGVtZW50UmVmKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvdmVyZWRTZXJ2aWNlOiBQcml6bUhvdmVyZWRTZXJ2aWNlLFxuICAgIEBJbmplY3QoQ1NTKSBwcml2YXRlIHJlYWRvbmx5IGNzc1JlZjogYW55LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFVTRVJfQUdFTlQpIHByaXZhdGUgcmVhZG9ubHkgdXNlckFnZW50OiBzdHJpbmcsXG4gICAgQEluamVjdChQUklaTV9JU19JT1MpIHByaXZhdGUgcmVhZG9ubHkgaXNJb3M6IGJvb2xlYW5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuX2xlZ2FjeScpXG4gIHB1YmxpYyBnZXQgc2hvd05hdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0xlZ2FjeSAmJiB0aGlzLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJyAmJiAhdGhpcy5kZWxlZ2F0ZWQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKGAke1BSSVpNX1NDUk9MTEFCTEV9YCwgWyckZXZlbnQuZGV0YWlsJ10pXG4gIHB1YmxpYyBvblNjcm9sbGFibGUoZWxlbWVudDogSFRNTEVsZW1lbnQsICRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGVnYXRlZCA9IHRydWU7XG4gICAgdGhpcy5icm93c2VyU2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihgJHtQUklaTV9TQ1JPTExfSU5UT19WSUVXfWAsIFsnJGV2ZW50LmRldGFpbCcsICckZXZlbnQnXSlcbiAgcHVibGljIHNjcm9sbEludG9WaWV3KGRldGFpbDogSFRNTEVsZW1lbnQsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGVnYXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy5icm93c2VyU2Nyb2xsUmVmO1xuICAgIGNvbnN0IHsgb2Zmc2V0VG9wLCBvZmZzZXRMZWZ0IH0gPSBwcml6bUdldEVsZW1lbnRPZmZzZXQobmF0aXZlRWxlbWVudCwgZGV0YWlsKTtcbiAgICBuYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IG9mZnNldFRvcCArIGRldGFpbC5vZmZzZXRIZWlnaHQgLyAyIC0gbmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLyAyO1xuICAgIG5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IG9mZnNldExlZnQgKyBkZXRhaWwub2Zmc2V0V2lkdGggLyAyIC0gbmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAvIDI7XG4gIH1cbn1cbiIsIjxwcml6bS1zY3JvbGwtY29udHJvbHMgW3N0eWxlLnZpc2liaWxpdHldPVwiKHNob3dTY3JvbGxiYXJzJCB8IGFzeW5jKSA/ICcnIDogJ2hpZGRlbidcIj48L3ByaXptLXNjcm9sbC1jb250cm9scz5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19