import { EventEmitter } from '@angular/core';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PrizmDayRange, PrizmMonth } from '../../../@core/date-time';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmInteractiveState } from '../../../directives';
import { PrizmRangeState } from '../../../@core/enums/range-state';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmPrimitiveMonthPickerComponent extends PrizmAbstractTestId {
    private hoveredItem;
    private pressedItem;
    private readonly currentMonth;
    readonly ITEMS_IN_ROW = 3;
    value: PrizmMonthRange | PrizmMonth | PrizmDayRange | null;
    currentYear: number;
    initialItem: PrizmMonth;
    min: PrizmMonth;
    max: PrizmMonth;
    disabledItemHandler: PrizmBooleanHandler<number>;
    readonly monthClick: EventEmitter<PrizmMonth>;
    get isSingle(): boolean;
    readonly testId_ = "ui_primitive_month_picker";
    get rows(): number;
    isRange(item: PrizmMonthRange | PrizmMonth): item is PrizmMonthRange;
    scrollItemIntoView(item: number): boolean;
    getItem(rowIndex: number, colIndex: number): PrizmMonth;
    getItemState(item: number): PrizmInteractiveState | null;
    getItemRange(item: number): PrizmRangeState | null;
    itemIsToday(item: number): boolean;
    /**
     * not support interval
     * */
    itemIsInterval(item: number): boolean;
    /**
     * TODO add after decided, with support intervals
     * Example
     * */
    itemIsIntervalNew(item: number): boolean;
    onItemHovered(hovered: boolean, item: number): void;
    onItemPressed(pressed: boolean, item: number): void;
    onItemClick($event: MouseEvent, item: number): void;
    private updateHoveredItem;
    private updatePressedItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPrimitiveMonthPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmPrimitiveMonthPickerComponent, "prizm-primitive-month-picker", never, { "value": "value"; "currentYear": "currentYear"; "initialItem": "initialItem"; "min": "min"; "max": "max"; "disabledItemHandler": "disabledItemHandler"; }, { "monthClick": "monthClick"; }, never, never, true, never>;
}
