import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmAnimationOptions } from '../../../animations';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResultDefaultType } from './confirm-dialog.models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmDialogConfirmComponent<DATA = unknown> extends PrizmAbstractTestId {
    private readonly duration;
    readonly close$: Observable<unknown>;
    private readonly destroy$;
    private readonly elRef;
    context: PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions<DATA>>;
    close: () => void;
    get size(): PrizmDialogSize;
    get id(): string;
    get slideInTop(): PrizmAnimationOptions;
    readonly width = "100%";
    readonly testId_ = "ui_form_submit";
    private readonly animation;
    constructor(duration: number, close$: Observable<unknown>, destroy$: PrizmDestroyService, elRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDialogConfirmComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmDialogConfirmComponent<any>, "prizm-confirm-dialog", never, { "context": { "alias": "context"; "required": false; }; "close": { "alias": "close"; "required": false; }; }, {}, never, never, true, never>;
}
