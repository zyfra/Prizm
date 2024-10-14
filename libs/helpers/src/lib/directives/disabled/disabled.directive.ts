import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[prizmDisabled]',
  standalone: true,
})
export class PrizmDisabledDirective {
  private _disabled = false;

  @Input()
  @HostBinding('attr.disabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    this.disabledChange.emit(this._disabled);
  }

  @Output() disabledChange = new EventEmitter<boolean>();
}
