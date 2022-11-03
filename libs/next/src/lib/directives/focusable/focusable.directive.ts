import { Directive, HostBinding, Input } from '@angular/core';

/**
 * Abstraction over `tabindex`
 */
@Directive({
    selector: '[pzmFocusable]',
})
export class PrizmFocusableDirective {
    /**
     * Element can be focused with keyboard
     */
    @Input('pzmFocusable')
    focusable = true;

    @HostBinding('tabIndex')
    get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }
}
