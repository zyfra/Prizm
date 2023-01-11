import { Injectable } from '@angular/core';
import { PrizmCronUiDayType, PrizmCronUiListItem } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import {
  getArrWithStringNumbers,
  getArrWithWeekNumber,
  getCarousel,
  getCarouselWeek,
  prizmConvertDayToType,
} from './util';
import { combineLatest } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS } from './const';

@Injectable()
export class PrizmCronUiDayState extends PrizmCronUiBaseState<
  typeof PrizmCronUiDayType,
  PrizmCronUiDayType
> {
  public lastChosenDayOfMonthValue = '1'
  public selectedDayOfWeek: string[] = [];
  public readonly afterNumberOfWeekList = getCarousel(5, 1);
  public onNumberOfWeekListValue = this.afterNumberOfWeekList.first;
  public readonly dayOfMonthItems: PrizmCronUiListItem[] = getArrWithStringNumbers(31, 1).map(
    (key, index) => ({
      key: key,
      value: key,
    })
  )
  public readonly dayOfWeekItems: PrizmCronUiListItem[] = getArrWithWeekNumber()
    .map(
    (i) => ({
      key: PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[parseInt(i, 10) - 1],
      value: i,
    })
  )

  public readonly carouselWeek = getCarouselWeek();
  public lastChosenDayOfWeekValue2 = this.carouselWeek.first;
  public lastChosenDayOfWeekValue = this.carouselWeek.first;
  public readonly nearestDayOfMonth = getCarousel(31, 1);
  public readonly afterDayOfWeekListDays = getCarousel(7, 1);
  public selectedDayOfMonth: string[] = [];
  public afterDayOfWeekListDaysValue = this.afterDayOfWeekListDays.first;
  public afterDayOfWeekListDayOfWeeksValue = this.carouselWeek.first;
  public readonly afterDayOfMonthListDays = getCarousel(31, 1);
  public afterDayOfMonthListDaysValue = this.afterDayOfMonthListDays.first;
  public readonly afterDayOfMonthListRepeatDays = getCarousel(31, 1);
  public afterDayOfMonthListRepeatDaysValue = this.afterDayOfMonthListRepeatDays.first;
  public nearestDayOfMonthValue = '1';
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.minute$,
      PrizmCronUiDayType.every,
      PrizmCronUiDayType,
      {
        value: {
          start: '0',
          end: '1',
        },
        list: {
          start: getCarousel(31, 0),
          end: getCarousel(31, 0),
        }
      },
      {
        value: ['0'],
        list: getArrWithStringNumbers(31, 0, false).map(
          (i, idx) => ({
            key: i,
            value: i,
          })
        )
      },
      {
        list: {
          on: getCarousel(31, 1),
          after: getCarousel(31, 0),
        },
        value: {
          on: '1',
          after: '0'
        }
      }
    );
  }

  public setLastDayOfMonth(): void {
    this.cron.updateWith({
      dayOfMonth: 'L',
      dayOfWeek: '?'
    });
  }

  public setLastWeekDayOfMonth(): void {
    this.cron.updateWith({
      dayOfMonth: 'LW',
      dayOfWeek: '?'
    });
  }

  public override init(): void {
    combineLatest(
      [
        this.cron.dayOfMonth$,
        this.cron.dayOfWeek$,
      ]
    ).pipe(
      map(([day, dayOfWeek]) => prizmConvertDayToType(day, dayOfWeek)),
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    // this.typeControl.valueChanges.pipe(
    //   distinctUntilChanged(),
    //   tap(
    //     (value: PrizmCronUiDayType) => {
    //       switch (value) {
    //         case PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth:
    //           this.updateNearestDayOfMonth();
    //           break;
    //         case PrizmCronUiDayType.every:
    //           this.cron.updateWith({
    //             dayOfMonth: '*',
    //             dayOfWeek: '*'
    //           });
    //           break;
    //         case PrizmCronUiDayType.afterDayOfWeek:
    //           this.updateAfterDayOfWeek();
    //           break;
    //         case PrizmCronUiDayType.lastDayOfMonth:
    //           this.cron.updateWith({
    //             dayOfMonth: 'L',
    //             dayOfWeek: '?'
    //           });
    //           break;
    //         case PrizmCronUiDayType.lastWeekDayOfMonth:
    //           this.cron.updateWith({
    //             dayOfMonth: 'LW',
    //             dayOfWeek: '?'
    //           });
    //           break;
    //         case PrizmCronUiDayType.lastChosenDaysOfMonth:
    //           this.updateLastChosenDayOfMonth();
    //           break;
    //         case PrizmCronUiDayType.lastChosenDayOfWeek:
    //           this.updateLastChosenDayOfWeek();
    //           break;
    //         case PrizmCronUiDayType.afterDayOfMonth:
    //           this.updateAfterDayOfMonth();
    //           break;
    //         case PrizmCronUiDayType.specifiedDayOfWeek:
    //           this.updateSelectedDayOfWeek();
    //           break;
    //         case PrizmCronUiDayType.specifiedDayOfMonth:
    //           this.updateSelectedDayOfMonth();
    //           break;
    //       }
    //     }
    //   ),
    //   takeUntil(this.destroy$)
    // ).subscribe()
  }

  public updateLastChosenDayOfMonth(): void {
    const lastChosenDayOfMonthValue = this.lastChosenDayOfMonthValue;
    this.cron.updateWith(
      {
        dayOfWeek: `?`,
        dayOfMonth: `L-${lastChosenDayOfMonthValue}`
      }
    )
  }
  public updateLastChosenDayOfWeek(): void {
    // const onNumberOfWeekListValue = this.onNumberOfWeekListValue;
    // const lastChosenDayOfWeekValue2 = this.lastChosenDayOfWeekValue2;
    const lastChosenDayOfWeekValue = this.lastChosenDayOfWeekValue;
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: `${lastChosenDayOfWeekValue}L`
        // dayOfWeek: `${lastChosenDayOfWeekValue2}#${onNumberOfWeekListValue}`
      }
    )
  }

  public updateLastChosenDayOfChosenWeek(): void {
    const onNumberOfWeekListValue = this.onNumberOfWeekListValue;
    const lastChosenDayOfWeekValue2 = this.lastChosenDayOfWeekValue2;
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: `${lastChosenDayOfWeekValue2}#${onNumberOfWeekListValue}`
      }
    )
  }

  public updateAfterDayOfWeek(): void {
    const afterDayOfWeekListDaysValue = this.afterDayOfWeekListDaysValue;
    const afterDayOfWeekListDayOfWeeksValue = this.afterDayOfWeekListDayOfWeeksValue;
    if (!afterDayOfWeekListDayOfWeeksValue) return;
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: `${afterDayOfWeekListDayOfWeeksValue}/${afterDayOfWeekListDaysValue}`
      }
    )
  }
  public updateSelectedDayOfWeek(): void {
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: this.selectedDayOfWeek.join(',')
      }
    )
  }

  public updateSelectedDayOfMonth(): void {
    this.cron.updateWith(
      {
        dayOfWeek: `?`,
        dayOfMonth: [
          ...new Set([
            '1',
            ...this.selectedDayOfMonth
          ])
        ].join(',')
      }
    )
  }


  public updateAfterDayOfMonth(): void {
    this.cron.updateWith(
      {
        dayOfWeek: `?`,
        dayOfMonth: `${this.afterDayOfMonthListDaysValue}/${this.afterDayOfMonthListRepeatDaysValue}`
      }
    )
  }


  public updateNearestDayOfMonth(): void {
    this.cron.updateWith(
      {
        dayOfMonth: `${this.nearestDayOfMonthValue}W`,
        dayOfWeek: '?'
      }
    )
  }
  public override updateBetween(
    {start, end}: {
      start?: string,
      end?: string,
    } = {}
  ): void {
    start = start ?? this.state$.value.between.start;
    end = end ?? this.state$.value.between.end;
    this.state$.value.between.start = start;
    this.state$.value.between.end = end;
    this.cron.updateWith({
      dayOfMonth: `${start}-${end}`
    });
  }

  public override updateLocalState(value: string, type: PrizmCronUiDayType): void {
    switch (type) {
      case this.TYPES.between: {
        const arr = value.split('-');
        const start = arr[0] ?? '0';
        const end = arr[1] ?? '0';

        this.updatePartial(
          {
            type: PrizmCronUiDayType.between,
            between: {
              start: start,
              end: end,
            }
          }
        )
      }
      break;
      case this.TYPES.every:
        this.updatePartial({
          type: PrizmCronUiDayType.every,
        })
      break;
      case this.TYPES.specified:
        this.updatePartial({
          type: PrizmCronUiDayType.specified,
          specified: value.split(',')
        });
        break;

      case this.TYPES.after: {
        const arr = value.split('/');
        const on = arr[1] ?? '0';
        const after = arr[0] ?? '0';

        this.updatePartial({
          type: PrizmCronUiDayType.after,
          everyChosenTimesAfterChosen: {
            on: on,
            after: after
          }
        });
      }
        break;
    }
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      dayOfMonth: value
    });
  }
}
