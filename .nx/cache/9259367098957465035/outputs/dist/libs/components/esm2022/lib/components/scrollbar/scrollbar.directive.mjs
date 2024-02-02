import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, Optional, Renderer2 } from '@angular/core';
import { ANIMATION_FRAME, WINDOW } from '@ng-web-apis/common';
import { fromEvent, merge, Observable } from 'rxjs';
import { map, switchMap, takeUntil, throttleTime } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_ELEMENT_REF, PRIZM_SCROLL_REF } from '../../tokens';
import { prizmPreventDefault, prizmStopPropagation, prizmTypedFromEvent, prizmZoneFree, } from '../../observables';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
import * as i2 from "@angular/common";
const MIN_WIDTH = 24;
const POLLING_TIME = 1000 / 15;
export class PrizmScrollbarDirective {
    constructor(ngZone, renderer, destroy$, animationFrame$, wrapper, container, documentRef, windowRef, elementRef, viewportScroller) {
        this.wrapper = wrapper;
        this.container = container;
        this.documentRef = documentRef;
        this.windowRef = windowRef;
        this.elementRef = elementRef;
        this.viewportScroller = viewportScroller;
        this.prizmScrollbar = 'vertical';
        const { nativeElement } = this.elementRef;
        const mousedown$ = prizmTypedFromEvent(nativeElement, 'mousedown');
        const mousemove$ = prizmTypedFromEvent(this.documentRef, 'mousemove');
        const mouseup$ = prizmTypedFromEvent(this.documentRef, 'mouseup');
        const mousedownWrapper$ = prizmTypedFromEvent(wrapper.nativeElement, 'mousedown');
        merge(mousedownWrapper$.pipe(prizmPreventDefault(), map(event => this.getScrolled(event, 0.5, 0.5))), mousedown$.pipe(prizmPreventDefault(), prizmStopPropagation(), switchMap(event => {
            const rect = nativeElement.getBoundingClientRect();
            const vertical = getOffsetVertical(event, rect);
            const horizontal = getOffsetHorizontal(event, rect);
            return mousemove$.pipe(map(event => this.getScrolled(event, vertical, horizontal)), takeUntil(mouseup$));
        })))
            .pipe(prizmZoneFree(ngZone), takeUntil(destroy$))
            .subscribe(([scrollTop, scrollLeft]) => {
            const [x, y] = this.viewportScroller.getScrollPosition();
            if (!this.container) {
                this.viewportScroller.scrollToPosition([
                    this.prizmScrollbar === 'vertical' ? x : scrollLeft,
                    this.prizmScrollbar === 'vertical' ? scrollTop : y,
                ]);
                return;
            }
            if (this.prizmScrollbar === 'vertical') {
                renderer.setProperty(this.container.nativeElement, 'scrollTop', scrollTop);
            }
            else {
                renderer.setProperty(this.container.nativeElement, 'scrollLeft', scrollLeft);
            }
        });
        merge(fromEvent(this.container ? this.container.nativeElement : this.windowRef, 'scroll'), animationFrame$.pipe(throttleTime(POLLING_TIME)))
            .pipe(prizmZoneFree(ngZone), takeUntil(destroy$))
            .subscribe(() => {
            if (this.prizmScrollbar === 'vertical') {
                renderer.setStyle(nativeElement, 'top', `${this.thumb * 100}%`);
                renderer.setStyle(nativeElement, 'height', `${this.view * 100}%`);
            }
            else {
                renderer.setStyle(nativeElement, 'left', `${this.thumb * 100}%`);
                renderer.setStyle(nativeElement, 'width', `${this.view * 100}%`);
            }
        });
    }
    get scrolled() {
        const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = this.computedContainer;
        return this.prizmScrollbar === 'vertical'
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }
    get compensation() {
        const { clientHeight, scrollHeight, clientWidth, scrollWidth } = this.computedContainer;
        if (((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH && this.prizmScrollbar === 'vertical') ||
            ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH && this.prizmScrollbar === 'horizontal')) {
            return 0;
        }
        return this.prizmScrollbar === 'vertical' ? MIN_WIDTH / clientHeight : MIN_WIDTH / clientWidth;
    }
    get thumb() {
        const compensation = this.compensation || this.view;
        return this.scrolled * (1 - compensation);
    }
    get view() {
        const { clientHeight, scrollHeight, clientWidth, scrollWidth } = this.computedContainer;
        return this.prizmScrollbar === 'vertical'
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }
    get computedContainer() {
        const el = this.container ? this.container.nativeElement : this.documentRef.scrollingElement;
        return el;
    }
    getScrolled({ clientY, clientX }, offsetVertical, offsetHorizontal) {
        const { offsetHeight, offsetWidth } = this.elementRef.nativeElement;
        const { top, left, width, height } = this.wrapper.nativeElement.getBoundingClientRect();
        const maxTop = this.computedContainer.scrollHeight - height;
        const maxLeft = this.computedContainer.scrollWidth - width;
        const scrolledTop = (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
        const scrolledLeft = (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);
        return [maxTop * scrolledTop, maxLeft * scrolledLeft];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarDirective, deps: [{ token: NgZone }, { token: Renderer2 }, { token: PrizmDestroyService }, { token: ANIMATION_FRAME }, { token: PRIZM_ELEMENT_REF }, { token: PRIZM_SCROLL_REF, optional: true }, { token: DOCUMENT }, { token: WINDOW }, { token: ElementRef }, { token: ViewportScroller }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmScrollbarDirective, isStandalone: true, selector: "[prizmScrollbar]", inputs: { prizmScrollbar: "prizmScrollbar" }, providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmScrollbar]',
                    providers: [PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone, decorators: [{
                    type: Inject,
                    args: [NgZone]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [ANIMATION_FRAME]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [PRIZM_ELEMENT_REF]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_SCROLL_REF]
                }] }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i2.ViewportScroller, decorators: [{
                    type: Inject,
                    args: [ViewportScroller]
                }] }]; }, propDecorators: { prizmScrollbar: [{
                type: Input
            }] } });
function getOffsetVertical({ clientY }, { top, height }) {
    return (clientY - top) / height;
}
function getOffsetHorizontal({ clientX }, { left, width }) {
    return (clientX - left) / width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsYUFBYSxHQUNkLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFHM0IsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFPL0IsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUNrQixNQUFjLEVBQ1gsUUFBbUIsRUFDVCxRQUEwQixFQUM5QixlQUFtQyxFQUNoQixPQUFnQyxFQUczRCxTQUF5QyxFQUN2QixXQUFxQixFQUN2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dFNjcm9sbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fRlJBTUUsIFdJTkRPVyB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFBSSVpNX0VMRU1FTlRfUkVGLCBQUklaTV9TQ1JPTExfUkVGIH0gZnJvbSAnLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7XG4gIHByaXptUHJldmVudERlZmF1bHQsXG4gIHByaXptU3RvcFByb3BhZ2F0aW9uLFxuICBwcml6bVR5cGVkRnJvbUV2ZW50LFxuICBwcml6bVpvbmVGcmVlLFxufSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlcyc7XG5pbXBvcnQgeyBQcml6bU9yaWVudGF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBNSU5fV0lEVEggPSAyNDtcbmNvbnN0IFBPTExJTkdfVElNRSA9IDEwMDAgLyAxNTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptU2Nyb2xsYmFyXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNjcm9sbGJhckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwcml6bVNjcm9sbGJhcjogUHJpem1PcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOZ1pvbmUpIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUmVuZGVyZXIyKSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dm9pZD4sXG4gICAgQEluamVjdChBTklNQVRJT05fRlJBTUUpIGFuaW1hdGlvbkZyYW1lJDogT2JzZXJ2YWJsZTxudW1iZXI+LFxuICAgIEBJbmplY3QoUFJJWk1fRUxFTUVOVF9SRUYpIHByaXZhdGUgcmVhZG9ubHkgd3JhcHBlcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX1NDUk9MTF9SRUYpXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgbnVsbCxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50UmVmOiBEb2N1bWVudCxcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSByZWFkb25seSB3aW5kb3dSZWY6IFdpbmRvdyxcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChWaWV3cG9ydFNjcm9sbGVyKSBwcml2YXRlIHJlYWRvbmx5IHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXJcbiAgKSB7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLmVsZW1lbnRSZWY7XG4gICAgY29uc3QgbW91c2Vkb3duJCA9IHByaXptVHlwZWRGcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xuICAgIGNvbnN0IG1vdXNlbW92ZSQgPSBwcml6bVR5cGVkRnJvbUV2ZW50KHRoaXMuZG9jdW1lbnRSZWYsICdtb3VzZW1vdmUnKTtcbiAgICBjb25zdCBtb3VzZXVwJCA9IHByaXptVHlwZWRGcm9tRXZlbnQodGhpcy5kb2N1bWVudFJlZiwgJ21vdXNldXAnKTtcbiAgICBjb25zdCBtb3VzZWRvd25XcmFwcGVyJCA9IHByaXptVHlwZWRGcm9tRXZlbnQod3JhcHBlci5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJyk7XG5cbiAgICBtZXJnZShcbiAgICAgIG1vdXNlZG93bldyYXBwZXIkLnBpcGUoXG4gICAgICAgIHByaXptUHJldmVudERlZmF1bHQoKSxcbiAgICAgICAgbWFwKGV2ZW50ID0+IHRoaXMuZ2V0U2Nyb2xsZWQoZXZlbnQsIDAuNSwgMC41KSlcbiAgICAgICksXG4gICAgICBtb3VzZWRvd24kLnBpcGUoXG4gICAgICAgIHByaXptUHJldmVudERlZmF1bHQoKSxcbiAgICAgICAgcHJpem1TdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgc3dpdGNoTWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCByZWN0ID0gbmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IGdldE9mZnNldFZlcnRpY2FsKGV2ZW50LCByZWN0KTtcbiAgICAgICAgICBjb25zdCBob3Jpem9udGFsID0gZ2V0T2Zmc2V0SG9yaXpvbnRhbChldmVudCwgcmVjdCk7XG5cbiAgICAgICAgICByZXR1cm4gbW91c2Vtb3ZlJC5waXBlKFxuICAgICAgICAgICAgbWFwKGV2ZW50ID0+IHRoaXMuZ2V0U2Nyb2xsZWQoZXZlbnQsIHZlcnRpY2FsLCBob3Jpem9udGFsKSksXG4gICAgICAgICAgICB0YWtlVW50aWwobW91c2V1cCQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICAgICAucGlwZShwcml6bVpvbmVGcmVlKG5nWm9uZSksIHRha2VVbnRpbChkZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0XSkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnZpZXdwb3J0U2Nyb2xsZXIuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgdGhpcy52aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvUG9zaXRpb24oW1xuICAgICAgICAgICAgdGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJyA/IHggOiBzY3JvbGxMZWZ0LFxuICAgICAgICAgICAgdGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJyA/IHNjcm9sbFRvcCA6IHksXG4gICAgICAgICAgXSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCBzY3JvbGxUb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxMZWZ0Jywgc2Nyb2xsTGVmdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQodGhpcy5jb250YWluZXIgPyB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50IDogdGhpcy53aW5kb3dSZWYsICdzY3JvbGwnKSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lJC5waXBlKHRocm90dGxlVGltZShQT0xMSU5HX1RJTUUpKVxuICAgIClcbiAgICAgIC5waXBlKHByaXptWm9uZUZyZWUobmdab25lKSwgdGFrZVVudGlsKGRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsICd0b3AnLCBgJHt0aGlzLnRodW1iICogMTAwfSVgKTtcbiAgICAgICAgICByZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy52aWV3ICogMTAwfSVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke3RoaXMudGh1bWIgKiAxMDB9JWApO1xuICAgICAgICAgIHJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMudmlldyAqIDEwMH0lYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc2Nyb2xsZWQoKTogbnVtYmVyIHtcbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQsIHNjcm9sbExlZnQsIHNjcm9sbFdpZHRoLCBjbGllbnRXaWR0aCB9ID1cbiAgICAgIHRoaXMuY29tcHV0ZWRDb250YWluZXI7XG5cbiAgICByZXR1cm4gdGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgPyBzY3JvbGxUb3AgLyAoc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KVxuICAgICAgOiBzY3JvbGxMZWZ0IC8gKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tcGVuc2F0aW9uKCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoIH0gPSB0aGlzLmNvbXB1dGVkQ29udGFpbmVyO1xuXG4gICAgaWYgKFxuICAgICAgKChjbGllbnRIZWlnaHQgKiBjbGllbnRIZWlnaHQpIC8gc2Nyb2xsSGVpZ2h0ID4gTUlOX1dJRFRIICYmIHRoaXMucHJpem1TY3JvbGxiYXIgPT09ICd2ZXJ0aWNhbCcpIHx8XG4gICAgICAoKGNsaWVudFdpZHRoICogY2xpZW50V2lkdGgpIC8gc2Nyb2xsV2lkdGggPiBNSU5fV0lEVEggJiYgdGhpcy5wcml6bVNjcm9sbGJhciA9PT0gJ2hvcml6b250YWwnKVxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJpem1TY3JvbGxiYXIgPT09ICd2ZXJ0aWNhbCcgPyBNSU5fV0lEVEggLyBjbGllbnRIZWlnaHQgOiBNSU5fV0lEVEggLyBjbGllbnRXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRodW1iKCk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcGVuc2F0aW9uID0gdGhpcy5jb21wZW5zYXRpb24gfHwgdGhpcy52aWV3O1xuXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsZWQgKiAoMSAtIGNvbXBlbnNhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldCB2aWV3KCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoIH0gPSB0aGlzLmNvbXB1dGVkQ29udGFpbmVyO1xuXG4gICAgcmV0dXJuIHRoaXMucHJpem1TY3JvbGxiYXIgPT09ICd2ZXJ0aWNhbCdcbiAgICAgID8gTWF0aC5jZWlsKChjbGllbnRIZWlnaHQgLyBzY3JvbGxIZWlnaHQpICogMTAwKSAvIDEwMFxuICAgICAgOiBNYXRoLmNlaWwoKGNsaWVudFdpZHRoIC8gc2Nyb2xsV2lkdGgpICogMTAwKSAvIDEwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbXB1dGVkQ29udGFpbmVyKCk6IEVsZW1lbnQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5jb250YWluZXIgPyB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50IDogdGhpcy5kb2N1bWVudFJlZi5zY3JvbGxpbmdFbGVtZW50O1xuICAgIHJldHVybiBlbCBhcyBFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxlZChcbiAgICB7IGNsaWVudFksIGNsaWVudFggfTogTW91c2VFdmVudCxcbiAgICBvZmZzZXRWZXJ0aWNhbDogbnVtYmVyLFxuICAgIG9mZnNldEhvcml6b250YWw6IG51bWJlclxuICApOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IG1heFRvcCA9IHRoaXMuY29tcHV0ZWRDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0O1xuICAgIGNvbnN0IG1heExlZnQgPSB0aGlzLmNvbXB1dGVkQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gd2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsZWRUb3AgPSAoY2xpZW50WSAtIHRvcCAtIG9mZnNldEhlaWdodCAqIG9mZnNldFZlcnRpY2FsKSAvIChoZWlnaHQgLSBvZmZzZXRIZWlnaHQpO1xuICAgIGNvbnN0IHNjcm9sbGVkTGVmdCA9IChjbGllbnRYIC0gbGVmdCAtIG9mZnNldFdpZHRoICogb2Zmc2V0SG9yaXpvbnRhbCkgLyAod2lkdGggLSBvZmZzZXRXaWR0aCk7XG5cbiAgICByZXR1cm4gW21heFRvcCAqIHNjcm9sbGVkVG9wLCBtYXhMZWZ0ICogc2Nyb2xsZWRMZWZ0XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRWZXJ0aWNhbCh7IGNsaWVudFkgfTogTW91c2VFdmVudCwgeyB0b3AsIGhlaWdodCB9OiBDbGllbnRSZWN0KTogbnVtYmVyIHtcbiAgcmV0dXJuIChjbGllbnRZIC0gdG9wKSAvIGhlaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0SG9yaXpvbnRhbCh7IGNsaWVudFggfTogTW91c2VFdmVudCwgeyBsZWZ0LCB3aWR0aCB9OiBDbGllbnRSZWN0KTogbnVtYmVyIHtcbiAgcmV0dXJuIChjbGllbnRYIC0gbGVmdCkgLyB3aWR0aDtcbn1cbiJdfQ==