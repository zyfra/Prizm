import { ChangeDetectorRef, Directive, Output } from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { merge, Observable, switchMap } from 'rxjs';
import { distinctUntilChanged, map, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./input-zone.service";
export class PrizmInputZoneDirective {
    get focused() {
        return !!this.inputZoneService.elements.find(i => i.focused);
    }
    get elements() {
        return this.inputZoneService.elements;
    }
    get inputs() {
        return this.inputZoneService.elements.map(i => i.el.nativeElement);
    }
    get values() {
        return this.inputs.map(i => i.value);
    }
    constructor(inputZoneService, cdRef) {
        this.inputZoneService = inputZoneService;
        this.cdRef = cdRef;
        this.focused$ = this.inputZoneService.elements$.pipe(switchMap(elements => merge(...elements.map(element => element.focused$))), distinctUntilChanged(), share());
        this.blur$ = this.focused$.pipe(map(i => !i));
    }
    focus(idx = 0) {
        const selected = this.inputZoneService.elements[idx];
        if (selected)
            selected.focus();
        return this;
    }
    getFocusedByIdx(idx = 0) {
        const selected = this.inputZoneService.elements[idx];
        if (selected)
            selected.focused;
        return this;
    }
    updateNativeValue(idx, value) {
        const selected = this.inputZoneService.elements[idx];
        if (selected) {
            const newValue = value?.toString() ?? '';
            selected.updateNativeValue.next(newValue);
            if (selected.el.nativeElement)
                selected.el.nativeElement.value = newValue;
        }
        return this;
    }
    updateNativeValues(...values) {
        values.forEach(({ idx, value }) => {
            this.updateNativeValue(idx, value);
        });
        return this;
    }
    selectionToStart(idx = 0) {
        const selected = this.inputZoneService.elements[idx];
        if (selected)
            selected.focus().selectionToStart();
        return this;
    }
}
PrizmInputZoneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputZoneDirective, deps: [{ token: i1.PrizmInputZoneService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputZoneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputZoneDirective, selector: "[prizmInputZone]", outputs: { focused$: "focused$", blur$: "blur$" }, providers: [PrizmInputZoneService], exportAs: ["prizmInputZone"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputZoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmInputZone]`,
                    providers: [PrizmInputZoneService],
                    exportAs: 'prizmInputZone',
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmInputZoneService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { focused$: [{
                type: Output
            }], blur$: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtem9uZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2lucHV0LXpvbmUvaW5wdXQtem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU9sRSxNQUFNLE9BQU8sdUJBQXVCO0lBU2xDLElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZ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IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFpvbmVTZXJ2aWNlIH0gZnJvbSAnLi9pbnB1dC16b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtwcml6bUlucHV0Wm9uZV1gLFxuICBwcm92aWRlcnM6IFtQcml6bUlucHV0Wm9uZVNlcnZpY2VdLFxuICBleHBvcnRBczogJ3ByaXptSW5wdXRab25lJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFpvbmVEaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9jdXNlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmlucHV0Wm9uZVNlcnZpY2UuZWxlbWVudHMkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGVsZW1lbnRzID0+IG1lcmdlKC4uLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZm9jdXNlZCQpKSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBzaGFyZSgpXG4gICk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJsdXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5mb2N1c2VkJC5waXBlKG1hcChpID0+ICFpKSk7XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFpvbmVTZXJ2aWNlLmVsZW1lbnRzLmZpbmQoaSA9PiBpLmZvY3VzZWQpO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0Wm9uZVNlcnZpY2UuZWxlbWVudHM7XG4gIH1cblxuICBnZXQgaW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRab25lU2VydmljZS5lbGVtZW50cy5tYXAoaSA9PiBpLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IHZhbHVlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRzLm1hcChpID0+IGkudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFpvbmVTZXJ2aWNlOiBQcml6bUlucHV0Wm9uZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBmb2N1cyhpZHggPSAwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmlucHV0Wm9uZVNlcnZpY2UuZWxlbWVudHNbaWR4XTtcbiAgICBpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmZvY3VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9jdXNlZEJ5SWR4KGlkeCA9IDApIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaW5wdXRab25lU2VydmljZS5lbGVtZW50c1tpZHhdO1xuICAgIGlmIChzZWxlY3RlZCkgc2VsZWN0ZWQuZm9jdXNlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVOYXRpdmVWYWx1ZShpZHg6IG51bWJlciwgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwpOiBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmlucHV0Wm9uZVNlcnZpY2UuZWxlbWVudHNbaWR4XTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gICAgICBzZWxlY3RlZC51cGRhdGVOYXRpdmVWYWx1ZS5uZXh0KG5ld1ZhbHVlKTtcbiAgICAgIGlmIChzZWxlY3RlZC5lbC5uYXRpdmVFbGVtZW50KSBzZWxlY3RlZC5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU5hdGl2ZVZhbHVlcyhcbiAgICAuLi52YWx1ZXM6IHsgaWR4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIH1bXVxuICApOiBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZSB7XG4gICAgdmFsdWVzLmZvckVhY2goKHsgaWR4LCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU5hdGl2ZVZhbHVlKGlkeCwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGlvblRvU3RhcnQoaWR4ID0gMCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5pbnB1dFpvbmVTZXJ2aWNlLmVsZW1lbnRzW2lkeF07XG4gICAgaWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5mb2N1cygpLnNlbGVjdGlvblRvU3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19