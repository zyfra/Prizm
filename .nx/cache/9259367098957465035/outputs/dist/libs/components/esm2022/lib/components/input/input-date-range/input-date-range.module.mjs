import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmInputDateRangeComponent } from './input-date-range.component';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmMaskModule } from '../../../modules';
import * as i0 from "@angular/core";
export class PrizmInputDateRangeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeModule, declarations: [PrizmInputDateRangeComponent], imports: [CommonModule,
            PrizmMaskModule,
            PrizmLetModule,
            PolymorphModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmDropdownHostModule,
            PrizmCalendarRangeModule,
            PrizmValueAccessorModule,
            FormsModule], exports: [PrizmInputDateRangeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeModule, imports: [CommonModule,
            PrizmMaskModule,
            PrizmLetModule,
            PolymorphModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmDropdownHostModule,
            PrizmCalendarRangeModule,
            PrizmValueAccessorModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmMaskModule,
                        PrizmLetModule,
                        PolymorphModule,
                        PrizmInputTextModule,
                        PrizmIconModule,
                        PrizmDropdownHostModule,
                        PrizmCalendarRangeModule,
                        PrizmValueAccessorModule,
                        FormsModule,
                    ],
                    declarations: [PrizmInputDateRangeComponent],
                    exports: [PrizmInputDateRangeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmFuZ2UvaW5wdXQtZGF0ZS1yYW5nZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFrQm5ELE1BQU0sT0FBTyx5QkFBeUI7OEdBQXpCLHlCQUF5QjsrR0FBekIseUJBQXlCLGlCQUhyQiw0QkFBNEIsYUFYekMsWUFBWTtZQUNaLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsV0FBVyxhQUdILDRCQUE0QjsrR0FFM0IseUJBQXlCLFlBZGxDLFlBQVk7WUFDWixlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLFdBQVc7OzJGQUtGLHlCQUF5QjtrQkFoQnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1MZXRNb2R1bGUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3BvbHltb3JwaC9wb2x5bW9ycGgubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXREYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWRhdGUtcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdmFsdWUtYWNjZXNzb3IvdmFsdWUtYWNjZXNzb3IubW9kdWxlJztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJSYW5nZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLXJhbmdlL2NhbGVuZGFyLXJhbmdlLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd25zL2Ryb3Bkb3duLWhvc3QvZHJvcGRvd24taG9zdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1NYXNrTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1NYXNrTW9kdWxlLFxuICAgIFByaXptTGV0TW9kdWxlLFxuICAgIFBvbHltb3JwaE1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUljb25Nb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhclJhbmdlTW9kdWxlLFxuICAgIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJpem1JbnB1dERhdGVSYW5nZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcml6bUlucHV0RGF0ZVJhbmdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVSYW5nZU1vZHVsZSB7fVxuIl19