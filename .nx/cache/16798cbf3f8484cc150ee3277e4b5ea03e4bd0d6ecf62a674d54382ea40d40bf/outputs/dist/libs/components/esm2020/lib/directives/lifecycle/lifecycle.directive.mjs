import { Directive, ElementRef, EventEmitter, Inject, Output, } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmLifecycleDirective {
    constructor(element) {
        this.element = element;
        this.prizmAfterViewInit = new EventEmitter();
        this.prizmOnInit = new EventEmitter();
        this.prizmAfterContentInit = new EventEmitter();
        this.prizmOnDestroy = new EventEmitter();
        this.afterViewInitSource$ = new ReplaySubject(1);
        this.afterViewInit$ = this.afterViewInitSource$.pipe(debounceTime(0));
    }
    ngAfterViewInit() {
        this.prizmAfterViewInit.next(this.element);
        this.afterViewInitSource$.next(this.element);
    }
    ngAfterContentInit() {
        this.prizmAfterContentInit.next(this.element);
    }
    ngOnDestroy() {
        this.prizmOnDestroy.next(this.element);
    }
    ngOnInit() {
        this.prizmOnInit.next(this.element);
    }
}
PrizmLifecycleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLifecycleDirective, deps: [{ token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmLifecycleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmLifecycleDirective, isStandalone: true, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: { prizmAfterViewInit: "prizmAfterViewInit", prizmOnInit: "prizmOnInit", prizmAfterContentInit: "prizmAfterContentInit", prizmOnDestroy: "prizmOnDestroy" }, exportAs: ["prizmLifecycle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLifecycleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]',
                    exportAs: 'prizmLifecycle',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; }, propDecorators: { prizmAfterViewInit: [{
                type: Output
            }], prizmOnInit: [{
                type: Output
            }], prizmAfterContentInit: [{
                type: Output
            }], prizmOnDestroy: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvbGlmZWN5Y2xlL2xpZmVjeWNsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFHTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUTlDLE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDLFlBRW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBaEIvQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBR3BELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUc3QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBR3ZELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV4Qyx5QkFBb0IsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFLdkUsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O29IQXBDVSx1QkFBdUIsa0JBaUJ4QixVQUFVO3dHQWpCVCx1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFObkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQ04sa0dBQWtHO29CQUNwRyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQWtCSSxNQUFNOzJCQUFDLFVBQVU7NENBZlgsa0JBQWtCO3NCQUQxQixNQUFNO2dCQUlFLFdBQVc7c0JBRG5CLE1BQU07Z0JBSUUscUJBQXFCO3NCQUQ3QixNQUFNO2dCQUlFLGNBQWM7c0JBRHRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICdbcHJpem1MaWZlY3ljbGVdLCBbcHJpem1BZnRlclZpZXdJbml0XSwgW3ByaXptQWZ0ZXJDb250ZW50SW5pdF0sIFtwcml6bU9uSW5pdF0sIFtwcml6bU9uRGVzdHJveV0nLFxuICBleHBvcnRBczogJ3ByaXptTGlmZWN5Y2xlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1MaWZlY3ljbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBwcml6bUFmdGVyVmlld0luaXQgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHByaXptT25Jbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBwcml6bUFmdGVyQ29udGVudEluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHByaXptT25EZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYWZ0ZXJWaWV3SW5pdFNvdXJjZSQgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgcmVhZG9ubHkgYWZ0ZXJWaWV3SW5pdCQgPSB0aGlzLmFmdGVyVmlld0luaXRTb3VyY2UkLnBpcGUoZGVib3VuY2VUaW1lKDApKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcml6bUFmdGVyVmlld0luaXQubmV4dCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdFNvdXJjZSQubmV4dCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1BZnRlckNvbnRlbnRJbml0Lm5leHQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1PbkRlc3Ryb3kubmV4dCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcml6bU9uSW5pdC5uZXh0KHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==