import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { prizmCapitalizeFirstLetter } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmCronMonthPipe {
    constructor(locale) {
        this.locale = locale;
        this.datePipe = new DatePipe(this.locale);
    }
    transform(month, day = 1, format = 'LLLL') {
        const date = new Date();
        date.setMonth(month ?? 1, day);
        return prizmCapitalizeFirstLetter(this.datePipe.transform(date, format));
    }
}
PrizmCronMonthPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronMonthPipe, deps: [{ token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmCronMonthPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronMonthPipe, isStandalone: true, name: "prizmCronMonth" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronMonthPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmCronMonth',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1tb250aC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uL3BpcGVzL2Nyb24tbW9udGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNNUQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUF1QyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUQ1QyxhQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ1UsQ0FBQztJQUNsRCxTQUFTLENBQUMsS0FBYSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU07UUFDdEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFXLENBQUMsQ0FBQztJQUNyRixDQUFDOzsrR0FQVSxrQkFBa0Isa0JBRVQsU0FBUzs2R0FGbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBSjlCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFHYyxNQUFNOzJCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1DYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ByaXptQ3Jvbk1vbnRoJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Dcm9uTW9udGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHJlYWRvbmx5IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKHRoaXMubG9jYWxlKTtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcpIHt9XG4gIHB1YmxpYyB0cmFuc2Zvcm0obW9udGg6IG51bWJlciwgZGF5ID0gMSwgZm9ybWF0ID0gJ0xMTEwnKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldE1vbnRoKG1vbnRoID8/IDEsIGRheSk7XG4gICAgcmV0dXJuIHByaXptQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGZvcm1hdCkgYXMgc3RyaW5nKTtcbiAgfVxufVxuIl19