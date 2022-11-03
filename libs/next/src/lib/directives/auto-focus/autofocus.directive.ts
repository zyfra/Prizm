import { AfterViewInit, Directive, Inject, Input } from '@angular/core';

import { PZM_AUTOFOCUS_HANDLER, PZM_AUTOFOCUS_PROVIDERS, PrizmAutofocusHandler } from './autofocus.options';

@Directive({
    selector: `[pzmAutoFocus]`,
    providers: PZM_AUTOFOCUS_PROVIDERS,
})
export class PrizmAutoFocusDirective implements AfterViewInit {
    @Input()
    public autoFocus = true;

    constructor(
        @Inject(PZM_AUTOFOCUS_HANDLER) private readonly handler: PrizmAutofocusHandler,
    ) {}

    public ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
}
