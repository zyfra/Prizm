import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { PrizmSelectItemService } from './select-item.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[prizmSelectItem]:not(ng-template)',
})
export class PrizmSelectItemDirective<T = any> {
  @Input() value!: T;
  @Input() selectOnClick = true;

  readonly selected$ = this.selectItemService.selected$.pipe(
    map(i => i === this.value),
    distinctUntilChanged()
  );

  constructor(protected readonly selectItemService: PrizmSelectItemService) {}

  @HostBinding('class.selected') get isSelected() {
    return this.selectItemService.selected === this.value;
  }

  @HostListener('click') private onClicked() {
    if (!this.selectOnClick) return;
    this.selectItemService.select(this.value);
  }
}
