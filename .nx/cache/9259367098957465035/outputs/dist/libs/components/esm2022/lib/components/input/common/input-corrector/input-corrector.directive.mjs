import { ChangeDetectorRef, Directive, ElementRef, HostListener, Input, Optional, Self, } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@prizm-ui/helpers";
export class PrizmInputCorrectorDirective {
    onInputOrPaste() {
        this.inputs$.next(this.el.nativeElement.value);
    }
    constructor(el, ngControl, cdr, destroy$) {
        this.el = el;
        this.ngControl = ngControl;
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.inputs$ = new Subject();
        this.corrector = null;
        this.needCorrect = () => true;
        this.overrideSetValue();
    }
    overrideSetValue() {
        if (this.ngControl.control) {
            const originFunc = this.ngControl.control.setValue;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            this.ngControl.control.setValue = function (value, options) {
                const newValue = self.correctValue(value);
                originFunc.call(this, newValue, options);
                self.updateNativeValue(newValue);
            };
        }
    }
    correctValue(value) {
        if (!this.needCorrect(value))
            return value;
        if (!this.corrector)
            return value;
        return this.corrector(value);
    }
    updateNativeValue(value) {
        this.el.nativeElement.value = value;
    }
    updateNgValue(value) {
        this.ngControl?.control?.setValue(value);
    }
    ngOnInit() {
        this.inputs$
            .pipe(debounceTime(100), tap(value => {
            const correctValue = this.correctValue(value);
            if (correctValue !== value) {
                this.updateNativeValue(correctValue);
                this.updateNgValue(correctValue);
            }
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCorrectorDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputCorrectorDirective, selector: "[prizmInputCorrector]", inputs: { corrector: ["prizmInputCorrector", "corrector"], needCorrect: "needCorrect" }, host: { listeners: { "paste": "onInputOrPaste()", "input": "onInputOrPaste()" } }, providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCorrectorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmInputCorrector]',
                    providers: [PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.PrizmDestroyService }]; }, propDecorators: { corrector: [{
                type: Input,
                args: ['prizmInputCorrector']
            }], needCorrect: [{
                type: Input
            }], onInputOrPaste: [{
                type: HostListener,
                args: ['paste', []]
            }, {
                type: HostListener,
                args: ['input', []]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29ycmVjdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY29tbW9uL2lucHV0LWNvcnJlY3Rvci9pbnB1dC1jb3JyZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNOUQsTUFBTSxPQUFPLDRCQUE0QjtJQVFoQyxjQUFjO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUNtQixFQUFnQyxFQUNyQixTQUFvQixFQUN4QyxHQUFzQixFQUN0QixRQUE2QjtRQUhwQixPQUFFLEdBQUYsRUFBRSxDQUE4QjtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBZnRCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRWhCLGNBQVMsR0FBdUMsSUFBSSxDQUFDO1FBQzFFLGdCQUFXLEdBQStCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQWM1RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25ELDREQUE0RDtZQUM1RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFVBQVUsS0FBSyxFQUFFLE9BQU87Z0JBQ3hELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTzthQUNULElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxZQUFZLEtBQUssS0FBSyxFQUFFO2dCQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBOURVLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDROQUY1QixDQUFDLG1CQUFtQixDQUFDOzsyRkFFckIsNEJBQTRCO2tCQUp4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQzs7MEJBZUksUUFBUTs7MEJBQUksSUFBSTs4R0FYVyxTQUFTO3NCQUF0QyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFDbkIsV0FBVztzQkFBbkIsS0FBSztnQkFJQyxjQUFjO3NCQUZwQixZQUFZO3VCQUFDLE9BQU8sRUFBRSxFQUFFOztzQkFDeEIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUlucHV0Q29ycmVjdG9yXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0Q29ycmVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dHMkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIEBJbnB1dCgncHJpem1JbnB1dENvcnJlY3RvcicpIGNvcnJlY3RvcjogKCh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5lZWRDb3JyZWN0OiAodmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbiA9ICgpID0+IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbXSlcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbXSlcbiAgcHVibGljIG9uSW5wdXRPclBhc3RlKCk6IHZvaWQgfCBmYWxzZSB7XG4gICAgdGhpcy5pbnB1dHMkLm5leHQodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMub3ZlcnJpZGVTZXRWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZVNldFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sKSB7XG4gICAgICBjb25zdCBvcmlnaW5GdW5jID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRWYWx1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc2VsZi5jb3JyZWN0VmFsdWUodmFsdWUpO1xuICAgICAgICBvcmlnaW5GdW5jLmNhbGwodGhpcywgbmV3VmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICBzZWxmLnVwZGF0ZU5hdGl2ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0VmFsdWUodmFsdWU6IHN0cmluZyk6IHR5cGVvZiB2YWx1ZSB7XG4gICAgaWYgKCF0aGlzLm5lZWRDb3JyZWN0KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIGlmICghdGhpcy5jb3JyZWN0b3IpIHJldHVybiB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5jb3JyZWN0b3IodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVOYXRpdmVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU5nVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0cyRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgdGFwKHZhbHVlID0+IHtcbiAgICAgICAgICBjb25zdCBjb3JyZWN0VmFsdWUgPSB0aGlzLmNvcnJlY3RWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgaWYgKGNvcnJlY3RWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmF0aXZlVmFsdWUoY29ycmVjdFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmdWYWx1ZShjb3JyZWN0VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=