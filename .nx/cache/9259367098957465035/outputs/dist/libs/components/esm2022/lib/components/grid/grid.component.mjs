import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, ViewChild, } from '@angular/core';
import { PrizmGridItemComponent } from './components/grid-item/grid-item.component';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { prizmEmptyQueryList } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmGridComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.cols = '12';
        this.rows = '10';
        this.gridItems = prizmEmptyQueryList();
        this.gridItemsData = prizmEmptyQueryList();
        this.testId_ = 'ui-area--grid';
    }
    ngAfterContentInit() {
        const containerElement = this.container.nativeElement;
        containerElement.style['grid-template-columns'] = `repeat(${this.cols}, 1fr)`;
        const gridItemsElement = [...this.gridItems];
        const gridItemsData = [...this.gridItemsData];
        gridItemsElement.forEach((item, idx) => {
            const row = gridItemsData[idx].rowPos;
            const col = gridItemsData[idx].colPos;
            item.nativeElement.style['grid-column'] = col.replace(':', ' / span ');
            item.nativeElement.style['grid-row'] = row.replace(':', ' / span ');
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmGridComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmGridComponent, isStandalone: true, selector: "prizm-grid", inputs: { cols: "cols", rows: "rows" }, host: { properties: { "attr.columns": "this.cols" } }, queries: [{ propertyName: "gridItems", predicate: PrizmGridItemComponent, read: ElementRef }, { propertyName: "gridItemsData", predicate: PrizmGridItemComponent }], viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"grid-container\" #container>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}:host .grid-container{height:100%;width:100%;display:grid;overflow:hidden}:host[columns=\"8\"] .grid-container{padding:8px;grid-gap:8px}:host[columns=\"12\"] .grid-container{padding:20px;grid-gap:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-grid', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule], template: "<div class=\"grid-container\" #container>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}:host .grid-container{height:100%;width:100%;display:grid;overflow:hidden}:host[columns=\"8\"] .grid-container{padding:8px;grid-gap:8px}:host[columns=\"12\"] .grid-container{padding:20px;grid-gap:16px}\n"] }]
        }], propDecorators: { cols: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.columns']
            }], rows: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], gridItems: [{
                type: ContentChildren,
                args: [PrizmGridItemComponent, { read: ElementRef }]
            }], gridItemsData: [{
                type: ContentChildren,
                args: [PrizmGridItemComponent]
            }] } });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const GridComponent = PrizmGridComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBVXhELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFSM0Q7O1FBUytDLFNBQUksR0FBZSxJQUFJLENBQUM7UUFDckQsU0FBSSxHQUFHLElBQUksQ0FBQztRQUtyQixjQUFTLEdBQTBCLG1CQUFtQixFQUFFLENBQUM7UUFHekQsa0JBQWEsR0FBc0MsbUJBQW1CLEVBQUUsQ0FBQztRQUU5RCxZQUFPLEdBQUcsZUFBZSxDQUFDO0tBaUI3QztJQWZRLGtCQUFrQjtRQUN2QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ3RELGdCQUFnQixDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDO1FBRTlFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTlDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RDLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTVCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiwrTEFNWixzQkFBc0IsUUFBVSxVQUFVLGdEQUcxQyxzQkFBc0IsMEtDakN6QyxrRkFHQSx3UkRtQlksWUFBWTs7MkZBRVgsa0JBQWtCO2tCQVI5QixTQUFTOytCQUNFLFlBQVksbUJBR0wsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUM7OEJBR3NCLElBQUk7c0JBQWhELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsY0FBYztnQkFDcEIsSUFBSTtzQkFBbkIsS0FBSztnQkFFb0MsU0FBUztzQkFBbEQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUdqQyxTQUFTO3NCQURmLGVBQWU7dUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUl0RCxhQUFhO3NCQURuQixlQUFlO3VCQUFDLHNCQUFzQjs7QUFxQnpDOzs7S0FHSztBQUNMLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1FbXB0eVF1ZXJ5TGlzdCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptR3JpZENvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbHVtbnMnKSBwdWJsaWMgY29sczogJzgnIHwgJzEyJyA9ICcxMic7XG4gIEBJbnB1dCgpIHB1YmxpYyByb3dzID0gJzEwJztcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXIhOiBFbGVtZW50UmVmO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oUHJpem1HcmlkSXRlbUNvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyBncmlkSXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPiA9IHByaXptRW1wdHlRdWVyeUxpc3QoKTtcblxuICBAQ29udGVudENoaWxkcmVuKFByaXptR3JpZEl0ZW1Db21wb25lbnQpXG4gIHB1YmxpYyBncmlkSXRlbXNEYXRhOiBRdWVyeUxpc3Q8UHJpem1HcmlkSXRlbUNvbXBvbmVudD4gPSBwcml6bUVtcHR5UXVlcnlMaXN0KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aS1hcmVhLS1ncmlkJztcblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGVbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gYHJlcGVhdCgke3RoaXMuY29sc30sIDFmcilgO1xuXG4gICAgY29uc3QgZ3JpZEl0ZW1zRWxlbWVudCA9IFsuLi50aGlzLmdyaWRJdGVtc107XG4gICAgY29uc3QgZ3JpZEl0ZW1zRGF0YSA9IFsuLi50aGlzLmdyaWRJdGVtc0RhdGFdO1xuXG4gICAgZ3JpZEl0ZW1zRWxlbWVudC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGdyaWRJdGVtc0RhdGFbaWR4XS5yb3dQb3M7XG4gICAgICBjb25zdCBjb2wgPSBncmlkSXRlbXNEYXRhW2lkeF0uY29sUG9zO1xuXG4gICAgICBpdGVtLm5hdGl2ZUVsZW1lbnQuc3R5bGVbJ2dyaWQtY29sdW1uJ10gPSBjb2wucmVwbGFjZSgnOicsICcgLyBzcGFuICcpO1xuICAgICAgaXRlbS5uYXRpdmVFbGVtZW50LnN0eWxlWydncmlkLXJvdyddID0gcm93LnJlcGxhY2UoJzonLCAnIC8gc3BhbiAnKTtcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBUT0RPIHY1OiByZW1vdmVcbiAqIEBkZXByZWNhdGVkXG4gKiAqL1xuZXhwb3J0IGNvbnN0IEdyaWRDb21wb25lbnQgPSBQcml6bUdyaWRDb21wb25lbnQ7XG4iLCI8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIiAjY29udGFpbmVyPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==