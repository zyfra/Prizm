import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputCarouselComponent } from './input-carousel.component';
import { PrizmInputCarouselAuxiliaryLeftComponent } from './input-carousel-auxiliary-left.component';
import { PrizmInputCarouselAuxiliaryRightComponent } from './input-carousel-auxiliary-right.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmInputCarouselModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselModule, imports: [PrizmInputCommonModule,
            PrizmInputCarouselComponent,
            PrizmInputCarouselAuxiliaryLeftComponent,
            PrizmInputCarouselAuxiliaryRightComponent], exports: [PrizmInputCarouselComponent, PrizmInputCommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselModule, imports: [PrizmInputCommonModule,
            PrizmInputCarouselComponent,
            PrizmInputCarouselAuxiliaryLeftComponent,
            PrizmInputCarouselAuxiliaryRightComponent, PrizmInputCommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmInputCommonModule,
                        PrizmInputCarouselComponent,
                        PrizmInputCarouselAuxiliaryLeftComponent,
                        PrizmInputCarouselAuxiliaryRightComponent,
                    ],
                    exports: [PrizmInputCarouselComponent, PrizmInputCommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9pbnB1dC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFFdkc7OztLQUdLO0FBVUwsTUFBTSxPQUFPLHdCQUF3Qjs4R0FBeEIsd0JBQXdCOytHQUF4Qix3QkFBd0IsWUFQakMsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQix3Q0FBd0M7WUFDeEMseUNBQXlDLGFBRWpDLDJCQUEyQixFQUFFLHNCQUFzQjsrR0FFbEQsd0JBQXdCLFlBUGpDLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFDM0Isd0NBQXdDO1lBQ3hDLHlDQUF5QyxFQUVKLHNCQUFzQjs7MkZBRWxELHdCQUF3QjtrQkFUcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QiwyQkFBMkI7d0JBQzNCLHdDQUF3Qzt3QkFDeEMseUNBQXlDO3FCQUMxQztvQkFDRCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxzQkFBc0IsQ0FBQztpQkFDL0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcml6bUlucHV0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2lucHV0LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsQXV4aWxpYXJ5TGVmdENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktcmlnaHQuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0Q2Fyb3VzZWxDb21wb25lbnQsXG4gICAgUHJpem1JbnB1dENhcm91c2VsQXV4aWxpYXJ5TGVmdENvbXBvbmVudCxcbiAgICBQcml6bUlucHV0Q2Fyb3VzZWxBdXhpbGlhcnlSaWdodENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1ByaXptSW5wdXRDYXJvdXNlbENvbXBvbmVudCwgUHJpem1JbnB1dENvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRDYXJvdXNlbE1vZHVsZSB7fVxuIl19