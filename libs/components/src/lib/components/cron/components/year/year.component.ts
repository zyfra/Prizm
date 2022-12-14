import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getArrWithStringNumbers, getCarousel, getCarouselWithZero, prizmConvertYearToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiListItem, PrizmCronUiYearType } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronService } from '../../../../services/cron';


@Component({
  selector: 'prizm-cron-year',
  styleUrls: [
    './year.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronYearComponent implements OnInit {
  public readonly typeControl = new FormControl(PrizmCronUiYearType.every);
  public readonly type = PrizmCronUiYearType;
  public readonly periodRepeat = getCarouselWithZero(83);

  public readonly currentYear = new Date().getFullYear();
  public readonly periodAfter = getCarousel(50, this.currentYear);
  public afterRepeatValue = '01';
  public afterRepeatStart = this.currentYear + '';

  public readonly periodStart = getCarousel(50, this.currentYear);
  public betweenStart = this.currentYear + '';

  public readonly periodEnd = getCarousel(50, this.currentYear);
  public betweenEnd = this.currentYear + 1 + '';

  public selected: string[] = [this.currentYear + ''];

  public readonly items: PrizmCronUiListItem[] = getArrWithStringNumbers(50, this.currentYear, false).map(
    (i, idx) => ({
      key: i,
      value: i,
    })
  )

  constructor(
    public readonly cron: PrizmCronService,
    public readonly cronUi: PrizmCronUiService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.cron.year$.pipe(
      map(i => prizmConvertYearToType(i)),
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiYearType) => {
          switch (value) {
            case PrizmCronUiYearType.between:
              this.updateBetween();
            break;
            case PrizmCronUiYearType.every:
              this.cron.updateWith({
                year: `*`
              })
            break;
            case PrizmCronUiYearType.specified:
              this.updateSelected();
            break;

            case PrizmCronUiYearType.after:
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
      year: `${this.afterRepeatStart}/${this.afterRepeatValue}`
    })
  }

  public updateBetween (): void {
    this.cron.updateWith({
      year: `${this.betweenStart}-${this.betweenEnd}`
    })
  }

  public updateSelected(): void {
    this.cron.updateWith({
      year: this.selected.join(',')
    })
  }
}
