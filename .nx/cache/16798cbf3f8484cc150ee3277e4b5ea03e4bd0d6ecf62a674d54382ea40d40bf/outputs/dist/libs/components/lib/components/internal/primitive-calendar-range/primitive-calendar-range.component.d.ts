import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmMapper } from '../../../types/mapper';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export declare class PrizmPrimitiveCalendarRangeComponent extends PrizmAbstractTestId implements OnInit {
    disabledItemHandler: PrizmBooleanHandler<PrizmDay>;
    markerHandler: PrizmMarkerHandler;
    defaultViewedMonthFirst: PrizmMonth;
    defaultViewedMonthSecond: PrizmMonth;
    min: PrizmDay;
    max: PrizmDay;
    value: PrizmDayRange | null;
    readonly dayClick: EventEmitter<PrizmDay>;
    readonly testId_ = "ui_primitive_calendar_range";
    hoveredItem: PrizmDay | null;
    userViewedMonthFirst: PrizmMonth;
    userViewedMonthSecond: PrizmMonth;
    constructor(valueChanges: Observable<PrizmDayRange | null> | null, changeDetectorRef: ChangeDetectorRef, destroy$: PrizmDestroyService);
    get cappedUserViewedMonthSecond(): PrizmMonth;
    get cappedUserViewedMonthFirst(): PrizmMonth;
    monthOffset: PrizmMapper<PrizmMonth, PrizmMonth>;
    ngOnInit(): void;
    onSectionFirstViewedMonth(month: PrizmMonth): void;
    onSectionSecondViewedMonth(month: PrizmMonth): void;
    onDayClick(day: PrizmDay): void;
    private setInitialMonths;
    private updatedViewedMonthSecond;
    private updatedViewedMonthFirst;
    private updateViewedMonths;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPrimitiveCalendarRangeComponent, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmPrimitiveCalendarRangeComponent, "prizm-primitive-calendar-range", never, { "disabledItemHandler": "disabledItemHandler"; "markerHandler": "markerHandler"; "defaultViewedMonthFirst": "defaultViewedMonthFirst"; "defaultViewedMonthSecond": "defaultViewedMonthSecond"; "min": "min"; "max": "max"; "value": "value"; }, { "dayClick": "dayClick"; }, never, ["[footerFrom]", "[headerFrom]", "[footerTo]", "[headerTo]"], false, never>;
}
