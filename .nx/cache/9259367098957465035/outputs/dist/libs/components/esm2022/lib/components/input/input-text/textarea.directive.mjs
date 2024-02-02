import { Attribute, Directive, ElementRef, Host, HostBinding, HostListener, Inject, Input, } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { WINDOW } from '@ng-web-apis/common';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmTextareaDirective {
    set resizable(state) {
        this._resizable = state;
    }
    get resizable() {
        return this._resizable;
    }
    get baseResizeClass() {
        if (!this.resizable)
            return false;
        if (!this.elementRef.nativeElement)
            return false;
        const currentStyle = this.windowRef
            .getComputedStyle(this.elementRef.nativeElement, null)
            .getPropertyValue('resize');
        return !currentStyle || currentStyle === 'none' || currentStyle === 'both';
    }
    constructor(elementRef, autoSize, destroy$, windowRef) {
        this.elementRef = elementRef;
        this.autoSize = autoSize;
        this.destroy$ = destroy$;
        this.windowRef = windowRef;
        this.height = null;
        this._resizable = false;
        this.clone = null;
        this.elementRef.nativeElement.rows = 1;
    }
    ngAfterViewInit() {
        if (this.autoSize !== null) {
            this.setClone();
            fromEvent(window, 'resize')
                .pipe(debounceTime(100), takeUntil(this.destroy$))
                .subscribe(() => {
                this.setClone();
                this.elementRef.nativeElement.style.height = this.height
                    ? Math.max(this.height, this.clone?.scrollHeight ?? 0) + 'px'
                    : (this.clone?.scrollHeight ?? 0) + 'px';
            });
        }
    }
    valueChanged(event) {
        if (this.clone) {
            const nativeEl = this.elementRef.nativeElement;
            this.clone.value = nativeEl.value;
            nativeEl.style.height = this.height
                ? Math.max(this.height, this.clone.scrollHeight) + 'px'
                : this.clone.scrollHeight + 'px';
        }
    }
    setClone() {
        if (this.clone) {
            this.clone.remove();
        }
        this.clone = this.elementRef.nativeElement.cloneNode(false);
        this.clone.style.position = 'absolute';
        this.clone.style.left = '-100000px';
        this.clone.style.top = '0';
        this.clone.style.height = 'auto';
        this.clone.style.visibility = 'hidden';
        this.elementRef.nativeElement.parentElement?.appendChild(this.clone);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTextareaDirective, deps: [{ token: i0.ElementRef, host: true }, { token: 'autoSize', attribute: true }, { token: i1.PrizmDestroyService }, { token: WINDOW }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTextareaDirective, isStandalone: true, selector: "textarea[prizmInput]", inputs: { height: "height", resizable: "resizable" }, host: { listeners: { "valueChanged": "valueChanged($event)" }, properties: { "style.height.px": "this.height", "class.resizable": "this.resizable", "class.add-base-resize": "this.baseResizeClass" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTextareaDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[prizmInput]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Host
                }] }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['autoSize']
                }] }, { type: i1.PrizmDestroyService }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; }, propDecorators: { height: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.height.px']
            }], resizable: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.resizable']
            }], baseResizeClass: [{
                type: HostBinding,
                args: ['class.add-base-resize']
            }], valueChanged: [{
                type: HostListener,
                args: ['valueChanged', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC10ZXh0L3RleHRhcmVhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxJQUVJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ0ksZUFBZTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFakQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDaEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO2FBQ3JELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlC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QUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OEdBekVVLHNCQUFzQix3REE0QnBCLFVBQVUsaUVBRWIsTUFBTTtrR0E5Qkwsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBNEJJLElBQUk7OzBCQUNKLFNBQVM7MkJBQUMsVUFBVTs7MEJBRXBCLE1BQU07MkJBQUMsTUFBTTs0Q0E3QnlCLE1BQU07c0JBQTlDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsaUJBQWlCO2dCQUluQyxTQUFTO3NCQUZaLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsaUJBQWlCO2dCQVMxQixlQUFlO3NCQURsQixXQUFXO3VCQUFDLHVCQUF1QjtnQkFzQ2MsWUFBWTtzQkFBN0QsWUFBWTt1QkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBBdHRyaWJ1dGUsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVtwcml6bUlucHV0XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGV4dGFyZWFEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKSBoZWlnaHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVzaXphYmxlJylcbiAgc2V0IHJlc2l6YWJsZShzdGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHN0YXRlO1xuICB9XG4gIGdldCByZXNpemFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWRkLWJhc2UtcmVzaXplJylcbiAgZ2V0IGJhc2VSZXNpemVDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMucmVzaXphYmxlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY3VycmVudFN0eWxlID0gdGhpcy53aW5kb3dSZWZcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBudWxsKVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3Jlc2l6ZScpO1xuXG4gICAgcmV0dXJuICFjdXJyZW50U3R5bGUgfHwgY3VycmVudFN0eWxlID09PSAnbm9uZScgfHwgY3VycmVudFN0eWxlID09PSAnYm90aCc7XG4gIH1cblxuICBwcml2YXRlIF9yZXNpemFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjbG9uZTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBAQXR0cmlidXRlKCdhdXRvU2l6ZScpIHByaXZhdGUgYXV0b1NpemU6IGFueSxcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHJlYWRvbmx5IHdpbmRvd1JlZjogV2luZG93XG4gICkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJvd3MgPSAxO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRDbG9uZSgpO1xuXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRDbG9uZSgpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICA/IE1hdGgubWF4KHRoaXMuaGVpZ2h0LCB0aGlzLmNsb25lPy5zY3JvbGxIZWlnaHQgPz8gMCkgKyAncHgnXG4gICAgICAgICAgICA6ICh0aGlzLmNsb25lPy5zY3JvbGxIZWlnaHQgPz8gMCkgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd2YWx1ZUNoYW5nZWQnLCBbJyRldmVudCddKSBwcml2YXRlIHZhbHVlQ2hhbmdlZChldmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xvbmUpIHtcbiAgICAgIGNvbnN0IG5hdGl2ZUVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmNsb25lLnZhbHVlID0gbmF0aXZlRWwudmFsdWU7XG5cbiAgICAgIG5hdGl2ZUVsLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgID8gTWF0aC5tYXgodGhpcy5oZWlnaHQsIHRoaXMuY2xvbmUuc2Nyb2xsSGVpZ2h0KSArICdweCdcbiAgICAgICAgOiB0aGlzLmNsb25lLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbG9uZSkge1xuICAgICAgdGhpcy5jbG9uZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5jbG9uZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb25lTm9kZShmYWxzZSkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0aGlzLmNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLmNsb25lLnN0eWxlLmxlZnQgPSAnLTEwMDAwMHB4JztcbiAgICB0aGlzLmNsb25lLnN0eWxlLnRvcCA9ICcwJztcbiAgICB0aGlzLmNsb25lLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB0aGlzLmNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ/LmFwcGVuZENoaWxkKHRoaXMuY2xvbmUpO1xuICB9XG59XG4iXX0=