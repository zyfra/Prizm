import * as i0 from "@angular/core";
export declare abstract class PrizmAbstractTestId {
    protected testIdPostfix?: string;
    get testId(): string;
    set testId(value: string);
    get generateManeTestId(): string;
    protected testId_: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmAbstractTestId, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmAbstractTestId, never, never, { "testId": "testId"; }, {}, never, never, false, never>;
}
