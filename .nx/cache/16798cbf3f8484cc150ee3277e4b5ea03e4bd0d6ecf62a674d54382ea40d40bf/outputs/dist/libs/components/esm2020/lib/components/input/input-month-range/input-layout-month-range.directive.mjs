import { Directive, Inject, Self } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { prizmAsTextfieldHost } from '../../../tokens/textfield-host.tstextfield-host';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import * as i0 from "@angular/core";
import * as i1 from "./input-month-range.component";
import * as i2 from "rxjs";
export class PrizmInputLayoutMonthRangeDirective extends AbstractPrizmTextfieldHost {
    constructor(host, formatter, destroy$) {
        super(host);
        this.value$ = new Subject();
        this.localizedValue = [``, ``];
        this.value$
            .pipe(distinctUntilChanged(), switchMap((value) => combineLatest([formatter(value?.from || null), formatter(value?.to || null)])), takeUntil(destroy$))
            .subscribe(localizedValue => {
            this.localizedValue = localizedValue;
        });
    }
    get readOnly() {
        return true;
    }
    get value() {
        return this.localizedValue[0] ? this.host.computeValue(...this.localizedValue) : ``;
    }
    ngDoCheck() {
        this.value$.next(this.host.value);
    }
    onValueChange(value) {
        this.host.onValueChange(value);
    }
}
PrizmInputLayoutMonthRangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthRangeDirective, deps: [{ token: AbstractPrizmControl }, { token: PRIZM_MONTH_FORMATTER }, { token: PrizmDestroyService, self: true }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputLayoutMonthRangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutMonthRangeDirective, isStandalone: true, selector: "prizm-input-month-range", providers: [prizmAsTextfieldHost(PrizmInputLayoutMonthRangeDirective), PrizmDestroyService], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthRangeDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: `prizm-input-month-range`,
                    providers: [prizmAsTextfieldHost(PrizmInputLayoutMonthRangeDirective), PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmInputMonthRangeComponent, decorators: [{
                    type: Inject,
                    args: [AbstractPrizmControl]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_MONTH_FORMATTER]
                }] }, { type: i2.Observable, decorators: [{
                    type: Self
                }, {
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgtcmFuZ2UvaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFVeEUsTUFBTSxPQUFPLG1DQUNYLFNBQVEsMEJBQXlEO0lBT2pFLFlBQ2dDLElBQW1DLEVBRWpFLFNBQThELEVBQ3pCLFFBQTZCO1FBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVZHLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBMEIsQ0FBQztRQUV4RCxtQkFBYyxHQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVVsRCxJQUFJLENBQUMsTUFBTTthQUNSLElBQUksQ0FDSCxvQkFBb0IsRUFBRSxFQUN0QixTQUFTLENBQUMsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FDMUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM5RSxFQUNELFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FDcEI7YUFDQSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBb0IsUUFBUTtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFvQixLQUFLO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dJQTNDVSxtQ0FBbUMsa0JBU3BDLG9CQUFvQixhQUNwQixxQkFBcUIsYUFFYixtQkFBbUI7b0hBWjFCLG1DQUFtQyxzRUFIbkMsQ0FBQyxvQkFBb0IsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDOzJGQUdoRixtQ0FBbUM7a0JBTi9DLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IscUNBQXFDLEVBQUUsbUJBQW1CLENBQUM7b0JBQzNGLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBVUksTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUMzQixNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLElBQUk7OzBCQUFJLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbmplY3QsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1tb250aC1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0IH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvYWJzdHJhY3QtdGV4dGZpZWxkLWhvc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aFJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoLXJhbmdlJztcbmltcG9ydCB7IHByaXptQXNUZXh0ZmllbGRIb3N0IH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL3RleHRmaWVsZC1ob3N0LnRzdGV4dGZpZWxkLWhvc3QnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9jb250cm9sJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgUHJpem1IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtbW9udGgtcmFuZ2VgLFxuICBwcm92aWRlcnM6IFtwcml6bUFzVGV4dGZpZWxkSG9zdChQcml6bUlucHV0TGF5b3V0TW9udGhSYW5nZURpcmVjdGl2ZSksIFByaXptRGVzdHJveVNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0TW9udGhSYW5nZURpcmVjdGl2ZVxuICBleHRlbmRzIEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0PFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50PlxuICBpbXBsZW1lbnRzIERvQ2hlY2tcbntcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZSQgPSBuZXcgU3ViamVjdDxQcml6bU1vbnRoUmFuZ2UgfCBudWxsPigpO1xuXG4gIHByaXZhdGUgbG9jYWxpemVkVmFsdWU6IFtzdHJpbmcsIHN0cmluZ10gPSBbYGAsIGBgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFic3RyYWN0UHJpem1Db250cm9sKSBob3N0OiBQcml6bUlucHV0TW9udGhSYW5nZUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFBSSVpNX01PTlRIX0ZPUk1BVFRFUilcbiAgICBmb3JtYXR0ZXI6IFByaXptSGFuZGxlcjxQcml6bU1vbnRoIHwgbnVsbCwgT2JzZXJ2YWJsZTxzdHJpbmc+PixcbiAgICBAU2VsZigpIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIoaG9zdCk7XG5cbiAgICB0aGlzLnZhbHVlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN3aXRjaE1hcCgodmFsdWU6IFByaXptTW9udGhSYW5nZSB8IG51bGwpID0+XG4gICAgICAgICAgY29tYmluZUxhdGVzdChbZm9ybWF0dGVyKHZhbHVlPy5mcm9tIHx8IG51bGwpLCBmb3JtYXR0ZXIodmFsdWU/LnRvIHx8IG51bGwpXSlcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShsb2NhbGl6ZWRWYWx1ZSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBsb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZWRWYWx1ZVswXSA/IHRoaXMuaG9zdC5jb21wdXRlVmFsdWUoLi4udGhpcy5sb2NhbGl6ZWRWYWx1ZSkgOiBgYDtcbiAgfVxuXG4gIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSQubmV4dCh0aGlzLmhvc3QudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19