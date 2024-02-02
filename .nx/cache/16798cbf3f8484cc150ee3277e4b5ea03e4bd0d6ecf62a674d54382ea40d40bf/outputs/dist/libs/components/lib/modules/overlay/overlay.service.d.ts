import { Injector } from '@angular/core';
import { PrizmOverlayConfig, PrizmOverlayContentData, PrizmOverlayContentProps, PrizmOverlayId } from './models';
import { PrizmOverlayAbstractPosition } from './position/position';
import { PrizmOverlayControl } from './overlay-control';
import * as i0 from "@angular/core";
export declare class PrizmOverlayService {
    private injector;
    static controls: {
        [key: string]: PrizmOverlayControl;
    };
    private zid;
    private inputs;
    constructor(injector: Injector);
    clearCache(): PrizmOverlayService;
    position<T extends PrizmOverlayAbstractPosition<any>>(position: T): PrizmOverlayService;
    config(config: Partial<PrizmOverlayConfig>): PrizmOverlayService;
    content(data: PrizmOverlayContentData, props?: PrizmOverlayContentProps): PrizmOverlayService;
    parentContainer(node: HTMLElement | undefined): PrizmOverlayService;
    create({ key, parentInjector, }?: {
        key?: string;
        parentInjector?: Injector;
    }): PrizmOverlayControl;
    getCtrl(zid: PrizmOverlayId): PrizmOverlayControl;
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmOverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmOverlayService>;
}
