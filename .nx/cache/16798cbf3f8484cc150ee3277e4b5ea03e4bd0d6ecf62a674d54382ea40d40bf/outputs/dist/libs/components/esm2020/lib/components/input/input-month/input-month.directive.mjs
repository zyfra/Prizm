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
export class PrizmInputMonthDirective extends AbstractPrizmTextfieldHost {
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
}
PrizmInputMonthDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthDirective, deps: [{ token: AbstractPrizmControl }, { token: PRIZM_MONTH_FORMATTER }, { token: PrizmDestroyService, self: true }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputMonthDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputMonthDirective, selector: "prizm-input-month", providers: [prizmAsTextfieldHost(PrizmInputMonthDirective), PrizmDestroyService], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: `prizm-input-month`,
                    providers: [prizmAsTextfieldHost(PrizmInputMonthDirective), PrizmDestroyService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC9pbnB1dC1tb250aC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFHdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFPakUsTUFBTSxPQUFPLHdCQUNYLFNBQVEsMEJBQW9EO0lBTzVELFlBQ2dDLElBQThCLEVBRTVELFNBQThELEVBQ3pCLFFBQTZCO1FBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVZHLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUVuRCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQVUxQixJQUFJLENBQUMsTUFBTTthQUNSLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQWEsUUFBUTtRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFhLEtBQUs7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7cUhBckNVLHdCQUF3QixrQkFTekIsb0JBQW9CLGFBQ3BCLHFCQUFxQixhQUViLG1CQUFtQjt5R0FaMUIsd0JBQXdCLDRDQUZ4QixDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLENBQUM7MkZBRXJFLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQiwwQkFBMEIsRUFBRSxtQkFBbUIsQ0FBQztpQkFDakY7OzBCQVVJLE1BQU07MkJBQUMsb0JBQW9COzswQkFDM0IsTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixJQUFJOzswQkFBSSxNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRG9DaGVjaywgSW5qZWN0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0TW9udGhDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptVGV4dGZpZWxkSG9zdCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2Fic3RyYWN0LXRleHRmaWVsZC1ob3N0JztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgcHJpem1Bc1RleHRmaWVsZEhvc3QgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvdGV4dGZpZWxkLWhvc3QudHN0ZXh0ZmllbGQtaG9zdCc7XG5pbXBvcnQgeyBQcml6bUhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1Db250cm9sIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvY29udHJvbCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogYHByaXptLWlucHV0LW1vbnRoYCxcbiAgcHJvdmlkZXJzOiBbcHJpem1Bc1RleHRmaWVsZEhvc3QoUHJpem1JbnB1dE1vbnRoRGlyZWN0aXZlKSwgUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRNb250aERpcmVjdGl2ZVxuICBleHRlbmRzIEFic3RyYWN0UHJpem1UZXh0ZmllbGRIb3N0PFByaXptSW5wdXRNb250aENvbXBvbmVudD5cbiAgaW1wbGVtZW50cyBEb0NoZWNrXG57XG4gIHByaXZhdGUgcmVhZG9ubHkgdmFsdWUkID0gbmV3IFN1YmplY3Q8UHJpem1Nb250aCB8IG51bGw+KCk7XG5cbiAgcHJpdmF0ZSBsb2NhbGl6ZWRWYWx1ZSA9IGBgO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQWJzdHJhY3RQcml6bUNvbnRyb2wpIGhvc3Q6IFByaXptSW5wdXRNb250aENvbXBvbmVudCxcbiAgICBASW5qZWN0KFBSSVpNX01PTlRIX0ZPUk1BVFRFUilcbiAgICBmb3JtYXR0ZXI6IFByaXptSGFuZGxlcjxQcml6bU1vbnRoIHwgbnVsbCwgT2JzZXJ2YWJsZTxzdHJpbmc+PixcbiAgICBAU2VsZigpIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIoaG9zdCk7XG5cbiAgICB0aGlzLnZhbHVlJFxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgc3dpdGNoTWFwKGZvcm1hdHRlciksIHRha2VVbnRpbChkZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGxvY2FsaXplZFZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IGxvY2FsaXplZFZhbHVlO1xuICAgICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZWRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSQubmV4dCh0aGlzLmhvc3QudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19