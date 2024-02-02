import { PipeTransform } from '@angular/core';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmDayOfWeek } from '../../@core/enums/day-of-week';
import * as i0 from "@angular/core";
export declare class PrizmCalendarSheetPipe implements PipeTransform {
    private readonly firstDayOfWeek;
    private currentMonth;
    private currentSheet;
    constructor(firstDayOfWeek: PrizmDayOfWeek);
    transform(month: PrizmMonth, showAdjacentDays?: boolean): ReadonlyArray<readonly PrizmDay[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCalendarSheetPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmCalendarSheetPipe, "prizmCalendarSheet", false>;
}
