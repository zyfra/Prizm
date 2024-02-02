import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputPasswordDefaultControlComponent } from './input-password-auxiliary-control.component';
import { PrizmInputPasswordDirective } from './input-password.directive';
import * as i0 from "@angular/core";
export class PrizmInputPasswordModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordModule, declarations: [PrizmInputPasswordDirective, PrizmInputPasswordDefaultControlComponent], imports: [PrizmInputCommonModule, PrizmInputTextModule], exports: [PrizmInputCommonModule,
            PrizmInputTextModule,
            PrizmInputPasswordDirective,
            PrizmInputPasswordDefaultControlComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordModule, imports: [PrizmInputCommonModule, PrizmInputTextModule, PrizmInputCommonModule,
            PrizmInputTextModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputPasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmInputCommonModule, PrizmInputTextModule],
                    declarations: [PrizmInputPasswordDirective, PrizmInputPasswordDefaultControlComponent],
                    exports: [
                        PrizmInputCommonModule,
                        PrizmInputTextModule,
                        PrizmInputPasswordDirective,
                        PrizmInputPasswordDefaultControlComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1wYXNzd29yZC9pbnB1dC1wYXNzd29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFZekUsTUFBTSxPQUFPLHdCQUF3Qjs4R0FBeEIsd0JBQXdCOytHQUF4Qix3QkFBd0IsaUJBUnBCLDJCQUEyQixFQUFFLHlDQUF5QyxhQUQzRSxzQkFBc0IsRUFBRSxvQkFBb0IsYUFHcEQsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQiwyQkFBMkI7WUFDM0IseUNBQXlDOytHQUdoQyx3QkFBd0IsWUFUekIsc0JBQXNCLEVBQUUsb0JBQW9CLEVBR3BELHNCQUFzQjtZQUN0QixvQkFBb0I7OzJGQUtYLHdCQUF3QjtrQkFWcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDdkQsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUseUNBQXlDLENBQUM7b0JBQ3RGLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3dCQUMzQix5Q0FBeUM7cUJBQzFDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vaW5wdXQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXRleHQvaW5wdXQtdGV4dC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFBhc3N3b3JkRGVmYXVsdENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LXBhc3N3b3JkLWF1eGlsaWFyeS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0UGFzc3dvcmREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LXBhc3N3b3JkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtQcml6bUlucHV0Q29tbW9uTW9kdWxlLCBQcml6bUlucHV0VGV4dE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1ByaXptSW5wdXRQYXNzd29yZERpcmVjdGl2ZSwgUHJpem1JbnB1dFBhc3N3b3JkRGVmYXVsdENvbnRyb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUlucHV0UGFzc3dvcmREaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dFBhc3N3b3JkRGVmYXVsdENvbnRyb2xDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRQYXNzd29yZE1vZHVsZSB7fVxuIl19