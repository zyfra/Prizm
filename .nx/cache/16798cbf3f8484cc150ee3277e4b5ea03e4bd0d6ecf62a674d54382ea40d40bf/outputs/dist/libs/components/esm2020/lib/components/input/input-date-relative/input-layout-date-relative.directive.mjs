import { NG_VALIDATORS, Validators } from '@angular/forms';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
const ValidationPattern = '(T|\\*)((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?';
export class PrizmInputLayoutDateRelativeDirective {
    validate(control) {
        return Validators.pattern(ValidationPattern)(control);
    }
}
PrizmInputLayoutDateRelativeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRelativeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputLayoutDateRelativeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutDateRelativeDirective, isStandalone: true, selector: "prizm-input-layout-date-relative[ngModel], prizm-input-layout-date-relative[formControl], prizm-input-layout-date-relative[formControlName]", providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PrizmInputLayoutDateRelativeDirective,
            multi: true,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRelativeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'prizm-input-layout-date-relative[ngModel], prizm-input-layout-date-relative[formControl], prizm-input-layout-date-relative[formControlName]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: PrizmInputLayoutDateRelativeDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtcmVsYXRpdmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1kYXRlLXJlbGF0aXZlL2lucHV0LWxheW91dC1kYXRlLXJlbGF0aXZlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLGFBQWEsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxNQUFNLGlCQUFpQixHQUFHLHVFQUF1RSxDQUFDO0FBY2xHLE1BQU0sT0FBTyxxQ0FBcUM7SUFDekMsUUFBUSxDQUFDLE9BQXdCO1FBQ3RDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2tJQUhVLHFDQUFxQztzSEFBckMscUNBQXFDLDBMQVRyQztRQUNUO1lBQ0UsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7MkZBR1UscUNBQXFDO2tCQVpqRCxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFDTiw2SUFBNkk7b0JBQy9JLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyx1Q0FBdUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFZhbGlkYXRpb25QYXR0ZXJuID0gJyhUfFxcXFwqKSgoXFxcXCt8XFxcXC0pKFxcXFxkKykoWXxNfGR8aHxtfHMpKT8oKFxcXFwrfFxcXFwtKShcXFxcZCspKFl8TXxkfGh8bXxzKSk/JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICdwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZVtuZ01vZGVsXSwgcHJpem0taW5wdXQtbGF5b3V0LWRhdGUtcmVsYXRpdmVbZm9ybUNvbnRyb2xdLCBwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZVtmb3JtQ29udHJvbE5hbWVdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBQcml6bUlucHV0TGF5b3V0RGF0ZVJlbGF0aXZlRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dERhdGVSZWxhdGl2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB7XG4gICAgcmV0dXJuIFZhbGlkYXRvcnMucGF0dGVybihWYWxpZGF0aW9uUGF0dGVybikoY29udHJvbCk7XG4gIH1cbn1cbiJdfQ==