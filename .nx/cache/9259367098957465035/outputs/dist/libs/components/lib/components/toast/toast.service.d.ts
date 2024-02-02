import { OnDestroy } from '@angular/core';
import { PolymorphContent } from '../../directives/polymorph';
import { PRIZM_TOAST_ID, PrizmToastOptions } from './types';
import { PrizmToastRef } from './toast-ref';
import { PrizmToastDefaultOptions } from './toast-options';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export type ToastRefMap = Map<PRIZM_TOAST_ID, PrizmToastRef>;
export declare class PrizmToastService implements OnDestroy {
    private readonly options;
    private readonly refs;
    private readonly changesSource$;
    readonly changes$: import("rxjs").Observable<PrizmToastRef[]>;
    readonly destroy$: Subject<void>;
    constructor(options: PrizmToastDefaultOptions);
    get size(): number;
    create(content: PolymorphContent, options?: PrizmToastOptions): PrizmToastRef;
    detect(): void;
    updateContent(id: PRIZM_TOAST_ID, content: PolymorphContent): void;
    updateTitle(id: PRIZM_TOAST_ID, title: PrizmToastOptions['title']): PrizmToastRef;
    delete(id: PRIZM_TOAST_ID): void;
    deleteAll(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmToastService>;
}
