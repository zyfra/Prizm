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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmAccordionModule, imports: [PrizmAccordionComponent,
            PrizmAccordionContentDirective,
            AccordionToolsDirective,
            PrizmAccordionItemComponent], exports: [PrizmAccordionComponent,
            PrizmAccordionContentDirective,
            AccordionToolsDirective,
            PrizmAccordionItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmAccordionModule, imports: [PrizmAccordionItemComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmAccordionModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFFbkc7OztLQUdLO0FBZUwsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9COytHQUFwQixvQkFBb0IsWUFaN0IsdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5Qix1QkFBdUI7WUFDdkIsMkJBQTJCLGFBRzNCLHVCQUF1QjtZQUN2Qiw4QkFBOEI7WUFDOUIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjsrR0FHbEIsb0JBQW9CLFlBVDdCLDJCQUEyQjs7MkZBU2xCLG9CQUFvQjtrQkFkaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2Qiw4QkFBOEI7d0JBQzlCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2Qiw4QkFBOEI7d0JBQzlCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUFjY29yZGlvbkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWNjb3JkaW9uLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjY29yZGlvblRvb2xzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2FjY29yZGlvbi10b29scy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1BY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBzdGFuZGFsb25lIGluc3RlYWRcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1BY2NvcmRpb25Db21wb25lbnQsXG4gICAgUHJpem1BY2NvcmRpb25Db250ZW50RGlyZWN0aXZlLFxuICAgIEFjY29yZGlvblRvb2xzRGlyZWN0aXZlLFxuICAgIFByaXptQWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByaXptQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIFByaXptQWNjb3JkaW9uQ29udGVudERpcmVjdGl2ZSxcbiAgICBBY2NvcmRpb25Ub29sc0RpcmVjdGl2ZSxcbiAgICBQcml6bUFjY29yZGlvbkl0ZW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQWNjb3JkaW9uTW9kdWxlIHt9XG4iXX0=