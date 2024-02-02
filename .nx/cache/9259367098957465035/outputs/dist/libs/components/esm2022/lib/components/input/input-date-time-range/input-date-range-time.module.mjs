import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmInputDateTimeRangeComponent } from './input-date-range-time.component';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputTimeModule } from '../input-time';
import { PrizmInputDateRangeModule } from '../input-date-range';
import { PrizmDropdownZoneModule } from '../../../directives';
import * as i0 from "@angular/core";
export class PrizmInputDateTimeRangeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeModule, declarations: [PrizmInputDateTimeRangeComponent], imports: [CommonModule,
            PrizmMaskModule,
            PrizmLetModule,
            PolymorphModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmInputDateRangeModule,
            PrizmDropdownHostModule,
            PrizmCalendarRangeModule,
            PrizmValueAccessorModule,
            FormsModule,
            PrizmInputTimeModule,
            PrizmDropdownZoneModule,
            ReactiveFormsModule], exports: [PrizmInputDateTimeRangeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeModule, imports: [CommonModule,
            PrizmMaskModule,
            PrizmLetModule,
            PolymorphModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmInputDateRangeModule,
            PrizmDropdownHostModule,
            PrizmCalendarRangeModule,
            PrizmValueAccessorModule,
            FormsModule,
            PrizmInputTimeModule,
            PrizmDropdownZoneModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmMaskModule,
                        PrizmLetModule,
                        PolymorphModule,
                        PrizmInputTextModule,
                        PrizmIconModule,
                        PrizmInputDateRangeModule,
                        PrizmDropdownHostModule,
                        PrizmCalendarRangeModule,
                        PrizmValueAccessorModule,
                        FormsModule,
                        PrizmInputTimeModule,
                        PrizmDropdownZoneModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [PrizmInputDateTimeRangeComponent],
                    exports: [PrizmInputDateTimeRangeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lLXJhbmdlL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBc0I5RCxNQUFNLE9BQU8sNkJBQTZCOzhHQUE3Qiw2QkFBNkI7K0dBQTdCLDZCQUE2QixpQkFIekIsZ0NBQWdDLGFBZjdDLFlBQVk7WUFDWixlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixtQkFBbUIsYUFHWCxnQ0FBZ0M7K0dBRS9CLDZCQUE2QixZQWxCdEMsWUFBWTtZQUNaLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjs7MkZBS1YsNkJBQTZCO2tCQXBCekMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUNoRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptTGV0TW9kdWxlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUG9seW1vcnBoTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9wb2x5bW9ycGgvcG9seW1vcnBoLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0RGF0ZVRpbWVSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZGF0ZS1yYW5nZS10aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVZhbHVlQWNjZXNzb3JNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3ZhbHVlLWFjY2Vzc29yL3ZhbHVlLWFjY2Vzc29yLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUNhbGVuZGFyUmFuZ2VNb2R1bGUgfSBmcm9tICcuLi8uLi9jYWxlbmRhci1yYW5nZS9jYWxlbmRhci1yYW5nZS5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXRleHQvaW5wdXQtdGV4dC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QubW9kdWxlJztcbmltcG9ydCB7IFByaXptTWFza01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRpbWVNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10aW1lJztcbmltcG9ydCB7IFByaXptSW5wdXREYXRlUmFuZ2VNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC1kYXRlLXJhbmdlJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25ab25lTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1NYXNrTW9kdWxlLFxuICAgIFByaXptTGV0TW9kdWxlLFxuICAgIFBvbHltb3JwaE1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUljb25Nb2R1bGUsXG4gICAgUHJpem1JbnB1dERhdGVSYW5nZU1vZHVsZSxcbiAgICBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSxcbiAgICBQcml6bUNhbGVuZGFyUmFuZ2VNb2R1bGUsXG4gICAgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptSW5wdXRUaW1lTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25ab25lTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptSW5wdXREYXRlVGltZVJhbmdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1ByaXptSW5wdXREYXRlVGltZVJhbmdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVUaW1lUmFuZ2VNb2R1bGUge31cbiJdfQ==