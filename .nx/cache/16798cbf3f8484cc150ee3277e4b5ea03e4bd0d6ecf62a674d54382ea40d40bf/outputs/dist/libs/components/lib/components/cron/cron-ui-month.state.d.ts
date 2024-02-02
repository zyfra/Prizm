import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import * as i0 from "@angular/core";
export declare class PrizmCronUiMonthState extends PrizmCronUiBaseState {
    readonly cron: PrizmCronService;
    readonly destroy$: PrizmDestroyService;
    constructor(cron: PrizmCronService, destroy$: PrizmDestroyService);
    updateMainState(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronUiMonthState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmCronUiMonthState>;
}
