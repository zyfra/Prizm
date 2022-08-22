import { AfterViewInit, Directive, Inject, Input } from '@angular/core';

import { ZUI_AUTOFOCUS_HANDLER, ZUI_AUTOFOCUS_PROVIDERS, ZuiAutofocusHandler } from './autofocus.options';

@Directive({
    selector: `[zuiAutoFocus]`,
    providers: ZUI_AUTOFOCUS_PROVIDERS,
})
export class ZuiAutoFocusDirective implements AfterViewInit {
    @Input()
    public autoFocus = true;

    constructor(
        @Inject(ZUI_AUTOFOCUS_HANDLER) private readonly handler: ZuiAutofocusHandler,
    ) {}

    public ngAfterViewInit(): void {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
}
