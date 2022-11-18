import { Directive, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PRIZM_DROPDOWN_CONTROLLER } from './dropdown-controller.token';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT, PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT } from './dropdown-controller.const';
import { Subject } from 'rxjs';
import { PrizmHorizontalDirection } from '../../types/direction';
import { PrizmDropdownWidthT } from '../../types/dropdown-width';

@Directive({
    selector:
        '[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]',
    providers: [
        {
            provide: PRIZM_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => PrizmDropdownControllerDirective),
        },
    ],
})
export class PrizmDropdownControllerDirective implements OnChanges {
    @Input('prizmDropdownMinHeight')
    @prizmDefaultProp()
    minHeight = PRIZM_DROPDOWN_DEFAULT_MIN_HEIGHT;

    @Input('prizmDropdownAlign')
    @prizmDefaultProp()
    align: PrizmHorizontalDirection = `right`;

    @Input('prizmDropdownLimitWidth')
    @prizmDefaultProp()
    limitWidth: PrizmDropdownWidthT = `auto`;

    @Input('prizmDropdownMaxHeight')
    @prizmDefaultProp()
    maxHeight = PRIZM_DROPDOWN_DEFAULT_MAX_HEIGHT;

    readonly changes$ = new Subject();

    ngOnChanges(changes: SimpleChanges): void {
      this.changes$.next();
    }
}
