import { AfterViewInit, Directive, Inject, Input } from '@angular/core';

import { PRIZM_AUTOFOCUS_HANDLER, PRIZM_AUTOFOCUS_PROVIDERS, PrizmAutofocusHandler } from './autofocus.options';

@Directive({
    selector: `[prizmAutoFocus]`,
    providers: PRIZM_AUTOFOCUS_PROVIDERS,
})
export class PrizmAutoFocusDirective implements AfterViewInit {
    @Input()
    public autoFocus = true;

    constructor(
        @Inject(PRIZM_AUTOFOCUS_HANDLER) private readonly handler: PrizmAutofocusHandler,
    ) {}

    public ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
}
