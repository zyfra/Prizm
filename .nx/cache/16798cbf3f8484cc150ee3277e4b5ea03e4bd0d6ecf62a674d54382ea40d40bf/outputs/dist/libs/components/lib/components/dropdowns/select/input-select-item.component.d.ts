import { PrizmSelectInputComponent } from './input-select.component';
import * as i0 from "@angular/core";
export declare class PrizmSelectInputItemComponent<T> {
    item: T;
    readonly parent: PrizmSelectInputComponent<any>;
    isMostRelevant(items: T[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSelectInputItemComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSelectInputItemComponent<any>, "prizm-input-select-item", ["prizmSelectInputItem"], { "item": "item"; }, {}, never, never, true, never>;
}
