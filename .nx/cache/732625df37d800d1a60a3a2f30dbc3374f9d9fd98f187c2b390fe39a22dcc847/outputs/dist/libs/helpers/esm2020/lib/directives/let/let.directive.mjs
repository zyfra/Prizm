import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmLetContextService } from './let-context.service';
import * as i0 from "@angular/core";
import * as i1 from "./let-context.service";
/**
 * Это директива позволяет повторно использовать вычисленное значение в нескольких местах в шаблоне,
 * чтобы избежать пересчета геттеров или множества асинхронных каналов.
 *
 * @button <ng-container *prizmLet="{items: items$ | async, center: center} as $"> {{$.items?.count}} {{$.center}}</ng-container>
 * @button <ng-container *prizmLet="queryParams.isMap$ | async as isMap">{{isMap}}</ng-container>
 */
export class PrizmLetDirective {
    get context() {
        return this.contextService.context;
    }
    get context$() {
        return this.contextService.context$;
    }
    constructor(templateRef, viewContainer, contextService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.contextService = contextService;
        this.ctx = { $implicit: null, prizmLet: null };
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
    }
    set init(newContext) {
        this.updateContext(newContext);
    }
    ngOnDestroy() {
        this.viewContainer.clear();
        if (this.viewRef) {
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }
    updateContext(newContext) {
        this.ctx.$implicit = this.ctx.prizmLet = newContext;
        this.contextService.setContext(newContext);
        if (this.viewRef) {
            this.viewRef.markForCheck();
        }
    }
}
PrizmLetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.PrizmLetContextService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmLetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmLetDirective, isStandalone: true, selector: "[prizmLet]", inputs: { init: ["prizmLet", "init"] }, providers: [PrizmLetContextService], exportAs: ["prizmLet"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmLet]',
                    exportAs: 'prizmLet',
                    standalone: true,
                    providers: [PrizmLetContextService],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.PrizmLetContextService }]; }, propDecorators: { init: [{
                type: Input,
                args: ['prizmLet']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaGVscGVycy9zcmMvbGliL2RpcmVjdGl2ZXMvbGV0L2xldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUFhLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBUS9EOzs7Ozs7R0FNRztBQU9ILE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsWUFDVSxXQUF1QyxFQUN2QyxhQUErQixFQUMvQixjQUF5QztRQUZ6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBNEI7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUEyQjtRQU1sQyxRQUFHLEdBQWtCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFbEUsWUFBTyxHQUEwQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUM1RixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7SUFWQyxDQUFDO0lBQ0osSUFBdUIsSUFBSSxDQUFDLFVBQWE7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBU00sV0FBVztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUFhO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7OzhHQXJDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixpR0FGakIsQ0FBQyxzQkFBc0IsQ0FBQzsyRkFFeEIsaUJBQWlCO2tCQU43QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNwQztzS0Fhd0IsSUFBSTtzQkFBMUIsS0FBSzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUxldENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9sZXQtY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIExldENvbnRleHQ8VD4ge1xuICAkaW1wbGljaXQ6IFQgfCBudWxsO1xuICBwcml6bUxldDogVCB8IG51bGw7XG59XG5cbi8qKlxuICog0K3RgtC+INC00LjRgNC10LrRgtC40LLQsCDQv9C+0LfQstC+0LvRj9C10YIg0L/QvtCy0YLQvtGA0L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LLRi9GH0LjRgdC70LXQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INCyINC90LXRgdC60L7Qu9GM0LrQuNGFINC80LXRgdGC0LDRhSDQsiDRiNCw0LHQu9C+0L3QtSxcbiAqINGH0YLQvtCx0Ysg0LjQt9Cx0LXQttCw0YLRjCDQv9C10YDQtdGB0YfQtdGC0LAg0LPQtdGC0YLQtdGA0L7QsiDQuNC70Lgg0LzQvdC+0LbQtdGB0YLQstCwINCw0YHQuNC90YXRgNC+0L3QvdGL0YUg0LrQsNC90LDQu9C+0LIuXG4gKlxuICogQGJ1dHRvbiA8bmctY29udGFpbmVyICpwcml6bUxldD1cIntpdGVtczogaXRlbXMkIHwgYXN5bmMsIGNlbnRlcjogY2VudGVyfSBhcyAkXCI+IHt7JC5pdGVtcz8uY291bnR9fSB7eyQuY2VudGVyfX08L25nLWNvbnRhaW5lcj5cbiAqIEBidXR0b24gPG5nLWNvbnRhaW5lciAqcHJpem1MZXQ9XCJxdWVyeVBhcmFtcy5pc01hcCQgfCBhc3luYyBhcyBpc01hcFwiPnt7aXNNYXB9fTwvbmctY29udGFpbmVyPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1MZXRdJyxcbiAgZXhwb3J0QXM6ICdwcml6bUxldCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1ByaXptTGV0Q29udGV4dFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUxldERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGdldCBjb250ZXh0KCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0O1xuICB9XG4gIGdldCBjb250ZXh0JCgpOiBPYnNlcnZhYmxlPFQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dFNlcnZpY2UuY29udGV4dCQ7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TGV0Q29udGV4dDxUPj4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IFByaXptTGV0Q29udGV4dFNlcnZpY2U8VD5cbiAgKSB7fVxuICBASW5wdXQoJ3ByaXptTGV0Jykgc2V0IGluaXQobmV3Q29udGV4dDogVCkge1xuICAgIHRoaXMudXBkYXRlQ29udGV4dChuZXdDb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBMZXRDb250ZXh0PFQ+ID0geyAkaW1wbGljaXQ6IG51bGwsIHByaXptTGV0OiBudWxsIH07XG5cbiAgcHJpdmF0ZSB2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8TGV0Q29udGV4dDxUPj4gfCBudWxsID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICB0aGlzLnRlbXBsYXRlUmVmLFxuICAgIHRoaXMuY3R4XG4gICk7XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIGlmICh0aGlzLnZpZXdSZWYpIHtcbiAgICAgIHRoaXMudmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnZpZXdSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29udGV4dChuZXdDb250ZXh0OiBUKTogdm9pZCB7XG4gICAgdGhpcy5jdHguJGltcGxpY2l0ID0gdGhpcy5jdHgucHJpem1MZXQgPSBuZXdDb250ZXh0O1xuICAgIHRoaXMuY29udGV4dFNlcnZpY2Uuc2V0Q29udGV4dChuZXdDb250ZXh0KTtcbiAgICBpZiAodGhpcy52aWV3UmVmKSB7XG4gICAgICB0aGlzLnZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=