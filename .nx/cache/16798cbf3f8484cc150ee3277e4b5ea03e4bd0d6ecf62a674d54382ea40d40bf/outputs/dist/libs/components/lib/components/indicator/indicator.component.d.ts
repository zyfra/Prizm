import { IndicatorStatus, IndicatorType } from './indicator.models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmIndicatorComponent extends PrizmAbstractTestId {
    type: IndicatorType;
    status: IndicatorStatus;
    readonly testId_ = "ui_indicator";
    readonly iconMap: {
        info: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIndicatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmIndicatorComponent, "prizm-indicator", never, { "type": "type"; "status": "status"; }, {}, never, never, true, never>;
}
/**
 * TODO v5: remove
 * @deprecated
 * */
export declare const IndicatorComponent: typeof PrizmIndicatorComponent;
