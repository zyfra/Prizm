import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmSizeM, PrizmSizeS } from '../../../util/size-bigger';
import * as i0 from "@angular/core";
export declare class PrizmProgressBarComponent extends PrizmAbstractTestId {
    color?: string | null;
    trackColor: string | null;
    size: PrizmSizeS | PrizmSizeM;
    readonly testId_ = "ui_progress_bar";
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmProgressBarComponent, "progress[prizmProgressBar]", never, { "color": { "alias": "color"; "required": false; }; "trackColor": { "alias": "trackColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
