import { PrizmCronUiDayState } from '../../cron-ui-day.state';
import { PrizmCronUiDayType } from '../../model';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';
import * as i0 from "@angular/core";
export declare class PrizmCronDayComponent {
    readonly cronI18n$: Observable<PrizmLanguageCron['cron']>;
    readonly cronUiState: PrizmCronUiDayState;
    specifiedList: PrizmCronUiDayType[];
    constructor(cronI18n$: Observable<PrizmLanguageCron['cron']>, cronUiState: PrizmCronUiDayState);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronDayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCronDayComponent, "prizm-cron-day", never, { "specifiedList": { "alias": "specifiedList"; "required": false; }; }, {}, never, never, false, never>;
}
