import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmOverscrollService } from './overscroll.service';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./overscroll.service";
import * as i2 from "@prizm-ui/helpers";
/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
export class PrizmOverscrollDirective {
    get enabled() {
        return this.mode !== 'none';
    }
    get overscrollBehavior() {
        return this.enabled ? 'contain' : null;
    }
    constructor(elRef, overscrollService, destroy$) {
        this.elRef = elRef;
        this.overscrollService = overscrollService;
        this.destroy$ = destroy$;
        this.mode = 'scroll';
    }
    ngOnInit() {
        this.overscrollService
            .run(this.mode, this.elRef.nativeElement)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmOverscrollDirective, deps: [{ token: i0.ElementRef }, { token: i1.PrizmOverscrollService }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmOverscrollDirective, isStandalone: true, selector: "[prizmOverscroll]", inputs: { mode: ["prizmOverscroll", "mode"] }, host: { properties: { "style.overscrollBehavior": "this.overscrollBehavior" } }, providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmOverscrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmOverscroll]',
                    providers: [PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PrizmOverscrollService }, { type: i2.PrizmDestroyService }]; }, propDecorators: { mode: [{
                type: Input,
                args: ['prizmOverscroll']
            }], overscrollBehavior: [{
                type: HostBinding,
                args: ['style.overscrollBehavior']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL292ZXJzY3JvbGwvb3ZlcnNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUNXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxZQUNtQixLQUE4QixFQUM5QixpQkFBeUMsRUFDekMsUUFBNkI7UUFGN0IsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUN6QyxhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQWR6QyxTQUFJLEdBQTZCLFFBQVEsQ0FBQztJQWU5QyxDQUFDO0lBRUcsUUFBUTtRQUNiLElBQUksQ0FBQyxpQkFBaUI7YUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs4R0F4QlUsd0JBQXdCO2tHQUF4Qix3QkFBd0IsZ01BSHhCLENBQUMsbUJBQW1CLENBQUM7OzJGQUdyQix3QkFBd0I7a0JBTHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt3S0FHUSxJQUFJO3NCQURWLEtBQUs7dUJBQUMsaUJBQWlCO2dCQVFiLGtCQUFrQjtzQkFENUIsV0FBVzt1QkFBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1PdmVyc2Nyb2xsTW9kZSB9IGZyb20gJy4vb3ZlcnNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBQcml6bU92ZXJzY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9vdmVyc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBpc29sYXRlIHNjcm9sbGluZywgaS5lLiBwcmV2ZW50IGJvZHkgc2Nyb2xsIGJlaGluZCBtb2RhbCBkaWFsb2dcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptT3ZlcnNjcm9sbF0nLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1PdmVyc2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdwcml6bU92ZXJzY3JvbGwnKVxuICBwdWJsaWMgbW9kZTogUHJpem1PdmVyc2Nyb2xsTW9kZSB8ICcnID0gJ3Njcm9sbCc7XG5cbiAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgIT09ICdub25lJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcnNjcm9sbEJlaGF2aW9yJylcbiAgcHVibGljIGdldCBvdmVyc2Nyb2xsQmVoYXZpb3IoKTogJ2NvbnRhaW4nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZCA/ICdjb250YWluJyA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IG92ZXJzY3JvbGxTZXJ2aWNlOiBQcml6bU92ZXJzY3JvbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJzY3JvbGxTZXJ2aWNlXG4gICAgICAucnVuKHRoaXMubW9kZSwgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=