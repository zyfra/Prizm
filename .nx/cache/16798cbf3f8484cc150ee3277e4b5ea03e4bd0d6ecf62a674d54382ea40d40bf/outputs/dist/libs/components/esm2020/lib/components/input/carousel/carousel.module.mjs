import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmCarouselComponent } from './carousel.component';
import { PrizmCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { PrizmCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use - PrizmInputCarouselModule
 * */
export class PrizmCarouselModule {
}
PrizmCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselModule, declarations: [PrizmCarouselComponent,
        PrizmCarouselAuxiliaryLeftComponent,
        PrizmCarouselAuxiliaryRightComponent], imports: [PrizmInputCommonModule], exports: [PrizmCarouselComponent,
        PrizmInputCommonModule,
        PrizmCarouselAuxiliaryLeftComponent,
        PrizmCarouselAuxiliaryRightComponent] });
PrizmCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselModule, imports: [PrizmInputCommonModule, PrizmInputCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmInputCommonModule],
                    declarations: [
                        PrizmCarouselComponent,
                        PrizmCarouselAuxiliaryLeftComponent,
                        PrizmCarouselAuxiliaryRightComponent,
                    ],
                    exports: [
                        PrizmCarouselComponent,
                        PrizmInputCommonModule,
                        PrizmCarouselAuxiliaryLeftComponent,
                        PrizmCarouselAuxiliaryRightComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFNUY7OztLQUdLO0FBZUwsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQVg1QixzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLG9DQUFvQyxhQUo1QixzQkFBc0IsYUFPOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsb0NBQW9DO2lIQUczQixtQkFBbUIsWUFicEIsc0JBQXNCLEVBUTlCLHNCQUFzQjsyRkFLYixtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7d0JBQ3RCLG1DQUFtQzt3QkFDbkMsb0NBQW9DO3FCQUNyQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLG1DQUFtQzt3QkFDbkMsb0NBQW9DO3FCQUNyQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vaW5wdXQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1DYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWF1eGlsaWFyeS1sZWZ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUNhcm91c2VsQXV4aWxpYXJ5UmlnaHRDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWF1eGlsaWFyeS1yaWdodC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2UgLSBQcml6bUlucHV0Q2Fyb3VzZWxNb2R1bGVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJpem1JbnB1dENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByaXptQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgUHJpem1DYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnQsXG4gICAgUHJpem1DYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJpem1DYXJvdXNlbENvbXBvbmVudCxcbiAgICBQcml6bUlucHV0Q29tbW9uTW9kdWxlLFxuICAgIFByaXptQ2Fyb3VzZWxBdXhpbGlhcnlMZWZ0Q29tcG9uZW50LFxuICAgIFByaXptQ2Fyb3VzZWxBdXhpbGlhcnlSaWdodENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DYXJvdXNlbE1vZHVsZSB7fVxuIl19