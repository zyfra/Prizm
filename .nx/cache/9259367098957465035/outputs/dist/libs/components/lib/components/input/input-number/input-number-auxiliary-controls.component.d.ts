import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputNumberComponent } from './input-number.component';
import * as i0 from "@angular/core";
export declare class PrizmInputNumberDefaultControlsComponent {
    private readonly layout;
    inputNumber: PrizmInputNumberComponent;
    constructor(layout: PrizmInputLayoutComponent);
    get size(): number;
    increment(): void;
    decrement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputNumberDefaultControlsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputNumberDefaultControlsComponent, "prizm-input-number-auxiliary-controls", never, { "inputNumber": { "alias": "inputNumber"; "required": false; }; }, {}, never, never, true, never>;
}
