import { EventEmitter } from '@angular/core';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PolymorphContent } from '../polymorph';
import { PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import * as i0 from "@angular/core";
export declare class PrizmTooltipDirective extends PrizmHintDirective {
    prizmAutoReposition: PrizmHintOptions['autoReposition'];
    prizmHintDirection: PrizmHintOptions['direction'];
    prizmHintId: string;
    prizmHintShowDelay: PrizmHintOptions['showDelay'];
    prizmHintHideDelay: PrizmHintOptions['hideDelay'];
    prizmHintHost: HTMLElement | null;
    prizmHintContext: {};
    prizmHintCanShow: boolean;
    set prizmHint(value: PolymorphContent | null);
    prizmHintShowed: EventEmitter<boolean>;
    protected readonly containerComponent: typeof PrizmTooltipContainerComponent;
    protected readonly onHoverActive = false;
    protected clickedInside: boolean;
    onClick(target: HTMLElement): void;
    closeOnEsc(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTooltipDirective, "[prizmTooltip]:not(ng-container)", ["prizmTooltip"], { "prizmAutoReposition": { "alias": "prizmAutoReposition"; "required": false; }; "prizmHintDirection": { "alias": "prizmTooltipDirection"; "required": false; }; "prizmHintId": { "alias": "prizmTooltipId"; "required": false; }; "prizmHintShowDelay": { "alias": "prizmTooltipShowDelay"; "required": false; }; "prizmHintHideDelay": { "alias": "prizmTooltipHideDelay"; "required": false; }; "prizmHintHost": { "alias": "prizmTooltipHost"; "required": false; }; "prizmHintContext": { "alias": "prizmTooltipContext"; "required": false; }; "prizmHintCanShow": { "alias": "prizmTooltipCanShow"; "required": false; }; "prizmHint": { "alias": "prizmTooltip"; "required": false; }; }, { "prizmHintShowed": "prizmTooltipShowed"; }, never, never, false, never>;
}
