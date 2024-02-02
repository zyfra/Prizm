import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmTreeComponent } from './components/tree/tree.component';
import { PrizmTreeItemComponent } from './components/tree-item/tree-item.component';
import { PrizmTreeItemContentComponent } from './components/tree-item-content/tree-item-content.component';
import { PrizmTreeChildrenDirective } from './directives/tree-children.directive';
import { PrizmTreeControllerDirective } from './directives/tree-controller.directive';
import { PrizmTreeItemControllerDirective } from './directives/tree-item-controller.directive';
import { PrizmTreeNodeDirective } from './directives/tree-node.directive';
import { PrizmExpandModule } from '../expand';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmButtonModule } from '../button';
import { PolymorphModule } from '../../directives';
import * as i0 from "@angular/core";
export class PrizmTreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeModule, declarations: [PrizmTreeComponent,
            PrizmTreeItemComponent,
            PrizmTreeItemContentComponent,
            PrizmTreeChildrenDirective,
            PrizmTreeItemControllerDirective,
            PrizmTreeControllerDirective,
            PrizmTreeNodeDirective], imports: [CommonModule, PolymorphModule, PrizmExpandModule, PrizmLetModule, PrizmButtonModule], exports: [PrizmTreeComponent,
            PrizmTreeItemComponent,
            PrizmTreeChildrenDirective,
            PrizmTreeItemControllerDirective,
            PrizmTreeControllerDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeModule, imports: [CommonModule, PolymorphModule, PrizmExpandModule, PrizmLetModule, PrizmButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PolymorphModule, PrizmExpandModule, PrizmLetModule, PrizmButtonModule],
                    declarations: [
                        PrizmTreeComponent,
                        PrizmTreeItemComponent,
                        PrizmTreeItemContentComponent,
                        PrizmTreeChildrenDirective,
                        PrizmTreeItemControllerDirective,
                        PrizmTreeControllerDirective,
                        PrizmTreeNodeDirective,
                    ],
                    exports: [
                        PrizmTreeComponent,
                        PrizmTreeItemComponent,
                        PrizmTreeChildrenDirective,
                        PrizmTreeItemControllerDirective,
                        PrizmTreeControllerDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDM0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQXFCbkQsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTsrR0FBZixlQUFlLGlCQWhCeEIsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0Qiw2QkFBNkI7WUFDN0IsMEJBQTBCO1lBQzFCLGdDQUFnQztZQUNoQyw0QkFBNEI7WUFDNUIsc0JBQXNCLGFBUmQsWUFBWSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLGFBVzNGLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGdDQUFnQztZQUNoQyw0QkFBNEI7K0dBR25CLGVBQWUsWUFsQmhCLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjs7MkZBa0JsRixlQUFlO2tCQW5CM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztvQkFDOUYsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLDBCQUEwQjt3QkFDMUIsZ0NBQWdDO3dCQUNoQyw0QkFBNEI7d0JBQzVCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QiwwQkFBMEI7d0JBQzFCLGdDQUFnQzt3QkFDaEMsNEJBQTRCO3FCQUM3QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UcmVlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVRyZWVJdGVtQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLWl0ZW0tY29udGVudC90cmVlLWl0ZW0tY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1jaGlsZHJlbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1UcmVlQ29udHJvbGxlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWNvbnRyb2xsZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptVHJlZUl0ZW1Db250cm9sbGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtaXRlbS1jb250cm9sbGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bVRyZWVOb2RlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtbm9kZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1FeHBhbmRNb2R1bGUgfSBmcm9tICcuLi9leHBhbmQnO1xuaW1wb3J0IHsgUHJpem1MZXRNb2R1bGUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbic7XG5pbXBvcnQgeyBQb2x5bW9ycGhNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9seW1vcnBoTW9kdWxlLCBQcml6bUV4cGFuZE1vZHVsZSwgUHJpem1MZXRNb2R1bGUsIFByaXptQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJpem1UcmVlQ29tcG9uZW50LFxuICAgIFByaXptVHJlZUl0ZW1Db21wb25lbnQsXG4gICAgUHJpem1UcmVlSXRlbUNvbnRlbnRDb21wb25lbnQsXG4gICAgUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmUsXG4gICAgUHJpem1UcmVlSXRlbUNvbnRyb2xsZXJEaXJlY3RpdmUsXG4gICAgUHJpem1UcmVlQ29udHJvbGxlckRpcmVjdGl2ZSxcbiAgICBQcml6bVRyZWVOb2RlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJpem1UcmVlQ29tcG9uZW50LFxuICAgIFByaXptVHJlZUl0ZW1Db21wb25lbnQsXG4gICAgUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmUsXG4gICAgUHJpem1UcmVlSXRlbUNvbnRyb2xsZXJEaXJlY3RpdmUsXG4gICAgUHJpem1UcmVlQ29udHJvbGxlckRpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UcmVlTW9kdWxlIHt9XG4iXX0=