import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronUiMinuteState } from '../../cron-ui-minute.state';
import { PrizmCronUiDayState } from '../../cron-ui-day.state';

@Component({
  selector: 'prizm-cron-day',
  styleUrls: ['./day.component.less', '../../cron-element.component.less'],
  templateUrl: './day.component.html',
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronDayComponent {
  // public readonly typeControl = new FormControl(PrizmCronUiDayType.every);
  // public readonly type = PrizmCronUiDayType;
  //
  // public readonly nearestDayOfMonth = getCarousel(31, 1);
  //
  // public lastChosenDayOfMonthValue = '1'
  //
  // public readonly afterDayOfWeekListDays = getCarousel(7, 1);
  // public afterDayOfWeekListDaysValue = this.afterDayOfWeekListDays.first;
  // public readonly carouselWeek = getCarouselWeek();
  // public readonly afterNumberOfWeekList = getCarousel(5, 1);
  //
  // public onNumberOfWeekListValue = this.afterNumberOfWeekList.first;
  //
  // public afterDayOfWeekListDayOfWeeksValue = this.carouselWeek.first;
  // public lastChosenDayOfWeekValue2 = this.carouselWeek.first;
  // public lastChosenDayOfWeekValue = this.carouselWeek.first;
  //
  //
  // public readonly afterDayOfMonthListRepeatDays = getCarousel(31, 1);
  // public afterDayOfMonthListRepeatDaysValue = this.afterDayOfMonthListRepeatDays.first;
  // public readonly afterDayOfMonthListDays = getCarousel(31, 1);
  // public afterDayOfMonthListDaysValue = this.afterDayOfMonthListDays.first;
  //
  //
  //
  // public selectedDayOfWeek: string[] = [];
  //
  //
  //
  // public selectedDayOfMonth: string[] = [];
  //
  // public nearestDayOfMonthValue = '1';
  //
  // public readonly items = getArrWithStringNumbers(24);
  //
  //
  // constructor(
  //   public readonly cron: PrizmCronService,
  //   public readonly destroy$: PrizmDestroyService,
  // ) {}
  //
  // ngOnInit(): void {
  //   combineLatest(
  //     [
  //       this.cron.dayOfMonth$,
  //       this.cron.dayOfWeek$,
  //     ]
  //   ).pipe(
  //     map(([day, dayOfWeek]) => prizmConvertDayToType(day, dayOfWeek)),
  //     filter(i => i != this.typeControl.value),
  //     tap((type) => {
  //       this.typeControl.setValue(type);
  //     }),
  //     takeUntil(this.destroy$)
  //   ).subscribe();
  //
  //   this.typeControl.valueChanges.pipe(
  //     distinctUntilChanged(),
  //     tap(
  //       (value: PrizmCronUiDayType) => {
  //         switch (value) {
  //           case PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth:
  //             this.updateNearestDayOfMonth();
  //           break;
  //           case PrizmCronUiDayType.every:
  //             this.cron.updateWith({
  //               dayOfMonth: '?',
  //               dayOfWeek: '*'
  //             });
  //           break;
  //           case PrizmCronUiDayType.afterDayOfWeek:
  //             this.updateAfterDayOfWeek();
  //           break;
  //           case PrizmCronUiDayType.lastDayOfMonth:
  //             this.cron.updateWith({
  //               dayOfMonth: 'L',
  //               dayOfWeek: '?'
  //             });
  //           break;
  //           case PrizmCronUiDayType.lastWeekDayOfMonth:
  //             this.cron.updateWith({
  //               dayOfMonth: 'LW',
  //               dayOfWeek: '?'
  //             });
  //           break;
  //           case PrizmCronUiDayType.lastChosenDaysOfMonth:
  //             this.updateLastChosenDayOfMonth();
  //           break;
  //           case PrizmCronUiDayType.lastChosenDayOfWeek:
  //             this.updateLastChosenDayOfWeek();
  //           break;
  //           case PrizmCronUiDayType.afterDayOfMonth:
  //             this.updateAfterDayOfMonth();
  //           break;
  //           case PrizmCronUiDayType.specifiedDayOfWeek:
  //             this.updateSelectedDayOfWeek();
  //           break;
  //           case PrizmCronUiDayType.specifiedDayOfMonth:
  //             this.updateSelectedDayOfMonth();
  //           break;
  //         }
  //       }
  //     ),
  //     takeUntil(this.destroy$)
  //   ).subscribe()
  // }
  //
  // public updateNearestDayOfMonth(): void {
  //   this.cron.updateWith(
  //     {
  //       dayOfMonth: `${this.nearestDayOfMonthValue}W`,
  //       dayOfWeek: '?'
  //     }
  //   )
  // }
  //
  // public updateAfterDayOfWeek(): void {
  //   const afterDayOfWeekListDaysValue = this.afterDayOfWeekListDaysValue;
  //   const afterDayOfWeekListDayOfWeeksValue = this.afterDayOfWeekListDayOfWeeksValue;
  //   if (!afterDayOfWeekListDayOfWeeksValue) return;
  //   this.cron.updateWith(
  //     {
  //       dayOfMonth: `?`,
  //       dayOfWeek: `${afterDayOfWeekListDayOfWeeksValue}/${afterDayOfWeekListDaysValue}`
  //     }
  //   )
  // }
  //
  // public updateLastChosenDayOfMonth(): void {
  //   const lastChosenDayOfMonthValue = this.lastChosenDayOfMonthValue;
  //   this.cron.updateWith(
  //     {
  //       dayOfWeek: `?`,
  //       dayOfMonth: `L-${lastChosenDayOfMonthValue}`
  //     }
  //   )
  // }
  //
  // public updateLastChosenDayOfWeek(): void {
  //   const onNumberOfWeekListValue = this.onNumberOfWeekListValue;
  //   const lastChosenDayOfWeekValue2 = this.lastChosenDayOfWeekValue2;
  //   this.cron.updateWith(
  //     {
  //       dayOfMonth: `?`,
  //       dayOfWeek: `${lastChosenDayOfWeekValue2}#${onNumberOfWeekListValue}`
  //     }
  //   )
  // }
  //
  // public updateAfterDayOfMonth(): void {
  //   this.cron.updateWith(
  //     {
  //       dayOfWeek: `?`,
  //       dayOfMonth: `${this.afterDayOfMonthListDaysValue}/${this.afterDayOfMonthListRepeatDaysValue}`
  //     }
  //   )
  // }
  //
  // public updateSelectedDayOfWeek(): void {
  //   this.cron.updateWith(
  //     {
  //       dayOfMonth: `?`,
  //       dayOfWeek: this.selectedDayOfWeek.join(',')
  //     }
  //   )
  // }
  //
  // public updateSelectedDayOfMonth(): void {
  //   this.cron.updateWith(
  //     {
  //       dayOfWeek: `?`,
  //       dayOfMonth: [
  //         ...new Set([
  //           '1',
  //           ...this.selectedDayOfMonth
  //         ])
  //       ].join(',')
  //     }
  //   )
  // }

  constructor(public readonly cronUiState: PrizmCronUiDayState) {}
}
