import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Default class for input validation texts
 */
export class PrizmInputValidationTexts {
    constructor() {
        this.invalidTextMap = new Map([
            ['required', 'Обязательное поле'],
            ['pattern', 'Неправильный формат'],
            ['min', 'Значение слишком маленькое'],
            ['max', 'Значение слишком большое'],
        ]);
    }
    getText(key, control) {
        return this.invalidTextMap.get(key);
    }
}
PrizmInputValidationTexts.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputValidationTexts, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmInputValidationTexts.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputValidationTexts });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputValidationTexts, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW52YWxpZC1zdWJ0ZXh0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2NvbW1vbi9zZXJ2aWNlcy9pbnB1dC1pbnZhbGlkLXN1YnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQzs7R0FFRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFEdEM7UUFFbUIsbUJBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBaUI7WUFDeEQsQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUM7WUFDakMsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUM7WUFDbEMsQ0FBQyxLQUFLLEVBQUUsNEJBQTRCLENBQUM7WUFDckMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBS0o7SUFIUSxPQUFPLENBQUMsR0FBVyxFQUFFLE9BQW9DO1FBQzlELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7c0hBVlUseUJBQXlCOzBIQUF6Qix5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogRGVmYXVsdCBjbGFzcyBmb3IgaW5wdXQgdmFsaWRhdGlvbiB0ZXh0c1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFZhbGlkYXRpb25UZXh0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW52YWxpZFRleHRNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihbXG4gICAgWydyZXF1aXJlZCcsICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnXSxcbiAgICBbJ3BhdHRlcm4nLCAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGE0L7RgNC80LDRgiddLFxuICAgIFsnbWluJywgJ9CX0L3QsNGH0LXQvdC40LUg0YHQu9C40YjQutC+0Lwg0LzQsNC70LXQvdGM0LrQvtC1J10sXG4gICAgWydtYXgnLCAn0JfQvdCw0YfQtdC90LjQtSDRgdC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QtSddLFxuICBdKTtcblxuICBwdWJsaWMgZ2V0VGV4dChrZXk6IHN0cmluZywgY29udHJvbD86IFByaXptSW5wdXRDb250cm9sPHVua25vd24+KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkVGV4dE1hcC5nZXQoa2V5KTtcbiAgfVxufVxuIl19