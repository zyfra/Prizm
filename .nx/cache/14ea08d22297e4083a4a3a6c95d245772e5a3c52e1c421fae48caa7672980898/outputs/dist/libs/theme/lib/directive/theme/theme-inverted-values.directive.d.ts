import { OnChanges } from '@angular/core';
import { PrizmThemeInvertedValues } from './model';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';
import * as i0 from "@angular/core";
export declare class PrizmThemeInvertedValuesDirective implements OnChanges {
    readonly themeInvertedValuesService: PrizmThemeInvertedValuesService;
    prizmThemeInvertedValues: PrizmThemeInvertedValues;
    constructor(themeInvertedValuesService: PrizmThemeInvertedValuesService);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThemeInvertedValuesDirective, [{ self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmThemeInvertedValuesDirective, "[prizmThemeInvertedValues]", never, { "prizmThemeInvertedValues": "prizmThemeInvertedValues"; }, {}, never, never, false, never>;
}
