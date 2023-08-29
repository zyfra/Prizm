import { canShowCronListItem, getArrWithStringNumbers, getCarousel } from './util';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, finalize, first, map, takeUntil, tap } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import { PrizmCronUiBaseType, PrizmCronUiState, PrizmCronUiStateList } from './model';
import { PrizmCronService, PrizmCronValueObject } from '../../services/cron';
import { isEqual } from 'lodash';

export abstract class PrizmCronUiBaseState<
  ENUM extends Record<string, unknown> = typeof PrizmCronUiBaseType,
  TYPE = PrizmCronUiBaseType,
  STATE extends PrizmCronUiState<TYPE> = PrizmCronUiState<TYPE>,
  LIST extends PrizmCronUiStateList = PrizmCronUiStateList
> {
  readonly list: LIST = {
    everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.list,
    specified: this.specified.list,
    between: this.between.list,
  } as LIST;

  readonly defaultState: STATE = {
    type: this.initialType,
    everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.value,
    specified: this.specified.value,
    between: this.between.value,
  } as STATE;

  readonly state$ = new BehaviorSubject<STATE>(this.defaultState);

  abstract readonly cron: PrizmCronService;
  abstract readonly destroy$: PrizmDestroyService;
  readonly canShowCronListItem = canShowCronListItem;

  constructor(
    public readonly current$: Observable<any>,
    public readonly initialType: TYPE,
    public readonly TYPES: ENUM,
    private readonly between = {
      value: {
        start: '0',
        end: '1',
      },
      list: {
        start: getCarousel(60, 0),
        end: getCarousel(60, 0),
      },
    },
    private readonly specified = {
      value: ['0'],
      list: getArrWithStringNumbers(60, 1, false).map((i, idx) => ({
        key: idx.toString(),
        value: idx.toString(),
      })),
    },
    private readonly everyChosenTimesAfterChosen = {
      list: {
        on: getCarousel(60, 1),
        after: getCarousel(60, 0),
      },
      value: {
        on: '1',
        after: '0',
      },
    }
  ) {
    this.initialType = initialType;
  }

  public readonly typeControl = new UntypedFormControl();

  public readonly type$ = this.current$.pipe(map(i => this.getTypeByValue(i, this.cron.value)));

  public init(): void {
    this.initLocalStateChanger();
    this.initLocalTypeChanger();
  }

  protected initLocalStateChanger(): void {
    /* add change when base changes */
    this.current$
      .pipe(
        distinctUntilChanged(this.isBaseChanged),
        tap(value => this.updateLocalState(value, this.getTypeByValue(value, this.cron.value))),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  protected isBaseChanged(a: any, b: any): boolean {
    return a === b;
  }

  protected initLocalTypeChanger(): void {
    this.type$
      .pipe(
        filter(i => i != this.typeControl.value),
        tap(type => {
          this.typeControl.setValue(type);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public abstract updateMainState(value: string): void;

  public getTypeByValueByDefault(value: string, cron: PrizmCronValueObject): PrizmCronUiBaseType {
    if (value === '*') {
      return PrizmCronUiBaseType.every;
    } else if (value.includes('/')) {
      return PrizmCronUiBaseType.after;
    } else if (value.includes('-')) {
      return PrizmCronUiBaseType.between;
    }

    return PrizmCronUiBaseType.specified;
  }
  public getTypeByValue(hour: string, cron: PrizmCronValueObject): TYPE {
    return this.getTypeByValueByDefault(hour, cron) as unknown as TYPE;
  }

  public updatePartial(state: Partial<STATE>): void {
    this.state$.next({
      ...this.state$.value,
      ...state,
    });
  }

  public updateMainIfChanged(newState: string): void {
    this.current$
      .pipe(
        first(),
        tap(old => {
          if (old !== newState) {
            this.updateMainState(newState);
          }
        })
      )
      .subscribe();
  }

  /**
   * update between
   * */
  public updateBetween({
    start,
    end,
  }: {
    start?: string;
    end?: string;
  } = {}): void {
    start = start ?? this.state$.value.between.start;
    end = end ?? this.state$.value.between.end;
    this.updateMainIfChanged(`${start}-${end}`);
  }

  /**
   * update on # after #
   * */
  public updateOn(
    options: {
      on?: string;
      after?: string;
    } = {}
  ): void {
    let { on, after } = options;
    on = on ?? this.state$.value.everyChosenTimesAfterChosen.on;
    after = after ?? this.state$.value.everyChosenTimesAfterChosen.after;
    this.updateMainIfChanged(`${after}/${on}`);
  }

  /**
   * update on
   * */
  public updateSpecified(specified?: string[]): void {
    this.updateMainIfChanged(`${specified?.join(',') ?? 0}`);
  }

  /**
   * set every *
   * */
  public setEvery(): void {
    this.updateMainIfChanged('*');
  }

  /**
   * TODO fix type casting
   * */
  public updateLocalState(value: any, type: TYPE): void {
    switch (type) {
      case this.TYPES.between:
        {
          const arr = value.split('-');
          const start = arr[0] ?? '0';
          const end = arr[1] ?? '0';

          this.updatePartial({
            type: PrizmCronUiBaseType.between,
            between: {
              start: start,
              end: end,
            },
          } as unknown as Partial<STATE>);
        }
        break;
      case this.TYPES.every:
        this.updatePartial({
          type: PrizmCronUiBaseType.every,
        } as unknown as Partial<STATE>);
        break;
      case this.TYPES.specified:
        this.updatePartial({
          type: PrizmCronUiBaseType.specified,
          specified: value.split(','),
        } as unknown as Partial<STATE>);
        break;

      case this.TYPES.after:
        {
          const arr = value.split('/');
          const on = arr[1] ?? '0';
          const after = arr[0] ?? '0';
          this.updatePartial({
            type: PrizmCronUiBaseType.after,
            everyChosenTimesAfterChosen: {
              on: on,
              after: after,
            },
          } as unknown as Partial<STATE>);
        }
        break;
    }
  }

  public destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
