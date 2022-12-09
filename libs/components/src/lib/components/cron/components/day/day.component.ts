import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  convertDayOfWeekToNumber,
  getArrWithStringNumbers,
  getCarousel,
  getCarouselWithDayOfWeek,
  prizmConvertDayToType,
} from '../../util';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronUiListService } from '../../cron-ui-list.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { combineLatest } from 'rxjs';
import { PrizmCronUiDayType, PrizmCronUiHourType, PrizmCronUiListItem } from '../../model';
import { PrizmCronService } from '../../../../services/cron';
import {
  PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS,
  PRIZM_CRON_UI_WEEK,
  PRIZM_CRON_UI_WEEK_KEYS_OBJ,
  PRIZM_CRON_UI_WEEK_OBJ,
  PRIZM_CRON_UI_WEEK_SHORT_OBJ,
} from '../../const';
@Component({
  selector: 'prizm-cron-day',
  styleUrls: [
    './day.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './day.component.html',
  providers: [
    PrizmDestroyService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronDayComponent implements OnInit {
  public readonly typeControl = new FormControl(PrizmCronUiDayType.every);
  public readonly type = PrizmCronUiDayType;

  public readonly nearestDayOfMonth = getCarousel(31, 1);

  public readonly afterDayOfWeekListDays = getCarousel(7, 1);
  public afterDayOfWeekListDaysValue = '1';
  public readonly afterDayOfWeekListDayOfWeeks = getCarouselWithDayOfWeek();
  public afterDayOfWeekListDayOfWeeksValue = PRIZM_CRON_UI_WEEK[1];


  public readonly afterDayOfMonthListRepeatDays = getCarousel(31, 1);
  public afterDayOfMonthListRepeatDaysValue = '1';
  public readonly afterDayOfMonthListDays = getCarousel(31, 1);
  public afterDayOfMonthListDaysValue = '1';


  public readonly dayOfWeekItems: PrizmCronUiListItem[] = Object.keys(PRIZM_CRON_UI_WEEK_SHORT_OBJ).map(
    (i) => ({
      key: PRIZM_CRON_UI_WEEK_SHORT_OBJ[i as keyof typeof PRIZM_CRON_UI_WEEK_SHORT_OBJ],
      value: i,
    })
  )

  public selectedDayOfWeek: string[] = [];




  public readonly dayOfMonthItems: PrizmCronUiListItem[] = getArrWithStringNumbers(31, 1).map(
    (key, index) => ({
      key: key,
      value: key,
    })
  )

  public selectedDayOfMonth: string[] = [];

  public nearestDayOfMonthValue = '1';
  // public readonly startDayOfWeekForAfterDayOfWeek = getCarouselWithDayOfWeek();
  // public readonly startDayForAfterDayOfWeekValue = '1';
  // public readonly startDayOfWeekForAfterDayOfWeekValue = 'Понедельник';
  //
  // public readonly startDayForAfterDay = getCarousel(30, 1);
  // public readonly startDay2ForAfterDay = getCarousel(30, 1);
  // public readonly startDayForAfterDayValue = '1';
  // public readonly startDay2ForAfterDayValue = '1';
  //
  //
  // public readonly periodRepeatValue = '1';
  // public readonly periodAfterValue = '1';
  //
  // public readonly periodStart = getCarouselTimeWithZero();
  // public readonly periodStartValue = '01:00';
  //
  // public readonly periodEnd = getCarouselTimeWithZero();
  // public readonly periodEndValue = '01:00';

  public readonly items = getArrWithStringNumbers(24);


  constructor(
    public readonly cron: PrizmCronService,
    public readonly cronUi: PrizmCronUiService,
    public readonly list: PrizmCronUiListService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  ngOnInit(): void {
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

    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiDayType) => {
          console.log('#mz day typeControl', {
            value
          })
          switch (value) {
            case PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth:
              this.updateNearestDayOfMonth();
            break;
            case PrizmCronUiDayType.every:
              this.cron.updateWith({
                dayOfMonth: '?',
                dayOfWeek: '*'
              });
            break;
            case PrizmCronUiDayType.afterDayOfWeek:
              this.updateAfterDayOfWeek();
            break;
            case PrizmCronUiDayType.afterDayOfMonth:
              this.updateAfterDayOfMonth();
            break;
            case PrizmCronUiDayType.specifiedDayOfWeek:
              this.updateSelectedDayOfWeek();
            break;
            case PrizmCronUiDayType.specifiedDayOfMonth:
              this.updateSelectedDayOfMonth();
            break;
          }
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  public updateNearestDayOfMonth(): void {
    this.cron.updateWith(
      {
        dayOfMonth: `${this.nearestDayOfMonthValue}W`,
        dayOfWeek: '?'
      }
    )
  }

  public updateAfterDayOfWeek(): void {
    const afterDayOfWeekListDaysValue = this.afterDayOfWeekListDaysValue;
    const afterDayOfWeekListDayOfWeeksValue = convertDayOfWeekToNumber(
      this.afterDayOfWeekListDayOfWeeksValue as keyof typeof PRIZM_CRON_UI_WEEK_OBJ
    );
    if (!afterDayOfWeekListDayOfWeeksValue) return;
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: `${afterDayOfWeekListDayOfWeeksValue}/${afterDayOfWeekListDaysValue}`
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

  public updateSelectedDayOfWeek(): void {
    this.cron.updateWith(
      {
        dayOfMonth: `?`,
        dayOfWeek: [...new Set([
          PRIZM_CRON_UI_WEEK_SHORT_OBJ['Пн'],
          ...this.selectedDayOfWeek
        ])].map(
          i => PRIZM_CRON_UI_WEEK_KEYS_OBJ[i as keyof typeof PRIZM_CRON_UI_WEEK_KEYS_OBJ]
        ).join(',')
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

}
