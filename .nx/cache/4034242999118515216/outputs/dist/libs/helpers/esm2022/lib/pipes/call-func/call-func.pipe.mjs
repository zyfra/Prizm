import { ChangeDetectorRef, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Этот пайп позволяет снизить кол-во вызовов функций которые вызываются из шаблона,
 * когда входящие аргументы не меняются.
 *
 * @button <ng-container *ngIf="firstArg | prizmCallFunc : someMethod">SomeValue</ng-container>
 * @button <ng-container>{{firstArg | prizmCallFunc : someMethod : secondArg}}</ng-container>
 */
export class PrizmCallFuncPipe {
    // with Ivy you can inject EmbeddedViewRef directly
    constructor(cd) {
        this.cd = cd;
        this.context = this.cd.context;
    }
    transform(param, fn, ...params) {
        return fn.apply(this.context, [param, ...params]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCallFuncPipe, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmCallFuncPipe, isStandalone: true, name: "prizmCallFunc" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCallFuncPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmCallFunc', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const CallFuncPipe = PrizmCallFuncPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC1mdW5jLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2hlbHBlcnMvc3JjL2xpYi9waXBlcy9jYWxsLWZ1bmMvY2FsbC1mdW5jLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU14Rjs7Ozs7O0dBTUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLG1EQUFtRDtJQUNuRCxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxFQUF5QixDQUFDLE9BQU8sQ0FBQztJQUN6RCxDQUFDO0lBRU0sU0FBUyxDQUFzQixLQUFjLEVBQUUsRUFBSyxFQUFFLEdBQUcsTUFBZTtRQUM3RSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs4R0FWVSxpQkFBaUI7NEdBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFEN0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTs7QUFhakQ7OztLQUdLO0FBQ0wsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVtYmVkZGVkVmlld1JlZiwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIE1ldGhvZDxUID0gYW55PiA9ICh0aGlzOiBULCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xudHlwZSBIZWFkPFQgZXh0ZW5kcyBNZXRob2Q+ID0gUGFyYW1ldGVyczxUPlswXTtcbnR5cGUgVGFpbDxUIGV4dGVuZHMgTWV0aG9kPiA9IFQgZXh0ZW5kcyAoZmlyc3Q6IGFueSwgLi4ucmVzdDogaW5mZXIgUikgPT4gYW55ID8gUiA6IG5ldmVyO1xuXG4vKipcbiAqINCt0YLQvtGCINC/0LDQudC/INC/0L7Qt9Cy0L7Qu9GP0LXRgiDRgdC90LjQt9C40YLRjCDQutC+0Lst0LLQviDQstGL0LfQvtCy0L7QsiDRhNGD0L3QutGG0LjQuSDQutC+0YLQvtGA0YvQtSDQstGL0LfRi9Cy0LDRjtGC0YHRjyDQuNC3INGI0LDQsdC70L7QvdCwLFxuICog0LrQvtCz0LTQsCDQstGF0L7QtNGP0YnQuNC1INCw0YDQs9GD0LzQtdC90YLRiyDQvdC1INC80LXQvdGP0Y7RgtGB0Y8uXG4gKlxuICogQGJ1dHRvbiA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlyc3RBcmcgfCBwcml6bUNhbGxGdW5jIDogc29tZU1ldGhvZFwiPlNvbWVWYWx1ZTwvbmctY29udGFpbmVyPlxuICogQGJ1dHRvbiA8bmctY29udGFpbmVyPnt7Zmlyc3RBcmcgfCBwcml6bUNhbGxGdW5jIDogc29tZU1ldGhvZCA6IHNlY29uZEFyZ319PC9uZy1jb250YWluZXI+XG4gKi9cbkBQaXBlKHsgbmFtZTogJ3ByaXptQ2FsbEZ1bmMnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgUHJpem1DYWxsRnVuY1BpcGU8Qz4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDO1xuXG4gIC8vIHdpdGggSXZ5IHlvdSBjYW4gaW5qZWN0IEVtYmVkZGVkVmlld1JlZiBkaXJlY3RseVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY29udGV4dCA9ICh0aGlzLmNkIGFzIEVtYmVkZGVkVmlld1JlZjxDPikuY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm08TSBleHRlbmRzIE1ldGhvZDxDPj4ocGFyYW06IEhlYWQ8TT4sIGZuOiBNLCAuLi5wYXJhbXM6IFRhaWw8TT4pOiBSZXR1cm5UeXBlPE0+IHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcy5jb250ZXh0LCBbcGFyYW0sIC4uLnBhcmFtc10pO1xuICB9XG59XG4vKipcbiAqIFRPRE8gdjU6IHJlbW92ZVxuICogQGRlcHJlY2F0ZWRcbiAqICovXG5leHBvcnQgY29uc3QgQ2FsbEZ1bmNQaXBlID0gUHJpem1DYWxsRnVuY1BpcGU7XG4iXX0=