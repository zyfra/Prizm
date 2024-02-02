import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import * as i0 from "@angular/core";
export declare class PrizmInputAllowedSymbolsDirective extends DefaultInputInvalidTextClass {
    prizmInputAllowedSymbols: RegExp | string | string[] | ``;
    block(data: string, event: KeyboardEvent): void | false;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputAllowedSymbolsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputAllowedSymbolsDirective, "[prizmInputAllowedSymbols]", never, { "prizmInputAllowedSymbols": { "alias": "prizmInputAllowedSymbols"; "required": false; }; }, {}, never, never, false, never>;
}
