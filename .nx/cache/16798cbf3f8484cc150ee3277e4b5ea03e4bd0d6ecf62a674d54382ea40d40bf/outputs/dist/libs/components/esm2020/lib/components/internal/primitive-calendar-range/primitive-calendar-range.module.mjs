import { NgModule } from '@angular/core';
import { PrizmMapperPipeModule } from '../../../pipes/mapper/mapper.module';
// import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmScrollbarModule } from '../../scrollbar/scrollbar.module';
import { PrizmPrimitiveCalendarRangeComponent } from './primitive-calendar-range.component';
import { CommonModule } from '@angular/common';
import { PrizmCalendarComponent } from '../../calendar/calendar.component';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export class PrizmPrimitiveCalendarRangeModule {
}
PrizmPrimitiveCalendarRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveCalendarRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmPrimitiveCalendarRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveCalendarRangeModule, declarations: [PrizmPrimitiveCalendarRangeComponent], imports: [PrizmMapperPipeModule, CommonModule, PrizmScrollbarModule, PrizmCalendarComponent], exports: [PrizmPrimitiveCalendarRangeComponent] });
PrizmPrimitiveCalendarRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveCalendarRangeModule, imports: [PrizmMapperPipeModule, CommonModule, PrizmScrollbarModule, PrizmCalendarComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveCalendarRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmMapperPipeModule, CommonModule, PrizmScrollbarModule, PrizmCalendarComponent],
                    declarations: [PrizmPrimitiveCalendarRangeComponent],
                    exports: [PrizmPrimitiveCalendarRangeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLWNhbGVuZGFyLXJhbmdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW50ZXJuYWwvcHJpbWl0aXZlLWNhbGVuZGFyLXJhbmdlL3ByaW1pdGl2ZS1jYWxlbmRhci1yYW5nZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSx3RUFBd0U7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUUzRTs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQ0FBaUM7OzhIQUFqQyxpQ0FBaUM7K0hBQWpDLGlDQUFpQyxpQkFIN0Isb0NBQW9DLGFBRHpDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsYUFFakYsb0NBQW9DOytIQUVuQyxpQ0FBaUMsWUFKbEMscUJBQXFCLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjsyRkFJaEYsaUNBQWlDO2tCQUw3QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDNUYsWUFBWSxFQUFFLENBQUMsb0NBQW9DLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bU1hcHBlclBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9tYXBwZXIvbWFwcGVyLm1vZHVsZSc7XG4vLyBpbXBvcnQgeyBQcml6bUNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2Nyb2xsYmFyL3Njcm9sbGJhci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1QcmltaXRpdmVDYWxlbmRhclJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcmltaXRpdmUtY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1ByaXptTWFwcGVyUGlwZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBQcml6bVNjcm9sbGJhck1vZHVsZSwgUHJpem1DYWxlbmRhckNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptUHJpbWl0aXZlQ2FsZW5kYXJSYW5nZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcml6bVByaW1pdGl2ZUNhbGVuZGFyUmFuZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZUNhbGVuZGFyUmFuZ2VNb2R1bGUge31cbiJdfQ==