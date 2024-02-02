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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectModule, imports: [PrizmSelectInputComponent,
            PrizmSelectInputItemComponent,
            PrizmInputSelectDataListDirective,
            PrizmInputTextModule], exports: [PrizmSelectInputComponent,
            PrizmSelectInputItemComponent,
            PrizmInputSelectDataListDirective,
            PrizmInputTextModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectModule, imports: [PrizmSelectInputComponent,
            PrizmInputTextModule, PrizmInputTextModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputSelectModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL3NlbGVjdC9pbnB1dC1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRXZGOzs7S0FHSztBQWVMLE1BQU0sT0FBTyxzQkFBc0I7OEdBQXRCLHNCQUFzQjsrR0FBdEIsc0JBQXNCLFlBWi9CLHlCQUF5QjtZQUN6Qiw2QkFBNkI7WUFDN0IsaUNBQWlDO1lBQ2pDLG9CQUFvQixhQUdwQix5QkFBeUI7WUFDekIsNkJBQTZCO1lBQzdCLGlDQUFpQztZQUNqQyxvQkFBb0I7K0dBR1gsc0JBQXNCLFlBWi9CLHlCQUF5QjtZQUd6QixvQkFBb0IsRUFNcEIsb0JBQW9COzsyRkFHWCxzQkFBc0I7a0JBZGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixpQ0FBaUM7d0JBQ2pDLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixpQ0FBaUM7d0JBQ2pDLG9CQUFvQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi8uLi9pbnB1dC9pbnB1dC10ZXh0L2lucHV0LXRleHQubW9kdWxlJztcbmltcG9ydCB7IFByaXptU2VsZWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TZWxlY3RJbnB1dEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2lucHV0LXNlbGVjdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2VsZWN0RGF0YUxpc3REaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LXNlbGVjdC1kYXRhLWxpc3QuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmUgZGlyZWN0aXZlc1xuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcml6bVNlbGVjdElucHV0Q29tcG9uZW50LFxuICAgIFByaXptU2VsZWN0SW5wdXRJdGVtQ29tcG9uZW50LFxuICAgIFByaXptSW5wdXRTZWxlY3REYXRhTGlzdERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByaXptU2VsZWN0SW5wdXRDb21wb25lbnQsXG4gICAgUHJpem1TZWxlY3RJbnB1dEl0ZW1Db21wb25lbnQsXG4gICAgUHJpem1JbnB1dFNlbGVjdERhdGFMaXN0RGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0U2VsZWN0TW9kdWxlIHt9XG4iXX0=