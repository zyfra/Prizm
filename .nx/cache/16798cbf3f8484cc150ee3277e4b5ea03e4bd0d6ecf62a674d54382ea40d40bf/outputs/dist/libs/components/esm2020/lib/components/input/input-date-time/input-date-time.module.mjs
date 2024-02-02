import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmLinkModule } from '../../link/link.module';
import { PrizmInputDateTimeComponent } from './input-date-time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmDataListModule } from '../../data-list';
import { PrizmLifecycleModule } from '../../../directives';
import * as i0 from "@angular/core";
export class PrizmInputDateTimeModule {
}
PrizmInputDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeModule, declarations: [PrizmInputDateTimeComponent], imports: [CommonModule,
        ReactiveFormsModule,
        PrizmMaskModule,
        PrizmDataListModule,
        PolymorphModule,
        PrizmInputTextModule,
        PrizmIconModule,
        FormsModule,
        PrizmLifecycleModule,
        PrizmPreventDefaultModule,
        PrizmCalendarModule,
        PrizmLinkModule,
        PrizmDropdownHostModule,
        PrizmValueAccessorModule], exports: [PrizmInputDateTimeComponent] });
PrizmInputDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeModule, imports: [CommonModule,
        ReactiveFormsModule,
        PrizmMaskModule,
        PrizmDataListModule,
        PolymorphModule,
        PrizmInputTextModule,
        PrizmIconModule,
        FormsModule,
        PrizmLifecycleModule,
        PrizmPreventDefaultModule,
        PrizmCalendarModule,
        PrizmLinkModule,
        PrizmDropdownHostModule,
        PrizmValueAccessorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        PrizmMaskModule,
                        PrizmDataListModule,
                        PolymorphModule,
                        PrizmInputTextModule,
                        PrizmIconModule,
                        FormsModule,
                        PrizmLifecycleModule,
                        PrizmPreventDefaultModule,
                        PrizmCalendarModule,
                        PrizmLinkModule,
                        PrizmDropdownHostModule,
                        PrizmValueAccessorModule,
                    ],
                    declarations: [PrizmInputDateTimeComponent],
                    exports: [PrizmInputDateTimeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lL2lucHV0LWRhdGUtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFzQjNELE1BQU0sT0FBTyx3QkFBd0I7O3FIQUF4Qix3QkFBd0I7c0hBQXhCLHdCQUF3QixpQkFIcEIsMkJBQTJCLGFBZnhDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2Qix3QkFBd0IsYUFHaEIsMkJBQTJCO3NIQUUxQix3QkFBd0IsWUFsQmpDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2Qix3QkFBd0I7MkZBS2Ysd0JBQXdCO2tCQXBCcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2Qix3QkFBd0I7cUJBQ3pCO29CQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvbHltb3JwaE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcG9seW1vcnBoL3BvbHltb3JwaC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcHJldmVudC1kZWZhdWx0L3ByZXZlbnQtZGVmYXVsdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy92YWx1ZS1hY2Nlc3Nvci92YWx1ZS1hY2Nlc3Nvci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1DYWxlbmRhck1vZHVsZSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QubW9kdWxlJztcbmltcG9ydCB7IFByaXptTGlua01vZHVsZSB9IGZyb20gJy4uLy4uL2xpbmsvbGluay5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1kYXRlLXRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10ZXh0L2lucHV0LXRleHQubW9kdWxlJztcbmltcG9ydCB7IFByaXptSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1NYXNrTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5pbXBvcnQgeyBQcml6bURhdGFMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YS1saXN0JztcbmltcG9ydCB7IFByaXptTGlmZWN5Y2xlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUHJpem1EYXRhTGlzdE1vZHVsZSxcbiAgICBQb2x5bW9ycGhNb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgUHJpem1JY29uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhck1vZHVsZSxcbiAgICBQcml6bUxpbmtNb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUsXG4gICAgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcml6bUlucHV0RGF0ZVRpbWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJpem1JbnB1dERhdGVUaW1lQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVUaW1lTW9kdWxlIHt9XG4iXX0=