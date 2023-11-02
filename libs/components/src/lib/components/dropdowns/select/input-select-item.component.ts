import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import {
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmToObservablePipe,
} from '@prizm-ui/helpers';
import { PolymorphOutletDirective } from '../../../directives/polymorph';
import { PrizmInputSelectOptionDirective } from './input-select-option.directive';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmHintDirective } from '../../../directives';
import { PrizmSelectInputComponent } from './input-select.component';

@Component({
  selector: 'prizm-input-select-item',
  templateUrl: './input-select-item.component.html',
  styleUrls: ['./input-select-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    PrizmInputSelectOptionDirective,
    PrizmCallFuncPipe,
    PrizmLetDirective,
    PrizmHintDirective,
    PolymorphOutletDirective,
    PrizmToObservablePipe,
    AsyncPipe,
  ],
  providers: [PrizmDestroyService],
  exportAs: 'prizmSelectInputItem',
})
export class PrizmSelectInputItemComponent<T> {
  @Input() item!: T;
  readonly parent = inject(PrizmSelectInputComponent);

  public isMostRelevant(items: T[]): boolean {
    const idx = this.parent.items.findIndex(i => this.item === i);
    const wroteInputValue = this.parent.printing$.value;
    const valueFromItems = this.parent.value && this.parent.getValueFromItems(this.parent.value, items);
    const itIsNotCurrentValue =
      valueFromItems && wroteInputValue && !this.parent.searchMatcher(wroteInputValue, valueFromItems);
    const isCanSearch = this.parent.searchable;
    const hasNullValue = items[0] === null;
    const result =
      isCanSearch && itIsNotCurrentValue && ((hasNullValue && idx === 1) || (!hasNullValue && idx === 0));

    return !!result;
  }
}
