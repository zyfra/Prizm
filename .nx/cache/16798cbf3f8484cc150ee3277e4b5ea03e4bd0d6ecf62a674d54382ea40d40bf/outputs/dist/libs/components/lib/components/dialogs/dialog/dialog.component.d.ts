import { Observable } from 'rxjs';
import { PrizmAnimationOptions } from '../../../animations';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogButton, PrizmDialogOptions, PrizmDialogSize } from './dialog.models';
import { PolymorphContent } from '../../../directives';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmDialogComponent<O = unknown, DATA = unknown> extends PrizmAbstractTestId {
    private readonly duration;
    readonly close$: Observable<unknown>;
    private readonly destroy$;
    context: PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>;
    close: () => void;
    get size(): PrizmDialogSize;
    get id(): string;
    get slideInTop(): PrizmAnimationOptions;
    readonly testId_ = "ui_overlay";
    readonly width = "100%";
    get isFooterArray(): boolean;
    get footer(): PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>> | PrizmDialogButton<O, PrizmDialogOptions<O, DATA>>[];
    private readonly animation;
    constructor(duration: number, close$: Observable<unknown>, destroy$: PrizmDestroyService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDialogComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmDialogComponent<any, any>, "prizm-dialog", never, { "context": "context"; "close": "close"; }, {}, never, never, true, never>;
}
