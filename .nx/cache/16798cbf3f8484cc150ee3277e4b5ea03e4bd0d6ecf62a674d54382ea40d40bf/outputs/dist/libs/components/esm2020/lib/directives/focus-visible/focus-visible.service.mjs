import { ChangeDetectorRef, ElementRef, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmWatch } from '../../observables/watch';
import { prizmFocusVisibleObservable } from '../../observables/focus-visible-observable';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
export class PrizmFocusVisibleService extends Observable {
    constructor({ nativeElement }, changeDetectorRef, destroy$) {
        super(subscriber => this.focusVisible$.subscribe(subscriber));
        this.focusVisible$ = prizmFocusVisibleObservable(nativeElement).pipe(prizmWatch(changeDetectorRef), takeUntil(destroy$));
    }
}
PrizmFocusVisibleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFocusVisibleService, deps: [{ token: ElementRef }, { token: ChangeDetectorRef }, { token: PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmFocusVisibleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFocusVisibleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFocusVisibleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdmlzaWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9mb2N1cy12aXNpYmxlL2ZvY3VzLXZpc2libGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7QUFFekY7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFtQjtJQUcvRCxZQUNzQixFQUFFLGFBQWEsRUFBdUIsRUFDL0IsaUJBQW9DLEVBQ2xDLFFBQTBCO1FBRXZELEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGFBQWEsR0FBRywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ2xFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM3QixTQUFTLENBQUMsUUFBUSxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDOztxSEFkVSx3QkFBd0Isa0JBSXpCLFVBQVUsYUFDVixpQkFBaUIsYUFDakIsbUJBQW1CO3lIQU5sQix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVTs7MEJBS04sTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBwcml6bVdhdGNoIH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZXMvd2F0Y2gnO1xuaW1wb3J0IHsgcHJpem1Gb2N1c1Zpc2libGVPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZXMvZm9jdXMtdmlzaWJsZS1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGltaXRhdGUgOmZvY3VzLXZpc2libGVcbiAqIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvOmZvY3VzLXZpc2libGUpXG4gKiBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bUZvY3VzVmlzaWJsZVNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBmb2N1c1Zpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgeyBuYXRpdmVFbGVtZW50IH06IEVsZW1lbnRSZWY8RWxlbWVudD4sXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dm9pZD5cbiAgKSB7XG4gICAgc3VwZXIoc3Vic2NyaWJlciA9PiB0aGlzLmZvY3VzVmlzaWJsZSQuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcblxuICAgIHRoaXMuZm9jdXNWaXNpYmxlJCA9IHByaXptRm9jdXNWaXNpYmxlT2JzZXJ2YWJsZShuYXRpdmVFbGVtZW50KS5waXBlKFxuICAgICAgcHJpem1XYXRjaChjaGFuZ2VEZXRlY3RvclJlZiksXG4gICAgICB0YWtlVW50aWwoZGVzdHJveSQpXG4gICAgKTtcbiAgfVxufVxuIl19