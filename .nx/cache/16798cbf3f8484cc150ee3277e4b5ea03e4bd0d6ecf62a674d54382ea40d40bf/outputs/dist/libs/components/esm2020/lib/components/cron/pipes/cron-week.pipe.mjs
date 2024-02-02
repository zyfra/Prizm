import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { prizmCapitalizeFirstLetter } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmCronWeekPipe {
    constructor(locale) {
        this.locale = locale;
        this.datePipe = new DatePipe(this.locale);
    }
    transform(day = 2, format = 'EEEE') {
        const date = new Date(1990, 0, day - 1);
        return prizmCapitalizeFirstLetter(this.datePipe.transform(date, format));
    }
}
PrizmCronWeekPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronWeekPipe, deps: [{ token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmCronWeekPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronWeekPipe, isStandalone: true, name: "prizmCronWeek" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronWeekPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmCronWeek',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi13ZWVrLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24vcGlwZXMvY3Jvbi13ZWVrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTTVELE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBdUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFENUMsYUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNVLENBQUM7SUFDbEQsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU07UUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEMsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFXLENBQUMsQ0FBQztJQUNyRixDQUFDOzs4R0FQVSxpQkFBaUIsa0JBRVIsU0FBUzs0R0FGbEIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSjdCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBR2MsTUFBTTsyQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBMT0NBTEVfSUQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHByaXptQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwcml6bUNyb25XZWVrJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Dcm9uV2Vla1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcmVhZG9ubHkgZGF0ZVBpcGUgPSBuZXcgRGF0ZVBpcGUodGhpcy5sb2NhbGUpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge31cbiAgcHVibGljIHRyYW5zZm9ybShkYXkgPSAyLCBmb3JtYXQgPSAnRUVFRScpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgxOTkwLCAwLCBkYXkgLSAxKTtcblxuICAgIHJldHVybiBwcml6bUNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQpIGFzIHN0cmluZyk7XG4gIH1cbn1cbiJdfQ==