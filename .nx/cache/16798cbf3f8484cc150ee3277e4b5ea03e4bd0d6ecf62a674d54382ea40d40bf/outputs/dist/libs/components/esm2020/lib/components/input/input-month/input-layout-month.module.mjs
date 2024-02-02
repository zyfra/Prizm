import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutMonthComponent } from './input-layout-month.component';
import { PrizmInputLayoutMonthDirective } from './input-layout-month.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmInputLayoutMonthModule {
}
PrizmInputLayoutMonthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputLayoutMonthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthModule, imports: [PrizmInputTextModule, PrizmInputLayoutMonthComponent, PrizmInputLayoutMonthDirective], exports: [PrizmInputLayoutMonthComponent, PrizmInputTextModule, PrizmInputLayoutMonthDirective] });
PrizmInputLayoutMonthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthModule, imports: [PrizmInputTextModule, PrizmInputLayoutMonthComponent, PrizmInputTextModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutMonthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmInputTextModule, PrizmInputLayoutMonthComponent, PrizmInputLayoutMonthDirective],
                    exports: [PrizmInputLayoutMonthComponent, PrizmInputTextModule, PrizmInputLayoutMonthDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LW1vbnRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgvaW5wdXQtbGF5b3V0LW1vbnRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUVoRjs7O0tBR0s7QUFLTCxNQUFNLE9BQU8sMkJBQTJCOzt3SEFBM0IsMkJBQTJCO3lIQUEzQiwyQkFBMkIsWUFINUIsb0JBQW9CLEVBQUUsOEJBQThCLEVBQUUsOEJBQThCLGFBQ3BGLDhCQUE4QixFQUFFLG9CQUFvQixFQUFFLDhCQUE4Qjt5SEFFbkYsMkJBQTJCLFlBSDVCLG9CQUFvQixFQUFFLDhCQUE4QixFQUNwQixvQkFBb0I7MkZBRW5ELDJCQUEyQjtrQkFKdkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSw4QkFBOEIsRUFBRSw4QkFBOEIsQ0FBQztvQkFDL0YsT0FBTyxFQUFFLENBQUMsOEJBQThCLEVBQUUsb0JBQW9CLEVBQUUsOEJBQThCLENBQUM7aUJBQ2hHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0TW9udGhDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWxheW91dC1tb250aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dE1vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1sYXlvdXQtbW9udGguZGlyZWN0aXZlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJpem1JbnB1dFRleHRNb2R1bGUsIFByaXptSW5wdXRMYXlvdXRNb250aENvbXBvbmVudCwgUHJpem1JbnB1dExheW91dE1vbnRoRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1ByaXptSW5wdXRMYXlvdXRNb250aENvbXBvbmVudCwgUHJpem1JbnB1dFRleHRNb2R1bGUsIFByaXptSW5wdXRMYXlvdXRNb250aERpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRMYXlvdXRNb250aE1vZHVsZSB7fVxuIl19