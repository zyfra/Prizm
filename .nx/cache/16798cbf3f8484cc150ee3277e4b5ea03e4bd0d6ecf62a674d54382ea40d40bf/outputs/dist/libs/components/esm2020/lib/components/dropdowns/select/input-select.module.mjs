import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmSelectInputComponent } from './input-select.component';
import { PrizmSelectInputItemComponent } from './input-select-item.component';
import { PrizmInputSelectDataListDirective } from './input-select-data-list.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone directives
 * */
export class PrizmInputSelectModule {
}
PrizmInputSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectModule, imports: [PrizmSelectInputComponent,
        PrizmSelectInputItemComponent,
        PrizmInputSelectDataListDirective,
        PrizmInputTextModule], exports: [PrizmSelectInputComponent,
        PrizmSelectInputItemComponent,
        PrizmInputSelectDataListDirective,
        PrizmInputTextModule] });
PrizmInputSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectModule, imports: [PrizmSelectInputComponent,
        PrizmSelectInputItemComponent,
        PrizmInputTextModule, PrizmInputTextModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmSelectInputComponent,
                        PrizmSelectInputItemComponent,
                        PrizmInputSelectDataListDirective,
                        PrizmInputTextModule,
                    ],
                    exports: [
                        PrizmSelectInputComponent,
                        PrizmSelectInputItemComponent,
                        PrizmInputSelectDataListDirective,
                        PrizmInputTextModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL3NlbGVjdC9pbnB1dC1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRXZGOzs7S0FHSztBQWVMLE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixZQVovQix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyxvQkFBb0IsYUFHcEIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMsb0JBQW9CO29IQUdYLHNCQUFzQixZQVovQix5QkFBeUI7UUFDekIsNkJBQTZCO1FBRTdCLG9CQUFvQixFQU1wQixvQkFBb0I7MkZBR1gsc0JBQXNCO2tCQWRsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0IsaUNBQWlDO3dCQUNqQyxvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0IsaUNBQWlDO3dCQUNqQyxvQkFBb0I7cUJBQ3JCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vLi4vaW5wdXQvaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bVNlbGVjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU2VsZWN0SW5wdXRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNlbGVjdERhdGFMaXN0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1zZWxlY3QtZGF0YS1saXN0LmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBzdGFuZGFsb25lIGRpcmVjdGl2ZXNcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1TZWxlY3RJbnB1dENvbXBvbmVudCxcbiAgICBQcml6bVNlbGVjdElucHV0SXRlbUNvbXBvbmVudCxcbiAgICBQcml6bUlucHV0U2VsZWN0RGF0YUxpc3REaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcml6bVNlbGVjdElucHV0Q29tcG9uZW50LFxuICAgIFByaXptU2VsZWN0SW5wdXRJdGVtQ29tcG9uZW50LFxuICAgIFByaXptSW5wdXRTZWxlY3REYXRhTGlzdERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFNlbGVjdE1vZHVsZSB7fVxuIl19