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
}
PrizmConfirmPopupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmConfirmPopupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupModule, declarations: [PrizmConfirmPopupDirective, PrizmConfirmPopupContainerComponent], imports: [CommonModule,
        PolymorphOutletDirective,
        PrizmToObservablePipe,
        PrizmFocusTrapModule,
        PrizmHintDirective,
        PrizmScrollbarModule,
        PrizmButtonComponent,
        PrizmIconComponent], exports: [PrizmConfirmPopupDirective] });
PrizmConfirmPopupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupModule, imports: [CommonModule,
        PrizmFocusTrapModule,
        PrizmScrollbarModule,
        PrizmButtonComponent,
        PrizmIconComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wb3B1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2NvbmZpcm0tcG9wdXAvY29uZmlybS1wb3B1cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBZ0IxRCxNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBSG5CLDBCQUEwQixFQUFFLG1DQUFtQyxhQVQ1RSxZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsa0JBQWtCLGFBR1YsMEJBQTBCO3FIQUV6Qix1QkFBdUIsWUFaaEMsWUFBWTtRQUdaLG9CQUFvQjtRQUVwQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjsyRkFLVCx1QkFBdUI7a0JBZG5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxtQ0FBbUMsQ0FBQztvQkFDL0UsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi9wb2x5bW9ycGgnO1xuaW1wb3J0IHsgUHJpem1Db25maXJtUG9wdXBEaXJlY3RpdmUgfSBmcm9tICcuL2NvbmZpcm0tcG9wdXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptSGludERpcmVjdGl2ZSB9IGZyb20gJy4uL2hpbnQnO1xuaW1wb3J0IHsgUHJpem1Db25maXJtUG9wdXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcG9wdXAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ljb24nO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxiYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Njcm9sbGJhcic7XG5pbXBvcnQgeyBQcml6bUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IFByaXptRm9jdXNUcmFwTW9kdWxlIH0gZnJvbSAnLi4vZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyBQcml6bVRvT2JzZXJ2YWJsZVBpcGUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICAgIFByaXptVG9PYnNlcnZhYmxlUGlwZSxcbiAgICBQcml6bUZvY3VzVHJhcE1vZHVsZSxcbiAgICBQcml6bUhpbnREaXJlY3RpdmUsXG4gICAgUHJpem1TY3JvbGxiYXJNb2R1bGUsXG4gICAgUHJpem1CdXR0b25Db21wb25lbnQsXG4gICAgUHJpem1JY29uQ29tcG9uZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcml6bUNvbmZpcm1Qb3B1cERpcmVjdGl2ZSwgUHJpem1Db25maXJtUG9wdXBDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJpem1Db25maXJtUG9wdXBEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNvbmZpcm1Qb3B1cE1vZHVsZSB7fVxuIl19