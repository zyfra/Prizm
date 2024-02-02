import { Observable } from 'rxjs';
import { PrizmAnimationOptions } from '../../../animations';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmSidebarOptions, PrizmSidebarResultDefaultType } from './sidebar.models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmSidebarComponent<DATA = unknown> extends PrizmAbstractTestId {
    private readonly duration;
    readonly close$: Observable<unknown>;
    private readonly destroy$;
    context: PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>;
    close: () => void;
    get size(): PrizmDialogSize;
    get id(): string;
    get fullWidth(): boolean;
    get fullHeight(): boolean;
    get slideInTop(): PrizmAnimationOptions;
    readonly testId_ = "ui_area--sidebar";
    private readonly animation;
    constructor(duration: number, close$: Observable<unknown>, destroy$: PrizmDestroyService);
    closeSidebar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSidebarComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSidebarComponent<any>, "prizm-sidebar", never, { "context": { "alias": "context"; "required": false; }; "close": { "alias": "close"; "required": false; }; }, {}, never, never, true, never>;
}
