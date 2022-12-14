import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getArrWithStringNumbers, getCarouselWithZero, prizmConvertHourToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiHourType, PrizmCronUiListItem } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronService } from '../../../../services/cron';


@Component({
  selector: 'prizm-cron-hour',
  styleUrls: [
    './hour.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './hour.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronHourComponent implements OnInit {
  public readonly typeControl = new FormControl(PrizmCronUiHourType.every);
  public readonly type = PrizmCronUiHourType;
  public readonly periodRepeat = getCarouselWithZero(24);
  public readonly periodAfter = getCarouselWithZero(24);
  public afterRepeatValue = '01';
  public afterRepeatStart = '01';

  public readonly periodStart = getCarouselWithZero(24);
  public betweenStart = '01';

  public readonly periodEnd = getCarouselWithZero(24);
  public betweenEnd = '00';

  public selected: string[] = ['0'];

  public readonly items: PrizmCronUiListItem[] = getArrWithStringNumbers(60, 0, false).map(
    (i, idx) => ({
      key: i,
      value: idx + 1 + '',
    })
  )

  constructor(
    public readonly cron: PrizmCronService,
    public readonly cronUi: PrizmCronUiService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.cron.hour$.pipe(
      map(i => prizmConvertHourToType(i)),
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiHourType) => {
          switch (value) {
            case PrizmCronUiHourType.between:
              this.updateBetween();
            break;
            case PrizmCronUiHourType.every:
              this.cron.updateWith({
                hour: `*`
              })
            break;
            case PrizmCronUiHourType.specified:
              this.updateSelected();
            break;

            case PrizmCronUiHourType.after:
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
      hour: `${this.afterRepeatStart}/${this.afterRepeatValue}`
    })
  }

  public updateBetween (): void {
    this.cron.updateWith({
      hour: `${this.betweenStart}-${this.betweenEnd}`
    })
  }

  public updateSelected(): void {
    this.cron.updateWith({
      hour: this.selected.join(',')
    })
  }
}
