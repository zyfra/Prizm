import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PrizmLetContextService {
    constructor() {
        this.context$$ = new BehaviorSubject(null);
    }
    get context$() {
        return this.context$$.asObservable();
    }
    get context() {
        return this.context$$.value;
    }
    setContext(newContext) {
        this.context$$.next(newContext);
    }
    ngOnDestroy() {
        this.context$$.complete();
        this.context$$.unsubscribe();
    }
}
PrizmLetContextService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmLetContextService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLetContextService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaGVscGVycy9zcmMvbGliL2RpcmVjdGl2ZXMvbGV0L2xldC1jb250ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUduRCxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRW1CLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLENBQUMsQ0FBQztLQWVsRTtJQWRDLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ00sVUFBVSxDQUFDLFVBQWE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O21IQWZVLHNCQUFzQjt1SEFBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1MZXRDb250ZXh0U2VydmljZTxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dCQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUIHwgbnVsbD4obnVsbCk7XG4gIGdldCBjb250ZXh0JCgpOiBPYnNlcnZhYmxlPFQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dCQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldCBjb250ZXh0KCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0JCQudmFsdWU7XG4gIH1cbiAgcHVibGljIHNldENvbnRleHQobmV3Q29udGV4dDogVCk6IHZvaWQge1xuICAgIHRoaXMuY29udGV4dCQkLm5leHQobmV3Q29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZXh0JCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNvbnRleHQkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=