import { NgModule } from '@angular/core';
import { PrizmCronComponent } from './cron.component';
import { PrizmCronMonthPipe } from './pipes/cron-month.pipe';
import { PrizmCronWeekPipe } from './pipes/cron-week.pipe';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronModule, imports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe], exports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronModule, imports: [PrizmCronComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe],
                    exports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24vY3Jvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFM0Q7OztLQUdLO0FBS0wsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTsrR0FBZixlQUFlLFlBSGhCLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixhQUN6RCxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7K0dBRXhELGVBQWUsWUFIaEIsa0JBQWtCOzsyRkFHakIsZUFBZTtrQkFKM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztvQkFDcEUsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7aUJBQ3JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptQ3JvbkNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1Dcm9uTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlcy9jcm9uLW1vbnRoLnBpcGUnO1xuaW1wb3J0IHsgUHJpem1Dcm9uV2Vla1BpcGUgfSBmcm9tICcuL3BpcGVzL2Nyb24td2Vlay5waXBlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJpem1Dcm9uQ29tcG9uZW50LCBQcml6bUNyb25Nb250aFBpcGUsIFByaXptQ3JvbldlZWtQaXBlXSxcbiAgZXhwb3J0czogW1ByaXptQ3JvbkNvbXBvbmVudCwgUHJpem1Dcm9uTW9udGhQaXBlLCBQcml6bUNyb25XZWVrUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ3Jvbk1vZHVsZSB7fVxuIl19