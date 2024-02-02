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
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmDropdownControllerDirective, "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", never, { "minHeight": { "alias": "prizmDropdownMinHeight"; "required": false; }; "align": { "alias": "prizmDropdownAlign"; "required": false; }; "limitWidth": { "alias": "prizmDropdownLimitWidth"; "required": false; }; "maxHeight": { "alias": "prizmDropdownMaxHeight"; "required": false; }; }, {}, never, never, false, never>;
}
