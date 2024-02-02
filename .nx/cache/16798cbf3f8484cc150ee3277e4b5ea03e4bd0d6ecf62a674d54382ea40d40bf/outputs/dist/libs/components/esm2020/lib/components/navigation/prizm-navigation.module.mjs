import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationComponent } from './prizm-navigation.component';
import { PrizmNavigationItemSimpleComponent } from './components/prizm-navigation-item-simple/prizm-navigation-item-simple.component';
import { PrizmNavigationItemExpandableComponent } from './components/prizm-navigation-item-expandable/prizm-navigation-item-expandable.component';
import { PrizmIconModule } from '../icon';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { PrizmHintModule } from '../../directives';
import * as i0 from "@angular/core";
export class PrizmNavigationModule {
}
PrizmNavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmNavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationModule, declarations: [PrizmNavigationComponent,
        PrizmNavigationItemSimpleComponent,
        PrizmNavigationItemExpandableComponent], imports: [CommonModule, PrizmIconModule, PrizmHintModule], exports: [PrizmNavigationComponent] });
PrizmNavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationModule, providers: [ActiveNavigationItemService], imports: [CommonModule, PrizmIconModule, PrizmHintModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PrizmNavigationComponent,
                        PrizmNavigationItemSimpleComponent,
                        PrizmNavigationItemExpandableComponent,
                    ],
                    imports: [CommonModule, PrizmIconModule, PrizmHintModule],
                    exports: [PrizmNavigationComponent],
                    providers: [ActiveNavigationItemService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vcHJpem0tbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDdEksT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDbEosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBWW5ELE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFSOUIsd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNsQyxzQ0FBc0MsYUFFOUIsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLGFBQzlDLHdCQUF3QjttSEFHdkIscUJBQXFCLGFBRnJCLENBQUMsMkJBQTJCLENBQUMsWUFGOUIsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlOzJGQUk3QyxxQkFBcUI7a0JBVmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsa0NBQWtDO3dCQUNsQyxzQ0FBc0M7cUJBQ3ZDO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO29CQUN6RCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDbkMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3ByaXptLW5hdmlnYXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJpem1OYXZpZ2F0aW9uSXRlbVNpbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcml6bS1uYXZpZ2F0aW9uLWl0ZW0tc2ltcGxlL3ByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptTmF2aWdhdGlvbkl0ZW1FeHBhbmRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3ByaXptLW5hdmlnYXRpb24taXRlbS1leHBhbmRhYmxlL3ByaXptLW5hdmlnYXRpb24taXRlbS1leHBhbmRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uJztcbmltcG9ydCB7IEFjdGl2ZU5hdmlnYXRpb25JdGVtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWN0aXZlLW5hdmlnYXRpb24taXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptSGludE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcml6bU5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgUHJpem1OYXZpZ2F0aW9uSXRlbVNpbXBsZUNvbXBvbmVudCxcbiAgICBQcml6bU5hdmlnYXRpb25JdGVtRXhwYW5kYWJsZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUHJpem1JY29uTW9kdWxlLCBQcml6bUhpbnRNb2R1bGVdLFxuICBleHBvcnRzOiBbUHJpem1OYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQWN0aXZlTmF2aWdhdGlvbkl0ZW1TZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1OYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=