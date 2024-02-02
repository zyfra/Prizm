import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import * as i0 from "@angular/core";
export declare class PrizmCronUiYearState extends PrizmCronUiBaseState {
    readonly cron: PrizmCronService;
    readonly destroy$: PrizmDestroyService;
    readonly currentYear: number;
    constructor(cron: PrizmCronService, destroy$: PrizmDestroyService);
    updateMainState(value: string): void;
    private getYears;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronUiYearState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmCronUiYearState>;
}
