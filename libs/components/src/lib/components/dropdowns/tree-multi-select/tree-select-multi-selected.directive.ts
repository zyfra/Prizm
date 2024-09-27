import { Directive, EventEmitter, inject, Input, Output } from '@angular/core';
import { Compare, PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject } from 'rxjs';
import { map, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmTreeSelectGetChildrenDirective } from '../tree-select/tree-select-get-children.directive';
import { PrizmTreeSelectIdentityMatcherDirective } from '../tree-select/tree-select-identity-matcher.directive';

@Directive({
  selector: '[prizmInputTreeMultiSelectSelected]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmTreeMultiSelectSelectedDirective<K, T extends K[] = K[]> {
  private readonly destroy = inject(PrizmDestroyService);
  private readonly treeSelectGetChildrenDirective = inject(PrizmTreeSelectGetChildrenDirective);
  private readonly treeSelectIdentityMatcherDirective = inject(PrizmTreeSelectIdentityMatcherDirective);
  private readonly selected$$ = new BehaviorSubject<T[] | null>(null);
  public readonly selected$ = this.selected$$;

  @Input() get value() {
    return this.selected$$.value;
  }
  set value(value: T[] | null) {
    if (Compare.isNullish(value)) this.selected$$.next(null);
    else if (Array.isArray(value)) {
      this.selected$$.next(value);
    } else {
      console.error('You want to set not array to tree multi select');
    }
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

  public _isSelected(isSelected: T): boolean {
    if (this.isSelfSelected(isSelected)) {
      return true;
    }

    return this.hasSelectedChildren(isSelected);
  }
  public isSelfSelected(isSelected: T): boolean {
    const selectedItems = this.selected$$.getValue();
    if (!selectedItems || !Array.isArray(selectedItems)) return false;

    const foundItem = selectedItems.find(item =>
      this.treeSelectIdentityMatcherDirective.identityMatcher(isSelected, item)
    );

    return !!foundItem;
  }

  public clear() {
    this.value = [];
  }
  public add(item: T) {
    this.value = [...(this.value ?? []), item];
  }

  public unselect(item: T) {
    if (!this.value) return;

    this.value = this.value.filter(i => i !== item);
  }

  public hasSelectedChildren(item: T): boolean {
    return Boolean(
      Compare.isNotNullish(this.selected$$.getValue()) &&
        this.treeSelectGetChildrenDirective
          .getChildren(item)
          .find(item => this._isSelected(item) || this.hasSelectedChildren(item))
    );
  }
  public hasAllSelectedChildren(item: T): boolean {
    if (!Compare.isNotNullish(this.selected$$.getValue())) return false;
    const children = this.treeSelectGetChildrenDirective.getChildren(item);

    if (!children?.length) return true;

    return children.every(item => this.isSelfSelected(item));
  }
}
