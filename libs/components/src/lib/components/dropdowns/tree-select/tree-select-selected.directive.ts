import { Directive, EventEmitter, inject, Input, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject } from 'rxjs';
import { map, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmTreeSelectIdentityMatcherDirective } from './tree-select-identity-matcher.directive';

@Directive({
  selector: '[prizmInputTreeSelectSelected]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmTreeSelectSelectedDirective<T = any> {
  private readonly destroy = inject(PrizmDestroyService);
  private readonly treeSelectIdentityMatcherDirective = inject(PrizmTreeSelectIdentityMatcherDirective);
  private readonly selected$$ = new BehaviorSubject<T | any>(null);
  public readonly selected$ = this.selected$$;

  @Input() get value() {
    return this.selected$$.value;
  }
  set value(value: T | null) {
    this.selected$$.next(value);
  }

  @Output() valueChange = new EventEmitter();

  constructor() {
    this.selected$$
      .pipe(
        skip(1),
        tap(() => this.valueChange.emit(this.value)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public isSelected(item: T) {
    console.log('#mz isSelected:1', item);
    return this.selected$$.pipe(
      tap(selected => {
        console.log('#mz isSelected:2', { item, selected });
      }),
      map(selected => this.treeSelectIdentityMatcherDirective.identityMatcher(selected, item)),
      tap(result => {
        console.log('#mz isSelected:3"result', result);
      })
    );
  }
}
