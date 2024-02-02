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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterModule, imports: [PrizmSplitterComponent,
            PrizmSplitterAreaComponent,
            PrizmSplitterGutterComponent,
            PrizmSplitterGutterDefaultComponent,
            PrizmSplitterCustomGutterDirective], exports: [PrizmSplitterComponent, PrizmSplitterAreaComponent, PrizmSplitterCustomGutterDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterModule, imports: [PrizmSplitterComponent,
            PrizmSplitterGutterComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXR0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zcGxpdHRlci9zcGxpdHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFL0U7OztLQUdLO0FBV0wsTUFBTSxPQUFPLG1CQUFtQjs4R0FBbkIsbUJBQW1COytHQUFuQixtQkFBbUIsWUFSNUIsc0JBQXNCO1lBQ3RCLDBCQUEwQjtZQUMxQiw0QkFBNEI7WUFDNUIsbUNBQW1DO1lBQ25DLGtDQUFrQyxhQUUxQixzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSxrQ0FBa0M7K0dBRXJGLG1CQUFtQixZQVI1QixzQkFBc0I7WUFFdEIsNEJBQTRCOzsyRkFNbkIsbUJBQW1CO2tCQVYvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1QixtQ0FBbUM7d0JBQ25DLGtDQUFrQztxQkFDbkM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQUUsa0NBQWtDLENBQUM7aUJBQ2xHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU3BsaXR0ZXJBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9hcmVhL2FyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU3BsaXR0ZXJHdXR0ZXJEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9ndXR0ZXIvZ3V0dGVyLWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU3BsaXR0ZXJHdXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2d1dHRlci9ndXR0ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJpem1TcGxpdHRlckNvbXBvbmVudCB9IGZyb20gJy4vc3BsaXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU3BsaXR0ZXJDdXN0b21HdXR0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2N1c3RvbS1ndXR0ZXIuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1TcGxpdHRlckNvbXBvbmVudCxcbiAgICBQcml6bVNwbGl0dGVyQXJlYUNvbXBvbmVudCxcbiAgICBQcml6bVNwbGl0dGVyR3V0dGVyQ29tcG9uZW50LFxuICAgIFByaXptU3BsaXR0ZXJHdXR0ZXJEZWZhdWx0Q29tcG9uZW50LFxuICAgIFByaXptU3BsaXR0ZXJDdXN0b21HdXR0ZXJEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtQcml6bVNwbGl0dGVyQ29tcG9uZW50LCBQcml6bVNwbGl0dGVyQXJlYUNvbXBvbmVudCwgUHJpem1TcGxpdHRlckN1c3RvbUd1dHRlckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU3BsaXR0ZXJNb2R1bGUge31cbiJdfQ==