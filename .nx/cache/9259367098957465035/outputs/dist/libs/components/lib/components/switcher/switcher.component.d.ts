import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PrizmSwitcherComponent extends PrizmAbstractTestId implements ControlValueAccessor {
    readonly cdRef: ChangeDetectorRef;
    readonly ngControl: NgControl;
    onChange: (v: number) => void;
    onTouched: () => void;
    private selectedSwitcherIdx_;
    size: PrizmSwitcherSize;
    type: PrizmSwitcherType;
    switchers: PrizmSwitcherItem[];
    set selectedSwitcherIdx(idx: number);
    get selectedSwitcherIdx(): number;
    fullWidth: boolean;
    selectedSwitcherIdxChange: EventEmitter<number>;
    readonly testId_ = "ui_switcher";
    constructor(cdRef: ChangeDetectorRef, ngControl: NgControl);
    selectSwitcher(item: PrizmSwitcherItem, idx: number): void;
    writeValue(idx: string): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSwitcherComponent, [null, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSwitcherComponent, "prizm-switcher", never, { "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "switchers": { "alias": "switchers"; "required": false; }; "selectedSwitcherIdx": { "alias": "selectedSwitcherIdx"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, { "selectedSwitcherIdxChange": "selectedSwitcherIdxChange"; }, never, never, true, never>;
}
