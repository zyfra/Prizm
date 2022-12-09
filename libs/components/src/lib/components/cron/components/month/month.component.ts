import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getCarouselWithMonth, getCarouselWithZero, prizmConvertMonthToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiListItem, PrizmCronUiMonthType } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronUiListService } from '../../cron-ui-list.service';
import { PrizmCronService } from '../../../../services/cron';
import { PRIZM_CRON_UI_MONTH_CRON_KEYS, PRIZM_CRON_UI_MONTH_SHORT_OBJ } from '../../const';


@Component({
  selector: 'prizm-cron-month',
  styleUrls: [
    './month.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './month.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronMonthComponent implements OnInit {
  public readonly typeControl = new FormControl(PrizmCronUiMonthType.every);
  public readonly type = PrizmCronUiMonthType;
  public readonly periodRepeat = getCarouselWithZero(12);
  public readonly periodAfter = getCarouselWithMonth();
  public afterRepeatValue = '01';
  public afterRepeatStart = 'Январь';

  public readonly periodStart = getCarouselWithMonth();
  public betweenStart = 'Январь';

  public readonly periodEnd = getCarouselWithMonth();
  public betweenEnd = 'Январь';

  public selected: string[] = [
    PRIZM_CRON_UI_MONTH_CRON_KEYS[0]
  ];

  public readonly items: PrizmCronUiListItem[] = Object.values(PRIZM_CRON_UI_MONTH_SHORT_OBJ).map(
    (value, idx) => ({
      key: PRIZM_CRON_UI_MONTH_CRON_KEYS[idx],
      value,
    })
  )

  constructor(
    public readonly cron: PrizmCronService,
    public readonly cronUi: PrizmCronUiService,
    public readonly list: PrizmCronUiListService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.cron.month$.pipe(
      map(i => prizmConvertMonthToType(i)),
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiMonthType) => {
          switch (value) {
            case PrizmCronUiMonthType.between:
              this.updateBetween();
            break;
            case PrizmCronUiMonthType.every:
              this.cron.updateWith({
                month: `*`
              })
            break;
            case PrizmCronUiMonthType.specified:
              this.updateSelected();
            break;

            case PrizmCronUiMonthType.after:
              this.updateAfter();
            break;
          }
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  public updateAfter(): void {
    this.cron.updateWith({
      month: `${this.afterRepeatStart}/${this.afterRepeatValue}`
    })
  }

  public updateBetween (): void {
    this.cron.updateWith({
      month: `${this.betweenStart}-${this.betweenEnd}`
    })
  }

  public updateSelected(): void {
    this.cron.updateWith({
      month: this.selected.join(',')
    })
  }
}
