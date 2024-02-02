import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export declare class PrizmProgressSegmentedComponent extends PrizmAbstractTestId {
    value: number;
    max: number;
    size: 's' | 'm';
    colors: string | readonly string[];
    readonly testId_ = "ui_progress_segmented";
    getActiveColor(index?: number): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmProgressSegmentedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmProgressSegmentedComponent, "prizm-progress-segmented", never, { "value": "value"; "max": "max"; "size": "size"; "colors": "colors"; }, {}, never, never, true, never>;
}
