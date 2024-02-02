import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCalendarMonthComponent } from '../../calendar-month';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { PrizmInputMonthRangeDirective } from './input-month-range.directive';
import { FormsModule } from '@angular/forms';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import * as i0 from "@angular/core";
export class PrizmInputMonthRangeModule {
}
PrizmInputMonthRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputMonthRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthRangeModule, declarations: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective], imports: [CommonModule,
        PrizmCalendarMonthComponent,
        PrizmDropdownHostComponent,
        PrizmPreventDefaultModule,
        PrizmMapperPipeModule,
        PrizmInputTextModule,
        FormsModule], exports: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective] });
PrizmInputMonthRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthRangeModule, imports: [CommonModule,
        PrizmCalendarMonthComponent,
        PrizmDropdownHostComponent,
        PrizmPreventDefaultModule,
        PrizmMapperPipeModule,
        PrizmInputTextModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputMonthRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmCalendarMonthComponent,
                        PrizmDropdownHostComponent,
                        PrizmPreventDefaultModule,
                        PrizmMapperPipeModule,
                        PrizmInputTextModule,
                        FormsModule,
                    ],
                    declarations: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective],
                    exports: [PrizmInputMonthRangeComponent, PrizmInputMonthRangeDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgtcmFuZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC1yYW5nZS9pbnB1dC1tb250aC1yYW5nZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWV2RSxNQUFNLE9BQU8sMEJBQTBCOzt1SEFBMUIsMEJBQTBCO3dIQUExQiwwQkFBMEIsaUJBSHRCLDZCQUE2QixFQUFFLDZCQUE2QixhQVJ6RSxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixXQUFXLGFBR0gsNkJBQTZCLEVBQUUsNkJBQTZCO3dIQUUzRCwwQkFBMEIsWUFYbkMsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsV0FBVzsyRkFLRiwwQkFBMEI7a0JBYnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osMkJBQTJCO3dCQUMzQiwwQkFBMEI7d0JBQzFCLHlCQUF5Qjt3QkFDekIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLENBQUMsNkJBQTZCLEVBQUUsNkJBQTZCLENBQUM7b0JBQzVFLE9BQU8sRUFBRSxDQUFDLDZCQUE2QixFQUFFLDZCQUE2QixDQUFDO2lCQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1DYWxlbmRhck1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgnO1xuaW1wb3J0IHsgUHJpem1NYXBwZXJQaXBlTW9kdWxlIH0gZnJvbSAnLi4vLi4vdGFibGUvcGlwZXMvbWFwcGVyL21hcHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dE1vbnRoUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW1vbnRoLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0TW9udGhSYW5nZURpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtbW9udGgtcmFuZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdCc7XG5pbXBvcnQgeyBQcml6bVByZXZlbnREZWZhdWx0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9wcmV2ZW50LWRlZmF1bHQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10ZXh0L2lucHV0LXRleHQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUNhbGVuZGFyTW9udGhDb21wb25lbnQsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQsXG4gICAgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSxcbiAgICBQcml6bU1hcHBlclBpcGVNb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50LCBQcml6bUlucHV0TW9udGhSYW5nZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtQcml6bUlucHV0TW9udGhSYW5nZUNvbXBvbmVudCwgUHJpem1JbnB1dE1vbnRoUmFuZ2VEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TW9udGhSYW5nZU1vZHVsZSB7fVxuIl19