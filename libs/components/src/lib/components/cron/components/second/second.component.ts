import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getArrWithStringNumbers, getCarouselWithZero, prizmConvertMinuteToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiListItem, PrizmCronUiMinuteType } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronUiListService } from '../../cron-ui-list.service';
import { PrizmCronService } from '../../../../services/cron';


@Component({
  selector: 'prizm-cron-second',
  styleUrls: [
    './second.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './second.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronSecondComponent implements OnInit {
  public readonly typeControl = new FormControl(PrizmCronUiMinuteType.every);
  public readonly type = PrizmCronUiMinuteType;
  public readonly periodRepeat = getCarouselWithZero(60);
  public readonly periodAfter = getCarouselWithZero(60);
  public afterRepeatValue = '01';
  public afterRepeatStart = '01';

  public readonly periodStart = getCarouselWithZero(60);
  public betweenStart = '01';

  public readonly periodEnd = getCarouselWithZero(60);
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
    public readonly list: PrizmCronUiListService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.cron.second$.pipe(
      map(i => prizmConvertMinuteToType(i)),
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiMinuteType) => {
          switch (value) {
            case PrizmCronUiMinuteType.between:
              this.updateBetween();
            break;
            case PrizmCronUiMinuteType.every:
              this.cron.updateWith({
                second: `*`
              })
            break;
            case PrizmCronUiMinuteType.specified:
              this.updateSelected();
            break;

            case PrizmCronUiMinuteType.after:
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
      second: `${this.afterRepeatStart}/${this.afterRepeatValue}`
    })
  }

  public updateBetween (): void {
    this.cron.updateWith({
      second: `${this.betweenStart}-${this.betweenEnd}`
    })
  }

  public updateSelected(): void {
    this.cron.updateWith({
      second: this.selected.join(',')
    })
  }
}
