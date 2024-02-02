import { ElementRef } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmSizeS, PrizmSizesXl } from '../../../util/size-bigger';
import * as i0 from "@angular/core";
export declare class PrizmProgressCircleComponent extends PrizmAbstractTestId {
    private readonly userAgent;
    private readonly windowRef;
    private readonly elementRef;
    private readonly progressCircle;
    value: number;
    max: number;
    color: string | null;
    trackColor: string | null;
    size: PrizmSizeS | PrizmSizesXl;
    get progressPercentage(): number;
    get oldEdgeRadiusFallback(): number | null;
    readonly testId_ = "ui_progress_circle";
    constructor(userAgent: string, windowRef: Window, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmProgressCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmProgressCircleComponent, "prizm-progress-circle", never, { "value": { "alias": "value"; "required": false; }; "max": { "alias": "max"; "required": false; }; "color": { "alias": "color"; "required": false; }; "trackColor": { "alias": "trackColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
