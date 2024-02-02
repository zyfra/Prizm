import { OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { PrizmHorizontalDirection } from '../../types/direction';
import { PrizmDropdownWidthT } from '../../types/dropdown-width';
import * as i0 from "@angular/core";
export declare class PrizmDropdownControllerDirective implements OnChanges {
    minHeight: number;
    align: PrizmHorizontalDirection;
    limitWidth: PrizmDropdownWidthT;
    maxHeight: number;
    readonly changes$: Subject<void>;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDropdownControllerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmDropdownControllerDirective, "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", never, { "minHeight": "prizmDropdownMinHeight"; "align": "prizmDropdownAlign"; "limitWidth": "prizmDropdownLimitWidth"; "maxHeight": "prizmDropdownMaxHeight"; }, {}, never, never, false, never>;
}
