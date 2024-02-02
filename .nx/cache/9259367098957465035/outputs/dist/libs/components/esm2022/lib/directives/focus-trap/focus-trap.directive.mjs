import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Inject, Renderer2, } from '@angular/core';
import { prizmBlurNativeFocused, prizmGetNativeFocused, prizmSetNativeFocused } from '../../util';
import { prizmContainsOrAfter } from '../../util/dom';
import { prizmGetClosestFocusable } from '../../util/get-closest-keyboard-focusable';
import * as i0 from "@angular/core";
export class PrizmFocusTrapDirective {
    constructor(documentRef, elementRef, cdRef, renderer) {
        this.documentRef = documentRef;
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.activeElement = prizmGetNativeFocused(this.documentRef);
        this.tabIndex = 0;
        /**
         * This would cause currently focused element to lose focus,
         * but it might cause ExpressionChanged error due to potential HostBinding.
         * Microtask keeps it in the same frame but allows change detection to run
         */
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
            prizmSetNativeFocused(this.elementRef.nativeElement);
        });
    }
    onBlur() {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'tabIndex');
    }
    onFocusIn(node) {
        if (prizmContainsOrAfter(this.elementRef.nativeElement, node)) {
            this.cdRef.markForCheck();
            return;
        }
        const focusable = prizmGetClosestFocusable(this.elementRef.nativeElement, false, this.elementRef.nativeElement);
        if (focusable) {
            prizmSetNativeFocused(focusable);
        }
    }
    ngOnDestroy() {
        prizmBlurNativeFocused(this.documentRef);
        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle,
         * therefore using Promise instead of setTimeout
         */
        // eslint-disable-next-line
        Promise.resolve().then(() => {
            if (this.activeElement instanceof HTMLElement) {
                prizmSetNativeFocused(this.activeElement);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusTrapDirective, deps: [{ token: DOCUMENT }, { token: ElementRef }, { token: i0.ChangeDetectorRef }, { token: Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmFocusTrapDirective, selector: "[prizmFocusTrap]", host: { listeners: { "blur": "onBlur()", "window:focusin.silent": "onFocusIn($event.target)" }, properties: { "tabIndex": "this.tabIndex" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusTrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmFocusTrap]',
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }]; }, propDecorators: { tabIndex: [{
                type: HostBinding,
                args: ['tabIndex']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onFocusIn: [{
                type: HostListener,
                args: ['window:focusin.silent', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUtyRixNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLFlBQ3FDLFdBQXFCLEVBRXZDLFVBQW1DLEVBQ25DLEtBQXdCLEVBQ0wsUUFBbUI7UUFKcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFFdkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDTCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVHhDLGtCQUFhLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFTM0M7Ozs7V0FJRztRQUNILG1FQUFtRTtRQUNuRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLE1BQU07UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBR00sU0FBUyxDQUFDLElBQVU7UUFDekIsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLE9BQU87U0FDUjtRQUVELE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsS0FBSyxFQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUM5QixDQUFDO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDYixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1Qsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDOzs7OztXQUtHO1FBQ0gsMkJBQTJCO1FBQzNCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSxXQUFXLEVBQUU7Z0JBQzdDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0E3RFUsdUJBQXVCLGtCQU14QixRQUFRLGFBQ1IsVUFBVSw4Q0FHVixTQUFTO2tHQVZSLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7MEJBT0ksTUFBTTsyQkFBQyxRQUFROzswQkFDZixNQUFNOzJCQUFDLFVBQVU7OzBCQUdqQixNQUFNOzJCQUFDLFNBQVM7NENBUGEsUUFBUTtzQkFBdkMsV0FBVzt1QkFBQyxVQUFVO2dCQXFCaEIsTUFBTTtzQkFEWixZQUFZO3VCQUFDLE1BQU07Z0JBTWIsU0FBUztzQkFEZixZQUFZO3VCQUFDLHVCQUF1QixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bUJsdXJOYXRpdmVGb2N1c2VkLCBwcml6bUdldE5hdGl2ZUZvY3VzZWQsIHByaXptU2V0TmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgcHJpem1Db250YWluc09yQWZ0ZXIgfSBmcm9tICcuLi8uLi91dGlsL2RvbSc7XG5pbXBvcnQgeyBwcml6bUdldENsb3Nlc3RGb2N1c2FibGUgfSBmcm9tICcuLi8uLi91dGlsL2dldC1jbG9zZXN0LWtleWJvYXJkLWZvY3VzYWJsZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUZvY3VzVHJhcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUZvY3VzVHJhcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRWxlbWVudCA9IHByaXptR2V0TmF0aXZlRm9jdXNlZCh0aGlzLmRvY3VtZW50UmVmKTtcblxuICBASG9zdEJpbmRpbmcoJ3RhYkluZGV4JykgcHVibGljIHRhYkluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50UmVmOiBEb2N1bWVudCxcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFJlbmRlcmVyMikgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIC8qKlxuICAgICAqIFRoaXMgd291bGQgY2F1c2UgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCB0byBsb3NlIGZvY3VzLFxuICAgICAqIGJ1dCBpdCBtaWdodCBjYXVzZSBFeHByZXNzaW9uQ2hhbmdlZCBlcnJvciBkdWUgdG8gcG90ZW50aWFsIEhvc3RCaW5kaW5nLlxuICAgICAqIE1pY3JvdGFzayBrZWVwcyBpdCBpbiB0aGUgc2FtZSBmcmFtZSBidXQgYWxsb3dzIGNoYW5nZSBkZXRlY3Rpb24gdG8gcnVuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgcHJpem1TZXROYXRpdmVGb2N1c2VkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGFiSW5kZXgnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpmb2N1c2luLnNpbGVudCcsIFsnJGV2ZW50LnRhcmdldCddKVxuICBwdWJsaWMgb25Gb2N1c0luKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAocHJpem1Db250YWluc09yQWZ0ZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5vZGUpKSB7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzYWJsZSA9IHByaXptR2V0Q2xvc2VzdEZvY3VzYWJsZShcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgZmFsc2UsXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICk7XG5cbiAgICBpZiAoZm9jdXNhYmxlKSB7XG4gICAgICBwcml6bVNldE5hdGl2ZUZvY3VzZWQoZm9jdXNhYmxlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBwcml6bUJsdXJOYXRpdmVGb2N1c2VkKHRoaXMuZG9jdW1lbnRSZWYpO1xuXG4gICAgLyoqXG4gICAgICogSG9zdExpc3RlbmVycyBhcmUgdHJpZ2dlcmVkIGV2ZW4gYWZ0ZXIgbmdPbkRlc3Ryb3lcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzgxMDB9XG4gICAgICogc28gd2UgbmVlZCB0byBkZWxheSBpdCBidXQgc3RheSBpbiB0aGUgc2FtZSBzeW5jIGN5Y2xlLFxuICAgICAqIHRoZXJlZm9yZSB1c2luZyBQcm9taXNlIGluc3RlYWQgb2Ygc2V0VGltZW91dFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHByaXptU2V0TmF0aXZlRm9jdXNlZCh0aGlzLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=