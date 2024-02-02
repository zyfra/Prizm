import { PrizmCronUiYearState } from '../../cron-ui-year.state';
import { PrizmCronUiBaseType } from '../../model';
import { UntypedFormControl } from '@angular/forms';
import { PrizmChipsComponent } from '../../../chips';
import * as i0 from "@angular/core";
export declare class PrizmCronYearComponent {
    readonly cronUiState: PrizmCronUiYearState;
    specifiedList: PrizmCronUiBaseType[];
    deletable: boolean;
    requiredInputControl: UntypedFormControl;
    chipsControl: UntypedFormControl;
    yearForAdd: string | null;
    chipses: string[];
    readonly allowedYear: RegExp;
    chipsComponent: PrizmChipsComponent;
    constructor(cronUiState: PrizmCronUiYearState);
    removedChips(value: string[]): void;
    onEnter(value: any, chipsComponent: PrizmChipsComponent): void;
    join(str: string[]): string;
    corrector(str: string[]): string[];
    saveSpecified(str: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronYearComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCronYearComponent, "prizm-cron-year", never, { "specifiedList": "specifiedList"; }, {}, never, never, false, never>;
}
