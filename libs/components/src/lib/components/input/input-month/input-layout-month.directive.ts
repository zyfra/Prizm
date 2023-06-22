import { Directive, DoCheck, Inject, Self } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmInputMonthComponent } from './input-month.component';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { prizmAsTextfieldHost } from '../../../tokens/textfield-host.tstextfield-host';
import { PrizmHandler } from '../../../types/handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { AbstractPrizmControl } from '../../../abstract/control';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `prizm-input-month`,
  providers: [prizmAsTextfieldHost(PrizmInputLayoutMonthDirective), PrizmDestroyService],
})
export class PrizmInputLayoutMonthDirective
  extends AbstractPrizmTextfieldHost<PrizmInputMonthComponent>
  implements DoCheck
{
  private readonly value$ = new Subject<PrizmMonth | null>();

  private localizedValue = ``;

  constructor(
    @Inject(AbstractPrizmControl) host: PrizmInputMonthComponent,
    @Inject(PRIZM_MONTH_FORMATTER)
    formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
    @Self() @Inject(PrizmDestroyService) destroy$: Observable<unknown>
  ) {
    super(host);

    this.value$
      .pipe(distinctUntilChanged(), switchMap(formatter), takeUntil(destroy$))
      .subscribe(localizedValue => {
        this.localizedValue = localizedValue;
      });
  }

  override get readOnly(): boolean {
    return true;
  }

  override get value(): string {
    return this.localizedValue;
  }

  public ngDoCheck(): void {
    this.value$.next(this.host.value);
  }

  public onValueChange(value: string): void {
    this.host.onValueChange(value);
  }
}
