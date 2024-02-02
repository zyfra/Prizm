import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmFocusableModule, PrizmFocusedModule, PrizmFocusVisibleModule, PrizmPreventDefaultModule, } from '../../../directives';
import { PrizmButtonModule } from '../../button/button.module';
import { PrizmPrimitiveSpinButtonComponent } from './primitive-spin-button.component';
import * as i0 from "@angular/core";
export class PrizmPrimitiveSpinButtonModule {
}
PrizmPrimitiveSpinButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmPrimitiveSpinButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonModule, declarations: [PrizmPrimitiveSpinButtonComponent], imports: [CommonModule,
        PrizmFocusVisibleModule,
        PrizmFocusedModule,
        PrizmFocusableModule,
        PrizmPreventDefaultModule,
        PrizmButtonModule], exports: [PrizmPrimitiveSpinButtonComponent] });
PrizmPrimitiveSpinButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonModule, imports: [CommonModule,
        PrizmFocusVisibleModule,
        PrizmFocusedModule,
        PrizmFocusableModule,
        PrizmPreventDefaultModule,
        PrizmButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveSpinButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmFocusVisibleModule,
                        PrizmFocusedModule,
                        PrizmFocusableModule,
                        PrizmPreventDefaultModule,
                        PrizmButtonModule,
                    ],
                    declarations: [PrizmPrimitiveSpinButtonComponent],
                    exports: [PrizmPrimitiveSpinButtonComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXNwaW4tYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW50ZXJuYWwvcHJpbWl0aXZlLXNwaW4tYnV0dG9uL3ByaW1pdGl2ZS1zcGluLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixHQUMxQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWN0RixNQUFNLE9BQU8sOEJBQThCOzsySEFBOUIsOEJBQThCOzRIQUE5Qiw4QkFBOEIsaUJBSDFCLGlDQUFpQyxhQVA5QyxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLGlCQUFpQixhQUdULGlDQUFpQzs0SEFFaEMsOEJBQThCLFlBVnZDLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsaUJBQWlCOzJGQUtSLDhCQUE4QjtrQkFaMUMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQix5QkFBeUI7d0JBQ3pCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJpem1Gb2N1c2FibGVNb2R1bGUsXG4gIFByaXptRm9jdXNlZE1vZHVsZSxcbiAgUHJpem1Gb2N1c1Zpc2libGVNb2R1bGUsXG4gIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IFByaXptUHJpbWl0aXZlU3BpbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vcHJpbWl0aXZlLXNwaW4tYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1Gb2N1c1Zpc2libGVNb2R1bGUsXG4gICAgUHJpem1Gb2N1c2VkTW9kdWxlLFxuICAgIFByaXptRm9jdXNhYmxlTW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1CdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptUHJpbWl0aXZlU3BpbkJ1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcml6bVByaW1pdGl2ZVNwaW5CdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZVNwaW5CdXR0b25Nb2R1bGUge31cbiJdfQ==