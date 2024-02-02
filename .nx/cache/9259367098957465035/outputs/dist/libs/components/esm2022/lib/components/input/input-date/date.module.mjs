import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmInputDateComponent } from './date.component';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmLinkModule } from '../../link/link.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { FormsModule } from '@angular/forms';
import { PrizmMaskModule } from '../../../modules';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use PrizmInputLayoutDateModule
 * */
export class PrizmInputDateModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateModule, declarations: [PrizmInputDateComponent], imports: [CommonModule,
            PrizmMaskModule,
            PolymorphModule,
            PrizmPreventDefaultModule,
            PrizmCalendarModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmLinkModule,
            FormsModule,
            PrizmDropdownHostModule,
            PrizmValueAccessorModule,
            PrizmLetModule], exports: [PrizmInputDateComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateModule, imports: [CommonModule,
            PrizmMaskModule,
            PolymorphModule,
            PrizmPreventDefaultModule,
            PrizmCalendarModule,
            PrizmInputTextModule,
            PrizmIconModule,
            PrizmLinkModule,
            FormsModule,
            PrizmDropdownHostModule,
            PrizmValueAccessorModule,
            PrizmLetModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmMaskModule,
                        PolymorphModule,
                        PrizmPreventDefaultModule,
                        PrizmCalendarModule,
                        PrizmInputTextModule,
                        PrizmIconModule,
                        PrizmLinkModule,
                        FormsModule,
                        PrizmDropdownHostModule,
                        PrizmValueAccessorModule,
                        PrizmLetModule,
                    ],
                    declarations: [PrizmInputDateComponent],
                    exports: [PrizmInputDateComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUvZGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRW5EOzs7S0FHSztBQW1CTCxNQUFNLE9BQU8sb0JBQW9COzhHQUFwQixvQkFBb0I7K0dBQXBCLG9CQUFvQixpQkFIaEIsdUJBQXVCLGFBYnBDLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixlQUFlO1lBQ2YsV0FBVztZQUNYLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsY0FBYyxhQUdOLHVCQUF1QjsrR0FFdEIsb0JBQW9CLFlBaEI3QixZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsZUFBZTtZQUNmLFdBQVc7WUFDWCx1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLGNBQWM7OzJGQUtMLG9CQUFvQjtrQkFsQmhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3dCQUN4QixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXREYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3BvbHltb3JwaC9wb2x5bW9ycGgubW9kdWxlJztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1MaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGluay9saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7IFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdmFsdWUtYWNjZXNzb3IvdmFsdWUtYWNjZXNzb3IubW9kdWxlJztcbmltcG9ydCB7IFByaXptUHJldmVudERlZmF1bHRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3ByZXZlbnQtZGVmYXVsdC9wcmV2ZW50LWRlZmF1bHQubW9kdWxlJztcbmltcG9ydCB7IFByaXptTGV0TW9kdWxlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10ZXh0L2lucHV0LXRleHQubW9kdWxlJztcbmltcG9ydCB7IFByaXptSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bU1hc2tNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRMYXlvdXREYXRlTW9kdWxlXG4gKiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhck1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUljb25Nb2R1bGUsXG4gICAgUHJpem1MaW5rTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0TW9kdWxlLFxuICAgIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbiAgICBQcml6bUxldE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJpem1JbnB1dERhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJpem1JbnB1dERhdGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0RGF0ZU1vZHVsZSB7fVxuIl19