import { EventEmitter } from '@angular/core';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PrizmDayRange, PrizmYear } from '../../../@core/date-time';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmInteractiveState } from '../../../directives';
import { PrizmRangeState } from '../../../@core/enums/range-state';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmPrimitiveYearPickerComponent extends PrizmAbstractTestId {
    private hoveredItem;
    private pressedItem;
    private readonly currentYear;
    readonly ITEMS_IN_ROW = 3;
    value: PrizmMonthRange | PrizmYear | PrizmDayRange | null;
    initialItem: PrizmYear;
    min: PrizmYear;
    max: PrizmYear;
    disabledItemHandler: PrizmBooleanHandler<number>;
    readonly yearClick: EventEmitter<PrizmYear>;
    get isSingle(): boolean;
    readonly testId_ = "ui_primitive_year_picker";
    get rows(): number;
    get calculatedMin(): number;
    get calculatedMax(): number;
    isRange(item: PrizmMonthRange | PrizmYear): item is PrizmMonthRange;
    scrollItemIntoView(item: number): boolean;
    getItem(rowIndex: number, colIndex: number): number;
    getItemState(item: number): PrizmInteractiveState | null;
    getItemRange(item: number): PrizmRangeState | null;
    itemIsToday(item: number): boolean;
    /**
     * not support interval
     * */
    itemIsInterval(item: number): boolean;
    /**
     * TODO with support intervals
     * */
    itemIsIntervalNew(item: number): boolean;
    onItemHovered(hovered: boolean, item: number): void;
    onItemPressed(pressed: boolean, item: number): void;
    onItemClick($event: MouseEvent, item: number): void;
    private updateHoveredItem;
    private updatePressedItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPrimitiveYearPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmPrimitiveYearPickerComponent, "prizm-primitive-year-picker", never, { "value": { "alias": "value"; "required": false; }; "initialItem": { "alias": "initialItem"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; }, { "yearClick": "yearClick"; }, never, never, true, never>;
}
