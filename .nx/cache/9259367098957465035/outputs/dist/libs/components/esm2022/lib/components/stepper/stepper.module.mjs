import { NgModule } from '@angular/core';
import { PrizmStepperComponent } from './stepper.component';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmStepperSelectorItemDirective } from './stepper-selector-item.directive';
import { PrizmStepperSelectorComponent } from './stepper-selector.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmStepperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperModule, imports: [PrizmStepperComponent,
            PrizmStepperStepDirective,
            PrizmStepperSelectorComponent,
            PrizmStepperSelectorItemDirective], exports: [PrizmStepperComponent, PrizmStepperStepDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperModule, imports: [PrizmStepperComponent,
            PrizmStepperSelectorComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [PrizmStepperComponent, PrizmStepperStepDirective],
                    imports: [
                        PrizmStepperComponent,
                        PrizmStepperStepDirective,
                        PrizmStepperSelectorComponent,
                        PrizmStepperSelectorItemDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFN0U7OztLQUdLO0FBVUwsTUFBTSxPQUFPLGtCQUFrQjs4R0FBbEIsa0JBQWtCOytHQUFsQixrQkFBa0IsWUFOM0IscUJBQXFCO1lBQ3JCLHlCQUF5QjtZQUN6Qiw2QkFBNkI7WUFDN0IsaUNBQWlDLGFBTHpCLHFCQUFxQixFQUFFLHlCQUF5QjsrR0FRL0Msa0JBQWtCLFlBTjNCLHFCQUFxQjtZQUVyQiw2QkFBNkI7OzJGQUlwQixrQkFBa0I7a0JBVDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUM7b0JBQzNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixpQ0FBaUM7cUJBQ2xDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU3RlcHBlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TdGVwcGVyU3RlcERpcmVjdGl2ZSB9IGZyb20gJy4vc3RlcHBlci1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bVN0ZXBwZXJTZWxlY3Rvckl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL3N0ZXBwZXItc2VsZWN0b3ItaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1TdGVwcGVyU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXItc2VsZWN0b3IuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbUHJpem1TdGVwcGVyQ29tcG9uZW50LCBQcml6bVN0ZXBwZXJTdGVwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICAgIFByaXptU3RlcHBlckNvbXBvbmVudCxcbiAgICBQcml6bVN0ZXBwZXJTdGVwRGlyZWN0aXZlLFxuICAgIFByaXptU3RlcHBlclNlbGVjdG9yQ29tcG9uZW50LFxuICAgIFByaXptU3RlcHBlclNlbGVjdG9ySXRlbURpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TdGVwcGVyTW9kdWxlIHt9XG4iXX0=