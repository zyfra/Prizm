import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default';
import { PrizmCalendarMonthModule } from '../../calendar-month/calendar-month.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputMonthComponent } from './input-month.component';
import { PrizmInputMonthDirective } from './input-month.directive';
import { FormsModule } from '@angular/forms';
import { PrizmMaskModule } from '../../../modules/mask/mask.module';
import { PolymorphModule } from '../../../directives/polymorph';
import * as i0 from "@angular/core";
export class PrizmInputMonthModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthModule, declarations: [PrizmInputMonthComponent, PrizmInputMonthDirective], imports: [CommonModule,
            PrizmCalendarMonthModule,
            PrizmDropdownHostModule,
            PrizmPreventDefaultModule,
            FormsModule,
            PolymorphModule,
            PrizmMaskModule,
            PrizmInputTextModule,
            PrizmMapperPipeModule], exports: [PrizmInputMonthComponent, PrizmInputMonthDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthModule, imports: [CommonModule,
            PrizmCalendarMonthModule,
            PrizmDropdownHostModule,
            PrizmPreventDefaultModule,
            FormsModule,
            PolymorphModule,
            PrizmMaskModule,
            PrizmInputTextModule,
            PrizmMapperPipeModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmCalendarMonthModule,
                        PrizmDropdownHostModule,
                        PrizmPreventDefaultModule,
                        FormsModule,
                        PolymorphModule,
                        PrizmMaskModule,
                        PrizmInputTextModule,
                        PrizmMapperPipeModule,
                    ],
                    declarations: [PrizmInputMonthComponent, PrizmInputMonthDirective],
                    exports: [PrizmInputMonthComponent, PrizmInputMonthDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC9pbnB1dC1tb250aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBaUJoRSxNQUFNLE9BQU8scUJBQXFCOzhHQUFyQixxQkFBcUI7K0dBQXJCLHFCQUFxQixpQkFIakIsd0JBQXdCLEVBQUUsd0JBQXdCLGFBVi9ELFlBQVk7WUFDWix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIscUJBQXFCLGFBR2Isd0JBQXdCLEVBQUUsd0JBQXdCOytHQUVqRCxxQkFBcUIsWUFiOUIsWUFBWTtZQUNaLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLFdBQVc7WUFDWCxlQUFlO1lBQ2YsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixxQkFBcUI7OzJGQUtaLHFCQUFxQjtrQkFmakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6QixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO2lCQUM5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcHJldmVudC1kZWZhdWx0JztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJNb250aE1vZHVsZSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoL2NhbGVuZGFyLW1vbnRoLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7IFByaXptTWFwcGVyUGlwZU1vZHVsZSB9IGZyb20gJy4uLy4uL3RhYmxlL3BpcGVzL21hcHBlci9tYXBwZXIubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TW9udGhDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0TW9udGhEaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LW1vbnRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptTWFza01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvbWFzay9tYXNrLm1vZHVsZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3BvbHltb3JwaCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhck1vbnRoTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0TW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptTWFza01vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bU1hcHBlclBpcGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptSW5wdXRNb250aENvbXBvbmVudCwgUHJpem1JbnB1dE1vbnRoRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1ByaXptSW5wdXRNb250aENvbXBvbmVudCwgUHJpem1JbnB1dE1vbnRoRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dE1vbnRoTW9kdWxlIHt9XG4iXX0=