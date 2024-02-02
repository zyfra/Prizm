import { ChangeDetectorRef, Directive, Injector, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { PrizmInputControl } from './input-control.class';
import { PrizmInputValidationTexts } from '../services/input-invalid-subtext.service';
import * as i0 from "@angular/core";
export class InputInvalidTextBaseClass {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: InputInvalidTextBaseClass, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: InputInvalidTextBaseClass, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: InputInvalidTextBaseClass, decorators: [{
            type: Directive
        }] });
export class DefaultInputInvalidTextClass extends InputInvalidTextBaseClass {
    constructor(injector) {
        super();
        this.injector = injector;
        this.cdr = this.injector.get(ChangeDetectorRef);
        this.destroy$ = this.injector.get(PrizmDestroyService);
        this.validationTexts = injector.get(PrizmInputValidationTexts, new PrizmInputValidationTexts());
    }
    ngOnInit() {
        this.actualizeText();
        this.control?.stateChanges.pipe(debounceTime(0), takeUntil(this.destroy$)).subscribe(() => {
            this.actualizeText();
        });
    }
    getText(firstInvalidKey) {
        return firstInvalidKey && this.validationTexts.getText(firstInvalidKey, this.control);
    }
    actualizeText() {
        // By default show only touched
        if (!this.control?.touched)
            return;
        const errors = this.control.ngControl?.errors || {};
        const firstInvalidKey = Object.keys(errors)?.[0];
        const errorText = this.getText(firstInvalidKey);
        if (this.invalidText !== errorText) {
            this.setInvalidText(errorText);
        }
        this.cdr.markForCheck();
    }
    setInvalidText(text) {
        this.invalidText = text;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: DefaultInputInvalidTextClass, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: DefaultInputInvalidTextClass, inputs: { control: "control" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: DefaultInputInvalidTextClass, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { control: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW52YWxpZC10ZXh0LWJhc2UtY2xhc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vYmFzZS9pbnB1dC1pbnZhbGlkLXRleHQtYmFzZS1jbGFzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBR3RGLE1BQU0sT0FBZ0IseUJBQXlCOzhHQUF6Qix5QkFBeUI7a0dBQXpCLHlCQUF5Qjs7MkZBQXpCLHlCQUF5QjtrQkFEOUMsU0FBUzs7QUFTVixNQUFNLE9BQU8sNEJBQTZCLFNBQVEseUJBQXlCO0lBU3pFLFlBQStCLFFBQWtCO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBRHFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKaEMsUUFBRyxHQUFzQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELGFBQVEsR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQU10RixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4RixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLGVBQXVCO1FBQ3BDLE9BQU8sZUFBZSxJQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFTLENBQUM7SUFDakcsQ0FBQztJQUVPLGFBQWE7UUFDbkIsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU87WUFBRSxPQUFPO1FBRW5DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsY0FBYyxDQUFDLElBQVk7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs4R0E3Q1UsNEJBQTRCO2tHQUE1Qiw0QkFBNEI7OzJGQUE1Qiw0QkFBNEI7a0JBRHhDLFNBQVM7K0ZBRUMsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSW5qZWN0b3IsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sIH0gZnJvbSAnLi9pbnB1dC1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IFByaXptSW5wdXRWYWxpZGF0aW9uVGV4dHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbnB1dC1pbnZhbGlkLXN1YnRleHQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0SW52YWxpZFRleHRCYXNlQ2xhc3Mge1xuICAvKipcbiAgICogR2V0cyBpbnZhbGlkIHRleHRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRUZXh0KGZpcnN0SW52YWxpZEtleTogc3RyaW5nLCBjb250cm9sPzogUHJpem1JbnB1dENvbnRyb2w8dW5rbm93bj4pOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnB1dEludmFsaWRUZXh0Q2xhc3MgZXh0ZW5kcyBJbnB1dEludmFsaWRUZXh0QmFzZUNsYXNzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29udHJvbD86IFByaXptSW5wdXRDb250cm9sPHVua25vd24+O1xuXG4gIHB1YmxpYyBpbnZhbGlkVGV4dCE6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYgPSB0aGlzLmluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChQcml6bURlc3Ryb3lTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWxpZGF0aW9uVGV4dHM6IFByaXptSW5wdXRWYWxpZGF0aW9uVGV4dHM7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhbGlkYXRpb25UZXh0cyA9IGluamVjdG9yLmdldChQcml6bUlucHV0VmFsaWRhdGlvblRleHRzLCBuZXcgUHJpem1JbnB1dFZhbGlkYXRpb25UZXh0cygpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0dWFsaXplVGV4dCgpO1xuXG4gICAgdGhpcy5jb250cm9sPy5zdGF0ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuYWN0dWFsaXplVGV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFRleHQoZmlyc3RJbnZhbGlkS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaXJzdEludmFsaWRLZXkgJiYgKHRoaXMudmFsaWRhdGlvblRleHRzLmdldFRleHQoZmlyc3RJbnZhbGlkS2V5LCB0aGlzLmNvbnRyb2wpIGFzIGFueSk7XG4gIH1cblxuICBwcml2YXRlIGFjdHVhbGl6ZVRleHQoKTogdm9pZCB7XG4gICAgLy8gQnkgZGVmYXVsdCBzaG93IG9ubHkgdG91Y2hlZFxuICAgIGlmICghdGhpcy5jb250cm9sPy50b3VjaGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmNvbnRyb2wubmdDb250cm9sPy5lcnJvcnMgfHwge307XG5cbiAgICBjb25zdCBmaXJzdEludmFsaWRLZXkgPSBPYmplY3Qua2V5cyhlcnJvcnMpPy5bMF07XG4gICAgY29uc3QgZXJyb3JUZXh0ID0gdGhpcy5nZXRUZXh0KGZpcnN0SW52YWxpZEtleSk7XG5cbiAgICBpZiAodGhpcy5pbnZhbGlkVGV4dCAhPT0gZXJyb3JUZXh0KSB7XG4gICAgICB0aGlzLnNldEludmFsaWRUZXh0KGVycm9yVGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0SW52YWxpZFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnZhbGlkVGV4dCA9IHRleHQ7XG4gIH1cbn1cbiJdfQ==