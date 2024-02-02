import { Subject } from 'rxjs';
import { PrizmToastOptions } from './types';
import { Injector } from '@angular/core';
import { PrizmOverlayService } from '../../modules/overlay';
import { PrizmToastService } from './toast.service';
import * as i0 from "@angular/core";
export declare class PrizmToastControl {
    private readonly overlayService;
    private readonly toastService;
    private readonly injector;
    readonly destroy$: Subject<void>;
    constructor(overlayService: PrizmOverlayService, toastService: PrizmToastService, injector: Injector);
    private create;
    private getOverlayPosition;
    init(position: PrizmToastOptions['position']): void;
    private destroy;
    private close;
    private open;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToastControl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmToastControl>;
}
