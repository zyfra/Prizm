import { Observable } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
type PrizmThGroup = any;
export declare class PrizmTableService {
    private readonly destroy$;
    private readonly set;
    private readonly changes$;
    readonly tableMaxColspan$: Observable<number>;
    constructor(destroy$: PrizmDestroyService);
    addThGroup(thGroup: PrizmThGroup): void;
    removeThGroup(thGroup: PrizmThGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmTableService>;
}
export {};
