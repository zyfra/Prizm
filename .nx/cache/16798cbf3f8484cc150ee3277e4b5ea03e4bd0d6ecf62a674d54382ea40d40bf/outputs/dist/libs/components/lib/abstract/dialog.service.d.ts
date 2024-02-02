import { Injector, Type } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PrizmBaseDialogContext, PrizmDialogBaseOptions } from '../components/dialogs/dialog/dialog.models';
import { PolymorphContent, PrizmOverscrollService } from '../directives';
import { PrizmOverlayControl, PrizmOverlayGlobalPosition, PrizmOverlayService, PrizmOverlaySlidePosition } from '../modules/overlay';
import { PrizmOverlayConfig } from '../modules/overlay/models';
import * as i0 from "@angular/core";
export declare abstract class AbstractPrizmDialogService<T extends PrizmDialogBaseOptions, O = unknown, DATA = unknown> {
    protected abstract readonly component: Type<unknown>;
    protected abstract readonly defaultOptions: T;
    protected readonly overlayService: PrizmOverlayService;
    protected readonly overscrollService: PrizmOverscrollService;
    protected constructor(injector: Injector);
    open<O = unknown, DATA = unknown>(content: PolymorphContent<PrizmBaseDialogContext<O>> | unknown, options: Partial<T>, cb?: (data: {
        control: PrizmOverlayControl;
        dialog: PrizmBaseDialogContext<any, any>;
        observer: Observer<O>;
        destroy$: Observable<void>;
    }) => void, config?: {
        injector?: Injector;
    }): Observable<O>;
    protected getConfig(dialog: PrizmBaseDialogContext<any, any>): Partial<PrizmOverlayConfig>;
    protected getPosition(dialog: PrizmBaseDialogContext<any, any>): PrizmOverlayGlobalPosition | PrizmOverlaySlidePosition | PrizmOverlayGlobalPosition;
    private setOverscrollMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmDialogService<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AbstractPrizmDialogService<any, any, any>>;
}
