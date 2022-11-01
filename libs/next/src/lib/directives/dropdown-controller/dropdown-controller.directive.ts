import { Directive, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ZUI_DROPDOWN_CONTROLLER } from './dropdown-controller.token';
import { pzmDefaultProp } from '../../decorators';
import { ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT, ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT } from './dropdown-controller.const';
import { Subject } from 'rxjs';
import { PzmHorizontalDirection } from '../../types/direction';
import { ZuiDropdownWidthT } from '../../types/dropdown-width';

@Directive({
    selector:
        '[zuiDropdownMinHeight], [zuiDropdownMaxHeight], [zuiDropdownAlign], [zuiDropdownLimitWidth]',
    providers: [
        {
            provide: ZUI_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => ZuiDropdownControllerDirective),
        },
    ],
})
export class ZuiDropdownControllerDirective implements OnChanges {
    @Input('zuiDropdownMinHeight')
    @pzmDefaultProp()
    minHeight = ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT;

    @Input('zuiDropdownAlign')
    @pzmDefaultProp()
    align: PzmHorizontalDirection = `right`;

    @Input('zuiDropdownLimitWidth')
    @pzmDefaultProp()
    limitWidth: ZuiDropdownWidthT = `auto`;

    @Input('zuiDropdownMaxHeight')
    @pzmDefaultProp()
    maxHeight = ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT;

    readonly changes$ = new Subject();

    ngOnChanges(changes: SimpleChanges): void {
      this.changes$.next();
    }
}
