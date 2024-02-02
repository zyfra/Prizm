import { NgModule } from '@angular/core';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownZoneModule } from '../../../directives/event-zone';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmDropdownHostModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostModule, imports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent], exports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent, PrizmDropdownZoneModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostModule, imports: [PrizmDropdownHostComponent, PrizmDropdownZoneModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownHostModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent],
                    exports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent, PrizmDropdownZoneModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taG9zdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXpFOzs7S0FHSztBQUtMLE1BQU0sT0FBTyx1QkFBdUI7OEdBQXZCLHVCQUF1QjsrR0FBdkIsdUJBQXVCLFlBSHhCLGlDQUFpQyxFQUFFLDBCQUEwQixhQUM3RCxpQ0FBaUMsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUI7K0dBRXJGLHVCQUF1QixZQUhXLDBCQUEwQixFQUNFLHVCQUF1Qjs7MkZBRXJGLHVCQUF1QjtrQkFKbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSwwQkFBMEIsQ0FBQztvQkFDeEUsT0FBTyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2xHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0Q29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24taG9zdC1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24taG9zdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93blpvbmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2V2ZW50LXpvbmUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugc3RhbmRhbG9uZVxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtQcml6bURyb3Bkb3duSG9zdENvbnRyb2xEaXJlY3RpdmUsIFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1ByaXptRHJvcGRvd25Ib3N0Q29udHJvbERpcmVjdGl2ZSwgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQsIFByaXptRHJvcGRvd25ab25lTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUge31cbiJdfQ==