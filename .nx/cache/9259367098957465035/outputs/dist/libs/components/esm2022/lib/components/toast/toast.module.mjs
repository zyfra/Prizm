import { NgModule } from '@angular/core';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { CommonModule } from '@angular/common';
import { PrizmOverlayModule } from '../../modules/overlay';
import { ToastComponent } from './toast/toast.component';
import { ToastWrapperComponent } from './toast-wrapper/toast-wrapper.component';
import { PolymorphModule } from '../../directives';
import { PrizmToastControl } from './toast-control';
import { PrizmFocusTrapModule } from '../../directives/focus-trap';
import { PrizmButtonModule } from '../button';
import { PrizmIndicatorModule } from '../indicator';
import { PrizmInputCommonModule } from '../input';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmScrollbarModule } from '../scrollbar';
import * as i0 from "@angular/core";
import * as i1 from "./toast-control";
export class PrizmToastModule {
    constructor(toastControl) {
        this.toastControl = toastControl;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastModule, deps: [{ token: i1.PrizmToastControl }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastModule, declarations: [PrizmToastContainerComponent, ToastWrapperComponent, ToastComponent], imports: [CommonModule,
            PrizmOverlayModule,
            PrizmInputCommonModule,
            PrizmIndicatorModule,
            PolymorphModule,
            PrizmButtonModule,
            PrizmThemeModule,
            PrizmFocusTrapModule,
            PrizmScrollbarModule], exports: [PrizmToastContainerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastModule, imports: [CommonModule,
            PrizmOverlayModule,
            PrizmInputCommonModule,
            PrizmIndicatorModule,
            PolymorphModule,
            PrizmButtonModule,
            PrizmThemeModule,
            PrizmFocusTrapModule,
            PrizmScrollbarModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [PrizmToastContainerComponent],
                    imports: [
                        CommonModule,
                        PrizmOverlayModule,
                        PrizmInputCommonModule,
                        PrizmIndicatorModule,
                        PolymorphModule,
                        PrizmButtonModule,
                        PrizmThemeModule,
                        PrizmFocusTrapModule,
                        PrizmScrollbarModule,
                    ],
                    declarations: [PrizmToastContainerComponent, ToastWrapperComponent, ToastComponent],
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmToastControl }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQWlCcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUE2QixZQUErQjtRQUEvQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7SUFBRyxDQUFDOzhHQURyRCxnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFGWiw0QkFBNEIsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLGFBVmhGLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CLGFBVlosNEJBQTRCOytHQWMzQixnQkFBZ0IsWUFaekIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixvQkFBb0I7OzJGQUlYLGdCQUFnQjtrQkFmNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO29CQUNELFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixFQUFFLGNBQWMsQ0FBQztpQkFDcEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Ub2FzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtY29udGFpbmVyL3RvYXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvb3ZlcmxheSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3Qtd3JhcHBlci90b2FzdC13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptVG9hc3RDb250cm9sIH0gZnJvbSAnLi90b2FzdC1jb250cm9sJztcbmltcG9ydCB7IFByaXptRm9jdXNUcmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9mb2N1cy10cmFwJztcbmltcG9ydCB7IFByaXptQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IFByaXptSW5kaWNhdG9yTW9kdWxlIH0gZnJvbSAnLi4vaW5kaWNhdG9yJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9pbnB1dCc7XG5pbXBvcnQgeyBQcml6bVRoZW1lTW9kdWxlIH0gZnJvbSAnQHByaXptLXVpL3RoZW1lJztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnLi4vc2Nyb2xsYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1ByaXptVG9hc3RDb250YWluZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptT3ZlcmxheU1vZHVsZSxcbiAgICBQcml6bUlucHV0Q29tbW9uTW9kdWxlLFxuICAgIFByaXptSW5kaWNhdG9yTW9kdWxlLFxuICAgIFBvbHltb3JwaE1vZHVsZSxcbiAgICBQcml6bUJ1dHRvbk1vZHVsZSxcbiAgICBQcml6bVRoZW1lTW9kdWxlLFxuICAgIFByaXptRm9jdXNUcmFwTW9kdWxlLFxuICAgIFByaXptU2Nyb2xsYmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcml6bVRvYXN0Q29udGFpbmVyQ29tcG9uZW50LCBUb2FzdFdyYXBwZXJDb21wb25lbnQsIFRvYXN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub2FzdE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDb250cm9sOiBQcml6bVRvYXN0Q29udHJvbCkge31cbn1cbiJdfQ==