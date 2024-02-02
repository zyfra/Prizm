import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, inject, Input, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmZoneEventService } from './zone-event.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
/**
 * listening inside/ouside events in zone
 * also can use in none nested elements to create common zone and detect events
 * TODO: add example to doc
 * */
export class PrizmZoneEventDirective {
    get htmlElement() {
        return this.zoneElement ?? this.elementRef.nativeElement;
    }
    constructor() {
        this.childrenZones = [];
        this.zoneEventName = 'click';
        this.zoneActive = true;
        this.zoneOutsideEvent = new EventEmitter();
        this.zoneInsideEvent = new EventEmitter();
        this.destroyPrevious$ = new Subject();
        this.elementRef = inject(ElementRef);
        this.destroyService = inject(PrizmDestroyService);
        this.eventZoneService = inject(PrizmZoneEventService, {
            self: true,
        });
        this.parentEventZoneService = inject(PrizmZoneEventService, {
            skipSelf: true,
            optional: true,
        });
        if (this.parentEventZoneService) {
            this.eventZoneService.setParent(this.parentEventZoneService);
        }
    }
    ngOnInit() {
        if (this.parentZone) {
            this.eventZoneService.setParent(this.parentZone.eventZoneService);
        }
        this.childrenZones.map(childrenZone => {
            childrenZone.setParent(this.eventZoneService);
        });
        this.safeInit();
    }
    ngOnChanges(changes) {
        this.safeInit();
    }
    async safeInit() {
        this.destroyPrevious$.next();
        this.eventZoneService.destroy();
        if (!this.zoneActive)
            return;
        this.eventZoneService.safeAddListener(this.zoneEventName, this.htmlElement);
        this.eventZoneService.outside$$
            .pipe(tap(event => {
            this.zoneOutsideEvent.next(event?.event);
        }), takeUntil(this.destroyService), takeUntil(this.destroyPrevious$))
            .subscribe();
        this.eventZoneService.inside$$
            .pipe(tap(event => {
            this.zoneInsideEvent.next(event?.event);
        }), takeUntil(this.destroyService), takeUntil(this.destroyPrevious$))
            .subscribe();
    }
    ngOnDestroy() {
        this.destroyPrevious$.next();
        this.destroyPrevious$.complete();
    }
}
PrizmZoneEventDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmZoneEventDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmZoneEventDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmZoneEventDirective, selector: "[prizmZoneEvent]", inputs: { zoneElement: "zoneElement", parentZone: "parentZone", childrenZones: "childrenZones", zoneEventName: "zoneEventName", zoneActive: "zoneActive" }, outputs: { zoneOutsideEvent: "zoneOutsideEvent", zoneInsideEvent: "zoneInsideEvent" }, providers: [PrizmZoneEventService, PrizmDestroyService], exportAs: ["prizmZoneEvent"], usesOnChanges: true, ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmZoneEventDirective.prototype, "zoneEventName", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmZoneEventDirective.prototype, "zoneActive", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmZoneEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmZoneEvent]',
                    exportAs: 'prizmZoneEvent',
                    providers: [PrizmZoneEventService, PrizmDestroyService],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { zoneElement: [{
                type: Input
            }], parentZone: [{
                type: Input
            }], childrenZones: [{
                type: Input
            }], zoneEventName: [{
                type: Input
            }], zoneActive: [{
                type: Input
            }], zoneOutsideEvent: [{
                type: Output
            }], zoneInsideEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1ldmVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3pvbmUtZXZlbnQvem9uZS1ldmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXhEOzs7O0tBSUs7QUFNTCxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQyxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQVdEO1FBM0JTLGtCQUFhLEdBQTRCLEVBQUUsQ0FBQztRQUlyRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUl4QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDakQscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUt0QyxlQUFVLEdBQWUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLG1CQUFjLEdBQXdCLE1BQU0sQ0FB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SztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUlOLGFBQWE7c0JBRlosS0FBSztnQkFNTixVQUFVO3NCQUZULEtBQUs7Z0JBSWEsZ0JBQWdCO3NCQUFsQyxNQUFNO2dCQUNZLGVBQWU7c0JBQWpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptWm9uZUV2ZW50U2VydmljZSB9IGZyb20gJy4vem9uZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbi8qKlxuICogbGlzdGVuaW5nIGluc2lkZS9vdXNpZGUgZXZlbnRzIGluIHpvbmVcbiAqIGFsc28gY2FuIHVzZSBpbiBub25lIG5lc3RlZCBlbGVtZW50cyB0byBjcmVhdGUgY29tbW9uIHpvbmUgYW5kIGRldGVjdCBldmVudHNcbiAqIFRPRE86IGFkZCBleGFtcGxlIHRvIGRvY1xuICogKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVpvbmVFdmVudF0nLFxuICBleHBvcnRBczogJ3ByaXptWm9uZUV2ZW50JyxcbiAgcHJvdmlkZXJzOiBbUHJpem1ab25lRXZlbnRTZXJ2aWNlLCBQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1ab25lRXZlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgem9uZUVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgcGFyZW50Wm9uZT86IFByaXptWm9uZUV2ZW50RGlyZWN0aXZlO1xuICBASW5wdXQoKSBjaGlsZHJlblpvbmVzOiBQcml6bVpvbmVFdmVudFNlcnZpY2VbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgem9uZUV2ZW50TmFtZSA9ICdjbGljayc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB6b25lQWN0aXZlID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgem9uZU91dHNpZGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8VUlFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHpvbmVJbnNpZGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8VUlFdmVudD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IGRlc3Ryb3lQcmV2aW91cyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBodG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUVsZW1lbnQgPz8gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lTZXJ2aWNlOiBQcml6bURlc3Ryb3lTZXJ2aWNlID0gaW5qZWN0KFByaXptRGVzdHJveVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50Wm9uZVNlcnZpY2U6IFByaXptWm9uZUV2ZW50U2VydmljZSA9IGluamVjdChQcml6bVpvbmVFdmVudFNlcnZpY2UsIHtcbiAgICBzZWxmOiB0cnVlLFxuICB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnRFdmVudFpvbmVTZXJ2aWNlOiBQcml6bVpvbmVFdmVudFNlcnZpY2UgfCBudWxsID0gaW5qZWN0KFByaXptWm9uZUV2ZW50U2VydmljZSwge1xuICAgIHNraXBTZWxmOiB0cnVlLFxuICAgIG9wdGlvbmFsOiB0cnVlLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodGhpcy5wYXJlbnRFdmVudFpvbmVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmV2ZW50Wm9uZVNlcnZpY2Uuc2V0UGFyZW50KHRoaXMucGFyZW50RXZlbnRab25lU2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhcmVudFpvbmUpIHtcbiAgICAgIHRoaXMuZXZlbnRab25lU2VydmljZS5zZXRQYXJlbnQodGhpcy5wYXJlbnRab25lLmV2ZW50Wm9uZVNlcnZpY2UpO1xuICAgIH1cbiAgICB0aGlzLmNoaWxkcmVuWm9uZXMubWFwKGNoaWxkcmVuWm9uZSA9PiB7XG4gICAgICBjaGlsZHJlblpvbmUuc2V0UGFyZW50KHRoaXMuZXZlbnRab25lU2VydmljZSk7XG4gICAgfSk7XG4gICAgdGhpcy5zYWZlSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNhZmVJbml0KCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2FmZUluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5kZXN0cm95UHJldmlvdXMkLm5leHQoKTtcbiAgICB0aGlzLmV2ZW50Wm9uZVNlcnZpY2UuZGVzdHJveSgpO1xuICAgIGlmICghdGhpcy56b25lQWN0aXZlKSByZXR1cm47XG4gICAgdGhpcy5ldmVudFpvbmVTZXJ2aWNlLnNhZmVBZGRMaXN0ZW5lcih0aGlzLnpvbmVFdmVudE5hbWUsIHRoaXMuaHRtbEVsZW1lbnQpO1xuXG4gICAgdGhpcy5ldmVudFpvbmVTZXJ2aWNlLm91dHNpZGUkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy56b25lT3V0c2lkZUV2ZW50Lm5leHQoZXZlbnQ/LmV2ZW50KTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lTZXJ2aWNlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveVByZXZpb3VzJClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuZXZlbnRab25lU2VydmljZS5pbnNpZGUkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy56b25lSW5zaWRlRXZlbnQubmV4dChldmVudD8uZXZlbnQpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveVNlcnZpY2UpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95UHJldmlvdXMkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95UHJldmlvdXMkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3lQcmV2aW91cyQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19