import { NgModule } from '@angular/core';
import { PrizmHeaderComponent } from './prizm-header.component';
import { PrizmHeaderDropdownComponent } from './components/prizm-header-dropdown/prizm-header-dropdown.component';
import { PrizmHeaderModuleBtnComponent } from './components/prizm-header-module-btn/prizm-header-module-btn.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmHeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeaderModule, imports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent], exports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeaderModule, imports: [PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
                    exports: [PrizmHeaderComponent, PrizmHeaderDropdownComponent, PrizmHeaderModuleBtnComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL3ByaXptLWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUlsSCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQzs7QUFLdkg7OztLQUdLO0FBS0wsTUFBTSxPQUFPLGlCQUFpQjs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsWUFIbEIsb0JBQW9CLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLGFBQ2pGLG9CQUFvQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QjsrR0FFaEYsaUJBQWlCLFlBSEksNEJBQTRCLEVBQUUsNkJBQTZCOzsyRkFHaEYsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixDQUFDO29CQUM1RixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQztpQkFDN0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wcml6bS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSGVhZGVyRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJpem0taGVhZGVyLWRyb3Bkb3duL3ByaXptLWhlYWRlci1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7IFByaXptRGF0YUxpc3RNb2R1bGUgfSBmcm9tICcuLi9kYXRhLWxpc3QnO1xuaW1wb3J0IHsgUHJpem1IZWFkZXJNb2R1bGVCdG5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJpem0taGVhZGVyLW1vZHVsZS1idG4vcHJpem0taGVhZGVyLW1vZHVsZS1idG4uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IFByaXptSGludE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1UaGVtZU1vZHVsZSB9IGZyb20gJ0Bwcml6bS11aS90aGVtZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBzdGFuZGFsb25lXG4gKiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1ByaXptSGVhZGVyQ29tcG9uZW50LCBQcml6bUhlYWRlckRyb3Bkb3duQ29tcG9uZW50LCBQcml6bUhlYWRlck1vZHVsZUJ0bkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcml6bUhlYWRlckNvbXBvbmVudCwgUHJpem1IZWFkZXJEcm9wZG93bkNvbXBvbmVudCwgUHJpem1IZWFkZXJNb2R1bGVCdG5Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUhlYWRlck1vZHVsZSB7fVxuIl19