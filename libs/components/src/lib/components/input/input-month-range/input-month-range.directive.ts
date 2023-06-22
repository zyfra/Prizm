import { Directive, DoCheck, Inject, Self } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmAsTextfieldHost } from '../../../tokens/textfield-host.tstextfield-host';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PrizmHandler } from '../../../types/handler';
import { PrizmMonth } from '../../../@core/date-time/month';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `prizm-input-month-range`,
  providers: [prizmAsTextfieldHost(PrizmInputMonthRangeDirective), PrizmDestroyService],
})
export class PrizmInputMonthRangeDirective
  extends AbstractPrizmTextfieldHost<PrizmInputMonthRangeComponent>
  implements DoCheck
{
  private readonly value$ = new Subject<PrizmMonthRange | null>();

  private localizedValue: [string, string] = [``, ``];

  constructor(
    @Inject(AbstractPrizmControl) host: PrizmInputMonthRangeComponent,
    @Inject(PRIZM_MONTH_FORMATTER)
    formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
    @Self() @Inject(PrizmDestroyService) destroy$: Observable<unknown>
  ) {
    super(host);

    this.value$
      .pipe(
        distinctUntilChanged(),
        switchMap((value: PrizmMonthRange | null) =>
          combineLatest([formatter(value?.from || null), formatter(value?.to || null)])
        ),
        takeUntil(destroy$)
      )
      .subscribe(localizedValue => {
        this.localizedValue = localizedValue;
      });
  }

  public override get readOnly(): boolean {
    return true;
  }

  public override get value(): string {
    return this.localizedValue[0] ? this.host.computeValue(...this.localizedValue) : ``;
  }

  public ngDoCheck(): void {
    this.value$.next(this.host.value);
  }

  public onValueChange(value: string): void {
    this.host.onValueChange(value);
  }
}
