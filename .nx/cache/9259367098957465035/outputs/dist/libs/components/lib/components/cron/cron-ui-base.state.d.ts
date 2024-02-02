import { canShowCronListItem } from './util';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { UntypedFormControl } from '@angular/forms';
import { PrizmCronUiBaseType, PrizmCronUiState, PrizmCronUiStateList } from './model';
import { PrizmCronService, PrizmCronValueObject } from '../../services/cron';
export declare abstract class PrizmCronUiBaseState<ENUM extends Record<string, unknown> = typeof PrizmCronUiBaseType, TYPE = PrizmCronUiBaseType, STATE extends PrizmCronUiState<TYPE> = PrizmCronUiState<TYPE>, LIST extends PrizmCronUiStateList = PrizmCronUiStateList> {
    readonly current$: Observable<any>;
    readonly initialType: TYPE;
    readonly TYPES: ENUM;
    private readonly between;
    private readonly specified;
    private readonly everyChosenTimesAfterChosen;
    readonly list: LIST;
    readonly defaultState: STATE;
    readonly state$: BehaviorSubject<STATE>;
    abstract readonly cron: PrizmCronService;
    abstract readonly destroy$: PrizmDestroyService;
    readonly canShowCronListItem: typeof canShowCronListItem;
    constructor(current$: Observable<any>, initialType: TYPE, TYPES: ENUM, between?: {
        value: {
            start: string;
            end: string;
        };
        list: {
            start: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
            end: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
        };
    }, specified?: {
        value: string[];
        list: {
            key: string;
            value: string;
        }[];
    }, everyChosenTimesAfterChosen?: {
        list: {
            on: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
            after: import("@prizm-ui/components").PrizmInputCarouselArrayContent<string>;
        };
        value: {
            on: string;
            after: string;
        };
    });
    readonly typeControl: UntypedFormControl;
    readonly type$: Observable<TYPE>;
    init(): void;
    protected initLocalStateChanger(): void;
    protected isBaseChanged(a: any, b: any): boolean;
    protected initLocalTypeChanger(): void;
    abstract updateMainState(value: string): void;
    getTypeByValueByDefault(value: string, cron: PrizmCronValueObject): PrizmCronUiBaseType;
    getTypeByValue(hour: string, cron: PrizmCronValueObject): TYPE;
    updatePartial(state: Partial<STATE>): void;
    updateMainIfChanged(newState: string): void;
    /**
     * update between
     * */
    updateBetween({ start, end, }?: {
        start?: string;
        end?: string;
    }): void;
    /**
     * update on # after #
     * */
    updateOn(options?: {
        on?: string;
        after?: string;
    }): void;
    /**
     * update on
     * */
    updateSpecified(specified?: string[]): void;
    /**
     * set every *
     * */
    setEvery(): void;
    /**
     * TODO fix type casting
     * */
    updateLocalState(value: any, type: TYPE): void;
    destroy(): void;
}
