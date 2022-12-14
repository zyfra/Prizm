import { getArrWithStringNumbers, getCarousel } from './util';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmCronService } from '@prizm-ui/components';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, take, takeUntil, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { PrizmCronUiBaseType, PrizmCronUiState, PrizmCronUiStateList } from './model';

export abstract class PrizmCronUiBaseState<
  TYPE = PrizmCronUiBaseType,
  STATE extends PrizmCronUiState<TYPE> = PrizmCronUiState<TYPE>,
  LIST extends PrizmCronUiStateList = PrizmCronUiStateList,
> {
  readonly list: LIST = {
    everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.list,
    specified: this.specified.list,
    between: this.between.list
  } as LIST;

  readonly defaultState: STATE = {
    type: this.type,
    everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.value,
    specified: this.specified.value,
    between: this.between.value
  } as STATE;

  readonly state$ = new BehaviorSubject<STATE>(this.defaultState)

  readonly abstract cron: PrizmCronService;
  readonly abstract destroy$: PrizmDestroyService;

  constructor(
    public readonly current$: Observable<string>,
    private readonly type: TYPE,
    private readonly between = {
      value: {
        start: '0',
        end: '1',
      },
      list: {
        start: getCarousel(60, 0),
        end: getCarousel(60, 0),
      }
    },
    private readonly specified = {
      value: ['0'],
      list: getArrWithStringNumbers(60, 0, false).map(
        (i, idx) => ({
          key: i,
          value: idx + 1 + '',
        })
      )
    },
    private readonly everyChosenTimesAfterChosen = {
      list: {
        on: getCarousel(60, 0),
        after: getCarousel(60, 0),
      },
      value: {
        on: '1',
        after: '0'
      }
    }
  ) {}

  public readonly typeControl = new FormControl();

  public readonly type$ = this.current$.pipe(
    map(i => this.getTypeByValue(i))
  );

  public init(): void {
    this.initLocalStateChanger();
    this.initLocalTypeChanger();
  }

  private initLocalStateChanger(): void {
    /* add change when base changes */
    this.current$.pipe(
      distinctUntilChanged(),
      tap(
        (value) => this.updateLocalState(
          value,
          this.getTypeByValue(value)
        )
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private initLocalTypeChanger(): void {
    this.type$.pipe(
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  abstract updateLocalState(value: string, type: TYPE): void;
  abstract updateMainState(value: string): void;

  public getTypeByValueByDefault(value: string): PrizmCronUiBaseType {
    if (value === '*') {
      return PrizmCronUiBaseType.every;
    } else if (value.includes('/')) {
      return PrizmCronUiBaseType.after
    } else if (value.includes('-')) {
      return PrizmCronUiBaseType.between
    }

    return PrizmCronUiBaseType.specified;
  }
  public getTypeByValue(hour: string): TYPE {
    return this.getTypeByValueByDefault(hour) as unknown as TYPE;
  }

  public updatePartial(
    state: Partial<STATE>
  ) {
    this.state$.next({
      ...this.state$.value,
      ...state
    });
  }

  public updateMainIfChanged(newState: string) {
    this.current$.pipe(
      tap((old) => {
        if (old !== newState) {
          this.updateMainState(newState);
        }
      }),
      take(1)
    )
  }

  public updateBetween(start: string, end: string) {
    // this.cron.up
  }
}

