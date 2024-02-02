import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostBinding, Input, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PrizmTdService } from './td.service';
import * as i0 from "@angular/core";
import * as i1 from "./td.service";
export class PrizmTdComponent {
    get realColspan() {
        return this.colspan ?? this.elementRef?.nativeElement?.getAttribute('colspan') ?? 1;
    }
    constructor(tdService, elementRef) {
        this.tdService = tdService;
        this.elementRef = elementRef;
        this.status = 'default';
    }
    ngOnInit() {
        this.tdService.increment(parseInt(this.realColspan.toString(), 10));
    }
    ngOnDestroy() {
        this.tdService.decrement(parseInt(this.realColspan.toString(), 10));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTdComponent, deps: [{ token: i1.PrizmTdService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTdComponent, selector: "th[prizmTd], td[prizmTd]", inputs: { status: "status", colspan: "colspan" }, host: { properties: { "attr.status": "this.status", "class._editable": "this.control", "attr.colspan": "this.realColspan" } }, queries: [{ propertyName: "control", first: true, predicate: NgControl, descendants: true }], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{padding:0 8px;border:1px solid var(--prizm-v3-table-stroke-cell-default);border-top:none;z-index:10;background:inherit;color:inherit}:host:not(:first-child){border-left:none}:host:first-child{position:relative}:host:first-child:before{content:\"\";height:100%;width:4px;position:absolute;left:0;top:0}:host[status=success]{background:var(--prizm-v3-status-success-secondary-default)}:host[status=default]{background:inherit}:host[status=warning]{background:var(--prizm-v3-status-warning-secondary-default)}:host[status=danger]{background:var(--prizm-v3-status-alarm-secondary-default)}:host-context([active=\"true\"]):first-child:before{background:var(--prizm-table-active-row-marker-color, var(--prizm-v3-status-info-primary-default))}:host-context([active=\"true\"])[status=default]{background:var(--prizm-v3-table-fill-row-active)}:host-context([border-style=\"vertical\"]){border-bottom:none}:host-context([border-style=\"horizontal\"]):not(:first-child){border-left:none}:host-context([border-style=\"horizontal\"]):not(:last-child){border-right:none}:host-context([data-size=\"s\"]){height:24px}:host-context([data-size=\"xs\"]){height:16px}:host-context([data-size=\"m\"]){height:32px}:host-context([data-size=\"l\"]){height:40px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTdComponent, decorators: [{
            type: Component,
            args: [{ selector: `th[prizmTd], td[prizmTd]`, template: ` <ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{padding:0 8px;border:1px solid var(--prizm-v3-table-stroke-cell-default);border-top:none;z-index:10;background:inherit;color:inherit}:host:not(:first-child){border-left:none}:host:first-child{position:relative}:host:first-child:before{content:\"\";height:100%;width:4px;position:absolute;left:0;top:0}:host[status=success]{background:var(--prizm-v3-status-success-secondary-default)}:host[status=default]{background:inherit}:host[status=warning]{background:var(--prizm-v3-status-warning-secondary-default)}:host[status=danger]{background:var(--prizm-v3-status-alarm-secondary-default)}:host-context([active=\"true\"]):first-child:before{background:var(--prizm-table-active-row-marker-color, var(--prizm-v3-status-info-primary-default))}:host-context([active=\"true\"])[status=default]{background:var(--prizm-v3-table-fill-row-active)}:host-context([border-style=\"vertical\"]){border-bottom:none}:host-context([border-style=\"horizontal\"]):not(:first-child){border-left:none}:host-context([border-style=\"horizontal\"]):not(:last-child){border-right:none}:host-context([data-size=\"s\"]){height:24px}:host-context([data-size=\"xs\"]){height:16px}:host-context([data-size=\"m\"]){height:32px}:host-context([data-size=\"l\"]){height:40px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmTdService }, { type: i0.ElementRef }]; }, propDecorators: { status: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.status']
            }], colspan: [{
                type: Input
            }], control: [{
                type: HostBinding,
                args: [`class._editable`]
            }, {
                type: ContentChild,
                args: [NgControl]
            }], realColspan: [{
                type: HostBinding,
                args: ['attr.colspan']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90ZC90ZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFTOUMsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsWUFDbUIsU0FBeUIsRUFDekIsVUFBNEM7UUFENUMsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBa0M7UUFoQm5CLFdBQU0sR0FBeUIsU0FBUyxDQUFDO0lBaUJsRixDQUFDO0lBRUcsUUFBUTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzhHQTFCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQixzUkFPYixTQUFTLGdEQVhiLDZCQUE2Qjs7MkZBSTVCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFFRSwwQkFBMEIsWUFDMUIsNkJBQTZCLG1CQUV0Qix1QkFBdUIsQ0FBQyxNQUFNOzhIQUdILE1BQU07c0JBQWpELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsYUFBYTtnQkFHbkMsT0FBTztzQkFETixLQUFLO2dCQUtHLE9BQU87c0JBRmYsV0FBVzt1QkFBQyxpQkFBaUI7O3NCQUM3QixZQUFZO3VCQUFDLFNBQVM7Z0JBSW5CLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptVGFibGVDZWxsU3RhdHVzIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuaW1wb3J0IHsgUHJpem1UZFNlcnZpY2UgfSBmcm9tICcuL3RkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IGB0aFtwcml6bVRkXSwgdGRbcHJpem1UZF1gLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHN0eWxlVXJsczogW2AuL3RkLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuc3RhdHVzJykgcHVibGljIHN0YXR1czogUHJpem1UYWJsZUNlbGxTdGF0dXMgPSAnZGVmYXVsdCc7XG5cbiAgQElucHV0KClcbiAgY29sc3BhbiE6IHN0cmluZyB8IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLl9lZGl0YWJsZWApXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKVxuICByZWFkb25seSBjb250cm9sOiB1bmtub3duO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5jb2xzcGFuJylcbiAgZ2V0IHJlYWxDb2xzcGFuKCk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sc3BhbiA/PyB0aGlzLmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnY29sc3BhbicpID8/IDE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRkU2VydmljZTogUHJpem1UZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxUYWJsZUNlbGxFbGVtZW50PlxuICApIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGRTZXJ2aWNlLmluY3JlbWVudChwYXJzZUludCh0aGlzLnJlYWxDb2xzcGFuLnRvU3RyaW5nKCksIDEwKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZFNlcnZpY2UuZGVjcmVtZW50KHBhcnNlSW50KHRoaXMucmVhbENvbHNwYW4udG9TdHJpbmcoKSwgMTApKTtcbiAgfVxufVxuIl19