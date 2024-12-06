import { Directive, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { PrizmComboboxOptionService } from './combobox-option.service';

@Directive({
  selector: '[prizmComboboxOption]',
  exportAs: 'prizmComboboxOption',
  standalone: true,
})
export class PrizmComboboxOptionDirective<T = any> {
  @Input() value!: T;
  @Output() selected = new EventEmitter();
  private inputSelectOptionService: PrizmComboboxOptionService<T> | null = inject(
    PrizmComboboxOptionService,
    {
      optional: true,
    }
  );

  @HostListener('click', ['$event']) public onClick(event: MouseEvent) {
    this.selected.next(this.value);
    this.inputSelectOptionService?.selected(this.value);
  }
}
