import { Directive, inject, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { PrizmTreeSelectSelectedDirective } from './tree-select-selected.directive';

@Directive({
  selector: '[prizmInputTreeSelectStringify]',
  standalone: true,
})
export class PrizmTreeSelectStringifyDirective<T = any> {
  @Input() stringify = (a: T | null): string | null => a?.toString() ?? '';
  private readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);

  readonly stringifiedSelected$ = this.treeSelectSelectedDirective.selected$.pipe(
    map(selected => (selected ? this.stringify(selected) : null))
  );
}
