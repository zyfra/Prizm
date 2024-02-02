import { Component, ChangeDetectionStrategy, ContentChildren, QueryList, Input, } from '@angular/core';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { merge } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, prizmEmptyQueryList } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmAccordionComponent extends PrizmAbstractTestId {
    constructor(destroy$) {
        super();
        this.destroy$ = destroy$;
        this.onlyOneExpanded = false;
        this.accordionItems = prizmEmptyQueryList();
        this.testId_ = 'ui_accordion';
    }
    ngAfterContentInit() {
        const accordionItemsToggleStreams = this.accordionItems.map((item, idx) => item.toggle$.pipe(mapTo(idx)));
        merge(...accordionItemsToggleStreams)
            .pipe(takeUntil(this.destroy$))
            .subscribe(toggledAccordionIdx => {
            const accordionItems = [...this.accordionItems];
            if (accordionItems[toggledAccordionIdx].isExpanded && this.onlyOneExpanded) {
                accordionItems.forEach((accordionItem, accordionIdx) => {
                    if (accordionIdx !== toggledAccordionIdx) {
                        accordionItem.close();
                    }
                });
            }
        });
    }
}
PrizmAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionComponent, deps: [{ token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component });
PrizmAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmAccordionComponent, isStandalone: true, selector: "prizm-accordion", inputs: { onlyOneExpanded: "onlyOneExpanded" }, providers: [PrizmDestroyService], queries: [{ propertyName: "accordionItems", predicate: PrizmAccordionItemComponent }], usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block;border:1px solid var(--prizm-v3-background-stroke);border-top:none;border-radius:2px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-accordion', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService], standalone: true, template: "<ng-content></ng-content>\n", styles: [":host{display:block;border:1px solid var(--prizm-v3-background-stroke);border-top:none;border-radius:2px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmDestroyService }]; }, propDecorators: { onlyOneExpanded: [{
                type: Input
            }], accordionItems: [{
                type: ContentChildren,
                args: [PrizmAccordionItemComponent, { descendants: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsZUFBZSxFQUNmLFNBQVMsRUFFVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbkcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFVakUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQU85RCxZQUE2QixRQUE2QjtRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQURtQixhQUFRLEdBQVIsUUFBUSxDQUFxQjtRQU4xQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QyxtQkFBYyxHQUEyQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTdELFlBQU8sR0FBRyxjQUFjLENBQUM7SUFJM0MsQ0FBQztJQUVNLGtCQUFrQjtRQUN2QixNQUFNLDJCQUEyQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxLQUFLLENBQUMsR0FBRywyQkFBMkIsQ0FBQzthQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUMvQixNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWhELElBQUksY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEVBQUU7b0JBQ3JELElBQUksWUFBWSxLQUFLLG1CQUFtQixFQUFFO3dCQUN4QyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3ZCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O29IQTFCVSx1QkFBdUI7d0dBQXZCLHVCQUF1Qiw4R0FIdkIsQ0FBQyxtQkFBbUIsQ0FBQyx5REFLZiwyQkFBMkIsb0RDeEI5Qyw2QkFDQTsyRkRxQmEsdUJBQXVCO2tCQVJuQyxTQUFTOytCQUNFLGlCQUFpQixtQkFHVix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDLENBQUMsbUJBQW1CLENBQUMsY0FDcEIsSUFBSTswR0FHQSxlQUFlO3NCQUE5QixLQUFLO2dCQUVOLGNBQWM7c0JBRGIsZUFBZTt1QkFBQywyQkFBMkIsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8sIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIHByaXptRW1wdHlRdWVyeUxpc3QgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1BY2NvcmRpb25Db21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBvbmx5T25lRXhwYW5kZWQgPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihQcml6bUFjY29yZGlvbkl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGFjY29yZGlvbkl0ZW1zOiBRdWVyeUxpc3Q8UHJpem1BY2NvcmRpb25JdGVtQ29tcG9uZW50PiA9IHByaXptRW1wdHlRdWVyeUxpc3QoKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2FjY29yZGlvbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zVG9nZ2xlU3RyZWFtcyA9IHRoaXMuYWNjb3JkaW9uSXRlbXMubWFwKChpdGVtLCBpZHgpID0+IGl0ZW0udG9nZ2xlJC5waXBlKG1hcFRvKGlkeCkpKTtcbiAgICBtZXJnZSguLi5hY2NvcmRpb25JdGVtc1RvZ2dsZVN0cmVhbXMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHRvZ2dsZWRBY2NvcmRpb25JZHggPT4ge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IFsuLi50aGlzLmFjY29yZGlvbkl0ZW1zXTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uSXRlbXNbdG9nZ2xlZEFjY29yZGlvbklkeF0uaXNFeHBhbmRlZCAmJiB0aGlzLm9ubHlPbmVFeHBhbmRlZCkge1xuICAgICAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goKGFjY29yZGlvbkl0ZW0sIGFjY29yZGlvbklkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY29yZGlvbklkeCAhPT0gdG9nZ2xlZEFjY29yZGlvbklkeCkge1xuICAgICAgICAgICAgICBhY2NvcmRpb25JdGVtLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=