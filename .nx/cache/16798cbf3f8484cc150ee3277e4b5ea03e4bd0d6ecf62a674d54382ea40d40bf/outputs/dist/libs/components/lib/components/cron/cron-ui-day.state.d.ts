import { PrizmCronUiBaseType, PrizmCronUiDayType, PrizmCronUiListItem } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService, PrizmCronValueObject } from '../../services/cron';
import * as i0 from "@angular/core";
export declare class PrizmCronUiDayState extends PrizmCronUiBaseState<typeof PrizmCronUiDayType, PrizmCronUiDayType> {
    readonly cron: PrizmCronService;
    readonly destroy$: PrizmDestroyService;
    lastChosenDayOfMonthValue: string;
    selectedDayOfWeek: string[];
    readonly afterNumberOfWeekList: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    onNumberOfWeekListValue: string;
    readonly dayOfMonthItems: PrizmCronUiListItem[];
    readonly dayOfWeekItems: PrizmCronUiListItem[];
    readonly carouselWeek: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    readonly carouselWeekLastChosenDayOfChosenWeek: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    readonly carouselWeekLastChosenDayOfWeek: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    readonly carouselWeekAfterDayOfWeek: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    lastChosenDayOfWeekValue2: string;
    lastChosenDayOfWeekValue: string;
    readonly nearestDayOfMonth: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    readonly contentLastChosenDayOfMonth: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    readonly afterDayOfWeekListDays: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    selectedDayOfMonth: string[];
    afterDayOfWeekListDaysValue: string;
    afterDayOfWeekListDayOfWeeksValue: string;
    readonly afterDayOfMonthListDays: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    afterDayOfMonthListDaysValue: string;
    readonly afterDayOfMonthListRepeatDays: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
    afterDayOfMonthListRepeatDaysValue: string;
    nearestDayOfMonthValue: string;
    constructor(cron: PrizmCronService, destroy$: PrizmDestroyService);
    setLastDayOfMonth(): void;
    setLastWeekDayOfMonth(): void;
    init(): void;
    /**
     * set every *
     * */
    setEvery(): void;
    updateLastChosenDayOfMonth(lastChosenDayOfMonthValue?: string): void;
    updateLastChosenDayOfWeek(lastChosenDayOfWeekValue: string, addEnding?: boolean): void;
    updateLastChosenDayOfChosenWeek(onNumberOfWeekListValue?: string | null, lastChosenDayOfWeekValue2?: string): void;
    updateAfterDayOfWeek({ afterDayOfWeekListDaysValue, afterDayOfWeekListDayOfWeeksValue, }?: {
        afterDayOfWeekListDaysValue?: string;
        afterDayOfWeekListDayOfWeeksValue?: string;
    }): void;
    updateSelectedDayOfWeek(selectedDayOfWeek: string[]): void;
    updateSelectedDayOfMonth(selectedDayOfMonth: string[]): void;
    updateAfterDayOfMonth(afterDayOfMonthListRepeatDaysValue?: string | null, afterDayOfMonthListDaysValue?: string): void;
    updateNearestDayOfMonth(nearestDayOfMonthValue?: string): void;
    updateBetween({ start, end, }?: {
        start?: string;
        end?: string;
    }): void;
    getTypeByValueByDefault(value: string, cron: PrizmCronValueObject): PrizmCronUiBaseType;
    updateLocalState([dayOfMonth, dayOfWeek]: [string, string], type: PrizmCronUiDayType): void;
    protected isBaseChanged(a: [string, string], b: [string, string]): boolean;
    updateMainState(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronUiDayState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmCronUiDayState>;
}
