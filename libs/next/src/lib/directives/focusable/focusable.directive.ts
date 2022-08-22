import {Directive, HostBinding, Input} from '@angular/core';

/**
 * Abstraction over `tabindex`
 */
@Directive({
    selector: '[zuiFocusable]',
})
export class ZuiFocusableDirective {
    /**
     * Element can be focused with keyboard
     */
    @Input('zuiFocusable')
    focusable = true;

    @HostBinding('tabIndex')
    get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }
}
