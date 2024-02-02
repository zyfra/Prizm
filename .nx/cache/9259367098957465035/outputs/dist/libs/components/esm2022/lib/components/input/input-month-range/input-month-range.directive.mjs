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
export class PrizmInputMonthRangeDirective extends AbstractPrizmTextfieldHost {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthRangeDirective, deps: [{ token: AbstractPrizmControl }, { token: PRIZM_MONTH_FORMATTER }, { token: PrizmDestroyService, self: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputMonthRangeDirective, selector: "prizm-input-month-range", providers: [prizmAsTextfieldHost(PrizmInputMonthRangeDirective), PrizmDestroyService], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthRangeDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: `prizm-input-month-range`,
                    providers: [prizmAsTextfieldHost(PrizmInputMonthRangeDirective), PrizmDestroyService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgtcmFuZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC1yYW5nZS9pbnB1dC1tb250aC1yYW5nZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBU3hFLE1BQU0sT0FBTyw2QkFDWCxTQUFRLDBCQUF5RDtJQU9qRSxZQUNnQyxJQUFtQyxFQUVqRSxTQUE4RCxFQUN6QixRQUE2QjtRQUVsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFWRyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQTBCLENBQUM7UUFFeEQsbUJBQWMsR0FBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFVbEQsSUFBSSxDQUFDLE1BQU07YUFDUixJQUFJLENBQ0gsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLENBQUMsS0FBNkIsRUFBRSxFQUFFLENBQzFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDOUUsRUFDRCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQ3BCO2FBQ0EsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQW9CLFFBQVE7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBb0IsS0FBSztRQUN2QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQTNDVSw2QkFBNkIsa0JBUzlCLG9CQUFvQixhQUNwQixxQkFBcUIsYUFFYixtQkFBbUI7a0dBWjFCLDZCQUE2QixrREFGN0IsQ0FBQyxvQkFBb0IsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLG1CQUFtQixDQUFDOzsyRkFFMUUsNkJBQTZCO2tCQUx6QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLCtCQUErQixFQUFFLG1CQUFtQixDQUFDO2lCQUN0Rjs7MEJBVUksTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUMzQixNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLElBQUk7OzBCQUFJLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBJbmplY3QsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1tb250aC1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0IH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvYWJzdHJhY3QtdGV4dGZpZWxkLWhvc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aFJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoLXJhbmdlJztcbmltcG9ydCB7IHByaXptQXNUZXh0ZmllbGRIb3N0IH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL3RleHRmaWVsZC1ob3N0LnRzdGV4dGZpZWxkLWhvc3QnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9jb250cm9sJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgUHJpem1IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtbW9udGgtcmFuZ2VgLFxuICBwcm92aWRlcnM6IFtwcml6bUFzVGV4dGZpZWxkSG9zdChQcml6bUlucHV0TW9udGhSYW5nZURpcmVjdGl2ZSksIFByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TW9udGhSYW5nZURpcmVjdGl2ZVxuICBleHRlbmRzIEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0PFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50PlxuICBpbXBsZW1lbnRzIERvQ2hlY2tcbntcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZSQgPSBuZXcgU3ViamVjdDxQcml6bU1vbnRoUmFuZ2UgfCBudWxsPigpO1xuXG4gIHByaXZhdGUgbG9jYWxpemVkVmFsdWU6IFtzdHJpbmcsIHN0cmluZ10gPSBbYGAsIGBgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFic3RyYWN0UHJpem1Db250cm9sKSBob3N0OiBQcml6bUlucHV0TW9udGhSYW5nZUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFBSSVpNX01PTlRIX0ZPUk1BVFRFUilcbiAgICBmb3JtYXR0ZXI6IFByaXptSGFuZGxlcjxQcml6bU1vbnRoIHwgbnVsbCwgT2JzZXJ2YWJsZTxzdHJpbmc+PixcbiAgICBAU2VsZigpIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIoaG9zdCk7XG5cbiAgICB0aGlzLnZhbHVlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN3aXRjaE1hcCgodmFsdWU6IFByaXptTW9udGhSYW5nZSB8IG51bGwpID0+XG4gICAgICAgICAgY29tYmluZUxhdGVzdChbZm9ybWF0dGVyKHZhbHVlPy5mcm9tIHx8IG51bGwpLCBmb3JtYXR0ZXIodmFsdWU/LnRvIHx8IG51bGwpXSlcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShsb2NhbGl6ZWRWYWx1ZSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBsb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZWRWYWx1ZVswXSA/IHRoaXMuaG9zdC5jb21wdXRlVmFsdWUoLi4udGhpcy5sb2NhbGl6ZWRWYWx1ZSkgOiBgYDtcbiAgfVxuXG4gIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSQubmV4dCh0aGlzLmhvc3QudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19