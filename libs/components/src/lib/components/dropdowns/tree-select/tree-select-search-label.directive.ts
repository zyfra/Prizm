import { Directive, inject, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_SEARCH_TEXT } from '../../../tokens/i18n';

@Directive({
  selector: 'prizmInputTreeSelectSearchLabel',
  standalone: true,
  exportAs: 'prizmInputTreeSelectSearch',
  providers: [...prizmI18nInitWithKey(PRIZM_SEARCH_TEXT, 'search')],
})
export class PrizmTreeSelectSearchLabelDirective {
  @Input() set searchLabel(value: string) {
    this.fromInput$.next(value);
  }

  // TODO v5 move logic to function in i18 universal directive
  private readonly fromInput$ = new BehaviorSubject<string | null>(null);
  public readonly fromDictionary = inject(PRIZM_SEARCH_TEXT, {
    self: true,
  });
  public readonly value$ = combineLatest([this.fromDictionary, this.fromInput$]).pipe(
    map(([fromDictionary, fromInput]) => fromInput ?? fromDictionary)
  ) as Observable<string>;
}
