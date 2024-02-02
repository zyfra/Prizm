import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { PrizmInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { PrizmInputNumberComponent } from './input-number.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * */
export class PrizmInputNumberModule {
}
PrizmInputNumberModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputNumberModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberModule, imports: [PrizmInputNumberComponent,
        PrizmInputNumberAuxiliaryControlDirective,
        PrizmInputNumberDefaultControlsComponent], exports: [PrizmInputNumberAuxiliaryControlDirective,
        PrizmInputCommonModule,
        PrizmInputNumberComponent,
        PrizmInputNumberDefaultControlsComponent] });
PrizmInputNumberModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberModule, imports: [PrizmInputNumberComponent,
        PrizmInputNumberDefaultControlsComponent, PrizmInputCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmInputNumberComponent,
                        PrizmInputNumberAuxiliaryControlDirective,
                        PrizmInputNumberDefaultControlsComponent,
                    ],
                    exports: [
                        PrizmInputNumberAuxiliaryControlDirective,
                        PrizmInputCommonModule,
                        PrizmInputNumberComponent,
                        PrizmInputNumberDefaultControlsComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFckU7O0tBRUs7QUFjTCxNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsWUFYL0IseUJBQXlCO1FBQ3pCLHlDQUF5QztRQUN6Qyx3Q0FBd0MsYUFHeEMseUNBQXlDO1FBQ3pDLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsd0NBQXdDO29IQUcvQixzQkFBc0IsWUFYL0IseUJBQXlCO1FBRXpCLHdDQUF3QyxFQUl4QyxzQkFBc0I7MkZBS2Isc0JBQXNCO2tCQWJsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLHlDQUF5Qzt3QkFDekMsd0NBQXdDO3FCQUN6QztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AseUNBQXlDO3dCQUN6QyxzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsd0NBQXdDO3FCQUN6QztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2lucHV0LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dE51bWJlckF1eGlsaWFyeUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LW51bWJlci1hdXhpbGlhcnktY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dE51bWJlckRlZmF1bHRDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtbnVtYmVyLWF1eGlsaWFyeS1jb250cm9scy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtbnVtYmVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1JbnB1dE51bWJlckNvbXBvbmVudCxcbiAgICBQcml6bUlucHV0TnVtYmVyQXV4aWxpYXJ5Q29udHJvbERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0TnVtYmVyRGVmYXVsdENvbnRyb2xzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJpem1JbnB1dE51bWJlckF1eGlsaWFyeUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50LFxuICAgIFByaXptSW5wdXROdW1iZXJEZWZhdWx0Q29udHJvbHNDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXROdW1iZXJNb2R1bGUge31cbiJdfQ==