import { Directive, ElementRef, Inject, Input, Output } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmElementReadyDirective {
    constructor(element, destroy$) {
        this.element = element;
        this.destroy$ = destroy$;
        this.ready$ = new ReplaySubject();
        this.interval = 1000 / 60;
        this.checker = () => true;
    }
    ngOnInit() {
        interval(this.interval)
            .pipe(filter(() => this.checker(this.element)), tap(() => this.ready$.next(true)), take(1), takeUntil(this.destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmElementReadyDirective, deps: [{ token: ElementRef }, { token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmElementReadyDirective, isStandalone: true, selector: "[prizmElementReady]", inputs: { interval: "interval", checker: "checker" }, outputs: { ready$: "ready$" }, providers: [PrizmDestroyService], exportAs: ["prizmElementReady"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmElementReadyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmElementReady]',
                    exportAs: 'prizmElementReady',
                    providers: [PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.PrizmDestroyService }]; }, propDecorators: { ready$: [{
                type: Output
            }], interval: [{
                type: Input
            }], checker: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1yZWFkeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2VsZW1lbnQtcmVhZHkvZWxlbWVudC1yZWFkeS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFReEQsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQyxZQUVtQixPQUFxQyxFQUM5QyxRQUE2QjtRQURwQixZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQVg5QixXQUFNLEdBQUcsSUFBSSxhQUFhLEVBQVcsQ0FBQztRQUd0QyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUc5QixZQUFPLEdBQWdDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQU0vQyxDQUFDO0lBRUosUUFBUTtRQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3BCLElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDeEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBekJVLDBCQUEwQixrQkFXM0IsVUFBVTtrR0FYVCwwQkFBMEIsdUpBSDFCLENBQUMsbUJBQW1CLENBQUM7OzJGQUdyQiwwQkFBMEI7a0JBTnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBWUksTUFBTTsyQkFBQyxVQUFVOzhFQVRYLE1BQU07c0JBRGQsTUFBTTtnQkFJRSxRQUFRO3NCQURoQixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptRWxlbWVudFJlYWR5XScsXG4gIGV4cG9ydEFzOiAncHJpem1FbGVtZW50UmVhZHknLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1FbGVtZW50UmVhZHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcmVhZHkkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICByZWFkb25seSBpbnRlcnZhbCA9IDEwMDAgLyA2MDtcblxuICBASW5wdXQoKVxuICBjaGVja2VyOiAoZWw6IEVsZW1lbnRSZWYpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jaGVja2VyKHRoaXMuZWxlbWVudCkpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5yZWFkeSQubmV4dCh0cnVlKSksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=