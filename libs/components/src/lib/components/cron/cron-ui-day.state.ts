import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType, PrizmCronUiDayType, PrizmCronUiListItem } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService, PrizmCronValueObject } from '../../services/cron';
import {
  getArrWithStringNumbers,
  getArrWithWeekNumber,
  getCarousel,
  getCarouselWeek,
  prizmConvertDayToType,
} from './util';
import { combineLatest, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS } from './const';

@Injectable()
export class PrizmCronUiDayState extends PrizmCronUiBaseState<typeof PrizmCronUiDayType, PrizmCronUiDayType> {
  public lastChosenDayOfMonthValue = '1';
  public selectedDayOfWeek: string[] = [];
  public readonly afterNumberOfWeekList = getCarousel(5, 1);
  public onNumberOfWeekListValue = this.afterNumberOfWeekList.first;
  public readonly dayOfMonthItems: PrizmCronUiListItem[] = getArrWithStringNumbers(31, 1).map(
    (key, index) => ({
      key: key,
      value: key,
    })
  );
  public readonly dayOfWeekItems: PrizmCronUiListItem[] = getArrWithWeekNumber().map(i => ({
    key: PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[parseInt(i, 10) - 1],
    value: i,
  }));

  public readonly carouselWeek = getCarouselWeek();
  public readonly carouselWeekLastChosenDayOfChosenWeek = getCarouselWeek();
  public readonly carouselWeekLastChosenDayOfWeek = getCarouselWeek();
  public readonly carouselWeekAfterDayOfWeek = getCarouselWeek();
  public lastChosenDayOfWeekValue2 = this.carouselWeek.first;
  public lastChosenDayOfWeekValue = this.carouselWeek.first;
  public readonly nearestDayOfMonth = getCarousel(31, 1);
  public readonly contentLastChosenDayOfMonth = getCarousel(31, 1);
  public readonly afterDayOfWeekListDays = getCarousel(7, 1);
  public selectedDayOfMonth: string[] = [];
  public afterDayOfWeekListDaysValue = this.afterDayOfWeekListDays.first;
  public afterDayOfWeekListDayOfWeeksValue = this.carouselWeek.first;
  public readonly afterDayOfMonthListDays = getCarousel(31, 1);
  public afterDayOfMonthListDaysValue = this.afterDayOfMonthListDays.first;
  public readonly afterDayOfMonthListRepeatDays = getCarousel(31, 1);
  public afterDayOfMonthListRepeatDaysValue = this.afterDayOfMonthListRepeatDays.first;
  public nearestDayOfMonthValue = '1';
  constructor(public readonly cron: PrizmCronService, public readonly destroy$: PrizmDestroyService) {
    super(
      cron.value$.pipe(map(i => [i.dayOfMonth, i.dayOfWeek])),
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
        },
      },
      {
        value: ['0'],
        list: getArrWithStringNumbers(31, 0, false).map((i, idx) => ({
          key: i,
          value: i,
        })),
      },
      {
        list: {
          on: getCarousel(31, 1),
          after: getCarousel(31, 0),
        },
        value: {
          on: '1',
          after: '0',
        },
      }
    );
  }

  public setLastDayOfMonth(): void {
    this.cron.updateWith({
      dayOfMonth: 'L',
      dayOfWeek: '?',
    });
  }

  public setLastWeekDayOfMonth(): void {
    this.cron.updateWith({
      dayOfMonth: 'LW',
      dayOfWeek: '?',
    });
  }

  public override init(): void {
    combineLatest([this.cron.dayOfMonth$, this.cron.dayOfWeek$])
      .pipe(
        map(([day, dayOfWeek]) => prizmConvertDayToType(day, dayOfWeek)),
        filter(i => i != this.typeControl.value),
        tap(type => {
          this.typeControl.setValue(type);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.initLocalStateChanger();
  }

  public updateLastChosenDayOfMonth(lastChosenDayOfMonthValue?: string): void {
    this.lastChosenDayOfMonthValue = lastChosenDayOfMonthValue ?? this.lastChosenDayOfMonthValue;
    this.cron.updateWith({
      dayOfWeek: `?`,
      dayOfMonth: `L-${lastChosenDayOfMonthValue || 1}`,
    });
  }
  public updateLastChosenDayOfWeek(lastChosenDayOfWeekValue: string, addEnding = true): void {
    const newValue =
      (addEnding ? lastChosenDayOfWeekValue : lastChosenDayOfWeekValue.replace(/L$/g, '')) || '2';
    this.lastChosenDayOfWeekValue = newValue;
    this.cron.updateWith({
      dayOfMonth: `?`,
      dayOfWeek: `${newValue}L`,
    });
  }

  public updateLastChosenDayOfChosenWeek(
    onNumberOfWeekListValue?: string,
    lastChosenDayOfWeekValue2?: string
  ): void {
    this.onNumberOfWeekListValue = onNumberOfWeekListValue ?? this.onNumberOfWeekListValue;
    this.lastChosenDayOfWeekValue2 = lastChosenDayOfWeekValue2 ?? this.lastChosenDayOfWeekValue2;
    this.cron.updateWith({
      dayOfMonth: `?`,
      dayOfWeek: `${this.lastChosenDayOfWeekValue2}#${this.onNumberOfWeekListValue}`,
    });
  }

  public updateAfterDayOfWeek({
    afterDayOfWeekListDaysValue,
    afterDayOfWeekListDayOfWeeksValue,
  }: {
    afterDayOfWeekListDaysValue?: string;
    afterDayOfWeekListDayOfWeeksValue?: string;
  } = {}): void {
    this.afterDayOfWeekListDaysValue = afterDayOfWeekListDaysValue ?? this.afterDayOfWeekListDaysValue;
    this.afterDayOfWeekListDayOfWeeksValue =
      afterDayOfWeekListDayOfWeeksValue ?? this.afterDayOfWeekListDayOfWeeksValue;
    if (!this.afterDayOfWeekListDayOfWeeksValue) return;
    this.cron.updateWith({
      dayOfMonth: `?`,
      dayOfWeek: `${this.afterDayOfWeekListDayOfWeeksValue}/${this.afterDayOfWeekListDaysValue}`,
    });
  }
  public updateSelectedDayOfWeek(selectedDayOfWeek: string[]): void {
    this.selectedDayOfWeek = selectedDayOfWeek;
    this.cron.updateWith({
      dayOfMonth: `?`,
      dayOfWeek: this.selectedDayOfWeek.join(','),
    });
  }

  public updateSelectedDayOfMonth(selectedDayOfMonth: string[]): void {
    this.selectedDayOfMonth = selectedDayOfMonth;
    this.cron.updateWith({
      dayOfWeek: `?`,
      dayOfMonth: [...new Set(this.selectedDayOfMonth.length ? this.selectedDayOfMonth : ['1'])].join(','),
    });
  }

  public updateAfterDayOfMonth(
    afterDayOfMonthListRepeatDaysValue?: string,
    afterDayOfMonthListDaysValue?: string
  ): void {
    this.afterDayOfMonthListRepeatDaysValue =
      afterDayOfMonthListRepeatDaysValue ?? this.afterDayOfMonthListRepeatDaysValue;
    this.afterDayOfMonthListDaysValue = afterDayOfMonthListDaysValue ?? this.afterDayOfMonthListDaysValue;
    this.cron.updateWith({
      dayOfWeek: `?`,
      dayOfMonth: `${this.afterDayOfMonthListDaysValue}/${this.afterDayOfMonthListRepeatDaysValue}`,
    });
  }

  public updateNearestDayOfMonth(nearestDayOfMonthValue?: string): void {
    this.nearestDayOfMonthValue = nearestDayOfMonthValue ?? this.nearestDayOfMonthValue;
    this.cron.updateWith({
      dayOfMonth: `${this.nearestDayOfMonthValue}W`,
      dayOfWeek: '?',
    });
  }
  public override updateBetween({
    start,
    end,
  }: {
    start?: string;
    end?: string;
  } = {}): void {
    start = start ?? this.state$.value.between.start;
    end = end ?? this.state$.value.between.end;
    this.state$.value.between.start = start;
    this.state$.value.between.end = end;
    this.cron.updateWith({
      dayOfMonth: `${start}-${end}`,
    });
  }

  public override getTypeByValueByDefault(value: string, cron: PrizmCronValueObject): PrizmCronUiBaseType {
    return prizmConvertDayToType(cron.dayOfMonth, cron.dayOfWeek) as unknown as PrizmCronUiBaseType;
  }

  public override updateLocalState(
    [dayOfMonth, dayOfWeek]: [string, string],
    type: PrizmCronUiDayType
  ): void {
    switch (type) {
      case this.TYPES.between:
        {
          const arr = dayOfMonth.split('-');
          const start = arr[0] ?? '0';
          const end = arr[1] ?? '0';

          this.updatePartial({
            type: PrizmCronUiDayType.between,
            between: {
              start: start,
              end: end,
            },
          });
        }
        break;
      case this.TYPES.every:
        this.updatePartial({
          type: PrizmCronUiDayType.every,
        });
        break;

      case this.TYPES.specifiedDayOfWeek:
        {
          this.updateSelectedDayOfWeek(dayOfWeek.split(','));
        }
        break;

      case this.TYPES.lastChosenDayOfWeek:
        {
          this.updateLastChosenDayOfWeek(dayOfWeek, false);
        }
        break;

      case this.TYPES.nearestWeekDayToTheChosenDayOfMonth:
        {
          this.updateNearestDayOfMonth(dayOfMonth?.replace('W', ''));
        }
        break;

      case this.TYPES.onTheChosenDayOfWeek:
        {
          const [lastChosenDayOfWeekValue2, onNumberOfWeekListValue] = dayOfWeek?.split('#') ?? [];
          if (lastChosenDayOfWeekValue2 && onNumberOfWeekListValue)
            this.updateLastChosenDayOfChosenWeek(onNumberOfWeekListValue, lastChosenDayOfWeekValue2);
        }
        break;

      case this.TYPES.specifiedDayOfMonth:
        {
          this.updateSelectedDayOfMonth(dayOfMonth.split(','));
        }
        break;

      case this.TYPES.lastChosenDaysOfMonth:
        {
          this.updateLastChosenDayOfMonth(dayOfMonth?.replace(/L-/g, ''));
        }
        break;

      case this.TYPES.afterDayOfMonth:
        {
          const [afterDayOfMonthListDaysValue, afterDayOfMonthListRepeatDaysValue] =
            dayOfMonth?.split('/') ?? [];
          this.updateAfterDayOfMonth(afterDayOfMonthListRepeatDaysValue, afterDayOfMonthListDaysValue);
        }
        break;

      case this.TYPES.afterDayOfWeek:
        {
          const [afterDayOfWeekListDayOfWeeksValue, afterDayOfWeekListDaysValue] =
            dayOfWeek?.split('/') ?? [];
          if (afterDayOfWeekListDayOfWeeksValue && afterDayOfWeekListDaysValue)
            this.updateAfterDayOfWeek({ afterDayOfWeekListDaysValue, afterDayOfWeekListDayOfWeeksValue });
        }
        break;
    }
  }

  protected override isBaseChanged(a: [string, string], b: [string, string]): boolean {
    return a && b && a?.[0] === b?.[0] && a?.[1] === b?.[1];
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      dayOfMonth: value,
    });
  }
}
