import { NgModule } from '@angular/core';
import { PrizmTabComponent } from './components/tab.component';
import { PrizmTabsComponent } from './tabs.component';
import { PrizmTabMenuItemDirective } from './tab-menu-item.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmTabsModule {
}
PrizmTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabsModule, imports: [PrizmTabsComponent, PrizmTabComponent, PrizmTabMenuItemDirective], exports: [PrizmTabsComponent, PrizmTabComponent] });
PrizmTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabsModule, imports: [PrizmTabsComponent, PrizmTabComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PrizmTabsComponent, PrizmTabComponent, PrizmTabMenuItemDirective],
                    exports: [PrizmTabsComponent, PrizmTabComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFdEU7OztLQUdLO0FBS0wsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxZQUhoQixrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsYUFDaEUsa0JBQWtCLEVBQUUsaUJBQWlCOzZHQUVwQyxlQUFlLFlBSGhCLGtCQUFrQixFQUFFLGlCQUFpQjsyRkFHcEMsZUFBZTtrQkFKM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDM0UsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVRhYk1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBzdGFuZGFsb25lXG4gKiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1ByaXptVGFic0NvbXBvbmVudCwgUHJpem1UYWJDb21wb25lbnQsIFByaXptVGFiTWVudUl0ZW1EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbUHJpem1UYWJzQ29tcG9uZW50LCBQcml6bVRhYkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGFic01vZHVsZSB7fVxuIl19