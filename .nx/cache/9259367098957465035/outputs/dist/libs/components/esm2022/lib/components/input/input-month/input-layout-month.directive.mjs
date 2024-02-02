import { Directive, Inject, Self } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmInputMonthComponent } from './input-month.component';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { prizmAsTextfieldHost } from '../../../tokens/textfield-host.tstextfield-host';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { AbstractPrizmControl } from '../../../abstract/control';
import * as i0 from "@angular/core";
import * as i1 from "./input-month.component";
import * as i2 from "rxjs";
export class PrizmInputLayoutMonthDirective extends AbstractPrizmTextfieldHost {
    constructor(host, formatter, destroy$) {
        super(host);
        this.value$ = new Subject();
        this.localizedValue = ``;
        this.value$
            .pipe(distinctUntilChanged(), switchMap(formatter), takeUntil(destroy$))
            .subscribe(localizedValue => {
            this.localizedValue = localizedValue;
        });
    }
    get readOnly() {
        return true;
    }
    get value() {
        return this.localizedValue;
    }
    ngDoCheck() {
        this.value$.next(this.host.value);
    }
    onValueChange(value) {
        this.host.onValueChange(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthDirective, deps: [{ token: AbstractPrizmControl }, { token: PRIZM_MONTH_FORMATTER }, { token: PrizmDestroyService, self: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutMonthDirective, isStandalone: true, selector: "prizm-input-month", providers: [prizmAsTextfieldHost(PrizmInputLayoutMonthDirective), PrizmDestroyService], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: `prizm-input-month`,
                    standalone: true,
                    providers: [prizmAsTextfieldHost(PrizmInputLayoutMonthDirective), PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmInputMonthComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LW1vbnRoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgvaW5wdXQtbGF5b3V0LW1vbnRoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUd2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVFqRSxNQUFNLE9BQU8sOEJBQ1gsU0FBUSwwQkFBb0Q7SUFPNUQsWUFDZ0MsSUFBOEIsRUFFNUQsU0FBOEQsRUFDekIsUUFBNkI7UUFFbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBVkcsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFxQixDQUFDO1FBRW5ELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBVTFCLElBQUksQ0FBQyxNQUFNO2FBQ1IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2RSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBYSxRQUFRO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQWEsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQXJDVSw4QkFBOEIsa0JBUy9CLG9CQUFvQixhQUNwQixxQkFBcUIsYUFFYixtQkFBbUI7a0dBWjFCLDhCQUE4QixnRUFGOUIsQ0FBQyxvQkFBb0IsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLG1CQUFtQixDQUFDOzsyRkFFM0UsOEJBQThCO2tCQU4xQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixnQ0FBZ0MsRUFBRSxtQkFBbUIsQ0FBQztpQkFDdkY7OzBCQVVJLE1BQU07MkJBQUMsb0JBQW9COzswQkFDM0IsTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixJQUFJOzswQkFBSSxNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5qZWN0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0TW9udGhDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptVGV4dGZpZWxkSG9zdCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2Fic3RyYWN0LXRleHRmaWVsZC1ob3N0JztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgcHJpem1Bc1RleHRmaWVsZEhvc3QgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvdGV4dGZpZWxkLWhvc3QudHN0ZXh0ZmllbGQtaG9zdCc7XG5pbXBvcnQgeyBQcml6bUhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1Db250cm9sIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvY29udHJvbCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogYHByaXptLWlucHV0LW1vbnRoYCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbcHJpem1Bc1RleHRmaWVsZEhvc3QoUHJpem1JbnB1dExheW91dE1vbnRoRGlyZWN0aXZlKSwgUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRMYXlvdXRNb250aERpcmVjdGl2ZVxuICBleHRlbmRzIEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0PFByaXptSW5wdXRNb250aENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBEb0NoZWNrXG57XG4gIHByaXZhdGUgcmVhZG9ubHkgdmFsdWUkID0gbmV3IFN1YmplY3Q8UHJpem1Nb250aCB8IG51bGw+KCk7XG5cbiAgcHJpdmF0ZSBsb2NhbGl6ZWRWYWx1ZSA9IGBgO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQWJzdHJhY3RQcml6bUNvbnRyb2wpIGhvc3Q6IFByaXptSW5wdXRNb250aENvbXBvbmVudCxcbiAgICBASW5qZWN0KFBSSVpNX01PTlRIX0ZPUk1BVFRFUilcbiAgICBmb3JtYXR0ZXI6IFByaXptSGFuZGxlcjxQcml6bU1vbnRoIHwgbnVsbCwgT2JzZXJ2YWJsZTxzdHJpbmc+PixcbiAgICBAU2VsZigpIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIoaG9zdCk7XG5cbiAgICB0aGlzLnZhbHVlJFxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgc3dpdGNoTWFwKGZvcm1hdHRlciksIHRha2VVbnRpbChkZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGxvY2FsaXplZFZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IGxvY2FsaXplZFZhbHVlO1xuICAgICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZWRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSQubmV4dCh0aGlzLmhvc3QudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19