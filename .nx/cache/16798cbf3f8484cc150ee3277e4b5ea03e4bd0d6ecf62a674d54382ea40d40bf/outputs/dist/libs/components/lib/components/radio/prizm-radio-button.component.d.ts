import { EventEmitter } from '@angular/core';
import { PrizmWrappedFormComponent } from '../../@core/value-accessor/prizm-wrapped-form-component.directive';
import * as i0 from "@angular/core";
export declare class PrizmRadioButtonComponent extends PrizmWrappedFormComponent {
    size: 's' | 'm' | 'l';
    get isDisabled(): boolean;
    value: unknown;
    name: string;
    label: string | null;
    set disabled(isDisabled: boolean);
    clickEvent: EventEmitter<MouseEvent>;
    changeEvent: EventEmitter<Event>;
    focusEvent: EventEmitter<FocusEvent>;
    focusOutEvent: EventEmitter<FocusEvent>;
    blurEvent: EventEmitter<FocusEvent>;
    readonly testId_ = "ui_radio_button";
    onClickEventHandler(event: MouseEvent): void;
    onFocusEventHandler(event: FocusEvent): void;
    onFocusOutEventHandler(event: FocusEvent): void;
    onChangeEventHandler(event: Event): void;
    onBlurEventHandler(event: FocusEvent): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmRadioButtonComponent, "prizm-radio-button", never, { "size": "size"; "value": "value"; "name": "name"; "label": "label"; "disabled": "disabled"; }, { "clickEvent": "clickEvent"; "changeEvent": "changeEvent"; "focusEvent": "focusEvent"; "focusOutEvent": "focusOutEvent"; "blurEvent": "blurEvent"; }, never, never, true, never>;
}
