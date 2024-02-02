import { ElementRef, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDay, PrizmMonth } from '../../../@core/date-time';
import { PrizmBooleanHandler, PrizmContextWithImplicit, PrizmControlValueTransformer, PrizmDateMode } from '../../../types';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PrizmNamedDay } from '../../../@core/classes/named-day';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import * as i0 from "@angular/core";
export declare class PrizmInputLayoutDateComponent extends PrizmInputNgControl<PrizmDay | null> {
    private readonly dialogService;
    readonly dateFormat: PrizmDateMode;
    readonly dateSeparator: string;
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>;
    readonly nativeElementType = "input-date";
    readonly hasClearButton = true;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    private month;
    mask: any;
    min: PrizmDay;
    placeholder: string;
    max: PrizmDay;
    disabledItemHandler: PrizmBooleanHandler<PrizmDay>;
    markerHandler: PrizmMarkerHandler;
    items: readonly PrizmNamedDay[];
    defaultActiveYearMonth: PrizmMonth;
    extraButtonInjector: Injector;
    readonly testId_ = "ui_input_date";
    readonly width = "auto";
    open: boolean;
    readonly type: PrizmContextWithImplicit<unknown>;
    rightButtons$: BehaviorSubject<PrizmDateButton[]>;
    constructor(injector: Injector, dialogService: PrizmDialogService, dateFormat: PrizmDateMode, dateSeparator: string, dateTexts$: Observable<Record<PrizmDateMode, string>>, valueTransformer: PrizmControlValueTransformer<PrizmDay | null> | null);
    ngOnInit(): void;
    get computedActiveYearMonth(): PrizmMonth;
    get canOpen(): boolean;
    get stringValue(): string;
    get computedMask(): string;
    onValueChange(value: string): void;
    onDayClick(value: PrizmDay): void;
    onMonthChange(month: PrizmMonth): void;
    onOpenChange(open: boolean): void;
    writeValue(value: PrizmDay | null): void;
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    clear(ev: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputLayoutDateComponent, [null, null, { optional: true; }, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputLayoutDateComponent, "prizm-input-layout-date", never, { "min": "min"; "placeholder": "placeholder"; "max": "max"; "disabledItemHandler": "disabledItemHandler"; "markerHandler": "markerHandler"; "items": "items"; "defaultActiveYearMonth": "defaultActiveYearMonth"; "extraButtonInjector": "extraButtonInjector"; }, {}, never, never, true, never>;
}
