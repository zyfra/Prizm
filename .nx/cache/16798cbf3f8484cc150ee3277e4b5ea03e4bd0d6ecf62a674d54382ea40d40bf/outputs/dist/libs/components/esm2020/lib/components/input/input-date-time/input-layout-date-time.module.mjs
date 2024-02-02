import { NgModule } from '@angular/core';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutDateTimeComponent } from './input-layout-date-time.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmInputLayoutDateTimeModule {
}
PrizmInputLayoutDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputLayoutDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeModule, imports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule], exports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule] });
PrizmInputLayoutDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeModule, imports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule, PrizmDropdownHostModule, PrizmInputTextModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule],
                    exports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS9pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUV2Rjs7O0tBR0s7QUFLTCxNQUFNLE9BQU8sOEJBQThCOzsySEFBOUIsOEJBQThCOzRIQUE5Qiw4QkFBOEIsWUFIL0IsdUJBQXVCLEVBQUUsaUNBQWlDLEVBQUUsb0JBQW9CLGFBQ2hGLHVCQUF1QixFQUFFLGlDQUFpQyxFQUFFLG9CQUFvQjs0SEFFL0UsOEJBQThCLFlBSC9CLHVCQUF1QixFQUFFLGlDQUFpQyxFQUFFLG9CQUFvQixFQUNoRix1QkFBdUIsRUFBcUMsb0JBQW9COzJGQUUvRSw4QkFBOEI7a0JBSjFDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsaUNBQWlDLEVBQUUsb0JBQW9CLENBQUM7b0JBQzNGLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLGlDQUFpQyxFQUFFLG9CQUFvQixDQUFDO2lCQUM1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0RGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWxheW91dC1kYXRlLXRpbWUuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUsIFByaXptSW5wdXRMYXlvdXREYXRlVGltZUNvbXBvbmVudCwgUHJpem1JbnB1dFRleHRNb2R1bGVdLFxuICBleHBvcnRzOiBbUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUsIFByaXptSW5wdXRMYXlvdXREYXRlVGltZUNvbXBvbmVudCwgUHJpem1JbnB1dFRleHRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0RGF0ZVRpbWVNb2R1bGUge31cbiJdfQ==