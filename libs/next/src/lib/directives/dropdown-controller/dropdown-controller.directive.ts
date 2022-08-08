import { Directive, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ZUI_DROPDOWN_CONTROLLER } from './dropdown-controller.token';
import { zuiDefaultProp } from '../../decorators';
import { ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT, ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT } from './dropdown-controller.const';
import { Subject } from 'rxjs';

@Directive({
    selector:
        '[zuiDropdownMinHeight], [zuiDropdownMaxHeight]',
    providers: [
        {
            provide: ZUI_DROPDOWN_CONTROLLER,
            useExisting: forwardRef(() => ZuiDropdownControllerDirective),
        },
    ],
})
export class ZuiDropdownControllerDirective implements OnChanges {
    @Input('zuiDropdownMinHeight')
    @zuiDefaultProp()
    minHeight = ZUI_DROPDOWN_DEFAULT_MIN_HEIGHT;

    @Input('zuiDropdownMaxHeight')
    @zuiDefaultProp()
    maxHeight = ZUI_DROPDOWN_DEFAULT_MAX_HEIGHT;

    readonly changes$ = new Subject();

    ngOnChanges(changes: SimpleChanges): void {
      this.changes$.next();
    }
}
