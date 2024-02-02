import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PolymorphContent, PrizmHintDirective, PrizmHintOptions } from '../../../directives';
import { prizmSwitcherHint } from '../switcher.interface';
import * as i0 from "@angular/core";
export declare class PrizmSwitcherHintDirective implements OnInit, OnChanges, OnDestroy {
    readonly prizmHint_: PrizmHintDirective<PrizmHintOptions, import("../../../directives").PrizmHintContext>;
    content: PolymorphContent | null;
    options: Partial<PrizmHintOptions> | undefined;
    set prizmSwitcherHint(hintData: prizmSwitcherHint | undefined);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private updateHint;
    private hintSyncChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSwitcherHintDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmSwitcherHintDirective, "[prizmSwitcherHint]", never, { "prizmSwitcherHint": "prizmSwitcherHint"; }, {}, never, never, true, never>;
}
