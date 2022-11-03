import { Directive, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PZM_DROPDOWN_CONTROLLER } from './dropdown-controller.token';
import { pzmDefaultProp } from '../../decorators';
import { PZM_DROPDOWN_DEFAULT_MAX_HEIGHT, PZM_DROPDOWN_DEFAULT_MIN_HEIGHT } from './dropdown-controller.const';
import { Subject } from 'rxjs';
import { PrizmHorizontalDirection } from '../../types/direction';
import { PrizmDropdownWidthT } from '../../types/dropdown-width';

@Directive({
    selector:
        '[pzmDropdownMinHeight], [pzmDropdownMaxHeight], [pzmDropdownAlign], [pzmDropdownLimitWidth]',
    providers: [
        {
            provide: PZM_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => PrizmDropdownControllerDirective),
        },
    ],
})
export class PrizmDropdownControllerDirective implements OnChanges {
    @Input('pzmDropdownMinHeight')
    @pzmDefaultProp()
    minHeight = PZM_DROPDOWN_DEFAULT_MIN_HEIGHT;

    @Input('pzmDropdownAlign')
    @pzmDefaultProp()
    align: PrizmHorizontalDirection = `right`;

    @Input('pzmDropdownLimitWidth')
    @pzmDefaultProp()
    limitWidth: PrizmDropdownWidthT = `auto`;

    @Input('pzmDropdownMaxHeight')
    @pzmDefaultProp()
    maxHeight = PZM_DROPDOWN_DEFAULT_MAX_HEIGHT;

    readonly changes$ = new Subject();

    ngOnChanges(changes: SimpleChanges): void {
      this.changes$.next();
    }
}
