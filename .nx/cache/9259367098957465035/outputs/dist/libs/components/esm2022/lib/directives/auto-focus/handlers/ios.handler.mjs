import { Directive, ElementRef, Inject, NgZone, Optional, Renderer2, Self } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { AbstractPrizmAutofocusHandler } from './abstract.handler';
import { prizmPx } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmIosAutofocusHandler extends AbstractPrizmAutofocusHandler {
    constructor(prizmFocusableComponent, elementRef, renderer, ngZone, windowRef) {
        super(prizmFocusableComponent, elementRef);
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.windowRef = windowRef;
        this.patchCssStyles();
    }
    setFocus() {
        if (this.isTextFieldElement) {
            this.ngZone.runOutsideAngular(() => this.iosWebkitAutofocus());
        }
        else {
            this.element.focus();
        }
    }
    iosWebkitAutofocus() {
        const fakeInput = this.makeFakeInput();
        const duration = this.getDurationTimeBeforeFocus();
        let fakeFocusTimeoutId = 0;
        let elementFocusTimeoutId = 0;
        const blurHandler = () => fakeInput.focus({ preventScroll: true });
        const focusHandler = () => {
            clearTimeout(fakeFocusTimeoutId);
            fakeFocusTimeoutId = this.windowRef.setTimeout(() => {
                clearTimeout(elementFocusTimeoutId);
                fakeInput.removeEventListener(`blur`, blurHandler);
                fakeInput.removeEventListener(`focus`, focusHandler);
                elementFocusTimeoutId = this.windowRef.setTimeout(() => {
                    this.element.focus({ preventScroll: false });
                    fakeInput.remove();
                }, duration);
            });
        };
        fakeInput.addEventListener(`blur`, blurHandler, { once: true });
        fakeInput.addEventListener(`focus`, focusHandler);
        if (this.insideDialog()) {
            this.windowRef.document.body.appendChild(fakeInput);
        }
        else {
            this.element.parentElement?.appendChild(fakeInput);
        }
        fakeInput.focus({ preventScroll: true });
    }
    /**
     * @note:
     * emulate textfield position in layout with cursor
     * before focus to real textfield element
     */
    makeFakeInput() {
        const fakeInput = this.renderer.createElement(`input`);
        const rect = this.element.getBoundingClientRect();
        fakeInput.style.height = prizmPx(rect.height);
        fakeInput.style.width = prizmPx(rect.width / 2);
        fakeInput.style.position = `fixed`;
        fakeInput.style.opacity = `0`;
        fakeInput.style.fontSize = prizmPx(16); // disable possible auto zoom
        fakeInput.readOnly = true; // prevent keyboard for fake input
        // @note: emulate position cursor before focus to real textfield element
        fakeInput.style.top = prizmPx(rect.top);
        fakeInput.style.left = prizmPx(rect.left);
        return fakeInput;
    }
    getDurationTimeBeforeFocus() {
        return (parseFloat(this.windowRef.getComputedStyle(this.element).getPropertyValue(`--prizm-duration`)) || 0);
    }
    /**
     * @note:
     * unfortunately, in older versions of iOS
     * there is a bug that the fake input cursor
     * will move along with the dialog animation
     * and then that dialog will be shaking
     */
    insideDialog() {
        return !!this.element.closest(`prizm-dialog`);
    }
    /**
     * @note:
     * This is necessary so that the viewport isn't recalculated
     * and then the dialogs don't shake.
     *
     * Also, we need to fixed height viewport,
     * so that when focusing the dialogs don't shake
     */
    patchCssStyles() {
        const documentRef = this.windowRef.document;
        for (const element of [documentRef.documentElement, documentRef.body]) {
            element.style.setProperty(`overflow`, `auto`);
            element.style.setProperty(`height`, `100%`);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmIosAutofocusHandler, deps: [{ token: PRIZM_FOCUSABLE_ITEM_ACCESSOR, optional: true, self: true }, { token: ElementRef }, { token: Renderer2 }, { token: NgZone }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmIosAutofocusHandler, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmIosAutofocusHandler, decorators: [{
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
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i0.NgZone, decorators: [{
                    type: Inject,
                    args: [NgZone]
                }] }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2F1dG8tZm9jdXMvaGFuZGxlcnMvaW9zLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFeEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUd6QyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsNkJBQTZCO0lBQ3pFLFlBSUUsdUJBQTZELEVBQ3pDLFVBQW1DLEVBQ25CLFFBQW1CLEVBQ3RCLE1BQWMsRUFDZCxTQUFpQjtRQUVsRCxLQUFLLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFKUCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBR2xELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztT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aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIE5nWm9uZSwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQgeyBQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9mb2N1c2FibGUtaXRlbS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1BdXRvZm9jdXNIYW5kbGVyIH0gZnJvbSAnLi9hYnN0cmFjdC5oYW5kbGVyJztcbmltcG9ydCB7IHByaXptUHggfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIFByaXptSW9zQXV0b2ZvY3VzSGFuZGxlciBleHRlbmRzIEFic3RyYWN0UHJpem1BdXRvZm9jdXNIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2VsZigpXG4gICAgQEluamVjdChQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUilcbiAgICBwcml6bUZvY3VzYWJsZUNvbXBvbmVudDogUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfCBudWxsLFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KE5nWm9uZSkgcHJpdmF0ZSByZWFkb25seSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSByZWFkb25seSB3aW5kb3dSZWY6IFdpbmRvd1xuICApIHtcbiAgICBzdXBlcihwcml6bUZvY3VzYWJsZUNvbXBvbmVudCwgZWxlbWVudFJlZik7XG4gICAgdGhpcy5wYXRjaENzc1N0eWxlcygpO1xuICB9XG5cbiAgcHVibGljIHNldEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGV4dEZpZWxkRWxlbWVudCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pb3NXZWJraXRBdXRvZm9jdXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW9zV2Via2l0QXV0b2ZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGZha2VJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMubWFrZUZha2VJbnB1dCgpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvblRpbWVCZWZvcmVGb2N1cygpO1xuICAgIGxldCBmYWtlRm9jdXNUaW1lb3V0SWQgPSAwO1xuICAgIGxldCBlbGVtZW50Rm9jdXNUaW1lb3V0SWQgPSAwO1xuXG4gICAgY29uc3QgYmx1ckhhbmRsZXIgPSAoKTogdm9pZCA9PiBmYWtlSW5wdXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIGNvbnN0IGZvY3VzSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChmYWtlRm9jdXNUaW1lb3V0SWQpO1xuXG4gICAgICBmYWtlRm9jdXNUaW1lb3V0SWQgPSB0aGlzLndpbmRvd1JlZi5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRGb2N1c1RpbWVvdXRJZCk7XG5cbiAgICAgICAgZmFrZUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYGJsdXJgLCBibHVySGFuZGxlcik7XG4gICAgICAgIGZha2VJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGBmb2N1c2AsIGZvY3VzSGFuZGxlcik7XG5cbiAgICAgICAgZWxlbWVudEZvY3VzVGltZW91dElkID0gdGhpcy53aW5kb3dSZWYuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogZmFsc2UgfSk7XG4gICAgICAgICAgZmFrZUlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmFrZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoYGJsdXJgLCBibHVySGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGZha2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKGBmb2N1c2AsIGZvY3VzSGFuZGxlcik7XG5cbiAgICBpZiAodGhpcy5pbnNpZGVEaWFsb2coKSkge1xuICAgICAgdGhpcy53aW5kb3dSZWYuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmYWtlSW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudD8uYXBwZW5kQ2hpbGQoZmFrZUlucHV0KTtcbiAgICB9XG5cbiAgICBmYWtlSW5wdXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBub3RlOlxuICAgKiBlbXVsYXRlIHRleHRmaWVsZCBwb3NpdGlvbiBpbiBsYXlvdXQgd2l0aCBjdXJzb3JcbiAgICogYmVmb3JlIGZvY3VzIHRvIHJlYWwgdGV4dGZpZWxkIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgbWFrZUZha2VJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCBmYWtlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gICAgY29uc3QgcmVjdDogRE9NUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGZha2VJbnB1dC5zdHlsZS5oZWlnaHQgPSBwcml6bVB4KHJlY3QuaGVpZ2h0KTtcbiAgICBmYWtlSW5wdXQuc3R5bGUud2lkdGggPSBwcml6bVB4KHJlY3Qud2lkdGggLyAyKTtcbiAgICBmYWtlSW5wdXQuc3R5bGUucG9zaXRpb24gPSBgZml4ZWRgO1xuICAgIGZha2VJbnB1dC5zdHlsZS5vcGFjaXR5ID0gYDBgO1xuICAgIGZha2VJbnB1dC5zdHlsZS5mb250U2l6ZSA9IHByaXptUHgoMTYpOyAvLyBkaXNhYmxlIHBvc3NpYmxlIGF1dG8gem9vbVxuICAgIGZha2VJbnB1dC5yZWFkT25seSA9IHRydWU7IC8vIHByZXZlbnQga2V5Ym9hcmQgZm9yIGZha2UgaW5wdXRcblxuICAgIC8vIEBub3RlOiBlbXVsYXRlIHBvc2l0aW9uIGN1cnNvciBiZWZvcmUgZm9jdXMgdG8gcmVhbCB0ZXh0ZmllbGQgZWxlbWVudFxuICAgIGZha2VJbnB1dC5zdHlsZS50b3AgPSBwcml6bVB4KHJlY3QudG9wKTtcbiAgICBmYWtlSW5wdXQuc3R5bGUubGVmdCA9IHByaXptUHgocmVjdC5sZWZ0KTtcblxuICAgIHJldHVybiBmYWtlSW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIGdldER1cmF0aW9uVGltZUJlZm9yZUZvY3VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcnNlRmxvYXQodGhpcy53aW5kb3dSZWYuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoYC0tcHJpem0tZHVyYXRpb25gKSkgfHwgMFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG5vdGU6XG4gICAqIHVuZm9ydHVuYXRlbHksIGluIG9sZGVyIHZlcnNpb25zIG9mIGlPU1xuICAgKiB0aGVyZSBpcyBhIGJ1ZyB0aGF0IHRoZSBmYWtlIGlucHV0IGN1cnNvclxuICAgKiB3aWxsIG1vdmUgYWxvbmcgd2l0aCB0aGUgZGlhbG9nIGFuaW1hdGlvblxuICAgKiBhbmQgdGhlbiB0aGF0IGRpYWxvZyB3aWxsIGJlIHNoYWtpbmdcbiAgICovXG4gIHByaXZhdGUgaW5zaWRlRGlhbG9nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZWxlbWVudC5jbG9zZXN0KGBwcml6bS1kaWFsb2dgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbm90ZTpcbiAgICogVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCB0aGUgdmlld3BvcnQgaXNuJ3QgcmVjYWxjdWxhdGVkXG4gICAqIGFuZCB0aGVuIHRoZSBkaWFsb2dzIGRvbid0IHNoYWtlLlxuICAgKlxuICAgKiBBbHNvLCB3ZSBuZWVkIHRvIGZpeGVkIGhlaWdodCB2aWV3cG9ydCxcbiAgICogc28gdGhhdCB3aGVuIGZvY3VzaW5nIHRoZSBkaWFsb2dzIGRvbid0IHNoYWtlXG4gICAqL1xuICBwcml2YXRlIHBhdGNoQ3NzU3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvY3VtZW50UmVmID0gdGhpcy53aW5kb3dSZWYuZG9jdW1lbnQ7XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2RvY3VtZW50UmVmLmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRSZWYuYm9keV0pIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYG92ZXJmbG93YCwgYGF1dG9gKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYGhlaWdodGAsIGAxMDAlYCk7XG4gICAgfVxuICB9XG59XG4iXX0=