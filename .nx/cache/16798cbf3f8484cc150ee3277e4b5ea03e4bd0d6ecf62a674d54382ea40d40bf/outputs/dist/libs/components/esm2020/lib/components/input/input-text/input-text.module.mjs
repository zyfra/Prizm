import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextComponent } from './input-text.component';
import { PrizmTextareaDirective } from './textarea.directive';
import { PrizmInputBlockComponent } from './input-block.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmInputTextModule {
}
PrizmInputTextModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputTextModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTextModule, imports: [PrizmInputCommonModule,
        PrizmInputBlockComponent,
        PrizmInputTextComponent,
        PrizmTextareaDirective], exports: [PrizmInputCommonModule,
        PrizmInputTextComponent,
        PrizmTextareaDirective,
        PrizmInputBlockComponent] });
PrizmInputTextModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTextModule, imports: [PrizmInputCommonModule,
        PrizmInputBlockComponent,
        PrizmInputTextComponent, PrizmInputCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTextModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmInputCommonModule,
                        PrizmInputBlockComponent,
                        PrizmInputTextComponent,
                        PrizmTextareaDirective,
                    ],
                    exports: [
                        PrizmInputCommonModule,
                        PrizmInputTextComponent,
                        PrizmTextareaDirective,
                        PrizmInputBlockComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRleHQvaW5wdXQtdGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbkU7OztLQUdLO0FBZUwsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLFlBWjdCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQixhQUd0QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix3QkFBd0I7a0hBR2Ysb0JBQW9CLFlBWjdCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsdUJBQXVCLEVBSXZCLHNCQUFzQjsyRkFNYixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9pbnB1dC1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVRleHRhcmVhRGlyZWN0aXZlIH0gZnJvbSAnLi90ZXh0YXJlYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dEJsb2NrQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ibG9jay5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugc3RhbmRhbG9uZVxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcml6bUlucHV0Q29tbW9uTW9kdWxlLFxuICAgIFByaXptSW5wdXRCbG9ja0NvbXBvbmVudCxcbiAgICBQcml6bUlucHV0VGV4dENvbXBvbmVudCxcbiAgICBQcml6bVRleHRhcmVhRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dENvbXBvbmVudCxcbiAgICBQcml6bVRleHRhcmVhRGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRCbG9ja0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFRleHRNb2R1bGUge31cbiJdfQ==