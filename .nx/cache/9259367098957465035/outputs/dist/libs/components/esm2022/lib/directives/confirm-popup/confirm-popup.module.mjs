import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphOutletDirective } from '../polymorph';
import { PrizmConfirmPopupDirective } from './confirm-popup.directive';
import { PrizmHintDirective } from '../hint';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PrizmIconComponent } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmButtonComponent } from '../../components/button';
import { PrizmFocusTrapModule } from '../focus-trap';
import { PrizmToObservablePipe } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmConfirmPopupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupModule, declarations: [PrizmConfirmPopupDirective, PrizmConfirmPopupContainerComponent], imports: [CommonModule,
            PolymorphOutletDirective,
            PrizmToObservablePipe,
            PrizmFocusTrapModule,
            PrizmHintDirective,
            PrizmScrollbarModule,
            PrizmButtonComponent,
            PrizmIconComponent], exports: [PrizmConfirmPopupDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupModule, imports: [CommonModule,
            PrizmFocusTrapModule,
            PrizmScrollbarModule,
            PrizmButtonComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PolymorphOutletDirective,
                        PrizmToObservablePipe,
                        PrizmFocusTrapModule,
                        PrizmHintDirective,
                        PrizmScrollbarModule,
                        PrizmButtonComponent,
                        PrizmIconComponent,
                    ],
                    declarations: [PrizmConfirmPopupDirective, PrizmConfirmPopupContainerComponent],
                    exports: [PrizmConfirmPopupDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wb3B1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2NvbmZpcm0tcG9wdXAvY29uZmlybS1wb3B1cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBZ0IxRCxNQUFNLE9BQU8sdUJBQXVCOzhHQUF2Qix1QkFBdUI7K0dBQXZCLHVCQUF1QixpQkFIbkIsMEJBQTBCLEVBQUUsbUNBQW1DLGFBVDVFLFlBQVk7WUFDWix3QkFBd0I7WUFDeEIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixrQkFBa0IsYUFHViwwQkFBMEI7K0dBRXpCLHVCQUF1QixZQVpoQyxZQUFZO1lBR1osb0JBQW9CO1lBRXBCLG9CQUFvQjtZQUNwQixvQkFBb0I7OzJGQU1YLHVCQUF1QjtrQkFkbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7cUJBQ25CO29CQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLG1DQUFtQyxDQUFDO29CQUMvRSxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uL3BvbHltb3JwaCc7XG5pbXBvcnQgeyBQcml6bUNvbmZpcm1Qb3B1cERpcmVjdGl2ZSB9IGZyb20gJy4vY29uZmlybS1wb3B1cC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vaGludCc7XG5pbXBvcnQgeyBQcml6bUNvbmZpcm1Qb3B1cENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1wb3B1cC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWNvbic7XG5pbXBvcnQgeyBQcml6bVNjcm9sbGJhck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2Nyb2xsYmFyJztcbmltcG9ydCB7IFByaXptQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgUHJpem1Gb2N1c1RyYXBNb2R1bGUgfSBmcm9tICcuLi9mb2N1cy10cmFwJztcbmltcG9ydCB7IFByaXptVG9PYnNlcnZhYmxlUGlwZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUsXG4gICAgUHJpem1Ub09ic2VydmFibGVQaXBlLFxuICAgIFByaXptRm9jdXNUcmFwTW9kdWxlLFxuICAgIFByaXptSGludERpcmVjdGl2ZSxcbiAgICBQcml6bVNjcm9sbGJhck1vZHVsZSxcbiAgICBQcml6bUJ1dHRvbkNvbXBvbmVudCxcbiAgICBQcml6bUljb25Db21wb25lbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptQ29uZmlybVBvcHVwRGlyZWN0aXZlLCBQcml6bUNvbmZpcm1Qb3B1cENvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcml6bUNvbmZpcm1Qb3B1cERpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ29uZmlybVBvcHVwTW9kdWxlIHt9XG4iXX0=