import { Directive, EventEmitter, inject, Input, Output } from '@angular/core';
import { Compare, PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject } from 'rxjs';
import { map, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmTreeSelectIdentityMatcherDirective } from './tree-select-identity-matcher.directive';
import { PrizmTreeSelectGetChildrenDirective } from './tree-select-get-children.directive';

@Directive({
  selector: '[prizmInputTreeSelectSelected]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmTreeSelectSelectedDirective<T = any> {
  private readonly destroy = inject(PrizmDestroyService);
  private readonly treeSelectGetChildrenDirective = inject(PrizmTreeSelectGetChildrenDirective);
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
    return this.selected$$.pipe(map(() => this._isSelected(item)));
  }

  private _isSelected(selected: T) {
    return this.treeSelectIdentityMatcherDirective.identityMatcher(this.selected$$.getValue(), selected);
  }

  public hasSelectedChildren(item: T): boolean {
    return Boolean(
      Compare.isNotNullish(this.selected$$.getValue()) &&
        this.treeSelectGetChildrenDirective
          .getChildren(item)
          .find(item => this._isSelected(item) || this.hasSelectedChildren(item))
    );
  }
}
