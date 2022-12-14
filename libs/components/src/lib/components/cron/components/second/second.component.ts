import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getArrWithStringNumbers, getCarousel, getCarouselWithZero, prizmConvertSecondToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiListItem, PrizmCronUiSecondType } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronService } from '../../../../services/cron';
import { combineLatest, Observable, of } from 'rxjs';


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
  public readonly typeControl = new FormControl(PrizmCronUiSecondType.every);
  public readonly type = PrizmCronUiSecondType;
  public readonly periodRepeat = getCarouselWithZero(60);
  public readonly periodAfter = getCarouselWithZero(60);
  public afterRepeatValue = '01';
  public afterRepeatStart = '01';

  public readonly periodStart = getCarousel(60, 0);
  // public betweenStart = '01';

  public readonly periodEnd = getCarousel(60, 0);
  // public betweenEnd = '00';

  public readonly items: PrizmCronUiListItem[] = getArrWithStringNumbers(60, 0, false).map(
    (i, idx) => ({
      key: i,
      value: idx + 1 + '',
    })
  )


  public readonly current$ = this.cron.second$;
  public readonly type$ = this.current$.pipe(
    map(i => prizmConvertSecondToType(i))
  );
  public selected$: Observable<string[]> = combineLatest(
    [
      this.current$,
      this.type$
    ]
  ).pipe(
    switchMap(([current, type]) => {
      return of(
        type === PrizmCronUiSecondType.specified
        ? current.split(',')
        : []
      )
    })
  );

  // betweenStart
  // betweenEnd
  public between$: Observable<[string, string]> = this.current$.pipe(
    switchMap((current) => {
      let end = parseInt(this.periodEnd.first, 10).toString();
      let start =  parseInt(this.periodStart.first, 10).toString();;
      const type = prizmConvertSecondToType(current);
      if (type === PrizmCronUiSecondType.between) {
        const arr = current.split('-');
        end = arr[1] ?? end;
        start = arr[0] ?? start;
      }

      return of([
          start,
          end,
      ] as [string, string])
    })
  );



  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.type$.pipe(
      filter(i => i != this.typeControl.value),
      tap((type) => {
        this.typeControl.setValue(type);
      }),
      takeUntil(this.destroy$)
    ).subscribe();


    this.typeControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap(
        (value: PrizmCronUiSecondType) => {
          switch (value) {
            case PrizmCronUiSecondType.between:
              this.between$.pipe(
                take(1),
                tap(([start, end]) => {
                  this.updateBetween(start, end);
                })
              ).subscribe()
            break;
            case PrizmCronUiSecondType.every:
              this.cron.updateWith({
                second: `*`
              })
            break;
            case PrizmCronUiSecondType.specified:
              this.cron.second$.pipe(
                take(1),
                tap((value) => {
                  this.updateSelected(value.split(','));
                }),
              ).subscribe()

            break;

            case PrizmCronUiSecondType.after:
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

  public updateBetween (
    start: string,
    end: string,
  ): void {
    this.cron.updateWith({
      second: `${start}-${end}`
    })
  }

  public updateSelected(selected: string[]): void {
    this.cron.updateWith({
      second: selected.join(',')
    });
  }
}
