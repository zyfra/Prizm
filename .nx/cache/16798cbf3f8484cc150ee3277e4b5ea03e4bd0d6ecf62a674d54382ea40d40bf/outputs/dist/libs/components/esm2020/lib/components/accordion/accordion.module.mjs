import { NgModule } from '@angular/core';
import { PrizmAccordionComponent } from './accordion.component';
import { PrizmAccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone instead
 * */
export class PrizmAccordionModule {
}
PrizmAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionModule, imports: [PrizmAccordionComponent,
        PrizmAccordionContentDirective,
        AccordionToolsDirective,
        PrizmAccordionItemComponent], exports: [PrizmAccordionComponent,
        PrizmAccordionContentDirective,
        AccordionToolsDirective,
        PrizmAccordionItemComponent] });
PrizmAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionModule, imports: [PrizmAccordionComponent,
        PrizmAccordionItemComponent] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmAccordionComponent,
                        PrizmAccordionContentDirective,
                        AccordionToolsDirective,
                        PrizmAccordionItemComponent,
                    ],
                    exports: [
                        PrizmAccordionComponent,
                        PrizmAccordionContentDirective,
                        AccordionToolsDirective,
                        PrizmAccordionItemComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFFbkc7OztLQUdLO0FBZUwsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLFlBWjdCLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLDJCQUEyQixhQUczQix1QkFBdUI7UUFDdkIsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2QiwyQkFBMkI7a0hBR2xCLG9CQUFvQixZQVo3Qix1QkFBdUI7UUFHdkIsMkJBQTJCOzJGQVNsQixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsOEJBQThCO3dCQUM5Qix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsOEJBQThCO3dCQUM5Qix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1BY2NvcmRpb25Db250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FjY29yZGlvbi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Ub29sc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hY2NvcmRpb24tdG9vbHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugc3RhbmRhbG9uZSBpbnN0ZWFkXG4gKiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFByaXptQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIFByaXptQWNjb3JkaW9uQ29udGVudERpcmVjdGl2ZSxcbiAgICBBY2NvcmRpb25Ub29sc0RpcmVjdGl2ZSxcbiAgICBQcml6bUFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcml6bUFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBQcml6bUFjY29yZGlvbkNvbnRlbnREaXJlY3RpdmUsXG4gICAgQWNjb3JkaW9uVG9vbHNEaXJlY3RpdmUsXG4gICAgUHJpem1BY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUFjY29yZGlvbk1vZHVsZSB7fVxuIl19