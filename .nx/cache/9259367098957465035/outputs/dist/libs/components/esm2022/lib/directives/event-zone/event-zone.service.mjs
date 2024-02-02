import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmEventZoneService {
    get el() {
        return this.el_;
    }
    get rootEl() {
        if (this.parent)
            return this.parent.rootEl;
        if (this.parentDropdownZoneService)
            return this.parentDropdownZoneService.rootEl;
        return this.el_;
    }
    get rootService() {
        if (this.parent)
            return this.parent.rootService;
        if (this.parentDropdownZoneService)
            return this.parentDropdownZoneService.rootService;
        return this;
    }
    constructor(parentDropdownZoneService) {
        this.parentDropdownZoneService = parentDropdownZoneService;
        this.eventSource$ = new BehaviorSubject(Date.now());
        this.event$ = this.eventSource$.asObservable();
        this.destroyListener$ = new Subject();
    }
    init(el, eventType, parent) {
        this.el_ = el;
        this.parent = parent;
        this.destroyListener$.next();
        fromEvent(el, eventType, {
            capture: true,
        })
            .pipe(tap(() => this.emit()), takeUntil(this.destroyListener$))
            .subscribe();
    }
    emit() {
        const time = Date.now();
        if (this.parent)
            this.parent.emit();
        this.eventSource$.next(time);
    }
    ngOnDestroy() {
        this.destroyListener$.next();
        this.destroyListener$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmEventZoneService, deps: [{ token: PrizmEventZoneService, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmEventZoneService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmEventZoneService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PrizmEventZoneService, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtem9uZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9ldmVudC16b25lL2V2ZW50LXpvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR2hELE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyx5QkFBeUI7WUFBRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7UUFDakYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyx5QkFBeUI7WUFBRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7UUFDdEYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSUQsWUFBcUQseUJBQWdEO1FBQWhELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBdUI7UUF0QnBGLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEQsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFtQnpDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFZ0QsQ0FBQztJQUVsRyxJQUFJLENBQUMsRUFBZSxFQUFFLFNBQWlCLEVBQUUsTUFBOEI7UUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0IsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7WUFDdkIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO2FBQ0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNqQzthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxJQUFJO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzhHQWpEVSxxQkFBcUI7a0hBQXJCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVTs7MEJBd0JJLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1FdmVudFpvbmVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFNvdXJjZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oRGF0ZS5ub3coKSk7XG4gIHB1YmxpYyByZWFkb25seSBldmVudCQgPSB0aGlzLmV2ZW50U291cmNlJC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBlbF8hOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwYXJlbnQ/OiBQcml6bUV2ZW50Wm9uZVNlcnZpY2U7XG4gIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxfO1xuICB9XG5cbiAgZ2V0IHJvb3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRoaXMucGFyZW50KSByZXR1cm4gdGhpcy5wYXJlbnQucm9vdEVsO1xuICAgIGlmICh0aGlzLnBhcmVudERyb3Bkb3duWm9uZVNlcnZpY2UpIHJldHVybiB0aGlzLnBhcmVudERyb3Bkb3duWm9uZVNlcnZpY2Uucm9vdEVsO1xuICAgIHJldHVybiB0aGlzLmVsXztcbiAgfVxuXG4gIGdldCByb290U2VydmljZSgpOiBQcml6bUV2ZW50Wm9uZVNlcnZpY2Uge1xuICAgIGlmICh0aGlzLnBhcmVudCkgcmV0dXJuIHRoaXMucGFyZW50LnJvb3RTZXJ2aWNlO1xuICAgIGlmICh0aGlzLnBhcmVudERyb3Bkb3duWm9uZVNlcnZpY2UpIHJldHVybiB0aGlzLnBhcmVudERyb3Bkb3duWm9uZVNlcnZpY2Uucm9vdFNlcnZpY2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lMaXN0ZW5lciQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50RHJvcGRvd25ab25lU2VydmljZTogUHJpem1FdmVudFpvbmVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBpbml0KGVsOiBIVE1MRWxlbWVudCwgZXZlbnRUeXBlOiBzdHJpbmcsIHBhcmVudD86IFByaXptRXZlbnRab25lU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMuZWxfID0gZWw7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXIkLm5leHQoKTtcblxuICAgIGZyb21FdmVudChlbCwgZXZlbnRUeXBlLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHRoaXMuZW1pdCgpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveUxpc3RlbmVyJClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LmVtaXQoKTtcbiAgICB0aGlzLmV2ZW50U291cmNlJC5uZXh0KHRpbWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXIkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lciQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19