import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmNavigationMenuToolbarService {
    constructor() {
        this.searchVisible$$ = new BehaviorSubject(false);
        this.searchValue$$ = new BehaviorSubject('');
        this.viewMode$$ = new BehaviorSubject('hierarchy');
        this.closeAll$ = new Subject();
        this.searchVisible$ = this.searchVisible$$.asObservable();
        this.searchState$ = combineLatest([this.searchVisible$$, this.searchValue$$]).pipe(map(([enabled, value]) => ({ enabled, value })));
        this.viewMode$ = this.viewMode$$.asObservable();
    }
    changeSearchValue(searchValue) {
        this.searchValue$$.next(searchValue);
    }
    toggleSearch() {
        const newValue = !this.searchVisible$$.value;
        this.searchVisible$$.next(newValue);
        if (!newValue) {
            this.searchValue$$.next('');
        }
    }
    changeViewMode(viewMode) {
        const newValue = this.viewMode$$.value === viewMode ? 'hierarchy' : viewMode;
        this.viewMode$$.next(newValue);
    }
    closeAll() {
        this.closeAll$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuToolbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuToolbarService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuToolbarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi1tZW51LXRvb2xiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1tZW51L3NlcnZpY2VzL3ByaXptLW5hdmlnYXRpb24tbWVudS10b29sYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUdyQyxNQUFNLE9BQU8saUNBQWlDO0lBRDlDO1FBRVUsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUN0RCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBVyxXQUFXLENBQUMsQ0FBQztRQUVoRSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVoQyxtQkFBYyxHQUF3QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFFLGlCQUFZLEdBR1AsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUVGLGNBQVMsR0FBeUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQXVCbEU7SUFyQlEsaUJBQWlCLENBQUMsV0FBbUI7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFlBQVk7UUFDakIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRU0sY0FBYyxDQUFDLFFBQWtCO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7OEdBdENVLGlDQUFpQztrSEFBakMsaUNBQWlDOzsyRkFBakMsaUNBQWlDO2tCQUQ3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBWaWV3TW9kZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZWFyY2hWaXNpYmxlJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZSQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSB2aWV3TW9kZSQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWaWV3TW9kZT4oJ2hpZXJhcmNoeScpO1xuXG4gIGNsb3NlQWxsJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgc2VhcmNoVmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNlYXJjaFZpc2libGUkJC5hc09ic2VydmFibGUoKTtcblxuICBzZWFyY2hTdGF0ZSQ6IE9ic2VydmFibGU8e1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfT4gPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnNlYXJjaFZpc2libGUkJCwgdGhpcy5zZWFyY2hWYWx1ZSQkXSkucGlwZShcbiAgICBtYXAoKFtlbmFibGVkLCB2YWx1ZV0pID0+ICh7IGVuYWJsZWQsIHZhbHVlIH0pKVxuICApO1xuXG4gIHZpZXdNb2RlJDogT2JzZXJ2YWJsZTxWaWV3TW9kZT4gPSB0aGlzLnZpZXdNb2RlJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHVibGljIGNoYW5nZVNlYXJjaFZhbHVlKHNlYXJjaFZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlJCQubmV4dChzZWFyY2hWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VhcmNoKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gIXRoaXMuc2VhcmNoVmlzaWJsZSQkLnZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVmlzaWJsZSQkLm5leHQobmV3VmFsdWUpO1xuXG4gICAgaWYgKCFuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSQkLm5leHQoJycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWaWV3TW9kZSh2aWV3TW9kZTogVmlld01vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmlld01vZGUkJC52YWx1ZSA9PT0gdmlld01vZGUgPyAnaGllcmFyY2h5JyA6IHZpZXdNb2RlO1xuICAgIHRoaXMudmlld01vZGUkJC5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==