import { PrizmShadowType } from '../../directives/shadow';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmCardComponent extends PrizmAbstractTestId {
    shadow: PrizmShadowType;
    private get boxShadow();
    readonly testId_ = "ui_card";
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCardComponent, "prizm-card", never, { "shadow": { "alias": "shadow"; "required": false; }; }, {}, never, ["*"], true, never>;
}
