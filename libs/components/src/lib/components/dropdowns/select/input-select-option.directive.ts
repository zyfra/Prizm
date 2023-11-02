import { Directive, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { PrizmInputSelectOptionService } from './input-select-option.service';

@Directive({
  selector: '[prizmInputSelectOption]',
  exportAs: 'prizmInputSelectOption',
  standalone: true,
})
export class PrizmInputSelectOptionDirective<T = any> {
  @Input() value!: T;
  @Output() selected = new EventEmitter();
  private inputSelectOptionService: PrizmInputSelectOptionService<T> | null = inject(
    PrizmInputSelectOptionService,
    {
      optional: true,
    }
  );

  @HostListener('click', ['$event']) public onClick(event: MouseEvent) {
    this.selected.next(this.value);
    this.inputSelectOptionService?.selected(this.value);
  }
}
