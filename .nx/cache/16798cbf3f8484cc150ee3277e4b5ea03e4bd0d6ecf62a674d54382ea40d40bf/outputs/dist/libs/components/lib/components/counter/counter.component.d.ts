import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmCounterComponent extends PrizmAbstractTestId {
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    class: string;
    maxValue: number | undefined;
    status: string;
    readonly testId_ = "ui_counter";
    _value: number;
    get hidden(): boolean;
    set value(val: number | undefined);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCounterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCounterComponent, "prizm-counter", never, { "disabled": "disabled"; "class": "class"; "maxValue": "maxValue"; "status": "status"; "value": "value"; }, {}, never, never, true, never>;
}
