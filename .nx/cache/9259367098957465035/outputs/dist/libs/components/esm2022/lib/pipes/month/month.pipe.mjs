import { Inject, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRIZM_MONTHS } from '../../tokens/i18n';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
export class PrizmMonthPipe {
    constructor(months$) {
        this.months$ = months$;
    }
    transform({ month }) {
        return this.months$.pipe(map(months => months[month]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmMonthPipe, deps: [{ token: PRIZM_MONTHS }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmMonthPipe, name: "prizmMonth" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmMonthPipe, decorators: [{
            type: Pipe,
            args: [{ name: `prizmMonth` }]
        }], ctorParameters: function () { return [{ type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_MONTHS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL3BpcGVzL21vbnRoL21vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBR2pELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW1ELE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBQUcsQ0FBQztJQUU3RSxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQWM7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OEdBTFUsY0FBYyxrQkFDTCxZQUFZOzRHQURyQixjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7MEJBRWIsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcbmltcG9ydCB7IFBSSVpNX01PTlRIUyB9IGZyb20gJy4uLy4uL3Rva2Vucy9pMThuJztcblxuQFBpcGUoeyBuYW1lOiBgcHJpem1Nb250aGAgfSlcbmV4cG9ydCBjbGFzcyBQcml6bU1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBSSVpNX01PTlRIUykgcHJpdmF0ZSByZWFkb25seSBtb250aHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPikge31cblxuICBwdWJsaWMgdHJhbnNmb3JtKHsgbW9udGggfTogUHJpem1Nb250aCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMubW9udGhzJC5waXBlKG1hcChtb250aHMgPT4gbW9udGhzW21vbnRoXSkpO1xuICB9XG59XG4iXX0=