import { AfterViewInit, Directive, Inject, Input } from '@angular/core';

import { PZM_AUTOFOCUS_HANDLER, PZM_AUTOFOCUS_PROVIDERS, PzmAutofocusHandler } from './autofocus.options';

@Directive({
    selector: `[pzmAutoFocus]`,
    providers: PZM_AUTOFOCUS_PROVIDERS,
})
export class PzmAutoFocusDirective implements AfterViewInit {
    @Input()
    public autoFocus = true;

    constructor(
        @Inject(PZM_AUTOFOCUS_HANDLER) private readonly handler: PzmAutofocusHandler,
    ) {}

    public ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
}
