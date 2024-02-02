import { EventEmitter } from '@angular/core';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PrizmConfirmPopupButton, PrizmConfirmPopupContext, PrizmConfirmPopupOptions } from './confirm-popup-options';
import { PolymorphContent } from '../polymorph';
import { PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import * as i0 from "@angular/core";
export declare class PrizmConfirmPopupDirective<T extends Record<string, unknown>> extends PrizmHintDirective<PrizmConfirmPopupOptions> {
    prizmAutoReposition: PrizmHintOptions['autoReposition'];
    prizmHintDirection: PrizmHintOptions['direction'];
    prizmHintId: string;
    prizmHintShowDelay: PrizmHintOptions['showDelay'];
    prizmHintHideDelay: PrizmHintOptions['hideDelay'];
    size: "m" | "l";
    prizmHintHost: HTMLElement | null;
    completeWith: EventEmitter<unknown>;
    set prizmHint(value: PolymorphContent | null);
    prizmConfirmPopupTitle: string;
    prizmHintContext: Record<string, unknown>;
    prizmHintCanShow: boolean;
    confirmButton?: PrizmConfirmPopupButton | string;
    supportButton?: PrizmConfirmPopupButton | string;
    cancelButton?: PrizmConfirmPopupButton | string;
    prizmHintShowed: EventEmitter<boolean>;
    protected readonly containerComponent: typeof PrizmConfirmPopupContainerComponent;
    protected readonly onHoverActive = false;
    onClick(target: HTMLElement): void;
    protected getContext(): PrizmConfirmPopupContext;
    private generateButton;
    private safeUpdateButtonsWithDefaultStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmConfirmPopupDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmConfirmPopupDirective<any>, "[prizmConfirmPopup]:not(ng-container)", ["prizmConfirmPopup"], { "prizmAutoReposition": "prizmAutoReposition"; "prizmHintDirection": "prizmConfirmPopupDirection"; "prizmHintId": "prizmConfirmPopupId"; "prizmHintShowDelay": "prizmConfirmPopupShowDelay"; "prizmHintHideDelay": "prizmConfirmPopupHideDelay"; "size": "size"; "prizmHintHost": "prizmConfirmPopupHost"; "prizmHint": "prizmConfirmPopup"; "prizmConfirmPopupTitle": "prizmConfirmPopupTitle"; "prizmHintContext": "prizmConfirmPopupContext"; "prizmHintCanShow": "prizmConfirmPopupCanShow"; "confirmButton": "confirmButton"; "supportButton": "supportButton"; "cancelButton": "cancelButton"; }, { "completeWith": "completeWith"; "prizmHintShowed": "prizmConfirmPopupShowed"; }, never, never, false, never>;
}
