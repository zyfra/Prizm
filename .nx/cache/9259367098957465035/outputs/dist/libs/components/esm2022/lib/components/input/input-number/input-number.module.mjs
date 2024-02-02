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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberModule, imports: [PrizmInputNumberComponent,
            PrizmInputNumberAuxiliaryControlDirective,
            PrizmInputNumberDefaultControlsComponent], exports: [PrizmInputNumberAuxiliaryControlDirective,
            PrizmInputCommonModule,
            PrizmInputNumberComponent,
            PrizmInputNumberDefaultControlsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberModule, imports: [PrizmInputNumberDefaultControlsComponent, PrizmInputCommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNumberModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFckU7O0tBRUs7QUFjTCxNQUFNLE9BQU8sc0JBQXNCOzhHQUF0QixzQkFBc0I7K0dBQXRCLHNCQUFzQixZQVgvQix5QkFBeUI7WUFDekIseUNBQXlDO1lBQ3pDLHdDQUF3QyxhQUd4Qyx5Q0FBeUM7WUFDekMsc0JBQXNCO1lBQ3RCLHlCQUF5QjtZQUN6Qix3Q0FBd0M7K0dBRy9CLHNCQUFzQixZQVQvQix3Q0FBd0MsRUFJeEMsc0JBQXNCOzsyRkFLYixzQkFBc0I7a0JBYmxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIseUNBQXlDO3dCQUN6Qyx3Q0FBd0M7cUJBQ3pDO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5Q0FBeUM7d0JBQ3pDLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qix3Q0FBd0M7cUJBQ3pDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vaW5wdXQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TnVtYmVyQXV4aWxpYXJ5Q29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtbnVtYmVyLWF1eGlsaWFyeS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TnVtYmVyRGVmYXVsdENvbnRyb2xzQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1udW1iZXItYXV4aWxpYXJ5LWNvbnRyb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1udW1iZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcml6bUlucHV0TnVtYmVyQ29tcG9uZW50LFxuICAgIFByaXptSW5wdXROdW1iZXJBdXhpbGlhcnlDb250cm9sRGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXROdW1iZXJEZWZhdWx0Q29udHJvbHNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcml6bUlucHV0TnVtYmVyQXV4aWxpYXJ5Q29udHJvbERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0Q29tbW9uTW9kdWxlLFxuICAgIFByaXptSW5wdXROdW1iZXJDb21wb25lbnQsXG4gICAgUHJpem1JbnB1dE51bWJlckRlZmF1bHRDb250cm9sc0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dE51bWJlck1vZHVsZSB7fVxuIl19