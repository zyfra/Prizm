import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { prizmRaceInEmit } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmZoneEventService {
    get children() {
        return [...this.childrenSet];
    }
    constructor(zoneService, documentRef) {
        this.zoneService = zoneService;
        this.documentRef = documentRef;
        this.childrenSet = new Set();
        this.childrenChanges$$ = new Subject();
        this.childrenChanges$ = this.childrenChanges$$.pipe(mapTo(this.childrenSet));
        this.parents = new Set();
        this.destroyPrevious$ = new Subject();
        this.destroy$ = new Subject();
        this.inside$$ = new Subject();
        this.outside$$ = new Subject();
        this.hostElement$$ = new BehaviorSubject(null);
        this.innerEvent$$ = new Subject();
        if (this.zoneService)
            this.parents.add(this.zoneService);
    }
    triggerEvent(name, event, service, guardFromRecursiveCall) {
        this.innerEvent$$.next({
            name,
            event,
            service,
        });
        guardFromRecursiveCall.add(this);
        this.parents.forEach(parent => {
            if (guardFromRecursiveCall.has(parent))
                return;
            parent.triggerEvent(name, event, service, guardFromRecursiveCall);
        });
    }
    setParent(parent) {
        if (!parent)
            return;
        this.parents.add(parent);
    }
    safeAddListener(eventName, hostElement) {
        this.hostElement$$.next(hostElement);
        this.destroy();
        if (eventName && hostElement) {
            this.initListener(eventName);
        }
    }
    getInOutSideEvents(eventName) {
        return prizmRaceInEmit([
            this.innerEvent$$.pipe(map(({ event }) => ({ event, inside: true }))),
            fromEvent(this.documentRef, eventName).pipe(map(event => ({ event, inside: false }))),
        ], 0).pipe(takeUntil(this.destroy$));
    }
    initListener(eventName) {
        if (this.hostElement$$.value)
            fromEvent(this.hostElement$$.value, eventName)
                .pipe(tap(event => {
                this.triggerEvent(eventName, event, this, new Set());
            }), takeUntil(this.destroyPrevious$))
                .subscribe();
        const repeat$ = new BehaviorSubject(void 0);
        this.getInOutSideEvents(eventName)
            .pipe(tap(({ event, inside }) => {
            const time = performance.now();
            const emit = { event, time };
            if (inside)
                this.inside$$.next(emit);
            else {
                this.outside$$.next(emit);
            }
        }), debounceTime(0), tap(() => repeat$.next()), takeUntil(this.destroyPrevious$))
            .subscribe();
    }
    destroy() {
        this.destroyPrevious$.next();
    }
    ngOnDestroy() {
        this.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmZoneEventService, deps: [{ token: PrizmZoneEventService, optional: true, skipSelf: true }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmZoneEventService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmZoneEventService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PrizmZoneEventService, decorators: [{
                    type: SkipSelf
                }, {
                    type: Optional
                }] }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy96b25lLWV2ZW50L3pvbmUtZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBR3BELE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDLElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsWUFDa0MsV0FBa0MsRUFDL0IsV0FBcUI7UUFEeEIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBdEJ6QyxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBQy9DLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDeEMscUJBQWdCLEdBQTJDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQ3JHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQ3hCLENBQUM7UUFDTSxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDbkMscUJBQWdCLEdBQUcsSUFBSSxPQUFP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QUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDL0IsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0IsQ0FBQztZQUMvQyxJQUFJLE1BQU07Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNqQzthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzhHQTFHVSxxQkFBcUIsb0ZBdUJ0QixRQUFRO2tIQXZCUCxxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVU7OzBCQXVCTixRQUFROzswQkFBSSxRQUFROzswQkFDcEIsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1ab25lRXZlbnQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHByaXptUmFjZUluRW1pdCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXptWm9uZUV2ZW50U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2hpbGRyZW5TZXQgPSBuZXcgU2V0PFByaXptWm9uZUV2ZW50U2VydmljZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjaGlsZHJlbkNoYW5nZXMkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2hpbGRyZW5DaGFuZ2VzJDogT2JzZXJ2YWJsZTxTZXQ8UHJpem1ab25lRXZlbnRTZXJ2aWNlPj4gPSB0aGlzLmNoaWxkcmVuQ2hhbmdlcyQkLnBpcGUoXG4gICAgbWFwVG8odGhpcy5jaGlsZHJlblNldClcbiAgKTtcbiAgcHJpdmF0ZSBwYXJlbnRzID0gbmV3IFNldDxQcml6bVpvbmVFdmVudFNlcnZpY2U+KCk7XG4gIHB1YmxpYyByZWFkb25seSBkZXN0cm95UHJldmlvdXMkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IGluc2lkZSQkID0gbmV3IFN1YmplY3Q8UHJpem1ab25lRXZlbnQ+KCk7XG4gIHB1YmxpYyByZWFkb25seSBvdXRzaWRlJCQgPSBuZXcgU3ViamVjdDxQcml6bVpvbmVFdmVudD4oKTtcbiAgcHVibGljIGhvc3RFbGVtZW50JCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5uZXJFdmVudCQkID0gbmV3IFN1YmplY3Q8e1xuICAgIHNlcnZpY2U6IFByaXptWm9uZUV2ZW50U2VydmljZTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZXZlbnQ6IFVJRXZlbnQ7XG4gIH0+KCk7XG4gIGdldCBjaGlsZHJlbigpOiBQcml6bVpvbmVFdmVudFNlcnZpY2VbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmNoaWxkcmVuU2V0XTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgem9uZVNlcnZpY2U6IFByaXptWm9uZUV2ZW50U2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50UmVmOiBEb2N1bWVudFxuICApIHtcbiAgICBpZiAodGhpcy56b25lU2VydmljZSkgdGhpcy5wYXJlbnRzLmFkZCh0aGlzLnpvbmVTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyB0cmlnZ2VyRXZlbnQoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGV2ZW50OiBVSUV2ZW50LFxuICAgIHNlcnZpY2U6IFByaXptWm9uZUV2ZW50U2VydmljZSxcbiAgICBndWFyZEZyb21SZWN1cnNpdmVDYWxsOiBTZXQ8UHJpem1ab25lRXZlbnRTZXJ2aWNlPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLmlubmVyRXZlbnQkJC5uZXh0KHtcbiAgICAgIG5hbWUsXG4gICAgICBldmVudCxcbiAgICAgIHNlcnZpY2UsXG4gICAgfSk7XG4gICAgZ3VhcmRGcm9tUmVjdXJzaXZlQ2FsbC5hZGQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2gocGFyZW50ID0+IHtcbiAgICAgIGlmIChndWFyZEZyb21SZWN1cnNpdmVDYWxsLmhhcyhwYXJlbnQpKSByZXR1cm47XG4gICAgICBwYXJlbnQudHJpZ2dlckV2ZW50KG5hbWUsIGV2ZW50LCBzZXJ2aWNlLCBndWFyZEZyb21SZWN1cnNpdmVDYWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYXJlbnQocGFyZW50OiBQcml6bVpvbmVFdmVudFNlcnZpY2UpOiB2b2lkIHtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICAgIHRoaXMucGFyZW50cy5hZGQocGFyZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzYWZlQWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQkJC5uZXh0KGhvc3RFbGVtZW50KTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICBpZiAoZXZlbnROYW1lICYmIGhvc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLmluaXRMaXN0ZW5lcihldmVudE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJbk91dFNpZGVFdmVudHMoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHsgZXZlbnQ6IFVJRXZlbnQ7IGluc2lkZTogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuIHByaXptUmFjZUluRW1pdChcbiAgICAgIFtcbiAgICAgICAgdGhpcy5pbm5lckV2ZW50JCQucGlwZShtYXAoKHsgZXZlbnQgfSkgPT4gKHsgZXZlbnQsIGluc2lkZTogdHJ1ZSB9KSkpLFxuICAgICAgICBmcm9tRXZlbnQ8VUlFdmVudD4odGhpcy5kb2N1bWVudFJlZiwgZXZlbnROYW1lKS5waXBlKG1hcChldmVudCA9PiAoeyBldmVudCwgaW5zaWRlOiBmYWxzZSB9KSkpLFxuICAgICAgXSxcbiAgICAgIDBcbiAgICApLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQkJC52YWx1ZSlcbiAgICAgIGZyb21FdmVudCh0aGlzLmhvc3RFbGVtZW50JCQudmFsdWUsIGV2ZW50TmFtZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KGV2ZW50TmFtZSwgZXZlbnQgYXMgVUlFdmVudCwgdGhpcywgbmV3IFNldCgpKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95UHJldmlvdXMkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIGNvbnN0IHJlcGVhdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KHZvaWQgMCk7XG4gICAgdGhpcy5nZXRJbk91dFNpZGVFdmVudHMoZXZlbnROYW1lKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoeyBldmVudCwgaW5zaWRlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgY29uc3QgZW1pdCA9IHsgZXZlbnQsIHRpbWUgfSBhcyBQcml6bVpvbmVFdmVudDtcbiAgICAgICAgICBpZiAoaW5zaWRlKSB0aGlzLmluc2lkZSQkLm5leHQoZW1pdCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGUkJC5uZXh0KGVtaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgdGFwKCgpID0+IHJlcGVhdCQubmV4dCgpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveVByZXZpb3VzJClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveVByZXZpb3VzJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=