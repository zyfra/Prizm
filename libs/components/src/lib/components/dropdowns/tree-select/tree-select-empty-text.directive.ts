import { Directive, inject, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_EMPTY_LIST_TEXT } from '../../../tokens/i18n';
import { PolymorphContent } from '../../../directives/polymorph/types/content';

@Directive({
  selector: 'prizmInputTreeSelectEmptyText',
  standalone: true,
  exportAs: 'prizmInputTreeSelectSearch',
  providers: [...prizmI18nInitWithKey(PRIZM_EMPTY_LIST_TEXT, 'emptyListText')],
})
export class PrizmTreeSelectEmptyTextDirective {
  @Input() set emptyListTemplate(value: PolymorphContent) {
    this.fromInput$.next(value);
  }

  // TODO v5 move logic to function in i18 universal directive
  private readonly fromInput$ = new BehaviorSubject<PolymorphContent | null>(null);
  public readonly fromDictionary = inject(PRIZM_EMPTY_LIST_TEXT, {
    self: true,
  });
  public readonly value$ = combineLatest([this.fromDictionary, this.fromInput$]).pipe(
    map(([fromDictionary, fromInput]) => fromInput ?? fromDictionary)
  ) as Observable<PolymorphContent>;
}
