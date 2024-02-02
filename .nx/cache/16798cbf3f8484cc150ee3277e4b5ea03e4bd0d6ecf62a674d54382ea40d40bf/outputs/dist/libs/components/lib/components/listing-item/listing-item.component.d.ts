import { PrizmAbstractTestId } from '../../abstract/interactive';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmListingItemComponent extends PrizmAbstractTestId {
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    get selected(): BooleanInput;
    set selected(value: BooleanInput);
    private _selected;
    readonly testId_ = "ui_listing_item";
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmListingItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmListingItemComponent, "prizm-listing-item", never, { "disabled": "disabled"; "selected": "selected"; }, {}, never, ["[leftBox]", "*", "[rightBox]"], true, never>;
}
