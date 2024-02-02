import { NgModule } from '@angular/core';
import { PrizmSplitterAreaComponent } from './area/area.component';
import { PrizmSplitterGutterDefaultComponent } from './gutter/gutter-default.component';
import { PrizmSplitterGutterComponent } from './gutter/gutter.component';
import { PrizmSplitterComponent } from './splitter.component';
import { PrizmSplitterCustomGutterDirective } from './custom-gutter.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmSplitterModule {
}
PrizmSplitterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmSplitterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterModule, imports: [PrizmSplitterComponent,
        PrizmSplitterAreaComponent,
        PrizmSplitterGutterComponent,
        PrizmSplitterGutterDefaultComponent,
        PrizmSplitterCustomGutterDirective], exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterCustomGutterDirective] });
PrizmSplitterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterModule, imports: [PrizmSplitterComponent,
        PrizmSplitterAreaComponent,
        PrizmSplitterGutterComponent,
        PrizmSplitterGutterDefaultComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmSplitterComponent,
                        PrizmSplitterAreaComponent,
                        PrizmSplitterGutterComponent,
                        PrizmSplitterGutterDefaultComponent,
                        PrizmSplitterCustomGutterDirective,
                    ],
                    exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterCustomGutterDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXR0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFL0U7OztLQUdLO0FBV0wsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLFlBUjVCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyxrQ0FBa0MsYUFFMUIsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDO2lIQUVyRixtQkFBbUIsWUFSNUIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsbUNBQW1DOzJGQUsxQixtQkFBbUI7a0JBVi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLG1DQUFtQzt3QkFDbkMsa0NBQWtDO3FCQUNuQztvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0MsQ0FBQztpQkFDbEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1TcGxpdHRlckFyZWFDb21wb25lbnQgfSBmcm9tICcuL2FyZWEvYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TcGxpdHRlckd1dHRlckRlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2d1dHRlci9ndXR0ZXItZGVmYXVsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TcGxpdHRlckd1dHRlckNvbXBvbmVudCB9IGZyb20gJy4vZ3V0dGVyL2d1dHRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcml6bVNwbGl0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGxpdHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TcGxpdHRlckN1c3RvbUd1dHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY3VzdG9tLWd1dHRlci5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugc3RhbmRhbG9uZVxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcml6bVNwbGl0dGVyQ29tcG9uZW50LFxuICAgIFByaXptU3BsaXR0ZXJBcmVhQ29tcG9uZW50LFxuICAgIFByaXptU3BsaXR0ZXJHdXR0ZXJDb21wb25lbnQsXG4gICAgUHJpem1TcGxpdHRlckd1dHRlckRlZmF1bHRDb21wb25lbnQsXG4gICAgUHJpem1TcGxpdHRlckN1c3RvbUd1dHRlckRpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1ByaXptU3BsaXR0ZXJDb21wb25lbnQsIFByaXptU3BsaXR0ZXJBcmVhQ29tcG9uZW50LCBQcml6bVNwbGl0dGVyQ3VzdG9tR3V0dGVyRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TcGxpdHRlck1vZHVsZSB7fVxuIl19